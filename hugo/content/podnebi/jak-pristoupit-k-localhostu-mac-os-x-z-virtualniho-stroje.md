---
title: Jak přistoupit k localhostu Mac OS X z virtuálního stroje
date: '2008-09-04 00:11:02 +0200'
date_gmt: '2008-09-03 22:11:02 +0200'
category: cokoliv
tags: []
comments: []
---
<p>Poslední měsíce jsem moc nevyvíjel, takže mi nevadilo, že když jsem občas potřeboval něco otestovat v Internet Exploreru 6/7 v Parallels, musel jsem nahrát aplikaci na web a tam ji otestovat z virtualizovaných Windows. Ale dneska jsem konečně hledal a našel přímý přístup k localhostu z virtuální mašiny &ndash; a je to velmi jednoduché - pro virtuální stroj je hostitel vlastně jen další počítač na lokální síti.</p>
<p>Stačí povolit patřičné porty (Leopard defaultně pouští všechno, pokud máte jiné nastavení, tak je třeba povolit je v nastavení firewallu) a pak mrknout, přes jakou IP je váš počítač dostupný jiným strojům. Kliknete na jablko v menu, pak na About this Mac, tam na More Info... a v levém sloupci vyberete položku Network. V řádce IPv4 Addresses vidíte svou IP (pokud teda na lokální síti používáte IPv4, že ;-)).</p>
<p><img class="borderless" src='/assets/migrated/wp-uploads/2008/09/picture-1set.png' alt='picture-1set.png' /></p>
<p>Pak už jen použijete správný protokol a jede to (používám MAMP, takže přistupuji přes https://192.168.1.2:8888). Fajn.</p>
<p>(Inspiroval jsem se <a href="https://www.maintainablesoftware.com/articles/rails_internet_explorer_and_parallels">v tomto článku</a> Dereka DeVriese, kde se IP zjišťuje přes položku Sharing. Je to trochu méně intuitivní - je vidět, že ani autora tohoto článku asi nenapadlo, že by to mohlo být tak prosté (já jsem předpokládal, že tam bude prostě nějaký problém, konflikt IP nebo tak něco). Pro sichr ještě info: V Leopardu není v položce Sharing daná informace vespodu, ale nahoře, viz screenshot.)</p>
<p><img class="borderless" src='/assets/migrated/wp-uploads/2008/09/picture-2.png' alt='picture-2.png' /></p>
