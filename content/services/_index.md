---
title: Services
description: All services and features offered by DataONE, including details about DataONE Plus and DataONE Hosted Repositories
layout: blocks
aliases:
  - "/features/"
  - "/pricing/"
menu:
  primary_nav:
    name: All services & features
    weight: 100
    parent: Services
header:
  template: header
  type: text only
  background_color: default
  pill:
    template: pill
    style: primary
    text: New!
  title: Introducing services from DataONE
  buttons:
  - template: button
    type: subscribe form
    color: primary
    text: Join the waitlist
  - template: button
    type: contact
    color: secondary
    text: contact us
page_sections:
- template: section
  title: Full feature list
  blocks:
  - template: feature-table
- template: section
  title: Frequently asked questions
  background: subtle-emphasis
  blocks:
  - template: faq
    faqs:
    - q: question
      a: answer
  button:
    text: Get in touch
    type: contact
    color: primary
    icon:
      icon: mail
- template: section
  background: major-accent-color
  title: Interested in DataONE Plus or a Hosted Repository?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: true
    precheck_newsletter: false
---
