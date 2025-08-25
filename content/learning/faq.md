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
    - q: What are your backup and recovery procedures for Hosted Repositories?
      a: 'DataONE keeps at least three copies of all datasets submitted to a hosted repository, one in our main cloud environment at the UC Santa Barbara campus, one in a replicated, online store at the NCEAS facility in downtown Santa Barbara, and one copy is created nightly in a commercial cloud archive (currently using Amazon Glacier). The primary copy is stored on a distributed Ceph storage cluster using 15 independent hosts, enabling multiple host defects without any data loss. In addition, should one of these copies no longer be accessible, the DataONE Audit system will notice that and create an additional replica at another participating member repository. Clients can access these data copies using the DataONE replication service, and restoration of copies when services come back online is automatic using the DataONE replication manager. Finally, the software systems that operate the services themselves are deployed as lightweight Kubernetes containers on a multi-node cluster at UC Santa Barbara. Any single node outage will quickly be managed as the platform will move any services that had been deployed on that cluster node to another. So, again, service recovery in the event of hardware or network failures is automated and does not require manual intervention. Any outages and system changes are recorded in our monitoring service and reported to operations staff to initiate further recovery as needed (e.g., hard disk replacements).'
    - q: Are DataONE's software and infrastructure secure?
      a: 'DataONE maintains an open source software stack built with modern security defect scanning and a defense in-depth security strategy supported by our University of California, Santa Barbara (UCSB) campus security. Our cyberinfrastructure has been reviewed by [Trusted CI](https://www.trustedci.org/), the NSF Cybersecurity Center of Excellence, to strengthen our coding standards and ensure a strong baseline of our repository software. To learn more about related security policies and documentation, please visit the [UCSB security policies](https://it.ucsb.edu/it-security-it-professionals/security-policy) page.'
    - q: Has DataONE undergone a SOC 2 audit?
      a: 'DataONE has not undergone a SOC 2 audit at this time and does not currently plan to pursue one.'
    - q: Can the curation team or dataset owner reserve a DOI in order to publish later?
      a: 'Yes. Repositories can be configured to be able to reserve DOI identifiers for datasets even while those datasets remain private (e.g. for embargo or other purposes). Contact your repository administrator to inquire about this setting.'
    - q: What is a node name and how does it differ from a URL?
      a: 'A node name is a unique identifier used in DataONE that refers to a specific repository. Users may not interact with this name much unless they are using the API, but it is used widely around our systems and power users may encounter it when they need to refer to a repository ("node") within DataONE. We usually suggest that repositories use their primary name or acronym for this value; for example, the Arctic Data Center is `urn:node:ARCTIC` and the KNB is `urn:node:KNB`. "URN" stands for Uniform Resource Name, which is another way of saying that it is a unique value that refers specifically to the repository, in a similar way to that of a URL ("Uniform Resource Locator"). URNs are machine-readable links within DataONE systems, whereas URLs are links within broader internet systems.'
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
      a: 'Yes, each portal can be configured with customized permissions. This includes control over which users and groups can view the portal, edit its content, and manage its permissions. For more details, visit our [Portals Tutorial](https://www.dataone.org/portals-tutorial/) or see our [FAQ answers](#sharing) below.'
- template: section
  title: Dataset Sharing and Access Control
  id: sharing
  background: default
  blocks:
  - template: faq
    faqs:
    - q: What are DataONE's access controls and what do they mean?
      a: 'Access control refers to the level of permissions a certain user has over an object. Individual and group access to objects in DataONE is controlled by a three-tiered permissions system consisting of **viewers**, **editors**, and **owners**. **Viewers** can see but not edit datasets, **editors** can view and edit but not share, and **owners** can do all of that plus grant access to others (and sometimes publish, depending on the repository). Repository rules sometimes limit dataset owners to only be able to edit datasets, and reserve sharing and/or publishing rights of datasets to a group of super-users such as a curation team.'
    - q: Can I grant view, edit, or publish permissions to another person for my dataset?
      a: 'Yes, if the repository allows it. Many repositories allow you to change view, edit, and publish permissions to your co-authors and reviewers for each dataset you submit using their [ORCiD ID](https://orcid.org/). Those repositories that do not allow authors to change dataset permissions themselves generally have a data curation team that can. To add someone as an editor to your dataset, look for the "Share" button at the top of the file list in the metadata editor (labeled **1**) and for individual files (labeled **2**): ![Image with an arrow from the label 1 to the top Share button (for the entire dataset) and the label 2 with an arrow to the share button for one of the dataset files](uploads/d1-sharingtable.png)
      The resulting dialog box will then allow you to add viewers, editors, and owners using a search function (by ORCiD ID, name, email, or the name of a group of users): ![Image showing a search by ORCiD number in the access control dialog box](uploads/d1-sharingpermissions.png)'

---
