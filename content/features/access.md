---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: Access control
description: Manage access to your data with rules and groups you define
linked_services:
  - service_file: services/hosted-repo.md
show_in_table: true
render_page: false
category: access control
sub_features:
- title: Share when ready
  description: Keep your dataset private while you document it thoroughly, then share it with the world when you're ready.
  linked_services:
    - service_file: services/hosted-repo.md
  show_in_table: true
  render_page: true
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: Private and public access
  intro: Control access to your datasets prior to publication with private groups
    or just yourself.
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
  id: ''
  title: ''
  intro: ''
  blocks: []
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
    newsletter_only: false
  id: ''
---
