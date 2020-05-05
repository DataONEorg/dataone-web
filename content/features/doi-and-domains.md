---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: Custom DOIs and domains
description: A custom DOI prefix and domain name for your repository
free: false
plus: false
hostedrepo: true
show_in_table: true
render_page: false
category: branding
sub_features:
- title: Custom DOI prefix
  description: A DOI prefix is configured exclusively for your datasets, products, and code
  free: false
  plus: false
  hostedrepo: true
  show_in_table: true
- title: Custom domain name
  description: Your repository is available at a domain of your choice, but hosted by DataONE
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
  title: Custom DOIs and domains
  intro: A custom DOI prefix and domain name for your repository
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
