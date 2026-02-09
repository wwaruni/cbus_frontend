import { useEffect, useState } from "react";
import CustomerListTable from "../../components/CustomerListTable";
import type { CustomerDetails } from "../../constants/types";
import type { GridPaginationModel } from "@mui/x-data-grid";
import api from "../../api/client";

const Dashboard = () => {
  const [rows, setRows] = useState<CustomerDetails[]>([]);
  const [rowCount, setRowCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      setLoading(true);

      try { 
        const response = await api.get(
          `/customers?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
        );
  
        const data = await response.data;
  
        setRows(data.items);
        setRowCount(data.total);

      } catch(error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCustomerDetails();
  }, [paginationModel.page, paginationModel.pageSize]);

  return (
    <>
      <CustomerListTable
        customerDetails={rows}
        setPaginationModel={setPaginationModel}
        loading={loading}
        paginationModel={paginationModel}
        rowCount={rowCount}
      />
    </>
  );
};

export default Dashboard;
