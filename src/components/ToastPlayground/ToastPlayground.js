import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  const handleOnTextChange = (e) => {
    setToastMessage(e.target.value);
  };

  const handleToastDismiss = (toastId) => {
    const updatedToasts = toasts.filter((toast) => toast.key !== toastId);

    setToasts(updatedToasts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let toastKeyId = crypto.randomUUID();

    setToasts([...toasts, { key: toastKeyId, message: toastMessage, variant }]);

    setVariant(VARIANT_OPTIONS[0]);
    setToastMessage("");
  };

  return (
    <form noValidate className={styles.wrapper} onSubmit={handleSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* {showToast && <Toast variant={variant} handleDismiss={() => setShowToast(!showToast)}>{toastMessage}</Toast>} */}
      <ToastShelf toasts={toasts} handleDismiss={handleToastDismiss} />
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={handleOnTextChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label key={`variant-${option}`} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={`${option}`}
                    checked={option === variant}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
