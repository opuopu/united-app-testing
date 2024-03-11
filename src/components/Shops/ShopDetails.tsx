
'use client'
import { AllImage } from '@/assets/AllImge';
import { Divider, Upload } from 'antd'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useGlobalContext } from '../GlobalContextApi/GlobalContextApi';

export type IShopDetails = {
    _id: string
}
export default function ShopDetails({ shopId }: { shopId: string }) {
    const { userInfo, userInfoLoading } = useGlobalContext()
    console.log("🚀 ~ ShopDetails ~ userInfo:", userInfo)
    const ShopDetails = {
        _id: "1",
        shop: {
            shopImage: AllImage.shoplist,
            shopTitle: "Turkish Café",
            shopRating: 4.5,

        },
        shopInfo: {
            address: "Plot 54358, Prime Plaza, CBDGaborone, Botswana",
            shop_category: "Cafe",
            shop_opening_hour: ["10:00 am", "09:00 pm"],
            shop_weekend: "Monday",
            About: "Lorem ipsum dolor sit amet consectetur. Et est morbi volutpat in. Erat mauris sed a aenean urna lectus in quisque. Suspendisse a dui ornare augue convallis. Volutpat rhoncus quisque dignissim dolor sit ipsum. Interdum varius nulla ultrices blandit. Erat quis proin amet arcu."
        },
        employeeDetails: {
            name: "Wade Warren",
            profile: AllImage.profileAvater,

        }

    }

    return (
        <div className="p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md ">
            <div className="font-sans font-medium text-gray-500 text-md lg:text-xl flex items-center justify-between gap-1"><div className='flex items-center justify-between gap-1'><IoIosArrowBack /> Shop Details</div> <div className='flex items-center justify-between gap-1'>
                <RiDeleteBin6Fill style={{ color: "red" }} /><p className=' '>Delete Shop</p></div>
            </div>
            <Divider />
            <div className='flex justify-between items-center  -mt-4'>
                <div className='flex items-center gap-3 '>
                    <Image src={ShopDetails.shop.shopImage} alt='' width={500} height={500} className='rounded  w-24 h-20' />
                    <p>{ShopDetails.shop.shopTitle}</p>
                    <p className='flex items-center gap-1'> <Image src={AllImage.ratingIcon} alt='' width={500} height={500} className='rounded-lg w-4 h-4' /> <span>({ShopDetails.shop.shopRating})</span></p>
                </div>
                <div >
                    <p>Employee Details</p>
                    <div className='flex justify-between gap-2 items-center bg-[#F3F3F0] p-3'>
                        <Image src={AllImage.man} alt='' width={500} height={500} className='rounded w-16' />
                        <p>{ShopDetails.employeeDetails.name}</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <p className='text-lg text-[#82866B] '>Information</p>
                <p>Address: {ShopDetails.shopInfo.address}</p>
                <p>Shop Category: {ShopDetails.shopInfo.shop_category}</p>
                <p>Shop Opening Hour: {ShopDetails.shopInfo.shop_opening_hour[0] + " - " + ShopDetails.shopInfo.shop_opening_hour[1]}</p>
                <p>Shop Weekend: Monday</p>
                <p>About Shop:</p>
                <p>{ShopDetails.shopInfo.About}</p>
            </div>
            <div className='my-2 space-y-2'>
                <h3>Documents</h3>
                <div>
                    <Upload name="avatar"
                        listType="picture-card"
                        className="avatar-uploader" ><button style={{ border: 0, background: 'none' }} type="button">
                            {<PlusOutlined />}
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-2 mt-2 md:mt-4 text-center'>
                <Link href={`/${userInfo?.role}/shops/shop-list/surprise-bag-list/${ShopDetails._id}`} className='border border-[#82866B] text-[#82866B] rounded-md p-4'>Surprise Bag List</Link>
                <Link href={`/${userInfo?.role}/shops/shop-list/shop-review/${ShopDetails._id}`} className='bg-[#82866B] rounded-md  p-4 text-white'>Shop Review</Link>
            </div>


        </div>
    )
}
