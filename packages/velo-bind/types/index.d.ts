/// <reference path="/elementsMap.d.ts" />
/// <reference path="/types/pages/$w.d.ts" />
/// <reference path="../wix-code-types/dist/types/page/index.d.ts" />

declare module "@wix/velo-bind" {
  type PageElementsMapWithoutHash = {
    [K in keyof PageElementsMap extends `#${infer J}`
      ? J
      : never]: PageElementsMap[K extends `${infer J}` ? `#${J}` : K];
  };

  type Nicknames = keyof PageElementsMapWithoutHash;
  type PropertiesOf<T extends Nicknames> = keyof PageElementsMapWithoutHash[T];
  type AnyFunc = (...args: any) => any;

  type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
    ? 1
    : 2) extends <T>() => T extends Y ? 1 : 2
    ? A
    : B;

  type ReadonlyKeys<T> = {
    [P in keyof T]-?: IfEquals<
      { [Q in P]: T[P] },
      { -readonly [Q in P]: T[P] },
      never,
      P
    >;
  }[keyof T];

  export type Bindings = {
    [Nickname in Nicknames]: {
      [Property in PropertiesOf<Nickname>]: PageElementsMapWithoutHash[Nickname][Property] extends AnyFunc
        ? PageElementsMapWithoutHash[Nickname][Property]
        : Property extends ReadonlyKeys<PageElementsMapWithoutHash[Nickname]>
        ? PageElementsMapWithoutHash[Nickname][Property]
        : () => PageElementsMapWithoutHash[Nickname][Property];
    };
  };

  export function bind(selector: typeof $w): Bindings;
  export { makeAutoObservable, autorun } from "mobx";
}
