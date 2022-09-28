import React from "react";

const StudentDisplayReadOnly = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.student.srid}</td>
      <td>{contact.student.student_full_name}</td>
      <td>{contact.student.student_mo_no}</td>
      <td>{contact.student.email}</td>
      <td>{contact.student.gender}</td>
     
      <td>{contact.student.course_applied}</td>
      <td>{contact.student.branch}</td>
      <td>{contact.student.parent_mo_no}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i class="fa-solid fa-user-pen"></i>
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.student.srid)}>
        <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default StudentDisplayReadOnly;
