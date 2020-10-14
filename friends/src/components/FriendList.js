import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

const FriendList = (props) => {
  const initialFormValues = {
    id: 0,
    name: "",
    age: 0,
    email: "",
  };
  const initialFriends = [];

  const [formValues, setFormValues] = useState(initialFormValues);
  const [friends, setFriends] = useState(initialFriends);

  const getData = () => {
    axiosWithAuth()
      .get("/data")
      .then((res) => {
        setFriends(res.data.friends);
      })
      .catch((err) => console.log(err));
  };

  return <div>{friends}</div>;
};

export default FriendList;
