import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem';

const ImageGallery = ({ showModal, pictures, getLargeImg }) => {
  return (
    <ul className={css.imageGalleryList} onClick={showModal}>
      {pictures.map(({ id, largeImageURL, tags, webformatURL }) => {
        return (
          <ImageGalleryItem
            id={id}
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            getLargeImg={getLargeImg}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  showModal: PropTypes.func,
  pictures: PropTypes.array,
  largeImageURL: PropTypes.string,
  showMorePictures: PropTypes.func,
  getLargeImg: PropTypes.func,
  tags: PropTypes.string,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
};
