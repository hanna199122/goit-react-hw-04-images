import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ showMorePictures }) => {
  return (
    <button className={css.button} onClick={showMorePictures}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  showMorePictures: PropTypes.func,
};
