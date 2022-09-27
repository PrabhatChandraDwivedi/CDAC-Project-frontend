import React from "react";

const ReadOnlyRowGuest = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.room_no}</td>
      <td>{contact.wing}</td>
      <td>{contact.guest.grid}</td>
      <td>{contact.guest_name}</td>
      
     
      <td>{contact.fees}</td>
      <td>{contact.dues}</td>
      <td>{contact.feepaid}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i class="fa-solid fa-user-pen"></i>
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.guest.grid)}>
        <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowGuest;
