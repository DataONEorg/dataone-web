---
layout: blocks
date: 2020-03-16T09:49:58.000+00:00
title: FAIR Data
description: FAIR metadata reports for DataONE Plus portals and hosted repositories.
header:
  template: header
  type: text only
  bkg_color: default
  pill:
    template: pill
    style: secondary
    text: Coming soon
  title: FAIR Data
  intro: Help your community improve data discovery, accessibility, interoperability,
      and reuse with quantitative metadata quality assessment using the FAIR principles.
      Reports for individual datasets, portal collections, and/or your entire repository
      are available.
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
- template: section
  type: bold
  title: Interested in a hosted repository?
  intro: Enhanced DataONE services are currently available on a limited basis as part
    of a beta program. Please provide the information below and we’ll get in touch
    when these services are ready for your organization.
  blocks:
  - template: join-form
    precheck_hostedrepo: true
    precheck_plus: false
    precheck_newsletter: false
menu:
  bottom_nav:
    weight: 3
    parent: Hosted Repo

---
