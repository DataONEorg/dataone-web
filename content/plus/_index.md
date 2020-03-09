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
  title: ONE solution for all your data needs
  intro: Everything you need to support your research with enhanced services from
    DataONE.
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
  title: Showcase your team’s goals and results with branded portals.
  intro: Create a custom search portal for your research topic or lab group that spans
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
        text: Create a catalog of your team's data
        headline: All of your data in one place
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Configure search fields specific to your science topics
        headline: Customized search filters
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Usage and citation metrics aggregated for your data collection
        headline: Aggregated metrics
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Aggregated FAIR reports for your data
        headline: FAIR Assessments
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Add colours, logos, and custom content
        headline: Branded to match your project
      - template: feature-simple
        icon:
          template: icon
          size: small
          style: secondary-subtle
          name: checkmark
        text: Setup in minutes with the easy user interface
        headline: Online portal editor
- template: section
  type: quaternary-light
  title: Make your data FAIR
  intro: Help your community improve data discovery, accessibility, interoperability,
    and reusability with quantitative metadata quality assessment using the FAIR principles.
    Get reports for individual datasets, portal collections, or an entire repository.
  button:
    template: button
    type: external website
    color: tertiary
    text: Learn more about FAIR
    external_link: https://www.dataone.org/webinars/quantifying-fair-metadata-improvement-and-guidance-dataone-repository-network
  icon:
    template: ''
    name: ''
    size: ''
    style: ''
  blocks: []
- template: section
  type: default
  title: Access to DataONE expertise
  blocks:
  - template: columns
    num_cols: 3
    columns:
    - template: feature-simple
      icon:
        template: icon
        size: large
        style: default
        name: direct-support
      headline: One-on-one support
      text: Institutional subscriptions include direct contact with our staff to resolve
        issues in a timely manner
    - template: feature-simple
      icon:
        template: icon
        size: large
        style: default
        name: consulting
      headline: Consulting services
      text: Custom design, data curation, and management consulting are available
        at hourly rates
    - template: feature-simple
      icon:
        template: icon
        size: large
        style: default
        name: discount-training
      headline: Discounted training
      text: Take advantage of discounted pricing for data science and data management
        training courses
  icon:
    template: ''
    name: ''
    size: ''
    style: ''
  intro: ''
- template: section
  type: secondary-medium
  title: Need more? Add a dedicated hosted repository
  intro: Do you need data preservation services in addition to a data portal? DataONE
    hosted repositories represent stand-alone deployments of open source Metacat repository
    server and MetacatUI search and metadata management web clients. Trusted by many
    repositories within the DataONE network, we can deploy this respository infrastructure
    to meet your communities’ needs.
  button:
    template: button
    type: internal page
    color: tertiary
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
