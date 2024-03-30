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
                    alt="${item.description}"
                />
            </a>
        </li>`
    )
    .join('');

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
