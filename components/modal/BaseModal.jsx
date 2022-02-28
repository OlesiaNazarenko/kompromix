import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import s from "./BaseModal.module.css";
import { createTheme } from "@mui/material/styles";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#5085a5",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});
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
        theme={theme}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <p class="modal__title">Залиште свої дані і ми Вам зателефонуємо:</p>
          <TextField
            className={s.textfield}
            required
            id="standard-basic"
            autoComplete="off"
            label="Ім'я"
            variant="standard"
          />
          <TextField
            className={s.textfield}
            required
            id="standard-basic"
            autoComplete="off"
            label="Телефон"
            variant="standard"
          />
          <TextField
            className={s.textfield}
            color="primary"
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
