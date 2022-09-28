import React from "react";

const EditablDisplayGuest = ({
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
          placeholder="Enter an email..."
          name="grid"
          value={editFormData.grid}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="guest_name"
          value={editFormData.guest_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="Number"
          required="required"
          placeholder="Enter a name..."
          name="aadhar_no"
          value={editFormData.aadhar_no}
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
          type="Number"
          required="required"
          placeholder="Enter an email..."
          name="mobile_no"
          value={editFormData.mobile_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="room_type"
          value={editFormData.room_type}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="id_proof"
          value={editFormData.id_proof}
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

export default EditablDisplayGuest;
