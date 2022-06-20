import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendNewFeedback } from "../../redux/feedbacks/feedbacks-operations";
import Button from "../button/Button";
import s from "./NewFeedbackForm.module.css";
import Rating from "@mui/material/Rating";

export default function NewFeedbackForm({ notify }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    handleGetDate();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "feedback":
        setFeedback(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleGetDate = () => {
    const newDate = new Date();
    const pad = (value) => {
      return String(value).padStart(2, "0");
    };
    const currentDate = `${pad(newDate.getDate())}.${pad(
      newDate.getMonth()
    )}.${newDate.getFullYear()}`;
    return setDate(currentDate);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendNewFeedback({ name, date, rate, number, feedback, email }));
    notify(
      "Дякуємо за Ваш відгук! Ми цінуємо нашу співправцю і будемо раді працювати з Вами ще. Гарного дня!"
    );
    setName("");
    setNumber("");
    setEmail("");
    setFeedback("");
    setDate("");
    setRate(0);
  };
  return (
    <section className={s.newFeedbackFormSection}>
      <div className="container">
        <Box
          onSubmit={(e) => handleSubmit(e)}
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              justifyContent: "center",
              width: "98%",
            },
          }}
          className={s.form}
          autoComplete="off"
        >
          <h2 className={s.h2}>Залиште Ваш відгук:</h2>
          <TextField
            id="name"
            name="name"
            label="Ім'я"
            required
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я може складатися тільки з літер, апострофу, тире та пробілів. Наприклад: Мар'яна, Дмитро Петренко, Анна-Марія і т. п."
            className={s.textField}
          />
          <TextField
            id="email"
            label="Електронна адреса"
            required
            name="email"
            value={email}
            pattern="^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
            onChange={handleChange}
            className={s.textField}
          />
          <TextField
            id="phone"
            label="Телефон"
            name="number"
            onChange={handleChange}
            className={s.textField}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефону повинен складатися з цифр і може містити прогалини, тире, круглі дужки і може починатися з +"
          />{" "}
          <p className={s.phoneDesc}>
            Вкажіть телефон, якщо ви погоджуєтеся на його публікацію на даному
            сайті
          </p>
          <div style={{ padding: "0 10px" }}>
            <p>Оцініть роботу компанії: </p>
            <Rating
              name="simple-controlled"
              value={rate}
              onChange={(event, newValue) => {
                setRate(newValue);
              }}
            />
          </div>
          <TextField
            id="feedback"
            required
            name="feedback"
            value={feedback}
            onChange={handleChange}
            label="Ваш відгук"
            multiline
            fullWidth
            rows={7.25}
            className={(s.textField, s.textarea)}
          />
          <Button type={"submit"} name={"Відправити"} />
        </Box>
      </div>
    </section>
  );
}
