import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";

const UserBody = () => {
  const context = useContext(DataAreaContext);

  //Make the date readable
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("/");
    return formattedDate;
  }

  return (
    <tbody>
      {context.developerState.filteredUsers.map(({ id, name, picture, phone, email, dob, }) => {
          return (
            <tr >
              <td data-th="Image" className="align-middle">
              </td>
              <td data-th="Name" className="name-cell align-middle">
              </td>
              <td data-th="Phone" className="align-middle">
             </td>
              <td data-th="Email" className="align-middle">
              </td>
              <td data-th="DOB" className="align-middle">
              </td>
            </tr>
          );
        })
        
        
      }
    </tbody>
  );
}

export default UserBody;