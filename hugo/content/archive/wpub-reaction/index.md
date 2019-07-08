---
title: WPUB and future of digital publishing
keywords: wpub, next-book, publishing, web, open web
date: 2019-07-08
---
**Wow. On Monday last week, W3C’s Publishing Working Group [decided to shelve][telco] the [Web Publication’s spec draft][wpub] (WPUB), citing little support from publishers and browser vendors.** Working Group will focus on audiobooks where traction is present. 

> We attempted standardization before experimentation and incubation. Clear business needs have been hard to find.
>
> — [Publishing WG Telco, 2019-07-01][telco]

WPUB intended to bring publishing to the open web. I've been observing the drafting process over the last two years and rewriting a comparison between WPUB and [next-book][nb], a cute little octopus-shaped project I’ve been working on for some time now (I’ll briefly introduce it below, no need to click away). Both approaches appear similar in broad terms but differ in ambitions and solutions.

This might be the right moment to share the article because the value proposition of publishing on the web is quite monumental — and believable:

> We believe there is great value in combining this older tradition of portable, bounded publications with the pervasive accessibility, addressability, and interconnectedness of the Open Web Platform (OWP). **New models of economic sustainability and innovative experiences of knowledge depend on this.** 
>
> — [Web Publications Use Cases and Requirements][ucr]

If there’s anything wrong or mistaken, please don’t hesitate to write me an e-mail or tweet at me at [@endlife][tw].

[nb]: https://next-book.github.io
[ucr]: https://w3c.github.io/dpub-pwp-ucr/
[wpub]: https://w3c.github.io/wpub/
[telco]: https://www.w3.org/blog/dpub/2019/07/02/publishing-wg-telco-2019-07-01-future-of-wpub-shape-of-audiobooks/
[tw]: https://twitter.com/endlife


## Audience and structure

