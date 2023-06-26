---
sidebar_position: 1
slug: /
---

# Getting Started

This library is aimed to be used in a **[Wix Velo](https://www.wix.com/velo/reference/api-overview)** environment. Make sure you're running on a Wix site with [developer mode on](https://support.wix.com/en/article/about-velo-by-wix#to-enable-velo-on-your-site).

## Installation

Follow the instructions [here](https://support.wix.com/en/article/velo-working-with-npm-packages) and install `@wix/velo-bind` from npm on your Wix site.

## Hello World

#### Objective: Select a title on the stage and change its text

> **_NOTE:_**  For this example to work, please add a text component ([see how](https://support.wix.com/en/article/wix-editor-adding-and-editing-text)) to your site and set its id ([see how](https://support.wix.com/en/article/getting-started-with-velo-by-wix#step-3-add-elements-to-the-page)) to `text1`

```javascript
import { bind } from "@wix/velo-bind";

$w.onReady(() => {
    const {text1} = bind($w); //text1 is the id of the text component that you have on the editor's stage
    text1.text = () => `Hello World`;
});

```

Next, we'll use dynamic content as the text