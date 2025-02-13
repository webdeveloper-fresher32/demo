import React, { Suspense, lazy } from "react";
import { Button, Layout, Menu, Typography } from "antd";
import { HomeOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import Grid from "./Grid";

const LazyComponent = lazy(() => import("./LazyComponent")); // Lazy load component

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<SearchOutlined />}>
            Search
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "50px", height: "100vh" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Typography.Title> Hello </Typography.Title>
          <RightOutlined />
          <Grid />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          bottom: 0,
          position: "sticky",
        }}
      >
        <div style={{ backgroundColor: "lightgray",padding:"50px" }}>Im footer</div>
      </Footer>
    </Layout>
  );
}

export default App;