I write this for those who work in e-book publishing (#eprdctn) and feel that the existing environment is very limiting, especially if they’ve been watching the WPUB draft.

First, I’ll explain what next-book is, because the comparison is what makes this article tick. Then I’ll try to explain what feels wrong to me about WPUB spec. And later I’ll try to convince you to join the next-book permanent revolution… or maybe just to try the prototype.


## The idea of next-book in 100 words

*The web* [was created for documents][www]. Over the last 15 years, apps and flashy microsites have become a significant part of the web. Those started to set goals for browser development. Browsers transformed from simple document readers to powerful programming environments with fantastic presentation powers.

Next-book wants to take this power back and use it to work with documents. However, instead of developing a new spec for browsers, next-book aims to use current open web technologies.

Not everything can be done this way (packaging, local management), but we can take off and open the publishing to experimentation that is severely constrained by current tools.

[www]: https://www.w3.org/History/1989/proposal.html


## EPUB, WPUB, and next-book

I draw the comparison in very broad strokes, please shout “objection!” if you see any error in my thinking (and then ping me on twitter maybe, if you are not in a hearing distance).

![](./comparison.svg)

**EPUB** is a standard derived from the open web standards, living aside in its own environment.

**WPUB** would be a standard building on top of the current open web standards, adding features required for publishing and reading publications.

**Next-book** would be a set of extendable standards implemented with open web technologies to enable publishing and reading.


## Severely constrained?

Current e-publishing formats are locked in specialized apps and hardware. 

Mobi is obvious; EPUB is open, but it relies on an ecosystem of several vendors that are not interested in environment cultivation — e.g., when Apple enhances EPUB, it becomes proprietary, branded as iBook and usable only in their own authoring and reading apps. Hacking a book collection with Calibre is for hackers.

Browsers are now getting “streamlined“ in ways that hinder their use for web navigation (such as concealing the path in the address bar), but they’re still usable as a general way to reach any HTML file on the web.


## What is impossible with today’s browsers

**Local content management**, be it books or apps needs primary conceptualization. [Offline apps][pwas] are technically viable, but the experience is still confusing: surviving disconnection feels natural (just a bit spooky), but it still feels weird to type a web URL into address bar while offline.

Both apps and PWA-wrapped documents are hidden somewhere in your browser. No interface allows navigation between locally available apps or even manage their state, check current code against the origin, and export/import their state and code from/into the browser (and SO MANY imaginable things of course). Something like this would be a game changer — and not exclusively for publications.


**Audiobooks are another exciting area of development**, but mostly when the aim is to link the modalities (text, audio, video, etc.) and or to extend the notion of responsive design to non-display devices.

I’d love to have an audiobook player that allows me to continue *listening* where I finished *reading* the last time — but maybe I just love the idea. Innovation would be to share a reading experience with someone else who uses a different modality in the same book (“check my annotations in your audiobook!”). Audiobooks [seem to generate some broader interest in partners of WPG][telco], so let’s hope it turns okay.

Other than that, most of the functionality is achievable in any browser as it is — it would be great if reading experience could shape its UI, but for now, prototyping with extensions is relatively simple.

[pwas]: https://en.wikipedia.org/wiki/Progressive_web_applications


## What are the essential parts of next-book now?

- Definition of some parts of a publication (see [Free Culture][fc]).
- A generator that builds/binds the book from HTML and other resources ([nb-mapper]). It mainly adds markup to make parts of the book addressable and produces a canonical form of a book.
- Some code that provides browser UI and APIs ([nb-base]).
- Server app that stores user-created data.

![](./next-book.svg)

[nb-mapper]: http://github.com/next-book/nb-mapper
[nb-base]: http://github.com/next-book/nb-base


## Constructive criticism of WPUB spec draft

Here I’ll react to the [Web Publications Use Cases and Requirements][ucr] doc. The main [WPUB spec][wpub] describes primarily the manifest that binds the publication together, and my objections to this are mostly technical and quite reconcilable.

Before I start, I’d like to stress, that I write from the point of a view of one excited designer, aware of my limitations and of the colossal scope of what is a W3C spec development. If you find my criticism misplaced or wrong, please tell me.


### What is a publication?

I’m not sure what is the supposed starting point of the [Use Cases and Requirements][ucr] doc aside from „what‘s wrong with e-books.“ The spec misses any historical conceptualization of a publication such as found in [Amaranth Borsuk’s The Book][thebook], who distinguishes a book as “object, content, idea, and interface.” 

This might help when structuring those “certain requirements from print media that users desire” in a kind of McLuhanian effort, establishing how the technological progress could improve the use of a medium. In the 90s we were outdating paper-based practices, now we’re outdating VGA/CRT- and dial-up-based practices. 

WPUB works with a very broadly defined “publication” and that comes at a cost: it covers almost anything that can be bound in a volume, but also it *brings echoes of anything* that ever had been bound in a volume.

**Sometimes WPUB treats a publication as a content**, especially when considering what is essential a what is not (fonts? eh). From a book-reading or even web-browsing perspective, this feels wrong — would I want to treat typesetting of a book as non-essential?

**Sometimes WPUB treats a publication as a photocopy of a printed book**, keeping the structure of a paginated volume. Is this a right way to structure a digital hypertext-enabled content? For example, the spec refers to “answers at the back” of a textbook:

> Chandrasekhar has been assigned a set of exercises in his 
  math WP textbook. To double check his work, he wants to easily navigate to the answers in the back of the WP. [UC42]
>
> The answers of the test are given at the end of the publication. [UC88]

Some uses such as alphabetically ordered “Encyclopedia of Stuff” [UC40] feel outdated in a digital format. Not necessarily wrong to be published as a publication, but it does not feel right to apply a concept of “a reading order” to them. 


> ### Defining a publication
> 
> When working on next-book, it took us some time to arrive at a definition of what a book is — we came to something along the lines of *“a self-contained, static, rich, mostly linear, longer text that the reader might want to read in large chunks”*, where reading might include all manner of active reception. Yes, it’s not easy.
> 
> We wanted to create a basic building block of a very wide spectrum of social interactions: from reading calmly in a public space to searching in the book collection via regular expressions to checking the bookshelf at a friend’s house.
> 
> Also, we did not want to use any form of the word „consumption“ as the description of what people primarily do with publications. Maybe that’s what made us keep the word “book” in the name instead of the more general term — it’s reasonable to widen the application of a standard and to focus on a core concept to keep it stable at the same time.
> 
> I believe it’s important to intentionally exclude from a definition many things that ever existed on paper solely because paper was the only medium that carried print. Without such discussion, we drag the future into the past.

[UC40]: https://w3c.github.io/dpub-pwp-ucr/#uc_reading-order_alphabetical
[UC42]: https://w3c.github.io/dpub-pwp-ucr/#uc_toc_answers
[UC57]: https://w3c.github.io/dpub-pwp-ucr/#uc_print-page_skip_to_page
[UC88]: https://w3c.github.io/dpub-pwp-ucr/#uc_progresssion_testing
[thebook]: http://www.amaranthborsuk.com/publications/the-book/


### In-book addressability

**There’s a need to make the publication traversable** so that various interactions can happen: getting back to reading where I stopped, annotating and manipulating the text.

There’s a [use case][UC57] that requires easy findability of a place in digital content that might be referenced by page and paragraph number in an equivalent printed publication. 

Keeping layout-dependent variables in sync is a laborious manual work — don’t even get me started on commonplace publishing processes in parallel production of both printed and digital content.

Moreover, most textbooks (referenced in [UC57]) already use fine-grained numbering systems. (And you may always fall back to search in digital environments if everything else fails.)

Similarly to the above mentioned alphabetic ordering of content, referencing pages in a digital publication might help in specific cases, but I’d generally prefer going the other way. A more robust solution such as auto-numbering all paragraphs or sentences (as it’s done in next-book) might bring the scaffolding that provides addresses for the manual use and also for the computer to traverse.


### Packaging

**There’s a lot about packaging in the spec, but there’s very little about managing those packages.**

On the one hand, the spec propels audiobooks into the hypertextual present, abolishing the hell of folders full of (hopefully well-tagged) audio files. On the other hand, the books accessed either — reluctantly — via some server (by URL) or as a packaged file stored in the filesystem.

> My first “e-book” was a bunch of 400-something characters long plaintext files. I split “Life, the Universe and Everything” by Douglas Addams into 400-char long files to make it work on my [Siemens S45][s45]. Folders full of `.txt` files worked for me well back then.

Having a part of the ecosystem that supports the local and remote libraries of publications and related files (annotations, licenses) makes sense to me. 

Reference managers (such as Zotero, Mendeley, or Bookends) work in a very similar way too: just working with web content is *a pain*. In effect it might look similar to the current crop of e-reading apps, just opening the publication in the browser (possibly from an in-app server, nixing the issues related to accessing the book as a local file).

I’d love to manage all my local content in one place, including above mentioned offline apps.

[s45]: https://en.wikipedia.org/wiki/Siemens_S45


### Kill the WP user agent

There’s a mention of *non-WP (non-Web Publication) user agents* that should be able to access “at least (…) basic functionality of the book” in a manner of progressive enhancement. This once again builds a wall between open web and Web Publications (*optimized for WP-agent and 800\*600 resolution*).

Let’s abolish the notion of a *specialized WP user agent* entirely. Publications can be still enhanced in various agents (browsers, browser plug-ins, e-ink readers, audio players) via extensions, but making full-fledged browsers the central node brings in all the potential of an open platform.

Stop half-way and e-books will still be the pain very similar to HTML e-mails, painstakingly supporting rendering engine from Word 2007.

Also, meeting together on the open web is much better for accessibility and internationalization. I somehow cannot accept that the doc needs to mention the necessity of a good support for right-to-left writing or privacy settings. That should be device/browser vendor’s job.


### No such thing as society 

The spec is concerned mainly with the single-user consumption and overlooks most of the broader array of social interactions. 

The spec mentions studying together from multiple copies of the same publication [UC57], returning a book back to the public library and moving on to buy a digital copy [UC58], annotating an article from someone else [UC126], or offline lending to a friend [UC73].

Digital publication is still seen as an artifact that I can hold in my hands, instead of a piece of data in the network, readily being displayed by multiple devices *at the same time*. When packaged, it becomes a file with a generic icon in a folder somewhere on my computer. Or maybe loaded into a reading app that displays its *cover*.

But there‘s more to book than this.

- What about public libraries and web publications?
- What about sharing the joy of my bookshelf with a visiting friend?
- How do I present web publications on a book-fair?
- How do I split my private annotations from those I want to send to my colleague and those I want to publish on the web?

There’s a lot to be explored: and no, there’s no clear answer to those questions. But the open web is required not as a place to * find the answer*, but as a place to *ask the question*.

Only with the open platform can be the crazy ideas tried and executed. *“Let’s scrape all linked content that is in public domain or CC-licensed and include it in the generated book so that the offline experience gets better and the web gets incidentally archived!“* Is that a good or a bad idea? I don’t know, let’s try.

(There’s a mention of a need for robust versioning ([UC126]) that enables annotations to withstand changes in the text. Versioning itself is a very social activity that changes a lot of what we see in books: books are immutable by definition. They’re printed, and that‘s it.)

[UC73]: https://w3c.github.io/dpub-pwp-ucr/#uc_pwp_offline_lending
[UC58]: https://w3c.github.io/dpub-pwp-ucr/#uc_print-page_bookmark
[UC126]: https://w3c.github.io/dpub-pwp-ucr/#uc_component-change_differential


### Overview

How hard is to implement solutions to comply with the [Use Cases and Requirements][ucr] doc with only the existing open web technologies?

I tried to categorize the use cases [check CSV if you want](./wpub-use-cases.csv) and I arrived at six unevenly defined categories of use cases.

<table>
  <tr><th>UC&nbsp;count</th><th>requirement</th></tr>
  <tr>
    <td>26</td>
    <td><strong>structure/format definition</strong> (manifest, identification and metadata, packaging, updating)</td>
  </tr>
  <tr>
    <td>13</td>
    <td><strong>specialized UI</strong> (annotations, addressing parts of a book)</td>
  </tr>
  <tr>
    <td>6</td>
    <td><strong>additional infrastructure</strong> (licensing, updating)</td>
  </tr>
  <tr>
    <td>24</td>
    <td><strong>user agent development</strong> (browser improvement, audiobook players, assistive tech, local book storage)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>solve <strong>problems that arise from other parts of the spec</strong></td>
  </tr>
  <tr>
    <td>55</td>
    <td>something that <strong>can be implemented using open web platform</strong>, but do not easily overlap with categories mentioned above</td>
  </tr>
</table>

The last category is obviously a lazily assembled mixed bag of requirements, however, their unifying attribute is critical (included are the first 12 UCs that mostly retell the current basics of the open web platform).

I’d add most of the first three categories (9 of the 26, 13, and 5 of the 6 — 27 in total) as also easily implemented with the web technologies. That makes 82 out of 126 UCs easy to solve within the current open web platform. The rest covers topics such as book packaging and offline storage (25 UCs) and user agent development (16 UCs).

![](./treemap.svg)

But I’d very much like to stop brandishing these silly numbers — the important thing is that this list was created as a retrospective look into shortcomings of e-books, not as a look into social practice of reading.


## Alternatives

From time to time, I check on [ReadiumJS/Web][readium], but supporting EPUB on the web makes me very nervous. It’s like the return of the prodigal son, but meanwhile, the son became a part of a [Borg Collective][borg]. I don’t see any fattened calf in there.

When we started thinking about the soon-to-be next-book in late 2016, I checked the priorities outlined for EPUB development, and those made me sad (mostly relying on [charter from 2010][charter]). Since then [good things happened][beyond], though I mostly avoided delving deeply into EPUB itself. (Also, it’s painful that EPUB3 is still considered to be *the new one, not compatible with many devices*.)

This is the dark side that I have to acknowledge: I knew little about EPUB when defining and implementing next-book. 

I still know just a little now, and most of what I register are terrified shrieks published under [#eprdctn] hashtag (okay, it’s not that bad, bud it doesn‘t feel comforting). I believe that a lot will be lost with the transition to the open web, but at the same time, I don’t think it’s worth the opportunity of opening the possibilities.

Thus, anything worth taking over from EPUB to the open web *as is*, let’s take it.

[#eprdctn]: https://twitter.com/search?q=%23eprdctn&src=typd
[charter]: http://idpf.org/epub/30/wg-charter
[beyond]: http://epubsecrets.com/epub-and-beyond-digital-publishing-w3c.php
[readium]: https://readium.org
[borg]: https://en.wikipedia.org/wiki/Borg


## The current shape of the next-book

It’s (not just) an idea.

There’s a working second generation prototype (book generator and browser code). The prototype is not the next-book, it’s a working implementation. Tech detail: Generator works on top of [jsdom], browser code uses [react]+[Redux].

It’s incomplete, buggy, and not [well documented][docs], sometimes the prototype *is the documentation* of the idea. Many ideas are just coded in, as the field is so vast (possibly more than ten football fields).

There’s no prototype of the *sync functionality* — a web service that stores book‘s state and allows keeping the book in sync over different devices. Publishers, book clubs, local “bookshelf” apps, etc. may use such a service. (Locally managed server might be the way to overcome the packaging limitation of current browsers — and maybe to free browsers the problem completely.)

Everything’s [up on Github][gh]. Licensed under MIT License, though I’m considering a switch to GNU GPL.

There’s a reference edition of [Lawrence Lessig’s Free Culture][fc] ([source code][fc-code]). Right now there’s a project backed by a Czech publisher [Nová Beseda][beseda] that focuses on annotation practices and allows me to work on next-book part-time (last year some publishers tried next-book in a similar project and [produced their own books][nbeu]).

Only a handful of people touched the code, most of them not voluntarily (just another assignment in an IT job at a publisher).

I’m aware that I might be rediscovering the wheel, but there are *so many* wheels that you need to mount on every web project.

[gh]: https://github.com/next-book
[fc]: https://next-book.github.io/free-culture/
[fc-code]: https://github.com/next-book/free-culture
[nbeu]: https://next-book.eu/en/
[docs]: https://next-book.github.io
[beseda]: https://www.novabeseda.cz
[jsdom]: https://github.com/jsdom/jsdom
[react]: https://reactjs.org
[redux]: https://redux.js.org

## Next steps

I’ll try to conform with WPUB manifest spec in next-book as much as possible so that next-book effectively *becomes WPUB*.

I’ll try to bring the in-browser UI of a basic next-book to the level of a standard e-book.

I’ll try to work with some institution that creates book-shaped content to produce next-book at some scale over the summer. (I’m eyeing [Standard E-books][standard] for a long time, but I did not feel that the prototype had been good enough.)

I’ll try to work with an academic publisher (or similar) that produces books at scale so that next-book is tested in a production environment.

I’ll cover the code of the prototype with automated tests to make contributing easier.

I’ll try to bring in more people so that the project gets a more realistic outline — in its vision, scope, short time goals, etc. (And to make most of these goals to use a plural pronoun.)

***

If you feel that all this is in any way good, please let me know. If you’d like to join forces in any way, please let me know right now!

I want to know whether this is a workable future for me by March 2020, so any encouragement is very appreciated, help or cooperation even more so.

[standard]: https://standardebooks.org


### A side note: business?

I did not mention the business side of things. It’s vital to create a sustainable solution, and that requiers people getting paid for what they create. The creation of a standard itself is obviously no such thing.

I hope that people will get paid for the books they publish — and I hope that I’ll be able to publish and read them too.

In the long run, even the standard dev needs to be sustainable, but that‘s not a problem to tackle right now.


## Credit

I’m mostly to blame for the development of next-book in the last two years. It would be much harder without support from [Nová beseda][beseda] publishing house, and it would not exist without a very intensive first six months of idea development with [Ivana Lukeš Rybanská](https://twitter.com/ifcen). Thanks!




