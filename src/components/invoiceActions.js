import { ADD_INVOICE, EDIT_INVOICE, DELETE_INVOICE } from './invoiceTypes';

export const addInvoice = (invoice) => {
  return {
    type: ADD_INVOICE,
    payload: invoice,
  };
};

export const editInvoice = (invoice) => {
  return {
    type: EDIT_INVOICE,
    payload: invoice,
  };
};

export const deleteInvoice = (invoiceId) => {
  return {
    type: DELETE_INVOICE,
    payload: invoiceId,
  };
};
