// ============================================
// EXERCIȚII - Atelier B2 · als ob / als wenn (irreale Vergleiche)
// Claudia Toth · 5 ex: als ob+KII · als+inversiune · Hauptsatzverb · Zeit · Diktat
// Diktat (Ex5) = audio cu VOCEA CLAUDIEI (audio/diktat-0N.wav).
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: als ob + Konjunktiv II (completează forma de KII)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Er tut, als ob er krank ____. (sein)', translation: 'sein.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'b', sentence: 'Sie spricht, als ob sie alles ____. (wissen)', translation: 'wissen.', correct: 'wüsste', accept: ['wüsste', 'wuesste'] },
    { id: 'c', sentence: 'Er isst, als ob er großen Hunger ____. (haben)', translation: 'haben.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'd', sentence: 'Sie tut, als ob sie mich nicht ____. (sehen)', translation: 'sehen.', correct: 'sähe', accept: ['sähe', 'saehe'] },
    { id: 'e', sentence: 'Er rennt, als ob es um sein Leben ____. (gehen)', translation: 'gehen.', correct: 'ginge', accept: ['ginge'] },
    { id: 'f', sentence: 'Sie liegt da, als ob sie ____. (schlafen)', translation: 'schlafen.', correct: 'schliefe', accept: ['schliefe'] },
    { id: 'g', sentence: 'Er redet, als ob er der Chef ____. (sein)', translation: 'sein.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'h', sentence: 'Es klingt, als ob jemand ____. (kommen)', translation: 'kommen.', correct: 'käme', accept: ['käme', 'kaeme'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 als ob + Konjunktiv II — completează forma ireală.</strong><br>
        <em>Cheia:</em> comparație ireală → NU Indikativ! sein → wäre · haben → hätte · verbe tari → sähe/ginge/käme · verbe slabe → würde + Inf.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                ${it.translation ? '<small style="color:#5A5147">💬 ' + it.translation + '</small>' : ''}
                <input type="text" id="ex1-${it.id}" placeholder="Konjunktiv II">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}
function resetEx1() { buildEx1(); }

// ============================================
// EX 2: als + inversiune (verbul KII imediat după als)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Er tut so, als ____ er müde. (sein)', translation: 'inversiune: verbul KII după als.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'b', sentence: 'Sie spricht, als ____ sie alles. (wissen)', translation: 'wissen.', correct: 'wüsste', accept: ['wüsste', 'wuesste'] },
    { id: 'c', sentence: 'Es sieht aus, als ____ es gleich regnen. (werden)', translation: 'verbe slabe.', correct: 'würde', accept: ['würde', 'wuerde'] },
    { id: 'd', sentence: 'Er isst, als ____ er großen Hunger. (haben)', translation: 'haben.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'e', sentence: 'Sie tut, als ____ sie mich nicht sehen. (können)', translation: 'können.', correct: 'könnte', accept: ['könnte', 'koennte'] },
    { id: 'f', sentence: 'Er rennt, als ____ es um sein Leben. (gehen)', translation: 'gehen.', correct: 'ginge', accept: ['ginge'] },
    { id: 'g', sentence: 'Es klingt, als ____ jemand an der Tür. (stehen)', translation: 'stehen.', correct: 'stünde', accept: ['stünde', 'stuende', 'stände', 'staende'] },
    { id: 'h', sentence: 'Sie lächelt, als ____ nichts geschehen. (sein)', translation: '', correct: 'wäre', accept: ['wäre', 'waere'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 als (fără ob) + inversiune — pune verbul KII imediat după „als".</strong><br>
        <em>Atenție:</em> „als ob er müde wäre" = „als <strong>wäre</strong> er müde". Verbul sare imediat după als.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                ${it.translation ? '<small style="color:#5A5147">💬 ' + it.translation + '</small>' : ''}
                <input type="text" id="ex2-${it.id}" placeholder="Konjunktiv II">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}
function resetEx2() { buildEx2(); }

// ============================================
// EX 3: Hauptsatzverb (verbul care introduce comparația)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Es ____ aus, als ob es regnen würde. (aussehen)', translation: 'aussehen.', correct: 'sieht', accept: ['sieht'] },
    { id: 'b', sentence: 'Er ____ so, als ob er alles wüsste. (tun)', translation: 'so tun.', correct: 'tut', accept: ['tut'] },
    { id: 'c', sentence: 'Sie ____, als ob sie krank wäre. (wirken)', translation: 'wirken.', correct: 'wirkt', accept: ['wirkt'] },
    { id: 'd', sentence: 'Das ____, als ob jemand weinte. (klingen)', translation: 'klingen.', correct: 'klingt', accept: ['klingt'] },
    { id: 'e', sentence: 'Ich ____ mich, als ob ich fliegen würde. (sich fühlen)', translation: 'sich fühlen.', correct: 'fühle', accept: ['fühle', 'fuehle'] },
    { id: 'f', sentence: 'Es ____, als ob alles gut wäre. (scheinen)', translation: 'scheinen.', correct: 'scheint', accept: ['scheint'] },
    { id: 'g', sentence: 'Er ____ so, als ob nichts passiert wäre. (tun)', translation: 'so tun.', correct: 'tut', accept: ['tut'] },
    { id: 'h', sentence: 'Es ____ mir vor, als ob wir uns kennen würden. (vorkommen)', translation: '', correct: 'kommt', accept: ['kommt'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Verbul principal care cheamă „als ob". ⭐</strong><br>
        aussehen (sieht aus) · so tun (tut) · wirken · scheinen · klingen · sich fühlen · es kommt mir vor.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                ${it.translation ? '<small style="color:#5A5147">💬 ' + it.translation + '</small>' : ''}
                <input type="text" id="ex3-${it.id}" placeholder="verbul principal">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}
function resetEx3() { buildEx3(); }

// ============================================
// EX 4: Zeit — gleichzeitig (wäre) vs vorzeitig (hätte)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Sie sieht aus, als ob sie nicht geschlafen ____. (vorzeitig)', translation: 'schlafen.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'b', sentence: 'Er tut, als ob er müde ____. (gleichzeitig)', translation: 'simultan: sein.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'c', sentence: 'Es war, als ob die Zeit stehen geblieben ____. (vorzeitig)', translation: 'bleiben.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'd', sentence: 'Sie spricht, als ob sie das Buch gelesen ____. (vorzeitig)', translation: 'lesen.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'e', sentence: 'Er lächelt, als ob er glücklich ____. (gleichzeitig)', translation: 'simultan: sein.', correct: 'wäre', accept: ['wäre', 'waere'] },
    { id: 'f', sentence: 'Sie sieht aus, als ob sie geweint ____. (vorzeitig)', translation: 'weinen.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'g', sentence: 'Er tut, als ob er nichts gehört ____. (vorzeitig)', translation: 'hören.', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'h', sentence: 'Es klang, als ob jemand gefallen ____. (vorzeitig)', translation: 'fallen.', correct: 'wäre', accept: ['wäre', 'waere'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Simultan sau anterior? Completează wäre / hätte. ⭐</strong><br>
        <em>gleichzeitig</em> → Konjunktiv II prezent (wäre) · <em>vorzeitig</em> → Partizip II + wäre/hätte (auxiliarul verbului: sein → wäre, haben → hätte).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                ${it.translation ? '<small style="color:#5A5147">💬 ' + it.translation + '</small>' : ''}
                <input type="text" id="ex4-${it.id}" placeholder="wäre / hätte">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}
function resetEx4() { buildEx4(); }

// ============================================
// EX 5: Diktat audio — VOCEA CLAUDIEI (audio/diktat-0N.wav)
// ============================================
const ex5Data = [
    { id: 'a', audio: 'audio/diktat-01.wav', text: 'Er tut, als ob er krank wäre.', accept: ['Er tut, als ob er krank wäre.'], ro: 'Se poartă ca și cum ar fi bolnav.' },
    { id: 'b', audio: 'audio/diktat-02.wav', text: 'Sie spricht, als wüsste sie alles.', accept: ['Sie spricht, als wüsste sie alles.'], ro: 'Vorbește de parcă ar ști tot.' },
    { id: 'c', audio: 'audio/diktat-03.wav', text: 'Es sieht aus, als ob es gleich regnen würde.', accept: ['Es sieht aus, als ob es gleich regnen würde.'], ro: 'Arată ca și cum ar sta să plouă.' },
    { id: 'd', audio: 'audio/diktat-04.wav', text: 'Er rennt, als ginge es um sein Leben.', accept: ['Er rennt, als ginge es um sein Leben.'], ro: 'Aleargă de parcă i-ar fi viața în joc.' },
    { id: 'e', audio: 'audio/diktat-05.wav', text: 'Sie sieht aus, als ob sie nicht geschlafen hätte.', accept: ['Sie sieht aus, als ob sie nicht geschlafen hätte.'], ro: 'Arată ca și cum n-ar fi dormit.' },
    { id: 'f', audio: 'audio/diktat-06.wav', text: 'Es war, als ob die Zeit stehen geblieben wäre.', accept: ['Es war, als ob die Zeit stehen geblieben wäre.'], ro: 'Era ca și cum timpul s-ar fi oprit.' },
    { id: 'g', audio: 'audio/diktat-07.wav', text: 'Er tut so, als wäre nichts geschehen.', accept: ['Er tut so, als wäre nichts geschehen.'], ro: 'Se poartă ca și cum nu s-ar fi întâmplat nimic.' },
    { id: 'h', audio: 'audio/diktat-08.wav', text: 'Es kommt mir vor, als würde ich träumen.', accept: ['Es kommt mir vor, als würde ich träumen.'], ro: 'Mi se pare că visez.' }
];

function playDiktat(event, id) {
    event.preventDefault();
    event.stopPropagation();
    const audio = document.getElementById('diktat-audio-' + id);
    if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }
}

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎧 Diktat — ascultă și scrie propoziția (vocea Claudiei).</strong><br>
        <em>Sfat:</em> comparații ireale — atenție la als ob + Konjunktiv II la final ȘI la als + inversiune (als wäre / als ginge).
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>
                    <button type="button" class="audio-btn" onclick="playDiktat(event, '${it.id}')" title="Ascultă" style="vertical-align:middle;">▶</button>
                    <span style="margin-left:8px;">Propoziția ${i + 1} — scrie ce auzi:</span>
                </label>
                <audio id="diktat-audio-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie propoziția...">
                <small style="color:#5A5147">💬 ${it.ro}</small>
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        const valid = [it.text, ...(it.accept || [])].map(normalizeAnswer);
        if (valid.includes(ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.text}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.text}`;
        }
    });
    return { correct, total: ex5Data.length };
}
function resetEx5() { buildEx5(); }

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
