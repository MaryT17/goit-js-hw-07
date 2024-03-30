import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createGalleryMarkup = items =>
  items
    .map(
      item =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </li>`
    )
    .join('');

const openModal = imageUrl => {
  const instance = basicLightbox.create(`<img src="${imageUrl}">`, {
    onShow: instance => {
      document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
          instance.close();
        }
      });
    },
  });

  instance.show();
};

galleryContainer.addEventListener('click', event => {
  event.preventDefault();

  const largeImageUrl = event.target.getAttribute('data-source');
  openModal(largeImageUrl);
});

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
