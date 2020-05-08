---
layout: blocks
title: DataONE Plus
description: Enhanced DataONE products and services in support of your research, including
  branded portals, quality assessment metrics (including the FAIR suite), and much
  more.
service_icon: d1-plus-logo
service_color: "#34bb96"
weight: 2
date: 2020-01-14T19:04:29.000+00:00
render_page: true
header:
  template: header
  type: image on right
  background_color: light
  pill:
    template: pill
    style: quaternary
    text: Coming soon
  title: A home for your research online
  intro: Custom search portals for your science, your data, and related data in the
    DataONE network.
  image:
    template: image
    src: "/uploads/portals-header.png"
    alttext: Portals from DataONE Plus
    type: default
    overlay_effect: ''
  buttons:
  - template: button
    type: subscribe form
    color: primary
    text: Join the waitlist
    external_link: ''
    internal_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  - template: button
    type: contact
    color: secondary
    text: Contact us
    external_link: ''
    internal_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
page_sections:
- template: section
  type: default
  title: "Showcase your team's goals & results with  \n **branded portals**"
  intro: Create a custom, branded portal for your research topic or lab group that
    spans repositories in the DataONE network. Branded portals provide a convenient,
    readily customized way to communicate your science, your team, your data, and
    related data from within the DataONE network.
  blocks:
  - template: columns
    num_cols: 3
    columns:
    - template: feature-detailed
      image:
        template: image
        type: float
        src: uploads/dataset-collection.png
        alttext: Dataset collection
        overlay_effect: ''
      type: top
      headline: All of your data in one place
      text: Create a catalog of your team's data that spans the DataONE network
      details: []
      button:
        template: ''
        type: ''
        color: ''
        text: ''
        external_link: ''
        internal_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
    - template: feature-detailed
      image:
        template: image
        type: float
        src: uploads/portal-editor.png
        alttext: Search filters
        overlay_effect: ''
      type: top
      text: Pick datasets, add and reorder pages, and upload images in minutes with
        the easy-to-use online portal editor
      headline: Set up in minutes
      details: []
      button:
        template: ''
        type: ''
        color: ''
        text: ''
        external_link: ''
        internal_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
    - template: feature-detailed
      image:
        template: image
        type: float
        src: uploads/search-filters.png
        alttext: Search filters
        overlay_effect: ''
      type: top
      button:
        template: button
        type: internal page
        color: quaternary
        text: Custom search options
        internal_link: features/custom-search.md
        external_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
      headline: Customized search filters
      text: Configure search fields specific to your science topics
      details: []
    alignment: ''
    layout: ''
  button:
    template: button
    type: internal page
    color: primary
    internal_link: "/services"
    text: Explore all features
    external_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  background: ''
  background2: ''
  icon:
    template: ''
    icon: ''
    size: ''
    color: ''
    stroke: ''
  id: ''
- template: section
  background: data-wave
  title: Maximize the value of your data
  intro: With access to information about the datasets in your portal, you can monitor
    how your data is being used and assess its quality based on community established
    scores.
  blocks:
  - template: feature-detailed
    headline: Make your data FAIR
    text: Access aggregated FAIR metadata assessment scores. Improve data discovery,
      accessibility, interoperability, and reusability with a quantitative metadata
      assessment using the FAIR principles.
    type: right
    image:
      src: "/uploads/fair_reports/fair-for-portals_compact.png"
      type: tilt-left
      alttext: An example line chart with one line for each of the four FAIR metrics
        (Findability, Accessibility, Interoperability, and Reusability) showing changes
        in scores per month
      template: ''
      overlay_effect: ''
    details:
    - template: item-with-icon
      name: Time series charts
      text: Discover how FAIR scores change over time through time series charts in
        your DataONE Plus portal
      icon:
        template: icon
        icon: trending-up
        size: small
        color: secondary
        stroke: thicker
    button:
      template: button
      type: internal page
      color: quaternary
      text: More about FAIR
      internal_link: "/features/fair"
      external_link: ''
      icon:
        template: ''
        icon: ''
        size: ''
        color: ''
        stroke: ''
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
        external_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
      image:
        template: ''
        src: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      details: []
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
        external_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
      image:
        template: ''
        src: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      details: []
    layout: ''
  type: ''
  background2: ''
  icon:
    template: ''
    icon: ''
    size: ''
    color: ''
    stroke: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  id: ''
