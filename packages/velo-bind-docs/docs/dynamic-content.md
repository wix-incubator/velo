---
sidebar_position: 2
---
# Dynamic Content

#### Change an element text based on a dynamic content
```javascript
import { bind, makeAutoObservable } from "velo-bind";

$w.onReady(() => {
    const state = makeAutoObservable({
        counter: 0
    }); //create a dynamic state object with a property counter that equals to 0
    
    setInterval(() => state.counter++, 500); //increase the counter every 500ms
    
    const {text1} = bind($w);
    text1.text = () => `Counter is: ${state.counter}`;
});

```
