"use client";

import { PiUsersThree } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { Space, Table } from "antd";
import { IAllUsers, usersData } from "@/db/AllUsers";
import { Column } from "@ant-design/plots";
import Link from "next/link";
export default function Users() {
  return (
    <div className="p-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md h-screen">
      <div className="flex items-center justify-between">
        <h1 className="font-sans font-medium text-gray-500 ml-3 mt-2">Users</h1>
        <div className="flex items-center justify-around gap-2 text-xl bg-gray-100 p-3 rounded-lg">
          <PiUsersThree />
          <p className="font-sans">
            Total Users{" "}
            <span className="ml-5 font-bold text-gray-600 ">
              {usersData.length}
            </span>
          </p>
        </div>
      </div>
      <p className=" text-red-100 w-full border my-6"></p>

      <div>
        <Table dataSource={usersData} pagination={{ pageSize: 10 }}>
          <Column
            title="Name "
            dataIndex="name"
            key="name"
            className="font-sans border-none"
            fixed="left"
            width={100}
            autoFit={true}
          />
          <Column
            title="Email "
            dataIndex="email"
            key="email"
            className="font-sans border-none"
          />
          <Column
            title="User ID"
            dataIndex="userID"
            key="userID"
            className="font-sans border-none"
          />

          <Column
            title="Action"
            key="userID"
            dataIndex="userID"
            className="font-sans border-none"
            render={(_: any, record: IAllUsers) => (
              <Space size="middle">
                <Link href={`users/${record.userID}`}>
                  <IoEyeOutline className="text-xl" />
                </Link>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
}
