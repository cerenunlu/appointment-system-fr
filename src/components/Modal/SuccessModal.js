import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "../../components/Table/table";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const colNames = [
  "#",
  "Name",
  "Surname",
  "Email",
  "Role",
  "Department",
  "Setting",
];
export default function BasicModal({
  openModal,
  closeModal,
  info,
  header,
}) {
 
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {header} Created Successfully!
            <br/>
           
          </Typography>
         
        </Box>
      </Modal>
    </div>
  );
}
