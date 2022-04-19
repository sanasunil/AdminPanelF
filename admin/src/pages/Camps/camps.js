import React from 'react';
import MUIDataTable from "mui-datatables";

function Camps() {
  const columns = ["Name", "Place", "Active", "Coordinator","Action"];

const data = [
 ["Camp 1", "Hamdan", "Yes", "Nazar","edit/delete"],
 
];

const options = {
  filterType: 'checkbox',
};

  return (
    <div>

<MUIDataTable
  title={"Camps List"}
  data={data}
  columns={columns}
  options={options}
/>
    </div>
  )
}

export default Camps