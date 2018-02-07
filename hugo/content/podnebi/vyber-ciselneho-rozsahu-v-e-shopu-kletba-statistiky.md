---
title: 'Výběr číselného rozsahu v e-shopu: kletba statistiky'
date: '2012-12-11 17:54:31 +0100'
date_gmt: '2012-12-11 16:54:31 +0100'
category: cokoliv
tags:
  - vybírač rozsahu
  - range selector
  - statistics
  - hapiness
comments:
  - id: 16974
    author: Adam Fendrych
    author_email: adamuv@gmail.com
    author_url: http://twitter.com/adlo
    date: '2012-12-12 10:16:58 +0100'
    date_gmt: '2012-12-12 09:16:58 +0100'
    content: 'Pěkný článek. Nepříliš promyšlený nápad k diskusi: nestačilo by na škále udělat v určitých místech větší "skoky"? To znamená, že pokud chytnu posuvník a potáhnu ho z krajní hodnoty 160 000 o jeden stupínek doleva, naskočí jako nejbližší hodnota 30 000. Tedy že onen krajní stupínek bude pod sebou skrývat všechny ulítlé tečky.'
  - id: 17042
    author: Jakub Janda
    author_email: Jakub.Janda@alza.cz
    author_url: ''
    date: '2012-12-31 02:07:00 +0100'
    date_gmt: '2012-12-31 01:07:00 +0100'
    content: "Jsem jeden z lidí, kteří tvoří web alzy. Vámi popsaný přístup není nemožné naprogramovat, dokonce ho na stránkách máme - jděte do kategorie Notebooky a v tlačítku Značky a parametry klikněte na Pokročilé a Pevný disk. Šoupátko s kapacitou skáče po reálných kapacitách disku notebooků.\r\nTenhle systém ale nejde použít na ceny a to ze dvou důvodů:\r\n1) produktů je hodně. Notebooků 700, kompletní výpis desítky tisíc produktů, archiv ještě více.\r\n2) nechcete skákat po cenách produktů (3899 Kč, 12499 Kč), ale po nějakých kulatých číslech.\r\n\r\nTakže jak jste napsal výše, zbývá ceny rozdělit na nějaké intervaly, což ale má ale zase jiné háčky:\r\n1) vy chcete utratit za notebook 20 až 30 tisíc. Může se ale stát, že ten algoritmus 30 tisíc vynechá a dá tam nějaké jiné zarážky (28 a 32, dejme tomu), prostě proto, že je takové rozložení produktů.\r\n2) vás, jako zákazníka používajícího šoupátko, nijak extra nezajímá rozložení produktů. Vy si chcete vzít šoupátko a stáhnout ho z maxima 80 000 na 30 000. Budete proto překvapeni, že třicítku nenajdete tam, kde byste ji logicky očekával (třetina intervalu), ale hned pod osmdesátkou.\r\n\r\nProto věřte nám, zkoušeli jsme to a současný stav je podle nás nejlepším řešením. A že jsme nad tím něco uvažovali :-)"
  - id: 17043
    author: Jan Martinek
    author_email: jan.martinek@post.cz
    author_url: http://jan-martinek.com
    date: '2012-12-31 09:55:53 +0100'
    date_gmt: '2012-12-31 08:55:53 +0100'
    content: "@Jakub Janda: Díky moc za insider komentář! Ale myslím, že se míjíme v tom, co jsem chtěl článkem říct :)\r\n\r\nCo se týče metody, kterou navrhuje Adam Fendrych v předchozím komentu, tam je zřejmý problém s tím neočekávaným chováním (vyskočí jiná hodnota, než by tam \"měla být\"), avšak u prostého oříznutí krajních hodnot (bez jakéhokoli složitějšího algoritmu a při použití kulatých hodnot jako ve stávající implementaci) pak chybějí pouze ty krajní hodnoty – a ty jsou stejné, pouze na ně díky ořezu outlierů zbyde více místa – takže fyzicky na displeji je pak rozdíl mezi 20 a 30 tisíci širší.\r\n\r\nNenavrhuji změnu způsobu, kterým se rozdělují intervaly, ale pouze vynechání krajních hodnot (z pohledu toho šoupátka by se to dalo nazvat spojením do jednoho intervalu), v nichž obvykle (když platí plusmínus normální rozložení pro danou sadu produktů) bývá málo produktů."
  - id: 17049
    author: Jakub Janda
    author_email: Jakub.Janda@alza.cz
    author_url: ''
    date: '2013-01-02 03:26:16 +0100'
    date_gmt: '2013-01-02 02:26:16 +0100'
    content: "Teď se přiznám moc nerozumím, myslíte že minimum a maximum výběru byste měl 10 000 - 50 000, pokud by v něm bylo dejme tomu 90% hodnot? Pak byste rozbil vztah mezi filtrem a výpisem, protože filtr byste měl 10 až 50k, ale ve výpisu by se objevovaly levnější i dražší produkty. Také byste rychle nezjistil, jaký je nejlevnější a nejdražší produkt.\r\n\r\nPokud jsem to špatně pochopil a jedná se pouze o nelineární skákání (jak píše Adam Fendrych), pořád je to ten problém, že chcete koupit notebook za 40 až 60k, což byste si nevybral, pokud by maximum z 80k skočilo po jednom stupínku na dejme tomu 40k."
  - id: 17051
    author: Jan Martinek
    author_email: jan.martinek@post.cz
    author_url: http://jan-martinek.com
    date: '2013-01-02 08:30:37 +0100'
    date_gmt: '2013-01-02 07:30:37 +0100'
    content: "Zkusím to přes příklad :) Posuvníky by při ořezání krajních hodnot mohly být v popisovaném případě (90 % hodnot je mezi 10k a 50k) v polohách:\r\n\r\nméně než 10k | 10k | 11k | 12k ... 49k | 50k | více než 50k\r\n\r\nTudíž např. u notebooků na Alze by notebooky nad 50k byly v jednom chlívku namísto ve 26 (v tuhle chvíli je na Alza jen 23 notebooků nad 50k a zároveň 114 notebooků pouze v rozsahu 20-25k). (26 ze 704 je něco pod 4 procenta.)\r\n\r\nNejde o nelineární skoky, tam je již zmiňovaný problém s nečekaným chováním ovládacího prvku."
  - id: 17054
    author: Jakub Janda
    author_email: Jakub.Janda@alza.cz
    author_url: ''
    date: '2013-01-03 02:18:38 +0100'
    date_gmt: '2013-01-03 01:18:38 +0100'
    content: "Aha, už to chápu :-) Myslím, že to u nás neprojde kvůli tomu, že:\r\n- ztratí se rychlá vizuální kontrola od kolika do kolika se produkty prodávají\r\n- ve výchozím stavu je šoupátko \"méně než 10 000\" - \"více než 50 000\" takové zvlaštní a o dost delší (speciálně tady se počítá každý pixel)\r\n\r\nNicméně dám váš návrh u nás do pléna. Pokud by to prošlo, prodiskutujeme tantiemy etc :-)"
  - id: 17056
    author: Jan Martinek
    author_email: jan.martinek@post.cz
    author_url: http://jan-martinek.com
    date: '2013-01-03 07:22:56 +0100'
    date_gmt: '2013-01-03 06:22:56 +0100'
    content: ":-)\r\n\r\nV článku jsem přemýšlel nad jinými názvy, třeba min/max, ale určitě by se dalo vymyslet ještě něco výstižnějšího (případně to možná už někde najít v reálném užití). \r\n\r\nPopřemýšlím o tom, jak indikovat nejnižší/nejvyšší cenu – i když tam by to možná chtělo spíš uživatelské testování, jestli je to významný problém, protože uživatelé, kteří se řídí podle ceny nejspíše budou mít produkty stejně tak podle ceny i seřazené, takže nejnižší cenu vidí. Nejvyšší cenu IMHO mnoho uživatelů nehledá.\r\n\r\n(Tak mě napadá, že IMHO je taková anti-UX zkratka :-))"
  - id: 17177
    author: Jakub Janda
    author_email: Jakub.Janda@alza.cz
    author_url: ''
    date: '2013-01-29 13:00:03 +0100'
    date_gmt: '2013-01-29 12:00:03 +0100'
    content: Tak je nasazena nová verze šoupátka, která ignoruje horní a spodní půldecil. Vyzkoušejte, jak se vám líbí, například na http://www.alza.cz/notebooky/18842920.htm.
  - id: 17178
    author: Jan Martinek
    author_email: jan.martinek@post.cz
    author_url: http://jan-martinek.com
    date: '2013-01-29 13:04:42 +0100'
    date_gmt: '2013-01-29 12:04:42 +0100'
    content: Líbí! Přemýšlím o tom, jak moc je matoucí ten skok mezi krajními a těmi ostatními hodnotami, ale je to určitě jedno z možných řešení. Díky za echo, mám radost :)
  - id: 17179
    author: Tomáš Kafka
    author_email: tk@tomaskafka.com
    author_url: ''
    date: '2013-01-29 14:23:22 +0100'
    date_gmt: '2013-01-29 13:23:22 +0100'
    content: "Ahoj, pěkná diskuze. Namají náhodou ceny produktů nějaké rozložení? U minimální ceny jich je hodně, a čím výše jdeme, tím méně jich je v 'bucketu'. Takže by tuhle nelinearitu mohlo šoupátko napravit, a jeho pozice by byla daná logaritmem ceny o nějakém malém základu, nefungovalo by lineárně.\r\n\r\nVýhody: stejně velký úsek kdekoliv na šoupátku zhruba odpovídá stejně velkému počtu produktů.\r\n\r\nNevýhody: exponenciální převod polohy šoupátka na cenu je neintuitivní. \r\n\r\nA asi hlavní nevýhoda, kterou by bylo super nějakým teste ověřit: Imo by to motivovalo kupovat levnější produkty, teď si vyberu rozsah z poloviny a tak mám pocit, že si kupuju zboží zhruba průměrné ceny a přitom si nevědomky zobrazuju nejdražší třetinu.\r\n\r\n'Pravdivější' šoupátko (protože my vnímáme čísla spíš logaritmicky, hlavně u těch vetších) by mi se stejným nastavením ukázalo produkty o dost levnější."
  - id: 17180
    author: Tomáš Kafka
    author_email: tk@tomaskafka.com
    author_url: http://tomaskafka.com
    date: '2013-01-29 14:27:56 +0100'
    date_gmt: '2013-01-29 13:27:56 +0100'
    content: "A btw, tady je hezké shrnutí problematiky numerických filtrů s nápadem přidat nad nebo do šoupátka histogram rozdělení cen produktů.\r\n\r\nhttp://uxmatters.com/mt/archives/2010/02/numeric-filters-issues-and-best-practices.php\r\n\r\nDo programu pro datové analytiky bych to určitě udělal, ale v byznyse taková upřímnost občas nefunguje a více možné vydělá 'neupřímné' šoupátko z předchozího komentáře :)."
  - id: 17181
    author: Tomáš Kafka
    author_email: tk@tomaskafka.com
    author_url: http://tomaskafka.com
    date: '2013-01-29 14:29:04 +0100'
    date_gmt: '2013-01-29 13:29:04 +0100'
    content: 'A ještě trochu hrubý, ale funkční příklad šoupátka s histogramem: http://www.prisjakt.nu/kategori.php?k=101#rparams=l=s114148872'
  - id: 17383
    author: Jan Martinek
    author_email: jan.martinek@post.cz
    author_url: http://jan-martinek.com
    date: '2013-03-03 01:37:22 +0100'
    date_gmt: '2013-03-03 00:37:22 +0100'
    content: "Tomáš: Díky za zajímavé komenty. Teď jsem si v rámci průzkumu procházel německé eshopy a jsou tam i ty nelineární šoupátka – spíš než kvůli rozložení mi to dává smysl z toho důvodu, že u produktu za 20 je rozumné přemýšlet o rozdílech plusmínus 3 Kč, u produktu za 200 už ne. \r\n\r\nAle i tak jsem nenašel žádné šoupátko, které by se mi v tomhle ohledu líbilo, všechny jsou \"divné\"... Mně napadlo právě třeba zobrazovat vždy jen první nebo druhý řád (jednotky, desítky, stovky) a tím tu stupnici profiltrovat, ale je to hodně neintuivní a člověk musí několikrát přejet tam a zpět, aby si byl jistý, co se děje.\r\n\r\nHistogram nad sliderem je hustý, ale ten švédský příklad je hodně velké monstrum :) Asi to dává smysl na takhle specializovaném webu (kde cílovka navíc ví, co to histogram je ;-)). Myslím, že z hlediska businessu je to celkem v pohodě, člověk vidí, kde je mainstream, kde jsou okraje apod. Ale jako UI je to IMHO náročné na pochopení... Určitě bych rád viděl uživatelská testování :)"
