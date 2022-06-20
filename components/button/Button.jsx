import s from "./Button.module.css";
export default function Button({ name, type, onClick }) {
  return (
    <button type={type} className={s.button} onClick={onClick}>
      {name}
    </button>
  );
}
