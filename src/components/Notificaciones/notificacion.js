import { Store } from "react-notifications-component";

const notification = ({ title, message, type }) => Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    width: 600,
    dismiss: {
      duration: 7000,
      onScreen: true,
      showIcon: true,
    }
  });


export default notification;