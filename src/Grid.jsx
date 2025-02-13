import { Col, Row } from "antd";

export default function Grid() {
  return (
    <div>
      <Row style={{ background: "#0092ff", padding: "8px 0" }}>
        <Col span={24}>col</Col>
      </Row>
      <Row >
        <Col span={12} style={{ background: "#00a2ae", padding: "8px 0" }}>col-12</Col>
        <Col span={12} style={{ background: "#00a2ae", padding: "8px 0" }}>col-12</Col>
      </Row >
      <Row style={{ background: "#cdcdcd", padding: "8px 0" }}>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row style={{ background: "#FF0000", padding: "8px 0" }}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
  );
}
