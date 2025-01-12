import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../../Places/Components/PlacesList";
import UserProfilePanel from "../Components/UserProfilePanel";
import "./UserProfile.css";

const UserProfile = (props) => {
  const userid = useParams().id;
  const userPlaces = props.places.filter((place) => place.creator === userid);
  const user = props.users.find((user) => user.id === userid);

  return (
    <div className="user-profile">
      <UserProfilePanel userInfo={user}></UserProfilePanel>
      <div className="places-list">
        <PlacesList places={userPlaces}></PlacesList>
      </div>
    </div>
  );
};

export default UserProfile;
