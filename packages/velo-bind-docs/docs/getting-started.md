---
sidebar_position: 1
---

# Getting Started

This library is aimed to be used in a **[Wix Velo](https://www.wix.com/velo/reference/api-overview)** environment. Make sure you're running on a Wix site with [developer mode on](https://support.wix.com/en/article/about-velo-by-wix#to-enable-velo-on-your-site).

## Installation

Follow the instructions [here](https://support.wix.com/en/article/velo-working-with-npm-packages) to install `@wix/velo-bind` from npm on your Wix site.

Once you have the `@wix/velo-bind` package installed on your site, import the desired API from the package on any code file (page, public or backend)

### Basic usage

#### Select a title on the stage and change its text
```javascript
import { bind } from "velo-bind";

$w.onReady(() => {
    const {text1} = bind($w);
    text1.text = () => `Hello World`;
});

```

Next, we'll use dynamic content as the text