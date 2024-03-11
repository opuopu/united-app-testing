"use client";

import { useGlobalContext } from "@/components/GlobalContextApi/GlobalContextApi";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Drawer, Layout, Menu, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userInfo, userInfoLoading } = useGlobalContext()
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!userInfo?.role) {
      router.push("/login");
    } else if (userInfo?.role !== USER_ROLE.ADMIN) {
      router.back();
    }
    setIsLoading(false);
  }, [router, isLoading, userInfo?.role]);

  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin size="large"></Spin>
        </Space>
      </Row>
    );
  }

  return <>{children}</>;
};

export default AdminLayout;
