---
layout: blocks
title: DataONE Plus
description: Enhanced DataONE products and services in support of your research, including
  branded portals, customized search, quality assessment metrics (including the FAIR
  suite), and much more.
date: 2020-01-14T19:04:29.000+00:00
header:
  template: header
  type: dataone plus
  pill:
    template: pill
    style: secondary
    text: Coming 2020
  title: Showcase your team’s goals & results with branded portals
  intro: Custom search portals for your science, your data, and related data in the
    DataONE network.
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
  intro: Create a custom, branded portal for your research topic or lab group that spans
    repositories in the DataONE network. Branded portals provide a convenient, readily
    customized way to communicate your science, your team, your data, and related
    data from within the DataONE network.
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: image
      src: "/uploads/portal-data-page.png"
      alttext: Portals from DataONE Plus
      title: DataONE Plus portals page
      type: float
    - template: features-list
      features:
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Create a catalog of your team's data that spans the DataONE network
        headline: All of your data in one place
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Configure search fields specific to your science topics
        headline: Customized search filters
        headline_link: /features/custom-search
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Access aggregated view and download metrics for datasets
        headline: Usage metrics
        headline_link: /features/usage-metrics
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Aggregated FAIR metadata assessment scores
        headline: FAIR Assessments
        headline_link: /features/fair
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Customize your portal with colors, logos, and images
        headline: Branded to match your project
        headline_link: /features/branding
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Add and reorder pages, upload images, and pick datasets in minutes
        headline: Easy online editor
        headline_link: /features/portal-editor
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        headline: Citation reports
        headline_link: /features/citations
        text: Find out who is citing your data
      - template: feature-simple
        headline: Showcase your results
        headline_link: /features/portal-content
        text: Your portal pages can include visualizations of your research, a list of your team members, or any other custom content
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
  title: A home for your research online
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
      text: Discover how FAIR scores change over time through time series charts in your DataONE Plus portal
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
    weight: 1
    parent: Plus
  footer:
    weight: 1

---
