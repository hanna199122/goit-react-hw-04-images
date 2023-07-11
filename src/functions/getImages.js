// import API from 'services/pictures-api';

// async function getImages(data) {
//   await API.fetchPictures(this.state.picturesName, this.state.page)
//     .then(picture => {
//       if (picture.hits.length === 0 || picture.total === 0) {
//         return toast.error(`Немає такої картинки ${this.state.picturesName}`, {
//           theme: 'colored',
//         });
//       } else {
//         this.setState(prevState => {
//           return {
//             pictures: [...prevState.pictures, ...picture.hits],
//           };
//         });
//       }
//     })
//     .catch(error => this.setState({ error: error.message }))
//     .finally(() => this.setState({ isLoading: false }));
// }

// const getFetchImages = { getImages };

// export default getFetchImages;
