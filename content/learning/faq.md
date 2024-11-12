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
  background: defualt
  button:
    template: button
    type: contact
    color: primary
    text: Contact us to set up a hosted repository
    icon: 'mail'
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
