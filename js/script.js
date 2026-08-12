// Theme mode toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggle');
    const modeText = themeBtn.querySelector('.mode-text');
    const body = document.body;

    const themes = ['theme-dual', 'theme-conan-only', 'theme-kid-only'];
    const themeLabels = ['Chế độ: Cả Hai', 'Chế độ: Conan', 'Chế độ: Kaito Kid'];
    let currentIdx = 0;

    themeBtn.addEventListener('click', () => {
        // Remove current theme class
        body.classList.remove(themes[currentIdx]);
        
        // Next index
        currentIdx = (currentIdx + 1) % themes.length;
        
        // Add new class & text
        body.classList.add(themes[currentIdx]);
        modeText.textContent = themeLabels[currentIdx];

        // Apply theme filters
        applyThemeStyles(themes[currentIdx]);
    });

    function applyThemeStyles(theme) {
        const heroConan = document.querySelector('.hero-conan');
        const heroKid = document.querySelector('.hero-kid');

        if (theme === 'theme-conan-only') {
            heroConan.style.flex = '3';
            heroKid.style.flex = '0.5';
            heroKid.style.opacity = '0.3';
            heroConan.style.opacity = '1';
        } else if (theme === 'theme-kid-only') {
            heroConan.style.flex = '0.5';
            heroKid.style.flex = '3';
            heroConan.style.opacity = '0.3';
            heroKid.style.opacity = '1';
        } else {
            heroConan.style.flex = '1';
            heroKid.style.flex = '1';
            heroConan.style.opacity = '1';
            heroKid.style.opacity = '1';
        }
    }
});

// Quiz calculation logic
function calculateQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const resultDiv = document.getElementById('quizResult');

    if (!q1 || !q2 || !q3) {
        alert('Vui lòng chọn đầy đủ câu trả lời cho cả 3 câu hỏi nhé!');
        return;
    }

    let conanScore = 0;
    let kidScore = 0;

    [q1.value, q2.value, q3.value].forEach(val => {
        if (val === 'conan') conanScore++;
        if (val === 'kid') kidScore++;
    });

    resultDiv.classList.remove('hidden', 'conan-win', 'kid-win');

    if (conanScore > kidScore) {
        resultDiv.classList.add('conan-win');
        resultDiv.innerHTML = `
            <h3>🔍 Bạn mang phong cách của EDOGAWA CONAN!</h3>
            <p style="margin-top: 8px; font-size: 0.9rem;">Bạn sở hữu tư duy logic sắc bén, điềm tĩnh và luôn tìm kiếm sự thật. Bạn chính là chỗ dựa tin cậy của bạn bè khi gặp khó khăn!</p>
        `;
    } else {
        resultDiv.classList.add('kid-win');
        resultDiv.innerHTML = `
            <h3>🎩 Bạn mang phong cách của KAITO KID!</h3>
            <p style="margin-top: 8px; font-size: 0.9rem;">Bạn là người đầy sáng tạo, tự do, yêu thích sự bất ngờ và luôn biết cách tỏa sáng trước đám đông với sự lịch thiệp!</p>
        `;
    }
}
