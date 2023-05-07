import "./userData.css";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-buttons-dt";
import "datatables.net-buttons/js/buttons.colVis.mjs";
import "datatables.net-buttons/js/buttons.html5.mjs";
import "datatables.net-buttons/js/buttons.print.mjs";
import "datatables.net-scroller-dt";

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
              { title: "Name", data: "name" },
              { title: "Age/Sex", data: "ageSex" },
              { title: "Mobile", data: "mobile" },
              { title: "Address", data: "address" },
              { title: "Govt ID", data: "govt_id" },
              { title: "Guardian Details", data: "guardian" },
              { title: "Nationality", data: "nationality" },
            ],
            dom: "lBfrtip",
            buttons: ["excel", "print", "pdf"],
            scrollY: 450,
            deferRender: true,
            scroller: true,
            order: [],
            autoWidth: true,
          });
        }
      });
  }, []);

  return (
    <div className="user__data">
      <table id="example" ref={tableRef} className="display">
        <thead className="table__head">
          <tr>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Govt ID</th>
            <th>Guardian Details</th>
            <th>Nationality</th>
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
