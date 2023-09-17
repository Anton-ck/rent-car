import { LoadMoreBtn as LoadMore } from './LoadMore.styled';

const LoadMoreBtn = ({ getPage }) => {
  return (
    <LoadMore type="button" onClick={getPage}>
      Load more
    </LoadMore>
  );
};

export default LoadMoreBtn;
