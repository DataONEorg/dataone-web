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
    derived products with our robust software and hardware.  Accelerate research activity,
    foster new collaborations, and build community with a repository that meets your
    needs and reflects your brand.
  template: section
  title: Focus on your research, leave your data infrastructure to us
  type: default
  blocks:
  - template: columns
    num_cols: 3
    columns:
    - template: feature-detailed
      type: top
      headline: Private & public access
      text: Control access to your datasets prior to publication with collaborative
        groups or just keep it private 
    - template: feature-detailed
      type: top
      headline: Usage metrics
      text: Understand how your data are being used over time with view, download,
        and citation metrics
    - template: feature-detailed
      type: top
      headline: Scalable storage
      text: Grow your 1 TB repository capacity based on your storage needs in 1 TB
        increments
  - image:
      template: image
      src: uploads/geographic-replicas.png
      alttext: Geographic replicas
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
        template: icon
        icon: check
        size: small
        color: secondary
        stroke: thicker
    - name: Customization
      template: item-with-icon
      text: Brand your data repository with customized features allowing you to connect
        directly with your community.
      icon:
        template: icon
        icon: check
        size: small
        color: secondary
        stroke: thicker
  - details:
    - template: item-with-icon
      name: Custom DOI prefix
      text: A DOI prefix is configured exclusively for your datasets, products, and
        code
      icon:
        template: icon
        icon: check
        size: small
        color: secondary
        stroke: thicker
    - template: item-with-icon
      name: Custom domain name
      text: Your repository is available at a domain of your choice, but hosted by
        DataONE
      icon:
        template: icon
        icon: check
        size: small
        color: secondary
        stroke: thicker
    image:
      template: image
      src: uploads/custom-domain-and-doi.png
      alttext: Custom Domain and DOI
      type: tilt-left
    headline: Customization
    template: feature-detailed
    text: Brand your data repository with customized features allowing you to connect
      directly with your community.
    type: right
- template: section
  background: data-wave
  title: Data about your data
  intro: With access to information about the datasets in your repository, you can monitor how your data is being used and assess its quality based on community established scores.
  blocks:
  - template: feature-detailed
    headline: Make your data FAIR
    text: Access aggregated FAIR metadata assessment scores. Improve data discovery, accessibility, interoperability, and reusability
      with a quantitative metadata assessment using the FAIR principles.
    type: right
    image:
      template: image
      src: uploads/data.png
      alttext: FAIR metrcis report
      type: tilt-left
    details:
    - template: item-with-icon
      name: Time series charts
      text: Discover how FAIR scores change over time through time series charts
      icon:
        template: icon
        icon: check
        size: small
        color: secondary
        stroke: thicker
    - template: item-with-icon
      name: Detailed analysis
      text: Drill down into detailed FAIR reports for individual datasets
      icon:
        template: icon
        icon: check
        size: small
        color: secondary
        stroke: thicker
    button:
      template: button
      type: internal page
      color: quaternary
      text: More about FAIR
      internal_link: "/features/fair"
  - template: columns
    num_cols: 2
    alignment: left
    columns:
    - template: feature-detailed
      type: top
      text: Access aggregated view and download metrics for datasets
      headline: Usage metrics
      button:
        template: button
        type: internal page
        color: quaternary
        text: View & Download Metrics
        internal_link: "/features/usage-metrics"
    - template: feature-detailed
      type: top
      headline: Citation reports
      text: Find out who is citing your data
      button:
        template: button
        type: internal page
        color: quaternary
        text: Data citations
        internal_link: "/features/citations"
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
        type: float
      details: []
  - template: columns
    num_cols: 3
    columns:
    - template: feature-detailed
      type: top
      headline: Comprehensive search
      text: Quickly find data with detailed search filters, or by navigating the interactive map
    - template: feature-detailed
      type: top
      headline: Any file format
      text:  'Use the scientific file formats for your community: image, tabular, text,
        audio, video, and others'
    - template: feature-detailed
      type: top
      headline: Link data and software
      text: Quickly find data with detailed search filters, or by navigating the interactive
        map
  - details: []
    image:
      template: image
      src: uploads/metacat-on-github.png
      alttext: Metacat on Github
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
- template: section
  type: card
  title: Includes all the DataONE Plus features
  blocks:
  - template: checklist
    num_cols: 2
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
    color: secondary
    type: internal page
    text: Learn more about DataONE Plus
    internal_link: plus/_index.md
- template: section
  background: major-accent-color
  title: Interested in a hosted repository?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: false
    precheck_newsletter: false
menu:
  primary_nav:
    name: Hosted Repo
    weight: 2
  footer:
    weight: 2

---
