import React, { FC, Suspense, lazy } from "react";

import { Routes, Route } from "react-router";

import { Loader } from "../components/Common";

const PageCheckBillOfLading = lazy(
  () => import("../pages/PageCheckBillOfLading/PageCheckBillOfLading")
);
const PageDepartments = lazy(
  () => import("../pages/PageDepartments/PageDepartments")
);
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

const PagesRoutes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<PageCheckBillOfLading />} />
        <Route path="/departments" element={<PageDepartments />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default PagesRoutes;
