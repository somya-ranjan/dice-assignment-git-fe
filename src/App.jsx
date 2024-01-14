import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// // local state
import { guestRoutes, userRoutes } from "./routes/mainRoutes";
import MainLayouts from "./layouts/MainLayouts";
import FallbackLoader from "./components/loader/FallbackLoader";
import "./App.css";

function App() {
  // // initial state
  const tokenPresent = localStorage.getItem("authToken");

  // // redux state
  const { isAuth } = useSelector((state) => state.auth);

  // // local state
  const [appRoutes, setAppRoutes] = useState([]);

  const mainContent = appRoutes.map((route) => {
    return route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.component />}
      />
    ) : (
      route.redirectRoute && (
        <Route
          path="*"
          key={route.name}
          element={<Navigate to={route.path} />}
        />
      )
    );
  });

  useEffect(() => {
    if (tokenPresent || isAuth) {
      setAppRoutes(userRoutes);
    } else {
      setAppRoutes(guestRoutes);
    }
  }, [tokenPresent, isAuth]);

  return (
    <Suspense fallback={<FallbackLoader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayouts isAuthenticated={tokenPresent} />}>
            {mainContent}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
