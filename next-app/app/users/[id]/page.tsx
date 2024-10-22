import React from "react";

interface props {
  params: { id: number };
}
const UserDetailsPage = ({ params: { id } }: props) => {
  return <div>user: {id}</div>;
};

export default UserDetailsPage;
