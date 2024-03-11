"use client";
import { Button, Form, Input, Typography, Upload } from "antd";
import React, { useState } from "react";
import { EditOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import { AllImage } from "@/assets/AllImge";
import { IUser, userData } from "@/db/user";

export default function Profile() {
  const [isReadOnly, setIsReadOnly] = useState(true);
  //   const [userData, setUserData] = useState(null); // Initialize userData as null initially

  const { name, email, number, dob, address, profile } = userData[0];
  const onFinish = (values: IUser) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="py-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md h-screen px-7 relative">
      <div className="my-4 ">
        <h1 className="font-sans font-medium text-gray-500 ml-2">
          {isReadOnly ? (
            "Profile"
          ) : (
            <div className="flex gap-2">
              <ArrowLeftOutlined onClick={() => setIsReadOnly(!isReadOnly)} />{" "}
              <span> Update Profile</span>
            </div>
          )}
        </h1>
        <p className=" text-red-100 w-full border mt-6"></p>
      </div>

      <Form
        name="normal_login"
        className="login-form "
        initialValues={
          name
            ? {
                name: name || "",
                email: email || "",
                profile: profile || "",
                number: number || "",
                dob: dob || "",
                address: address || "",
              }
            : {}
        }
        onFinish={onFinish}
      >
        <Form.Item name="profile">
          <div className="flex items-center gap-8 text-gray-500  mb-5">
            {isReadOnly ? (
              <Image
                src={AllImage.user}
                alt="user"
                height={150}
                width={150}
                className="relative overflow-hidden"
              />
            ) : (
              <Upload>
                <div className="relative h-36 w-36 overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-cover bg-center">
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: `url(${AllImage.user})` }}
                    ></div>
                  </div>
                  {/* Button */}
                  <Button
                    //   icon={<UploadOutlined />}
                    className="absolute inset-0 h-full w-full bg-transparent"
                    style={{ zIndex: 1 }} // Ensure the button is above the background image
                  >
                    <Image
                      src={AllImage.user}
                      alt="user"
                      className="relative overflow-hidden w-fit h-fit"
                    />
                  </Button>
                </div>
              </Upload>
            )}

            <h1 className="font-sans font-normal">{name}</h1>
          </div>
        </Form.Item>

        <Typography.Title level={5}>Name </Typography.Title>
        <Form.Item name="name">
          <Input size="large" type="text" readOnly={isReadOnly} />
        </Form.Item>

        <Typography.Title level={5}>Email </Typography.Title>
        <Form.Item name="email">
          <Input size="large" type="text" readOnly={isReadOnly} />
        </Form.Item>

        <Typography.Title level={5}>Number </Typography.Title>
        <Form.Item name="number">
          <Input size="large" type="text" readOnly={isReadOnly} />
        </Form.Item>

        <Typography.Title level={5}>Date of Birth </Typography.Title>
        <Form.Item name="dob">
          <Input size="large" type="text" readOnly={isReadOnly} />
        </Form.Item>

        <Typography.Title level={5}>Address </Typography.Title>
        <Form.Item name="address">
          <Input size="large" type="text" readOnly={isReadOnly} />
        </Form.Item>

        <Form.Item>
          {isReadOnly ? (
            <Button
              className=" my-0 w-full bg-[#82866b] text-white flex  items-center justify-center hover:bg-[#6c7057] "
              onClick={() => setIsReadOnly(!isReadOnly)}
            >
              <div className="flex gap-2">
                <EditOutlined />
                Edit Profile
              </div>
            </Button>
          ) : (
            <Button
              htmlType="submit"
              className=" login-form-button my-0 w-full bg-[#82866b] text-white flex  items-center justify-center hover:bg-[#6c7057] "
            >
              Update
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}
