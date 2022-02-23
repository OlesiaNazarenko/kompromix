export default function Modal() {
  return (
    <div data-modal class="backdrop is-hidden">
      <div class="modal">
        <p class="modal__title">Оставьте свои данные, мы вам перезвоним</p>
        <form class="modal-form">
          <div class="modal-labels">
            <label for="name">Имя</label>
            <svg class="modal-labels__icon modal-labels__icon_name">
              <use href="./images/icons.svg#icon-name"></use>
            </svg>
            <input
              type="text"
              name="name"
              id="name"
              class="modal-labels__input modal-labels__input_name"
            />
          </div>
          <div class="modal-labels">
            <label for="tel">Телефон</label>
            <svg class="modal-labels__icon modal-labels__icon_phone-number">
              <use href="./images/icons.svg#icon-phone-number"></use>
            </svg>

            <input
              type="tel"
              name="tel"
              id="tel"
              class=" modal-labels__input modal-labels__input_phone"
            />
          </div>
          <div class="modal-labels">
            <label for="mail">Почта</label>
            <svg class="modal-labels__icon modal-labels__icon_mail">
              <use href="./images/icons.svg#icon-form-mail"></use>
            </svg>

            <input
              type="email"
              name="email"
              id="mail"
              class="modal-labels__input modal-labels__input_email"
            />
          </div>
          <div class="modal-labels">
            <label for="comment">Комменатрий</label>
            <textarea
              id="comment"
              name="comment"
              class="modal-labels__input modal-labels__input_comment"
              placeholder="Введите текст"
            ></textarea>
          </div>
          <div class="modal-labels">
            <label for="agreement" class="modal-labels__agreement">
              <input
                type="checkbox"
                name="agreement is-hidden"
                id="agreement"
                class="modal-checkbox"
              />
              <span class="checkmark"></span>
              <span class="modal-labels__agreement__text">
                Соглашаюсь с рассылкой и принимаю{" "}
                <a class="modal-labels__link" href="">
                  Условия договора
                </a>
              </span>
            </label>
          </div>
          <button type="submit" class="modal__button">
            Отправить
          </button>
        </form>
        <button data-modal-close class="modal__close-button">
          <svg class="modal__close-icon">
            <use href="./images/icons.svg#icon-modal-close"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
