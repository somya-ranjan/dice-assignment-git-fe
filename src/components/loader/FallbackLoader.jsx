import React from "react";
import { MAIN_LOADER } from "../../assets/loader";
import "./style.scss";

function FallbackLoader() {
  return (
    <div className="fallback_loader_container">
      <img src={MAIN_LOADER} />
    </div>
  );
}

export default FallbackLoader;
