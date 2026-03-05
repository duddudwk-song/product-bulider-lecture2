// Teachable Machine Model URL
const URL = "https://teachablemachine.withgoogle.com/models/MFBoR-ZMZ/";

let model, maxPredictions;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const contactScreen = document.getElementById('contact-screen');

const uploadArea = document.getElementById('upload-area');
const imageInput = document.getElementById('image-input');
const faceImage = document.getElementById('face-image');
const analysisDetails = document.getElementById('analysis-details');

const resultEmoji = document.getElementById('result-emoji');
const resultAnimalName = document.getElementById('result-animal-name');
const resultDescription = document.getElementById('result-description');

const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const themeToggle = document.getElementById('theme-toggle');
const contactBtn = document.getElementById('contact-btn');
const contactBackBtn = document.getElementById('contact-back-btn');

// Result Data
const animalInfo = {
    "강아지": {
        emoji: "🐶",
        name: "강아지상",
        description: "다정다감하고 사교적인 성격! 보는 사람으로 하여금 미소 짓게 만드는 긍정적인 에너지를 가지고 계시네요. 충성심이 강하고 주변 사람들을 잘 챙기는 따뜻한 마음의 소유자입니다."
    },
    "고양이": {
        emoji: "🐱",
        name: "고양이상",
        description: "도도하고 세련된 매력의 소유자! 첫인상은 차가워 보일 수 있지만, 알면 알수록 깊은 매력에 빠져들게 만드는 '츤데레' 스타일이시군요. 독립심이 강하고 자기 주관이 뚜렷합니다."
    }
};

// Event Listeners
uploadArea.addEventListener('click', () => imageInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) handleImageUpload(files[0]);
});

imageInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleImageUpload(e.target.files[0]);
});

restartBtn.addEventListener('click', () => showScreen(startScreen));
themeToggle.addEventListener('click', toggleTheme);
contactBtn.addEventListener('click', () => showScreen(contactScreen));
contactBackBtn.addEventListener('click', () => showScreen(startScreen));

// Load Model
async function initModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
}

async function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = async () => {
            faceImage.src = img.src;
            showScreen(loadingScreen);
            
            if (!model) await initModel();
            
            const prediction = await model.predict(img);
            displayResult(prediction);
        };
    };
    reader.readAsDataURL(file);
}

function displayResult(prediction) {
    // Sort predictions by probability
    prediction.sort((a, b) => b.probability - a.probability);
    
    const topResult = prediction[0].className; // "강아지" or "고양이"
    const info = animalInfo[topResult] || { emoji: "❓", name: topResult, description: "분석 완료!" };

    resultEmoji.textContent = info.emoji;
    resultAnimalName.textContent = info.name;
    resultDescription.textContent = info.description;

    // Render Progress Bars
    analysisDetails.innerHTML = '';
    prediction.forEach(p => {
        const className = p.className === "강아지" ? "dog" : "cat";
        const percent = Math.round(p.probability * 100);
        
        const barHtml = `
            <div class="bar-container ${className}">
                <div class="bar-label">
                    <span>${p.className}상</span>
                    <span>${percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
        analysisDetails.insertAdjacentHTML('beforeend', barHtml);
    });

    showScreen(resultScreen);
}

function showScreen(screen) {
    [startScreen, loadingScreen, resultScreen, contactScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);

    if (typeof DISQUS !== 'undefined') {
        DISQUS.reset({ reload: true });
    }
}

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

initTheme();
// Initialize model in background
initModel();
