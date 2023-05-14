import React, { Component } from 'react';

class InvoiceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invoices: [
        {
          id: 1,
          invoiceNumber: 'INV-001',
          customerName: 'John Doe',
          amount: '$100',
        },
        {
          id: 2,
          invoiceNumber: 'INV-002',
          customerName: 'Megan Fox',
          amount: '$200',
        },
        {
          id: 3,
          invoiceNumber: 'INV-003',
          customerName: 'Bob Smith',
          amount: '$300',
        },
      ],
      editingInvoiceId: null,
      editedInvoice: {},
      viewingInvoiceId: null,
    };
  }

  handleViewClick = (id) => {
    console.log(`View button clicked for invoice ID ${id}`);
    this.setState({ viewingInvoiceId: id });
  };

  handleEditClick = (id) => {
    console.log(`Edit button clicked for invoice ID ${id}`);
    const invoice = this.state.invoices.find((invoice) => invoice.id === id);
    this.setState({ editingInvoiceId: id, editedInvoice: { ...invoice } });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editedInvoice: {
        ...prevState.editedInvoice,
        [name]: value,
      },
    }));
  };

  handleSaveClick = () => {
    console.log(`Save button clicked`);
    const { editingInvoiceId, editedInvoice } = this.state;
    const newInvoices = this.state.invoices.map((invoice) =>
      invoice.id === editingInvoiceId ? editedInvoice : invoice
    );
    this.setState({ invoices: newInvoices, editingInvoiceId: null, editedInvoice: {} });
    // Here you could save the updated invoice details to the backend or perform any necessary actions
  };

  handleCancelClick = () => {
    console.log(`Cancel button clicked`);
    this.setState({ editingInvoiceId: null, editedInvoice: {} });
  };

  handleDeleteClick = (id) => {
    console.log(`Delete button clicked for invoice ID ${id}`);
    const newInvoices = this.state.invoices.filter((invoice) => invoice.id !== id);
    this.setState({ invoices: newInvoices });
  };

  render() {
    return (
      <div>
        <h2>Invoice List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Customer Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  {this.state.editingInvoiceId === invoice.id ? (
                    <input
                      type="text"
                      name="invoiceNumber"
                      value={this.state.editedInvoice.invoiceNumber || ''}
                      onChange={this.handleInputChange}
                    />
                  ) : (
                    invoice.invoiceNumber
                  )}
                </td>
                <td>
                  {this.state.editingInvoiceId === invoice.id ? (
                    <input
                      type="text"
                      name="customerName"
                      value={this.state.editedInvoice.customerName || ''}
                      onChange={this.handleInputChange}
                    />
                  ) : (
                    invoice.customerName
                  )}
                </td>
                <td>
                {this.state.editingInvoiceId === invoice.id ? (
<input
type="text"
name="amount"
value={this.state.editedInvoice.amount || ''}
onChange={this.handleInputChange}
/>
) : (
invoice.amount
)}

</td>
<td>
  {this.state.editingInvoiceId === invoice.id ? (
    <>
      <button className="btn btn-success" onClick={this.handleSaveClick}>
        Save
      </button>{' '}
      <button className="btn btn-secondary" onClick={this.handleCancelClick}>
        Cancel
      </button>
    </>
  ) : (
    <>
      <button className="btn btn-primary" onClick={() => this.handleViewClick(invoice.id)}>
        View
      </button>{' '}
      <button className="btn btn-success" onClick={() => this.handleEditClick(invoice.id)}>
        Edit
      </button>{' '}
      <button className="btn btn-danger" onClick={() => this.handleDeleteClick(invoice.id)}>
        Delete
      </button>
    </>
  )}
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
}
export default InvoiceList;