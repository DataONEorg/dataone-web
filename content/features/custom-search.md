---
layout: blocks
date: '2020-03-16T09:49:58.000+00:00'
title: Custom portal search filters
description: Configure your portals with custom search fields specific to your science
  topics
linked_services:
- service_file: services/plus.md
  table_annotation: ''
- service_file: services/hosted-repo.md
  table_annotation: ''
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
  intro: |-
      Make finding the right data easy for your community of researchers with search
      fields focused on your science topics.
      
      **:key: Build your own custom portal for free during the preview period! No credit card required.**
  buttons:
  - template: button
    type: portal_start
    text: Get started
    color: primary
  - template: button
    type: internal page
    internal_link: "/services"
    color: quaternary
    text: See all features
  image:
    src: "/uploads/videos/custom-search-demo.mp4"
    alttext: ''
    type: float
    template: ''
    overlay_effect: ''
page_sections:
- template: section
  type: default
  small_title: Search filters
  title: How to create a filter
  intro: Creating a search filter for your portal is easy. Choose a metadata field
    and a filter type, then select a matching icon and text. Mix and match as many
    filters as you need, and arrange them into groups.
  blocks:
  - template: markdown
    style: info
    content: ":wrench: **The interface for creating and editing search filters is
      currently in the development stage** :wrench: <br> Below is a representation
      of how it will work, the final interface might look a little different. Until
      this portal feature is ready, our team can configure these portal features behind-the-scenes."
    undefined: info
  - template: steps
    steps:
    - title: Choose a metadata field
      text: Allow visitors to filter your collection of data by any metadata field
        of your choice.
      icon: file-text
      content:
      - template: demo
        type: query-list
    - title: Select a filter type
      text: Select from up to six varieties of search filters for researchers to use
        on your portal
      icon: toggle-right
      content:
      - template: demo
        type: filter-list
    - title: Customize the appearance
      text: Customize the look of your portal search fields by adding an icon, a title,
        and placeholder example text.
      icon: image
      content:
      - template: demo
        type: filter-appearance
    - title: Group related filters
      text: Further customize the search display by grouping related filters together.
      icon: layers
      content:
      - template: image
        src: "/uploads/portals/portals-grouped-filters.png"
        type: card
- template: section
  background: topography
  small_title: Geographic search
  title: Search for data by location
  icon: map
  blocks:
  - template: feature-detailed
    type: left
    text: Allow your community to search by geographic location using an interactive
      map. Zoom into the area where your research is focused by setting a specific
      center point and zoom level for the map.
    image:
      template: image
      type: tilt-right
      src: "/uploads/portals/portals-map-filter.png"
      alttext: ''
      overlay_effect: ''
    details:
    - name: Area search
      text: Users can filter your data by a specific geographic area.
      icon: map-pin
      template: ''
    - name: Hide map
      text: Want to turn off the map altogether? You can do that too.
      icon: eye-off
- template: section
  background: major-accent-color
  type: card
  icon: "zap"
  title: Ready to build your own custom portal?
  intro: Create a portal for free during the preview period. No credit card required.
  blocks:
    - template: button
      type: portal_start
      text: Get started
      color: primary
    - template: button
      type: internal page
      internal_link: plus.md
      text: Learn more about DataONE Plus portals
      color: quaternary
    - template: markdown
      style: center
      content: Have questions? [Get in touch](/contact/)
---
