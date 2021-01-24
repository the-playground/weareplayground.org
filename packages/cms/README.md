# The Nerve » CMS
A headless CMS, built for The Nerve.

## Build Status
[![Netlify CMS Status](https://api.netlify.com/api/v1/badges/95e88058-e42e-4c21-b501-29d7104f4b88/deploy-status)](https://app.netlify.com/sites/nerve-cms/deploys)

## 📁 CMS Project Structure

### src
This folder holds most of the code for our cms.

**src/lib**\
This folder contains shared utility functions.

**src/schemas**\
This folder contains all of our `object` and `schema` definitions, as well the `schema.ts` file which handles creating the final instances of each schema in Sanity.\
[Learn More](https://www.sanity.io/docs/schema-types)

**src/structure**\
This folder contains all of our Structure Builder customizations to Sanity.\
[Learn More](https://www.sanity.io/docs/structure-builder-reference)

**src/constants.ts**\
Constant values shared across the cms.

**src/generateDocuments.ts**\
A central place that handles creating concrete instances of schemas and exposing the schema object, Name, and ID of each schema externally so they can be easily consumed where required.

**src/types.d.ts**\
Typescript types shared across the cms.

### static
This folder holds any assets that are part of our build process but do not need to be consumed by any specific component. Examples include things like font files or the cms favicon.

### netlify.toml
The file holds the configurations for building and deploying Sanity Studio on Netlify. Because this package is part of a monorepo, `netlify.toml` also contains a command that handles ignoring or "cancelling" a build when nothing within this package has changed since the previous commit.

## 🧰 Tooling
🏗️ Built With: [Sanity](https://sanity.io/) + [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/)
⚫ Icons: [Feather Icons](https://feathericons.com/)
☁️ Hosted on: [Netlify](https://www.netlify.com//)\