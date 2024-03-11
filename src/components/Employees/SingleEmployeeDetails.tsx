"use client";
import { AllImage } from "@/assets/AllImge";
import { employeeData } from "@/db/Employees";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function SingleEmployeeDetails({
  employeeId,
}: {
  employeeId: string;
}) {
  const singleEmployee = employeeData.find(
    (employee) => employee.userID === employeeId
  );
  return (
    <div className="py-5 px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
      <div className="h-screen relative">
        <div className="my-4 ">
          <h1 className=" font-sans font-normal  text-gray-500">
            <div className="flex items-center gap-2">
              <Link href="./">
                <IoIosArrowBack className="h-8 w-10 text-gray-500" />
              </Link>
              <span className=" font-sans font-normal">Employee Details</span>
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

          <h1 className="font-sans font-normal">{singleEmployee?.name}</h1>
        </div>
        <h2 className="text-2xl my-6 text-[#82866b] font-sans">Information</h2>
        <div>
          <h4 className="font-sans font-normal">
            Employee ID: {singleEmployee?.userID}
          </h4>
          <h4 className="font-sans font-normal">
            Email: {singleEmployee?.email}
          </h4>
          <h4 className="font-sans font-normal">
            Date of Birth: {singleEmployee?.dob}
          </h4>
          <h4 className="font-sans font-normal">
            Address: {singleEmployee?.address}
          </h4>
          <h4 className="font-sans font-normal">
            Account Holder Name: {singleEmployee?.accountHolder}
          </h4>
          <h4 className="font-sans font-normal">
            Account Number: {singleEmployee?.accountNumber}
          </h4>
        </div>
      </div>
    </div>
  );
}
