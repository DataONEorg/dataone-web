---
_build:
  render: false
  list: always
  publishResources: true
d1_teams:
  - ""
  - Leadership team
  - Software team
  - Post-docs
  - Advisory board
  - Member repository coordinators
layout: blocks
title: People At DataONE
description: The passionate people behind DataONE
header:
  template: header
  type: hero image
  title: Meet the DataONE team
  image:
    src: uploads/hero_images/leaf-background-texture.jpg
    template: image
    type: default
    overlay_effect: darken
page_sections:
- template: section
  type: default
  icon: users
  title: DataONE Organization
  background: subtle-emphasis
  intro: |-
    Data Observation Network for Earth's (DataONE's) foundation for excellence is the expertise and established partnerships among participating organizations that have multi-decade expertise in a wide range of fields including: existing archive initiatives, libraries, environmental observing systems and research networks, data and information management, science synthesis centers, and professional societies.
  blocks:
  - template: people
    team_members: true
    type: simple
    grouping: "filters"
menu:
  primary_nav:
    name: Our Team
    parent: About
    pre: smile
    weight: 1.5
  footer:
    name: Our Team
    parent: About
    weight: 1.5
---
{{/* This directory stores information about team peoples, webinar speakers, and any other people that we feature on the website somewhere. */}}
