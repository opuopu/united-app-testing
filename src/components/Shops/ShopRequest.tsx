'use client'
import { AllImage } from '@/assets/AllImge';
import { USER_ROLE } from '@/constants/role';
import { Col, Row } from 'antd'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiLocationOn } from 'react-icons/ci';
export type IShopCart = {
    _id: string;
    title: string;
    image: {
        link: string | StaticImageData;
    };
    location: {
        city: string;
        country: string;
    };
    rating: {
        star: number;
        message: string;
    };
}
export default function ShopRequest() {
    const data: IShopCart[] | any = [{
        _id: "1",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, {
        _id: "2",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, , {
        _id: "3",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, {
        _id: "4",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, {
        _id: "5",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, {
        _id: "99",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, {
        _id: "6",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, {
        _id: "7",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }, {
        _id: "8",
        title: "Turkish Café",
        image: {
            link: AllImage.shoplist,
        },
        location: {
            city: "Dhaka",
            country: "Bangladesh",
        },
        rating: {
            star: 4.5,
            message: "Very good",
        }
    }]
    return (
        <div>

            <Row gutter={[16, 16]}>

                {
                    data.map((cart: IShopCart) => <Col xs={24} md={12} lg={8} xl={6} key={cart._id}>
                        <div className='space-y-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl p-3'>

                            <Image alt='' src={cart.image.link} className="w-full h-full rounded-xl" />
                            <div className='space-y-3'>
                                <div className='flex justify-between items-center text-2xl'>

                                    <h2 className="font-sans font-normal text-black text-xl">
                                        {cart.title}
                                    </h2>
                                    <p className="text-black flex gap-2 items-center justify-center ">
                                        <Image src={AllImage.ratingIcon} width={50} height={50} alt='' className='w-6 h-6' />  <span className='text-lg'>({cart.rating.star})</span>
                                    </p>
                                </div>
                                <p className="text-[#686868] inline-flex items-center gap-2 text-sm">
                                    <CiLocationOn />  {cart.location.city}
                                </p>

                                <div className='grid grid-cols-2 gap-3 px-1'>
                                    <button className='bg-[#82866B] rounded p-2 text-white '>Accept</button>
                                    <button className='border rounded border-[#82866B]'>Decline</button>
                                </div>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </div>
    )
}
