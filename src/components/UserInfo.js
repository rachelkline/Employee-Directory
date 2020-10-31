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

  const handleSort = heading => {
    let currentOrder = developerState.headings
      .filter(elem => elem.name === heading)
      .map(elem => elem.order)
      .toString();

    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }

    const compareFnc = (x, y) => {
      if (currentOrder === "ascend") {
        // eliminate users with missing info
        if (x[heading] === undefined) {
          return 1;
        } else if (y[heading] === undefined) {
          return -1;
        }
        // sort by number
        else if (heading === "Name") {
          return x[heading].first.localeCompare(y[heading].first);
        } else if (heading === "Date of Birth") {
          return x[heading].age - y[heading].age;
        } else {
          return x[heading].localeCompare(y[heading]);
        }
      } else {
       // repeat above for reverse vars
        if (x[heading] === undefined) {
          return 1;
        } else if (y[heading] === undefined) {
          return -1;
        }
        // repeat above for reverse vars
        else if (heading === "Name") {
          return y[heading].first.localeCompare(x[heading].first);
        }else if (heading === "dob") {
          return y[heading].age - x[heading].age;
        }  else {
          return y[heading].localeCompare(x[heading]);
        }
      }
    };

    //sort | compare using map
    const sortedUsers = developerState.filteredUsers.sort(compareFnc);
    const updatedHeadings = developerState.headings.map(elem => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings
    });
  };

  //use filter to grab first/last name
  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values)
    if(values.indexOf(filter.toLowerCase()) !== -1){
      return item
    };
    });

    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };

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