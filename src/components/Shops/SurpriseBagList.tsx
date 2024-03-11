'use client'
import { AllImage } from '@/assets/AllImge'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RiShoppingBagLine } from "react-icons/ri";
export type IOrderStatus = "available" | "reserved" | "expired"
export enum ENUM_ORDER_STATUS {
    AVAILABLE = 'available',
    RESERVED = 'reserved',
    EXPIRED = 'expired'
}
export type ISupriseBage = {
    _id: string;
    image: StaticImageData | string;
    title: string;
    bag_no: string;
    date: string[];
    order_status?: IOrderStatus;
}
export default function SurpriseBagList({ shopId }: { shopId: string }) {

    const data: ISupriseBage[] = [

        {
            _id: "ashafdsdfhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "reserved",


        },
        {
            _id: "ashdfhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#002',
            date: ["07/02/24", "07/02/25",],
            order_status: "reserved",


        },
        {
            _id: "ashdfsadfashjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#003',
            date: ["07/02/24", "07/02/25",],
            order_status: "reserved",


        },
        {
            _id: "ashdfsadfasdhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "available",


        },
        {
            _id: "ashdadsffswerdfsfhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "expired",


        },
        {
            _id: "ashdasdfgfwerhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "available",


        },
        {
            _id: "ashdasdfgererfhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "available",


        },
        {
            _id: "ashdasderefgfhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "available",


        },
        {
            _id: "ashdasdfgfasdferhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "available",


        },
        {
            _id: "ashdasdfgfsfdsdfhjs",
            image: AllImage.burger,
            title: "Surprise Bag",
            bag_no: '#001',
            date: ["07/02/24", "07/02/25",],
            order_status: "available",


        },
    ]
    const [active, setActive] = useState<Partial<ISupriseBage>>(data[0])


    return (
        <div className="p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md ">


            <div className="font-sans font-medium text-gray-500 text-md lg:text-xl  gap-1">
                <div className='flex items-center justify-start gap-1 font-semibold'><IoIosArrowBack /> Surprise Bag List</div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 border-t-[2px] border-[#82866B] w-full mt-2 '>

                    <div className={`space-y-3  my-2 border-r-2 pr-2 border-[#82866B] overflow-y-auto max-h-screen`}>
                        {
                            data.map((item: ISupriseBage) => <div onClick={() => (setActive(item))} className={`rounded-lg p-3 flex justify-between items-start ${active._id === item._id ? "bg-[#82866B] text-white" : "bg-[#F3F3F0] text-black"} border border-[#82866B]`} key={item._id}>
                                <div className='flex justify-start items-start gap-2'>
                                    <Image src={item.image || AllImage.notFoundImage} alt='' className='w-24  rounded-lg' width={300} height={300} />
                                    <div className='flex flex-col justify-between items-start'>
                                        <p className=' font-medium text-lg '>{item.title}</p>
                                        <p className='font-medium text-[16px]'>Bag no: {item.bag_no}</p>
                                        <p className='font-medium text-[16px]'>Date: {item.date[0]} - {item.date[1]}</p>
                                        {/* <p className='text-gray-500 font-medium'>{item.date[1]}</p> */}
                                    </div>
                                </div>
                                <div className=''>
                                    {item.order_status === ENUM_ORDER_STATUS.AVAILABLE ? <button className='
                                    bg-green-500 text-white py-1 px-2 rounded text-sm capitalize'>{item.order_status}</button> : item.order_status === ENUM_ORDER_STATUS.RESERVED ? <button className='
                                    bg-[#FCE6E6] text-red-500  py-1 px-2 rounded text-sm capitalize'>{item.order_status}</button> : <button className='
                                    bg-[#E9E9E9] text-[#989898] py-1 px-2 rounded text-sm capitalize'>{item.order_status}</button>}
                                </div>
                            </div>)
                        }
                    </div>
                    <div className='mt-2'>
                        <div className='flex justify-between items-start'>
                            <Image src={active.image
                                || AllImage.notFoundImage} alt='' width={700} height={700} className='w-52 h-32 rounded-xl' />
                            <div className=''>
                                {active.order_status === ENUM_ORDER_STATUS.AVAILABLE ? <button className='
                                    bg-green-500 text-white py-1 px-2 rounded text-xs capitalize'>{active.order_status}</button> : active.order_status === ENUM_ORDER_STATUS.RESERVED ? <button className='
                                    bg-[#FCE6E6] text-red-500  py-1 px-2 rounded text-xs capitalize'>{active.order_status}</button> : <button className='
                                    bg-[#E9E9E9] text-[#989898] py-1 px-2 rounded text-xs capitalize'>{active.order_status}</button>}
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center font-semibold text-[#82866B]'>

                                <p className=' font-medium text-lg '>{active.title}</p>
                                <p className='font-medium text-lg'>$3.50</p>
                            </div>
                            <p className='font-medium text-[16px]'>Bag no: {active.bag_no}</p>
                            <p className='font-medium text-[16px]'>Pick up: 12:30pm- 4:30 am</p>

                        </div>
                        <div className='flex justify-start items-start gap-2 my-2'>
                            <RiShoppingBagLine style={{ fontSize: "25px" }} />
                            <div className='space-y-1'>
                                <h4 className='text-lg'>What you could get</h4>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Ipsum eget nec id semper massa tincidunt risus urna. Mattis diam id nibh ultrices a ut. Viverra massa viverra ut massa leo. Vel aliquam aliquam viverra fusce pellentesque.</p>
                            </div>
                        </div>
                        <div className='space-y-2 mt-2'>
                            <h4>Order Information</h4>
                            <div className='flex justify-between items-center text-sm'>
                                <p className='text-[#82866B]'>User Name</p>
                                <p>Wade Warren</p>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <p className='text-[#82866B]'>User ID</p>
                                <p>#1234</p>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <p className='text-[#82866B]'>Order ID</p>
                                <p>#ABCDE</p>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <p>Total Amount</p>
                                <p>$3.50</p>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <p className='text-[#82866B]'>Payment Method</p>
                                <p>Debit Card</p>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <p className='text-[#82866B]'>Pick up Hour</p>
                                <p>Debit Card</p>
                            </div>
                        </div>
                        <button className='border rounded-md border-[#82866B] w-full p-3 text-center text-lg my-3 text-[#82866B]'>
                            Pick Up Starts In 03:44:21
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
