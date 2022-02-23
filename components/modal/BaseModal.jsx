import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import s from "./BaseModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function BaseModal({ buttonName }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="buttonGetTheCall" onClick={handleOpen}>
        {buttonName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <p class="modal__title">Залиште свої дані і ми Вам зателефонуємо:</p>
          <TextField
            required
            id="standard-basic"
            autoComplete="off"
            label="Ім'я"
            variant="standard"
          />
          <TextField
            required
            id="standard-basic"
            autoComplete="off"
            label="Телефон"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Електронна адреса"
            variant="standard"
            autoComplete="off"
          />

          <button type="submit" className={s.button}>
            Відправити
          </button>
        </Box>
      </Modal>
    </div>
  );
}
