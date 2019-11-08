---
title: Nette či neNette?
date: '2008-09-02 19:38:52 +0200'
date_gmt: '2008-09-02 17:38:52 +0200'
category: cokoliv
tags: []
comments:
  - id: 6726
    author: LuKo
    author_email: luko@luko.name
    author_url: ''
    date: '2008-09-21 02:05:20 +0200'
    date_gmt: '2008-09-21 00:05:20 +0200'
    content: David právě pilně pracuje na doplnění dokumentace. Takže příští rozhodování už bude spíše ve prospěch Nette ;-)
  - id: 13096
    author: Ayz
    author_email: Aaa@aal.net
    author_url: ''
    date: '2011-03-06 23:12:34 +0100'
    date_gmt: '2011-03-06 22:12:34 +0100'
    content: Změnilo se za ty 3 roky něco? Ne. Ruce pryč od Nette!
  - id: 13103
    author: Jan Martinek
    author_email: jan.martinek@post.cz
    author_url: https://jan-martinek.com
    date: '2011-03-07 12:03:41 +0100'
    date_gmt: '2011-03-07 11:03:41 +0100'
    content: "@Ayz: Změnilo se to, že ve frameworku mi už nic nechybí a zpětnou nekompatibilitu řeším tím, že projekty upgraduju jen do doby, kdy se nekompatibilita objeví. S dokumentací je problém stále, ale i tak je práce s nette jednodušší než tvorba vlastního kódu... Výhodou je masivní fórum, kde se dá najít odpověď téměř na všechno (a základy jsou dokumentací pokryté relativně slušně).\r\n\r\nVe skutečnosti jsem to přehodnotil asi půl roku po napsání tohoto článku :)"
---
<p>(Disclaimer: Nevím nakolik mne ještě čtou lidé, kteří rozumí alespoň jednomu nečeskému názvu v následujícím textu - píšu tedy spíše pro sebe a náhodné návštěvníky.) Popáté stojím před stavbou vlastního frameworku. Při předchozích pokusem jsem v této situaci příliš neuvažoval o použití frameworku třetí strany, tentokrát spíše opačně - do poslední chvíle jsem výrazně preferoval volbu "nevlastního" kusu kódu, který mi ušetří čas a nervy.</p>
<p>Nejprve jsem zvažoval užití Zend Frameworku, je pěkný, zvládá hodně věcí... a to je zásadní problém. Zvládá hodně věcí, více než využiju a především některé trochu jinak, než bych si přál (například formuláře). Pěkný seriál, z něhož jsem čerpal info, je od Ronnieho na <a href="https://php.interval.cz/zend-framework/">Intervalu</a> a pak též na jeho blozích (<a href="https://history.ronnieweb.net/">starší</a>, <a href="https://weblog.ronnieweb.net/">novější</a>).</p>
<p>Jako mnoho jiných jsem čekal na <a href="https://nettephp.com/">Nette</a> <a href="https://davidgrudl.com/">Davida Grudla</a>. Nette je krásný framework. Ve spoustě věcí přesně kopíruje mé úvahy a přidává další geniální nápady (spousty!). Od mateřského <a href="https://nettephp.com/cs/nette-object">Nette::Object</a>, přes krásně navržené formuláře <a href="https://nettephp.com/cs/nette-forms">Nette::Forms</a> až po debugovací funkce, všechno je velmi pěkné. Posledních pár dní jsem strávil vcelku dost času rozhodováním, zda do toho jít nebo ne.</p>
<p>K Nette mě táhne především praktičnost - David Grudl navrhuje vše tak, aby to bylo praktické a jednoduché k využití, pečlivě si dává pozor na <a href="https://en.wikipedia.org/wiki/Featuritis">feature creep</a> a jeho skripty jsou rychlé. Už to, že bych mohl pracovat s tak pěkným kódem takového machra, jakým je David Grudl, je argument pro :)</p>
<p>Naproti tomu jsou tu i argumenty proti. Jako každý obdobný one-man vyvíjený framework je vyvíjený tak, aby přesně padl potřebám autora - což se negativně odráží ve dvou ohledech: občas je něco mírně jinak, než bych si přál a především některé části frameworku, které bych si zrovna přál, jsou ve vývoji a nezveřejněné (nedávno třeba formuláře, které považuji za jednu z nejdůležitějších věcí v mém budoucím :) frameworku (a které v každém nové verzi piluju)). </p>
<p>Toto, plus občasná zpětná nekompatibilita (ve vlastním frameworku je toto vcelku usledovatelné, ale v takhle se toho docela bojím), slabší dokumentace a literatura (tutoriálů by bylo víc, nebýt to one man show) a malé množství živých příkladů na prostudování, mě nakonec odradilo od volby Nette.</p>
<p>Ani megavšemocný, pečlivě zdokumentovaný a přístupný, ani malý, superpraktický, geniálně navržený a velmi příjemný framework mi nevyhovuje. Oba mají svá velká plus (i když Nette se mi líbí mnohem víc), nicméně nejspíše opět zvolím cestu nejistého výsledku a dlouhého klepání do klávesnice a začnu splétat vlastní klubko kódu na některých nápadech z mého předchozího fw, opět trochu lépe - hlavně díky zase nově nabytým znalostem z posledních dvou let. Tentokrát by to snad už mohlo vyjít (zatím jsem každou předchozí verzi po pár měsících (s jednou dvouletou výjimkou) vyhodil oknem).</p>
