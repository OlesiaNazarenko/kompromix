import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import s from "./ImageModal.module.css";
import Image from "next/image";

export default function ImageModal({ image, open, handleClose }) {
  return (
    <Modal
      BackdropProps={{
        classes: {
          root: s.backDrop,
        },
      }}
      className={s.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={s.modalImg}>
        <CloseIcon className={s.closeIcon} onClick={handleClose} />
        <Image
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </Modal>
  );
}
