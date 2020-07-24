---
title: Member repositories
date: 2020-01-23
description: DataONE member repositories
layout: blocks
header:
  template: header
  type: hero image
  title: Your data ecosystem
  buttons:
  - text: Learn about joining the network
    color: primary
    type: internal page
    internal_link: jointhenetwork
  - text: See who's in the network
    color: secondary
    type: internal page
    external_link: "#list-of-member-repositories"
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
  icon: zap
  small_title: Become a member repository
  title: Amplify the products of your research
  intro: Join our network as a member repository and help lead the open data movement!
    Becoming a member repository is free an open to all types of organizations. [Contact
    us](/contact/) to get started, or [learn more](/jointhenetwork/).
  type: card
  background: branching-pattern
  blocks:
  - template: columns
    num_cols: 3
    alignment: left
    layout: compact
    columns:
    - name: Reach a wider audience
      icon: volume-2
      template: item-with-icon
    - name: Leverage our infrastructure
      icon: hard-drive
      template: item-with-icon
    - name: Receive recognition
      icon: award
      template: item-with-icon
    - name: Maintain high availability
      icon: layers
      template: item-with-icon
    - name: Enhance collaboration
      icon: share-2
      template: item-with-icon
    - name: Help shape DataONE's future
      icon: globe
      template: item-with-icon
  button:
    template: button
    color: primary
    text: Learn about joining the network
    type: internal page
    internal_link: jointhenetwork.md
- template: section
  id: list-of-member-repositories
  background: subtle-emphasis
  title: Repositories currently in our network
  intro: "Member institutions include libraries,\tresearch centers, scientific consortia,\tuniversities,\tmuseums,
    non-profit\torganizations, citizen science initiatives, corporate divisions, and\tgovernmental
    and non-governmental organizations."
  blocks:
  - template: member-nodes
menu:
  footer:
    name: Member repos
    weight: 2
    parent: Community
  primary_nav:
    weight: 1
    parent: Community
    pre: server
    post: Our federated network of data repos

---