---
<p>Chcete si koupit notebook. Máte něco kolem pětadvaceti tisíc, takže by vysněná mašina měla stát něco mezi dvaceti a třiceti. Tenhle rozsah tedy chcete nějak vyfiltrovat na e-shopu. Jak by měl vypadat ovládací prvek, který umožňuje snadno vybrat číselný rozsah?</p>
<p>Pěkný a funkční příklad takového prvku má na webu <a href="http://www.alza.cz/notebooky/18842920.htm">Alza.cz</a>:</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/screen-shot-2012-12-11-at-161755.png' alt='screen-shot-2012-12-11-at-161755.png' /></p>
<p>Alzácký ovládací prvek má ale zásadní problém. Problémem je ignorování toho, jak v běžném světě vypadají soubory číselných hodnot. Ano, tohle smrdí statistikou, gaussovkami a podobnými věcmi, ale nic se nebojte – vygooglil jsem si obrázky! A skutečný zásadní problém objevíme společně!</p>
<h3>Dobrodružství teorie</h3>
<p>Když máme nějaké množství hodnot, například cen notebooků anebo teplot v průběhu roku, mají ve zvyku vypadat nějak takto (graf ukazuje množství prvků s podobnou hodnotou určité vlastnosti, v tomto případě věku):</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/image038.jpg' alt='image038.jpg' /><br />
<small>(Zdroj: Web o statistice <a href="https://sites.google.com/site/infinitystat/ap-statistics/graphical-displays/dot-plots">Infinity Stat</a>, výsledek google hledání "distribution dot plot". Ano, vůbec to nesouvisí s notebooky na Alze.)</small></p>
<p>Nalevo vidíme větší množství teček, napravo jsou tečky spíše osamocené (a smutné). Někdy jsou v podobných grafech osamocené tečky nalevo od té velké hromady, jindy napravo, to už záleží na povaze souboru dat. Ale podstatné je, že většinou se nějaké takové ulítlé (terminus technicus!) tečky najdou.</p>
<h3>Co z toho plyne pro náš ovládací prvek? Kde je nějaký problém?</h3>
<p>Shodou náhod mají ceny notebooků na Alze velmi podobou strukturu jako tečky v předvedeném grafu. To v důsledku znamená, že nejdražší notebook za 160 litrů je o 80 tisíc dražší než druhý nejdražší. S trochou pohrávání objevíte, že úsek 68–160 tisíc je větší polovina (haha) našeho vybíracího prvku a nachází se v něm – tramtadá: 4 notebooky.</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/screen-shot-2012-12-11-at-161928.png' alt='screen-shot-2012-12-11-at-161928.png' /></p>
<p>Na opačné spektra je situace nahuštěnější, ale protože prvek zaokrouhluje hodnoty, můžeme dosáhnout výběru, který obsahuje – tradá: 0 notebooků.</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/screen-shot-2012-12-11-at-161814.png' alt='screen-shot-2012-12-11-at-161814.png' /></p>
<p>Proč je to ale především problém? Pokud si chceme vybrat notebook za 20–30 tisíc (kterých je v e-shopu 194), musíme myší (nedejbože prstem) popojíždět velmi pečlivě:</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/screen-shot-2012-12-11-at-163634.png' alt='screen-shot-2012-12-11-at-163634.png' /><small>Vyzkoušejte si to na tabletu. (It's a trap!)</small></p>
<h3>Co s tím?</h3>
<p>Řešení je velice snadné. Ve statistice se běžně používá (po důkladném zvážení, samozřejmě) ořez ulítlých hodnot. Takové hodnoty totiž zkreslují průměry a statistikům způsobují noční můry. </p>
<p>Stejně to můžeme udělat i my – krajních několik procent hodnot ořízneme a vyčleníme jim speciální políčko, kam je všechny sesypeme. Běžně se ořezává 5 %, ale Alze by v tomto případě pomohlo i bezpečné jedno procento. A pak namísto hodnot "6 tisíc" a "160 tisíc", které jsou nyní krajní, pojmenujeme krajní políčka "minimum" a "maximum" (nejlépe vymyslíme nějaké lidštější názvy, na což teď nemám chuť).</p>
<p>Hodnoty, které nejsou ulítlé se nám tak pěkně rozprostřou po našem ovládacím prvku a vybrat tu správnou hodnotu nebude vyžadovat mikrometrovou přesnost.</p>
<p>Pro srovnání: kdybychom jednotlivé hodnoty rozložili do políček, nebo – pokračujme v infantilizaci tohoto textu – do šuplíčků, v původním užití budou vypadat takto (kresleno od oka):</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/screen-shot-2012-12-11-at-165434.png' alt='screen-shot-2012-12-11-at-165434.png' /></p>
<p>Povšimněte si teček napravo – některé z nich mají šuplíček vlastní, některé jej sdílí jen s jedinou další tečkou. Zato nalevo jsou tečky namačkané jako... prostě moc namačkané. </p>
<p>V novém prostředí se šuplíčky narovnají jinak – všechny ty osamělé tečky napravo jsou v šuplíku "maximum" a basta. Tečky nalevo jsou najednou ve více šuplíčcích. Stále je v něm teček podobné množství jako v některých šuplíčcích na levé straně grafu:</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/screen-shot-2012-12-11-at-165421.png' alt='screen-shot-2012-12-11-at-165421.png' /></p>
<h3>Výsledek</h3>
<p>Ovládací element by pak při výběru hodnot 20–30 tisíc mohl vypadat takto:</p>
<p><img src='/assets/migrated/wp-uploads/2012/12/screen-shot-2012-12-11-at-170228.png' alt='screen-shot-2012-12-11-at-170228.png' /></p>
<p><strong>Jupí! Malý krok pro designéra, troška škrábání se na hlavě u developerů, ale velký skok pro použitelnost.</strong></p>
<h3>Poznámky</h3>
<ul>
<li>Celá věc mě napadla při práci na jiném projektu. Na Alzu jsem si vzpomněl jen jako na obecně známý příklad eshopu s takovým ovládacím prvkem.</li>
<li>Alzáci! Jedna poznámka: když zvolím nějakou hodnotu, dole se mi vypíše ve tvaru "minimum - 20000". Je fajn vidět, že už v systému máte "minimum", takže případné úpravy nebudou bolet :) Ale co mě štve, je ten spojovník! Proč tam nedáte pomlčku? Než mi došlo, co vlastně znamená "68000 - maximum", málem jsem se trochu zpotil.</li>
<li>Šuplíčky by šlo rozvrhnout i třeba podle percentilů (stačit by mohly decily), ale bojím se, že by pak ovládací prvek nebyl úplně přehledný – při posunu posuvníku by se hodnoty měnily na různé podivné ceny. Zobrazovat percentily je nesmysl, protože lidé hledají konkrétní cenu a nějaká statistická hodnota jim nemůže být lhostejnější.</li>
<li>V HTML5 můžeme použít &lt;input type="range"&gt;, takže podobné věci budeme vidět stále častěji. Brace yourselves!</li>
<li>Alzáci, druhá poznámka: Ten Acer za 160 tisíc, který má štítek "NOVÉ" a máte ho skladem... To jako fakt? Fakticky? To něco zkoušíte? ;-)</li>
<li>Filmová práva na na adaptaci textu "Range selection: Curse of the Statistics" rád prodám.</li>
</ul>
