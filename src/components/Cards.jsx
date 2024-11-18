import React from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const Cards = ({ image, title, description, rating }) => {
  return (
    <Card style={{ width: "18rem"}} className="text-center h-100">
      <Card.Img
        variant="top"
        src={image}
        style={{  objectFit: "cover" }}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        {/* Tooltip for truncated description */}
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${title}`}>
              {description}
            </Tooltip>
          }
        >
          <Card.Text className="text-truncate" style={{ maxWidth: "16rem" }}>
            {description}
          </Card.Text>
        </OverlayTrigger>

        <Button className="primary">More Info</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Rating: {rating}</small>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
