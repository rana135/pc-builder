import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import Link from "next/link";
import Ssgmenu from "@/components/ssgmenu/ssgmenu";
const { Header, Content, Footer } = Layout;
import { Button } from "antd";
import Dropd from "@/components/dropd/dropd"; 

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      {/* navbar */}
      <Dropd />

      {children}

      {/* footer */}
      <footer className="footer footer-center p-4 text-base-content bg-black">
        <div className="container text-center">
          <p className="text-white">
            Copyright © Nisharga Kabir. All rights reserved.
          </p>
        </div>
      </footer>
    </Layout>
  );
};
export default RootLayout;
