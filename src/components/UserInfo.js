import React, { useState, useEffect } from "react";
import Table from "./Table";
import Nav from "./Nav";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";

const UserInfo = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Icon Image", width: "10%", order: "descend" },
      { name: "Employee", width: "10%", order: "descend" },
      { name: "Phone Number", width: "20%", order: "descend" },
      { name: "Email Address", width: "20%", order: "descend" },
      { name: "Date of Birth", width: "10%", order: "descend" }
    ]
  });

  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.results);
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

  return (
    <DataAreaContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <Nav />
      <div className="data-area">
        {developerState.filteredUsers.length > 0 ? <Table /> : <div></div>}
      </div>
    </DataAreaContext.Provider>
  );
};

export default UserInfo;