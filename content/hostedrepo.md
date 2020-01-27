---
layout: blocks
date: 2020-01-09T17:19:25.000+00:00
title: Hosted Repository
description: A dedicated repository solution for your group or institution's data,
  managed by DataONE. Bring the products of your research lab, field station, or library
  together in a centralized location for efficient sharing, access, and reuse. Accelerate
  research activity, foster new collaborations, and build community with a repository
  that meets your needs and reflects your brand.
header:
  intro: A dedicated repository for your team’s data, managed by DataONE. Bring the
    products of your research together in one centralized location for efficient sharing,
    access, and reuse.
  template: header
  title: Your data in good hands
  type: left-aligned
  headerimage:
    alttext: Data in good hands
    src: "/images/data-in-good-hands.png"
    template: image
    title: Data in good hands
    type: default
  pill:
    template: pill
    text: Coming 2020
    type: secondary
  buttons:
  - class: ''
    link: JoinFormLink
    template: button-join-form
    text: Join the waitlist
    type: primary
  - class: ''
    link: ContactUsLink
    template: button-contact
    text: Contact us
    type: secondary
page_sections:
- intro: ''
  template: section
  title: ''
  type: default
  button:
    class: ''
    link: ''
    template: ''
    text: ''
    type: ''
  icon:
    name: ''
    size: ''
    style: ''
    template: ''
  blocks:
  - intro: Let the experts behind DataONE manage and preserve your data, software,
      and derived products with our robust software and hardware.
    template: section
    title: Focus on your research, leave your data infrastructure to us
    type: default
    button:
      class: ''
      link: ''
      template: ''
      text: ''
      type: ''
    icon:
      name: ''
      size: ''
      style: ''
      template: ''
    blocks:
    - details: []
      figure: metacat-on-github
      headline: Open source repository platform
      template: feature-detailed
      text: DataONE hosted repositories represent stand-alone deployments of the open
        source [Metacat](https://knb.ecoinformatics.org/knb/docs/) repository server
        and [MetacatUI](https://github.com/NCEAS/metacatui) search and metadata management
        web client. These repository platforms are trusted by many repositories, including
        the NSF [Arctic Data Center](https://arcticdata.io), the Department of Energy
        [ESS-DIVE repository](https://ess-dive.lbl.gov/), and the [KNB Data Repository](https://knb.ecoinformatics.org),
        among many others.
      type: right
      button:
        class: ''
        link: https://github.com/DataONEorg
        template: button
        text: DataONE on Github
        type: tertiary
        external_website: true
    - figure: geographic-replicas
      headline: Geographic replicas
      template: feature-detailed
      text: Your data are replicated to distinct geographic regions for high availability
        and preservation.
      type: left
      button:
        class: ''
        link: ''
        template: button
        text: ''
        type: secondary
      details:
      - name: Preservation
        template: item-with-icon
        text: All data and metadata are replicated to two geographically independent
          data centers in California and Tennessee
        icon:
          name: checkmark
          size: small
          style: secondary
          template: icon
      - name: Customization
        template: item-with-icon
        text: Brand your data repository with customized features allowing you to
          connect directly with your community.
        icon:
          name: checkmark
          size: small
          style: secondary
          template: icon
    - details:
      - template: item-with-icon
        name: Custom DOI prefix
        text: A DOI prefix is configured exclusively for your datasets, products,
          and code
        icon:
          template: icon
          name: checkmark
          size: small
          style: secondary
      - template: item-with-icon
        name: Custom domain name
        text: Your repository is available at a domain of your choice, but hosted
          by DataONE
        icon:
          template: icon
          name: checkmark
          size: small
          style: secondary
      figure: custom-domain-and-doi
      headline: Customization
      template: feature-detailed
      text: Brand your data repository with customized features allowing you to connect
        directly with your community.
      type: right
      button:
        class: ''
        link: ''
        template: button
        text: ''
        type: secondary
  - template: three-columns
    columns:
    - headline: Private and public access
      template: feature-simple
      text: Control access to your datasets prior to publication with collaborative
        groups or just keep it private
      icon:
        name: private-public-access
        size: large
        style: default
        template: icon
    - headline: Usage metrics
      template: feature-simple
      text: Understand how your data are being used over time with view, download,
        and citation metrics
      icon:
        name: metrics
        size: large
        style: default
        template: icon
    - headline: Scalable storage
      template: feature-simple
      text: Grow your 1 TB repository capacity based on your storage needs in 1 TB
        increments
      icon:
        name: scalable-storage
        size: large
        style: default
        template: icon
- template: section
  type: subtle-emphasis
  title: Make your data FAIR
  intro: Evaluate your metadata with community established FAIR principles. Scores
    are refreshed with updates to your metadata, helping make your data even more
    Findable, Accessible, Interoperable, and Reusable.
  button:
    template: button
    external_website: true
    type: tertiary
    link: https://www.dataone.org/webinars/quantifying-fair-metadata-improvement-and-guidance-dataone-repository-network
    text: Learn more about FAIR
    class: ''
  icon:
    template: ''
    name: ''
    size: ''
    style: ''
  blocks: []
- template: section
  type: default
  title: For users & developers
  intro: Open source, user friendly tools for working with DataONE across multiple
    levels of expertise. DataONE tools and services undergo extensive usability testing
    to ensure they meet community needs.
  blocks:
  - template: two-columns
    columns:
    - template: feature-detailed
      type: top
      button:
        external_website: true
        template: button
        type: tertiary
        link: https://test.arcticdata.io/submit
        text: See a demo
        class: ''
      headline: Easy data upload user interface
      text: The user friendly data submission tool helps your researchers effortlessly
        upload data and create metadata to enhance interoperability, reusability,
        and value of data.
      figure: metadata-editor
      details: []
    - template: feature-detailed
      type: top
      button:
        template: button
        type: tertiary
        class: ''
        link: https://releases.dataone.org/online/api-documentation-v2.0.1/apis/index.html
        text: Read the docs
        external_website: true
      headline: Advanced API access
      text: Programmatically work with your repository through the DataONE tools in
        R, Python, Matlab, and Java.
      figure: dataone-r-api
      details: []
  - template: three-columns
    columns:
    - template: feature-simple
      icon:
        template: icon
        size: large
        style: default
        name: advanced-search
      headline: Comprehensive search
      text: Quickly find data with detailed search filters, or by navigating the interactive
        map
    - template: feature-simple
      icon:
        template: icon
        size: large
        style: default
        name: any-file-format
      headline: Any file format
      text: 'Use the scientific file formats for your community: image, tabular, text,
        audio, video, and others'
    - template: feature-simple
      icon:
        template: icon
        size: large
        style: default
        name: provenance
      headline: Link data and software
      text: Easily show how your files relate to each other by providing well-described
        provenance workflows
  icon:
    template: ''
    name: ''
    size: ''
    style: ''
  button:
    template: ''
    type: ''
    class: ''
    link: ''
    text: ''
- template: section
  type: default
  title: Includes all the DataONE Plus features
  blocks:
  - template: checklist
    items:
    - Branded portals
    - Custom portal search filters
    - Aggregated FAIR assessments
    - Aggregated usage metrics
    - Aggregated citations
    - Online portal editor
    - Discounted training
    - Consulting services
    - Individualized support
  button:
    template: button
    type: tertiary
    link: ''
    text: Learn more about DataONE Plus
    class: ''
    external_website: false
    website_link: "plus.md"
  icon:
    template: ''
    name: ''
    size: ''
    style: ''
  intro: ''
- template: section
  type: bold
  title: Interested in a hosted repository?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  icon:
    template: ''
    name: ''
    size: ''
    style: ''
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: false
    precheck_newsletter: false
  button:
    template: ''
    type: ''
    class: ''
    link: ''
    text: ''
menu:
  footer:
    weight: 9
  toplevel:
    weight: 2
draft: true

---
