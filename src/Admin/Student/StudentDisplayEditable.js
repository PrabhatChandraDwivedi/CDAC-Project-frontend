import React from "react";

const StudentDisplayEditable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="Number"
          required="required"
          placeholder="Enter an address..."
          name="srid"
          value={editFormData.srid}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="student_name"
          value={editFormData.student_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type="Number"
          required="required"
          placeholder="Enter an email..."
          name="student_mo_no"
          value={editFormData.student_mo_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="gender"
          value={editFormData.gender}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="course_applied"
          value={editFormData.course_applied}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="branch"
          value={editFormData.branch}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="Number"
          required="required"
          placeholder="Enter an email..."
          name="parent_mo_no"
          value={editFormData.parent_mo_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default StudentDisplayEditable;
