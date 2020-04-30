---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: FAIR Metadata Assessments
description: ''
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: Make your data FAIR
  intro: Evaluate your metadata with community established FAIR principles.
  buttons:
  - template: button
    type: internal page
    internal_link: "/features"
    color: secondary
    text: See all features
    external_link: ''
page_sections:
- background: subtle-emphasis
  title: |- 
    Researchers increasingly rely on<br>computers to find, access & use data.<br>
    **Are your data ready?**
  intro: At a glance, see how your data score in categories of Findability, Accessibility, Interoperability, and Reusability ("FAIR"). With assessments based on the [community established FAIR data principles](#what-is-fair), you can guide your community toward maximizing the value of their digital assets.
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: feature-detailed
      type: top
      headline: DataONE Plus Portals
      text: A FAIR scores chart is included in each DataONE Plus portal with scores only for that dataset collection.
      details:
      - icon:
          icon: trending-up
        name: "Aggregate FAIR scores for your portal"
        text: "<br>[Learn about aggregated scores](#aggregated-reports)"
    - template: feature-detailed
      type: top
      headline: Hosted Repositories
      text: In addition to FAIR scores for portals, each Hosted Repository includes a FAIR scores chart for the entire repository holdings, plus individual assessments for each and every dataset
      details:
      - icon:
          icon: trending-up
        name: "Aggregate FAIR scores for your repository"
        text: "<br>[Learn about aggregated scores](#aggregated-reports)"
      - icon:
          icon: file-plus
        name: "Individual FAIR assessments for every dataset"
        text: "<br>[Read more about individual reports](#individual-reports)"
- title: Quantify your metadata improvement efforts
  id: aggregated-reports
  icon:
    icon: trending-up
  intro: Get aggretated FAIR scores for all data within your Hosted Repository or DataONE Plus portal
  blocks:
  - template: feature-detailed
    image:
      src: /uploads/aggregated-fair-scores.png
      type: tilt-left
    details:
    - icon:
        icon: calendar
      name: Changes by month
      text: Aggregated FAIR score charts show how your FAIR scores have changed month-to-month
    - icon: 
        icon: list
      name: Broken down into FAIR categories
      text: Aggregated scores are divided into the four FAIR categories, so you can pinpoint areas that need improvement and see what your metadata strengths are.
- type: default
  background: subtle-emphasis
  id: individual-reports
  icon:
    icon: file-plus
  template: section
  title: Guide your community towards creating better metadata
  intro: Provide detailed FAIR reports for each dataset and give researchers the power to discover
    exactly which metadata fields are missing or incomplete.
  blocks:
  - template: feature-detailed
    type: left
    image:
      template: image
      src: uploads/fair_reports/metadata-assessment-report.png
      type: tilt-right
    details:
    - template: item-with-icon
      icon:
        icon: activity
      name: Get instant assessments
      text:  |-
        Whenever a dataset is
        updated in your Hosted Repository, the metadata is automatically assessed.
    - template: item-with-icon
      icon:
        icon: check-circle
      name: Check metadata automatically
      text:  |-
        Each assessment is made of a number of individual checks that
        assess specific fields in the metadata, such as geographic coverage, start and
        end dates, data attributes, or publication date (among many more).
    
- title: What is FAIR?
  id: what-is-fair
  intro: FAIR is a community-led set of principles for data and metadata, whose ultimate
    goal is to enhance the reusability of data.
  background: data-wave
  blocks:
  - template: tabs
    position: left
    tabs:
    - title: "**F**indable"
      icon: search
      content:
      - template: card
        pill:
          text: Findable
        title: Metadata and data should be easy to find for both humans and computers.
    - title: "**A**ccessible"
      icon: point
      content:
      - template: card
        pill:
          text: Accessible
        title: Once someone finds the required data, they need to know how the data can be accessed.
    - title: "**I**nteroperable"
      icon: gears
      content:
      - template: card
        pill:
          text: Interoperable
        title: The data needs to be easily integrated with other data for analysis, storage, and processing.
        subtitle: "  "
    - title: "**R**eusable"
      icon: cycle
      content:
      - template: card
        pill:
          text: Reusable
        title: Data should be well-described so they can be reused and replicated in different settings.
  - template: markdown
    content: "*Wilkinson et al. (2016) The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3:160018. [https://doi.org/10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18)*"
  button:
    template: button
    text: Watch the DataONE FAIR webinar
    color: quaternary
    external_link: https://www.dataone.org/webinars/quantifying-fair-metadata-improvement-and-guidance-dataone-repository-network
- type: card
  background: subtle-emphasis
  title: Need a custom metadata assessment?
  intro: Let us help. Use the DataONE Consulting services to create a custom metadata assessment report built specifically for your data management requirements.
  button:
    text: Tell us about your metadata requirements
    type: contact
    color: quaternary
- template: section
  background: major-accent-color
  title: Ready to make your data FAIR?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: false
    precheck_newsletter: false
    newsletter_only: false
---
