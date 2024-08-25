//1. wybieramy galerię z DOM
const gallery = document.querySelector(".gallery");

//2. Budujemy tempatkę do tworzenia elementów DOM z atrybutami
const element = (tag, props) =>
  Object.assign(document.createElement(tag), props);

//3. Tworzymy callback, który tworzy nam pojedynczy element listy
const createGalEl = ({ preview, original, description }) => {
  const galEl = element("li", { className: "gallery-item" });
  const link = element("a", { className: "gallery-link", href: original });
  const img = element("img", {
    className: "gallery-image",
    src: preview,
    alt: description,
  });
  img.dataset.source = original;

  link.append(img);
  galEl.append(link);

  return galEl;
};

//4. Tworzymy funkcję, która robi nam listę elementów
const renderElements = (images, rootList) => {
  const fragment = document.createDocumentFragment();
  fragment.append(...images.map(createGalEl));

  rootList.append(fragment);
};

//5. Renderujemy elementy do html
renderElements(images, gallery);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery-image")) return;
  console.log(event.target);
});
