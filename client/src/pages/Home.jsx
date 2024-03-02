import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { existingUser } = useSelector((state) => state.authReducer.authData);

  return <div>{existingUser.name}</div>;
}

export default Home;
