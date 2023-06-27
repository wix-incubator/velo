export const setHandlers: { [prop: string]: Function } = {
  isVisible: <T extends $w.HiddenMixin>(element: T, visible: boolean) => {
    if (visible === element.isVisible) {
      return;
    }

    if (visible) {
      element.show();
    } else {
      element.hide();
    }
  },
  collapsed: <T extends $w.CollapsedMixin>(element: T, collapsed: boolean) => {
    if (collapsed === element.collapsed) {
      return;
    }

    if (collapsed) {
      element.collapse();
    } else {
      element.expand();
    }
  },
};
