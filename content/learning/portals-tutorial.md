---
title: Portals How-To
date: 2020-08-04T11:26:58.000-07:00
description: Read a detailed how-to for creation of DataONE Portals. Portals are a
  new feature on DataONE that allow researchers to easily view project information
  and datasets all in one place across member node repositories.
layout: markdown
toc: true
header:
  template: header
  type: image on right with overflow
  background_color: light
  title: Portals Tutorial
  intro: Detailed how-to for creation of portals.
  buttons:
  - template: button
    text: Get started
    type: portal_start
    color: primary
    external_link: ''
    internal_link: ''
    icon: ''
  - template: button
    text: What's a portal?
    icon: info
    type: internal page
    internal_link: plus.md
    color: quaternary
    external_link: ''
  image:
    template: ''
    src: "/uploads/d1-about.png"
    type: tilt-left
    alttext: ''
    overlay_effect: ''
  pill:
    template: pill
    style: quaternary
    text: Free Preview
menu:
  primary_nav:
    parent: Learning
    weight: 13
    pre: star
  footer:
    parent: Learning
    weight: 16

---
# Portals

A new feature on DataONE. Researchers can now easily view project information and datasets all in one place across member node repositories.

## What is a Portal

A portal is a collection of DataONE member node data packages on a unique webpage.

Typically, a research project's website won't be maintained beyond the life of the project and all the information on the website that provides context for the data collection is lost. DataONE portals can provide a means to preserve information regarding the projects' objectives, scopes, and organization and couple this with the data files so it's clear how to use and interpret the data for years to come. Plus, when datasets are scattered across the member nodes of DataONE, portals can help see them all in one convenient webpage.

Portals also leverage DataONE's metric features, which create statistics describing the project's data packages. Information such as total size of data, proportion of data file types, and data collection periods are immediately available from the portal webpage.

## Portal Uses

Portals allow users to bundle supplementary information about their group, data, or project along with the data packages. Data contributors can organize their project specific data packages into a unique portal and customize the portal's theme and structure according to the needs of that project.

Researchers can also use portals to compare their public data packages and highlight and share them with other teams, as well as the broader research audience.

