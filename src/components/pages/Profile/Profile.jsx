import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchOneUser } from "../../../features/auth";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  return (
    <div>
      Профиль
      <div>{user.name}</div>
    </div>
  );
};

export default Profile;
