import { BrowserRouter } from 'react-router-dom';
import MainComponent from './Component/MainComponent';
import axios from 'axios'
import ScrollToTop from './Component/Atoms/ScrollToTop';

function App() {



  axios.defaults.headers =
  {
    'x-auth-token': localStorage.getItem('x-auth-token')
  }


  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data



    return response;
  }, function (error) {
    console.log(error)
    if (error.message.includes('401')) {
      if (!error.response.data.message.includes('Email not verified')) {


        localStorage.clear();
        window.location.href = '/';
      }

    }


    if (error.response.data.message == 'Not found') {


      // setModalother(true)
      // setMessage('Sorry The Request Can not be Fullfilled Now')

    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
