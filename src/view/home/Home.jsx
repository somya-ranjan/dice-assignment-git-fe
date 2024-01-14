import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsDatabaseX } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

import LogoutModal from "../auth/modal/LogoutModal";
import { getRepoListData } from "../../store/actions";
import { axios } from "../../http";
import "./style.scss";

function Home() {
  // // initial state
  const dispatch = useDispatch();

  // // redux state
  const { isRepoListLoading, repoListData } = useSelector(
    (state) => state?.repo
  );

  // // short option
  const selectOptions = [
    { label: "Stars", value: "stars" },
    { label: "Watchers count", value: "watchers count" },
    { label: "Score", value: "score" },
    { label: "Name", value: "name" },
    { label: "Created at", value: "created_at" },
    { label: "Updated at", value: "updated_at" },
  ];
  // // local state
  const [formData, setFormData] = useState({
    searchValue: "",
    shortValue: "",
  });
  const [openLogoutModal, setOpenLogOutModal] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  useEffect(() => {
    dispatch(
      getRepoListData({
        search: formData.searchValue || "MST-Website",
        sort: formData.shortValue,
      })
    );
  }, [formData.searchValue, formData.shortValue]);

  return (
    <>
      <div className="top_bar">
        <input
          type="search"
          name="searchValue"
          value={formData.searchValue}
          placeholder="Search by git repo name..."
          onChange={handelChange}
        />
        <div className="right_cont">
          <select
            name="shortValue"
            id=""
            onChange={handelChange}
            value={formData.shortValue}
          >
            <option value="" disabled>
              Select...
            </option>
            {selectOptions?.map((item) => (
              <option value={item?.value} key={Math.random()}>
                {item.label}
              </option>
            ))}
          </select>
          <CiLogout onClick={() => setOpenLogOutModal(true)} />
        </div>
      </div>
      <div className="repo_container">
        {isRepoListLoading ? (
          [...new Array(8)].map(() => (
            <div className="repo_card loading_cont" key={Math.random()}>
              <div className="round_skeletons" />
              <div className="line_skeleton" />
              <div className="line_skeleton" />
              <div className="line_skeleton" />
              <div className="line_skeleton" />
            </div>
          ))
        ) : repoListData?.items?.length > 0 ? (
          repoListData?.items.map((repoData) => (
            <div className="repo_card " key={repoData?.id}>
              <a href={repoData?.owner?.html_url || "#"} target="_blank">
                <img src={repoData?.owner?.avatar_url} alt="user avatar" />
              </a>
              <div className="repo_details">
                <h6>Repo Name:</h6>
                <p>
                  <a href={repoData?.html_url} target="_blank">
                    {repoData?.name || "N/A"}
                  </a>
                </p>
              </div>
              <div className="repo_details">
                <h6>Stars:</h6>
                <p>{repoData?.stargazers_count || "N/A"}</p>
              </div>
              <div className="repo_details">
                <h6>Description:</h6>
                <p>{repoData?.description || "N/A"}</p>
              </div>
              <div className="repo_details">
                <h6>Language :</h6>
                <p>{repoData?.language || "N/A"}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="data_not_found_cont">
            <BsDatabaseX />
            <p>Data not found!</p>
          </div>
        )}
      </div>

      <LogoutModal
        open={openLogoutModal}
        close={() => setOpenLogOutModal(false)}
      />
    </>
  );
}

export default Home;
