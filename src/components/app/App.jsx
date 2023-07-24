import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/searchbar';
import css from './App.module.css';
import ImageGallery from 'components/imageGallery';
import Modal from 'components/modal';
import Button from 'components/button';
import API from 'services/pictures-api';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
// import getFetchImages from 'functions/getImages';

const App = () => {
  const [picturesName, setpicturesName] = useState('');
  const [showModal, setshowModal] = useState(false);
  const [page, setpage] = useState(1);
  const [pictures, setpictures] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [largeImageURL, setlargeImageURL] = useState('');

  useEffect(() => {
    if (!picturesName) {
      return;
    }
    setisLoading(true);
    API.fetchPictures(picturesName, page)
      .then(picture => {
        if (picture.hits.length === 0 || picture.total === 0) {
          return toast.error(`Немає такої картинки ${picturesName}`, {
            theme: 'colored',
          });
        } else {
          setpictures([...pictures, ...picture.hits]);
        }
      })
      .catch(error => seterror(error.message))
      .finally(() => setisLoading(false));
  }, [page, picturesName]);

  const showMorePictures = e => {
    setpage(prevPage => prevPage + 1);
  };

  const handleFormSubmit = picturesName => {
    setpicturesName(picturesName);
    setpictures([]);
    setpage(1);
  };

  const getLargeImg = largeImageURL => {
    setlargeImageURL(largeImageURL);
    console.log(largeImageURL);
  };

  const toggleModal = () => setshowModal(!showModal);

  return (
    <div className={css['app-container']}>
      <Searchbar onSubmit={handleFormSubmit} />
      <div className="container">
        <ImageGallery
          showModal={toggleModal}
          pictures={pictures}
          isLoading={isLoading}
          getLargeImg={getLargeImg}
        />
        {isLoading && <ThreeDots color="#3f51b5" />}
        {pictures.length >= 12 ? (
          <Button page={page} showMorePictures={showMorePictures}></Button>
        ) : (
          ' '
        )}
      </div>
      {showModal && (
        <Modal showModal={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
};
// class App extends Component {
//   state = {
//     picturesName: '',
//     showModal: false,
//     page: 1,
//     pictures: [],
//     isLoading: false,
//     error: null,
//     largeImageURL: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       this.state.picturesName !== prevState.picturesName ||
//       this.state.page !== prevState.page
//     ) {
//       this.setState({ isLoading: true });

//       API.fetchPictures(this.state.picturesName, this.state.page)
//         .then(picture => {
//           if (picture.hits.length === 0 || picture.total === 0) {
//             return toast.error(
//               `Немає такої картинки ${this.state.picturesName}`,
//               {
//                 theme: 'colored',
//               }
//             );
//           } else {
//             this.setState(prevState => {
//               return {
//                 pictures: [...prevState.pictures, ...picture.hits],
//               };
//             });
//           }
//         })
//         .catch(error => this.setState({ error: error.message }))
//         .finally(() => this.setState({ isLoading: false }));
//     }
//   }

//   showMorePictures = e => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   handleFormSubmit = picturesName => {
//     this.setState({
//       picturesName,
//       pictures: [],
//       page: 1,
//       isLoadMoreEnabled: false,
//     });
//   };

//   getLargeImg = largeImageURL => {
//     this.setState({ largeImageURL });
//   };

//   toggleModal = () =>
//     this.setState(({ showModal }) => ({ showModal: !showModal }));

//   render() {
//     const { showModal, page, pictures, isLoading, largeImageURL } = this.state;

//     return (
//       <div className={css['app-container']}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <div className="container">
//           <ImageGallery
//             showModal={this.toggleModal}
//             pictures={pictures}
//             isLoading={isLoading}
//             getLargeImg={this.getLargeImg}
//           />
//           {isLoading && <ThreeDots color="#3f51b5" />}
//           {pictures.length >= 12 ? (
//             <Button
//               page={page}
//               showMorePictures={this.showMorePictures}
//             ></Button>
//           ) : (
//             ' '
//           )}
//         </div>
//         {showModal && (
//           <Modal showModal={this.toggleModal}>
//             <img src={largeImageURL} alt="" />
//           </Modal>
//         )}
//         <ToastContainer />
//       </div>
//     );
//   }
// }
export default App;

App.propTypes = {
  picturesName: PropTypes.string,
  showModal: PropTypes.bool,
  page: PropTypes.number,
  pictures: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  largeImageURL: PropTypes.string,
  showMorePictures: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  getLargeImg: PropTypes.func,
  toggleModal: PropTypes.func,
};
