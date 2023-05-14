import { ADD_INVOICE, EDIT_INVOICE, DELETE_INVOICE } from './invoiceTypes';

const initialState = {
  invoices: [],
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };
    case EDIT_INVOICE:
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice.id === action.payload.id ? action.payload : invoice
        ),
      };
    case DELETE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(
          (invoice) => invoice.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default invoiceReducer;
