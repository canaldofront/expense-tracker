import '../styles/globals.scss'
import {Provider} from 'react-redux';
import store from '../source/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
