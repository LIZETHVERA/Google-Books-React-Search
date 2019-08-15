import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}



// BookListItem renders a bootstrap list item containing data from the books api call

export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  href,
  description,
 

}) {

  
  return (

    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Authors: {authors}</p>
            <p>Description: {description}</p>
            <a className="btn btn-primary" rel="noreferrer noopener" target="_blank" href={href}>
              info Link!
            </a>
            <button
              className="waves-effect waves-light blue btn"
       
            >
              save</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
