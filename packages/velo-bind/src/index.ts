import mobx, { autorun, makeAutoObservable } from "mobx";
import { getSettableProperties } from "./utils";

const resolveValueIfNeeded = (element: any, property: string, value: any) => {
  let resolvedVal = value;
  if (getSettableProperties(element).includes(property)) {
    resolvedVal = value();
  }
  return resolvedVal;
};

const bindRepeater = (id: WixElementSelector, itemFunc: Function) => {
  const repeater = $w(id) as $w.Repeater;
  repeater.onItemReady(($item, dataItem, itemIndex) =>
    itemFunc(bind($item as typeof $w), dataItem, itemIndex)
  );
};

const bind = (selector = self.$w) =>
  new Proxy<Bindings>({} as any, {
    get(elements, id) {
      return new Proxy(elements, {
        get(_, prop) {
          const element = selector(
            `#${String(id)}` as WixElementSelector
          ) as any;
          return element[prop];
        },
        set(_, _property, value) {
          const idWithHashtag = `#${String(id)}` as WixElementSelector;
          const property = String(_property);

          if (property === "item") {
            bindRepeater(idWithHashtag, value);
          }

          autorun(() => {
            if (typeof setHandlers[property] === "function") {
              setHandlers[property]($w(idWithHashtag), value());
              return;
            }
            const element = selector(idWithHashtag) as any;
            element[property] = resolveValueIfNeeded(
              idWithHashtag,
              String(property),
              value
            );
          });

          return true;
        },
      });
    },
  });

export { bind, autorun, makeAutoObservable, mobx as _mobx };
