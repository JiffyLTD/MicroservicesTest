import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Post = ({post}) => {
  return (
    <div
      className="container px-4 py-5 mb-5"
      style={{ background: "#00183A" }}
      id="icon-grid"
    >
      <h2 className="pb-2 border-bottom link-light">{post.title}</h2>
      <Container>
        <Row>
          <Col sm='6'>
            <div className="text-start text-light fs-3">
                {post.desc}
            </div>
          </Col>
          <Col sm='6'>
            <div className="text-center text-light">
              <img
                width="500px"
                height="300px"
                src={post.imageUrl}
                alt="Здесь должна была быть картинка("
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Post;
