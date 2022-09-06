import React from "react";
import "../styles/style.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter
} from "reactstrap";

const Post = ({ post: { title, body,
imgUrl, author,category }, index }) => {
return (

<div className="container my-3"style={{ margin: 0, width: "33%" }}>
          <Card style={{ margin: 5 }}>
            <CardImg top width="100%" src={imgUrl} alt="Card image cap" />
            <CardBody style={{ padding: 15 }}>
              <CardTitle style={{ fontWeight: "bold" }}>{title}</CardTitle>
              <CardText>{body}</CardText>
            </CardBody>
            <CardFooter style={{ padding: 15 }}>
              <small className="text-muted">{author}</small>
            </CardFooter>
          </Card>
        </div>

);
};

export default Post;
