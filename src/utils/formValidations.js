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
    //create a custom validation to check if the password and repassword are the same
    passwordConfirmation: yup.string().test("passwords-match", "Las contraseñas no coinciden", function (value) {
      return this.parent.password === value;
    }),

    

});

export const MENU_EDIT_SCHEMA = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  precio: yup.number().required("El precio es requerido"),
  detalle: yup.string().required("El detalle es requerida"),
  categoria: yup.string().required("La categoría es requerida"),
  estado: yup.boolean().required("El estado es requerido"),
});