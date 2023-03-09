
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppNav } from "./AppNav";


export const Layout = () => {
  return (
    <>
      <AppNav />
      <Suspense fallback={null}>
        <Outlet />

      </Suspense>
    </>

  )
}

