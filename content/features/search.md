---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: Cross-repository search
description: Quickly find data across the DataONE network with detailed search filters, or by navigating the
    interactive map.
free: true
plus: true
hostedrepo: true
show_in_table: true
render_page: true
category: data search
sub_features:
- title: Portal search
  description: Search for datasets within your portal
  free: false
  plus: true
  hostedrepo: true
  show_in_table: true
- title: Repository search
  description: Search your repository by numerous properties including space, time, taxa, authors, and others
  free: false
  plus: false
  hostedrepo: true
  show_in_table: true
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: Comprehensive search
  intro: Quickly find data with detailed search filters, or by navigating the
      interactive map.
  buttons:
  - template: button
    type: internal page
    internal_link: /services
    color: secondary
    text: See all features
  - template: button
    type: subscribe form
    color: primary
    text: Join the waitlist
page_sections:
- type: default
  template: section
- template: section
  background: major-accent-color
  title: Interested in a hosted repository?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: false
    precheck_newsletter: false
---
