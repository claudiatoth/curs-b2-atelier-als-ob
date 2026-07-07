// ============================================
// TEST FINAL - Atelier B2 · als ob / als wenn (irreale Vergleiche)
// Claudia Toth · 15 întrebări (als ob+KII · als-Inversion · Hauptsatzverb · Zeit · Traducere)
// ============================================

const finalTestData = [
    // 🎭 als ob + Konjunktiv II (3)
    { type: 'luckentext', category: '🎭 als ob + KII', question: 'Completează (sein → KII):', sentence: 'Er tut, als ob er krank <strong>______</strong>.', translation: 'comparație ireală.', accept: ['wäre', 'waere'], correct: 'wäre', explanation: 'als ob = ireal → Konjunktiv II: wäre (nu „ist").' },
    { type: 'multiple', category: '🎭 als ob + KII', question: 'După „als ob", verbul stă:', options: ['la final (Konjunktiv II)', 'pe poziția 2', 'la infinitiv', 'pe prima poziție'], correct: 'la final (Konjunktiv II)', explanation: '„als ob" e conjuncție → verbul la final, în KII.' },
    { type: 'luckentext', category: '🎭 als ob + KII', question: 'Completează (wissen → KII):', sentence: 'Sie spricht, als ob sie alles <strong>______</strong>.', translation: 'wissen.', accept: ['wüsste', 'wuesste'], correct: 'wüsste', explanation: 'wissen la Konjunktiv II: wüsste.' },

    // 🔄 als + Inversion (3)
    { type: 'luckentext', category: '🔄 als-Inversion', question: 'Completează (als + inversiune):', sentence: 'Er tut so, als <strong>______</strong> er müde. (sein)', translation: 'verbul KII imediat după als.', accept: ['wäre', 'waere'], correct: 'wäre', explanation: '„als wäre er müde" = „als ob er müde wäre".' },
    { type: 'multiple', category: '🔄 als-Inversion', question: '„als" fără „ob" cere verbul:', options: ['imediat după als', 'la final', 'la infinitiv', 'deloc'], correct: 'imediat după als', explanation: 'Fără „ob", inversiune: als + verb KII + subiect.' },
    { type: 'multiple', category: '🔄 als-Inversion', question: '„Er tut, als ob er alles weiß." — ce e greșit?', options: ['weiß → wüsste (Konjunktiv II)', 'als ob → als wenn', 'tut → macht', 'nimic'], correct: 'weiß → wüsste (Konjunktiv II)', explanation: 'Comparația ireală cere KII: wüsste, nu Indikativ weiß.' },

    // 👁️ Hauptsatzverb (3)
    { type: 'luckentext', category: '👁️ Hauptsatzverb', question: 'Completează (aussehen):', sentence: 'Es <strong>______</strong> aus, als ob es regnet. (aussehen)', translation: 'aussehen.', accept: ['sieht'], correct: 'sieht', explanation: 'Verbul principal: es sieht aus, als ob …' },
    { type: 'multiple', category: '👁️ Hauptsatzverb', question: 'Care NU introduce o comparație ireală (als ob)?', options: ['gehen', 'aussehen', 'wirken', 'scheinen'], correct: 'gehen', explanation: 'aussehen/wirken/scheinen cheamă „als ob"; „gehen" nu.' },
    { type: 'luckentext', category: '👁️ Hauptsatzverb', question: 'Completează (so tun):', sentence: 'Er <strong>______</strong> so, als ob er der Chef wäre. (tun)', translation: 'so tun.', accept: ['tut'], correct: 'tut', explanation: 'so tun, als ob … = a se preface că.' },

    // ⏳ Zeit (3)
    { type: 'luckentext', category: '⏳ Zeit', question: 'Completează (vorzeitig):', sentence: 'Sie sieht aus, als ob sie nicht geschlafen <strong>______</strong>.', translation: '', accept: ['hätte', 'haette'], correct: 'hätte', explanation: 'vorzeitig → Partizip II + hätte (schlafen ia haben).' },
    { type: 'multiple', category: '⏳ Zeit', question: '„als ob er krank gewesen ___" — completează:', options: ['wäre', 'hätte', 'ist', 'war'], correct: 'wäre', explanation: 'sein → gewesen + wäre (trecut ireal).' },
    { type: 'luckentext', category: '⏳ Zeit', question: 'Completează (gleichzeitig, sein):', sentence: 'Er lächelt, als ob er glücklich <strong>______</strong>.', translation: 'simultan.', accept: ['wäre', 'waere'], correct: 'wäre', explanation: 'gleichzeitig → Konjunktiv II prezent: wäre.' },

    // 🇷🇴 Traducere (3)
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (als ob):', ro: 'Se poartă ca și cum ar fi obosit.', accept: ['er tut als ob er müde wäre', 'er tut als ob er muede waere', 'er tut so als ob er müde wäre', 'er tut so als ob er muede waere'], correct: 'Er tut, als ob er müde wäre.', explanation: 'als ob + Konjunktiv II: er müde wäre.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (de parcă):', ro: 'Vorbește de parcă ar ști tot.', accept: ['sie spricht als ob sie alles wüsste', 'sie spricht als ob sie alles wuesste'], correct: 'Sie spricht, als ob sie alles wüsste.', explanation: 'wissen → wüsste.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (ca și cum):', ro: 'Arată ca și cum ar sta să plouă.', accept: ['es sieht aus als ob es regnen würde', 'es sieht aus als ob es regnen wuerde'], correct: 'Es sieht aus, als ob es regnen würde.', explanation: 'aussehen + als ob + würde (verb slab).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> din Atelierul <em>als ob / als wenn — irreale Vergleiche</em>.</p>
            <ul class="test-info-list">
                <li>🎭 als ob + KII (3) · 🔄 als-Inversion (3) · 👁️ Hauptsatzverb (3) · ⏳ Zeit (3) · 🇷🇴 Traducere (3)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div>${q.translation ? '<small class="test-translation">💬 ' + q.translation + '</small>' : ''}<input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #5A5147;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
