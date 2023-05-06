import "./userData.css";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-buttons-dt";
import "datatables.net-buttons/js/buttons.colVis.mjs";
import "datatables.net-buttons/js/buttons.html5.mjs";
import "datatables.net-buttons/js/buttons.print.mjs";

const UserData = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetching data from backend API //
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          name: item.name,
          ageSex: `${item.age}Y/${item.sex}`,
          mobile: item.mobile,
          address: `${item.address ? item.address + "," : ""} ${
            item.city ? item.city + "," : ""
          } ${item.state ? item.state + "," : ""} ${
            item.country ? item.country + "-" : ""
          }${item.pincode || ""}`,
          govt_id: `${item.id_No ? item.id_No + " " : ""}${
            item.id_Type ? "(" + item.id_Type + ")" : ""
          }`,

          guardian: `${item.guardian_name ? item.guardian_name + " " : ""}${
            item.relation ? "(" + item.relation + ")" : ""
          }`,

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
              { title: "Age/Sex", data: "ageSex", width: "30px" },
              { title: "Mobile", data: "mobile", width: "50px" },
              { title: "Address", data: "address", width: "200px" },
              { title: "Govt ID", data: "govt_id", width: "100px" },
              { title: "Guardian Details", data: "guardian", width: "90px" },
              { title: "Nationality", data: "nationality", width: "40px" },
            ],
            dom: "lBfrtip",
            buttons: ["excel", "print", "pdf"],
          });
        }
      });
  }, []);

  return (
    <div className="user__data">
      <table id="example" ref={tableRef} class="display">
        <thead className="table__head">
          <tr>
            <th style={{ width: "80px" }}>Name</th>
            <th style={{ width: "30px" }}>Age/Sex</th>
            <th style={{ width: "50px" }}>Mobile</th>
            <th style={{ width: "200px" }}>Address</th>
            <th style={{ width: "100px" }}>Govt ID</th>
            <th style={{ width: "90px" }}>Guardian Details</th>
            <th style={{ width: "40px" }}>Nationality</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Govt ID</th>
            <th>Guardian Details</th>
            <th>Nationality</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UserData;
