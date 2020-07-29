import React, { Component } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
// import { MdAdd } from "react-icons/md";

export class NewProductModal extends Component {
  state = {
    show: false,
    form: {
      product_name: "",
      product_type: "",
      product_quantity: "",
    },
  };

  handleModal = () => {
    this.setState({ show: !this.state.show });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  onModalClose = () => {
    this.setState({
      form: {
        product_name: "",
        product_type: "",
        product_quantity: "",
      },
    });

    // document.querySelector(".form").reset();
  };

  onFormSubmit = () => {
    if (this.modalvalidation()) {
      //Send data from Modal Form to ProductList
      this.props.onFormSubmit(this.state.form);
    }
  };

  modalvalidation = () => {
    if (document.getElementsByName("product_name")[0].value === "") {
      alert("Enter Product Name");
      return false;
    }

    if (document.getElementsByName("product_type")[0].value === "") {
      alert("Enter Product Type");
      return false;
    }

    if (document.getElementsByName("product_quantity")[0].value === "") {
      alert("Enter Product Quantity");
      return false;
    }

    return true;
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleModal}>
          New
        </Button>

        <Modal
          show={this.state.show}
          // onHide={this.handleModal}
          onHide={() => {
            this.handleModal();
            this.onModalClose();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h2>Products</h2>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="product_name"
                      placeholder="Product Name"
                      onChange={this.handleChange}
                      value={this.state.form.product_name}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="product_type"
                      placeholder="Product Type"
                      onChange={this.handleChange}
                      value={this.state.form.product_type}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="email"
                      name="product_quantity"
                      placeholder="Enter Quantity"
                      onChange={this.handleChange}
                      value={this.state.form.product_quantity}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              // onClick={this.handleModal}
              onClick={() => {
                this.handleModal();
                this.onModalClose();
              }}
            >
              Close
            </Button>
            <Button
              className="submit-button"
              variant="primary"
              // onClick={this.onFormSubmit}
              onClick={() => {
                this.onFormSubmit();
                this.onModalClose();
              }}
            >
              Save Product
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default NewProductModal;
