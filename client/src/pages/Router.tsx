import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "@shared/ui/Loader";
import { ROUTE } from "./routes";

import MainPage from "./Main";

const SignUpPage = lazy(() => import("./SignUp"));
const SignInPage = lazy(() => import("./SignIn"));
const NotFoundPage = lazy(() => import("./NotFound"));

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTE.MAIN} element={<MainPage />} />
          <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
