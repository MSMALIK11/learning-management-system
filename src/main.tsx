
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import LogRocket from 'logrocket';
import axios from 'axios'
axios.defaults.withCredentials = true;
LogRocket.init('snbapk/lms');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>

)
