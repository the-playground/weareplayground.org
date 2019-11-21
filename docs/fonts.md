# Fonts

## Overview

Playground implements a custom 2-stage font-loading technique to prevent FLOUT and FOIT while still making performance a top priority. The article below was heavily referenced during the development process but was customized to fit our needs:
[Developing a Robust Font Loading Strategy for CSS-Tricks-zachleat.com](https://www.zachleat.com/web/css-tricks-web-fonts/)

We leveraged [Wakamaifondue](https://wakamaifondue.com/) to give us visibility into our fonts. This gave us the ability to select the exact features & unicode characters we needed for each font, drastically reducing file size.

## Veneer
Veneer is our grunge heading purchased from [Yellow Design Studios](https://www.yellowdesignstudio.com/fonts/veneer). It adds some dirtiness to our overall aesthetic.

The main issue with this font was that the file size was BIG. 150kb by default to be exact 😱. To be honest, this will have limited use and we really don't need most of the unicode characters in this set. To that end, I decided to just preload this in its final form with the limited character set as part of Stage 1.

 The stage 1 files were generated with the below command for `woff` and `woff2` using [fonttools](https://github.com/fonttools/fonttools):
```
pyftsubset "Veneer.woff" --output-file="Veneer-hint-all.woff2" --flavor=woff2 --layout-features="*" --unicodes=U+0000-007E,U+00B4,U+00B7,U+2010-2026,U+2039,U+203A,U+FB01,U+FB02,U+00F8`
```

The resulting woff2 was 43kb! Still much bigger than I really wanted, BUT I think that's going to be acceptable to preload, especially since all of our other fonts are so tiny at stage 1.
There is no stage 2 for this font. We have no need to load all unicode characters.

## Greycliff

Greycliff is our workhorse font purchased from [Conarry Fagen Inc](https://connary.com/greycliff.html).

This font is loaded in 2 stages. The first stages is an incredibly stripped down version of the font devoid of any features or unicodes we've deemed unimportant. Here's the command we ran in terminal to generate stage 1 `woff` and `woff2`:

```
pyftsubset "GreycliffCF-${weight}.woff" --output-file="GreycliffCF-${weight}-kern--stage-1.woff2" --flavor=woff2 --layout-features=kern --no-hinting --desubroutinize --unicodes=U+0000-00A1,U+00A9,U+00AB,U+00AE,U+00AF,U+00B4,U+U00B7,U+00BB,U+0237,U+02C6-0326,U2013-2020,U+2022,U+2026,U+2039-203A,U+2122,U+2212
```

The resulting fonts files were all around 6-8kb for `woff2`!! Not bad at all!!

We are loading the following weights in stage1 right now:

- Greycliff Regular
- Greycliff DemiBold
- Greycliff Bold
- Greycliff Heavy

*Note that we will NOT being loading 4 font weights for Greycliff. We are still working on making final weight decisions.*

Next, we ran the following command to generate stage2 fonts in `woff` and `woff2`. We also chose custom unicodes for this based on how we know the font will be implemented:
```
pyftsubset "GreycliffCF-${weight}.woff" --output-file="GreycliffCF-${weight}-all--stage2.woff2" --flavor=woff2 --layout-features="*" --unicodes=U+0000-00FFF,U+02C6-03A9,U+2013-2020,U+2022,U+2025,U+2039-215E,U+2212,U+221E,U+2248-2265
```

## Loading
Each stage-1 font is preloaded via `gatsby-ssr.js` as per the referenced article above. Then JS swaps in stage 2 fonts once they load. I'm not going to go into the technical details here since they pretty much the same as the article just with our fonts used instead!