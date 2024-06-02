import {Images} from "../../App.tsx";

interface ImageCardProps {
    image: Images;
    onImageClick: (imageUrl: string) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({image, onImageClick}) => {
    const handleClick = () => {
        onImageClick(image.urls.regular);
    };

    return(
        <div>
            <img src={image.urls.small} alt={image.urls.small} onClick={handleClick} />
        </div>
    )
}

export default ImageCard;