
import { Route, Routes } from "react-router-dom";

import { Homepage } from "pages/Home";
// import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { MovieCast } from "pages/MovieCast";
import { MovieReviews } from "pages/MovieReviews";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from "./Layout";
import { lazy } from "react";

const MovieDetails = lazy(() => import('../pages/MovieDetails'))
export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
