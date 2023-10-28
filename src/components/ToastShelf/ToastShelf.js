import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf({ toasts }) {
  const { handleToastDismiss: handleDismiss } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper} aria-live="polite" aria-label="Notification" role="region">
      {toasts.map(({ key, variant, message,  }) => (
        <li className={styles.toastWrapper} key={key}>
          <Toast
            id={key}
            variant={`${variant}`}
            handleDismiss={handleDismiss}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
