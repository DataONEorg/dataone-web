---
layout: blocks
date: 2020-03-04T17:49:58.000+00:00
title: Repo Feature 2
description: 'Description of feature'
header:
  template: header
  type: text-only
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: Feature title
  intro: Introduction to the feature
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
- type: default
  template: section
- type: bold
  title: Interested in a becoming a DataONE Plus member?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_plus: true
    precheck_hostedrepo: false
    precheck_newsletter: false
  template: section
menu:
  toplevel:
    weight: 3
    parent: Hosted Repo

---
