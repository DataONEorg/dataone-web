---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: FAIR Metadata Assessments
description: ''
header:
  template: header
  type: hero image
  image:
    src: uploads/hero_images/yeo-khee-x5JU6lc82EA-unsplash.jpg
    overlay_effect: subtle
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
- type: default
  background: subtle-emphasis
  template: section
  title: Guide your community towards creating better metadata
  intro: Give researchers the power to view metadata assessment reports for their datasets and discover
    exactly which metadata fields are missing or incomplete.
  blocks:
  - template: markdown
    content: ### Detailed FAIR reports for each dataset
  - template: columns
    num_cols: 3
    columns:
    - template: item-with-icon
      icon:
        icon: activity
      text:  |-
        Whenever a dataset is
        updated in your Hosted Repository, the metadata is automatically assessed according
        to the [FAIR data principles](#what-is-fair).
    - template: item-with-icon
      icon:
        icon: check-circle
      text:  |-
        Each assessment is made of a number of individual checks that
        assess specific fields in the metadata, such as geographic coverage, start and
        end dates, data attributes, or publication date (among many more).
    - template: item-with-icon
      icon:
        icon: bar-chart-2
      text:   |-
        At a glance, see how each dataset scores in categories of Findability,
        Accessibility, Interoperability, and Reusability.
- title: Quantify your metadata improvement efforts
  icon:
    icon: trending-up
  blocks:
  - template: feature-detailed
    headline: Aggretated FAIR scores
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
      name: Categorized
      text: Aggregated scores are divided into the four FAIR categories, so you can pinpoint areas that need improvement and see what your metadata strengths are.
  - template: columns
    num_cols: 2
    columns:
    - template: feature-detailed
      type: top
      headline: Plus subscribers
      text: A FAIR scores chart is included in each DataONE Plus portal with scores only for that dataset collection.
    - template: feature-detailed
      type: top
      headline: Hosted Repositories
      text: Each Hosted Repository includes a FAIR scores chart for the entire repository holdings.
- title: What is FAIR?
  id: what-is-fair
  intro: FAIR is a community-led set of principles for data and metadata, whose ultimate
    goal is to enhance the reusability of data.
  background: data-wave
  blocks:
  - template: tabs
    position: top
    tabs:
    - title: F
      content:
      - template: card
        pill:
          text: Findable
        title: Metadata and data should be easy to find for both humans and computers.
    - title: A
      content:
      - template: card
        pill:
          text: Accessible
        title: Once someone finds the required data, they need to know how the data can be accessed.
    - title: I
      content:
      - template: card
        pill:
          text: Interoperable
        title: The data needs to be easily integrated with other data for analysis, storage, and processing.
        subtitle: "  "
    - title: R
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
- title: What are your metadata requirements?
  type: card
  intro: |-
    Use the DataONE Consulting services to create a custom metadata assessment report built specifically for your data management requirements.

    (Link to consulting page)
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
