    // ===== Helpers =====
    const byId = (id) => document.getElementById(id);
    function req(val){ return (val || "").trim().length > 0; }

    // ===== EmailJS config =====
    const EMAILJS_CONFIG = {
      publicKey: "VtxuO_VHab-oaPsmo",
      serviceId: "service_xKontx",
      templates: {
        einrichtung: "template_r87t54j",
        therapeut: "template_jrexu7i",
        kontakt: "template_r87t54j"
      }
    };

    function emailJsReady(){
      return typeof window.emailjs !== "undefined"
        && EMAILJS_CONFIG.publicKey
        && !EMAILJS_CONFIG.publicKey.startsWith("BITTE_")
        && EMAILJS_CONFIG.serviceId
        && !EMAILJS_CONFIG.serviceId.startsWith("BITTE_")
        && EMAILJS_CONFIG.templates.einrichtung
        && !EMAILJS_CONFIG.templates.einrichtung.startsWith("BITTE_")
        && EMAILJS_CONFIG.templates.therapeut
        && !EMAILJS_CONFIG.templates.therapeut.startsWith("BITTE_")
        && EMAILJS_CONFIG.templates.kontakt
        && !EMAILJS_CONFIG.templates.kontakt.startsWith("BITTE_");
    }

    if(typeof window.emailjs !== "undefined"){
      try {
        window.emailjs.init({
          publicKey: EMAILJS_CONFIG.publicKey,
          blockHeadless: true,
          limitRate: {
            id: "fast-website",
            throttle: 10000
          }
        });
      } catch (err) {
        console.warn("EmailJS konnte nicht initialisiert werden.", err);
      }
    }

    function setButtonLoading(button, isLoading, loadingText, defaultText){
      if(!button) return;
      if(!button.dataset.defaultText){
        button.dataset.defaultText = defaultText || button.textContent.trim();
      }
      button.disabled = !!isLoading;
      button.textContent = isLoading ? loadingText : (defaultText || button.dataset.defaultText);
      button.style.opacity = isLoading ? "0.75" : "";
      button.style.cursor = isLoading ? "wait" : "";
    }

    function resetEinrichtungForm(){
      ["eName","eStreet","eZip","eCity","eNeed","eSal","eContactName","ePhone","eEmail","eMsg"].forEach(id => {
        const el = byId(id);
        if(el) el.value = "";
      });
      const consent = byId("eConsent");
      if(consent) consent.checked = false;
    }

    function resetTherapeutForm(){
      tState.step1 = "";
      tState.step2 = "";
      tState.step4 = "";
      ["tQualMT","tQualZNS","tQualMLD","tQualAzubi","tQualNone","cUseMT","cUseZNS","tConsent"].forEach(id => {
        const el = byId(id);
        if(el) el.checked = false;
      });
      ["cHours","cDays","cKG","cMT","cZNS","tGender","tName","tEmail","tPhone","tZip","tCity","tMsg"].forEach(id => {
        const el = byId(id);
        if(el) el.value = "";
      });
      const cMT = byId("cMT");
      const cZNS = byId("cZNS");
      if(cMT) cMT.disabled = true;
      if(cZNS) cZNS.disabled = true;
      const resultBox = byId("cResultBox");
      if(resultBox) resultBox.style.display = "none";
      updateQualHint();
    }

    function resetKontaktForm(){
      ["kName","kEmail","kPhone","kMsg"].forEach(id => {
        const el = byId(id);
        if(el) el.value = "";
      });
      const consent = byId("kConsent");
      if(consent) consent.checked = false;
    }

    async function sendViaEmailJS(templateId, templateParams){
      if(!emailJsReady()){
        throw new Error("EmailJS ist noch nicht vollständig konfiguriert. Bitte Public Key, Service ID und Template IDs eintragen.");
      }
      return window.emailjs.send(EMAILJS_CONFIG.serviceId, templateId, templateParams);
    }

    // ===== Legal content =====
    const LEGAL = {
  impressum: `
    <h2>Impressum</h2>
    <p><strong>Angaben gemäß § 5 DDG</strong><br>
    Physio Strobl – FaSt<br>
    Inhaber: Matthias Strobl<br>
    Münchenerstraße 155<br>
    85051 Ingolstadt</p>

    <p><strong>Kontakt</strong><br>
    Telefon: <a href="tel:084145674267">0841 45674267</a><br>
    E-Mail FaSt: <a href="mailto:info@physio-fast.de">info@physio-fast.de</a><br>
    E-Mail Praxis: <a href="mailto:info@physio-strobl.de">info@physio-strobl.de</a></p>

    <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</strong><br>
    Matthias Strobl<br>
    Münchenerstraße 155<br>
    85051 Ingolstadt</p>

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
    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

    <h2>Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.</p>
  `,
  datenschutz: `
    <h2>Datenschutzerklärung</h2>
    <p>Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten ausschließlich nach den geltenden datenschutzrechtlichen Vorgaben, insbesondere der Datenschutz-Grundverordnung (DSGVO).</p>

    <h2>1. Verantwortlicher</h2>
    <p>
      Matthias Strobl<br>
      Physio Strobl – FaSt<br>
      Münchenerstraße 155<br>
      85051 Ingolstadt<br>
      Telefon: <a href="tel:084145674267">0841 45674267</a><br>
      E-Mail FaSt: <a href="mailto:info@physio-fast.de">info@physio-fast.de</a><br>
      E-Mail Praxis: <a href="mailto:info@physio-strobl.de">info@physio-strobl.de</a>
    </p>

    <h2>2. Aufruf der Website / Hosting</h2>
    <p>Beim Besuch dieser Website werden durch den Hosting-Anbieter technisch erforderliche Informationen verarbeitet. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem, Referrer-URL und aufgerufene Seiten gehören. Die Verarbeitung erfolgt zur Bereitstellung der Website sowie zur Gewährleistung von Stabilität und Sicherheit.</p>
    <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einem sicheren und funktionsfähigen Betrieb der Website.</p>

    <h2>3. Kontaktaufnahme über Formulare, E-Mail oder Telefon</h2>
    <p>Wenn Sie uns kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Angaben zur Bearbeitung Ihrer Anfrage. Je nach Formular können dies insbesondere folgende Daten sein:</p>
    <ul>
      <li>Name</li>
      <li>E-Mail-Adresse</li>
      <li>Telefonnummer</li>
      <li>Einrichtung, Anschrift, Postleitzahl und Ort</li>
      <li>Angaben zu Bedarf, Arbeitsfeld, Arbeitsweise, Modell, Stunden, Tagen und Qualifikationen</li>
      <li>freiwillige Nachrichteninhalte</li>
    </ul>
    <p>Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, da vor dem Absenden der Formulare eine ausdrückliche Bestätigung der Datenschutzerklärung vorgesehen ist. Soweit Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist, kann ergänzend Art. 6 Abs. 1 lit. b DSGVO einschlägig sein.</p>

    <h2>4. Hinweis zu sensiblen Daten</h2>
    <p>Bitte übermitteln Sie über die Formulare möglichst keine sensiblen Gesundheitsdaten wie Diagnosen, Befunde oder detaillierte Krankheitsverläufe. Sollten Sie uns solche Angaben dennoch freiwillig mitteilen, verarbeiten wir diese ausschließlich zur Bearbeitung Ihrer Anfrage auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO.</p>

    <h2>5. Nutzung von EmailJS</h2>
    <p>Für die technische Übermittlung der Formularanfragen nutzen wir den Dienst EmailJS der EmailJS Pte. Ltd. Dabei werden die von Ihnen in die Formulare eingegebenen Daten aus Ihrem Browser an EmailJS übermittelt und von dort an die von uns hinterlegte Empfängeradresse weitergeleitet.</p>
    <p>Je nach Anfrage können hierbei insbesondere Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalte sowie weitere Formulardaten verarbeitet werden. Zweck der Verarbeitung ist die zuverlässige technische Übermittlung und Weiterleitung Ihrer Anfrage.</p>
    <p>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO. Soweit freiwillig besondere Kategorien personenbezogener Daten übermittelt werden, ist ergänzend Art. 9 Abs. 2 lit. a DSGVO maßgeblich.</p>

    <h2>6. Empfänger und Drittlandübermittlung</h2>
    <p>Empfänger Ihrer Formulardaten sind wir selbst sowie im Rahmen der technischen Abwicklung EmailJS als eingesetzter Dienstleister. Nach den Angaben von EmailJS werden die im Zusammenhang mit dem Dienst genutzten Server in den USA bei Amazon Web Services betrieben. Eine Verarbeitung personenbezogener Daten außerhalb der EU bzw. des EWR kann daher nicht ausgeschlossen werden.</p>
    <p>Nach den Angaben von EmailJS sollen für Übermittlungen personenbezogener Daten aus Europa geeignete Garantien im Sinne des Art. 46 DSGVO, insbesondere Standardvertragsklauseln, verwendet werden. Weitere Informationen finden Sie in den Datenschutzinformationen von EmailJS.</p>

    <h2>7. Speicherdauer</h2>
    <p>Wir speichern personenbezogene Daten nur so lange, wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen, löschen wir die Daten, sobald der Zweck der Verarbeitung entfallen ist.</p>

    <h2>8. Ihre Rechte</h2>
    <p>Sie haben im Rahmen der gesetzlichen Vorgaben insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft.</p>

    <h2>9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
    <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</p>

    <h2>10. SSL- bzw. TLS-Verschlüsselung</h2>
    <p>Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung in der Regel an der Adresszeile Ihres Browsers mit „https://“ und dem Schloss-Symbol.</p>

    <p class="small">Stand: 2. April 2026</p>
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
    const btnEinrichtungMobile = byId("btnEinrichtungMobile");
    if(btnEinrichtungMobile) btnEinrichtungMobile.addEventListener("click", openModal);
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

    byId("eSend").addEventListener("click", async ()=>{
      const ok = req(byId("eContactName").value) && req(byId("ePhone").value) && req(byId("eEmail").value);
      if(!ok){ alert("Bitte füllen Sie Name, Telefon und E-Mail aus."); return; }

      if(!byId("eConsent").checked){
        alert("Bitte bestätigen Sie die Datenschutzerklärung, bevor Sie senden.");
        return;
      }

      const sendButton = byId("eSend");
      setButtonLoading(sendButton, true, "Wird gesendet…", "Direkt senden");

      const templateParams = {
        to_email: "info@physio-fast.de",
        subject: "FaSt – Bedarfsmeldung (Einrichtung)",
        form_type: "Einrichtung",
        einrichtung_name: byId("eName").value.trim(),
        einrichtung_street: byId("eStreet").value.trim(),
        einrichtung_zip: byId("eZip").value.trim(),
        einrichtung_city: byId("eCity").value.trim(),
        einrichtung_need: byId("eNeed").value,
        contact_salutation: byId("eSal").value || "—",
        contact_name: byId("eContactName").value.trim(),
        contact_phone: byId("ePhone").value.trim(),
        contact_email: byId("eEmail").value.trim(),
        message: byId("eMsg").value.trim() || "—"
      };

      try {
        await sendViaEmailJS(EMAILJS_CONFIG.templates.einrichtung, templateParams);
        alert("Vielen Dank. Ihre Anfrage wurde direkt versendet.");
        resetEinrichtungForm();
        closeModal();
      } catch (err) {
        console.error(err);
        alert("Direktes Senden war nicht möglich. Bitte prüfen Sie die EmailJS-Konfiguration oder schreiben Sie an info@physio-fast.de.");
      } finally {
        setButtonLoading(sendButton, false, "Wird gesendet…", "Direkt senden");
      }
    });

    // ===== Therapeut Modal =====
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

    byId("tSend").addEventListener("click", async ()=>{
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

      const sendButton = byId("tSend");
      setButtonLoading(sendButton, true, "Wird gesendet…", "Interesse direkt senden");

      const templateParams = {
        to_email: "info@physio-fast.de",
        subject: "FaSt – Therapeuteninteresse",
        form_type: "Therapeut",
        arbeitsfeld: tState.step1 || "—",
        arbeitsweise: tState.step2 || "—",
        modell: tState.step4 || "—",
        qualification: qualsStr,
        qualifikationen: qualsStr,
        hours_week: byId("cHours").value || "—",
        days_week: byId("cDays").value || "—",
        kg_share: byId("cKG").value || "0",
        mt_share: byId("cUseMT").checked ? (byId("cMT").value || "0") : "nicht berücksichtigt",
        zns_share: byId("cUseZNS").checked ? (byId("cZNS").value || "0") : "nicht berücksichtigt",
        gender: byId("tGender").value || "—",
        name: name,
        email: email,
        phone: byId("tPhone").value.trim() || "—",
        zip: zip,
        city: city,
        message: byId("tMsg").value.trim() || "—"
      };

      try {
        await sendViaEmailJS(EMAILJS_CONFIG.templates.therapeut, templateParams);
        alert("Vielen Dank. Dein Interesse wurde direkt versendet.");
        resetTherapeutForm();
        closeTherapeut();
      } catch (err) {
        console.error(err);
        alert("Direktes Senden war nicht möglich. Bitte prüfe die EmailJS-Konfiguration oder schreibe an info@physio-fast.de.");
      } finally {
        setButtonLoading(sendButton, false, "Wird gesendet…", "Interesse direkt senden");
      }
    });

    // Qual logic (None unchecks others & vice versa)
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

    // ===== Team Modal =====
    function openTeam(){
      const backdrop = byId("fastTeamBackdrop");
      if(!backdrop) return;
      backdrop.classList.add("active");
    }
    function closeTeam(){
      const backdrop = byId("fastTeamBackdrop");
      if(!backdrop) return;
      backdrop.classList.remove("active");
    }

    (function(){
      const btn = byId("btnTeam");
      const closeX = byId("closeTeam");
      const closeBtn = byId("closeTeamBtn");
      const backdrop = byId("fastTeamBackdrop");
      if(btn) btn.addEventListener("click", openTeam);
      if(closeX) closeX.addEventListener("click", closeTeam);
      if(closeBtn) closeBtn.addEventListener("click", closeTeam);
      if(backdrop){
        backdrop.addEventListener("click", (e)=>{ if(e.target === backdrop) closeTeam(); });
      }
    })();

    // ===== Kontakt Modal =====
    function openKontakt(){ byId("modalKontakt").style.display = "flex"; }
    function closeKontakt(){ byId("modalKontakt").style.display = "none"; }

    byId("btnKontakt").addEventListener("click", openKontakt);
    byId("closeKontakt").addEventListener("click", closeKontakt);
    byId("kCancel").addEventListener("click", closeKontakt);

    byId("modalKontakt").addEventListener("click",(e)=>{ if(e.target === byId("modalKontakt")) closeKontakt(); });

    byId("kSend").addEventListener("click", async ()=>{
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

      const sendButton = byId("kSend");
      setButtonLoading(sendButton, true, "Wird gesendet…", "Nachricht direkt senden");

      const templateParams = {
        to_email: "info@physio-fast.de",
        subject: "FaSt – Kontaktanfrage Website",
        form_type: "Kontakt",
        name: name,
        email: email,
        phone: byId("kPhone").value.trim() || "—",
        message: msg
      };

      try {
        await sendViaEmailJS(EMAILJS_CONFIG.templates.kontakt, templateParams);
        alert("Vielen Dank. Ihre Nachricht wurde direkt versendet.");
        resetKontaktForm();
        closeKontakt();
      } catch (err) {
        console.error(err);
        alert("Direktes Senden war nicht möglich. Bitte prüfen Sie die EmailJS-Konfiguration oder schreiben Sie an info@physio-fast.de.");
      } finally {
        setButtonLoading(sendButton, false, "Wird gesendet…", "Nachricht direkt senden");
      }
    });

    // ===== Global ESC closes topmost modal =====
    // ===== Global ESC closes topmost modal =====
    document.addEventListener("keydown", function(e){
      if(e.key !== "Escape") return;

      const legal = byId("fastLegalBackdrop");
      if(legal && legal.classList.contains("active")){ closeLegal(); return; }

      const team = byId("fastTeamBackdrop");
      if(team && team.classList.contains("active")){ closeTeam(); return; }

      const info = byId("fastInfoBackdrop");
      if(info && info.classList.contains("active")){ closeFastInfo(); return; }

      const kontakt = byId("modalKontakt");
      if(kontakt && kontakt.style.display === "flex"){ closeKontakt(); return; }

      const therapeut = byId("modalTherapeut");
      if(therapeut && therapeut.style.display === "flex"){ closeTherapeut(); return; }

      const einrichtung = byId("modalEinrichtung");
      if(einrichtung && einrichtung.style.display === "flex"){ closeModal(); return; }
    });
  
