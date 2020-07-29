import React, { Component } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

export class ProductTable extends Component {
  state = {
    show: false,
    form: {
      product_name: "",
      product_type: "",
      product_quantity: "",
      isEdit: false,
    },
    btnName: "Save Changes",
  };

  isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmpty(this.props.productE)) {
      this.setState({
        form: { ...this.props.productE, isEdit: true },
      });
    }
  }

  handleModal = () => {
    this.setState({ show: !this.state.show });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  onDelete = () => {
    // console.log("Product deleted");
    this.props.onDelete(this.props.product.product_id);
  };

  onEdit = () => {
    // console.log("Product Edited");
    this.props.onEdit(this.props.product);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

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
    const {
      product_id,
      product_name,
      product_type,
      product_quantity,
    } = this.props.product;
    return (
      <>
        <tr>
          <td>{product_id}</td>
          <td>{product_name}</td>
          <td>{product_type}</td>
          <td>{product_quantity}</td>
          <td>
            <Button
              variant="primary"
              onClick={() => {
                this.onEdit();
                this.handleModal();
              }}
            >
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={this.onDelete}>
              Delete
            </Button>
          </td>
        </tr>

        <Modal show={this.state.show} onHide={this.handleModal}>
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
            <Button variant="secondary" onClick={this.handleModal}>
              Close
            </Button>
            <Button
              className="submit-button"
              variant="primary"
              onClick={this.onFormSubmit}
            >
              {this.state.btnName}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
