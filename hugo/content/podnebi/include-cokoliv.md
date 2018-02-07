---
title: "!include cokoliv"
date: '2005-02-13 17:00:00 +0100'
date_gmt: '2005-02-13 16:00:00 +0100'
category: cokoliv
tags: []
comments: []
---
<p>Neděle třináctého ve znamení spousty čestvého, ale už i rozbředlého sněhu
&amp; tím pádem slušně těžké lopaty. Dnes blogpost pro stránkomejkry :).</p>
<p>Před dlouhou dobou mi nějaký přátelský hacker (:)) na icq poradil, abych si opravil
ve stránkách chybu. Chybou mělo být to, že se do stránek dají vkládat soubory
z jiných serverů.</p>
<p>Nepochopil jsem to - předpokládal jsem, že je míněno vkládání přes formulářové
pole pro soubor, přišlo mi to jako nesmysl a za pár dní jsem na to zapomněl.</p>
<p>A, teďka, opožděně děkuju, už jsem pochopil - v sobotu se tak dívám a v poledne
je tady už 40 návštěv. Jelikož mám teďka tak polovinu návštěv denně, co dřív,
tedy cca 20, překvapilo mě to.</p>
<p>Prokoumal jsem stránky, na které tito lidé přišli &amp; všechny byly nesmysly
s naincludovaným kompostem do toku stránky.</p>
<p class="odsazeny">Tedy, ve smyslu, že <code>$a</code> je proměnná, kterou chytám z url &amp; v kódu je
pak jen a pouze na řádku vypsané <code>include $a;</code></p>
<p>Opravit problém už nebyla věru věc
na dlouho (navíc to bylo takto nechráněné jen v jedné stránce).
Stačila podmínka na pár věcí &amp; hotovo.</p>
<p>Kdyby mi někdo do kódu naincludoval něco veselého v php, mohl jsem mít
po ptákách. Takže kdyžtak si nějak upodmínkujte includy s argumentem z url,
pokud to tak ještě nemáte.</p>
<div class="import-komentaru">
<p><strong>Import komentářů ze starší verze webu</strong></p>
<div class="comment">
<p style="font-weight:bold"><span class="compredmet">..</span> | <span class="comname">God.zilla</span> | (neděle&nbsp;13.&nbsp;02.&nbsp;2005,&nbsp;20:52)</p>
<p>tohle neni zadna vazna zranitelnost - includovat php kod takhle z jinych serveru nejde, kdybys mel treba  <br>  <br> $a=&quot;http://mojestranky.cz/fujskript.php&quot;; <br>  <br> tak se stejne vlozi jenom _vystup_ toho skriptu, ktery se v zadnem pripade nebude vyhodnocovat.. takze dont worry, be heapy :-) </p>
</div>
<div class="comment">
<p style="font-weight:bold"><span class="compredmet">..</span> | <span class="comname">Endlife</span> |  <a href="mailto:jan.martinek@post.cz">mail</a> (neděle&nbsp;13.&nbsp;02.&nbsp;2005,&nbsp;21:35)</p>
<p>ale když ten php skript nadepíšu fujskript.htm, tak se nevyhodnotí na tom prvním serveru, takže až u mě, ne? já nikdy nic moc z venku neincludoval, tudíž se v tom nevyznám.. </p>
</div>
<div class="comment">
<p style="font-weight:bold"><span class="compredmet">..</span> | <span class="comname">Endlife</span> |  <a href="mailto:jan.martinek@post.cz">mail</a> (neděle&nbsp;13.&nbsp;02.&nbsp;2005,&nbsp;21:40)</p>
<p><strong>&gt;&gt;</strong> vytestoval jsem to, jde to.. </p>
</div>
</div>
