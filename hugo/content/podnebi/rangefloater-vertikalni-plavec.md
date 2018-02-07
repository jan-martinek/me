---
title: rangeFloater &mdash;&nbsp;vertikální plavec
date: '2010-09-16 09:29:32 +0200'
date_gmt: '2010-09-16 08:29:32 +0200'
category: cokoliv
tags:
  - css
  - javascript
  - jquery
comments:
  - id: 12498
    author: juneau
    author_email: nevybiram@tiscali.cz
    author_url: http://reality-show.net
    date: '2010-09-18 09:09:53 +0200'
    date_gmt: '2010-09-18 08:09:53 +0200'
    content: Zajímavý! To si zapíšu za uši / do bookmarků.
  - id: 12663
    author: misa
    author_email: email@neemail.cz
    author_url: ''
    date: '2011-01-01 13:17:13 +0100'
    date_gmt: '2011-01-01 12:17:13 +0100'
    content: nice.
---
<p>Během tvorbu webu pro časopis studentů mé fakulty (brzy bude online na adrese <a href="http://casopishalas.cz">casopishalas.cz</a>) mě napadlo použít pohyblivý blok s obsahem, který vyplní prázdné místo v kontextovém sloupci vedle textu článku. Obsahem bloku mohou být související články, novinky z twitter feedu nebo inzerce (důležité je, že blok je na obrazovce tehdy, kdy čtenář po dočtení článku volí další postup, zároveň však nenarušuje hlavní obsah stránky). V tomto článku se soustředím výhradně na technickou stránku věci.</p>
<p>Vyplnění různě velkého prostoru obsahem je možné dosáhnout tak, že se daný obsah posunuje ve vymezeném prostoru současně s posunem stránky a zůstává tak viditelný. Podobné řešení je použité na novinky.cz, kde se takto na homepage posunuje reklamní banner (ale jeho implementaci jsem nezkoumal, vypadá zapeklitě).</p>
<p>Pokud stále nevíte, o čem mluvím: video vydá za <code>délkaVidea*25*1000</code> slov, tak se mrkněte. Anebo mrkněte přímo na <a href="http://jan-martinek.com/rangeFloater/demo/">živé demo</a>.</p>
<p><object width="450" height="362"><param name="movie" value="http://www.youtube.com/v/kWN1h_O_2Po?fs=1&amp;hl=en_US&amp;rel=0&amp;hd=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/kWN1h_O_2Po?fs=1&amp;hl=en_US&amp;rel=0&amp;hd=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="450" height="362"></embed></object></p>
<p>Následuje popis, jak dosáhnout kýženého efektu s minimálními úpravami kódu stránky za pomocí CSS a jQuery. Postup je velice jednoduchý. Kompletní zdrojáky jsou na konci článku. Pokud nechcete zkoumat, jak to funguje, ale vzít zdrojáky a fungovat, mrkněte na <a href="http://jan-martinek.com/rangeFloater/readme.html">rýdmí</a>.</p>
<p class="ellipsisDivider">&hellip;</p>
<p>Takže, cílem je rozpohybovat poslední blok obsahu v kontextovém sloupci. Jak na to? V HTML není třeba výrazných změn, stačí nám daný obsahový blok obalit divem a přidat elementům vhodné třídy.</p>
<p><code><br />
&lt;div class="rangeFloaterWrapper"&gt;<br />
&nbsp;&nbsp;&nbsp;&lt;div class="rangeFloater"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Obsah&lt;/p&gt;<br />
&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&lt;/div&gt;<br />
</code></p>
<p>Nejprve je třeba se zamyslet. Dokud k tomuto obsahu nedorolujeme, může poklidně sedět na své vlastní pozici a čekat na objevení. Poté, kdy má následovat uživatelovo scrollování, bude nejspíše optimální ho zafixovat vůči obrazovce. A pokud dojdeme na stránce úplně dolů, určitě nebudeme chtít, aby jeho obsah překryl patičku či další obsah na stránce. Takže máme tři stavy: základní (tvářící se jako obyčejný prvek v toku stránky), vertikálně plovoucí (pozor, toto nemá nic společného s css vlastností <code>float</code>) a zaparkovaný nad dalším obsahem.</p>
<p><img src='/assets/migrated/wp-uploads/2010/09/zmeny-stavu.png' alt='zmeny-stavu.png' /></p>
<p>V CSS můžeme dané stavy popsat následujícím způsobem.</p>
<p><code><br />
.rangeFloaterWrapper 	{ position: relative; }<br />
.rangeFloater 			{ position: absolute; top: 0; }<br />
.floatStateBasic			{ }<br />
.floatStateActive 		{ position: fixed; }<br />
.floatStateBottom 		{ }<br />
</code></p>
<p>Ano, to je vše - zbytek definujeme v javascriptu. V kódu je využito toho, že absolutní pozicování se řídí relativně pozicovaným rodičovským elementem, zatímco fixní se logicky řídí pouze okraji zobrazovací plochy. Třídy <code>floatStateBasic</code>, <code>floatStateActive</code> a <code>floatStateBottom</code> přiřazujeme javascriptem.</p>
<p>Rozsah posunování je určen hlavním obalujícím elementem obsahu, nejčastěji to bývá např. <code>#content</code> či <code>#page</code>. Důležité je, že patička a další obsah musí být již mimo tento element, pokud nechceme, aby tam rangeFloater zajížděl. Tento element můžete určit v <a href="http://ejohn.org/blog/html-5-data-attributes/">datovém atributu</a> rangeFloateru: </p>
<p><code style="white-space:nowrap">&lt;div class="rangeFloater" data-contentWrapper="#content"&gt;</code></p>
<p>Anebo ponechat výchozí hodnotu <code>mainContentWrapper</code>, která se nastavuje v rangeFloater.js.</p>
<p class="ellipsisDivider">&hellip;</p>
<p>Máme tři stavy, v javascriptu tedy musíme ošetřit čtyři změny stavu (aktivní&rarr;plovoucí, plovoucí&rarr;zaparkovaný a opačně). </p>
<p><img src='/assets/migrated/wp-uploads/2010/09/stavy.png' alt='stavy.png' /></p>
<p>Taková změna je vázaná na event <code>$(window).scroll</code>, prakticky způsobuje jen výměnu tříd a vypadá např. takto:</p>
<p><code style="white-space:nowrap"><br />
if (viewfinderTop > rangeTop && $(this).hasClass('floatStateDefault')) {<br />
&nbsp;&nbsp;&nbsp;$(this).removeClass('floatStateDefault');<br />
&nbsp;&nbsp;&nbsp;$(this).addClass('floatStateActive');<br />
}<br />
</code></p>
<p>Trochu pestřejší kód má změna plovoucí&rarr;zaparkovaný, kde je třeba uvést vertikální pozici, na níž bude element zaparkovaný. Ta je spočítána vůči obalujícímu (relativně pozicovanému) elementu <code>rangeFloaterWrapper</code>.</p>
<blockquote><p>V případě, že vyhrazené místo pro posunování je příliš malé, proměníme jej ve zcela obyčejný blok - odebereme mu definující třídu <code>rangeFloater</code>.</p></blockquote>
<p>Toto je v podstatě vše. Zbývají už jen kosmetické úpravy. Určitě jste si v CSS všimli definice <code>top: 0;</code>. Zde je třeba doplnit horní okraj elementu (pseudo margin, který se pak užívá i v plovoucím režimu a je měněn v parkovacím režimu). </p>
<blockquote><p>Uvnitř rangeFloateru se průběžně počítají proměnné, díky kterým dochází k přechodům mezi stavy. Tyto je možné pro potřeby debugování vypisovat přímo v daném rangeFloateru pomocí nastavení proměnné <code>development = 1;</code> v souboru rangeFloater.js.</p></blockquote>
<p><a href="http://jan-martinek.com/rangeFloater/rangeFloater.zip">Zdrojové kódy (Licence New BSD)</a></p>
<p class="ellipsisDivider">&hellip;</p>
<p>RangeFloater je zatím nápad bez uživatelského testování a otestovaný jen v několika prohlížečích. V Internet Exploreru 6 neběží (nepodporuje position: fixed), ale zatím jsem to díky cílové skupině, která tento prohlížeč používá minimálně (VŠ studenti, na které neustále křičí Facebook, že IE 6 je z módy), neměl potřebu řešit a kód se v něm vůbec neprovádí. Pokud máte nějaké návrhy na zlepšení nebo znepokojující zprávy ohledně použitelnosti tohoto řešení, dejte vědět v komentářích.</p>
<p>Určitě by bylo možné vyhnout se position: fixed a dopočítávat absolutní polohu průběžně, ale renderování je pak poněkud cukavé, zvláště ve Firefoxu.</p>
