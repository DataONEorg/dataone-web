---
layout: blocks
title: DataONE Plus
description: Enhanced DataONE products and services in support of your research, including
  branded portals, quality assessment metrics (including the FAIR suite), and much
  more.
date: 2020-01-14T19:04:29.000+00:00
theme: quaternary
header:
  template: header
  type: center image
  pill:
    template: pill
    style: quaternary
    text: Coming 2020
  title: A home for your research online
  intro: Custom search portals for your science, your data, and related data in the
    DataONE network.
  image:
    template: image
    src: "/uploads/portals-header.png"
    alttext: Portals from DataONE Plus
    title: DataONE Plus portals page
    type: default
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
- template: section
  type: default
  title: "Showcase your team’s goals & results  \nwith branded portals"
  intro: Create a custom, branded portal for your research topic or lab group that
    spans repositories in the DataONE network. Branded portals provide a convenient,
    readily customized way to communicate your science, your team, your data, and
    related data from within the DataONE network.
  blocks:
  - template: feature-detailed
    image:
      template: image
      type: tilt-left
      src: uploads/dataset-collection.png
      alttext: Dataset collection
      title: Dataset collection
    type: right
    headline: All of your data in one place
    text: Create a catalog of your team's data that spans the DataONE network
  - template: feature-detailed
    image:
      template: image
      type: tilt-right
      src: uploads/search-filters.png
      alttext: Search filters
      title: Search filters
    type: left
    button:
      template: button
      type: internal page
      color: quaternary
      text: See what you can do with search filters
      internal_link: features/custom-search.md
    headline: Customized search filters
    text: Configure search fields specific to your science topics
  - template: feature-detailed
    image:
      template: image
      type: tilt-left
      src: uploads/portal-editor.png
      alttext: Search filters
      title: Search filters
    type: right
    button:
      template: button
      type: internal page
      color: quaternary
      internal_link: features/portal-editor.md
      text: Portal editor in detail
    text: Pick datasets, add and reorder pages, and upload images in minutes with the easy-to-use online portal editor
    headline: Set up in minutes
  button:
    template: button
    type: internal page
    color: primary
    internal_link: "/features"
    text: See a full list of features
- template: section
  type: wave
  title: Data about your data
  intro: 
  blocks:
  - template: columns
    num_cols: 3
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
        text: Learn more
        internal_link: "/features/usage-metrics"
    - template: feature-detailed
      type: top
      text: Aggregated FAIR metadata assessment scores
      headline: FAIR Assessments
      button:
        template: button
        type: internal page
        color: quaternary
        text: Learn more
        internal_link: "/features/fair"
    - template: feature-detailed
      type: top
      headline: Citation reports
      text: Find out who is citing your data
      button:
        template: button
        type: internal page
        color: quaternary
        text: Learn more
        internal_link: "/features/citations"
- template: section
  type: data-wave
  title: Make your data FAIR
  intro: Ensure your data is Findable, Accessible, Interoperable, and Reusable
  button:
    template: button
    type: external website
    color: secondary
    text: Learn more about FAIR
    external_link: "/features/fair"
  blocks:
  - template: feature-detailed
    type: right
    image:
      template: image
      src: uploads/data.png
      alttext: FAIR metrcis report
      title: FAIR metrcis report
      type: tilt-left
    headline: 
    text: Improve data discovery, accessibility, interoperability, and reusability
      with a quantitative metadata assessment using the FAIR principles
    details:
    - template: item-with-icon
      name: Time series charts
      text: Discover how FAIR scores change over time through time series charts in
        your DataONE Plus portal
      icon:
        name: checkmark
        size: small
        style: secondary
        template: icon
    - template: item-with-icon
      name: Detailed analysis
      text: Drill down into detailed FAIR reports for individual datasets
      icon:
        name: checkmark
        size: small
        style: secondary
        template: icon
- template: section
  type: default
  title: Customized to match your project
  intro: 
  blocks:
  - template: image
    src: uploads/portals-branding.png
    alttext: FAIR metrcis report
    title: FAIR metrcis report
  - template: columns
    num_cols: 3
    columns:
    - template: feature-detailed
      type: top
      headline: Your branding
      text: Customize your portal with the colors, logos, and images that reflect
        your project
      button:
        template: button
        type: internal page
        color: quaternary
        text: Learn more
        internal_link: "/features/branding"
    - template: feature-detailed
      type: top
      headline: Your content
      text: Your portal pages can include visualizations of your research, a list
        of your team members, and any other custom content
      button:
        template: button
        type: internal page
        color: quaternary
        text: Learn more
        internal_link: "/features/portal-content"
    - template: feature-detailed
      type: top
      headline: Your supporters
      text: Acknowledge the people and organizations that support your project by
        adding their logos to your portal
- template: section
  type: wave
  title: See what others are doing with DataONE Plus portals
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: card
      clickable: true
      href: https://knb.ecoinformatics.org/portals/sasap
      image:
        template: image
        src: https://knb.ecoinformatics.org/knb/d1/mn/v2/object/urn:uuid:119331ce-43fa-43e2-bba6-86ea60bb780c
        alttext: Image from the SASAP Portal
        title: State of Alaska's Salmon and People portal
        type: tilt-left
      title: State of Alaska's Salmon and People
      description: A collaboration of researchers, cultural leaders, and others working to
        bring together important, accurate, and up-to-date information that will help
        to support better salmon decision-making. The State of Alaska's Salmon and
        People uses a DataONE Plus portal to communicate the results of their research
        with multiple pages of text, maps, data visualizations. They use custom search
        filters to let visitors find data by Alaskan region, salmon species, waterbody,
        and more.
    - template: card
      clickable: true
      image:
        template: image
        src: https://arcticdata.io/metacat/d1/mn/v2/object/urn:uuid:fc5c0db6-fff1-4647-acd5-18b976d27727
        alttext: Image from the DBO Portal
        title: Distributed Biological Observatory portal
        type: tilt-left
      href: https://arcticdata.io/catalog/portals/DBO
      title: Distributed Biological Observatory
      description: Studying biological responses to rapid physical changes in the Arctic
        marine ecosystem. The Distributed Biological Observatory uses a DataONE Plus
        portal to communicate their project's goals and history, house their extensive
        list of publications and showcase usage of their data, including citations.
        They enable visitors to find datasets by selecting a vessel, project, or transect
        name from a custom dropdown menu.
- template: section
  type: default
  title: Access to DataONE expertise
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: feature-simple
      headline: Consulting services
      text: Custom design, data curation, and management consulting are available
        at hourly rates
    - template: feature-simple
      headline: Discounted training
      text: Take advantage of discounted pricing for data science and data management
        training courses
- template: section
  type: card
  title: Need more? Add a dedicated hosted repository
  intro: Do you need data preservation services in addition to a data portal? DataONE
    hosted repositories represent stand-alone deployments of open source Metacat repository
    server and MetacatUI search and metadata management web clients. Trusted by many
    repositories within the DataONE network, we can deploy this respository infrastructure
    to meet your communities’ needs.
  button:
    template: button
    type: internal page
    color: secondary
    text: More about hosted repositories
    internal_link: hostedrepo/_index.md
  icon:
    template: ''
    name: ''
    size: ''
    style: ''
  blocks: []
- template: section
  type: bold
  title: Interested in a becoming a DataONE Plus member?
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
    precheck_hostedrepo: false
    precheck_plus: true
    precheck_newsletter: false
menu:
  toplevel:
    name: Plus
    weight: 1
  footer:
    weight: 1

---
