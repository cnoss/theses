# Exposé

## Problemfeld und Kontext

Im Internet lassen sich schnell unzählige Informationen und Inhalte finden und abrufen. Sowohl jurnalistische Texte, Lexikonartikel, als auch Bedienungsanleitung und Stellenanzeigen lassen sich finden. Diese Inhalte werden in der Regel in Form von HTML-Seiten (Hypertext Markup Language) bereitgestellt, wodurch sie sich über ihre URL (Uniform Resource Locator) in einem Browser öffnen, darstellen und betrachten lassen. Zusätzlich können die HTML-Seiten durch den Einsatz von CSS (Cascading Style Sheet) in ein gewünschtes Layout gebracht werden.
Ein Problem für Nutzende ist, dass die Verfasser\*innen, beziehungsweise Betreibenden der Webseiten, jederzeit die Inhalte verändern, an einen anderen Ort verschieben oder löschen können. Dies führt dazu, dass Informationen verloren gehen oder nicht mehr auffindbar sind. Zusätzlich wird in der Regel für das Abrufen der HTML-Seiten und eingebetteten Dateien, wenn diese nicht lokal auf dem Computer des Nutzenden vorliegen, eine aktive Internetverbindung benötigt.
Um die Informationen auch ohne Internetverbindung verfügbar zu machen, können diese beispielsweise in Form von PDF-Dokumenten gespeichert werden. Bei PDF (Portable Document Format) handelt es sich um ein plattformunabhängiges Dateiformat, welches von Adobe entwickelt wurde und als Standard von der PDF Association weiterentwickelt wird [1]. PDF-Dokumente können auf jedem Endgerät mit einem PDF-Reader geöffnet werden und sehen unabhängig von Endgerät und Betriebssystem immer gleich aus.

Von der Möglichkeit, aus Webinhalten PDF-Dokumente zu erstellen, profitieren sowohl Betreibende der Webangebote als auch die Nutzenden. Betreibende können einen Download als PDF anbieten, ohne das sie die Informationen zweimal aufbereiten müssen, da die Informationen bereits in Form von HTML-Markup mit CSS-Layout vorliegen, woraus das PDF-Dokument generiert wird. Dies kann beispielsweise bei kurzlebigen Stellenanzeigen hilfreich sein, die sowohl als HTML-Seite als auch als PDF-Download zur Verfügung gestellt werden. Die Generierung eines PDF-Dokuments aus dem existierenden Webinhalt kann hier Zeit und Kosten sparen.
Nutzende profitieren von einer als PDF-Dokument gespeicherten Version der Webinhalte unter anderem dadurch, dass sie diese offline nutzen können. Außerdem haben sie einen Stand der Informationen zum Zeitpunkt des Abrufs, welcher sich nicht verändert. Dies kann beispielsweise bei der Recherche von Informationen hilfreich sein. 

Die Generierung von PDF-Dokumenten anhand von Webseiten im HTML-Format unter Verwendung des durch CSS definierten Designs ist aktuell nur mit Einschränkungen möglich.
Eine Möglichkeit ist die serverseitige Generierung, hierbei wird die Webseite auf einem Server in einem Headless-Browser aufgerufen. Unter diesem versteht sich ein Browser, welcher ohne grafische Ausgabe Webinhalte abruft. Nach dem Aufruf der Seite wird diese anschließend als PDF-Dokument gespeichert und daraufhin heruntergeladen. Für diesen Prozess wird ein zusätzlicher Server benötigt, welcher durch Anschaffung und Betrieb weitere Kosten verursacht. 
Eine andere Möglichkeit ist die clientseitige Generierung durch eine JS-Bibliothek (JavaScript). Es stehen verschiedene Bibliotheken zur Verfügung, welche unter anderem aus dem HTML- und CSS-Inhalten ein PDF-Dokument generieren können. Die Bibliotheken arbeiten meist mit der Methode, dass die Webseite auf die gewünschte Seitenbreite des PDFs skaliert wird und anschließend ein oder mehrere Bilder des Inhalts, ähnlich einem Bildschirmfoto, in der Größe einer PDF-Seite erstellt wird. Die daraus entstehenden Bilder werden anschließend in das PDF-Dokument eingefügt. Es kommt dazu, dass es sich nur noch um ein Bild handelt und jeglicher Text nicht mehr als Text, sondern als Teil des Bilds vorliegt. Dies hat zur Folge, dass der Text nicht mehr markiert, kopiert oder durchsucht werden kann. Die Inhalte verlieren ihre Semantik, welche sie als Teil der HTML-Seite besitzen.
Eine weitere Option ist die Generierung von PDF-Dokumenten durch den Druckdialog des Browsers. Im Gegensatz zu der clientseitigen Generierung durch eine Bibliothek geht die Semantik nicht verloren. Ein Nachteil dieser Variante ist jedoch, dass die Browser unteranderem standardmäßig Hintergrundfarben von Elementen entfernen um im wirklichen Druck Farbe zu sparen. Dadurch sehen die Inhalte nicht mehr so aus wie auf der Webseite. Zusätzlich werden Elemente, wenn sie auf einen Seitenumbruch fallen, in der Regel halbiert und auf die beiden Seiten verteilt. Dies kann dazu führen, dass beispielsweise Bilder, Tabellen oder Texte nicht mehr vollständig auf einer Seite dargestellt werden und schwerer für den Betrachter ergreifbar sind.

