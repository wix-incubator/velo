---
sidebar_position: 3
---

# Customized Properties

Some commonly used properties that are currently declared as readonly may be bound to a piece of state as well.
Take the [HiddenMixin](https://www.wix.com/velo/reference/$w/hiddenmixin) for example, which is available on almost every editor element; you may control element visiblity via the `show/hide` api, while `hidden/isVisible` are readonly props that cannot be set.
Bound elements kinda go around this limitation so the following will work:

```javascript
import { makeAutoObservable, bind } from "@wix/velo-bind";

const state = makeAutoObservable({
  buttonVisibility: true,
});
const { button } = bind($w);
button.isVisible = () => buttonVisibility;
// any change to buttonVisibility value will change the button visibility
```

These properties currently include:

- [hidden](https://www.wix.com/velo/reference/$w/hiddenmixin/hidden)
- [isVisible](https://www.wix.com/velo/reference/$w/hiddenmixin/isvisible)
- [collapsed](https://www.wix.com/velo/reference/$w/collapsedmixin/collapsed)
