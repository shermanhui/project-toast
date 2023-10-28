import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        setToasts([])
      }
  }
    window.addEventListener('keydown', handleKeyDown)


    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
