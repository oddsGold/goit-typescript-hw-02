import loadMoreBtn from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
    onClick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={loadMoreBtn["load-more-btn"]}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;