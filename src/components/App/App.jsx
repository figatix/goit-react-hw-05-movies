
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'))
const Homepage = lazy(() => import('../../pages/Home/Home'))
const Movies = lazy(() => import('../../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'))
const MovieCast = lazy(() => import('../../pages/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('../../pages/MovieReviews/MovieReviews'))


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:detailsId/*" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
