(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CkOs:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("Wbzz"),r=a("9eSz"),c=a.n(r);t.a=function(){var e,t,a=Object(o.useStaticQuery)("1119397219");return null!=a&&null!==(e=a.placeholderImage)&&void 0!==e&&null!==(t=e.childImageSharp)&&void 0!==t&&t.fluid?l.a.createElement(c.a,{fluid:a.placeholderImage.childImageSharp.fluid}):l.a.createElement("div",null,"Picture not found")}},LiBD:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("czwO"),r=a.n(o);t.a=function(e){var t=e.children;return l.a.createElement("div",{className:r.a.bwr},t)}},czwO:function(e,t,a){e.exports={bwr:"btn-wrap-module--bwr--3eaco"}},gVNv:function(e,t,a){e.exports={ic:"img-con-module--ic--E5zaL"}},hU4x:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("gVNv"),r=a.n(o);t.a=function(e){var t=e.children;return l.a.createElement("div",{className:r.a.ic},t)}},lb3x:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=a("Wbzz"),r=a("Bl7J"),c=a("CkOs"),i=a("hU4x"),m=a("LiBD"),u=a("vrFN");t.default=function(e){e.data;return l.a.createElement(r.a,null,l.a.createElement(u.a,{title:"SAR: Vztah diverzity a plochy"}),l.a.createElement("h1",null,"SAR: Vztah diverzity a plochy"),l.a.createElement("p",null,l.a.createElement("strong",null,"SAR")," (zkratka z anglického ",l.a.createElement("em",null,"Species-area relationship"),") je v ekologii a biogeografii vztah druhové ",l.a.createElement(o.Link,{to:"/biogeografie/biodiverzita/"},"biodiverzity")," a velikosti plochy. V tomto vztahu, bez ohledu na taxonomickou skupinu či typ ekosystému, počet druhů stoupá s velikostí plochy, na které tyto druhy počítáme."),l.a.createElement("hr",null),l.a.createElement("h2",null,"SAR jako matematická funkce"),l.a.createElement("p",null,"O. Arrhenius roku 1921 objevil, že SAR závislost není lineární a lépe ji vyjadřuje mocninná funkce. Tato funkce má v základu podobu křivky, která nejprve strmě stoupá a poté se zplošťuje."),l.a.createElement("p",null,"Matematicky lze vztah druhové diverzity a velikosti plochy vyjádřit tímto vzorcem:"),l.a.createElement("p",{className:"od-sm"},"S = cA^z",l.a.createElement("br",null),l.a.createElement("br",null),"S ... počet druhů",l.a.createElement("br",null),"c ... konstanta",l.a.createElement("br",null),"A ... velikost plochy",l.a.createElement("br",null),"z ... sklon přímky (nejčastěji 0.12-0.35)"),l.a.createElement("p",null,"Pokud je SAR vynesen na logaritmických osách, lze jej proložit přímkou, kterou je možné matematicky vyjádřit následovně:"),l.a.createElement("p",{className:"od-sm"},"log(S) = log(cA^z) = log(c) + z log(A)"),l.a.createElement("p",null,"Někdy se tato závislost vyjadřuje přímo v semi-logaritmickém prostoru:"),l.a.createElement("p",{className:"od-sm"},"S = log(cA^z) = log(c) + z log(A)"),l.a.createElement("h3",null,"Ukázkový příklad výpočtu diverzity"),l.a.createElement("p",null,'Ukázkový příklad výpočtu na diverzitu využívá vzorce matematicky vyjádřeného SAR a zní: "Jak se změní počet druhů při zániku 80 % plochy biotopu při hodnotě z = 0.13?"'),l.a.createElement("p",{className:"od-sm"},"1) ",l.a.createElement("strong",null,"S = cA^z")," (primární vzorec SAR, dosadím hodnotu z)",l.a.createElement("br",null),l.a.createElement("br",null),"2) ",l.a.createElement("strong",null,"S = cA^0.13")," (počítám pro A, které se zmenšilo o 80 %, tedy 0.2A)",l.a.createElement("br",null),l.a.createElement("br",null),"3) ",l.a.createElement("strong",null,"S(0.2A) = c(0.2A)^0.13")," (upravím, oddělím 0.2 od A)",l.a.createElement("br",null),l.a.createElement("br",null),"4) ",l.a.createElement("strong",null,"S(0.2A) = 0.2^0.13 * cA^0.13")," (podtržená část je vzorcem pro S, viz krok 2)",l.a.createElement("br",null),l.a.createElement("br",null),"5) ",l.a.createElement("strong",null,"S(0.2A) = 0.2^0.13 * S")," (upravím)",l.a.createElement("br",null),l.a.createElement("br",null),"6) ",l.a.createElement("strong",null,"S(0.2A) = 0.81 * S")," (výsledný vzorec, S je původní počet druhů)"),l.a.createElement("h3",null,"Trojfázová křivka SAR"),l.a.createElement("p",null,"Sklon přímky, tedy parametr z, se mění spolu s prostorou škálou. Křivka SAR je tak",l.a.createElement("strong",null," trojfázová"),". V malých areál má silný sklon (z = 0.43), regionální měřítko je pak charakterizováno sklonem slabším (z = 0.11) a v interprovinčním, kontinentálním měřítku je opět strmý (z = 0.68)."),l.a.createElement("p",null,"Na nejmenších plochách je totiž zastoupeno jen málo druhů, při zvětšování plochy pak rychle přibývají nové a z je tak vysoké."),l.a.createElement("p",null,"Při přesunu do menších měřítek klesá množství nově zaznamenaných druhů, hojné druhy se opakují a z je tak malé."),l.a.createElement("p",null,"V kontinentálních škálách pak ale sledovaná plocha překračuje areály dříve zaznamenaných druhů a jsou tak zaznamenávaný zcela jiné druhy z odlišných provincií, z je tak opět vysoké."),l.a.createElement("hr",null),l.a.createElement("h2",null,"IAR: závislost počtu jedinců na ploše"),l.a.createElement("p",null,l.a.createElement("strong",null,"IAR")," (zkratka z anglického ",l.a.createElement("em",null,"Individual-area relationship"),") je vztah mezi počtem jedinců a velikostí plochy. Pokud jsou areály vnořené, jeden je součástí druhého, tak je tento vztah exponenciální. V logaritmickém prostoru má pak matematická funkce IAR podobu přímky."),l.a.createElement("p",null,"Při nepravidelném překryvu ploch nejprve roste strměji a poté konverguje s přímkou, ale tímto příkladem se pro další účely nebudeme zabývat."),l.a.createElement("h3",null,"Vysvětlení zplošťování SAR pod IAR na malých plochách"),l.a.createElement("p",null,"SAR křivka vykreslená do grafu s logaritmickými osami musí být vždy pod IAR. Počet druhů na dané ploše totiž nemůže být vyšší než počet jedinců."),l.a.createElement("p",null,"Nejprve mají IAR a SAR podobný průběh, a to proto, že na úplně nejmenších plochách je každý druh reprezentován právě jedním či jen velmi malým počtem jedinců."),l.a.createElement("p",null,"Čím větší je plocha, tím více se SAR pod IAR v logaritmickém prostoru zplošťuje. Nárůst počtu druhů nemůže být totiž stejný jako nárůst počtu jedinců. Každý druh je reprezentován více jedinci."),l.a.createElement("hr",null),l.a.createElement(i.a,null,l.a.createElement(c.a,null),l.a.createElement("div",null,l.a.createElement("h2",null,"Studijní materiály Biogeografie"),l.a.createElement("p",null,"Téma ",l.a.createElement("strong",null,"SAR: Vztah diverzity a plochy")," je součástí ",l.a.createElement(o.Link,{to:"/biogeografie/"},"studijních materiálů Biogeografie"),". Tento předmět byl vyučován na ",l.a.createElement("a",{href:"http://geogr.muni.cz"},"Geografickém ústavu")," ",l.a.createElement("a",{href:"http://muni.cz"},"Masarykovy univerzity"),". Přejděte na rozcestník témat (1. tlačítko), nebo si přečtěte předcházející (2. tlačítko) či následující (3. tlačítko) téma."),l.a.createElement(m.a,null,l.a.createElement(o.Link,{to:"/biogeografie/"},l.a.createElement("button",null,"Rozcestník biogeografie")),l.a.createElement(o.Link,{to:"/biogeografie/biodiverzita/"},l.a.createElement("button",{className:"inv"},"← Biodiverzita")),l.a.createElement(o.Link,{to:"/biogeografie/biodiverzita/globalni-druhove-bohatstvi/"},l.a.createElement("button",{className:"inv"},"Globální druhová bohatost →"))))),l.a.createElement("hr",null))}}}]);
//# sourceMappingURL=component---src-pages-biogeografie-biodiverzita-sar-iar-vztah-diverzity-plochy-js-407e358b845a3ad78dd1.js.map