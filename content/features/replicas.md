---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: Geographic replicas
description: Your datasets are replicated to DataONE repositories across the US
linked_services:
- service_file: services/hosted-repo.md
show_in_table: true
render_page: false
category: data management
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: Geographic replicas
  intro: Your data are replicated to distinct geographic regions for high
      availability and preservation.
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
    precheck_mailing_list: false
---
