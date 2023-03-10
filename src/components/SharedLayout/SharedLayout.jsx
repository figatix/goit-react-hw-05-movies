
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppNav } from "../AppNav/AppNav";
import { Loader } from "../Loader";


const SharedLayout = () => {
  return (
    <>
      <AppNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>

  )
}

export default SharedLayout
