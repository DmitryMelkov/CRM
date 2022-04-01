export let createEl = (
  tagName = "",
  elClass = "",
  elId = "",
  textContent = "",
  type = "",
  placeholder = "",
  svg = ""
) => {
  const el = document.createElement(`${tagName}`);
  if (elClass !== "") {
    const arrayClass = elClass.split(",");
    for (let i = 0; i < arrayClass.length; i++) {
      el.classList.add(arrayClass[i].trim());
    }
  }
  if (elId !== "") {
    el.id = `${elId}`;
  }
  if (textContent !== "") {
    el.textContent = `${textContent}`;
  }
  if (type !== "") {
    el.type = `${type}`;
  }
  if (placeholder !== "") {
    el.placeholder = `${placeholder}`;
  }
  if (svg !== "") {
    el.svg = `${svg}`;
  }
  return el;
};
