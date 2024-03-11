"use client";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function AboutUs() {
  return (
    <div className="py-5 px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <div className="h-screen relative">
        <div className="my-4 ">
          <h1 className="font-sans font-medium text-gray-500">
            <div className="flex gap-2">
              <Link href="/admin/settings">
                <IoIosArrowBack className="h-8 w-10 text-gray-500" />
              </Link>
              <span className="font-sans">About Us</span>
            </div>
          </h1>
          <p className=" text-red-100 w-full border mt-6"></p>
        </div>
        <div className="text-xl flex flex-col gap-5">
          <p className="font-sans">
            Lorem ipsum dolor sit amet consectetur. Non eu ut amet in purus
            cursus ornare massa. Interdum integer molestie lectus accumsan dui
            nulla. Volutpat eleifend sed sollicitudin risus elementum nec.
            Pellentesque nulla sollicitudin ipsum orci nibh commodo consectetur
            morbi. Diam in morbi egestas enim mattis. Dictumst laoreet mattis
            bibendum velit sed hac nam. Nibh aliquet nunc suspendisse nulla ac
            vitae.
          </p>
          <p className="font-sans">
            Lorem ipsum dolor sit amet consectetur. Non eu ut amet in purus
            cursus ornare massa. Interdum integer molestie lectus accumsan dui
            nulla. Volutpat eleifend sed sollicitudin risus elementum nec.
            Pellentesque nulla sollicitudin ipsum orci nibh commodo consectetur
            morbi. Diam in morbi egestas enim mattis. Dictumst laoreet mattis
            bibendum velit sed hac nam. Nibh aliquet nunc suspendisse nulla ac
            vitae.
          </p>
          <p className="font-sans">
            Lorem ipsum dolor sit amet consectetur. Non eu ut amet in purus
            cursus ornare massa. Interdum integer molestie lectus accumsan dui
            nulla. Volutpat eleifend sed sollicitudin risus elementum nec.
            Pellentesque nulla sollicitudin ipsum orci nibh commodo consectetur
            morbi. Diam in morbi egestas enim mattis. Dictumst laoreet mattis
            bibendum velit sed hac nam. Nibh aliquet nunc suspendisse nulla ac
            vitae.
          </p>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button my-0 w-full bg-[#82866b] text-white flex  items-center justify-center hover:bg-[#6c7057] bottom-0 absolute"
        >
          <span className="font-sans">Update</span>
        </Button>
      </div>
    </div>
  );
}
