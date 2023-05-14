import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className=" App d-flex flex-column flex-nowrap align-items-center  w-100">
        <ul className="list-unstyled pt-xl-4 d-flex justify-content-between align-items-center" style={{ margin: '20px 0' }}>
  <li>
    <Link className="btn btn-success mb-3 btn-lg p-3" role="group" to="/">Invoices</Link>
  </li>
  <li>
    <Link className="btn btn-danger mb-3 btn-lg p-3" role="group" to="/create">Create Invoice</Link>
  </li>
</ul>





          <Container>
            <Routes>
              <Route path="/" element={<InvoiceList />} />
              <Route path="/create" element={<InvoiceForm />} />
            </Routes>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
