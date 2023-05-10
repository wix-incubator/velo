# Velo Bind
[Documentation](https://wix-incubator.github.io/velo)


`velo-bind` uses [mobx](https://www.npmjs.com/package/mobx) to bring a reactive programming to Velo and bind wix elements.

## Installation

This module is aimed to be used in Wix Velo environment.

1. Open a Wix Site
2. Enable Dev Mode
3. Add `velo-bind` npm module

Follow the [installation instuctions](https://support.wix.com/en/article/velo-working-with-npm-packages) to learn more.

## Examples

### Counter

Given a site with a text element with the ID `#counter`, a `#decrement` and `#increment` buttons:

```js
import { makeAutoObservable, bind } from "@wix/velo-bind";

const state = makeAutoObservable({
  count: 0,
});

const { counter, increment, decrement } = bind($w);
counter.text = () => `${state.count}`;
increment.onClick(() => model.count++);
decrement.onClick(() => model.count--);
```

### Working with repeaters
A [Repeater](https://www.wix.com/velo/reference/$w/repeater) is a special Wix Editor Element which is responsible for generating a list of elements from either a data-set (dynamic) or an array set by Velo code).

```js
import { makeAutoObservable, bind } from "@wix/velo-bind";

const state = makeAutoObservable({
  list: [{ value: "myValue" }],
});
const { repeater } = bind($w);
repeater.item = ($item, data, index) => {
  const { label } = bind($item);
  label.text = () => list[index].value;
};
```
