import * as yup from "yup";

export const CREATE_USER_SCHEMA = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .max(22, "La contraseña debe tener máximo 22 caracteres")
    .min(8, "La contraseña debe tener mínimo 8 caracteres"),
  email: yup
    .string()
    .email("El email no es válido")
    .required("El email es requerido").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "El email no es válido"),
  rol: yup.string().required("El rol es requerido"),
});