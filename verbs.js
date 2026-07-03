// ============================================
// VERB-KONJUGATION - Atelier B2 · als ob / als wenn (irreale Vergleiche)
// 10 verbe: sein/haben/werden (KII) + tun/aussehen/scheinen/klingen/kommen (tari) + wirken/sich fühlen.
// Linia „🎭 Konjunktiv II (als ob …)" = forma ireală. Präteritum = IMPERFECT.
// Caseta = culoarea Atelierului: BROWN #7c2d12 (nefolosită L10-L20/indirekte slate/modalverben rose).
// REGULĂ: NU ghilimele/apostrofuri ASCII interne care rup string-urile single-quote!
// ============================================

const verbsData = [
    {
        inf: 'sein', ro: 'a fi', typ: 'auxiliar neregulat', aux: 'sein', part: 'gewesen',
        partizip: 'Konjunktiv II: er wäre · als ob er müde wäre / als wäre er müde', partiznote: 'Verbul-vedetă al comparației ireale. Trecut: als ob er … gewesen wäre.',
        praes: [['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt']],
        praet: [['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],['wir','waren','eram (noi)'],['ihr','wart','erați'],['sie/Sie','waren','erau']],
        perf: [['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']],
        note: 'AUXILIAR/TARE. KII wäre = cel mai folosit în als ob. Trecut ireal: geblieben wäre, gewesen wäre.'
    },
    {
        inf: 'haben', ro: 'a avea', typ: 'auxiliar neregulat', aux: 'haben', part: 'gehabt',
        partizip: 'Konjunktiv II: er hätte · als ob sie Zeit hätte', partiznote: 'Trecut ireal cu verbe „haben": als ob sie geschlafen hätte, als ob er gehört hätte.',
        praes: [['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au']],
        praet: [['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],['wir','hatten','aveam (noi)'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']],
        perf: [['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']],
        note: 'AUXILIAR. KII hätte. Auxiliarul trecutului ireal la majoritatea verbelor (geschlafen hätte).'
    },
    {
        inf: 'werden', ro: 'a deveni (auxiliar KII)', typ: 'auxiliar neregulat', aux: 'sein', part: 'geworden',
        partizip: 'Konjunktiv II: würde + Infinitiv · als ob es regnen würde', partiznote: 'Forma perifrastică — mai ales la verbe slabe: als ob sie tanzen würde.',
        praes: [['ich','werde','devin'],['du','wirst','devii'],['er/sie/es','wird','devine'],['wir','werden','devenim'],['ihr','werdet','deveniți'],['sie/Sie','werden','devin']],
        praet: [['ich','wurde','deveneam'],['du','wurdest','deveneai'],['er/sie/es','wurde','devenea'],['wir','wurden','deveneam (noi)'],['ihr','wurdet','deveneați'],['sie/Sie','wurden','deveneau']],
        perf: [['ich','bin geworden','am devenit'],['du','bist geworden','ai devenit'],['er/sie/es','ist geworden','a devenit'],['wir','sind geworden','am devenit'],['ihr','seid geworden','ați devenit'],['sie/Sie','sind geworden','au devenit']],
        note: 'AUXILIAR. „würde + Infinitiv" înlocuiește KII greu de format (als ob es regnen würde).'
    },
    {
        inf: 'tun', ro: 'a face / a se preface', typ: 'tare / neregulat', aux: 'haben', part: 'getan',
        partizip: 'Konjunktiv II: er täte · so tun, als ob … (a se preface că)', partiznote: 'Er tut so, als ob er schliefe. — verbul tipic al prefacerii.',
        praes: [['ich','tue','fac'],['du','tust','faci'],['er/sie/es','tut','face'],['wir','tun','facem'],['ihr','tut','faceți'],['sie/Sie','tun','fac']],
        praet: [['ich','tat','făceam'],['du','tatest','făceai'],['er/sie/es','tat','făcea'],['wir','taten','făceam (noi)'],['ihr','tatet','făceați'],['sie/Sie','taten','făceau']],
        perf: [['ich','habe getan','am făcut'],['du','hast getan','ai făcut'],['er/sie/es','hat getan','a făcut'],['wir','haben getan','am făcut'],['ihr','habt getan','ați făcut'],['sie/Sie','haben getan','au făcut']],
        note: 'TARE: tun – tat – getan. „so tun, als ob" = a se preface că. KII täte.'
    },
    {
        inf: 'aussehen', ro: 'a arăta / a părea', typ: 'tare / neregulat (separabil)', aux: 'haben', part: 'ausgesehen',
        partizip: 'es sieht aus, als ob … · KII: sähe aus', partiznote: 'Sie sieht aus, als ob sie krank wäre. — introduce des comparația ireală.',
        praes: [['ich','sehe aus','arăt'],['du','siehst aus','arăți'],['er/sie/es','sieht aus','arată'],['wir','sehen aus','arătăm'],['ihr','seht aus','arătați'],['sie/Sie','sehen aus','arată']],
        praet: [['ich','sah aus','arătam'],['du','sahst aus','arătai'],['er/sie/es','sah aus','arăta'],['wir','sahen aus','arătam (noi)'],['ihr','saht aus','arătați'],['sie/Sie','sahen aus','arătau']],
        perf: [['ich','habe ausgesehen','am arătat'],['du','hast ausgesehen','ai arătat'],['er/sie/es','hat ausgesehen','a arătat'],['wir','haben ausgesehen','am arătat'],['ihr','habt ausgesehen','ați arătat'],['sie/Sie','haben ausgesehen','au arătat']],
        note: 'TARE, SEPARABIL: aus- pleacă (sieht aus), ge la mijloc (ausgesehen). Vokalwechsel e→ie.'
    },
    {
        inf: 'scheinen', ro: 'a părea', typ: 'tare / neregulat', aux: 'haben', part: 'geschienen',
        partizip: 'es scheint, als ob … · KII: schiene', partiznote: 'Es scheint, als ob alles gut wäre. — impresie generală.',
        praes: [['ich','scheine','par'],['du','scheinst','pari'],['er/sie/es','scheint','pare'],['wir','scheinen','părem'],['ihr','scheint','păreți'],['sie/Sie','scheinen','par']],
        praet: [['ich','schien','păream'],['du','schienst','păreai'],['er/sie/es','schien','părea'],['wir','schienen','păream (noi)'],['ihr','schient','păreați'],['sie/Sie','schienen','păreau']],
        perf: [['ich','habe geschienen','am părut'],['du','hast geschienen','ai părut'],['er/sie/es','hat geschienen','a părut'],['wir','haben geschienen','am părut'],['ihr','habt geschienen','ați părut'],['sie/Sie','haben geschienen','au părut']],
        note: 'TARE: scheinen – schien – geschienen. Și „scheinen + zu": er scheint zu schlafen.'
    },
    {
        inf: 'wirken', ro: 'a face impresia / a părea', typ: 'regulat', aux: 'haben', part: 'gewirkt',
        partizip: 'sie wirkt, als ob … · KII: würde wirken / wirkte', partiznote: 'Er wirkt, als ob er nervös wäre. — impresia pe care o lasă cineva.',
        praes: [['ich','wirke','fac impresia'],['du','wirkst','faci impresia'],['er/sie/es','wirkt','face impresia'],['wir','wirken','facem impresia'],['ihr','wirkt','faceți impresia'],['sie/Sie','wirken','fac impresia']],
        praet: [['ich','wirkte','făceam impresia'],['du','wirktest','făceai impresia'],['er/sie/es','wirkte','făcea impresia'],['wir','wirkten','făceam (noi)'],['ihr','wirktet','făceați impresia'],['sie/Sie','wirkten','făceau impresia']],
        perf: [['ich','habe gewirkt','am făcut impresia'],['du','hast gewirkt','ai făcut impresia'],['er/sie/es','hat gewirkt','a făcut impresia'],['wir','haben gewirkt','am făcut impresia'],['ihr','habt gewirkt','ați făcut impresia'],['sie/Sie','haben gewirkt','au făcut impresia']],
        note: 'REGULAT. „wirken, als ob …" = a da impresia că. KII cu würde: würde wirken.'
    },
    {
        inf: 'sich fühlen', ro: 'a se simți', typ: 'regulat (reflexiv)', aux: 'haben', part: 'gefühlt',
        partizip: 'ich fühle mich, als ob … · KII: würde mich fühlen', partiznote: 'Ich fühle mich, als ob ich fliegen würde. — reflexiv (mich/dich/sich).',
        praes: [['ich','fühle mich','mă simt'],['du','fühlst dich','te simți'],['er/sie/es','fühlt sich','se simte'],['wir','fühlen uns','ne simțim'],['ihr','fühlt euch','vă simțiți'],['sie/Sie','fühlen sich','se simt']],
        praet: [['ich','fühlte mich','mă simțeam'],['du','fühltest dich','te simțeai'],['er/sie/es','fühlte sich','se simțea'],['wir','fühlten uns','ne simțeam'],['ihr','fühltet euch','vă simțeați'],['sie/Sie','fühlten sich','se simțeau']],
        perf: [['ich','habe mich gefühlt','m-am simțit'],['du','hast dich gefühlt','te-ai simțit'],['er/sie/es','hat sich gefühlt','s-a simțit'],['wir','haben uns gefühlt','ne-am simțit'],['ihr','habt euch gefühlt','v-ați simțit'],['sie/Sie','haben sich gefühlt','s-au simțit']],
        note: 'REGULAT REFLEXIV. Pronumele reflexiv se schimbă: mich/dich/sich. KII cu würde.'
    },
    {
        inf: 'klingen', ro: 'a suna (de parcă)', typ: 'tare / neregulat', aux: 'haben', part: 'geklungen',
        partizip: 'es klingt, als ob … · KII: klänge', partiznote: 'Das klingt, als ob jemand weinte. — impresie auditivă.',
        praes: [['ich','klinge','sun'],['du','klingst','suni'],['er/sie/es','klingt','sună'],['wir','klingen','sunăm'],['ihr','klingt','sunați'],['sie/Sie','klingen','sună']],
        praet: [['ich','klang','sunam'],['du','klangst','sunai'],['er/sie/es','klang','suna'],['wir','klangen','sunam (noi)'],['ihr','klangt','sunați'],['sie/Sie','klangen','sunau']],
        perf: [['ich','habe geklungen','am sunat'],['du','hast geklungen','ai sunat'],['er/sie/es','hat geklungen','a sunat'],['wir','haben geklungen','am sunat'],['ihr','habt geklungen','ați sunat'],['sie/Sie','haben geklungen','au sunat']],
        note: 'TARE: klingen – klang – geklungen. „Das klingt, als ob …" = sună de parcă.'
    },
    {
        inf: 'kommen', ro: 'a veni', typ: 'tare / neregulat', aux: 'sein', part: 'gekommen',
        partizip: 'KII: käme · als ob jemand käme; es kommt mir vor, als ob …', partiznote: 'Es kommt mir vor, als ob wir uns kennen würden. — „mi se pare".',
        praes: [['ich','komme','vin'],['du','kommst','vii'],['er/sie/es','kommt','vine'],['wir','kommen','venim'],['ihr','kommt','veniți'],['sie/Sie','kommen','vin']],
        praet: [['ich','kam','veneam'],['du','kamst','veneai'],['er/sie/es','kam','venea'],['wir','kamen','veneam (noi)'],['ihr','kamt','veneați'],['sie/Sie','kamen','veneau']],
        perf: [['ich','bin gekommen','am venit'],['du','bist gekommen','ai venit'],['er/sie/es','ist gekommen','a venit'],['wir','sind gekommen','am venit'],['ihr','seid gekommen','ați venit'],['sie/Sie','sind gekommen','au venit']],
        note: 'TARE: kommen – kam – gekommen (cu SEIN). KII käme. „es kommt mir vor, als ob" = mi se pare că.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em></p></div>';
}

function partizipBox(v) {
    if (!v.partizip) return '';
    return '<div class="theory-box" style="margin:8px 0; background:#fdf4f0; border-color:#7c2d12;">' +
        '<h4 style="color:#7c2d12;">🎭 Konjunktiv II (als ob …)</h4>' +
        '<p style="margin:0;"><strong>' + v.partizip + '</strong>' + (v.partiznote ? '<br><small style="color:#5A5147;">' + v.partiznote + '</small>' : '') + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 10 verbe: sein/haben/werden + tun/aussehen/scheinen/klingen/kommen + wirken/sich fühlen</strong> — Präsens + Präteritum + Perfekt + <strong>🎭 Konjunktiv II</strong>.<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Caseta brown 🎭 = forma ireală (als ob …).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Comparația ireală trăiește din Konjunktiv II (caseta brown 🎭): wäre, hätte, würde + Infinitiv, sau formele tari käme/ginge/wüsste. Iar verbe ca aussehen, tun, wirken, scheinen, klingen și sich fühlen sunt cele care CHEAMĂ «als ob». Nu uita: după als ob, verbul la final; cu «als» simplu, verbul imediat după! <img src="images/butterfly-emerald.png" class="bf-inline" alt="">"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : (v.typ.indexOf('modal') === 0 ? '#0891b2' : '#047857'));
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            partizipBox(v) +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
