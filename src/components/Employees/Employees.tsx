"use client";

import { PiUsersThree } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { Space, Table } from "antd";
import { Column } from "@ant-design/plots";
import Link from "next/link";
import { IAllEmployee, employeeData } from "@/db/Employees";

export default function Employees() {
  return (
    <div className="p-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md h-screen">
      <div className="flex items-center justify-between">
        <h1 className="font-sans font-medium text-gray-500 ml-3 mt-2">
          Employees
        </h1>
        <div className="flex items-center justify-around gap-2 text-xl bg-gray-100 p-3 rounded-lg">
          <PiUsersThree />
          <p className=" font-sans font-normal">
            Total Employee{" "}
            <span className="ml-5 font-bold text-gray-600 ">
              {employeeData.length}
            </span>
          </p>
        </div>
      </div>
      <p className=" text-red-100 w-full border my-6"></p>

      <div>
        <Table dataSource={employeeData} pagination={{ pageSize: 10 }}>
          <Column
            title="Name"
            dataIndex="name"
            key="name"
            fixed="left"
            className="font-sans border-none"
            width={100}
          />
          <Column
            title="Email"
            dataIndex="email"
            key="email"
            className="font-sans border-none"
          />
          <Column
            title="Employee ID"
            dataIndex="userID"
            key="userID"
            className="font-sans border-none"
          />

          <Column
            title="Action"
            key="userID"
            dataIndex="userID"
            className="font-sans border-none"
            render={(_: any, record: IAllEmployee) => (
              <Space size="middle">
                <Link href={`employees/${record.userID}`}>
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
