---
draft: true
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: Citation reports
description: Find out who is citing your data, and see citation trends over time
linked_services:
- service_file: services/free.md
- service_file: services/plus.md
- service_file: services/hosted-repo.md
show_in_table: true
render_page: false
category: analytics
sub_features:
- title: Dataset citation metrics
  description: Review your per-dataset citations over time
  linked_services:
  - service_file: services/free.md
  - service_file: services/plus.md
  - service_file: services/hosted-repo.md
  show_in_table: true
- title: Aggregated citations
  description: See aggregated citations over time for your collection of datasets
  linked_services:
  - service_file: services/plus.md
  - service_file: services/hosted-repo.md
  show_in_table: true
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: quaternary
    text: Coming soon
  title: Citation reports
  intro: Find out who is citing your data, and see citation trends over time.
  buttons:
  - template: button
    type: subscribe form
    color: primary
    text: Join the waitlist
page_sections:
- type: default
  template: section
- template: section
  background: major-accent-color
  title: Interested in a DataONE Plus portal?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: false
    precheck_mailing_list: false
---
