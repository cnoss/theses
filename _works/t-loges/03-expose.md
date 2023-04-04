# Exposé "Entwicklung einer automatisierten Lösung zur Generierung von Beschreibungstexten für Wein im E-Commerce Bereich auf Basis strukturierter Produktdaten"

## Thema

Beschreibungstexte sind ein wichtiger Bestandteil der Kaufentscheidung im E-Commerce Bereich. Hier gilt es, potenzielle Kunden über ein Produkt und ihre Merkmale aufzuklären, um einen Kaufwunsch einzuleiten. Je nach Produktklasse werden Beschreibungstexte i.d.R. durch den Shop Betreiber erstellt oder direkt vom Produzenten übernommen. Die Rahmenbedingungen dieser Arbeit ist der Weinhandel, hier gibt es eine weitere Eigenheit: Für das Erstellen von Beschreibungen muss ein umfassendes Wissen über die Produkte vorhanden sein, da gewisse Nuancen wie Aroma, Geschmack etc. oftmals nicht trivial sind. Daher wird häufig auf die Texte der Großhändler zurückgegriffen, was wiederum das Problem mit sich bringt, dass viele Shops die gleichen oder ähnliche Beschreibungstexte enthalten.

Thema dieser Arbeit ist das automatische Generieren von Beschreibungstexten für Wein im E-Commerce Bereich. Hierfür soll ein vortrainiertes Sprachmodell genutzt werden, welches auf Basis der strukturierten Produktdaten Beschreibungstexte voll-automatisch erstellt. Dementsprechend sollen aktuell verfügbare Sprachmodelle verglichen werden, um ein Geeignetes zu identifizieren.
Die strukturierten Produktdaten kommen vom Großhandel und enthalten Informationen über Region, Rebsorte, Charakteristiken etc.
Ebenfalls gilt es, durch Experten aus dem Bereich des Weinhandels zu Evaluieren, inwiefern sich die generierten Texte eignen, um Weine zu Beschreiben. Hierfür stellt der externe Partner dieser Arbeit Experten aus der Branche, welche nachher durch Interviews die Texte bewerten sollen. Es besteht die Möglichkeit, Blind-Interviews durchzuführen, um sicherzustellen, dass die Interviews unvoreingenommen durchgeführt werden.

Um die Nutzung für die Redakteure zu ermöglichen, soll ein Plugin für Shopware 6 entstehen. Hier sind zwei Punkte interessant: Wie muss das User Interface gestaltet sein, damit Editoren effizient Texte Evaluieren, Bewerten und Tunen können? Und wie kann die Generierung für eine Menge von mehreren Hundert Produkten erfolgen?

Diese Arbeit entsteht zusammen mit dem externen Partner Gjuce. Gjuce ist eine Webagentur aus Köln, welche unter anderem Shops im Bereich des Weinhandels betreut und daher mit Expertise unterstützen kann.

## Forschungsfragen/Zielsetzungen

1. Welches Sprachmodell eignet sich für die automatische Generierung von Beschreibungstexten aus strukturierten Produktmerkmalen?
2. Welche Kriterien werden benötigt, um automatisch generierte Beschreibungstexte zu Bewerten?
   1. Gibt es Unterschiede bei den Kriterien, wenn sich die Zielgruppe ändert?
3. Wie muss UX/UI gestaltet sein, um eine automatische Generierung und Evaluierung der Beschreibungstexte durch einen Redakteur im Shop-Backend effizient durchführen zu können?
4. Wie kann die Generierung und Evaluierung von Beschreibungstexten bei einer Anzahl von mehreren Hundert Produkten effizient durchgeführt werden?

## Gliederung

- Einleitung
  - Problemstellung
  - Motivation
  - Forschungsfragen / Zielsetzung
- Grundlagen
  - Zielgruppen / Stakeholder Identifizieren
  - Bedeutung von Beschreibungstexten im E-Commerce
  - _E-Commerce Allgmein?_
    - _Anwendungsfall Weinhandel?_
  - Kriterien für Bewertung aufstellen
  - Shopware und Plugin Ecosystem
- Sprachmodelle und ihre Anwendung (in der Textgenerierung)
  - Aufbau / Funktionsweise von Sprachmodellen
  - Vergleich
  - Prompt Engineering / Tuning
- Plugin Entwicklung
- Evaluation und Validierung
  - Bewertung der Textqualität durch Experten
  - Bewertung der UX/UI durch Redakteure
  - Internationalisierung / Lokalisierung
  - _(Ausblick / Abstraktion in andere Branchen (zu Ambitioniert?))_
- Beschreibung der automatisierten Lösung
- Fazit, Ausblick, Implikationen

## Forschungsstand

Durch den aktuellen Fokus auf KI-gestütze Produktergänzungen gibt es eine Reihe an Unternehmen, welche an eigenen Sprachmodellen (Large Language Models - LLM) arbeiten. Die [Themenfeldanalyse](./01-resarch-area-analysis/Themenfeldanalyse.pdf) gibt hier einen Überblick von einigen Sprachmodellen die bei einer ersten Recherche aufgetreten sind. Die Aktuell am meisten genannten sind sicherlich OpenAI mit ChatGPT (v3.5 & v4) sowie Google mit Bert.

**Referenzen:**

- [OpenaAi - ChatGPT](https://openai.com/blog/chatgpt)
- [OpenAi - GPT4](https://openai.com/product/gpt-4)
- [Google - BERT](https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html)
- [Google - Flan-T5-XXL](https://huggingface.co/google/flan-t5-xxl)
- [Stanford - How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai)
- [Christopher D. Manning - Human Language Understanding & Reasoning](https://www.amacad.org/publication/human-language-understanding-reasoning)
- [Current Approaches and Applications in Natural Language Processing](https://www.mdpi.com/books/book/5892)

Der Themenbereich Sprachmodelle bzw. Large Language Models gibt innerhalb der [DigiBib](https://thb-koeln.digibib.net/search/eds/list?start=1&be-eds-expander=fulltext&parent_request_id=002pdinqolclk6o2vleg&parent_request_id_hmac=ea48c26539de621a6e235820151356e977b66b70&q-al=large+language+models&be-eds-sort=relevance) sowie Google-Scholar Suche mehrere Millionen Treffer. Hier gilt es dementsprechend stark Einzugrenzen.

**Genutze Suchbegriffe:**

- Large Language Models
- Language Models
- Sprachmodelle
- pre-trained language model

Im Bereich der Produktbeschreibung bzw. Beschreibungstexten ist in der ersten Orientierung aufgefallen, dass hier viel im Kontext der Search Engine Optimization (SEO) angesiedelt ist. Da das Thema SEO kein Fokus dieser Arbeit sein soll, muss davon ausgegangen werden, dass es deutlich aufwendiger wird, geeignete Referenzen zu finden.

## Deutsche Wein-Shops mit hochwertigen Weinbeschreibungen

- [Wein Plus](https://www.wein.plus/de)
- [Gute Weine](https://www.gute-weine.de/)
- [Wein am Limit](https://shop.weinamlimit.de/)
- [Baum Selection](https://baumselection.com/)
- [Tesdorpf](https://www.tesdorpf.de/)

## Zeitplan

tbd
