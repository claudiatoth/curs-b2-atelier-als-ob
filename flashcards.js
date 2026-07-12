// ============================================
// FLASHCARDS - Atelier B2 · als ob / als wenn (irreale Vergleiche)
// 32 carduri: 8 als ob+KII + 8 als-Inversion + 8 Zeit/Hauptsatzverben + 8 real-vs-ireal & Wortschatz
// Substantive MEREU Sg · Pl (DE + RO). Audio: WAV-uri Hedda în audio/letters/
// REGULĂ: ZERO ghilimele ASCII interne (folosim „..." germane sau deloc)!
// ============================================

const flashcardsData = [
    // ========== 8 als ob + Konjunktiv II ==========
    { de: "als ob + Konjunktiv II", ro: "comparație ireală (verb la final)", audio: "audio/letters/01-als-ob.wav" },
    { de: "als wenn", ro: "sinonim colocvial pentru als ob", audio: "audio/letters/02-als-wenn.wav" },
    { de: "er tut, als ob er müde wäre", ro: "se poartă ca și cum ar fi obosit", audio: "audio/letters/03-tut-waere.wav" },
    { de: "sie spricht, als ob sie alles wüsste", ro: "vorbește de parcă ar ști tot", audio: "audio/letters/04-spricht-wuesste.wav" },
    { de: "wäre (sein)", ro: "Konjunktiv II de la sein", audio: "audio/letters/05-waere.wav" },
    { de: "hätte (haben)", ro: "Konjunktiv II de la haben", audio: "audio/letters/06-haette.wav" },
    { de: "würde + Infinitiv", ro: "KII perifrastic (mai ales la verbe slabe)", audio: "audio/letters/07-wuerde-inf.wav" },
    { de: "käme · ginge · wüsste", ro: "KII tari (kommen/gehen/wissen)", audio: "audio/letters/08-kaeme-ginge.wav" },

    // ========== 8 als + Inversion ==========
    { de: "als wäre er müde", ro: "= als ob er müde wäre (verb după als)", audio: "audio/letters/09-als-waere.wav" },
    { de: "als + Konjunktiv II (fără ob)", ro: "verbul stă IMEDIAT după als", audio: "audio/letters/10-als-inversion.wav" },
    { de: "er rennt, als ginge es um sein Leben", ro: "aleargă de parcă i-ar fi viața în joc", audio: "audio/letters/11-rennt-ginge.wav" },
    { de: "sie lächelt, als wäre nichts geschehen", ro: "zâmbește ca și cum nimic nu s-ar fi întâmplat", audio: "audio/letters/12-laechelt.wav" },
    { de: "so tun, als ob", ro: "a se preface că", audio: "audio/letters/13-so-tun.wav" },
    { de: "es kommt mir vor, als ob", ro: "mi se pare că / de parcă", audio: "audio/letters/14-kommt-vor.wav" },
    { de: "es sieht aus, als ob", ro: "arată ca și cum", audio: "audio/letters/15-sieht-aus.wav" },
    { de: "es klingt, als ob", ro: "sună de parcă", audio: "audio/letters/16-klingt.wav" },

    // ========== 8 Zeit + Hauptsatzverben ==========
    { de: "gleichzeitig: als ob er müde wäre", ro: "simultan → KII prezent (wäre)", audio: "audio/letters/17-gleichzeitig.wav" },
    { de: "vorzeitig: als ob er müde gewesen wäre", ro: "anterior → KII trecut (gewesen wäre)", audio: "audio/letters/18-vorzeitig.wav" },
    { de: "aussehen (sieht aus)", ro: "a arăta / a părea", audio: "audio/letters/19-aussehen.wav" },
    { de: "wirken (wirkt)", ro: "a face impresia / a părea", audio: "audio/letters/20-wirken.wav" },
    { de: "scheinen (scheint)", ro: "a părea", audio: "audio/letters/21-scheinen.wav" },
    { de: "klingen (klingt)", ro: "a suna (de parcă)", audio: "audio/letters/22-klingen.wav" },
    { de: "sich fühlen (fühlt sich)", ro: "a se simți", audio: "audio/letters/23-sich-fuehlen.wav" },
    { de: "tun (tut so)", ro: "a face / a se preface", audio: "audio/letters/24-tun.wav" },

    // ========== 8 real vs ireal & Wortschatz ==========
    { de: "so … wie", ro: "comparație REALĂ de egalitate (so groß wie)", audio: "audio/letters/25-so-wie.wav" },
    { de: "-er … als", ro: "comparativ REAL (größer als)", audio: "audio/letters/26-er-als.wav" },
    { de: "als ob … Konjunktiv II", ro: "comparație IREALĂ (als ob du schneller wärst)", audio: "audio/letters/27-als-ob-irreal.wav" },
    { de: "je … desto / umso", ro: "proporție (je mehr, desto besser)", audio: "audio/letters/28-je-desto.wav" },
    { de: "der Vergleich · die Vergleiche", ro: "comparația · comparațiile", audio: "audio/letters/29-vergleich.wav" },
    { de: "der Anschein", ro: "aparența (den Anschein erwecken)", audio: "audio/letters/30-anschein.wav" },
    { de: "der Eindruck · die Eindrücke", ro: "impresia · impresiile", audio: "audio/letters/31-eindruck.wav" },
    { de: "die Illusion · die Illusionen", ro: "iluzia · iluziile", audio: "audio/letters/32-illusion.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru Atelierul als ob / als wenn.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="flashcard-pic" id="flashcard-pic"></div>
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;

    const pic = document.getElementById('flashcard-pic');
    if (pic) {
        if (currentCard.icon) {
            pic.style.display = 'flex';
            pic.className = 'flashcard-pic ring-' + (currentCard.gen || 'x');
            pic.innerHTML = '<img src="images/icons/' + currentCard.icon + '.svg" alt="">';
        } else {
            pic.style.display = 'none';
            pic.innerHTML = '';
        }
    }

    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});
