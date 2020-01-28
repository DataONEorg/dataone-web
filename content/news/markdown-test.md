---
title: Markdown test
date: 2020-01-15T15:53:34.000+00:00
description: Temp
draft: true
layout: markdown
---



MARKDOWN TEST
=============
Snippets
---

Here are some logos: 

{{< logo >}}

{{< logo type="globe-only">}}

{{< logo type ="homepage">}}

Here is a button:

{{< button text="Button text" type="primary" external_website="true" link="https://www.dataone.org" website_link="" class="">}}

{{< button text="Contact us" type="secondary" link="ContactUsLink">}}

Here is a pill

{{< pill text="Text here" type="primary" >}}

#Just a tag
Also a # tag.
# Alternate H1
## Alternate H2
### H3
###### H6

* This is a list element
+ This is also a list element
- This is also a list element
- This is a sublist element
+ Also a sublist element
    + Sublist level 2
    1. Numbered sublist
    2. Next item
       3. Next indent level

1. Numbered sublist
2. Next item
    1. Next indent level
       * Sublist non numbered
3. Back

Horizontal Lines:
------------------------------------
***********************************
***
---

> Block Quote

*Italics*

_Italics_

__Bold__

___Bold+Italics___

this_is_not_emphasis

~~Strikethough~~

Content with a -- (dash) and a --- (long dash).

[link](http://link/path/to/target)

[link](http://link/path/to/target "TITLE ON LINK")

[Shared Links with footnotes][target 1]

[Second shared link][target 1]

[target 1]

[target 1]: http://footnote.com

Sample inline code `a++` can be specified here.

![Alt Text](/path/to/image "Optional Tooltip")

HTML Escaped characters:
  
Copyright: &copy;

Registered: &reg;

Trademark: &trade;

Less Than: &lt;

Greater Than: &gt;

Ampresand: &gt;

Smiley: &#x1F604;

Embedded HTML: x<sup<>2</sup<>
  
  
Floating image via HTML: <img< src="/image/logo.png"< style="float: right; padding: 0 0 0 10px"<> Follow up text after the image. This honors the floats and wraps around the image, automatically going into the next line.


Table:
 
   Name | Job
--------|------
   Alex | Web Developer
    Bob | Sys Admin
   Gabby| Technical Writer
 
Alternate Table:
 
|  Name | Mantra |
|  ---  |   ---  |
| Alex  | There must be a better way. |
| Bob   | Play it safe. |
| Gabby | Try everything, but do what you like. |
 
Acme Website task list
- [x] Get the home page up
- [x] Update Privacy Policy and Terms of Use
- [ ] Add the about page
- [ ] Start the blog
- [ ] Enable contact us
 
```js
var x= 10;
x++;
console.log(x);
```


## Direct Emojis
Smile please :smile:

I :heart: Hugo

Wink :wink:


## Fractions

1/2

100/999

Not a Number/5

A link to [Fractions](#fractions)


## Definition Lists

Alex
: Hippy Web Developer
: Technofile

Bob
: Classic SysAdmin
: Conservative

Gabby
: Cool Content Master
: Cautious
