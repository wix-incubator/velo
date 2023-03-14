import { Button, MouseEventHandler } from "../fixtures/button";

export const $wButton: Button = {
  get collapsed() {
    return false;
  },
  get hidden() {
    return false;
  },
  get isVisible() {
    return false;
  },
  get iconCollapsed() {
    return false;
  },
  get style() {
    return {
      backgroundColor: "blue",
      color: "white",
      borderColor: "red",
      borderRadius: "15px",
      borderWidth: "15px",
      foregroundColor: "green",
    };
  },
  label: "Click me",
  icon: "https://mywebsite.com/myicon.png",
  link: "https://mywebsite.com/mypage",
  onMouseIn: (handler: MouseEventHandler) => $wButton,
  onMouseOut: (handler: MouseEventHandler) => $wButton,
  show: () => Promise.resolve(),
  hide: () => Promise.resolve(),
  collapse: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  expand: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  onClick: function (handler: MouseEventHandler): Element {
    throw new Error("Function not implemented.");
  },
  onDblClick: function (handler: MouseEventHandler): Element {
    throw new Error("Function not implemented.");
  },
  collapseIcon: async () => {
    throw new Error("Function not implemented.");
  },
  expandIcon: async () => {
    throw new Error("Function not implemented.");
  },
};
