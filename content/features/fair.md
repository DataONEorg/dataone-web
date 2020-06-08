---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: FAIR metadata assessments
description: Evaluate your metadata with community established FAIR principles
show_in_table: true
render_page: true
category: analytics
linked_services:
- service_file: services/free.md
- service_file: services/plus.md
- service_file: services/hosted-repo.md
sub_features:
- title: Per-dataset FAIR report
  description: Individual FAIR report for each dataset in your repository
  linked_services:
    - service_file: services/free.md
    - service_file: services/plus.md
    - service_file: services/hosted-repo.md
  show_in_table: true
  section_id: individual-reports
- title: Aggregated FAIR report
  description: Aggreate FAIR scores for your collection of datasets
  linked_services:
    - service_file: services/plus.md
    - service_file: services/hosted-repo.md
  show_in_table: true
  section_id: aggregated-reports
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: quaternary
    text: Coming soon
  title: Make your data FAIR
  intro: Evaluate your metadata with community established FAIR principles.
  buttons:
  - template: button
    type: subscribe form
    color: primary
    text: Join the waitlist
page_sections:
- background: default
  small_title: FAIR products
  title: |- 
    Researchers increasingly rely on<br>
    computational tools to find, access & use data.<br>
    **Are your data ready?**
  intro: At a glance, see how your data score in categories of Findability, Accessibility, Interoperability, and Reusability ("FAIR"). With assessments based on the [community established FAIR data principles](#what-is-fair), you can guide your community toward maximizing the value of their digital assets.
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: feature-detailed
      related_page: services/plus.md 
      type: top
      image:
        src: uploads/fair_reports/fair-for-hosted-repos.png
        alttext: An example line chart with one line for each of the four FAIR metrics (Findability, Accessibility, Interoperability, and Reusability) showing changes in scores per month
      headline: DataONE Plus Portals
      text: A FAIR scores chart is included in each DataONE Plus portal with scores that summarize the dataset collection. Additionally, access assessments for each and each dataset in your portal.
      details:
      - icon: trending-up
        name: "Aggregate FAIR scores for your portal"
        text: "<br>[Learn about aggregated scores](#aggregated-reports)"
      - icon: file-plus
        name: "Individual FAIR scores for each dataset in your portal"
        text: "<br>[Read more about individual reports](#individual-reports)"
    - template: feature-detailed
      related_page: services/hosted-repo.md
      type: top
      image:
        src: uploads/fair_reports/fair-for-hosted-repos.png
        alttext: Representation of FAIR products available to Hosted Repository users. A time series chart of aggregated FAIR metrics over time, and a stack of individual metadata assessment for each dataset. The individual assessment shows 38 metadata checks and an overall score for each of the four FAIR metrics (Findability, Accessibility, Interoperability, and Reusability)
      headline: Hosted Repositories
      text: In addition to FAIR scores for portals, each Hosted Repository includes a FAIR scores chart for the entire repository holdings, plus individual assessments for each and every dataset
      details:
      - icon: trending-up
        name: "Aggregate FAIR scores for your repository"
        text: "<br>[Learn about aggregated scores](#aggregated-reports)"
      - icon: file-plus
        name: "Individual FAIR scores for each dataset in your repo"
        text: "<br>[Read more about individual reports](#individual-reports)"
  - template: feature-detailed
    related_page: services/free.md 
    type: left
    image:
      src: uploads/fair_reports/metadata-assessment-report.png
      type: float
      alttext: A example metadata report for one dataset. There is a percentage score for each of the four FAIR metrics, a donut chart giving a summary of the 38 metadata checks completed, and section headings showing which checks passed or failed. These sections indicate 31 checks out of 37 passed, 1 check had a warning, 3 checks failed, and there were 4 informational checks. Text at the top of the report says 'After running your metadata against our standard set of metadata, data, and congruency checks, we have found the following potential issues. Please assist us in improving the discoverability and reusability of your research data by addressing the issues below.' 
    headline: Free
    text: A FAIR scores chart is included in each DataONE Plus portal with scores that summarize the dataset collection. Additionally, access assessments for each and each dataset in your portal.
    details:
    - icon: file-plus
      name: "Individual FAIR scores for your dataset"
      text: "<br>[Read more about individual reports](#individual-reports)"
- title: Quantify your metadata improvement efforts
  small_title: Aggregated FAIR reports
  id: aggregated-reports
  background: subtle-emphasis
  icon: trending-up
  intro: Get aggretated FAIR scores for all data within your Hosted Repository or DataONE Plus portal
  blocks:
  - template: feature-detailed
    image:
      src: /uploads/aggregated-fair-scores.png
      alttext: A colorful timeseries chart with a legend. The line chart includes one line for each of the four FAIR metrics (Findability, Accessibility, Interoperability, and Reusability) showing changes in scores per month. The legend indicates the current score for each metric as a percentage.
      type: tilt-left
    details:
    - icon: calendar
      name: Changes by month
      text: Aggregated FAIR score charts show how your FAIR scores have changed month-to-month
    - icon: list
      name: Broken down into FAIR categories
      text: Aggregated scores are divided into the four FAIR categories, so you can pinpoint areas that need improvement and see what your metadata strengths are.
- type: default
  background: default
  id: individual-reports
  icon: file-plus
  template: section
  title: Guide your community toward creating better metadata
  small_title: Individual FAIR reports
  intro: Provide detailed FAIR reports for each dataset and give researchers the power to discover
    exactly which metadata fields are missing or incomplete.
  blocks:
  - template: feature-detailed
    type: left
    image:
      template: image
      src: uploads/fair_reports/metadata-assessment-report.png
      alttext: A example metadata report for one dataset. There is a percentage score for each of the four FAIR metrics, a donut chart giving a summary of the 38 metadata checks completed, and section headings showing which checks passed or failed. These sections indicate 31 checks out of 37 passed, 1 check had a warning, 3 checks failed, and there were 4 informational checks. Text at the top of the report says 'After running your metadata against our standard set of metadata, data, and congruency checks, we have found the following potential issues. Please assist us in improving the discoverability and reusability of your research data by addressing the issues below.' 
      type: tilt-right
    details:
    - template: item-with-icon
      icon: activity
      name: Get instant assessments
      text:  |-
        Whenever a dataset is
        updated in your Hosted Repository, the metadata is automatically assessed.
    - template: item-with-icon
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
