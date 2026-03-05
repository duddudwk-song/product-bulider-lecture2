// Actor Data (64 Candidates)
// Note: In a real production app, images would be hosted on a CDN.
// Here we use placeholders with names for demonstration.
const actors = [
    { name: "송강", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "차은우", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "현빈", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "공유", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "이민호", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Min-ho" },
    { name: "박서준", img: "https://placehold.co/400x500/706fd3/ffffff?text=Park+Seo-joon" },
    { name: "이종석", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Jong-suk" },
    { name: "지창욱", img: "https://placehold.co/400x500/706fd3/ffffff?text=Ji+Chang-wook" },
    { name: "김수현", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Soo-hyun" },
    { name: "박보검", img: "https://placehold.co/400x500/706fd3/ffffff?text=Park+Bo-gum" },
    { name: "송중기", img: "https://placehold.co/400x500/706fd3/ffffff?text=Song+Joong-ki" },
    { name: "남주혁", img: "https://placehold.co/400x500/706fd3/ffffff?text=Nam+Joo-hyuk" },
    { name: "안효섭", img: "https://placehold.co/400x500/706fd3/ffffff?text=Ahn+Hyo-seop" },
    { name: "이동욱", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Dong-wook" },
    { name: "주지훈", img: "https://placehold.co/400x500/706fd3/ffffff?text=Ju+Ji-hoon" },
    { name: "조인성", img: "https://placehold.co/400x500/706fd3/ffffff?text=Jo+In-sung" },
    { name: "강동원", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kang+Dong-won" },
    { name: "원빈", img: "https://placehold.co/400x500/706fd3/ffffff?text=Won+Bin" },
    { name: "소지섭", img: "https://placehold.co/400x500/706fd3/ffffff?text=So+Ji-sub" },
    { name: "장동건", img: "https://placehold.co/400x500/706fd3/ffffff?text=Jang+Dong-gun" },
    { name: "이정재", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Jung-jae" },
    { name: "정우성", img: "https://placehold.co/400x500/706fd3/ffffff?text=Jung+Woo-sung" },
    { name: "김우빈", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Woo-bin" },
    { name: "이준기", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Joon-gi" },
    { name: "박형식", img: "https://placehold.co/400x500/706fd3/ffffff?text=Park+Hyung-sik" },
    { name: "육성재", img: "https://placehold.co/400x500/706fd3/ffffff?text=Yook+Sung-jae" },
    { name: "로운", img: "https://placehold.co/400x500/706fd3/ffffff?text=Rowoon" },
    { name: "이도현", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Do-hyun" },
    { name: "황민현", img: "https://placehold.co/400x500/706fd3/ffffff?text=Hwang+Min-hyun" },
    { name: "옹성우", img: "https://placehold.co/400x500/706fd3/ffffff?text=Ong+Seong-wu" },
    { name: "서강준", img: "https://placehold.co/400x500/706fd3/ffffff?text=Seo+Kang-joon" },
    { name: "여진구", img: "https://placehold.co/400x500/706fd3/ffffff?text=Yeo+Jin-goo" },
    { name: "유승호", img: "https://placehold.co/400x500/706fd3/ffffff?text=Yoo+Seung-ho" },
    { name: "임시완", img: "https://placehold.co/400x500/706fd3/ffffff?text=Im+Si-wan" },
    { name: "도경수", img: "https://placehold.co/400x500/706fd3/ffffff?text=D.O." },
    { name: "이수혁", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Soo-hyuk" },
    { name: "위하준", img: "https://placehold.co/400x500/706fd3/ffffff?text=Wi+Ha-joon" },
    { name: "김선호", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Seon-ho" },
    { name: "정해인", img: "https://placehold.co/400x500/706fd3/ffffff?text=Jung+Hae-in" },
    { name: "변우석", img: "https://placehold.co/400x500/706fd3/ffffff?text=Byeon+Woo-seok" },
    { name: "이재욱", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Jae-wook" },
    { name: "김영대", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Young-dae" },
    { name: "김민규", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Min-kyu" },
    { name: "채종협", img: "https://placehold.co/400x500/706fd3/ffffff?text=Chae+Jong-hyeop" },
    { name: "탕준상", img: "https://placehold.co/400x500/706fd3/ffffff?text=Tang+Jun-sang" },
    { name: "배인혁", img: "https://placehold.co/400x500/706fd3/ffffff?text=Bae+In-hyuk" },
    { name: "문상민", img: "https://placehold.co/400x500/706fd3/ffffff?text=Moon+Sang-min" },
    { name: "최현욱", img: "https://placehold.co/400x500/706fd3/ffffff?text=Choi+Hyun-wook" },
    { name: "신승호", img: "https://placehold.co/400x500/706fd3/ffffff?text=Shin+Seung-ho" },
    { name: "김도완", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Do-wan" },
    { name: "려운", img: "https://placehold.co/400x500/706fd3/ffffff?text=Ryeoun" },
    { name: "이채민", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Chae-min" },
    { name: "김지훈", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Ji-hoon" },
    { name: "김범", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Bum" },
    { name: "이진욱", img: "https://placehold.co/400x500/706fd3/ffffff?text=Lee+Jin-wook" },
    { name: "유연석", img: "https://placehold.co/400x500/706fd3/ffffff?text=Yoo+Yeon-seok" },
    { name: "손석구", img: "https://placehold.co/400x500/706fd3/ffffff?text=Son+Suk-ku" },
    { name: "박해진", img: "https://placehold.co/400x500/706fd3/ffffff?text=Park+Hae-jin" },
    { name: "서인국", img: "https://placehold.co/400x500/706fd3/ffffff?text=Seo+In-guk" },
    { name: "장기용", img: "https://placehold.co/400x500/706fd3/ffffff?text=Jang+Ki-yong" },
    { name: "우도환", img: "https://placehold.co/400x500/706fd3/ffffff?text=Woo+Do-hwan" },
    { name: "양세종", img: "https://placehold.co/400x500/706fd3/ffffff?text=Yang+Se-jong" },
    { name: "정일우", img: "https://placehold.co/400x500/706fd3/ffffff?text=Jung+Il-woo" },
    { name: "김재욱", img: "https://placehold.co/400x500/706fd3/ffffff?text=Kim+Jae-wook" }
];

// State
let candidates = [];
let nextRoundCandidates = [];
let currentRound = 64; // 64, 32, 16, 8, 4, 2
let matchIndex = 0; // 0 to 31 (for 64 round)

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const winnerScreen = document.getElementById('winner-screen');
const contactScreen = document.getElementById('contact-screen');

const roundBadge = document.getElementById('round-badge');
const progressFill = document.getElementById('progress-fill');
const matchCount = document.getElementById('match-count');

const candidate1 = document.getElementById('candidate-1');
const candidate2 = document.getElementById('candidate-2');

const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const name1 = document.getElementById('name-1');
const name2 = document.getElementById('name-2');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const themeToggle = document.getElementById('theme-toggle');
const contactBtn = document.getElementById('contact-btn');
const contactBackBtn = document.getElementById('contact-back-btn');

// Event Listeners
startBtn.addEventListener('click', initGame);
candidate1.addEventListener('click', () => selectWinner(0));
candidate2.addEventListener('click', () => selectWinner(1));
restartBtn.addEventListener('click', resetGame);
shareBtn.addEventListener('click', shareResult);
themeToggle.addEventListener('click', toggleTheme);
contactBtn.addEventListener('click', () => showScreen(contactScreen));
contactBackBtn.addEventListener('click', () => showScreen(startScreen));

// Contact Form AJAX Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const contactSubmit = document.getElementById('contact-submit');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // UI state while sending
    contactSubmit.disabled = true;
    contactSubmit.textContent = '보내는 중...';
    formStatus.classList.add('hidden');
    formStatus.classList.remove('success', 'error');

    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.textContent = '문의가 성공적으로 전달되었습니다. 감사합니다!';
            formStatus.classList.remove('hidden');
            formStatus.classList.add('success');
            contactForm.reset();
        } else {
            const data = await response.json();
            throw new Error(data.error || '오류가 발생했습니다.');
        }
    } catch (error) {
        formStatus.textContent = error.message || '서버와의 통신에 실패했습니다. 다시 시도해 주세요.';
        formStatus.classList.remove('hidden');
        formStatus.classList.add('error');
    } finally {
        contactSubmit.disabled = false;
        contactSubmit.textContent = '문의 보내기';
    }
});

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

    // Reset Disqus for theme change if it's loaded
    if (typeof DISQUS !== 'undefined') {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = window.location.pathname;
                this.page.url = window.location.href;
            }
        });
    }
}

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Initialize theme on load
initTheme();

// Functions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initGame() {
    candidates = shuffle([...actors]); // Copy and shuffle
    currentRound = 64;
    nextRoundCandidates = [];
    matchIndex = 0;

    showScreen(gameScreen);
    renderMatch();
}

function renderMatch() {
    // Check if round is over
    if (matchIndex >= candidates.length / 2) {
        proceedToNextRound();
        return;
    }

    const c1 = candidates[matchIndex * 2];
    const c2 = candidates[matchIndex * 2 + 1];

    // Update Text
    roundBadge.textContent = currentRound === 2 ? '결승전' : `${currentRound}강`;
    matchCount.textContent = `${matchIndex + 1} / ${currentRound / 2}`;
    
    // Update Progress
    const progress = (matchIndex / (currentRound / 2)) * 100;
    progressFill.style.width = `${progress}%`;

    // Render Cards
    name1.textContent = c1.name;
    img1.src = c1.img;
    img1.onerror = () => { img1.src = `https://placehold.co/400x500/706fd3/ffffff?text=${encodeURIComponent(c1.name)}`; };
    
    name2.textContent = c2.name;
    img2.src = c2.img;
    img2.onerror = () => { img2.src = `https://placehold.co/400x500/706fd3/ffffff?text=${encodeURIComponent(c2.name)}`; };

    // Reset Animations (Remove existing fade-in/out classes)
    candidate1.classList.remove('fade-out', 'fade-in');
    candidate2.classList.remove('fade-out', 'fade-in');
}

function selectWinner(winnerIndex) {
    const winner = winnerIndex === 0 ? candidates[matchIndex * 2] : candidates[matchIndex * 2 + 1];
    nextRoundCandidates.push(winner);
    
    matchIndex++;
    
    // Simple transition effect
    renderMatch();
}

function proceedToNextRound() {
    if (currentRound === 2) {
        showWinner(nextRoundCandidates[0]);
        return;
    }

    // Prepare for next round
    candidates = shuffle([...nextRoundCandidates]);
    nextRoundCandidates = [];
    currentRound = currentRound / 2;
    matchIndex = 0;

    renderMatch();
}

function showWinner(winner) {
    showScreen(winnerScreen);
    
    document.getElementById('winner-name').textContent = winner.name;
    document.getElementById('winner-img').src = winner.img;
    
    // Confetti Effect (Simple CSS or JS based implementation could go here)
    createConfetti();
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    screen.classList.remove('hidden');
    screen.classList.add('active');
}

function resetGame() {
    showScreen(startScreen);
}

function shareResult() {
    const winnerName = document.getElementById('winner-name').textContent;
    const text = `나의 이상형 월드컵 우승자는 ${winnerName}입니다! 당신의 선택은?`;
    
    if (navigator.share) {
        navigator.share({
            title: '한국 남배우 이상형 월드컵',
            text: text,
            url: window.location.href,
        }).catch((error) => console.log('Error sharing', error));
    } else {
        alert('링크가 복사되었습니다!');
        navigator.clipboard.writeText(`${text} ${window.location.href}`);
    }
}

// Simple Confetti
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    container.innerHTML = ''; // Clear old

    const colors = ['#f0932b', '#eb4d4b', '#6ab04c', '#7ed6df', '#e056fd', '#686de0'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = Math.random();
        
        // Random Animation
        const duration = Math.random() * 3 + 2;
        confetti.style.transition = `top ${duration}s linear, transform ${duration}s ease-in-out`;
        
        container.appendChild(confetti);

        // Trigger animation
        setTimeout(() => {
            confetti.style.top = '100%';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 100);
    }
}
