import React from "react";

const EditableRowGuest = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="room_no"
          value={editFormData.room_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="wing"
          value={editFormData.wing}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
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
          placeholder="Enter an email..."
          name="guest_name"
          value={editFormData.guest_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type="Number"
          required="required"
          placeholder="Enter an email..."
          name="fees"
          value={editFormData.fees}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="Number"
          required="required"
          placeholder="Enter an email..."
          name="dues"
          value={editFormData.dues}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="Number"
          required="required"
          placeholder="Enter an email..."
          name="feepaid"
          value={editFormData.feepaid}
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

export default EditableRowGuest;
