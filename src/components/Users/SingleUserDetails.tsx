"use client";
import { AllImage } from "@/assets/AllImge";
import { usersData } from "@/db/AllUsers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function SingleUserDetails({ userId }: { userId: string }) {
  const singleUser = usersData.find((user) => user.userID === userId);
  return (
    <div className="py-5 px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
      <div className="h-screen relative">
        <div className="my-4 ">
          <h1 className="font-sans font-medium text-gray-500">
            <div className="flex gap-2">
              <Link href="./">
                <IoIosArrowBack className="h-8 w-10 text-gray-500" />
              </Link>
              <span className="font-sans">Users Details</span>
            </div>
          </h1>
          <p className=" text-red-100 w-full border mt-6"></p>
        </div>
        <div className="flex items-center gap-8  mb-5">
          <Image
            src={AllImage.user}
            alt="user"
            height={150}
            width={150}
            className="relative overflow-hidden rounded-xl"
          />

          <h1 className="font-sans ">{singleUser?.name}</h1>
        </div>
        <h2 className="text-2xl my-6 text-[#82866b] font-sans">Information</h2>
        <div>
          <h4 className="font-sans font-normal">
            User ID: {singleUser?.userID}
          </h4>
          <h4 className="font-sans font-normal">Email: {singleUser?.email}</h4>
          <h4 className="font-sans font-normal">
            Date of Birth: {singleUser?.dob}
          </h4>
          <h4 className="font-sans font-normal">
            Address: {singleUser?.address}
          </h4>
          <h4 className="font-sans font-normal">
            Payment Method: {singleUser?.paymentMethod}
          </h4>
        </div>
      </div>
    </div>
  );
}