To see an example of what portals could look like, please view the [Toolik Field Station's portal](https://search.dataone.org/portals/toolik "Toolik Field Station's portal").

## Portal Main Components

Portals have five components: an about page, a settings page, a data page, a metrics page, and customizable free-form pages.

### About Page

This page is the first page users will see after initially creating a new portal, and it is highly recommended that users use this feature to create a description for their portal. Add a picture of your logo, a title and description of your portal, and freeform text using the markdown editor.

![](/uploads/d1-about.png)

### Settings Tab

On the settings tab, users can give the portal a title and assign it a unique url; also referred to as a **portal identifier**. Users can add a general description of the portal, upload an icon photo for their data, and upload icon photos from any partner organizations that have contributed to the data. These partner icons will appear in the footer banner on every page in a portal, likewise, your portal icon will appear in the header banner.

![](/uploads/d1-settingspage.png)

Every DataONE portal URL will follow this format:

https://search.dataone.org/portals/**portal_identifier**

### Data Page

The data page is the most important component of the DataONE portal system. This is where users will display the data packages of their choice. It looks and performs just like the main [DataONE user interface](https://search.dataone.org/data "DataONE user interface").

![](/uploads/d1-datapage.png)

### Metrics Page

Unlike the first two pages, the metrics page cannot be edited or customized. It is a default feature that provides the following information about the data packages within a portal:

* The total number of publicly-available metadata records
* The volume (in bytes) of all publicly-available metadata records and data files
* The most recent date the datasets were last updated (metadata and data are treated separately)
* The file types of all publicly-available data
* The years in which data was collected, regardless of upload date

![](/uploads/d1-metricspage.png)

Please contact DataONE's support team at support@dataone.org about any questions or concerns about the metrics page.

### Freeform Pages

Freeform pages are an optional function provided by DataONE portals. Here, users can add as much supplementary information as needed using markdown.

#### Example Freeform Pages

Below are two examples of ways users can take advantage of portal freeform pages to tie unique content together with their data packages. Users can add as many tabs as needed.

![](/uploads/d1-expage1.png)

![](/uploads/d1-expage2.png)

The examples shown on this page are from the [Toolik Field Station's portal](https://search.dataone.org/portals/toolik "Toolik Field Station's portal"); visit to explore its contents further.

## Creating Portals

A step-by-step guide on how to navigate DataONE and create a new portal.

[_For video tutorials on how to create your first portal, please visit DataONE member node, the Arctic Data Center._](https://arcticdata.io/data-portals/#instructional-videos-identifier "Arctic Data Center Portal Videos")

### Getting Started with Portals

If you are on [DataONE's primary website](https://search.dataone.org/data "DataONE's primary website"), click on your name in the upper right hand corner when you are signed in to DataONE with your ORCID. A dropdown will appear, and you would select "My Portals".

![](/uploads/d1-createportal2.png)

On your profile settings page, select "My Portals". After the page loads select the yellow button "+ New Portal" to add a new portal, you'll automatically be directed to a fresh edit session.

![](/uploads/d1-createportal3.png)

### Portal About and Settings Pages

In a new edit session, the first thing you'll see is the about page where you'll be able to add details about your project page.

On the settings tab, you'll set the basic elements of your portal:

* Portal title
* Unique portal identifier
  * _This identifier will be used to create the portal URL. If the name is available, a label will indicate it's available and if the name is taken already, it will note that the name is already taken. This feature ensures the portals are unique._
* Portal description
* Whether the portal is public or private
* Collaborators, which can be added by name, ORCID, or group name
* Partner organization logos

![](/uploads/d1-portalsettings.png)

Adding collaborators to help you create your portal is as straightforward as copying and pasting in their ORCID into the box below the permissions section. You can choose whether the collaborator can view, edit, or is an owner of the portal. You can have multiples of each role.

![](/uploads/d1-orcid.png)

## Adding Data to Portals

_Please see this tutorial video from member node, the Arctic Data Center, for a walkthrough on using portal search filters:_ [Adding Datasets by Search Query](https://vimeo.com/414999470 "Adding Datasets by Search Query").

Navigate to the "Data" tab. Here you will see a list of all the datasets across DataONE member nodes. In order to populate a portal with the data packages applicable to your needs, narrow the search results using the filters on the left side of the page. When you've selected the data you want, hit the yellow save button in the bottom right.

![](/uploads/d1-addingdata.png)

The portal search feature has the following filters available:

* **Search**: A general search feature that will return data packages with the entered term in the package metadata
* **Creator**: We recommend searching by last names for more accurate results.
* **Publish Year:** Use either the sliding scale or enter start and end years manually
* **Year of Data Coverage**: Searches for data packages with temporal coverages within the selected date range. As with the Publish Year search, use either the sliding scale or enter manually
* **Identifier**: Searches for all or part of the DOI (digital object identifier) associated with the dataset
* **Taxon**: Searches for any taxonomic rank specified by the submitter
* **Location**: This filter will search within the data packages' geographic description field, meaning that you can search by both name or type of location (eg. United States or forest)

If you need assistance assembling portal data using a complex query, please contact the DataONE Support Team at support@dataone.org.

## Data Package Metrics

As stated in Portal Main Components, the metrics page is a default function provided by DataONE. This page cannot be edited and cannot be viewed while editing. Users do have the option to delete the page if they'd like. To delete the page, select the arrow next to the word "Metrics" in the tab and choose "Delete" from the dropdown list.

To see metric summaries, navigate to your portal in view mode. See Saving and Editing Portals for more information on how to view portals.

![](/uploads/d1-editmetrics.png)

Please contact the DataONE Support Team at support@dataone.org about any questions or concerns about the metrics page.

## Creating Unique Freeform Pages

Please see this tutorial video from member node, the Arctic Data Center, for a walkthrough on using portal search filters: [Creating a Freeform Text Page](https://vimeo.com/414999333 "Creating a Freeform Text Page").

To add a freeform page to a portal, select the "+" tab next to the data and metric tabs and then choose the freeform option that appears on screen. A freeform page will then populate.

![](/uploads/d1-addffpage.png)

Easily customize your banner with a unique image, title, and page description. To change the name of the tab, click on the arrow in the "Untitled" tab and select "Rename" from the dropdown list.

![](/uploads/d1-editff.png)

Below the banner, there is a markdown text box with some examples on how to use the markdown formatting directives to customize the text display. There is also a formatting header at the top to assist if you're unfamiliar with markdown. As you write, toggle through the Edit and Preview modes in the markdown text box to make sure your information is displaying as intended. Portals are flexible and can accommodate as many additional freeform pages as needed.

The markdown header structure helps to generate the table of contents for the page.

Please see these additional resources for help with markdown:

* [Markdown reference](https://commonmark.org/help/ "Markdown reference")
* [Ten minute tutorial](https://commonmark.org/help/tutorial/ "Ten minute tutorial")
* For a longer example where you can also preview the results, checkout the [Showdown Live Editor](http://demo.showdownjs.com/ "Showdown Live Editor").

## Saving and Editing Portals

Be sure to save your portal when you complete a page to ensure your progress is retained.

![](/uploads/d1-portalsave.png)

Whenever a portal is saved, a dialogue box will pop up at the top of the page prompting users to view their private portal in view mode. You can choose to ignore this and continue editing.

![](/uploads/d1-popupsave.png)

To delete a page from your portal, select the arrow in the tab and choose "Delete" from the dropdown.

![](/uploads/d1-deletepage.png)

Users can view and edit their portal from their "My Portals" tab.

First, click the arrow your name in the top-right corner to drop down your menu options. Then, select "My Portals" from the dropdown underneath your name. See the section on Getting Started with Portals for more details.

![](/uploads/d1-myportal.png)

![](/uploads/d1-viewportal.png)

Click on the portal title to view it or select the edit button to make changes.

## How to Publish Portals

New portals are automatically set to private and only visible to the portal creator. The portal will remain private until the owner decides to make it public.

To make your portal public, go into the settings of your portal. Under the description, you'll see a new section called "Sharing Options". You can toggle between your portal being private and your portal being public there.

![](/uploads/d1-private.png)

## Sharing Portals

In order to share a published portal, users can simply direct recipients to their unique identifier. Portal identifiers are embedded into DataONE's portal URL: _https://search.dataone.org/portals/**portal-identifier**_

To view or edit your portal identifier, go into edit mode in your portal. In the settings page, your portal URL will be the first item on the page.

![](/uploads/d1-url.png)

## Tutorial Videos

For video tutorials on how to create your first portal, please visit member node, the Arctic Data Center.

{{< button text="Video portal tutorials" color="quaternary" type="external website" external_link="https://arcticdata.io/data-portals/#instructional-videos-identifier" icon="video" >}}

## Acknowledgements

_Much of this documentation was composed by ESS-DIVE, which can be found_ [_here_](https://docs.ess-dive.lbl.gov/portals/ "here")_._

## Start building!

**Ready to get started building your own portal?**

{{< button text="Get started" color="primary" type="portal_start" icon="star" >}}