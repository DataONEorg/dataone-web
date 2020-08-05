---
title: Portals Lesson
date: 2020-08-04T11:26:58.000-07:00
description: A lesson on how to create portals using the DataONE portal editor.
layout: markdown
header:
  template: header
  type: text only
  background_color: default
  title: Documentation
  intro: Detailed how-tos for all DataONE products
  buttons: []
  image:
    template: ''
    src: ''
    alttext: ''
    type: ''
    overlay_effect: ''
  pill:
    template: ''
    style: ''
    text: ''
page_sections:
- blocks:
  - template: markdown
    style: default
    content: ''
  template: ''
  type: ''
  background: ''
  background_image: ''
  background2: ''
  icon: ''
  small_title: ''
  title: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''
- template: section
  type: default
  title: ''
  intro: ''
  blocks: []
  background: ''
  background_image: ''
  background2: ''
  icon: ''
  small_title: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''
menu:
  primary_nav:
    parent: Learning
    weight: 4
  footer:
    parent: Learning
    weight: 4

---
Content appropriated from ESS-DIVE's portal documentation found \[here\]([https://docs.ess-dive.lbl.gov/portals/](https://docs.ess-dive.lbl.gov/portals/ "https://docs.ess-dive.lbl.gov/portals/")).

\# Portals

A new feature on DataONE. Researchers can now easily view project information and datasets all in one place across member node repositories.

\## **What is a Portal?**

A portal is a collection of DataONE member node data packages on a unique webpage.

Typically, a research project&#39;s website won&#39;t be maintained beyond the life of the project and all the information on the website that provides context for the data collection is lost. DataONE portals can provide a means to preserve information regarding the projects&#39; objectives, scopes, and organization and couple this with the data files so it&#39;s clear how to use and interpret the data for years to come. Plus, when datasets are scattered across the member nodes of DataONE, portals can help see them all in one convenient webpage.

Portals also leverage DataONE&#39;s metric features, which create statistics describing the project&#39;s data packages. Information such as total size of data, proportion of data file types, and data collection periods are immediately available from the portal webpage.

\## **Portal Uses**

Portals allow users to bundle supplementary information about their group, data, or project along with the data packages. Data contributors can organize their project specific data packages into a unique portal and customize the portal&#39;s theme and structure according to the needs of that project.

Researchers can also use portals to compare their public data packages and highlight and share them with other teams, as well as the broader Arctic research audience.

