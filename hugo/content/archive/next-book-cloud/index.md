---
title: "Next-book’s open cloud"
subtitle: Four basic elements of a reading ecosystem
tags: [next-book, publishing, web, open web, digital-publishing]
date: 2019-09-16
projects: [next-book]
images: ["/archive/next-book-cloud/gen-cover.png"]
---

Next-book makes every book an application. Any reader can utilize all the perks of the open web platform in its current form — both owning the documents and using the power of the network.

The reading experience is more than just seeing the lines of text. It’s also using a comfortable device, returning to a book I left unfinished or sharing notes with a friend. A broader infrastructure is required to make such interactions possible.


## Four elements

There are four different kinds of apps in the ecosystem:

- 🔥 The *book* is a web document that includes a Javascript app that does all the reading magic. You can view it on the web (it has an offline mode, too) or download it locally.
- 💨 A *book source app* provides books as static web publications on a specific URL. Any hosting service using HTTPS is very close to becoming a book source.
- 🍁 A *bookshelf app* is a local app that manages books and serves them to a browser through HTTP, enabling the network functionality. 
- 🌊 A *sync server app* manages reader-created data — position in a book, annotations, etc.

The book sends data only to the sync server. Source and bookshelf apps only serve books and do not collect any data.

![](infrastructure.svg "Schema of the infrastructure, fully described above.")

Thanks to the book being an app, the reader can freely combine services you want to use. After adding the sync server’s web address in the book source or bookshelf app, one can sign into the sync server in any book they own. The book itself detects the provided server (by checking the CORS header) and provides a simple login interface.


## Alchemy ensues

One provider may choose to operate multiple apps, but the platform keeps working openly:

- A web store sells books and provides its own, pre-set sync server. You may change it in the settings or move your books elsewhere.
- A web store may provide their own branded bookshelf app with the pre-set sync server.
- A bookshelf app provides its sync server, but you can set up another in the settings.
- A mobile bookshelf app may provide in-app web view and even sync server. You may still set up a remote sync server in the config.

![](combinations.svg "Schema of possible merged apps, fully described above.")


## Healthy ecosystem

Thanks to being open, this infrastructure may serve as a base for a healthy ecosystem. This requires a lot of community work, but that’s no exception from any other field.

Bookshelf apps may include lists of verified sync servers that care about readers. Services can be built atop of the sync server data and readers may choose to use one or the other.

The use of synced data needs to be tightly controlled by the reader. Thanks to this, the services may go much further beyond currently existing centralized social cataloging services or networks. They may enable readers to collaborate and share experiences or allow public libraries, bookshops, and book faires to participate.

The guiding principle of next-book is to open up the possibilities of digital reading. When books move to the open web and narrow set of conventions is established, book reading may finally find a comfortable place on the web.


## ☎️ A call to action 

It’s an early design in the process of implementation. What’s your take? Do you see some problems? Have you tried this already elsewhere? Would you like to discuss this or to work together? *Any feedback is very welcome!*

Also, I’m currently searching for designers, developers, and partners, with whom we may produce the first complete implementation of the concept. Before this year is over, all the essential parts should be in place — and so should be a model of sustainability (based on partnership or service provision). 

Find me on twitter [@ endlife](https://twitter.com/endlife) and check next-book on [github](http://github.com/next-book/).
