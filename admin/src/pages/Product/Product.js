import React from 'react'
import Table from "../dashboard/components/Table/Table"
import MUIDataTable from "mui-datatables";


function Product() {
  const columns = ["Name", "Category", "Price", "Image", "Description", "Action"];

const data = [
 ["Biriyani", "Lunch", "150", "Image","Description","edit/delete"],
 ["Porridge", "Breakfast", "70",  "Image","Description","edit/delete"],
 ["Grilled Fish", "Dinner", "300",  "Image","Description","edit/delete"],
 ["Biriyani", "Lunch", "150", "Image","Description","edit/delete"],
];

const options = {
  filterType: 'checkbox',
};

  return (

    <div>
      <MUIDataTable
  title={"Food List"}
  data={data}
  columns={columns}
  options={options}
/>
    </div>
  
  )
}

export default Product