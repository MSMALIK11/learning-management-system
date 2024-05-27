
import './App.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      {/* <ThemeProvider> */}
      {/* <Banner /> */}
      {/* <ThemeSwitcher />
        <Card /> */}
      {/* <CourseDetails /> */}
      {/* </ThemeProvider> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
