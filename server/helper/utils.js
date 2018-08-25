exports.pick = (propsToPick, obj) =>
  Object.entries(obj).reduce(
    (target, [key, val]) =>
      propsToPick.includes(key)
        ? {
            ...target,
            [key]: val
          }
        : target,
    {}
  );
