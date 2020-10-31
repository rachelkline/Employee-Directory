import React, { useContext } from "react";
import UserBody from "./UserBody";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/Search.css";

const Table = () => {
  const context = useContext(DataAreaContext);

  return (
    <div class="container">
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-bordered"
      >
        <thead className="tableHead">
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name.toLowerCase());
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <UserBody />
      </table>
    </div>
    </div>
  );
}

export default Table;