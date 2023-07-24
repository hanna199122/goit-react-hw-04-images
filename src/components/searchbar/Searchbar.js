import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [picturesName, setpicturesName] = useState('');

  const handleChange = event => {
    const newName = event.target.value.toLowerCase();
    setpicturesName(newName);
    // console.log(newName);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (picturesName.trim() === '') {
      toast.warn('Введіть назву у пошуку', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }
    onSubmit(picturesName);
    setpicturesName('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css['searchForm-button']}>
          <ImSearch />
          <span className={css['searchForm-button-label']}>Search</span>
        </button>
        <input
          className={css['searchForm-input']}
          type="text"
          value={picturesName}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  picturesName: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
