"use client";
import Footer from "@/components/Home/Footer";
import GlobalLoading from "@/components/Loader/GlobalLoading";
import HomeHeader from "@/components/shared/Headers/HomeHeader";
import { IDecodedInfo, getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomePage = () => {
  const userInfo = getUserInfo() as IDecodedInfo;
  const route = useRouter();
  useEffect(() => {
    route.push("/login");

    return () => {};
  }, [route]);

  return (
    <div className="">
      <main className="bg-[#A2B0F321 pb-10 min-h-screen">
        <GlobalLoading />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
