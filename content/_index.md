---
layout: index
date: 2019-12-04T21:59:31.000+00:00
title: 'Data Observation Network for Earth'
description: Data Observation Network for Earth (DataONE) is the foundation of new
  innovative environmental science through a distributed framework and sustainable
  cyberinfrastructure that meets the needs of science and society for open, persistent,
  robust, and secure access to well-described and easily discovered Earth observational
  data.
header:
  tagline: Making earth & environmental data more discoverable, accessible, and usable
  image: "/uploads/hero_images/owen-beard-1PLgow864Zk-unsplash.jpg"
page_sections:
- template: section
  background: default
  blocks:
  - template: columns
    num_cols: 2
    columns:      
    - template: feature-detailed
      type: top
      headline: DataONE Plus
      text: Enhanced DataONE products and services in support of your research.
    - template: feature-detailed
      type: top
      headline: Hosted Repositories
      text: A dedicated repository solution for your group or institution’s data, managed by DataONE.
- template: section
  background: wave
  title: The latest updates from DataONE
  blocks:
  - template: tabs
    tabs:
    - title: Webinar series
      annotation: Join us for the monthly DataONE webinar series
      icon: headphones
      content:
      - template: page-summary
        type: webinar
        auto_select: true
    - title: Featured skill
      annotation: Learn about data management using open source lessons, best practices, and videos
      icon: award
      content:
      - template: card
        href: https://dataoneorg.github.io/Education/bp_step/integrate/
        title: "Best Practice"
        subtitle: "Integrate"
        clickable: true
        pill:
          template: pill
          text: Featured skill
          style: primary
        description: Learn how data from multiple sources can be combined into a form that can be readily analyzed.
        image:
          template: image
          src: "/uploads/integrate.png"
          alttext: World map shown with Robinson projection
          type: default
    - title: Latest news
      annotation: Read the latest news and information from DataONE
      icon: file-text
      content:
      - template: page-summary
        type: news
        auto_select: true
    - title: Training event
      annotation: Find out about the next training event
      icon: globe
      content:
      - template: card
        href: /training/
        title: "Example training event"
        subtitle: "Learn about data"
        clickable: true
        pill:
          template: pill
          text: Featured skill
          style: secondary
        description: This is an example training event.
    - title: Hear it first
      annotation: Subscribe to our newsletter to get the updates directly in your inbox
      icon: mail
      content:
      - template: join-form
        precheck_newsletter: true
        style: card
- template: section
  type: default
  background: default
  blocks:
  - template: feature-detailed
    headline: The dataone federation
    text: Founded in 2009, DataONE  is a community driven project providing access to data across multiple member repositories, supporting enhanced search and discovery of Earth and environmental data. 
    type: left
    image:
      src: /uploads/AHM_2019_GroupPhoto.jpg
      type: tilt-right
      alt: Photo of DataONE Meeting
    button:
      template: button
      type: internal page
      color: quaternary
      text: Learn more about DataONE
      internal_link: "about/_index.md"
  - template: feature-detailed
    headline: Donate
    text: Help DataONE provide and maintain a distributed framework and sustainable infrastructure that meets the needs of science and society for open, persistent, robust, and secure access to well-described and easily discovered Earth observational data.
    type: top
    button:
      template: button
      type: donate
      color: quaternary
      text: Make a donation
---
