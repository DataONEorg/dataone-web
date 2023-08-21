| **Main**:|[![](https://travis-ci.com/DataONEorg/dataone-web.svg?branch=master)](https://travis-ci.com/github/DataONEorg/dataone-web/)|
|---|---|
| **Preview**:|[![](https://travis-ci.com/DataONEorg/dataone-web.svg?branch=preview)](https://travis-ci.com/github/DataONEorg/dataone-web/)|

# DataONE Static Website

All files used to generate the DataONE static website.

## Developer guidelines

### I. Orientation

The website is generated using the static site generator, [Hugo](https://gohugo.io/documentation/), and the [Block, Element, Modifier (BEM) approach](https://en.bem.info/methodology/quick-start/) to development. We use the git-backed CMS [Forestry.io](https://forestry.io/docs/welcome/).

#### Hugo

Hugo uses [a specific directory stucture](https://gohugo.io/getting-started/directory-structure/) to organize files. Within this structure, certain files could be stored in either the theme directory (`themes/dataone`) or the project's root directory (`.`) and the site would look exactly the same. For instance,  a new markdown content file could be placed in either `./content/new-markdown-file.md` or `./themes/dataone/content/new-markdown-file.md` and the resulting html would be identical. For consistency, we keep **content** in the root directory and **layout and style** information in the theme directory. In other words,

- use the Hugo directories `content` and `data` in the project root directory.
- use the Hugo directories `archetypes`, `assets`, and `layouts` in the `themes/dataone` directory.
- When static assets are theme-specific (e.g. fonts), include them in the `themes/dataone/static` directory. When they are content-specific (e.g. an image used in a specific blog post), store them in the root `./static` directory.

##### Deploying this Hugo site locally

Run

```bash
  hugo server -D
```

and then visit `localhost:1313`, or whatever `baseURL` is configured in `/config/development/config.yaml`

#### BEM with Hugo

- Each block has its own separate [Hugo partial template](https://gohugo.io/templates/partials/) and `.scss` style file. Simple blocks (e.g. buttons) may also have an associated [Hugo shortcode template](https://gohugo.io/templates/shortcode-templates/) (more on that in the "How to create a new block" section).

- Within `themes/dataone/partials/blocks/`, file structure organization follows the [BEM flat approach](https://en.bem.info/methodology/filestructure/#flat).

  - The file `theme/dataone/assets/styles.scss` imports all `scss` files that are contained within the subdirectories of `themes/dataone/layouts/partials/blocks` (or whichever path `blockDir` is set to in `config.yaml`). This allows us to store all files required for each block in the same directory (e.g. `blockname/blockname.html` and `blockname/blockname.scss`).

#### Forestry.io

Each block has associated `.yaml` documentation stored in the `.forestry/front_matter/templates` directory. The forestry front matter documentation is basically a schema for each block. It describes each variable used in a block.

### II. Block pages

A [block](https://en.bem.info/methodology/key-concepts/#block) is a stand-alone component in the website. Blocks may be simple items, like buttons, or more complex layout components, like a page section. Content editors have the option of creating a page layout using blocks. Pages using the "block" layout store content in the front-matter section of a mark down file, for example:

```yml
---
title: Block Test
description: Page description
layout: blocks
page_sections:
  - block: Name of block
    template: template-name
    variable1: Some content
    variable2: Some more content
  - block: Name of the second block
    template: template-name
    variable1: Some content
    variable2: Some more content
---
```

- The `page_sections: ...` variable contains a list of all the blocks that the page should render, in the order they should be rendered.
- The `layout: blocks` variable tells Hugo to use the `blocks.html` template to render the page content. The `blocks.html` template just loops through and renders all the blocks in `page_section:`

*blocks.html:*

```go=
{{ $page := .Page }}
{{- define "main" -}}
  {{- range .Params.page_sections -}}
    {{ partial (printf "blocks/%s/%s.html" .template .template) (dict "Section" . "Page" $page ) }}
  {{- end -}}
{{- end -}}
```

- Each block includes a `template: <string>` variable. This variable specifies the partial template Hugo should use to render the block.

### III. Creating a new Block

Blocks require three components: 1) a template, 2) style information, 3) documentation. Optionally, 4) a shortcode file may be created to allow content editors to use the template from within a markdown block.

#### 1. Template

- The partial `.html` template file should be stored in `themes/dataone/partials/blocks/newBlockName/newBlockName.html`.

- Block parameters are accessed using `.Block.parameterName` and Page parameters are accessed using `Page.parameterName`. (To understand why see `themes/dataone/layouts/_default/blocks.html`)

- Blocks, elements, and modifiers should have classes that follow BEM naming conventions:

  - Block: `.block`

  - Element: `.block__element`

  - Block with modifier: `.block--primary`

  -

#### 2. Style information

- The associated `.scss` file is stored in the same directory as the template file with the same name as the block: `themes/dataone/partials/blocks/newBlockName/newBlockName.scss`

- This style information is automatically `@import`ed into the main style file.

- As per `BEM` methodology, block styles shold not be dependent on other elements on a page. Styles that are common between blocks can be defined in the `themes/dataone/assets/scss/definitions.scss` file as a `@mixin` and `@include`-ed where required.

#### 3. Documentation

- The associated `.yaml` file is stored in `.forestry/front_matter/templates`.

- Documentation makes the block available in Forestry and also serves as a reference for developers.

- This documentation can be created by editing the yaml files by hand following [the guidelines here](https://forestry.io/docs/settings/config-files/#front-matter-templates), or by [using forestry.io](https://forestry.io/docs/settings/front-matter-templates/) with developer permissions.

- *Optional:* The file `.forestry/front_matter/templates/blocks.yml` is the overall template that allows content editors to create a page out of blocks. To allow an editor to use the new block in this context, add it to the `template_types:` variable in this `blocks.yml` file.

  - This step is required if the block functions as a page section. Simpler blocks, like buttons, probably shouldn't be added here. They may, however, be nested in other blocks (i.e. using the [`include` field type](https://forestry.io/docs/settings/fields/include-template/) in the documentation of the parent block)

#### 4. Shortcode (optional)

If the block is a simple one that requires few variables, and if content editors might want to use it within a markdown block, the partial template can be made available by creating a simple shortcode file:

- The associated `.html` shortcode file is stored in `themes/dataone/partials/shortcodes/newBlockName.html`.

- The shortcode template only needs a few line of a code: It should render the partial template created in step 1, and pass on the shortcode parameters (if there are any), as well as the page parameters using "Block" and "Page", respectively:

  ```go
  {{ $params :=  (dict "Page" $.Page) }}
  {{ if .Params }}
    {{ $params = merge $params (dict "Block" .Params) }}
  {{ end }}
  {{ partial "blocks/newBlockName/newBlockName" $params }}
  ```
  *Note that the `.html` extension is excluded in the path to the partial template*

You may also create a [snippet](https://forestry.io/docs/settings/snippets/) for the shortcode, which is basically an example of how the shortcode should be formatted. Forestry makes these snippets available to content editors to insert into the markdown editor. Snippets are stored in the `.forestry/snippets/` directory.

## The Network Page

**Node Organization Based on `operationalStatus`**

Member nodes on the [Network page](https://www.dataone.org/network/#list-of-member-repositories) are categorized based on their `operationalStatus` property in the DataONE registry. The `operationalStatus` property is a string that can take on one of the following values:

- **operational**: Corresponds to "Current" on the website.
- **contributing**: Nodes that actively contribute or have contributed to the system.
- **replicator**: Known as "Replication" on the website.
- **upcoming**: Nodes that will be activated soon.

We also recognize a status called **deprecated**. However, there are multiple reasons a node might be marked as deprecated. For the moment, these nodes are not included on the /network/ page, though we have discussed introducing more specific `operationalStatus` values to depict different circumstances under which a node might be deprecated. See discussion in [issue #176](https://github.com/DataONEorg/dataone-web/issues/176). To make changes to how nodes are categorized, edit the [`dataone-web`](https://github.com/DataONEorg/dataone-web/blob/main/themes/dataone/layouts/partials/blocks/member-nodes/member-nodes.js) file.

## Misc. Resources

- Some static images use modified components from [Vectorpocket / Freepik](https://www.freepik.com)

## Inline SVG tips & tricks
We use inline SVG for some imagery on the website, like the header image on the hosted repository page.
- For complicated SVGs, exporting from Adobe XD results in nicer SVG code that renders better inline than Sketch or Illustrator.
- Run SVGs through [SVG-OMG](https://jakearchibald.github.io/svgomg/) to clean up and shrink SVG code.
- Adding a `<base href="...">` tag to the head of a page might break SVGs in Safari if any part of the svg uses `url()`, e.g. `fill="url(#linearGradient`)`.
- In some cases (e.g. for our logo gradient), it's better to include definitions at the start of the html body, outside of the svg that uses it. If needed, add these definitions to `layouts/partials/svg-defs.html`.

## Continuous Integration

The site is built using Github Actions, and deployed via rsync using an ssh key that is only accessible by the github build system.
The action workflow uses [peaceiris/actions-hugo](https://github.com/peaceiris/actions-hugo) to build the hugo site, and then the 
DataONE [rsync-deploy](https://github.com/DataONEorg/rsync-deploy) action to deploy it over rsync to our host infrastructure. This
requires that the target host is set up to accept the ssh key as an authorized key.
To configure it, I generated an ssh key which is dedicated for just this application,
and is not shared or commited to git.  

```sh
$ ssh-keygen -t rsa -b 4096 -C 'GHA deploy key' -f ./deploy_rsa
$ ssh-copy-id -i deploy_rsa.pub user@deployhost
```

Set up Secrets variables pointing at the deploy location, in the GitHub repository settings for $HOST, $PORT, $USER, $GROUP, and $KEY. See https://github.com/DataONEorg/rsync-deploy for more details on these secret variables, and how to configure the GHA workflow to deploy files to various target directories. In this case, the workflow is configured to deploy the `preview` branch to a directory served by https://preview.dataone.org, and the `main` branch to https://dataone.org.

# Credits
- Photo of the Santa Barbara, California, metropolitan area (santa_barbara__NASA.jpg): NASA
