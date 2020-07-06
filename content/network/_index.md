---
title: Member repositories
date: 2020-01-23
description: DataONE member nodes
layout: blocks
header:
  template: header
  type: hero image
  title: Your data ecosystem
  buttons:
  - text: Join us!
    color: primary
    type: internal page
    internal_link: "network/joinus"
  - text: See who's in the network
    color: secondary
    type: internal_link
    external_link: "#list-of-member-nodes"
  image:
    src: uploads/hero_images/usgs-HcX4g7ccucA-unsplash.jpg
    template: image
    alttext: Network background
    type: default
    overlay_effect: subtle
page_sections:
- template: section
  background: subtle-emphasis
  intro: "DataONE unites a network of data repositories operated by research centers,
    universities, non-profit organizations,\tcitizen\tscience\tinitiatives, government\tand\tnon-government
    organizations, and the like. Member institutions share data and infrastructure
    with DataONE and in return, we facilitate user access to data and interoperability
    between members."
  blocks:
  - template: metrics
- template: section
  title: Amplify the products of your research
  type: card
  background: branching-pattern
  blocks:
  - template: columns
    num_cols: 3
    alignment: left
    layout: compact
    columns:
    - text: Reach a wider audience
      icon: volume-2
      template: item-with-icon
    - text: Leverage our infrastructure
      icon: hard-drive
      template: item-with-icon
    - text: Receive recognition
      icon: award
      template: item-with-icon
    - text: Maintain high availability
      icon: layers
      template: item-with-icon
    - text: Enhance collaboration
      icon: share-2
      template: item-with-icon
  button:
    template: button
    color: quaternary
    text: Learn about joining the network
    type: internal page
    internal_link: joinus.md
- template: section
  id: list-of-member-nodes
  background: subtle-emphasis
  title: Repositories currently in our network
  intro: "Member institutions include libraries,\tresearch centers, scientific consortia,\tuniversities,\tmuseums,
    non-profit\torganizations, citizen science initiatives, corporate divisions and\tgovernmental
    and non-governmental organizations."
  blocks:
  - template: member-nodes
menu:
  primary_nav:
    weight: 1
    parent: Network
    pre: server
  footer:
    weight: 1
    parent: Network

---
