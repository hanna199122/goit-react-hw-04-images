import { toast } from 'react-toastify';

const BASE_API = 'https://pixabay.com/api/';
const API_KEY = '36122923-4c7f71e9d9d6e85a0cc171286';

async function fetchPictures(name, page) {
  return await fetch(
    `${BASE_API}?key=${API_KEY}&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(
        toast.error(`Немає такої картинки ${name}`, {
          theme: 'colored',
        })
      )
    );
  });
}

const api = { fetchPictures };
export default api;
