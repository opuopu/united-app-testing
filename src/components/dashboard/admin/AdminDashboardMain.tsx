import { AllImage } from "@/assets/AllImge";
import UsersIcon from "@/assets/svg/UsersIcon";
import {
  Col,
  DatePicker,
  Divider,
  Flex,
  Radio,
  RadioChangeEvent,
  Row,
} from "antd";
import Image, { StaticImageData } from "next/image";
import { it } from "node:test";
import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { PiTreeDuotone } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";
import dayjs from "dayjs";
import { Example } from "../Chart/IncomeChart";

export default function AdminDashboardMain() {
  const data = [
    {
      icon: <UsersIcon width={30} />,
      title: "Total Users",
      count: 780,
    },
    {
      icon: <UsersIcon width={30} />,
      title: "Total Employees",
      count: 100,
    },
    {
      icon: <FaUsers width={30} />,
      title: "Total Income",
      count: "$769776",
    },
  ];
  type shopRequest = {
    image: StaticImageData;
    name: string;
    location: string;
    rating: number;
    message: string;
    _id: string;
  };
  const shopRequestData: shopRequest[] = [
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfssdfdf",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdfsdsdffsad",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfadsfsdf",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdfasdfasdfsad",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdasdfasdff",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdfsdfasdfsad",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdasdfasdf",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdfsdfasdfsad",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdasdfasdff",
    },
    {
      image: AllImage.profileAvater,
      name: "Turkish Balloons Café",
      location: "Dhaka, Bangladesh",
      rating: 4.5,
      message: "Very good",
      _id: "sdfsdfsdfasdfsdsad",
    },
  ];

  type IRecentType = {
    name: string;
    transaction: string;
    eatingTime: string;
    dataTime: string;
    personName: string;
    status: string;
    _id: string;
  };
  const recentData: IRecentType[] | any = [
    {
      name: "Esther howards",
      transaction: "#8392758982395639",
      eatingTime: "Breakfast",
      dataTime: "10/23/2023",
      personName: "Turkish cafe",
      status: "complete",
      _id: "3hdjssdfhejkds",
    },
    {
      name: "Esther howards",
      transaction: "#8392758982395639",
      eatingTime: "Breakfast",
      dataTime: "10/23/2023",
      personName: "Turkish cafe",
      status: "pending",
      _id: "3hdjsasdfhejkds",
    },
    ,
    {
      name: "Esther howards",
      transaction: "#8392758982395639",
      eatingTime: "Breakfast",
      dataTime: "10/23/2023",
      personName: "Turkish cafe",
      status: "complete",
      _id: "3hdjshgasdejkds",
    },
    ,
    {
      name: "Esther howards",
      transaction: "#8392758982395639",
      eatingTime: "Breakfast",
      dataTime: "10/23/2023",
      personName: "Turkish cafe",
      status: "complete",
      _id: "3hdjfsashejkds",
    },
    ,
    {
      name: "Esther howards",
      transaction: "#8392758982395639",
      eatingTime: "Breakfast",
      dataTime: "10/23/2023",
      personName: "Turkish cafe",
      status: "complete",
      _id: "3hdjshejfasdkds",
    },
  ];
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col sm={24} lg={16}>
          <Row gutter={[16, 16]}>
            {data.map((item, index) => (
              <Col key={index} xs={24} sm={12} md={8}>
                <div className="flex justify-center items-center  p-5 gap-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border border-[#D8D9D1] bg-white rounded-lg">
                  {item.icon}
                  <div>
                    <p>{item.title}</p>
                    <p>{item.count}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="border border-[#D8D9D1] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] mt-2 rounded-lg p-2 space-y-3 bg-white">
            <div className="flex justify-between">
              <p>Income Ratio</p>
              <p>January 2022</p>
            </div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>This month</Radio>
              <Radio value={2}>Last month</Radio>
            </Radio.Group>
            <Example />
          </div>
        </Col>
        <Col
          sm={24}
          lg={8}
          className="overflow-y-auto h-[100vh] lg:!h-[57.5vh] !w-full"
        >
          <div className=" p-2 rounded border border-gray-300 w-full bg-white">
            <div className="flex justify-between items-center ">
              <p>Shop Request</p>
              <button className="text-[#82866B] text-md">See all</button>
            </div>
            <Divider />
            <div>
              {shopRequestData.map((item: any) => (
                <div className="" key={item._id}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.image}
                        alt=""
                        width={300}
                        height={300}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-md">{item.name}</p>
                        <p className="text-xs">{item.location}</p>
                      </div>
                    </div>
                    <HiDotsVertical />
                  </div>
                  <Divider />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[20, 20]} style={{ marginTop: "1rem" }}>
        <Col sm={24} lg={16}>
          <div className="border border-[#D8D9D1] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  rounded-lg p-3 space-y-3 bg-white">
            <div className="flex justify-between">
              <p>Recent Transaction</p>
              <DatePicker
                defaultValue={dayjs("01/01/2024")}
                format={"DD/MM/YYYY"}
              />
            </div>

            <Divider />

            <div>
              {recentData.map((item: IRecentType) => (
                <div key={item._id}>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <p>{item.name}</p>
                      <p>{item.transaction}</p>
                    </div>
                    <p className="text-white py-1 px-2 rounded-md bg-[#82866B]">
                      {item.eatingTime}
                    </p>
                    <p>{item.dataTime}</p>
                    <p>{item.personName}</p>
                    <button className="capitalize py-1 px-2 bg-[#D8D9D1] p-1 rounded-md">
                      {item.status}
                    </button>
                    <HiDotsVertical />
                  </div>
                  <Divider className="" />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col
          sm={24}
          lg={8}
          className="overflow-y-auto h-[100vh] lg:!h-[57.5vh] !w-full"
        >
          <div className=" p-2 rounded border border-gray-300 w-full bg-white">
            <div className="flex justify-between items-center ">
              <p>Top Shop</p>
              <button className="text-[#82866B] text-md">See all</button>
            </div>
            <Divider />
            <div>
              {shopRequestData.map((item: any) => (
                <div className="" key={item._id}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.image}
                        alt=""
                        width={300}
                        height={300}
                        className="w-10 h-10 rounded-full"
                      />

                      <p className="text-md truncate">{item.name}</p>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                      <p>
                        <Image
                          src={AllImage.ratingIcon}
                          alt=""
                          width={200}
                          height={200}
                          className="w-5  h-5"
                        />
                      </p>
                      <p>(4.5)</p>
                    </div>
                  </div>
                  <Divider />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
