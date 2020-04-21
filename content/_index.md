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
  tagline: Data Observation Network for Earth
  image: "/uploads/hero_images/owen-beard-1PLgow864Zk-unsplash.jpg"
page_sections:
- template: section
  type: default
  blocks:
  - template: logos-bar
    button:
      template: button
      type: internal page
      color: quaternary
      text: Join our network of members
      internal_link: "/network/_index.md"
    logos:
    - name: CyVerse
      logo: "/uploads/member_node_logos/cyverse.png"
    - name: Global Biodiversity Information Facility
      logo: "/uploads/member_node_logos/gbif.png"
    - name: Global Lake Ecological Observatory Network (GLEON)
      logo: "/uploads/member_node_logos/gleon.png"
    - name: ORNL DAAC
      logo: "/uploads/member_node_logos/ornldaac.png"
    - name: University of Kansas - Biodiversity Institute
      logo: "/uploads/member_node_logos/kubi.png"
  - template: columns
    num_cols: 3
    columns:      
    - template: feature-detailed
      type: top
      headline: DataONE Network
      text: A network of earth and environmental data providers making data more discoverable, accessible, and usable.
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
    - title: Upcoming webinar
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
    - title: Upcoming training event
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
- template: section
  background: major-accent-color
  title: Interested in services by DataONE?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: true
    precheck_newsletter: true
---
