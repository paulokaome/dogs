import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import UserHeader from "./UserHeader";
import { UserContext } from "../../Context/UserContext";
import NoteFound from "../NoteFound";
import Head from "../../components/Helper/Head"

const User = () => {

  const {data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta"/>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NoteFound/>} />
      </Routes>
    </section>
  );
};
export default User;
