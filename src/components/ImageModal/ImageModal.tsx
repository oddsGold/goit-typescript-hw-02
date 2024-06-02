import Modal from 'react-modal';
import './ImageModal.css';

interface ImageModalProps {
    isOpen: boolean;
    imageUrl: string;
    onClose: () => void;
}
const ImageModal: React.FC<ImageModalProps> = ({isOpen, imageUrl, onClose}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            ariaHideApp={false}
            className="modal"
            overlayClassName="modal-overlay"
            shouldCloseOnOverlayClick={true}
        >
            <img src={imageUrl} alt="Regular Image" />
        </Modal>
    );
};

export default ImageModal;