To see an example of what portals could look like, please view the \[Toolik Field Station's portal\]([https://arcticdata.io/catalog/portals/toolik](https://arcticdata.io/catalog/portals/toolik "https://arcticdata.io/catalog/portals/toolik")).

\## **Portal Main Components**

Portals have four components: a settings page, a data page, a metrics page, and customizable free-form pages.

\### **Settings Tab**

The first component of portals is the settings tab. This tab is the first page users will see after initially creating a new portal and sets up important infrastructure for the portal.

On this page users can give the portal a title and assign it a unique url; also referred to as a **portal identifier**. Users can add a general description of the portal, upload an icon photo for their data, and upload icon photos from any partner organizations that have contributed to the data.These partner icons will appear in the footer banner on every page in a portal, likewise your portal icon will appear in the header banner.

\[settings-tab\](\~/Documents/Portals-Training/settings-tab.png)

Every DataONE portal URL will follow this format:

[https://arcticdata.io/catalog/portals/](https://arcticdata.io/catalog/portals/ "https://arcticdata.io/catalog/portals/")**portal_identifier**

\### **Data Page**

The data page is the most important component of DataONE portal system. This is where users will display the data packages of their choice. It looks and performs just like the main \[DataONE user interface\]([https://search.dataone.org/data](https://search.dataone.org/data "https://search.dataone.org/data")).

\[data-page\](\~/Documents/Portals-Training/data-page.png)

\### **Metrics Page**

Unlike the first two pages, the metrics page cannot be edited or customized. It is a default feature that provides the following information about the data packages within a portal:

\- The total number of publicly-available metadata records

\- The volume (in bytes) of all publicly-available metadata records and data files

\- The most recent date the datasets were last updated (metadata and data are treated separately)

\- The file types of all publicly-available data

\- The years in which data was collected, regardless of upload date

\[materics-page\](\~/Documents/Portals-Training/metrics-page.png)

Please contact DataONE's support team at support@arcticdata.io about any questions or concerns about the metrics page.

\### **Freeform Pages**

Freeform pages are an optional function provided by DataONE portals. Here, users can add as much supplementary information as needed using markdown. It is highly recommended that users use this feature to create a descriptive **About page** for their portal.

\#### **Example Freeform Pages**

Below are two examples of ways users can take advantage of portal freeform pages to tie unique content together with their data packages. Users can add as many tabs as needed.

\[example-page1\](\~/Documents/Portals-Training/example-page1.png)

\[example-page2\](\~/Documents/Portals-Training/example-page2.png)

The examples shown on this page are from the Toolik Field Station's portal; visit \[this portal\]([https://arcticdata.io/catalog/portals/toolik/](https://arcticdata.io/catalog/portals/toolik/ "https://arcticdata.io/catalog/portals/toolik/")) to explore its contents further.

\## Creating Portals

A step-by-step guide on how to navigate DataONE and create a new portal.

\**For video tutorials on how to create your first portal, please visit \[the Arctic Data Center's\]([https://arcticdata.io/data-portals/#instructional-videos-identifier](https://arcticdata.io/data-portals/#instructional-videos-identifier "https://arcticdata.io/data-portals/#instructional-videos-identifier")) website.**

\### **Getting Started with Portals**

If you are on \[DataONE's primary website\]([https://search.dataone.org/data](https://search.dataone.org/data "https://search.dataone.org/data")), click on your name in the upper right hand corner when you are signed in to DataONE with your ORCID. A dropdown will appear, and you would select &quot;My Portals&quot;.

\[create-portal\](\~/Documents/Portals-Training/create-portal.png)

\[create-portal2\](\~/Documents/Portals-Training/create-portal2.png)

On your profile settings page, select &quot;My Portals&quot;. After the page loads select the grey button &quot;+ New Portal&quot; to add a new portal, you'll automatically be directed to a fresh edit session.

\[edit-session\](\~/Documents/Portals-Training/edit-session.png)

\### **Portal Settings Page**

In a new edit session, the first thing you'll see is the settings page where you'll be able to set the basic elements of your portal:

\- Portal title

\- Unique portal identifier

  - _This identifier will be used to create the portal URL. If the name is available, a label will indicate it's available and if the name is taken already, it will note that the name is already taken. This feature ensures the portals are unique._

\- Portal description

\- Partner organization logos

\[portal-settings\](\~/Documents/Portals-Training/portal-settings.png)

\## **Adding Data to Portals**

\**Please see this tutorial video for a walkthrough on using portal search filters: \[Adding Datasets by Search Query\]([https://arcticdata.io/data-portals/#instructional-videos-identifier](https://arcticdata.io/data-portals/#instructional-videos-identifier "https://arcticdata.io/data-portals/#instructional-videos-identifier"))

\**

Navigate to the &quot;Data&quot; tab. Here you will see a list of all the datasets across DataONE member nodes. In order to populate a portal with the data packages applicable to your needs, narrow the search results using the filters on the left side of the page. When you've selected the data you want, hit the yellow save button in the bottom right.

\[adding-data\](\~/Documents/Portals-Training/adding-data.png)

The portal search feature has the following filters available:

\- **Search** : A general search feature that will return data packages with the entered term in the package metadata

\- **Creator** : We recommend searching by last names for more accurate results.

\- **Project** : Returns data packages with the entered project listed in their metadata

\- **Publish Year:** Use either the sliding scale or enter start and end years manually

\- **Year of Data Coverage** : Searches for data packages with temporal coverages within the selected date range. As with the Publish Year search, use either the sliding scale or enter manually

\- **Location** : This filter will search within the data packages' geographic description field, meaning that you can search by both name or type of location (eg. United States or forest)

\- **Interactive Map:** Use the interactive map on the right side of the page to zoom in or out to a specific region, the search list will filter as you move across the map.

If you need assistance assembling portal data using a complex query, please contact the \[DataONE Support Team\](mailto:support@arcticdata.io).

\## **Data Package Metrics**

As stated in Portal Main Components, the metrics page is a default function provided by DataONE. This page cannot be edited and cannot be viewed while editing. Users do have the option to delete the page if they'd like. To delete the page, select the arrow next to the word &quot;Metrics&quot; in the tab and choose &quot;Delete&quot; from the dropdown list.

To see metric summaries, navigate to your portal in view mode. See Saving and Editing Portals for more information on how to view portals.

\[metrics\](\~/Documents/Portals-Training/metrics.png)

Please contact \[DataONE Support Team\](mailto:support@arcticdata.io) about any questions or concerns about the metrics page.

\## **Creating Unique Freeform Pages**

\**To watch a tutorial on creating a new freeform page see this video: \[Creating a Freeform Text Page\]([https://arcticdata.io/data-portals/#instructional-videos-identifier](https://arcticdata.io/data-portals/#instructional-videos-identifier "https://arcticdata.io/data-portals/#instructional-videos-identifier"))

\**

To add a freeform page to a portal, select the &quot;+&quot; tab next to the data and metric tabs and then choose the freeform option that appears on screen. A freeform page will then populate.

\[freeform-pages\](\~/Documents/Portals-Training/freeform-pages.png)

Easily customize your banner with a unique image, title, and page description. To change the name of the tab, click on the arrow in the &quot;Untitled&quot; tab and select &quot;Rename&quot; from the dropdown list.

\[rename\](\~/Documents/Portals-Training/rename.png)

Below the banner, there is a markdown text box with some examples on how to use the markdown language to customize the text display. As you write, toggle through the Edit and Preview modes in the markdown text box to make sure your information is displaying as intended. Portals are flexible and can accommodate as many additional freeform pages as needed.

Please see these additional resources for help with markdown:

\- \[Markdown reference\]([https://commonmark.org/help/](https://commonmark.org/help/ "https://commonmark.org/help/"))

\- \[Ten minute tutorial\]([https://commonmark.org/help/tutorial/](https://commonmark.org/help/tutorial/ "https://commonmark.org/help/tutorial/"))

\- For a longer example where you can also preview the results, checkout the \[Showdown Live Editor\]([http://demo.showdownjs.com/](http://demo.showdownjs.com/ "http://demo.showdownjs.com/"))

\## **Saving and Editing Portals**

Be sure to save your portal when you complete a page to ensure your progress is retained.

\[save\](\~/Documents/Portals-Training/save.png)

Whenever a portal is saved, a dialogue box will pop up at the top of the page prompting users to view their private portal in view mode. You can choose to ignore this and continue editing.

\[view-portal\](\~/Documents/Portals-Training/view-portal.png)

To delete a page from your portal, select the arrow in the tab and choose &quot;Delete&quot; from the dropdown.

\[delete\](\~/Documents/Portals-Training/delete.png)

Users can view and edit their portal from their &quot;My Portals&quot; tab.

First, click the arrow your name in the top-right corner to drop down your menu options. Then, select &quot;My Portals&quot; from the dropdown underneath your name. See the section on Getting Started with Portals for more details.

\[viewing1\](\~/Documents/Portals-Training/viewing1.png)

\[viewing2\](\~/Documents/Portals-Training/viewing2.png)

Click on the portal title to view it or select the edit button to make changes.

\## **How to Publish Portals**

New portals are automatically set to private and only visible to the portal creator. The portal will remain private until the owner decides to make it public.

To make your portal public, go into the settings of your portal. Under the description, you'll see a new section called &quot;Sharing Options&quot;. You can toggle between your portal being private and your portal being public there.

\[public\](\~/Documents/Portals-Training/public.png)

\## **Sharing Portals**

In order to share a published portal, users can simply direct recipients to their unique identifier. Portal identifiers are embedded into DataONE's portal URL: _https://search.dataone.org/portals/**portal-identifier**_

To view or edit your portal identifier, go into edit mode in your portal. In the settings page, your portal URL will be the first item on the page.

\[url\](\~/Documents/Portals-Training/url.png)

\## **Tutorial Videos**

For video tutorials on how to create your first portal, please visit the \[Arctic Data Center's\]([https://arcticdata.io/data-portals/#instructional-videos-identifier](https://arcticdata.io/data-portals/#instructional-videos-identifier "https://arcticdata.io/data-portals/#instructional-videos-identifier")) video tutorial page.