---
layout: blocks
date: 2024-11-12
title: FAQ
description: TODO
icon: question
menu:
  footer:
    weight: 3
    parent: Services
  primary_nav:
    name: FAQ
    weight: 99
    parent: Services
header:
  template: header
  title: Frequently Asked Questions about DataONE Services
  type: text only
  background_color: secondary
page_sections:
- template: section
  title: Hosted Repository
  id: hosted-repo
  background: default
  button:
    template: button
    type: contact
    color: primary
    text: Contact us to set up a hosted repository
    icon: 'mail'
  blocks:
  - template: faq
    faqs:
    - q: Why might I consider a Hosted Repository?
      a: 'A Hosted Repository provides groups with an easy-to-use data and metadata repository, web-based submission and metadata editing, assignment of a citable DOI in your own DOI prefix, and many other features. You can deposit datasets, documents, software, and other research artifacts, and assign a DOI to each. This is all operated on our infrastructure, minimizing the time that you need to spend on maintaining and securing computing systems, and on maintaining the repository software.
You are in full control of the data curation for the data you upload to your hosted repository, and we make sure the service is stable and secure. This service is intended for institutions or projects that want to maintain a long-term repository presence.'
    - q: What if I don’t want a Hosted Repository, but still want to use DataONE to store my data?
      a: 'You can deposit data in one of the open DataONE repositories and then you can use the [DataONE Plus service](#portals) to build your own customizable data portal describing your project.  DataONE Plus provides a customizable data portal where you control the pages and content via a web form, and can present a custom catalog populated with datasets from any of the member repositories in the DataONE network.'
    - q: Can we set up a dataset curation/review process for submitted datasets?
      a: 'Yes. Dataset curation can be as intensive as desired. Some Hosted Repositories have extensive review processes, whereas others allow dataset creators to publish datasets immediately without review. Curation can involve either editing and annotating metadata records via the API, or simply checking for errors. Generally, repositories that have a curation process tend to only allow members of their curation teams to assign DOIs and make datasets public.' 
    - q: Can datasets be privately viewable by certain groups and remain publicly invisible?
      a: "Yes, access to datasets can be controlled by DataONE's Access Policy system. This access system can serve as a metadata curation and/or temporary publication embargo state prior to a wider release."
    - q: Does DataONE accept sensitive data?
      a: "DataONE's mission is to make data more discoverable, accessible, and usable. While some of our member repositories may accept sensitive data, our Hosted Repository service is not intended for highly sensitive data, such as that which is subject to: 1) statutory restrictions such as HIPAA, FERPA, or other export control restrictions, or 2) classified information or other federally designated sensitive category.

      We promote the long-term preservation of data with an intention of open data sharing. If you are unsure whether your data is appropriate for hosting, please contact [support@dataone.org](mailto:support@dataone.org) where our team members can help."
    - q: Where are DataONE's services hosted? 
      a: 'Our main services are hosted in the University of California, Santa Barbara (UCSB) [North Hall Data Center](https://it.ucsb.edu/information-technology-services/north-hall-data-center/). A second copy of the data is stored at an off-campus facility in downtown Santa Barbara, and a third copy is stored in a dark archive in the Amazon Glacier cloud storage system, primarily intended for disaster recovery. Other copies may be stored as replica objects at participating network member repositories across the world.'
    - q: Are DataONE's software and infrastructure secure?
      a: 'DataONE maintains an open source software stack built with modern security defect scanning and a defense in-depth security strategy supported by our University of California, Santa Barbara (UCSB) campus security. Our cyberinfrastructure has been reviewed by [Trusted CI](https://www.trustedci.org/), the NSF Cybersecurity Center of Excellence, to strengthen our coding standards and ensure a strong baseline of our repository software. To learn more about related security policies and documentation, please visit the [UCSB security policies](https://it.ucsb.edu/it-security-it-professionals/security-policy) page.'
    - q: Has DataONE undergone a SOC 2 audit?
      a: 'DataONE has not undergone a SOC 2 audit at this time and does not currently plan to pursue one.'
- template: section
  title: DataONE Plus
  id: portals
  background: subtle-emphasis
  button:
    template: button
    type: portal_start
    color: primary
    text: Set up a portal
    icon: plus
  blocks:
  - template: faq
    faqs:
    - q: Why should I consider DataONE Plus instead of a Hosted Repository?
      a: 'DataONE Plus is ideal for projects that want to establish a data catalog and web presence, but may be shorter-term and do not want to maintain a complete data repository.  This system provides a customizable data portal where you control the data content and web pages, and can present a custom catalog with content from any of the member repositories in the DataONE network.'
    - q: How can I make changes to my portal?
      a: 'If you have permissions to edit the portal, you can do it via our system. For a better tutorial, visit out [Portals How-To Page](https://www.dataone.org/portals-tutorial/#saving-and-editing-portals).'
    - q: Can we limit permissions to specific members and/or groups for certain portals?
      a: 'Yes, each portal can be configured with customized permissions. This includes control over which users and groups can view the portal, edit its content, and manage its permissions. For more details, visit our [Portals Tutorial](https://www.dataone.org/portals-tutorial/).'
---
