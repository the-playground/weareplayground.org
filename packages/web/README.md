<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
## [The Nerve](https://nervetheatre.org)
Website [![Netlify Status](https://api.netlify.com/api/v1/badges/68deb67e-ad65-4b90-aabd-1597074b379c/deploy-status)](https://app.netlify.com/sites/nerve-web/deploys)

## 📁 Web Project Structure

### /@gatsby
Code specific to Gatsby or a Gatsby API file lives in here.

### /src
**src/assets**\
This folder holds any static assets we want to reference in our project.

**src/core**\
This file holds our tokens, themes, atomic components, and routing components. These are the building blocks of our site.

**src/domains**\
This folder contains all of the "areas of concern", or "domains" within our website. Components, utilities, types, etc. within a domain folder are focused within their specified area (indicated by a top level folder name).

**src/pages**\
This folder is required by Gatsby and is where the root of any "single" pages live. Files in this folder typically query Sanity for their data using GraphQL.

**src/shared**\
Any molecule-type component, constant, context, config, hook, utility, or type that could or should be shared across the entire codebase lives here.

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


## 🏗️ Built With

Frontend » [React](https://reactjs.org/) + [Gatsby](https://www.gatsbyjs.org/) + [Graphql](https://graphql.org/)\
Design Framework » [Custom-built design system](https://www.figma.com/) w/ [Styled Components](https://www.styled-components.com/)\
Hosting » [Netlify](https://www.netlify.com//)
---
Coming Soon: On-site Ticket Sales » [Snipcart](https://snipcart.com/)\
Coming Soon: On-site Payments (for classes & donations) » [Stripe](https://stripe.com/)\
Coming Soon: Email Sending  » [nodemailer](https://nodemailer.com/) + [Postmark](https://postmarkapp.com/)\
Coming Soon: Email Templating » [MJML Framework](https://mjml.io/)\