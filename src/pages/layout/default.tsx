import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../../components/loading";
import { Header } from "../../components/header";

export const Layout = () => {
  return (
    <div className="default-layout">
      <Header />
      <div className="content">
        <div className="container">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}