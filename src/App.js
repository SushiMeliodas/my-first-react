import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { ProductForm } from "./ProductForm";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { Productlist } from "./Productlist";
// import Footer from "./components/Footer";
// import { EditProduct } from "./EditProduct";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/productform" component={ProductForm} />
              <Route exact path="/productlist" component={Productlist} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              {/* <Route exact path="/editproduct" component={EditProduct} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
