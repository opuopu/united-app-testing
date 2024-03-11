"use client";

import { IoEyeOutline } from "react-icons/io5";
import { Button, Space, Table } from "antd";
import { Column } from "@ant-design/plots";
import { SwapOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { IEmployeeTransaction, employeeTransaction } from "@/db/transaction";

export default function Transaction() {
  const [filterData, setFilterData] = useState("all");
  let pendingTransaction = employeeTransaction.filter(
    (data) => data.status === filterData
  );

  if (filterData === "all") {
    pendingTransaction = employeeTransaction;
  }

  const onFilterChanged = (data: any) => {
    setFilterData(data);
    // console.log(filterData);
  };
  let totalAmount = 0;
  let pendingAmount = 0;
  let completeAmount = 0;

  employeeTransaction.forEach((transaction) => {
    const amount = parseFloat(transaction.amount);

    totalAmount += amount;
    if (transaction.status === "pending") {
      pendingAmount += amount;
    } else if (transaction.status === "complete") {
      completeAmount += amount;
    }
  });

  //   console.log("Total Amount:", totalAmount);
  //   console.log("Pending Amount:", pendingAmount);
  //   console.log("Complete Amount:", completeAmount);

  return (
    <div className="p-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md h-screen">
      <div className="flex items-center justify-between">
        <h1 className="font-sans font-medium text-gray-500 ml-3 mt-2">
          Transaction
        </h1>
        <div className="flex justify-between items-center gap-10">
          <Button
            className="flex items-center justify-around gap-2 text-lg bg-gray-100 p-3 rounded-lg py-7"
            onClick={() => onFilterChanged("all")}
          >
            <SwapOutlined />
            <p>
              All Transaction{" "}
              <span className="ml-5 font-bold  text-2xl text-[#82866b]  font-sans">
                ${totalAmount}
              </span>
            </p>
          </Button>
          <Button
            className="flex items-center justify-around gap-2 text-lg bg-gray-100 p-3 rounded-lg py-7"
            onClick={() => onFilterChanged("complete")}
          >
            <SwapOutlined />
            <p>
              Completed{" "}
              <span className="ml-5 font-bold  text-2xl text-[#82866b] font-sans">
                ${completeAmount}
              </span>
            </p>
          </Button>
          <Button
            className="flex items-center justify-around gap-2 text-lg bg-gray-100 p-3 rounded-lg py-7"
            onClick={() => onFilterChanged("pending")}
          >
            <SwapOutlined />
            <p>
              Pending{" "}
              <span className="ml-5 font-bold  text-2xl text-[#82866b] font-sans">
                ${pendingAmount}
              </span>
            </p>
          </Button>
        </div>
      </div>
      <p className=" text-red-100 w-full border my-6"></p>

      <div>
        <Table dataSource={pendingTransaction} pagination={{ pageSize: 10 }}>
          <Column
            title="Trx ID"
            dataIndex="trxId"
            key="trxId"
            className="font-sans border-none"
            fixed="left"
            width={100}
            autoFit={true}
          />
          <Column
            title="Employee ID"
            dataIndex="employeeId"
            key="employeeId"
            className="font-sans border-none"
          />
          <Column
            title="Time & Date"
            dataIndex="dateTime"
            key="dateTime"
            className="font-sans border-none"
          />

          <Column
            title="Amount"
            key="amount"
            className="border-none font-sans"
            render={(_: any, record: any) => (
              <Space size="middle" className="font-sans">
                {record.amount}
                <span className="font-sans">Cents</span>
              </Space>
            )}
          />
          <Column
            title="Status"
            key="action"
            className="font-sans border-none"
            render={(_: any, record: any) => (
              <Space size="middle">
                <Button
                  className={`font-bold border-none font-sans ${
                    record?.status === "pending"
                      ? "bg-yellow-50"
                      : "bg-gray-200"
                  } `}
                >
                  <span className="font-sans">{record.status}</span>
                </Button>
              </Space>
            )}
          />
          <Column
            title="Action"
            key="userID"
            dataIndex="userID"
            className="font-sans border-none"
            render={(_: any, record: IEmployeeTransaction) => (
              <Space size="middle">
                <Link href={` transaction/${record.employeeId}`}>
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
