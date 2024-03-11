'use client'
import { AllImage } from '@/assets/AllImge'
import { Divider } from 'antd'
import Image, { StaticImageData } from 'next/image'
import { it } from 'node:test'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { HiDotsVertical } from "react-icons/hi";
export type IReview = {
    _id: number;
    title: string;
    user: {
        image: StaticImageData | string;
        name: string;
    };
    feedback: {
        rating: number;
    };
    date: string;
}
export default function ShopReview({ shopId }: { shopId: string }) {
    const data: IReview[] = [
        {
            _id: 1,

            title: 'Lorem ipsum dolor sit amet consectetur. Proin ut malesuada aliquet erat malesuada donec risus quis.',
            user: {
                image: AllImage.man,
                name: "sampod"
            },
            feedback: {
                rating: 4.5,

            },

            date: "11 Nov, 2023",

        },
        {
            _id: 2,

            title: 'Lorem ipsum dolor sit amet consectetur. Proin ut malesuada aliquet erat malesuada donec risus quis.',
            user: {
                image: AllImage.man,
                name: "sampod"
            },
            feedback: {
                rating: 4.5,

            },

            date: "11 Nov, 2023",

        }, {
            _id: 3,

            title: 'Lorem ipsum dolor sit amet consectetur. Proin ut malesuada aliquet erat malesuada donec risus quis.',
            user: {
                image: AllImage.man,
                name: "sampod"
            },
            feedback: {
                rating: 4.5,

            },

            date: "11 Nov, 2023",

        }, {
            _id: 4,

            title: 'Lorem ipsum dolor sit amet consectetur. Proin ut malesuada aliquet erat malesuada donec risus quis.',
            user: {
                image: AllImage.man,
                name: "sampod"
            },
            feedback: {
                rating: 4.5,

            },

            date: "11 Nov, 2023",

        }, {
            _id: 5,

            title: 'Lorem ipsum dolor sit amet consectetur. Proin ut malesuada aliquet erat malesuada donec risus quis.',
            user: {
                image: AllImage.man,
                name: "sampod"
            },
            feedback: {
                rating: 4.5,

            },

            date: "11 Nov, 2023",

        }, {
            _id: 6,

            title: 'Lorem ipsum dolor sit amet consectetur. Proin ut malesuada aliquet erat malesuada donec risus quis.',
            user: {
                image: AllImage.man,
                name: "sampod"
            },
            feedback: {
                rating: 4.5,

            },

            date: "11 Nov, 2023",

        },
    ]

    return (
        <div className="p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md ">

            <div className='flex items-center justify-start gap-1 font-semibold'><IoIosArrowBack style={{ marginBottom: "2px" }} /> Shop Review</div>
            <Divider style={{ backgroundColor: "#C6C7BB" }} />
            <div className='space-y-2'>
                {
                    data.map((item: IReview) => <div className='bg-[#F3F3F0] rounded-lg p-3' key={item._id}>

                        <div className='flex justify-between items-start'>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src={item?.user?.image || AllImage.notFoundImage} alt='' className='w-10 h-10 rounded-full' width={300} height={300} />
                                <p>{item.user.name}</p>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Image src={AllImage.ratingIcon} alt='' width={100} height={100} className='w-4' />
                                <p>({item.feedback.rating})</p>
                                <HiDotsVertical />
                            </div>
                        </div>
                        <div className='mt-1'>
                            <p>{item.title}</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-[#82866B]'>{item.date}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
