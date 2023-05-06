import "./userData.css";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";

const UserData = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetching data from backend API //
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          name: item.name,
          ageSex: `${item.age} Y/${item.sex}`,
          mobile: item.mobile,
          address: `${item.address}, ${item.city}, ${item.state}, ${item.country}-${item.pincode}`,
          guardian: `${item.relation}  ${item.guardian_name}`,
          nationality: item.nationality,
        }));

        if ($.fn.DataTable.isDataTable(tableRef.current)) {
          // Table has already been initialized, do nothing
        } else {
          // Initialize the DataTable plugin
          $(tableRef.current).DataTable({
            data: formattedData,
            columns: [
              { title: "Name", data: "name", width: "80px" },
              { title: "Age/Sex", data: "ageSex", width: "50px" },
              { title: "Mobile", data: "mobile", width: "100px" },
              { title: "Address", data: "address", width: "200px" },
              { title: "Guardian Details", data: "guardian", width: "100px" },
              { title: "Nationality", data: "nationality", width: "50px" },
            ],
          });
        }
      });
  }, []);

  return (
    <div className="user__data">
      <table id="example" ref={tableRef} className="display">
        <thead className="table__head">
          <tr>
            <th style={{ width: "80px" }}>Name</th>
            <th style={{ width: "50px" }}>Age/Sex</th>
            <th style={{ width: "100px" }}>Mobile</th>
            <th style={{ width: "200px" }}>Address</th>
            <th style={{ width: "100px" }}>Guardian Details</th>
            <th style={{ width: "50px" }}>Nationality</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Guardian Details</th>
            <th>Nationality</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UserData;
