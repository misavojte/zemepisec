(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"36V8":function(e,l,n){"use strict";var a=n("q1tI"),t=n.n(a),r=n("Wbzz"),o=n("9eSz"),i=n.n(o);l.a=function(){var e,l,n=Object(r.useStaticQuery)("4097226816");return null!=n&&null!==(e=n.placeholderImage)&&void 0!==e&&null!==(l=e.childImageSharp)&&void 0!==l&&l.fluid?t.a.createElement(i.a,{fluid:n.placeholderImage.childImageSharp.fluid}):t.a.createElement("div",null,"Picture not found")}},Fnnz:function(e,l,n){"use strict";n.r(l);var a=n("q1tI"),t=n.n(a),r=n("Wbzz"),o=n("Bl7J"),i=n("36V8"),c=n("hU4x"),u=n("vrFN"),m=n("LiBD");l.default=function(){return t.a.createElement(o.a,null,t.a.createElement(u.a,{title:"Vysílané signály GNSS (GPS)"}),t.a.createElement("h1",null,"Vysílané signály GNSS (GPS)"),t.a.createElement("p",null,t.a.createElement("strong",null,"GNSS "),"je zkratkou pro ",t.a.createElement("strong",null,"globální navigační satelitní systém. "),"Obecně jde o službu, technologii umožňující pomocí signálu ze satelitních družic určit svou polohu, rychlost a čas s velkou přesností."),t.a.createElement("hr",null),t.a.createElement("h2",null,"Signály GPS"),t.a.createElement("p",null,"Mezi nosné frekvence systému GPS patří:"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("strong",null,"L1 "),"(1575,42MHz 19cm vlnová délka) – modulováno navigačními kódy P (pouze pro autorizované uživatele) a C/A (veřejně dostupné)"),t.a.createElement("li",null,t.a.createElement("strong",null,"L2 "),"(1227,60Mhz 24cm) – modulováno navigačním kódem P"),t.a.createElement("li",null,t.a.createElement("strong",null,"L5 "),"(1176,45 MHz) – v rámci projektu GPSIII pro civilní užití, modulováno Neuman-Hofman kódem")),t.a.createElement("p",null,"Mezi základní signály patří též ",t.a.createElement("strong",null,"družicová navigační zpráva"),", která obsahuje údaje o zdravotním stavu družic, pozici (efemeridy), korekce hodin, údaje o ostatních družicích (almanach), ionosféře a společné časové základně."),t.a.createElement("p",null,"Již několik let však probíhá tzv. “modernizace GPS”, které mnohé mění. Např. P a C/A kód bude nahrazen M (obdoba P) a C (obdoba C/A) kódem."),t.a.createElement("hr",null),t.a.createElement("h2",null,"Signály GLONASS a Galileo"),t.a.createElement("p",null,"U systému ",t.a.createElement("strong",null,"GLONASS")," jsou nosné frekvence modulovány kódy HP (pouze pro autorizované uživatele; obdoba P u GPS) a SP (veřejné; obdoba C/A u GPS). Mezi nosné frekvence patří:"),t.a.createElement("ul",null,t.a.createElement("li",null,"L1PT (1598–1605 MHz) – moduluje HP kód a SP kód"),t.a.createElement("li",null,"L2PT (1242–1248 MHz) – moduluje HP kód, na mladších družicích také SP kód"),t.a.createElement("li",null,"na mladších družicích další signály (i pro interoperabilitu s GPS a Galileo), rovněž navigační zpráva")),t.a.createElement("p",null,t.a.createElement("strong",null,"Galileo")," moduluje své signály poskytovaných služeb, poskytuje více signálů, z nichž s GPS se překrývá band L1 (s L1 u GPS) a E5a (s L5 u GPS)."),t.a.createElement("hr",null),t.a.createElement("h2",null,"Faktory ovlivňující měření"),t.a.createElement("p",null,"Mezi hlavní faktory ovlivňující měření pomocí GNSS patří:"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("strong",null,"nahodilé chyby (multipath) "),"= vícenásobné šíření signálu, které se odráží od zemského povrchu, objektů či jiných povrchů (lze řešit speciální anténou)"),t.a.createElement("li",null,t.a.createElement("strong",null,"systematické chyby = "),"vliv atmosféry, ve které dochází ke zpoždění signálu při jeho šíření ionosférou (ionosférickou refrakci lze odstranit 2 fázemi) a troposférou (troposférickou refrakci lze určit dle atmosférických podmínek)")),t.a.createElement("p",null,"Mezi další faktory patří:"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("strong",null,"parametr přesnosti (DOP)")," = bezrozměrný parametr udávající vliv geometrie prostorového uspořádání družic GNSS a přijímače v konkrétní epoše na přesnost určení polohy; lze určovat:",t.a.createElement("ul",null,t.a.createElement("li",null,"parametr horizontální (HDOP),"),t.a.createElement("li",null,"polohové (PDOP),"),t.a.createElement("li",null,"geometrické (GDOP),"),t.a.createElement("li",null,"vertikální (VDOP)"),t.a.createElement("li",null,"i časové (TDOP) přesnosti."))),t.a.createElement("li",null,t.a.createElement("strong",null,"počet viditelných družic")),t.a.createElement("li",null,t.a.createElement("strong",null,"stav družic")," (obsahuje navigační zpráva)"),t.a.createElement("li",null,t.a.createElement("strong",null,"synchronizace hodin / chyba hodin přijímače")),t.a.createElement("li",null,t.a.createElement("strong",null,"poměr signál : šum")),t.a.createElement("li",null,t.a.createElement("strong",null,"vliv excentricit fázových center antén")," (lze řešit kalibrací antén)")),t.a.createElement("hr",null),t.a.createElement(c.a,null,t.a.createElement(i.a,null),t.a.createElement("div",null,t.a.createElement("h2",null,"Studijní materiály Základy geodézie a GPS"),t.a.createElement("p",null,"Téma ",t.a.createElement("strong",null,"Vysílané signály GNSS (GPS)")," je součástí ",t.a.createElement(r.Link,{to:"/zaklady-geodezie-gps/"},"studijních materiálů Základy geodézie a GPS (GNSS)"),". Tento předmět byl vyučován na ",t.a.createElement("a",{href:"http://geogr.muni.cz"},"Geografickém ústavu")," ",t.a.createElement("a",{href:"http://muni.cz"},"Masarykovy univerzity"),". Přejděte na rozcestník témat (1. tlačítko), nebo si přečtěte předešlé (2. tlačítko) či následujícící (3. tlačítko) téma."),t.a.createElement(m.a,null,t.a.createElement(r.Link,{to:"/zaklady-geodezie-gps/"},t.a.createElement("button",null,"Rozcestník geodézie a GPS")),t.a.createElement(r.Link,{to:"/zaklady-geodezie-gps/gnss-systemy/"},t.a.createElement("button",{className:"inv"},"← GNSS systémy a jejich složení")),t.a.createElement(r.Link,{to:"/zaklady-geodezie-gps/katastr-nemovitosti/"},t.a.createElement("button",{className:"inv"},"Katastr nemovitostí →"))))),t.a.createElement("hr",null))}},LiBD:function(e,l,n){"use strict";var a=n("q1tI"),t=n.n(a),r=n("czwO"),o=n.n(r);l.a=function(e){var l=e.children;return t.a.createElement("div",{className:o.a.bwr},l)}},czwO:function(e,l,n){e.exports={bwr:"btn-wrap-module--bwr--3eaco"}},gVNv:function(e,l,n){e.exports={ic:"img-con-module--ic--E5zaL"}},hU4x:function(e,l,n){"use strict";var a=n("q1tI"),t=n.n(a),r=n("gVNv"),o=n.n(r);l.a=function(e){var l=e.children;return t.a.createElement("div",{className:o.a.ic},l)}}}]);
//# sourceMappingURL=component---src-pages-zaklady-geodezie-gps-vysilane-signaly-gnss-js-65fc7a5099e4d151debe.js.map