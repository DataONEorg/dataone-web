---
layout: blocks
date: 2024-11-12
title: FAQ
description: TODO
icon: question
menu:
  footer:
    weight: 3
    parent: Services
  primary_nav:
    name: FAQ
    weight: 99
    parent: Services
header:
  template: header
  title: Frequently Asked Questions about DataONE Services
  type: text only
  background_color: secondary
page_sections:
- template: section
  title: Hosted Repository
  id: hosted-repo
  background: default
  button:
    template: button
    type: contact
    color: primary
    text: Contact us to set up a hosted repository
    icon: 'mail'
  blocks:
  - template: faq
    faqs:
    - q: Why should I consider a Hosted Repository?
      a: 'A Hosted Repository provides groups with an easy-to-use data and metadata repository, web-based, submission and metadata editing, assignment of a citable DOI in your own DOI prefix, and many other features. You can deposit datasets, documents, software, and other research artifacts, and assign a DOI to each. This is all operated on our network, minimizing the time that you need to spend on maintaining and securing administrative systems, and on maintaining the repository software. 
You are in full control of the data curation for the data you upload to your repository, and we make sure the service is stable and secure. This service is intended for institutions or projects that want to maintain a long-term repository presence.'
    - q: What if I don’t want a Hosted Repository, but still want to use DataONE to store my data?
      a: 'You can deposit data in one of the open DataONE repositories and then you can use the DataONE Plus service to build your own customizable data portal describing your project.  DataONE Plus provides a customizable data portal where you control the pages and content via a UI dialog, and can present a custom catalog populated with datasets from any of the member repositories in the DataONE network.'
    - q: Question 3
      a: |
        **Answer 3** includes `markdown` content. Just start the answer with a _pipe_ character and use markdown syntax! You can also include emojis like :smile:.
    - q: Can we limit permissions to specific members and/or groups for certain portals?
      a: 'Yes, each portal can be configured with customized permissions. This includes control over which users and groups can view the portal, edit its content, and manage its permissions. For more details, visit our [Portals Tutorial](https://www.dataone.org/portals-tutorial/).'
- template: section
  title: DataONE Plus
  id: portals
  background: subtle-emphasis
  button:
    template: button
    type: portal_start
    color: primary
    text: Set up a portal
    icon: plus
  blocks:
  - template: faq
    faqs:
    - q: Question 1
      a: Answer 1
    - q: Question 2
      a: Answer 2
    - q: Question 3
      a: |
        **Answer 3** includes `markdown` content. Just start the answer with a _pipe_ character and use markdown syntax! You can also include emojis like :smile:.
---
