import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function GenerateInvoice() {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [612, 792]
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice-001.pdf');
  });
}

class InvoiceModal extends React.Component {
  render() {
    const {
      showModal,
      closeModal,
      info,
      currency,
      total,
      items,
      subTotal,
      taxAmount,
      discountAmount
    } = this.props;
    //changes

    return (
      <div>
        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <div id="invoiceCapture">
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
              <div className="w-100">
                <h4 className="fw-bold my-2">{info.billFrom || 'John Uberbacher'}</h4>
                <h6 className="fw-bold text-secondary mb-1">
                  Invoice #: {info.invoiceNumber || ''}
                </h6>
              </div>
              <div className="text-end ms-4">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
                <h5 className="fw-bold text-secondary">
                  {currency} {total}
                </h5>
              </div>
            </div>
            <div className="p-4">
              <Row className="mb-4">
                <Col md={4}>
                  <div className="fw-bold">Billed to:</div>
                  <div>{info.billTo || ''}</div>
                  <div>{info.billToAddress || ''}</div>
                  <div>{info.billToEmail || ''}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold">Billed From:</div>
                  <div>{info.billFrom || ''}</div>
                  <div>{info.billFromAddress || ''}</div>
                  <div>{info.billFromEmail || ''}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold mt-2">Date Of Issue:</div>
                  <div>{info.dateOfIssue || ''}</div>
                </Col>
              </Row>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th>QTY</th>
                    <th>DESCRIPTION</th>
                    <th className="text-end">PRICE</th>
                    <th className="text-end">
                    SUBTOTAL</th>
<th className="text-end">TAX</th>
<th className="text-end">DISCOUNT</th>
<th className="text-end">TOTAL</th>
</tr>
</thead>
<tbody>
{items.map((item, index) => (
<tr key={index}>
<td>{item.quantity}</td>
<td>{item.description}</td>
<td className="text-end">{currency} {item.price}</td>
<td className="text-end">{currency} {item.subtotal}</td>
<td className="text-end">{currency} {item.tax}</td>
<td className="text-end">{currency} {item.discount}</td>
<td className="text-end">{currency} {item.total}</td>
</tr>
))}
</tbody>
</Table>
<Row className="mt-4">
<Col md={6}>
<div className="fw-bold">Subtotal:</div>
<div>{currency} {subTotal}</div>
</Col>
<Col md={6}>
<div className="fw-bold text-end">Tax:</div>
<div className="text-end">{currency} {taxAmount}</div>
</Col>
</Row>
<Row className="mt-2">
<Col md={6}>
<div className="fw-bold">Discount:</div>
<div>{currency} {discountAmount}</div>
</Col>
<Col md={6}>
<div className="fw-bold text-end">Total:</div>
<div className="text-end">{currency} {total}</div>
</Col>
</Row>
</div>
</div>
<Modal.Footer>
<Button variant="secondary" onClick={closeModal}>
Close
</Button>
<Button variant="primary" onClick={GenerateInvoice}>
<BiPaperPlane className="mb-1" /> Send
</Button>
<Button variant="success" onClick={GenerateInvoice}>
<BiCloudDownload className="mb-1" /> Download PDF
</Button>
</Modal.Footer>
</Modal>
</div>
);
}
}

export default InvoiceModal;