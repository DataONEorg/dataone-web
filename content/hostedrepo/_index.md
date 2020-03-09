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
  intro: Bring the products of your research together in one centralized location
    for efficient sharing, access, and reuse.
  template: header
  title: Your dedicated repository managed by DataONE
  type: hosted repository
  pill:
    template: pill
    text: Coming 2020
    style: secondary
  buttons:
  - template: button
    type: subscribe form
    color: primary
    text: Join the waitlist
  - template: button
    type: contact
    color: secondary
    text: Contact us
page_sections:
- intro: Let the experts behind DataONE manage and preserve your data, software, and
    derived products with our robust software and hardware.
  template: section
  title: Focus on your research, leave your data infrastructure to us
  type: default
  blocks:
  - details: []
    image:
      template: image
      src: uploads/metacat-on-github.png
      alttext: Metacat on Github
      title: Open source tools by DataONE
      type: tilt-left
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
      external_link: https://github.com/DataONEorg
      template: button
      text: DataONE on Github
      color: tertiary
      type: external website
  - image:
      template: image
      src: uploads/geographic-replicas.png
      alttext: Geographic replicas
      title: Replication makes your repository reliable
      type: tilt-right
    headline: Geographic replicas
    template: feature-detailed
    text: Your data are replicated to distinct geographic regions for high availability
      and preservation.
    type: left
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
      text: Brand your data repository with customized features allowing you to connect
        directly with your community.
      icon:
        name: checkmark
        size: small
        style: secondary
        template: icon
  - details:
    - template: item-with-icon
      name: Custom DOI prefix
      text: A DOI prefix is configured exclusively for your datasets, products, and
        code
      icon:
        template: icon
        name: checkmark
        size: small
        style: secondary
    - template: item-with-icon
      name: Custom domain name
      text: Your repository is available at a domain of your choice, but hosted by
        DataONE
      icon:
        template: icon
        name: checkmark
        size: small
        style: secondary
    image:
      template: image
      src: uploads/custom-domain-and-doi.png
      alttext: Custom Domain and DOI
      title: Brand your data repository
      type: tilt-left
    headline: Customization
    template: feature-detailed
    text: Brand your data repository with customized features allowing you to connect
      directly with your community.
    type: right
  - template: columns
    num_cols: 3
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
  type: secondary-light
  title: Make your data FAIR
  intro: Evaluate your metadata with community established FAIR principles. Scores
    are refreshed with updates to your metadata, helping make your data even more
    Findable, Accessible, Interoperable, and Reusable.
  button:
    template: button
    type: external website
    color: tertiary
    text: Learn more about FAIR
    external_link: https://www.dataone.org/webinars/quantifying-fair-metadata-improvement-and-guidance-dataone-repository-network
  blocks: []
- template: section
  type: default
  title: For users & developers
  intro: Open source, user friendly tools for working with DataONE across multiple
    levels of expertise. DataONE tools and services undergo extensive usability testing
    to ensure they meet community needs.
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: feature-detailed
      type: top
      button:
        type: external website
        template: button
        color: tertiary
        external_link: https://test.arcticdata.io/submit
        text: See a demo
      headline: Easy data upload user interface
      text: The user friendly data submission tool helps your researchers effortlessly
        upload data and create metadata to enhance interoperability, reusability,
        and value of data.
      image:
        template: image
        src: uploads/metadata-editor.png
        alttext: Metadata Editor
        title: Uploading data is easy with the Metadata Editor
        type: float
      details: []
    - template: feature-detailed
      type: top
      button:
        template: button
        color: tertiary
        external_link: https://releases.dataone.org/online/api-documentation-v2.0.1/apis/index.html
        text: Read the docs
        type: external website
      headline: Advanced API access
      text: Programmatically work with your repository through the DataONE tools in
        R, Python, Matlab, and Java.
      image:
        template: image
        src: uploads/dataone-r-api.png
        alttext: DataONE R API
        title: Use the DataONE API to work with your repository
        type: float
      details: []
  - template: columns
    num_cols: 3
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
- template: section
  type: secondary-medium
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
    color: tertiary
    type: internal page
    text: Learn more about DataONE Plus
    internal_link: plus/_index.md
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
menu:
  toplevel:
    name: Hosted Repository
    weight: 1
    parent: Hosted Repo
  footer:
    weight: 3

---
