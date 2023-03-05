import notification from "./notificacion";

const success = (title, message) => {
    notification({
      title,
      message,
      type: "success",
    });
  };
  
  const error = (message) => {
    return notification({
      title: "Error",
      message,
      type: "danger",
    });
  };
  
  const warning = (message) => {
    notification({
      title: "Warning",
      message,
      type: "warning",
    });
  };

  
  const NotificacionesApp =  {
    success,
    error,
    warning
  }
  
  export default NotificacionesApp