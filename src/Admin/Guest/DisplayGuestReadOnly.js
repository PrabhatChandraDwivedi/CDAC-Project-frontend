import React from "react";

const DisplayGuestReadOnly = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.guest.grid}</td>
      <td>{contact.guest_name}</td>
      <td>{contact.guest.aadhar_no}</td>
      <td>{contact.guest.gender}</td>
      <td>{contact.guest.mobile_no}</td>
      
     
      <td>{contact.guest.room_type}</td>
      <td>{contact.guest.id_proof}</td>
 
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

export default DisplayGuestReadOnly;
