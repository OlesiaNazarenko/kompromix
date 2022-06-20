import s from "./ContactForm.module.css";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent";
import Button from "../button/Button";

export default function ContactForm() {
  return (
    <section className={s.contactFormWrap}>
      <div className="container">
        <SectionTitleComponent
          title={"Маєте питання?"}
          subTitle="Наш менеджер залюбки відповість на них"
          icon={<HelpCenterIcon />}
        />

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, justifyContent: "center" },
          }}
          autoComplete="off"
        >
          <div className={s.form}>
            <div className={s.inputFieldWrap}>
              <TextField
                id="name"
                label="Ім'я"
                required
                className={s.textField}
              />
              <TextField
                id="email"
                label="Електронна адреса"
                required
                className={s.textField}
              />
              <TextField
                id="phone"
                label="Телефон"
                required
                className={s.textField}
              />
            </div>
            <div className={s.multilineFieldWrap}>
              <TextField
                id="question"
                label="Ваше запитання"
                multiline
                fullWidth
                rows={7.25}
                className={s.textFieldMultiple}
              />
            </div>
          </div>
          <Button type={"submit"} name={"Відправити"} />
        </Box>
      </div>
    </section>
  );
}
