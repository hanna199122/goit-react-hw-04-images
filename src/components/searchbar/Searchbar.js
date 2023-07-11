import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    picturesName: '',
  };

  handleChange = event => {
    const newName = event.target.value.toLowerCase();
    this.setState({ picturesName: newName });
    // console.log(newName);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.picturesName.trim() === '') {
      toast.warn('Введіть назву у пошуку', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }
    this.props.onSubmit(this.state.picturesName);
    this.setState({ picturesName: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['searchForm-button']}>
            <ImSearch />
            <span className={css['searchForm-button-label']}>Search</span>
          </button>
          <input
            className={css['searchForm-input']}
            type="text"
            value={this.state.picturesName}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  picturesName: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
