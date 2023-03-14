export const getSettableProperties = (element: any) =>
  Object.keys(element).filter((member) => {
    const descriptor = Object.getOwnPropertyDescriptor(element, member);
    if (!descriptor) {
      return false;
    }

    return (
      typeof element[member] !== "function" &&
      (Boolean(descriptor.set) || descriptor.writable)
    );
  });
