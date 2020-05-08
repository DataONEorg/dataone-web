---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: Custom portal search filters
description: Configure your portals with custom search fields specific to your science topics
linked_services:
- service_file: services/plus.md
- service_file: services/hosted-repo.md
show_in_table: true
render_page: true
category: data search
header:
  template: header
  type: image on right
  background_color: light
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: Search tools designed for your data
  intro: Make finding the right data easy for your community of researchers with search
    fields focused on your science topics.
  buttons:
  - template: button
    type: internal page
    internal_link: "/services"
    color: secondary
    text: See all features
  - template: button
    type: subscribe form
    color: primary
    text: Join the waitlist
  image:
    src: "/uploads/videos/custom-search-demo.mp4"
    alttext: ''
    type: float
page_sections:
- template: section
  background: topography
  title: Geographic location search
  icon:
    icon: map
  blocks:
  - template: feature-detailed
    type: left
    text: Allow your community to search by geographic location using an interactive map. Zoom into the area where
      your research is focused by setting a specific center point and zoom level for
      the map. 
    image:
      template: image
      type: tilt-right
      src: /uploads/portals/portals-map-filter.png
    details:
    - name: Area search
      text: Users can filter your data by a specific geographic area.
      icon:
        template: icon
        icon: map-pin
        size: small
        color: secondary
        stroke: thicker
    - name: Hide map
      text: Want to turn off the map altogether? You can do that too.
      icon:
        template: icon
        icon: eye-off
        size: small
        color: secondary
        stroke: thicker
- template: section
  type: default
  title: How to create a filter
  intro: Creating a search filter for your portal is easy. Choose a metadata field and a filter type, then select a matching icon and text. Mix and match as many filters as you need, and arrange them into groups.  
  blocks:
  - template: markdown
    content: "*These portal features will
    soon be available in the portal editor, but until then, our team can configure
    these portal features behind-the-scenes.*"
  - template: steps
    steps:
    - title: Choose a metadata field
      text: Allow visitors to filter your collection of data by any metadata field of your choice.
      icon: file-text
      content:
      - template: demo
        type: query-list
    - title: Select a filter type
      text: Select from up to six varieties of search filters for researchers
        to use on your portal
      icon: toggle-right
      content:
      - template: demo
        type: filter-list
    - title: Customize the appearance
      text: Customize the look of your portal search fields by adding an icon, a title, and placeholder
        example text.
      icon: image
      content:
      - template: demo
        type: filter-appearance
    - title: Group related filters
      text: Further customize the search display by grouping related filters
        together.
      icon: layers
      content:
      - template: image
        src: /uploads/portals/portals-grouped-filters.png
        type: card
- template: section
  background: major-accent-color
  title: Interested in a DataONE Plus portal?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: false
    precheck_plus: true
    precheck_newsletter: false
    newsletter_only: false

---
