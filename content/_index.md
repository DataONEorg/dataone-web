---
layout: index
date: 2019-12-04T21:59:31.000+00:00
title: Data Observation Network for Earth
description: Data Observation Network for Earth (DataONE) is the foundation of new
  innovative environmental science through a distributed framework and sustainable
  cyberinfrastructure that meets the needs of science and society for open, persistent,
  robust, and secure access to well-described and easily discovered Earth observational
  data.
header:
  tagline: Making data more <br> discoverable, accessible & usable
  images:
  - "/uploads/hero_images/owen-beard-1PLgow864Zk-unsplash-compressed.jpg"
  - "/uploads/hero_images/jordan-sanchez-GXV2uVv1DrE-unsplash.jpg"
  - "/uploads/hero_images/ursula-krapf-qIfVW72mAxk-unsplash.jpg"
  - "/uploads/hero_images/joe-pregadio-Vkqyz0hu9h0-unsplash.jpg"
  - "/uploads/hero_images/rick-l-tOZAiC3hZgM-unsplash.jpg"
  - "/uploads/hero_images/rural-explorer-oWS_3i0Y5sI-unsplash.jpg"
  - "/uploads/hero_images/sean-stratton-KzYeP16sQ6Q-unsplash.jpg"
  - "/uploads/hero_images/sven-scheuermeier-saGbrA6s8g0-unsplash.jpg"
  - "/uploads/hero_images/willian-justen-de-vasconcellos-_MMP5j_fCqw-unsplash.jpg"
  - "/uploads/hero_images/chuttersnap-UmncJq4KPcA-unsplash.jpg"
  show_logos: true
  logos_bar:
    template: logos-bar
    title: A network of NUMBER data repositories
    use_member_nodes: true
    button:
      template: button
      type: "internal page"
      color: "quaternary"
      text: "Learn about our network"
      internal_link: "/community/network.md"
page_sections:
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
      annotation: Learn about data management using open source lessons, best practices,
        and videos
      icon: award
      content:
      - template: card
        href: https://dataoneorg.github.io/Education/bp_step/integrate/
        title: Best Practice
        subtitle: Integrate
        clickable: true
        pill:
          template: pill
          text: Featured skill
          style: primary
        description: Learn how data from multiple sources can be combined into a form
          that can be readily analyzed.
        image:
          template: image
          src: "/uploads/integrate.png"
          alttext: World map shown with Robinson projection
          type: default
        tags: []
    - title: Training event
      annotation: Find out about the next training event
      icon: globe
      content:
      - template: card
        href: "/training/"
        title: Example training event
        subtitle: Learn about data
        clickable: true
        pill:
          template: pill
          text: Featured skill
          style: secondary
        description: This is an example training event.
        tags: []
    - title: Hear it first
      annotation: Subscribe to our mailing list to get the updates directly in your
        inbox
      icon: mail
      content:
      - template: join-form
        precheck_mailing_list: true
        style: card
        mailing_list_only: false
        precheck_hostedrepo: false
        precheck_plus: false
- template: section
  type: default
  background: default
  title: About DataONE
  blocks:
  - template: feature-detailed
    headline: The dataone federation
    text: Founded in 2009, DataONE  is a community driven project providing access
      to data across multiple member repositories, supporting enhanced search and
      discovery of Earth and environmental data.
    type: left
    image:
      src: "/uploads/AHM_2019_GroupPhoto.jpg"
      type: tilt-right
      alt: Photo of DataONE Meeting
      template: ''
      alttext: ''
      overlay_effect: ''
    button:
      template: button
      type: internal page
      color: quaternary
      text: Learn more about DataONE
      internal_link: about/_index.md
      external_link: ''
    details: []
  - template: feature-detailed
    headline: Donate
    text: Help DataONE provide and maintain a distributed framework and sustainable
      infrastructure that meets the needs of science and society for open, persistent,
      robust, and secure access to well-described and easily discovered Earth observational
      data.
    type: top
    button:
      template: button
      type: donate
      color: quaternary
      text: Make a donation
      external_link: ''

---
