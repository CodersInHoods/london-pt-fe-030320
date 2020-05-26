const Instigate = {
  createElement: (tag, properties = {}) => {
    const element = document.createElement(tag);

    if (properties.className) element.className = properties.className;

    if (properties.innerText) element.innerText = properties.innerText;

    if (properties.onClick) element.onclick = properties.onClick;

    if (properties.children) element.append(...properties.children);

    if (properties.onChange) element.oninput = properties.onChange;

    return element;
  },
};
