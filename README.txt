FaSt Website – aufgeteilte Version

Dateien:
- index.html
- css/style.css
- js/script.js

EmailJS wurde vorbereitet:
- CDN ist in index.html eingebunden.
- In js/script.js gibt es oben den Block EMAILJS_CONFIG.
- Dort bitte eintragen:
  - publicKey
  - serviceId
  - templateId fuer Einrichtung
  - templateId fuer Therapeut
  - templateId fuer Kontakt

Ohne diese 5 Werte zeigt die Seite beim Senden einen Hinweis zur fehlenden Konfiguration.
