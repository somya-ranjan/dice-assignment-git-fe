import React, { memo } from "react";
import { Outlet } from "react-router-dom";

function MainLayouts({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default memo(MainLayouts);
