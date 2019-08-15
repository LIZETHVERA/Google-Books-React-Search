import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";



class App extends Component {
  state = {
    results: [],
    search: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get results update the results state
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="search"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="lg-12">
              {this.state.results === undefined ? (
                <h4 className="text-center">No Books to Display</h4>
              ) : (
                  <BookList>
                    {this.state.results.map(book => {
                  
                      return (
                        <BookListItem
                          key={book.volumeInfo.title}
                          title={book.volumeInfo.title}
                          thumbnail={book.volumeInfo.imageLinks.thumbnail}
                          authors={book.volumeInfo.authors}
                          description={book.volumeInfo.description}
                          href={book.volumeInfo.infoLink}
                         />
                      );
                    })}
                  </BookList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