## Ziel

In dieser Masterarbeit sollen die verschiedenen Möglichkeiten der clientseitigen Generierung von PDF-Dokumenten aus HTML-Markup unter Berücksichtigung der Gestaltung durch CSS betrachtet und deren Resultate verglichen werden. Hierdurch wird der aktuelle Stand der Technik betrachtet. Anschließend soll eine Bibliothek entwickelt werden, welche die Vorteile der verschiedenen Möglichkeiten vereint und die Nachteile minimiert. Dabei soll die Bibliothek unter anderem die verschiedenen Inhalte erkennen und daraufhin als solche im PDF-Dokument darstellen, sodass die Semantik nicht verloren geht. Des Weiteren soll die Bibliothek es ermöglichen, das Layout durch Text-Dokument-typische Elemente wie Seiten-Header und -Footer, Inhaltsverzeichnis und Seitenzahlen zu erweitern.

## Vorläufige Gliederung (weitere Unterkapitel und Veränderungen möglich)

1. Einleitung
    * Problemstellung
    * Motivation
    * Zielsetzung
    * Kontext
2. Grundlagen des PDF-Formats
    1. Versionen von PDF (1.0, 1.1-1.4, 1.5, 1.7, 2.0)
    2. Arten von PDF
    3. Geschichte von PDF (Exkurs)
    4. Aufbau von PDF 
        1. Grundstruktur
        2. Boxes / Boxmodel
        3. Datentypen
        4. Direkte und indirekte Objekte 
3. Aufbau von Webseiten mit HTML und CSS
    1. Grundlagen HTML
    2. Grundlagen CSS
4. Aktueller Stand der Technik
    1. Clientseitige Generierung
    2. (Serverseitige Generierung (kurz, da Fokus auf clientseitiger Generierung))
5. Konzeption für die Umsetzung der Bibliothek
    1. Zielsetzung
    2. Nichtfunktionale Anforderungen
    3. Funktionale Anforderungen
    4. Aufteilung der Artefakte
    5. Mögliche Komplikationen 
5. Umsetzung und Entwicklung der Bibliothek
    1. PDF-Datenmodell
    2. HTML-Parsing und Interpretation
    3. Schreiben des PDFs
    4. Weitere Einblicke
6. Fazit 
    * Zusammenfassung
    * Fazit
    * Ausblick


## Mögliche Quellen und Literatur

- ISO 32000-1:2008 - "Document management — Portable document format — Part 1: PDF 1.7" https://pdfa.org/resource/iso-32000-pdf/ (Zuletzt abgerufen: 04.09.2023)
- ISO 32000-2:2020 - "Document management – Portable document format – Part 2: PDF 2.0" https://pdfa.org/resource/iso-32000-pdf/ (Zuletzt abgerufen: 04.09.2023)
- Rosenthol, L., 2013. Developing with PDF: Dive Into the Portable Document Format. O’Reilly Media.
- Bienz, T., Cohn, R., & Adobe Systems (Mountain View, Calif.). 1993. Portable document format reference manual. Addison-Wesley.
- Bühler, P., Schlaich, P., Sinner, D. 2018. PDF-Grundlagen. In: Bibliothek der Mediengestaltung. Springer Vieweg, Berlin, Heidelberg. https://doi.org/10.1007/978-3-662-54615-4_1 
- Atkins, T., Etemad, E., Rivoal, F., Lilley, C. 2023. CSS Snapshot 2023, W3C Group Draft Note. https://www.w3.org/TR/2023/DNOTE-css-2023-20230214/ (Zuletzt abgerufen: 04.09.2023)
- Pieters, S., Adams, G., van Kesteren, A. 2021. CSS Object Model (CSSOM), W3C Working Draft. https://www.w3.org/TR/cssom-1/ (Zuletzt abgerufen: 04.09.2023)
- Whitington, J. 2011. PDF explained.  O'Reilly Media.
- [1] PDF Association, o.D. . About the Portable Document Format. https://pdfa.org/about-us/the-portable-document-format/ (Zuletzt abgerufen: 04.09.2023)
