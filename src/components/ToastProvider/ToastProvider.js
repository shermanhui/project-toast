import React from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => setToasts([]), [])

  useEscapeKey(handleEscape)

  const handleToastDismiss = (toastId) => {
    const updatedToasts = toasts.filter((toast) => toast.key !== toastId);

    setToasts(updatedToasts);
  };

  const handleCreateToast = (message, variant) => {
    let toastKeyId = crypto.randomUUID();

    setToasts([...toasts, { key: toastKeyId, message, variant }]);
  };

  return (
    <ToastContext.Provider value={{toasts, handleToastDismiss, handleCreateToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
