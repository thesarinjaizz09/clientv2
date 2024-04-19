"use client";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import Person from "@mui/icons-material/Person"; // Local CUSTOM COMPONENT
import UserInfo from "../user-info";
import UserAnalytics from "../user-analytics";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import { OrderCom } from "components/orderCom";
import { ShareCom } from "components/shareCom";
const ProfilePageView = async ({ user }) => {
  const router = useRouter()
  console.log({user})
  if(user.error) {
    window.location.href = "/login"
  }
  return (
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Person}
        title="My Profile"
        buttonText="Edit Profile"
        href={``}
      />

      {/* USER PROFILE INFO */}
      <UserAnalytics user={user} />

      {/* USER PROFILE INFO */}
      <UserInfo user={user} />

      <OrderCom user={user} />
      <ShareCom user={user} />
    </Fragment>
  );
};

export default ProfilePageView;