- template: section
  title: Customized to match your project
  type: default
  blocks:
  - template: feature-detailed
    type: left
    headline: Add custom content & branding
    text: Create personalized pages for your project
    image:
      src: uploads/portals-branding.png
      alttext: FAIR metrcis report
      template: ''
      type: ''
      overlay_effect: ''
    details:
    - name: Your branding
      text: Customize your portal with the colors, logos, and images that reflect
        your project
      icon:
        icon: image
        size: medium
        color: secondary
        template: ''
        stroke: ''
      template: ''
    - name: Your content
      text: Your portal pages can include visualizations of your research, a list
        of your team members, and any other custom content
      icon:
        template: icon
        icon: file-text
        size: medium
        color: secondary
        stroke: ''
      template: ''
    button:
      template: ''
      type: ''
      color: ''
      text: ''
      external_link: ''
      internal_link: ''
      icon:
        template: ''
        icon: ''
        size: ''
        color: ''
        stroke: ''
  background: ''
  background2: ''
  icon:
    template: ''
    icon: ''
    size: ''
    color: ''
    stroke: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  id: ''
- template: section
  background: wave
  title: Built with DataONE Plus
  intro: See what others are doing with DataONE Plus portals
  blocks:
  - template: carousel
    slides:
    - title: State of Alaska's Salmon and People
      subtitle: A collaboration of researchers, cultural leaders, and others working
        to bring together important, accurate, and up-to-date information that will
        help to support better salmon decision-making
      color: "#46567f"
      button:
        template: button
        type: external website
        color: primary
        text: See portal
        external_link: https://knb.ecoinformatics.org/portals/sasap
        internal_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
      logo: "/uploads/portals/logo_SASAP.svg"
      content:
      - template: tabs
        tabs:
        - title: Custom content
          icon: image
          annotation: Researchers communicate their results with multiple pages of
            text, maps, data visualizations
          content:
          - template: image
            type: float
            src: "/uploads/portals/sasap_content.png"
            alttext: ''
            overlay_effect: ''
        - title: Search filters
          icon: search
          annotation: Filters enable visitors to find data by Alaskan region, salmon
            species, waterbody, and more
          content:
          - template: image
            type: float
            src: "/uploads/portals/sasap_search.png"
            alttext: ''
            overlay_effect: ''
        - title: Members section
          icon: users
          annotation: The team credits their members, supporters, and awards with
            a specialized members section
          content:
          - template: image
            type: float
            src: "/uploads/portals/sasap_members.png"
            alttext: ''
            overlay_effect: ''
        position: ''
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
        internal_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
      logo: "/uploads/portals/logo_DBO.svg"
      content:
      - template: tabs
        tabs:
        - title: Custom content
          icon: image
          annotation: Project members use custom content to share their goals and
            history, as well as house their extensive list of publications
          content:
          - template: image
            type: float
            src: "/uploads/portals/dbo_publications.png"
            alttext: ''
            overlay_effect: ''
        - title: Search filters
          icon: search
          annotation: Visitors can find datasets by selecting a vessel, project, or
            transect name from a custom dropdown menu
          content:
          - template: image
            type: float
            src: "/uploads/portals/dbo_search.png"
            alttext: ''
            overlay_effect: ''
        - title: Metrics
          icon: trending-up
          annotation: The metrics page showcases data usasge, including articles where
            sspecific datasets have been cited
          content:
          - template: image
            type: float
            src: "/uploads/portals/dbo_metrics.png"
            alttext: ''
            overlay_effect: ''
        position: ''
  type: ''
  background2: ''
  icon:
    template: ''
    icon: ''
    size: ''
    color: ''
    stroke: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  id: ''
- template: section
  type: default
  icon:
    icon: book-open
    color: inherit
    size: large
    template: ''
    stroke: ''
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
      image:
        template: ''
        src: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      details: []
      button:
        template: ''
        type: ''
        color: ''
        text: ''
        external_link: ''
        internal_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
    - template: feature-detailed
      type: top
      headline: Discounted training
      text: Take advantage of discounted pricing for data science and data management
        training courses
      image:
        template: ''
        src: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      details: []
      button:
        template: ''
        type: ''
        color: ''
        text: ''
        external_link: ''
        internal_link: ''
        icon:
          template: ''
          icon: ''
          size: ''
          color: ''
          stroke: ''
    alignment: ''
    layout: ''
  background: ''
  background2: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  id: ''
- template: section
  type: card
  background: subtle-emphasis
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
    internal_link: services/hosted-repo.md
    external_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  blocks: []
  background2: ''
  icon:
    template: ''
    icon: ''
    size: ''
    color: ''
    stroke: ''
  id: ''
- template: section
  background: major-accent-color
  title: Interested in a becoming a DataONE Plus member?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: false
    precheck_plus: true
    precheck_newsletter: false
    style: ''
    newsletter_only: false
  type: ''
  background2: ''
  icon:
    template: ''
    icon: ''
    size: ''
    color: ''
    stroke: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon:
      template: ''
      icon: ''
      size: ''
      color: ''
      stroke: ''
  id: ''
icon: d1-plus-logo
menu:
  primary_nav:
    weight: 2
    parent: Services
    post: Portals, custom search, metrics & more
    icon: ''
    name: ''
  footer:
    weight: 1

---
