import React, { useEffect, useState } from 'react';
import './App.css';
import "reset-css/reset.css";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./components/ImageGallery/ImageGallery.tsx";
import Loader from "./components/Loader/Loader.tsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";
import { searchPhoto } from './components/Api/Api.js';
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.tsx";
import ImageModal from "./components/ImageModal/ImageModal.tsx";

export interface Urls {
    regular: string;
    small: string;
}
export interface Images {
    id: string;
    urls: Urls
}

export type HandleSearch = (item: string) => void;
const App: React.FC = () => {
    const [images, setImages] = useState<Images[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [perPage] = useState<number>(12);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect((): void => {
        if (searchQuery.trim() !== '') {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const data = await searchPhoto(searchQuery, page, perPage);
                    const totalPages = Math.ceil(data.total / perPage);
                    setTotalPages(totalPages);
                    if (data.results.length === 0) {
                        setError(true);
                        setErrorMsg('No images found');
                        setImages([]);
                    } else {
                        setError(false);
                        if (page === 1) {
                            setImages(data.results);
                        } else {
                            setImages(prevImages => [...prevImages, ...data.results]);
                        }
                    }
                    setLoading(false);
                } catch (error) {
                    setError(true);
                    setErrorMsg('Failed to fetch images');
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [searchQuery, page, perPage]);

    const handleSearch: HandleSearch  = async (item) => {
        setSearchQuery(item);
        setPage(1);
    };

    const handleLoadMore = (): void => {
        setPage(prevPage => prevPage + 1);
    };

    const openModal = (imageUrl: string): void => {
        setImageUrl(imageUrl);
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
        setModalIsOpen(false);
    };

    const onImageClick = (imageUrl: string): void => {
        openModal(imageUrl);
    };

    return (
        <div className="gallery">
            <ToastContainer />
            <SearchBar onSubmit={handleSearch} />
            <ImageGallery images={images} onImageClick={onImageClick} />
            {loading && <Loader />}
            {error && <ErrorMessage errorMsg={errorMsg} />}
            {images.length > 0 && !loading && page < totalPages && (
                <LoadMoreBtn onClick={handleLoadMore} />
            )}
            <ImageModal isOpen={modalIsOpen} imageUrl={imageUrl} onClose={closeModal} />
        </div>
    );
}

export default App;
