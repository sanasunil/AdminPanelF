import React from 'react'
import MUIDataTable from "mui-datatables";

function Order() {
    const columns = ["Order Id", "Product Name", "Quantity","Customer", "Date","Price", "Status"];

const data = [
 ["113456", "Biriyani","2", "Ashik", "13/04/2022","150","Complete"],
 ["113256", "Water(ltr)", "8","Aman", "13/04/2022","150","Pending"],
 ["113256", "Water(ltr)", "8","Aman", "13/04/2022","150","Cancelled"],
];

const options = {
  filterType: 'checkbox',
};

  return (
    <div>
        <MUIDataTable
  title={"Order List"}
  data={data}
  columns={columns}
  options={options}
/>
    </div>
  )
}

export default Order