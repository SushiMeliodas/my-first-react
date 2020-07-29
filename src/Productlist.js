import React, { Component } from "react";
import { Table, Container, Col, Row } from "react-bootstrap";
// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import styled from "styled-components";
import { ProductTable } from "./components/ProductTable";
import Axios from "axios";
import { NewProductModal } from "./components/NewProductModal";
// import Loader from "./components/Loader";

const Styles = styled.div``;

export class Productlist extends Component {
  state = {
    products: [],
    productE: {},
    // loader: false,
    url: "http://localhost/my-app-rest-api/public/api/product",
  };

  getProducts = async () => {
    // this.setState({ loader: true });
    const products = await Axios.get(this.state.url);
    this.setState({ products: products.data });
    // this.setState({ products: products.data, loader: false });
  };

  deleteProducts = async (product_id) => {
    // this.setState({ loader: true });
    await Axios.delete(`${this.state.url}/${product_id}`);

    this.getProducts();
  };

  createProducts = async (data) => {
    await Axios.post(this.state.url, {
      product_name: data.product_name,
      product_type: data.product_type,
      product_quantity: data.product_quantity,
    });

    this.getProducts();
  };

  editProducts = async (data) => {
    await Axios.put(`${this.state.url}/${data.product_id}`, {
      product_name: data.product_name,
      product_type: data.product_type,
      product_quantity: data.product_quantity,
    });

    this.getProducts();
  };

  componentDidMount() {
    this.getProducts();
  }

  onDelete = (product_id) => {
    // console.log("product list", product_id);
    this.deleteProducts(product_id);
  };

  onEdit = (data) => {
    // console.log("product list", data);
    this.setState({ productE: data });
  };

  onFormSubmit = (data) => {
    // console.log("app", data);
    if (data.isEdit) {
      this.editProducts(data);
    } else {
      this.createProducts(data);
    }
  };

  render() {
    return (
      <Styles>
        <Container className="data">
          <Container>
            <Row>
              <Col>
                <h2>Product List</h2>
              </Col>
              <Col sm={1}>
                <NewProductModal onFormSubmit={this.onFormSubmit} />
              </Col>
            </Row>
          </Container>
          <Table
            striped
            bordered
            hover
            responsive="lg"
            variant="dark"
            size="sm"
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Item Name</th>
                <th>Item Type</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.products.map((product) => {
                return (
                  <ProductTable
                    key={product.product_id}
                    product={product}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                    productE={this.state.productE}
                    onFormSubmit={this.onFormSubmit}
                  />
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Styles>
    );
  }
}
