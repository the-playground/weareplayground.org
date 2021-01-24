# [The Nerve » Website](https://nervetheatre.org)
A modern web app, built for The Nerve.

## Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/68deb67e-ad65-4b90-aabd-1597074b379c/deploy-status)](https://app.netlify.com/sites/nerve-web/deploys)

## 📁 Web Project Structure
Take a look at the folder architecture of our site.

### @gatsby
Code specific to Gatsby or a Gatsby API file lives in here. Currently it contains a Typescript version of `gatsby-node`
which is then imported into the root `gatsby-node.js`.

### src
This folder holds most of the code for our site.

**src/assets**\
This folder holds any assets we want to reference in another component in our project.

**src/core**\
This folder holds our tokens, themes, atomic components, and routing components. These are the building blocks of our site.

**src/domains**\
This folder contains all of the "areas of concern", or "domains" within our website. Components, utilities, types, etc. within a domain folder are focused within their specified area (indicated by a top level folder name).

**src/pages**\
This folder is required by Gatsby and is where the root of any "single" pages live. Files in this folder typically query Sanity for their data using GraphQL.

**src/shared**\
Any molecule-type component, constant, context, config, hook, utility, or type that could or should be shared across the entire codebase lives here.

### static
This folder holds any assets that are part of our build process but do not need to be consumed by any specific component. Examples include things like font files or the site favicon.


### Gatsby API Files
Inside its configuration files, Gatsby provides a rich set of lifecycle APIs to hook into its bootstrap, build, and client runtime operations. They allow sourcing data, creating pages, and customizing generated HTML pages.

**gatsby-browser.js**\
This file contains the layout and context components that wrap our site. The Gatsby Browser API gives us many options for interacting with the client-side of Gatsby.
[Learn More](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)

**gatsby-config.js**\
This file defines our site’s metadata, plugins, and other general configurations.
[Learn More](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)

**gatsby-ssr.js**\
This file lets us alter the contents of static HTML files as they are being Server-Side Rendered (SSR) by Gatsby and Node.js.
[Learn More](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)

**gatsby-node.js**\
This file is used to create all of our dynamic pages and can be used to add nodes in GraphQL, or respond to events during the build lifecycle.
[Learn More](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)

*NOTE: At present, this file is just a proxy that loads up TS Node as well as required Typescript dependencies and then runs the Typescript file located at `@gatsby/node-api`. This lets use use ES6 import syntax among other things. Eventually, once `"type": "module"` is stable in Node 14+ and Gatsby supports it, we will probably switch over to this setup.*


### netlify.toml
The file holds the configurations for building and deploying this site on Netlify. Because this package is part of a monorepo, `netlify.toml` also contains a command that handles ignoring or "cancelling" a build when nothing within this package has changed since the previous commit.


## 🧰 Tooling
🏗️ Built With: [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/) + [Gatsby](https://www.gatsbyjs.org/) + [Graphql](https://graphql.org/) + [Styled Components](https://www.styled-components.com/)\
☁️ Hosted on: [Netlify](https://www.netlify.com//)\
💅 Design: [Custom-built design system with Figma](https://www.figma.com/)