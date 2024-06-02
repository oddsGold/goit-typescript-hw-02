import imageGallery from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard.tsx";
import {Images} from "../../App.tsx";


interface ImageGalleryProps {
    images: Images[];
    onImageClick: (imageUrl: string) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({images, onImageClick}) => {
    return(
        <ul className={imageGallery.list}>
            {images.map((image) => {
                return (
                    <li key={image.id}>
                        <ImageCard image={image} onImageClick={onImageClick}  />
                    </li>
                );
            })}
        </ul>
    )
}

export default ImageGallery;