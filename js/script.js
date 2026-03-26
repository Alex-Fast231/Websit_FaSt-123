    // ===== Helpers =====
    const byId = (id) => document.getElementById(id);
    function req(val){ return (val || "").trim().length > 0; }

    // ===== Legal content =====
    const LEGAL = {
  impressum: `
    <h2>Impressum</h2>
    <p><strong>Angaben gemäß § 5 DDG</strong><br>
    FaSt – Physiotherapie in sozialen Einrichtungen<br>
    Abteilung der Physio Strobl – therapeutisches Handwerk<br>
    Inhaber: Matthias Strobl<br>
    Münchener Str. 155<br>
    85051 Ingolstadt</p>

    <p><strong>Kontakt</strong><br>
E-Mail: <a href="mailto:info@physio-fast.de">info@physio-fast.de</a></p>

    <p><strong>Unternehmen / Verantwortlicher</strong><br>
    Physio Strobl – therapeutisches Handwerk<br>
    Inhaber: Matthias Strobl</p>

    <p><strong>Berufsbezeichnung</strong><br>
    Physiotherapeut<br>
    Verliehen in der Bundesrepublik Deutschland</p>

    <p><strong>Berufsrechtliche Regelungen</strong><br>
    Maßgeblich ist insbesondere das Gesetz über die Berufe in der Physiotherapie (MPhG).<br>
    Einsehbar unter:
<a href="https://www.gesetze-im-internet.de/mphg/" target="_blank" rel="noopener">gesetze-im-internet.de/mphg</a></p>

    <h2>Verbraucherstreitbeilegung</h2>
    <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

    <h2>Haftung für Inhalte</h2>
    <p>Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nur im Rahmen der gesetzlichen Vorschriften. Bei Bekanntwerden konkreter Rechtsverletzungen werden wir entsprechende Inhalte umgehend entfernen.</p>

    <h2>Haftung für Links</h2>
    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

    <h2>Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.</p>
  `,
  datenschutz: `
    <h2>Datenschutzerklärung</h2>
    <p>Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten Ihre personenbezogenen Daten ausschließlich im Rahmen der gesetzlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).</p>

    <h2>1. Verantwortlicher</h2>
    <p>
      Matthias Strobl<br>
      Physio Strobl – therapeutisches Handwerk<br>
      FaSt – Physiotherapie in sozialen Einrichtungen<br>
      Münchener Str. 155<br>
      85051 Ingolstadt<br>
E-Mail: <a href="mailto:info@physio-fast.de">info@physio-fast.de</a>
    </p>

    <h2>2. Hosting und Server-Logfiles</h2>
    <p>Beim Besuch dieser Website werden durch den Hosting-Anbieter technisch notwendige Daten verarbeitet. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem, Referrer-URL sowie aufgerufene Seiten gehören. Die Verarbeitung erfolgt zur Sicherstellung des technischen Betriebs und zur Gewährleistung der Sicherheit der Website.</p>

    <h2>3. Kontaktaufnahme</h2>
    <p>Wenn Sie über die auf dieser Website bereitgestellten Kontaktmöglichkeiten mit uns in Verbindung treten, verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage. Dies betrifft insbesondere Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer, Ihre Nachricht sowie weitere freiwillig von Ihnen gemachte Angaben.</p>
    <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf die Anbahnung oder Durchführung eines Vertrags gerichtet ist, sowie im Übrigen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Bearbeitung von Anfragen.</p>

    <h2>4. Kontaktformulare auf dieser Website</h2>
    <p>Die auf dieser Website eingebundenen Formulare öffnen aktuell Ihr E-Mail-Programm über eine mailto-Funktion. Dabei werden die von Ihnen eingetragenen Daten erst dann an uns übermittelt, wenn Sie den Versand der E-Mail in Ihrem eigenen E-Mail-Programm aktiv bestätigen. Eine automatische Speicherung der Formulardaten auf dieser Website erfolgt durch diese Funktion nicht.</p>

    <h2>5. Empfänger der Daten</h2>
    <p>Ihre Daten werden grundsätzlich nicht an Dritte weitergegeben, es sei denn, dies ist zur Bearbeitung Ihrer Anfrage erforderlich, gesetzlich vorgeschrieben oder anderweitig rechtlich zulässig.</p>

    <h2>6. Speicherdauer</h2>
    <p>Wir speichern personenbezogene Daten nur so lange, wie dies zur Bearbeitung Ihrer Anfrage, zur Erfüllung vertraglicher oder gesetzlicher Pflichten oder aufgrund berechtigter Interessen erforderlich ist.</p>

    <h2>7. Ihre Rechte</h2>
    <p>Sie haben nach Maßgabe der gesetzlichen Vorschriften das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten, auf Berichtigung, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung.</p>

    <h2>8. Beschwerderecht bei einer Aufsichtsbehörde</h2>
    <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</p>

    <h2>9. SSL- bzw. TLS-Verschlüsselung</h2>
    <p>Sofern diese Website über eine verschlüsselte Verbindung aufgerufen wird, erfolgt die Übertragung von Inhalten mittels SSL- bzw. TLS-Verschlüsselung.</p>

    <h2>10. Externe Dienste und Inhalte</h2>
    <p>Sofern auf dieser Website darüber hinaus externe Dienste, eingebettete Inhalte, Karten, Analyse- oder Trackingtools eingesetzt werden, muss diese Datenschutzerklärung entsprechend ergänzt werden.</p>

    <p class="small">Stand: März 2026</p>
  `
};

    function openLegal(kind){
      const backdrop = byId("fastLegalBackdrop");
      const body = byId("legalBody");
      const title = byId("legalTitle");
      if(!backdrop || !body || !title) return;

      if(kind === "impressum"){
        title.textContent = "Impressum";
        body.innerHTML = LEGAL.impressum;
      } else {
        title.textContent = "Datenschutz";
        body.innerHTML = LEGAL.datenschutz;
      }
      backdrop.classList.add("active");
    }

    function closeLegal(){
      const backdrop = byId("fastLegalBackdrop");
      if(!backdrop) return;
      backdrop.classList.remove("active");
    }

    // Footer links
    byId("btnOpenImpressum").addEventListener("click", ()=>openLegal("impressum"));
    byId("btnOpenDatenschutz").addEventListener("click", ()=>openLegal("datenschutz"));

    // Consent links
    byId("eOpenDS").addEventListener("click", ()=>openLegal("datenschutz"));
    byId("tOpenDS").addEventListener("click", ()=>openLegal("datenschutz"));
    byId("kOpenDS").addEventListener("click", ()=>openLegal("datenschutz"));

    // Close legal
    byId("closeLegal").addEventListener("click", closeLegal);
    byId("fastLegalBackdrop").addEventListener("click",(e)=>{ if(e.target === byId("fastLegalBackdrop")) closeLegal(); });

    // ===== Einrichtung Modal =====
    function openModal(){ byId("modalEinrichtung").style.display = "flex"; }
    function closeModal(){ byId("modalEinrichtung").style.display = "none"; resetEinrichtung(); }
    function showStep(n){
      ["eStep1","eStep2","eStep3"].forEach(id => byId(id).classList.remove("active"));
      byId("eStep"+n).classList.add("active");
    }
    function resetEinrichtung(){ showStep(1); }

    byId("btnEinrichtung").addEventListener("click", openModal);
    byId("closeEinrichtung").addEventListener("click", closeModal);
    byId("eCancel1").addEventListener("click", closeModal);

    byId("modalEinrichtung").addEventListener("click",(e)=>{ if(e.target === byId("modalEinrichtung")) closeModal(); });

    byId("eNext1").addEventListener("click",()=>{
      const ok = req(byId("eName").value) && req(byId("eStreet").value) && req(byId("eZip").value) && req(byId("eCity").value);
      if(!ok){ alert("Bitte füllen Sie alle Pflichtfelder (*) aus."); return; }
      showStep(2);
    });

    byId("eBack2").addEventListener("click",()=>showStep(1));
    byId("eNext2").addEventListener("click",()=>{
      if(!req(byId("eNeed").value)){ alert("Bitte wählen Sie eine Bedarfseinschätzung aus."); return; }
      showStep(3);
    });

    byId("eBack3").addEventListener("click",()=>showStep(2));

    byId("eSend").addEventListener("click",()=>{
      const ok = req(byId("eContactName").value) && req(byId("ePhone").value) && req(byId("eEmail").value);
      if(!ok){ alert("Bitte füllen Sie Name, Telefon und E-Mail aus."); return; }

      if(!byId("eConsent").checked){
        alert("Bitte bestätigen Sie die Datenschutzerklärung, bevor Sie senden.");
        return;
      }

const recipient = "info@physio-fast.de";
      const subject = "FaSt – Bedarfsmeldung (Einrichtung)";
      const bodyLines = [
        "BEDARFSMELDUNG – EINRICHTUNG",
        "",
        "Einrichtung:",
        byId("eName").value,
        "",
        "Adresse:",
        byId("eStreet").value,
        byId("eZip").value + " " + byId("eCity").value,
        "",
        "Bedarfseinschätzung (Anzahl Bewohner mit Bedarf):",
        byId("eNeed").value,
        "",
        "Ansprechpartner:",
        (byId("eSal").value ? byId("eSal").value + " " : "") + byId("eContactName").value,
        "Telefon: " + byId("ePhone").value,
        "E-Mail: " + byId("eEmail").value,
        "",
        "Nachricht:",
        (byId("eMsg").value || "—"),
        "",
        "Hinweis: Unverbindliche Bedarfsermittlung über die FaSt-Website."
      ];

      const mailto = "mailto:" + encodeURIComponent(recipient)
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });

    // ===== Therapeut Modal =====
    const tState = { step1:"", step2:"", step4:"" };
    function showTStep(n){
      const ids = ["tStep1","tStep2","tStep3","tStep4","tStep5","tStep6"];
      ids.forEach(id => byId(id).classList.remove("active"));
      byId("tStep"+n).classList.add("active");
    }
    function openTherapeut(){ byId("modalTherapeut").style.display = "flex"; showTStep(1); }
    function closeTherapeut(){ byId("modalTherapeut").style.display = "none"; showTStep(1); }

    byId("btnTherapeut").addEventListener("click", openTherapeut);
    byId("closeTherapeut").addEventListener("click", closeTherapeut);
    byId("tCancel1").addEventListener("click", closeTherapeut);

    byId("modalTherapeut").addEventListener("click",(e)=>{ if(e.target === byId("modalTherapeut")) closeTherapeut(); });

    byId("tBack2").addEventListener("click",()=>showTStep(1));
    byId("tBack3").addEventListener("click",()=>showTStep(2));
    byId("tBack4").addEventListener("click",()=>showTStep(3));
    byId("tBack5").addEventListener("click",()=>showTStep(4));
    byId("tBack5b").addEventListener("click",()=>showTStep(4));
    byId("tBack6").addEventListener("click",()=>showTStep(5));

    document.querySelectorAll("#modalTherapeut .fast-choice-btn").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const next = btn.getAttribute("data-next");
        const val = btn.getAttribute("data-value");
        const currentStep = btn.closest(".fast-step").id;
        if(currentStep === "tStep1") tState.step1 = val;
        if(currentStep === "tStep2") tState.step2 = val;
        if(currentStep === "tStep4") tState.step4 = val;
        showTStep(Number(next));
      });
    });

    function updateQualHint(){
      byId("tQualHint").style.display = byId("tQualNone").checked ? "block" : "none";
    }
    ["tQualMT","tQualZNS","tQualMLD","tQualAzubi","tQualNone"].forEach(id => {
      byId(id).addEventListener("change", updateQualHint);
    });
    updateQualHint();

    byId("tNext3").addEventListener("click",()=>showTStep(4));

    byId("cUseMT").addEventListener("change",()=>{
      byId("cMT").disabled = !byId("cUseMT").checked;
      if(byId("cMT").disabled) byId("cMT").value = "";
    });
    byId("cUseZNS").addEventListener("change",()=>{
      byId("cZNS").disabled = !byId("cUseZNS").checked;
      if(byId("cZNS").disabled) byId("cZNS").value = "";
    });

    function num(v){ const x = parseFloat(String(v).replace(",", ".")); return Number.isFinite(x) ? x : 0; }
    function fmtEUR(n){ return n.toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2}) + " €"; }

    byId("cCalc").addEventListener("click",()=>{
      const hours = num(byId("cHours").value);
      const days = num(byId("cDays").value);
      if(hours <= 0 || !days){ alert("Bitte gib Stunden pro Woche und Arbeitstage pro Woche an."); return; }

      const RATE_KG = 42.72, RATE_MT = 46.68, RATE_ZNS = 60.15;

      let pKG = num(byId("cKG").value);
      let pMT = byId("cUseMT").checked ? num(byId("cMT").value) : 0;
      let pZNS = byId("cUseZNS").checked ? num(byId("cZNS").value) : 0;

      if((pKG + pMT + pZNS) <= 0){
        byId("cResultBox").style.display="block";
        byId("cMonthly").textContent="Monatsbrutto (Orientierungswert): " + fmtEUR(0);
        byId("cYearly").textContent ="Jahresbrutto (Orientierungswert): " + fmtEUR(0);
        return;
      }

      const sum = pKG + pMT + pZNS;
      if(sum < 100) pKG += (100 - sum);
      else if(sum > 100){
        const f = 100 / sum;
        pKG *= f;
        pMT *= f;
        pZNS *= f;
      }

      const weighted20 = (pKG/100)*RATE_KG + (pMT/100)*RATE_MT + (pZNS/100)*RATE_ZNS;
      const revPerHour = 3 * weighted20;
      const hourlyGross = 20 + 0.10 * revPerHour;

      const yearly = hourlyGross * hours * 52;
      const monthly = yearly / 12;

      byId("cResultBox").style.display="block";
      byId("cMonthly").textContent="Monatsbrutto (Orientierungswert): " + fmtEUR(monthly);
      byId("cYearly").textContent ="Jahresbrutto (Orientierungswert): " + fmtEUR(yearly);
    });

    byId("tNext5").addEventListener("click",()=>showTStep(6));

    byId("tSend").addEventListener("click",()=>{
      const name  = (byId("tName").value  || "").trim();
      const email = (byId("tEmail").value || "").trim();
      const zip   = (byId("tZip").value   || "").trim();
      const city  = (byId("tCity").value  || "").trim();

      if(!name || !email || !zip || !city){
        alert("Bitte fülle Name, E-Mail, PLZ und Ort aus.");
        return;
      }

      if(!byId("tConsent").checked){
        alert("Bitte bestätige die Datenschutzerklärung, bevor du sendest.");
        return;
      }

      const quals = [];
      if(byId("tQualMT").checked)   quals.push("MT");
      if(byId("tQualZNS").checked)  quals.push("KG-ZNS");
      if(byId("tQualMLD").checked)  quals.push("MLD");
      if(byId("tQualAzubi").checked)quals.push("In Ausbildung");
      if(byId("tQualNone").checked) quals.push("Keine Zusatzqualifikation");
      const qualsStr = quals.length ? quals.join(", ") : "—";

const recipient = "info@physio-fast.de";
      const subject = "FaSt – Therapeuteninteresse";

      const bodyLines = [
        "THERAPEUTENINTERESSE – FaSt",
        "",
        "Antworten:",
        "Arbeitsfeld (Einrichtungen): " + (tState.step1 || "—"),
        "Arbeitsweise (Selbst strukturieren): " + (tState.step2 || "—"),
        "Modell: " + (tState.step4 || "—"),
        "",
        "Zusatzqualifikationen: " + qualsStr,
        "",
        "Rechner (Angaben):",
        "Stunden/Woche: " + (byId("cHours").value || "—"),
        "Tage/Woche: " + (byId("cDays").value || "—"),
        "KG%: " + (byId("cKG").value || "0"),
        "MT%: " + (byId("cUseMT").checked ? (byId("cMT").value || "0") : "nicht berücksichtigt"),
        "KG-ZNS%: " + (byId("cUseZNS").checked ? (byId("cZNS").value || "0") : "nicht berücksichtigt"),
        "",
        "Kontakt:",
        "m/w/d: " + (byId("tGender").value || "—"),
        "Name: " + name,
        "E-Mail: " + email,
        "Telefon: " + (byId("tPhone").value || "—"),
        "PLZ: " + zip,
        "Ort: " + city,
        "",
        "Hinweis: Unverbindliche Interessensbekundung über die FaSt-Website."
      ];

      const mailto = "mailto:" + encodeURIComponent(recipient)
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });

    // Qual logic (None unchecks others & vice versa)
    (function initQualLogicWithRetry(){
      function wireQualLogic(){
        const qMT=byId("tQualMT"), qZNS=byId("tQualZNS"), qMLD=byId("tQualMLD"), qAzubi=byId("tQualAzubi"), qNone=byId("tQualNone");
        if(!qNone || !qMT || !qZNS || !qAzubi) return false;
        if(qNone.dataset.wired === "1") return true;

        const otherQuals = [qMT,qZNS,qMLD,qAzubi].filter(Boolean);

        qNone.addEventListener("change", function(){ if(this.checked) otherQuals.forEach(q => q.checked=false); });
        otherQuals.forEach(q => { q.addEventListener("change", function(){ if(this.checked) qNone.checked=false; }); });

        qNone.dataset.wired="1";
        return true;
      }
      let tries=0;
      const timer=setInterval(()=>{ tries++; const ok=wireQualLogic(); if(ok || tries>50) clearInterval(timer); },100);
    })();

    // ===== FaSt Info Modal (Logo click) =====
    function openFastInfo(){
      const backdrop = byId("fastInfoBackdrop");
      if(!backdrop) return;
      backdrop.classList.add("active");
    }
    function closeFastInfo(){
      const backdrop = byId("fastInfoBackdrop");
      if(!backdrop) return;
      backdrop.classList.remove("active");
    }

    (function(){
      const btn = byId("btnFastInfo");
      const cta = byId("btnFastInfoText");
      if(btn){
        btn.addEventListener("click", openFastInfo);
        btn.addEventListener("keydown",(e)=>{
          if(e.key==="Enter" || e.key===" "){ e.preventDefault(); openFastInfo(); }
        });
      }
      if(cta){
        cta.addEventListener("click", openFastInfo);
        cta.addEventListener("keydown",(e)=>{
          if(e.key==="Enter" || e.key===" "){ e.preventDefault(); openFastInfo(); }
        });
      }
    })();

    byId("fastInfoBackdrop").addEventListener("click",(e)=>{ if(e.target === byId("fastInfoBackdrop")) closeFastInfo(); });

    // ===== Kontakt Modal =====
    function openKontakt(){ byId("modalKontakt").style.display = "flex"; }
    function closeKontakt(){ byId("modalKontakt").style.display = "none"; }

    byId("btnKontakt").addEventListener("click", openKontakt);
    byId("closeKontakt").addEventListener("click", closeKontakt);
    byId("kCancel").addEventListener("click", closeKontakt);

    byId("modalKontakt").addEventListener("click",(e)=>{ if(e.target === byId("modalKontakt")) closeKontakt(); });

    byId("kSend").addEventListener("click",()=>{
      const name  = (byId("kName").value || "").trim();
      const email = (byId("kEmail").value || "").trim();
      const msg   = (byId("kMsg").value || "").trim();

      if(!name || !email || !msg){
        alert("Bitte füllen Sie alle Pflichtfelder (*) aus.");
        return;
      }

      if(!byId("kConsent").checked){
        alert("Bitte bestätigen Sie die Datenschutzerklärung, bevor Sie senden.");
        return;
      }

const recipient = "info@physio-fast.de";
      const subject = "FaSt – Kontaktanfrage Website";

      const bodyLines = [
        "KONTAKTANFRAGE – Website",
        "",
        "Name: " + name,
        "E-Mail: " + email,
        "Telefon: " + (byId("kPhone").value || "—"),
        "",
        "Nachricht:",
        msg
      ];

      const mailto = "mailto:" + encodeURIComponent(recipient)
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });

    // ===== Global ESC closes topmost modal =====
    document.addEventListener("keydown", function(e){
      if(e.key !== "Escape") return;

      const legal = byId("fastLegalBackdrop");
      if(legal && legal.classList.contains("active")){ closeLegal(); return; }

      const info = byId("fastInfoBackdrop");
      if(info && info.classList.contains("active")){ closeFastInfo(); return; }
    });
  
