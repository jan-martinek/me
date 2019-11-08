---
title: Talkin' bout pagination and&nbsp;digital books
tags: [reading, digital, page, book, digital-publishing, next-book]
date: 2017-06-21
projects: [next-book]
---
When you think of a book as of an object, you may find that pagination is its nature. It defines how one interacts with a book. It becomes *the central affordance* of a book.

> [Book] came to replace the scroll thanks to several problems that limited the scroll's function and readability. For one, scrolls were very long, sometimes as long as ten meters. This made them hard to hold open and read, a difficulty not helped by the fact that most scrolls in that era were read horizontally, instead of vertically as scrolling virtual documents are read now.
> 
> The text on a scroll was continuous, without page breaks, which made indexing and bookmarking impossible. Conversely, the codex was easier to hold open, separate pages made it possible to index sections and mark a page, and the protective covers kept the fragile pages intact better than scrolls generally stayed. 
> 
> — Cited from [History of scrolls](https://en.wikipedia.org/wiki/History_of_scrolls) on Wikipedia, adopted from *Books: A Living History* by Martyn Lyons.

Pagination in digital is a skeuomorphism. It's a useful metaphor, but it's just a metaphor: it allows us to move from the past to the present. Let's explore why it's useful so that we may advance past it.

What follows is a collection of notes — I welcome and appreciate any comment, correction, link to a relevant resource etc. Find me [on twitter](https://twitter.com/endlife), I'm superinterested in anything sparked by reading following paragraphs.


## Navigation

Pages are *the natural way* to address a place in a book. They divide the text into logically ordered parts. Say a number and we're *on the same page*.

- **There are already “responsive” books in print** that are served in various page formats, translations and visual styles: e. g. Bible and Quran. These use book names, chapters and verses rather than pages.
    - Legal documents use formalized navigation structures. It's an overkill to create these by hand for other books, but it may be easy to scaffold content inside a formalized structure automatically (and even trace these parts through editions, given that they share version history). 
    - Addressing these parts may be easy (as it is with longer texts with numbered headings). Numbering may be extended to sentences, clauses, smaller intentionally delimited parts, etc.
- **Pagination is imprecise** — it's easy to use, but requires searching in a bulk of text, instead of pointing to a more specific location. On the other hand, it's universal — there might be anything on the page (or nothing at all), but thanks to the number in the corner, I'm sure I'm looking at the right thing.
- Sometimes it's possible to find something in a book by looking at a specific location of several pages, such as *„a nice quote in the top right corner somewhere“* — **without remembering any specific phrase or word**. Is this lost in digital?


## Position

Pages divide the text into similarly long parts. It's easy to say *“I'll read 5 more pages to finish the chapter and we can go out”*.

- **Showing number of words or characters left in a chapter is easy.** Estimating remaining reading time is more complex, but given a transparent algorithm, it might work well. (My Kindle's estimates are wrong — but I learned to translate “minutes” back into “page turns”.)
- **Printed text is linear** — every link or note is manifested by a specific symbol that points to another part of the page, book or another source. Asterisks and daggers, superscripted numbers, names and years in parentheses: these all point outside current spot in text. Digital text may take form of a hypertext that is annotated with metadata (links, structural info, details etc.) and it may also change shape (expand, collapse, reformat etc.). There are various more or less adopted conventions in visual display of hypertext — underlined links, dotted underlines for full versions of abbreviations and metadata, numbered bubbles pointing to “footnotes” etc.
- There is a special convention that is getting lost in the current web — **a special format of a *visited link***. It's important — it goes beyond the document semantics and reflects an important aspect of reader's behaviour. (This is something I'd like to explore in another article.) 
- **How far into a book I read might be marked not only as a single spot** — it may be also the area I already covered (not necessarily continuous), or even areas I visited multiple times or at some points of time. There's a lot between a simple bookmark and marginal note in digital.


## Indexes and asides

Thanks to pagination, specific means of expression developed in books: ending content mid-page and inserting blank pages to signal a break or end of chapter; side–, foot– and endnotes; tables of contents and indexes.

- In digital, **these may be reused** — as an intentionally collected index of terms is valuable as much as table of contents and various asides. There's no lack of “serious” content on the web (such as documentation, scientific writing), but mostly these aspects are lost, edited out or are done ad hoc without semantic markup. Publishing standards on the web are low — *there's PDF for that anyway, isn't it?*
- **Though, what is the next step?** Possibly an index that includes relationships between the terms? Index with definitions and links (the X-Ray functionality on original Kindle content is largely abused — definitions senselessly scraped from Wikipedia).
- **Fulltext search** is one of the first steps that is made available by having a digital copy of any text. Search interface and its options is mostly an afterthought (regular expressions, sorting, lemmatization, faceted search, metadata-based searches, stored searches…). Searching on client is hard (when using browser), searching privately held content on a 3rd party server is licensing hell.


## Interaction

It's easy to flip or skim through pages with a printed book. 

- **You don't get to do this with a digital book.** Free chapter? Why should I feel safe about the rest if I cannot get hold of the rest? The completeness and finishedness of a printed book lends it a great value when deciding whether to take one home or not.
- **Skimming the contours of a book is also hard in digital** — it's hard to navigate quickly, digest basics and feel sure about the interactions at the same time. This may improve with progress of tech (hi-refresh rate displays will help with the brute force scrolling), but you may use methods unthinkable in print — represent chapters with keywords, extract last paragraphs, show metadata etc.

## Progress

Turning pages feels good. Physical contact with the material is comfortable and I can feel that progress is being made.
	
- **The texture and smells cannot be moved into digital** — let's stop trying to translate untranslatable. You don't need to burn all paper before your first digital reading session. Let's explore the physicality of a digital device — there's a lot of them, from a desk computer to a VR set.
- **Comfortable experience of going through text is an important issue.** Where am I? How to move back to related chapter? How to go back? Have I been there? How long till the end of chapter? Oh, I lost focus a little there: where was I?
- **Pagination on paper brings problems too.** Continuing reading on the next page often requires flipping back and forth. (You may even have met [catchwords](https://en.wikipedia.org/wiki/Catchword) that sometimes find its way into digital typesetting as a purported service to the reader.)
	- Also *orphans and widows* need to be taken care of. (As much as digital publishing abolishes good practices, the same is true for print — as its overall volume grows, digital typesetting speeds up and markets falter, these efforts are less frequent even in print.)
	- There are still *orphans and widows* in digital — but they are quite more xenomorphic. Text may take a shape beyond recognition on various devices and under various circumstances.
- **There's a lot of research** on reading on digital devices to be explored — before I get to that, I'd like to voice a concern about the research that does not distinguish between various digital reading experiences: there's so much to differentiate — displays matter, other hardware parts matter, formats matter, editorial quality matters, software matters, optional settings matter, etc. etc. etc. (and myriad qualities shared with printed content, too).


## Paged UI

Paginated digital media sometimes simplify navigation to *previous/next page* links — this clears up the user interface and eliminates various possible mistakes.

- **Reduction of interaction methods on e-ink readers allows for specialized hardware buttons.** However, this advantage has been reverted on the cheapest Kindle — though the motive behind this move may not stem from a concentrated focus on UI.
- Often, when reading on a touchscreen with a scrolling interface, I find myself **using the top third of the screen for reading** while the rest is used as a pad for scrolling and resting my thumb (even on large devices, such as an iPad).
- **There are “speed reading“ techniques** that display [text as words — one by one in one spot on the screen](https://www.businessinsider.com/spritz-speed-reading-gifs-2014-2) instead of traditional lines arranged in paragraphs.
- **Touch screen might not be the golden standard in near future** — reading in VR might prove much easier than on a touchscreen — richer interaction, deeper focus, especially in safe setting of home or in formal settings. Ensuing changes may propagate back to reading practices on the other devices
- **Touch screen might not be the golden standard in near future** — reading in VR might prove much easier than on a touchscreen — richer interaction, deeper focus, especially in safe setting of home or in formal settings. Ensuing changes may propagate back to reading practices on the other devices (computers, smartphones, tablets…).
- This consideration makes me reflect on how much of what was written about reading in digital was written when a screen was generally a big gray box with 800×600 blinking pixels across its 12 inches. When web was a burst bubble. When touch interface was something without future. When batteries in mobile devices lasted an hour if you kept the display on. Before e-ink. Before laminated hi-DPI screens. **It's all so new.** Everything we know is becoming outdated so quickly — and I fear this not because it's hard to find out what's true, but because of the overshadowing effect of an outdated knowledge.


## Safe returns

When reading a text full of references, the experience goes beyond the book — it starts to require a library (private or public one). Curious reading requires not only brave expeditions, but also safe returns, so that you finish what you set out to do. (I want to stress that the network is more important than the device itself when it comes to digital reading and publishing.)

- **It might be convenient to include content that allows it** (under licensing terms) **inside the book**. Getting the closest referential *nodes* “cached“ inside each other might be a useful method of web content preservation. (Also this shows how important clear content licensing is.)
- Web is a powerful library, though it's also a world to get lost in. You don't read in front of the shelf, you bring your books to the table. This might translate into some form of *calm reading practice* — and that's one thing that e-ink readers say frequently: *it's hard to tap out of the app on an e-reader*.
 
## What about you?

Okay, let's stop here with this list — there's a lot to discuss, prototype, develop and enjoy, isn't it?
