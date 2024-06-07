"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Data } from "../Components/Data";
const page = () => {
  const [rowData, setRowdata] = useState([...Data]);
  const [column, setColumn] = useState([
    { field: "_id", headerName: "User ID",filter:true,floatingFilter:true },
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      filter: true,
      floatingFilter: true,
    },
    { field: "dob", headerName: "Date of Birth", flex: 2 },
    {
      headerName: "Address",
      field: "address",
      valueFormatter: ({ value }) => {
        const { street, town, postode } = value;
        return `${street}, ${town}, ${postode}`;
      },
      flex: 3,
    },
    {
      field: "telephone",
      headerName: "Contact",
      flex: 2,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "pets",
      headerName: "Pets",
      flex: 2,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "score",
      headerName: "Obtained Scores",
      flex: 1,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 3,
      filter: true,
      floatingFilter: true,
    },
    { field: "verified", headerName: "Verified or Not", flex: 1,editable:true },
    { field: "salary", headerName: "Salary", flex: 1 },
  ]);
  const getRowStyle = params => {
    
    if (params.data.verified !==true ) {
      return { background: "red" };
    }
    if(params.data.verified=== true && params.data.score >5){
        return{background:'green'}
    }
    
  };
  return (
    <div className="ag-theme-quartz-dark h-screen  overflow-x-auto" >
      <AgGridReact
        rowData={rowData}
        columnDefs={column}
        pagination={true}
        getRowStyle={getRowStyle}
    
      />
    </div>
  );
};

export default page;
