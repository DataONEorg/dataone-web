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
  title: "Showcase your team's goals & results with  \n **branded portals**"
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
      text: Custom search options
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
    text: Explore all features
- template: section
  type: data-wave
  title: Data about your data
  intro: With access to information about the datasets in your portal, you can monitor how your data is being used and assess its quality based on community established scores.
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
      title: FAIR metrcis report
      type: tilt-left
    details:
    - template: item-with-icon
      name: Time series charts
      text: Discover how FAIR scores change over time through time series charts in
        your DataONE Plus portal
      icon:
        template: icon
        icon: check
        size: small
        color: quaternary
        stroke: thicker
    - template: item-with-icon
      name: Detailed analysis
      text: Drill down into detailed FAIR reports for individual datasets
      icon:
        template: icon
        icon: check
        size: small
        color: quaternary
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
  icon:
    icon: image
    color: inherit
    size: large
  title: Customized to match your project
  intro: Add custom content and branding
  blocks:
  - template: image
    src: uploads/portals-branding.png
    alttext: FAIR metrcis report
    title: FAIR metrcis report
  - template: columns
    num_cols: 2
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
        text: See branding options
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
        text: Learn more about custom content
        internal_link: "/features/portal-content"
- template: section
  type: wave
  title: Built with DataONE Plus
  intro: See what others are doing with DataONE Plus portals
  blocks:
  - template: carousel
    slides:
    - title: State of Alaska's Salmon and People
      subtitle: A collaboration of researchers, cultural leaders, and others working to
        bring together important, accurate, and up-to-date information that will help
        to support better salmon decision-making
      color: "#46567f"
      button:
        template: button
        type: external website
        color: primary
        text: See portal
        external_link: https://knb.ecoinformatics.org/portals/sasap
      logo: /uploads/portals/logo_SASAP.svg
      content:
      - template: tabs
        tabs:
        - title: Custom content
          icon: image
          annotation: Researchers communicate their results with multiple pages of text, maps, data visualizations
          content:
          - template: image
            type: float
            src: /uploads/portals/sasap_content.png
        - title: Search filters
          icon: search
          annotation: Filters enable visitors to find data by Alaskan region, salmon species, waterbody, and more
          content:
          - template: image
            type: float
            src: /uploads/portals/sasap_search.png
        - title: Members section
          icon: users
          annotation: The team credits their members, supporters, and awards with a specialized members section
          content:
          - template: image
            type: float
            src: /uploads/portals/sasap_members.png
    - title: Distributed Biological Observatory
      subtitle: Studying biological responses to rapid physical changes in the Arctic
        marine ecosystem
      color: "#4f9fb7"
      button:
        template: button
        type: external website
        color: primary
        text: See portal
        external_link: https://arcticdata.io/catalog/portals/DBO
      logo: /uploads/portals/logo_DBO.svg
      content:
      - template: tabs
        tabs:
        - title: Custom content
          icon: image
          annotation: Project members use custom content to share their goals and history, as well as house their extensive list of publications 
          content:
          - template: image
            type: float
            src: /uploads/portals/dbo_publications.png
        - title: Search filters
          icon: search
          annotation: Visitors can find datasets by selecting a vessel, project, or transect name from a custom dropdown menu
          content:
          - template: image
            type: float
            src: /uploads/portals/dbo_search.png
        - title: Metrics
          icon: trending-up
          annotation: The metrics page showcases data usasge, including articles where sspecific datasets have been cited
          content:
          - template: image
            type: float
            src: /uploads/portals/dbo_metrics.png
- template: section
  type: default
  icon:
    icon: book-open
    color: inherit
    size: large
  title: Access to DataONE expertise
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: feature-detailed
      type: top
      headline: Consulting services
      text: Custom design, data curation, and management consulting are available
        at hourly rates
    - template: feature-detailed
      type: top
      headline: Discounted training
      text: Take advantage of discounted pricing for data science and data management
        training courses
- template: section
  type: card
  title: Need more? **Add a dedicated hosted repository**
  intro: Do you need data preservation services in addition to a data portal? DataONE
    hosted repositories represent stand-alone deployments of open source Metacat repository
    server and MetacatUI search and metadata management web clients. Trusted by many
    repositories within the DataONE network, we can deploy this respository infrastructure
    to meet your communities’ needs.
  button:
    template: button
    type: internal page
    color: quaternary
    text: More about hosted repositories
    internal_link: hostedrepo/_index.md
  blocks: []
- template: section
  type: bold
  title: Interested in a becoming a DataONE Plus member?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: false
    precheck_plus: true
    precheck_newsletter: false
menu:
  primary_nav:
    name: Plus
    weight: 1
  footer:
    weight: 1

---
