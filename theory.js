// ============================================
// TEORIE - Atelier B2 · Vergleichssätze: als ob / als wenn (irreale Vergleiche)
// Claudia Toth · aprofundare standalone (als ob + Konjunktiv II · als + inversiune · gleichzeitig/vorzeitig)
// Sursă DF: INT629-634 (rafinament) · recast cu castul nostru (Andreea ↔ Florian la o petrecere) — standalone
// AUDIO: fără narațiune Hedda în teorie. Dialogul = vocea Claudiei (audio/dialog-01.wav).
// 3 cutii pedagogice v2: 🎯 Can-Do (index.html) · ⚠️ Capcana românului (sub-secțiunea ⭐) · 💎 Expresiile de aur (după dialog).
// ============================================

const theoryHTML = `
    <!-- HERO: real vs ireal — trei feluri de comparație -->
    <details open class="abc-details">
        <summary>🎭 Trei feluri de comparație — real sau ireal? <span class="ab-arrow">▼</span></summary>
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574;">
            <h4>💡 „ca și cum" = comparație IREALĂ</h4>
            <p>Compari cu ceva care NU e adevărat, doar pare. În germană asta cere <strong>Konjunktiv II</strong> — nu Indikativ. Iată cele trei comparații, de la real la ireal:</p>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px; margin:10px 0;">
            <div style="background:#dcfce7; border-left:5px solid #16a34a; padding:8px 14px; border-radius:6px;"><strong>REAL · egalitate</strong> — Er ist <strong>so groß wie</strong> ich. <span style="color:#5A5147;">(chiar e la fel de înalt)</span></div>
            <div style="background:#dbeafe; border-left:5px solid #2563eb; padding:8px 14px; border-radius:6px;"><strong>REAL · diferență</strong> — Er ist <strong>größer als</strong> ich. <span style="color:#5A5147;">(chiar e mai înalt)</span></div>
            <div style="background:#f3e8ff; border-left:5px solid #7c2d12; padding:8px 14px; border-radius:6px;"><strong>IREAL · „ca și cum"</strong> — Er tut, <strong>als ob</strong> er größer <strong>wäre</strong>. <span style="color:#5A5147;">(nu e, doar se preface)</span></div>
        </div>
    </details>

    <!-- 0: Intro + Dialog Andreea & Florian -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🥂 1. Auf der Party — Andreea & Florian beobachten</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Când spui în română «se poartă CA ȘI CUM ar fi șeful», în germană folosești <strong>als ob</strong> (sau <strong>als wenn</strong>) plus <strong>Konjunktiv II</strong>: <em>Er tut, als ob er der Chef <strong>wäre</strong></em>. E o comparație cu ceva IREAL — nu e adevărat, doar pare. Secretul: verbul NU stă la Indikativ (nu «ist»), ci la Konjunktiv II («wäre»). Hai la o petrecere, unde toți se prefac! <img src="images/butterfly-emerald.png" class="bf-inline" alt="">"</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🎯 Ce exersezi în acest Atelier</h4>
                <ul>
                    <li>🎭 <strong>als ob / als wenn + Konjunktiv II</strong> — comparația ireală: <em>als ob er müde <strong>wäre</strong></em>.</li>
                    <li>🔄 <strong>als + inversiune</strong> — aceeași idee, mai elegant: <em><strong>als wäre</strong> er müde</em> (verbul imediat după als).</li>
                    <li>⏳ <strong>gleichzeitig vs vorzeitig</strong> — acum (wäre) sau înainte (gewesen wäre).</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#FBF7EF;">
                <h4>🎧 Hör zu: Andreea &amp; Florian — „Sieh mal, wie er tut!"</h4>
                <div class="lesson-audio">
                    <div class="audio-player">
                        <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                        <audio id="audio-0" preload="none"><source src="audio/dialog-01.wav" type="audio/wav"></audio>
                    </div>
                    <span class="lesson-audio-label">🔊 Ascultă dialogul (vocea Claudiei)</span>
                </div>

                <div style="background:#ecfeff; border-left: 4px solid #7c2d12; padding: 12px 16px; border-radius: 6px; margin: 10px 0;">
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Sieh mal den Typ dort. Er redet, <strong>als ob</strong> er alles <strong>wüsste</strong>.</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Ja, und er gibt Geld aus, <strong>als wäre</strong> er Millionär. Dabei kenne ich seinen Job.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Und die Frau neben ihm lacht, <strong>als ob</strong> jeder Witz <strong>lustig wäre</strong>.</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Schau, sie sieht aus, <strong>als hätte</strong> sie tagelang nicht geschlafen — so müde wirkt sie.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Und der Gastgeber tut so, <strong>als wäre</strong> nichts passiert, obwohl das Buffet leer ist.</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Ehrlich, es kommt mir vor, <strong>als ob</strong> wir in einem Theater <strong>wären</strong>. Alle spielen eine Rolle.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Genau! Komm, lass uns rausgehen. Es klingt, <strong>als ob</strong> es draußen <strong>regnen würde</strong>, aber die Luft ist besser.</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Einverstanden. Hier tun alle, <strong>als ob</strong> sie sich <strong>amüsierten</strong> — nur wir zwei sind ehrlich müde.</p>
                </div>
                <details>
                    <summary style="cursor:pointer; color:#065f46; font-weight:600;">📜 Vezi traducerea (RO)</summary>
                    <div style="color:#5A5147; font-size:0.9rem; line-height:1.7; margin-top:8px;">
                        <p>— Uite-l pe tipul de acolo. Vorbește de parcă ar ști tot.<br>
                        — Da, și dă bani de parcă ar fi milionar. Deși îi știu slujba.<br>
                        — Iar femeia de lângă el râde ca și cum fiecare glumă ar fi amuzantă.<br>
                        — Uite, arată ca și cum n-ar fi dormit de zile întregi — atât de obosită pare.<br>
                        — Iar gazda se poartă ca și cum nu s-ar fi întâmplat nimic, deși bufetul e gol.<br>
                        — Sincer, mi se pare că suntem într-un teatru. Toți joacă un rol.<br>
                        — Exact! Hai să ieșim. Sună de parcă ar ploua afară, dar aerul e mai bun.<br>
                        — De acord. Aici toți se prefac că se distrează — doar noi doi suntem sincer obosiți.</p>
                    </div>
                </details>
            </div>

            <!-- 💎 Cutia „Expresiile de aur" (după dialog) -->
            <div class="theory-box" style="background:#FBF7EF; border-left:4px solid #D4A574; margin-top:18px;">
                <h4 style="color:#065f46;">💎 Expresiile de aur (din dialog)</h4>
                <ul style="margin:6px 0 0 18px; line-height:1.8;">
                    <li><strong>Er redet, als ob er alles wüsste.</strong> — Vorbește de parcă ar ști tot</li>
                    <li><strong>Er gibt Geld aus, als wäre er Millionär.</strong> — …ca și cum ar fi milionar <em>(als + inversiune)</em></li>
                    <li><strong>Er tut so, als wäre nichts passiert.</strong> — Se poartă ca și cum nu s-ar fi întâmplat nimic</li>
                    <li><strong>Es kommt mir vor, als ob …</strong> — Mi se pare că / de parcă…</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: ⭐ als ob / als wenn + Konjunktiv II + ⚠️ Capcana -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎭 2. als ob / als wenn + Konjunktiv II ⭐</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🎭 Structura: (so,) als ob / als wenn + … + Konjunktiv II la final</h4>
                <p>Propoziția principală are des un <strong>so</strong>. Apoi <strong>als ob</strong> (sau <strong>als wenn</strong>, mai colocvial) introduce comparația ireală, iar verbul stă la <strong>final</strong>, în <strong>Konjunktiv II</strong>.</p>
                <p style="margin-top:6px; font-size:1.05rem;"><strong>Er tut <span style="color:#7c2d12">so</span>, <span style="color:#7c2d12">als ob</span> er krank <span style="color:#7c2d12">wäre</span>.</strong></p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Konjunktiv II</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td>sein</td><td class="verb">wäre</td><td>…, als ob er müde <strong>wäre</strong>.</td></tr>
                    <tr><td>haben</td><td class="verb">hätte</td><td>…, als ob sie Zeit <strong>hätte</strong>.</td></tr>
                    <tr><td>wissen</td><td class="verb">wüsste</td><td>…, als ob er alles <strong>wüsste</strong>.</td></tr>
                    <tr><td>kommen</td><td class="verb">käme</td><td>…, als ob jemand <strong>käme</strong>.</td></tr>
                    <tr><td>verbe slabe</td><td class="verb">würde + Inf</td><td>…, als ob es regnen <strong>würde</strong>.</td></tr>
                </tbody>
            </table>

            <!-- ⚠️ Cutia „Capcana românului" (la gramatica-vedetă) -->
            <div class="theory-box" style="background:#FBF7EF;border-left:4px solid #b45309;">
                <h4 style="color:#b45309;">⚠️ Capcana românului</h4>
                <p>În română spui „ca și cum" + condițional/conjunctiv și totul curge natural. De aceea românul pune verbul la <strong>Indikativ</strong> în germană: <em>„als ob er müde <s>ist</s>"</em> ❌. GREȘIT! Comparația e IREALĂ → verbul trebuie la <strong>Konjunktiv II</strong>: <em>„als ob er müde <strong>wäre</strong>"</em> ✅.</p>
                <p style="margin-top:6px;">Ține minte: <strong>als ob</strong> = ireal = <strong>Konjunktiv II</strong>, mereu. Chiar dacă „pare" prezent, forma e wäre/hätte/würde, nu ist/hat/wird.</p>
            </div>
        </div>
    </div>

    <!-- 2: als + Inversion -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔄 3. als (fără ob) + inversiune — varianta elegantă</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>🔄 Scoți „ob" → verbul sare imediat după „als"</h4>
                <p>Aceeași idee, dar mai literară: elimini <strong>ob</strong> și pui verbul la Konjunktiv II <strong>imediat după als</strong> (inversiune).</p>
                <table class="theory-table">
                    <thead><tr><th>Cu ob (verb la final)</th><th>Cu inversiune (verb după als)</th></tr></thead>
                    <tbody>
                        <tr><td>als ob er müde <strong>wäre</strong></td><td class="verb">als <strong>wäre</strong> er müde</td></tr>
                        <tr><td>als ob sie alles <strong>wüsste</strong></td><td class="verb">als <strong>wüsste</strong> sie alles</td></tr>
                        <tr><td>als ob nichts passiert <strong>wäre</strong></td><td class="verb">als <strong>wäre</strong> nichts passiert</td></tr>
                    </tbody>
                </table>
                <p style="margin-top:6px;">⚠️ Ambele sunt corecte. Dar NU le amesteca: sau „als ob … wäre", sau „als wäre …". Niciodată „als ob wäre er".</p>
            </div>
        </div>
    </div>

    <!-- 3: Zeitverhältnis -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⏳ 4. Simultan sau anterior? (wäre vs gewesen wäre)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <h4>⏳ Când se petrece comparația față de propoziția principală?</h4>
                <table class="theory-table">
                    <thead><tr><th>Relație</th><th>Formă</th><th>Exemplu</th></tr></thead>
                    <tbody>
                        <tr><td><strong>gleichzeitig</strong> (simultan)</td><td class="verb">Konjunktiv II prezent</td><td>Er sieht aus, als ob er krank <strong>wäre</strong>.</td></tr>
                        <tr><td><strong>vorzeitig</strong> (anterior)</td><td class="verb">Konjunktiv II trecut</td><td>Er sieht aus, als ob er krank <strong>gewesen wäre</strong>.</td></tr>
                    </tbody>
                </table>
                <p style="margin-top:6px;">Trecutul ireal = <strong>Partizip II + wäre/hätte</strong>: <em>als ob sie nicht geschlafen <strong>hätte</strong></em> (n-ar fi dormit) · <em>als ob er weggegangen <strong>wäre</strong></em> (ar fi plecat).</p>
            </div>
        </div>
    </div>

    <!-- 4: Hauptsatzverben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>👁️ 5. Verbele care introduc comparația (aussehen, tun, wirken…)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>👁️ Ce verbe cheamă „als ob"?</h4>
                <table class="grammar-table">
                    <tr><th>Verb principal</th><th>Exemplu</th></tr>
                    <tr><td class="verb">aussehen</td><td>Es <strong>sieht</strong> aus, als ob es regnen würde.</td></tr>
                    <tr><td class="verb">so tun</td><td>Er <strong>tut</strong> so, als ob er schliefe.</td></tr>
                    <tr><td class="verb">wirken</td><td>Sie <strong>wirkt</strong>, als ob sie glücklich wäre.</td></tr>
                    <tr><td class="verb">scheinen</td><td>Es <strong>scheint</strong>, als ob alles gut wäre.</td></tr>
                    <tr><td class="verb">klingen</td><td>Das <strong>klingt</strong>, als ob jemand weinte.</td></tr>
                    <tr><td class="verb">sich fühlen</td><td>Ich <strong>fühle</strong> mich, als ob ich fliegen würde.</td></tr>
                    <tr><td class="verb">es kommt mir vor</td><td>Es <strong>kommt</strong> mir vor, als ob wir uns kennen würden.</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: real vs ireal recap + je desto + Wortschatz -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🧰 6. Recap real/ireal + je … desto + Wortschatz</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>⚖️ Nu confunda comparațiile</h4>
                <table class="grammar-table">
                    <tr><th>Tip</th><th>Structură</th></tr>
                    <tr><td class="verb">real, egal</td><td>so + adj + wie (so schnell wie du)</td></tr>
                    <tr><td class="verb">real, diferit</td><td>adj-er + als (schneller als du)</td></tr>
                    <tr><td class="verb">ireal</td><td>als ob / als + Konjunktiv II (als ob du schneller wärst)</td></tr>
                    <tr><td class="verb">proporție</td><td>je + comparativ …, desto/umso + comparativ (je mehr, desto besser)</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <h4>🗣️ Wortschatz — aparență &amp; impresie</h4>
                <table class="grammar-table">
                    <tr><th>Deutsch (Sg · Pl)</th><th>Română</th></tr>
                    <tr><td class="verb"><span class="g-m">der</span> Vergleich · <span class="g-pl">die</span> Vergleiche</td><td>comparația · comparațiile</td></tr>
                    <tr><td class="verb"><span class="g-m">der</span> Eindruck · <span class="g-pl">die</span> Eindrücke</td><td>impresia · impresiile</td></tr>
                    <tr><td class="verb"><span class="g-m">der</span> Anschein (Sg.)</td><td>aparența (den Anschein erwecken)</td></tr>
                    <tr><td class="verb"><span class="g-f">die</span> Illusion · <span class="g-pl">die</span> Illusionen</td><td>iluzia · iluziile</td></tr>
                </table>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #065f46; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Andreea (o mică scenă):</strong> Es war ein seltsamer Abend. Alle taten so, <strong>als ob</strong> sie sich <strong>amüsierten</strong>. Ein Mann redete, <strong>als wäre</strong> er der Wichtigste, und eine Frau lachte, <strong>als ob</strong> jeder Witz <strong>genial gewesen wäre</strong>. Mir kam es vor, <strong>als ob</strong> die Zeit <strong>stillstünde</strong>.</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">A fost o seară ciudată. Toți se prefăceau că se distrează. Un bărbat vorbea de parcă ar fi fost cel mai important, iar o femeie râdea ca și cum fiecare glumă ar fi fost genială. Mi se părea că timpul stă pe loc.</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});
