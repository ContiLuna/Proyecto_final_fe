import { axiosInstance } from "../config/axiosInstance";
import { GET_ALL_CATEGORIAS, GET_ALL_PEDIDOS, GET_ALL_PRODUCTS, GET_ALL_USERS, LOGIN_USER, GET_ALL_PEDIDOS_BY_USER } from "./types";
import Swal from 'sweetalert2';

export const createProducts = async (formData) => {
    try {
        await axiosInstance.post("/menu", formData, {
            headers:{
                "Content-Type":"multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu producto se ha agregado con exito!',
            showConfirmButton: false,
            timer: 1500
          })
    } catch (error) {
        console.log(error)
    }
}


export const loginUser = async (data, navigate) => {
  try {
    const login = await axiosInstance.post("/login", data);
    localStorage.setItem("token", login.data.token);
    localStorage.setItem("user", JSON.stringify(login.data.user));
    if(login.data.user.rol === "admin"){
      navigate("/admin");
    }else{
      navigate("/");
    }
    
  } catch (error) {
    console.log(error);
  }

  return {
    type: LOGIN_USER,
    payload: true,
  };
};

export const getAllUsers = async () => {
  let response;
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem('user')) || [];

  if (user.rol === "admin") {
    try {
      response = await axiosInstance.get("/alluser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return {
      type: GET_ALL_USERS,
      payload: response?.data?.users || [],
    }
  } else {
    return {
      type: GET_ALL_USERS,
      payload: [],
    }
  }
}

export const getAllProducts = async () => {
  let response;
  try {
    response = await axiosInstance.get("/menu");
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_ALL_PRODUCTS,
    payload: response.data.menus,
  }
}

export const getAllUserPedidos = async (userId) => {
  let response;
  try {
    response = await axiosInstance.get(`/pedidos/user/${userId}`);
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_ALL_PEDIDOS_BY_USER,
    payload: response.data.pedidos,
  }
}

export const crearPedido = async (data) => {
  try {
    await axiosInstance.post("/pedido", data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu pedido se agregó a tu lista',
      showConfirmButton: false,
      timer: 2000
    })
  } catch (error) {
    console.log(error);
  }
};

export const getAllPedidos = async () => {
  let response;
  try {
    response = await axiosInstance.get("/pedido");
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_ALL_PEDIDOS,
    payload: response.data.pedidos,
  }
}

export const cambiarEstadoUsuario = async (id, valor, dispatch) => {
  const body = {
    estado: valor
  }
  try {
    await axiosInstance.patch(`/user/${id}`, body);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El estado del usuario ha cambiado!',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(getAllUsers());
  }
}

export const cambiarEstadoProducto = async (id, valor, dispatch) => {
  const body = {
    estado: valor
  }
  try {
    await axiosInstance.patch(`/menu/${id}`, body);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El estado del MENU ha cambiado!',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(getAllProducts());
  }
}

export const deleteMenu = async (id, dispatch) => {
  try {
    const result = await Swal.fire({
      title: '¿Está seguro de eliminar este producto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      await axiosInstance.delete(`/menu/${id}`);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El producto ha sido eliminado!',
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(getAllProducts());
    }
  } catch (error) {
    console.log(error);
  }
};


export const actualizarMenu = async (id, formData, dispatch, setShowModal) => {
  try {
    await axiosInstance.put(`/menu/${id}`, formData);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'El producto ha sido actualizado!'
    })
    setShowModal(false);
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(getAllProducts());
  }
}


export const getAllCategorias = async () => {
  let response;
  try {
    response = await axiosInstance.get("/categorias");
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_ALL_CATEGORIAS,
    payload: response.data.categorias,
  }
}

export const cambiarEstadoPedido = async (id, valor, dispatch) => {
  const body = {
    estado: valor
  }
  const token = localStorage.getItem("token");
  try {
    await axiosInstance.patch(`/pedido/${id}`, body, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El estado del pedido ha cambiado!',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(getAllPedidos());
  }
}

export const cambiarSugerido = async (id, valor, dispatch) => {
  const body = {
    sugerido: valor
  }
  const token = localStorage.getItem("token");
  try {
    await axiosInstance.patch(`/menu/sugerido/${id}`, body, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El estado de SUGERIDO ha cambiado!',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(getAllProducts());
  }
}