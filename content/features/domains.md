---
layout: blocks
date: '2020-03-16T09:49:58.000+00:00'
title: Custom domain name
description: Your repository is available at a domain of your choice, but hosted
  by DataONE
linked_services:
- service_file: services/hosted-repo.md
  service: ''
  table_annotation: ''
show_in_table: true
render_page: false
category: branding
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: Custom DOIs and domains
  intro: A custom DOI prefix and domain name for your repository
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
page_sections:
- type: default
  template: section
  id: ''
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
    style: ''
    mailing_list_only: false
---
