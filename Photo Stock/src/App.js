import React, { useState, useEffect, useCallback, useRef } from "react";
import Photo from "./Photo";
// import useFetch from "./useFetch";
const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const App = () => {
  const refrence = useRef();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const fetchImages = useCallback(async () => {
    console.log("render");
    const pageQuery = `&page=${page}`;
    let url = mainUrl + clientId + pageQuery;
    if (searchValue !== "") {
      url = `${searchUrl}${clientId}&query=${searchValue}${pageQuery}`;
    }
    try {
      // console.log("fetch", url);
      const res = await fetch(url);
      const info = await res.json();
      setData((oldphotos) => {
        if (searchValue && page === 1) return info.results;
        else if (searchValue) return [...oldphotos, ...info.results];
        else return [...oldphotos, ...info];
      });
      console.log(info);
      setLoading(false);
    } catch (e) {
      console.log("error : " + e);
      setLoading(false);
    }
  }, [page, searchValue]);
  useEffect(() => {
    console.log("fecth");
    setLoading(true);
    fetchImages();
  }, [fetchImages]);
  return (
    <div className="container">
      <div className="input-container">
        <input type="text" ref={refrence} placeholder="Search" />
        <button
          onClick={() => {
            setPage(1);
            setSearchValue(refrence.current.value);
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="Photos-container">
        {data.map((photo) => {
          return <Photo key={photo.id} {...photo} />;
        })}
      </div>
      {loading && <div className="loading"></div>}
      <div
        className="Load-container"
        style={{ width: "100%", textAlign: "center" }}
      >
        <button
          className="btn load-btn"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          see more
        </button>
      </div>
    </div>
  );
};

export default App;
