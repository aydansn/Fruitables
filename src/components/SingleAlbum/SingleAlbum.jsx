import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleAlbum = () => {
  let [searchParam] = useSearchParams();
  let id = searchParam.get("whichAlbum");
  const [singleAlbum, setSingleAlbum] = useState();
  console.log(singleAlbum);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleAlbum(data));
  }, []);
  return (
    singleAlbum && (
      <div>
        (<div>{singleAlbum.title}</div>)
      </div>
    )
  );
};

export default SingleAlbum;
