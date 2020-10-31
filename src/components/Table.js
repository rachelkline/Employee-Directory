import React, { useContext } from "react";
import UserBody from "./UserBody";
import DataAreaContext from "../utils/DataAreaContext";

const Table = () => {
  const context = useContext(DataAreaContext);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
          </tr>
        </thead>

        <UserBody />
      </table>
    </div>
  );
}

export default Table;