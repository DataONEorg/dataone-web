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
  tagline: Making data more <br> discoverable, accessible, & usable
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
    title: Our network of data repositories
    use_member_nodes: true
    button:
      template: button
      type: internal page
      color: quaternary
      text: Learn about our network
      internal_link: "/community/network.md"
      external_link: ''
      icon: ''
    logos: []
    use_member_repositories: false
    style: ''
page_sections:
- template: section
  background: wave
  title: The latest updates from DataONE
  blocks:
  - template: tabs
    id: latest-updates
    tabs:
    - title: Community call
      annotation: Everyone is welcome to join the upcoming community call
      icon: users
      content:
      - template: page-summary
        type: community-call
        auto_select: true
        news: ''
        webinar: ''
        community_call: ''
        job: ''
    - title: Training Materials
      annotation: Find out about our all of our learnign materials
      icon: globe
      content:
      - template: card
        href: "/training/"
        image:
          src: "/uploads/nesa-by-makers-igur1ix0mqm-unsplash.jpg"
          template: ''
          alttext: ''
          type: ''
          overlay_effect: ''
        title: Learn Directly from DataONE Experts
        subtitle: Various data science training materials are available
        clickable: false
        pill:
          template: pill
          text: Training
          style: secondary
        description: While, we are not offering in-person short courses at the moment, [explore our additional resourcess](/training/) to continue learning. 
        icon: ''
        colorClass: ''
        datetime:
          template: ''
          time: ''
          change_timezone: false
          localize: false
          format: ''
          style: ''
        button:
          template: ''
          type: ''
          color: ''
          text: ''
          external_link: ''
          internal_link: ''
          icon: ''
        tags: []
    - title: Webinar series
      annotation: Join us for the DataONE webinar series
      icon: headphones
      content:
      - template: page-summary
        type: webinar
        auto_select: true
        news: ''
        webinar: ''
        community_call: ''
        job: ''
    - title: Featured skill
      annotation: Learn about data management using open source lessons, best practices,
        and videos
      icon: award
      content:
      - template: card
        href: https://dataoneorg.github.io/Education/bestpractices/provide-budget-information
        title: Best Practice
        subtitle: " Provide budget information for your data management plan"
        clickable: true
        pill:
          template: pill
          text: Featured skill
          style: primary
        description: As a best practice, one must first acknowledge that the process
          of managing data will incur costs. Researchers should plan to address these
          costs and the allocation of resources in the early planning phases of the
          project. This best practice focuses on data management costs during the
          life cycle of the project, and does not aim to address costs of data beyond
          the end of the project.
        image:
          template: image
          src: "/uploads/sharon-mccutcheon-8lnbxtxfgzw-unsplash.jpg"
          alttext: World map shown with Robinson projection
          type: default
          overlay_effect: ''
        tags:
        - Plan
        - Integrate
        icon: ''
        colorClass: ''
        datetime:
          template: ''
          time: ''
          change_timezone: false
          localize: false
          format: ''
          style: ''
        button:
          template: ''
          type: ''
          color: ''
          text: ''
          external_link: ''
          internal_link: ''
          icon: ''
    - title: Hear it first
      annotation: Subscribe to our mailing list to get the updates directly in your
        inbox
      icon: mail
      content:
      - template: join-form
        precheck_mailing_list: true
        style: card
        mailing_list_only: true
        precheck_hostedrepo: false
        precheck_plus: false
    position: ''
  type: ''
  background_image: ''
  background2: ''
  icon: ''
  small_title: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''
- template: section
  type: card
  background: data-wave-subtle
  icon: star
  small_title: 
  title: "**Understanding Products & Services from DataONE**"
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: feature-detailed
      type: top
      headline: DataONE Plus
      text: Enhanced DataONE products and services in support of your research.
      image:
        src: "/uploads/portals-summary.png"
        template: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      details: []
      button:
        type: internal page
        color: primary
        text: Learn more about DataONE Plus
        internal_link: services/plus.md
        icon: d1-plus-logo
        template: ''
        external_link: ''
      related_page: ''
    - template: feature-detailed
      type: top
      headline: Hosted Repositories
      text: A dedicated repository solution for your group or institution’s data,
        managed by DataONE.
      image:
        src: "/uploads/hosted-repo-summary.png"
        template: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      button:
        type: internal page
        color: primary
        text: Discover DataONE Hosted Repositories
        internal_link: services/hosted-repo.md
        icon: database
        template: ''
        external_link: ''
      related_page: ''
      details: []
    alignment: ''
    layout: ''
  - template: button
    type: internal page
    color: quaternary
    text: See all features
    internal_link: services/_index.md
    external_link: ''
    icon: ''
  background_image: ''
  background2: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''
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
      internal_link: about/about.md
      external_link: ''
      icon: ''
    details: []
    related_page: ''
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
      internal_link: ''
      icon: ''
    related_page: ''
    image:
      template: ''
      src: ''
      alttext: ''
      type: ''
      overlay_effect: ''
    details: []
  background_image: ''
  background2: ''
  icon: ''
  small_title: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''

---
