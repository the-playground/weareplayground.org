# Fonts

## Overview

The Nerve implements a custom 2-stage font-loading technique to prevent FLOUT and FOIT while still making performance a top priority. The articles below were heavily referenced during the development process but was customized to fit our needs:
[Developing a Robust Font Loading Strategy for CSS-Tricks-zachleat.com](https://www.zachleat.com/web/css-tricks-web-fonts/)
[Web Font Optimization -- Google](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)

We leveraged [Wakamaifondue](https://wakamaifondue.com/) to give us visibility into our fonts. This gave us the ability to select the exact features & unicode characters we needed for each font, drastically reducing file size.

## Assistant
Assistant is our heading font from [Google Fonts](https://fonts.google.com/specimen/Assistant). It is a stimulating, passionate, and on-trend geometric sans with large counters.

This font is loaded in 2 stages. The first stages is an incredibly stripped down version of the font devoid of any features or unicodes we've deemed unimportant.

The stage 1 files were generated with the below command for `woff` and `woff2` using [fonttools](https://github.com/fonttools/fonttools):
```
pyftsubset "Assistant-ExtraBold.ttf" --output-file="Assistant-ExtraBold--stage-1.woff2" --flavor=woff2 --layout-features=kern --no-hinting --desubroutinize --unicodes=U+0000-00A0,U+00A9,U+00B7,U+00BB,U+2010-201E
```

The resulting fonts file is around 7kb for `woff2`!!

Next, we ran the following command to generate stage2 fonts in `woff` and `woff2`. We also chose custom unicodes for this based on how we know the font will be implemented:

```
pyftsubset "Assistant-ExtraBold.ttf" --output-file="Assistant-ExtraBold--stage-1.woff2" --flavor=woff2 --flavor=woff2 --layout-features="*" --unicodes=U+0000-00A0,U+00A9,U+00B7,U+00BB,U+2010-201E
```

## Greycliff

Greycliff is our workhorse font purchased from [Conarry Fagen Inc](https://connary.com/greycliff.html). It is a rugged, hearty, and warm sans that will carry the bulk of the content load on the site.

This font is loaded in 2 stages. The first stages is an incredibly stripped down version of the font devoid of any features or unicodes we've deemed unimportant.

The stage 1 files were generated with the below command for `woff` and `woff2` using [fonttools](https://github.com/fonttools/fonttools):
```
pyftsubset "GreycliffCF-${weight}.woff" --output-file="GreycliffCF-${weight}-kern--stage-1.woff2" --flavor=woff2 --layout-features=kern --no-hinting --desubroutinize --unicodes=U+0000-00A1,U+00A9,U+00AB,U+00AE,U+00AF,U+00B4,U+U00B7,U+00BB,U+0237,U+02C6-0326,U2013-2020,U+2022,U+2026,U+2039-203A,U+2122,U+2212
```

The resulting fonts files were all around 6-8kb for `woff2`!! Not bad at all!!

We are loading the following weights in stage1 right now:

- Greycliff Regular
- Greycliff Bold

Next, we ran the following command to generate stage2 fonts in `woff` and `woff2`. We also chose custom unicodes for this based on how we know the font will be implemented:
```
pyftsubset "GreycliffCF-${weight}.woff" --output-file="GreycliffCF-${weight}-all--stage2.woff2" --flavor=woff2 --layout-features="*" --unicodes=U+0000-00FFF,U+02C6-03A9,U+2013-2020,U+2022,U+2025,U+2039-215E,U+2212,U+221E,U+2248-2265
```

## Loading
Each stage-1 font is preloaded via `gatsby-ssr.js` as per the referenced article above. Then JS swaps in stage 2 fonts once they load. I'm not going to go into the technical details here since they pretty much the same as the article just with our fonts used instead!