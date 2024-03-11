"use client";
import AdminDashboardMain from "@/components/dashboard/admin/AdminDashboardMain";

import { IDecodedInfo, getUserInfo } from "@/services/auth.service";
import dynamic from "next/dynamic";
import React from "react";

const DashboardPage = () => {
  const userInfo = {
    role: "admin",
  };

  // console.log(userInfo);

  if (userInfo?.role == "admin") {
    return <AdminDashboardMain />;
  }
};

export default DashboardPage;
