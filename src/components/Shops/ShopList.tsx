"use client";
import { AllImage } from "@/assets/AllImge";
import { Col, Divider, Row } from "antd";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { useGlobalContext } from "../GlobalContextApi/GlobalContextApi";
import { USER_ROLE } from "@/constants/role";
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
};

export default function ShopList() {
  const { userInfo, userInfoLoading } = useGlobalContext();

  if (userInfoLoading) {
    return <div>Loading...</div>;
  }
  console.log("🚀 ~ ShopList ~ userInfo:", userInfo);
  const data: IShopCart[] | any = [
    {
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
      },
    },
    {
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
      },
    },
    ,
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
  ];
  return (
    <div className="p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-white rounded-md ">
      <h1 className="font-sans font-medium text-gray-500">Shop List</h1>
      <Divider />
      <Row gutter={[16, 16]}>
        {data.map((cart: IShopCart) => (
          <Col xs={24} md={12} lg={8} xl={6} key={cart._id}>
            <div className="space-y-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl p-3">
              <Image
                alt=""
                src={cart.image.link}
                className="w-full h-full rounded-xl"
              />
              <div className="space-y-3">
                <div className="flex justify-between items-center text-2xl">
                  <h2 className="font-sans font-medium text-black text-2xl">
                    {cart.title}
                  </h2>
                  <p className="text-black flex gap-2 items-center justify-center ">
                    <Image
                      src={AllImage.ratingIcon}
                      width={50}
                      height={50}
                      alt=""
                      className="w-6 h-6"
                    />{" "}
                    <span className="text-lg">({cart.rating.star})</span>
                  </p>
                </div>
                <p className="text-[#686868] inline-flex items-center gap-2 text-sm">
                  <CiLocationOn /> {cart.location.city}
                </p>

                <div className="flex justify-center items-center">
                  <Link
                    href={`/${
                      userInfo?.role || USER_ROLE.ADMIN
                    }/shops/shop-list/details/${cart?._id}`}
                    className=" font-sans w-[40%] hover:text-gray-200  cursor-pointer text-center text-white rounded-lg p-2 mx-auto bg-[#82866B]"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
