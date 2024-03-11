"use client";

import { authKey } from "@/constants/storageKey";
import { setToLocalStorage } from "@/utils/local-storage";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../GlobalContextApi/GlobalContextApi";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter();
  const { userInfo, userInfoLoading } = useGlobalContext();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);

    // setToLocalStorage(authKey, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlibG9zc29tbGVhcm4yNDBAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWQiOiI2NTk4ZTM2ZDk3NmMxODcwYzYwMzE2NTciLCJpYXQiOjE3MDg3NTExNzksImV4cCI6MTcwODc1MTQ3OX0.v0feQR5GjBNbT2hzhwu_pYe9D210RBhmBGwh3bVoCkk")
    localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlibG9zc29tbGVhcm4yNDBAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWQiOiI2NTk4ZTM2ZDk3NmMxODcwYzYwMzE2NTciLCJpYXQiOjE3MDg3NTExNzksImV4cCI6MTcwODc1MTQ3OX0.v0feQR5GjBNbT2hzhwu_pYe9D210RBhmBGwh3bVoCkk"
    );
    // router.push("/dashboard");
    setTimeout(() => {
      router.push("/dashboard");
    }, 200);
    console.log("dashboard");
  };

  // useEffect(() => {
  //   if (userInfo?.role) {
  //     router.push("/dashboard");
  //   }
  // }, [router, userInfo]);

  return (
    <div className="py-5 px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <div className="mb-6">
        <h1 className="font-sans">Welcome</h1>
        <p className="font-sans">Please sign in for better experience</p>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title level={5}>
          <span className="font-sans">Email</span>{" "}
        </Typography.Title>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter your email"
          />
        </Form.Item>
        <Typography.Title level={5}>Password</Typography.Title>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>
                <span className="font-sans">Remember me</span>
              </Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" href="/forgot-password">
              <span className="font-sans">Forgot password</span>
            </Link>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            type="default"
            htmlType="submit"
            className="login-form-button w-full"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
