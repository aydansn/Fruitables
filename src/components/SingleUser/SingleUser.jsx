import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleUser = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("whichUser");
  const [singleUser, setSingleUser] = useState();
  console.log(singleUser);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data));
  }, []);
  return (
    singleUser && (
      <div>
        <div>{singleUser.name}</div>
        <div>{singleUser.username}</div>
        <div>{singleUser.email}</div>
        <div>{singleUser.phone}</div>
        <div>{singleUser.website}</div>
      </div>
    )
  );
};

export default SingleUser;
