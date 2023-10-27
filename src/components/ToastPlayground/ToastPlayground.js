import React from "react";

import Button from "../Button";
import Toast from '../Toast';

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [showToast, setShowToast] = React.useState(false)

  const handleOnTextChange = (e) => {
    setToastMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(!showToast)
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        {showToast && <Toast variant={variant} handleDismiss={() => setShowToast(!showToast)}>{toastMessage}</Toast>}
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
                  <label
                    key={`variant-${option}`}
                    htmlFor={`variant-${option}`}
                  >
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

              {/* TODO Other Variant radio buttons here */}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
