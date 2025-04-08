import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './component/SearchBar/SearchBar';
import { ImageGallery } from './component/ImageGallery/ImageGallery';
import { Loader } from './component/Loader/Loader';
import { ErrorMessage } from './component/ErrorMessage/ErrorMassage';
import { LoadMoreBtn } from './component/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './component/ImageModal/ImageModal';

const ACCESS_KEY = 'q3a1Fu1VMZeCsJt0wKIOJdFY-TEY1c_9oYIAuIwC9G8';
const BASE_URL = 'https://api.unsplash.com/search/photos';

const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
  );
  if (!response.ok) throw new Error('Failed to fetch images');
  return await response.json();
};

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchImages(query, page)
      .then((data) => {
        setImages((prev) => [...prev, ...data.results]);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  const handleImageClick = (url) => {
    setModalImage(url);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery  images={images}  onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={modalImage} />
      <Toaster position="top-right" />
    </div>
  );
}
