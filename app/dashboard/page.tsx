"use client";

import { useEffect, useState } from "react";
import { userService } from "@/services/UserService";
import { useRouter } from "next/navigation";
import logo from "../../public/images/logo.svg";
import profilePicture from "../../public/images/profile-picture.jpg";
import NavBar from "@/components/dashboard/home/NavBar";
import SideDrawer from "@/components/dashboard/home/SideDrawer";
import MyTasks from "@/components/dashboard/home/MyTasks";
import CompletedTasks from "@/components/dashboard/CompletedTasks";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("my-tasks");

  const renderContent = () => {
    switch (activeTab) {
      case "my-tasks":
        return <MyTasks />;
      case "completed-tasks":
        return <CompletedTasks />;
      default:
        return <MyTasks />;
    }
  };

  useEffect(() => {
    if (userService.isUserLoggedIn()) setIsUserLoggedIn(true);
    else router.push("/");
  }, []);

  return isUserLoggedIn ? (
    <>
      <NavBar logo={logo} profilePicture={profilePicture} />
      <SideDrawer setActiveTab={setActiveTab} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">{renderContent()}</div>
      </div>
    </>
  ) : null;
};

export default Dashboard;
