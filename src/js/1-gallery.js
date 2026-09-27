import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    original: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200',
    description: 'Mountain lake',
  },
  {
    preview: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
    original: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    description: 'Mountain sunset',
  },
  {
    preview: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
    original: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    description: 'Foggy forest',
  },
  {
    preview: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    original: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
    description: 'Forest path',
  },
];

const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryMarkup = images.map(createGalleryItem).join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});