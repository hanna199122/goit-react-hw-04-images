import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
// import Modal from 'components/modal';

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  getLargeImg,
}) => {
  return (
    <li key={id} className={css['gallery-item']}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => getLargeImg(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  getLargeImg: PropTypes.func,
  tags: PropTypes.string,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
};
