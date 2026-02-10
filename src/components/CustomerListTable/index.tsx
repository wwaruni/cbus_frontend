import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { CustomerDetails } from "../../constants/types";
import Paper from "@mui/material/Paper";
import type { GridPaginationModel } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "customerId",
    headerName: "Customer ID",
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "registrationDate",
    headerName: "Registration Date",
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
];

interface CustomerListProps {
  customerDetails: CustomerDetails[];
  setPaginationModel: any;
  loading: boolean;
  paginationModel: GridPaginationModel;
  rowCount: number;
}
/**
 * @param customerDetails - List of customers to be displayed
 * @param setPaginationModel - Function to set the pagination model
 * @param loading - Loading state
 * @param paginationModel - Pagination model
 * @returns CustomerListTable component
 */
const CustomerListTable = ({
  customerDetails,
  setPaginationModel,
  loading,
  paginationModel,
  rowCount,
}: CustomerListProps) => {
  const prepareRowData = (customerDetails: CustomerDetails[]) => {
    return customerDetails.map((customer: CustomerDetails) => ({
      id: customer.id,
      customerId: customer.customer_id,
      fullName: customer.full_name,
      email: customer.email,
      registrationDate: customer.registration_date,
    }));
  };

  return (
    <>
      {loading ? (
        "Loading........"
      ) : (
        <Paper sx={{ height: "100%", width: "100%" }}>
          <h2>Customer Dashboard</h2>
          {customerDetails ? (
            <DataGrid
              rows={prepareRowData(customerDetails)}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              paginationMode="server"
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              rowCount={rowCount}
              aria-label="Customer List"
            />
          ) : (
            "No Data"
          )}
        </Paper>
      )}
    </>
  );
};

export default CustomerListTable;
