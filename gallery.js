//1. wybieramy galerię z DOM
const gallery = document.querySelector("ul.gallery");

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
    width: 360,
    height: 200,
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

//6. Nadajemy elementom listener który wywłuje efekt lightbox
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery-image")) return;
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
  );
  instance.show();

  //7. Jeśli lightbox jest włączony oraz wciśniemy escape, lightbox się wyłącza
  const visible = basicLightbox.visible();
  document.addEventListener("keydown", (e) => {
    if (visible && e.key === "Escape") {
      instance.close();
    }
  });
});
