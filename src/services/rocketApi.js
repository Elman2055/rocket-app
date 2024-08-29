import axios from "axios";

class RocketApi {
  static API_BASE_URL = "https://approcket.kz/api";
  static TOKEN = localStorage.getItem("auth_token");

  static getRegisterUser = async ({ name, lastName, email, password }) => {
    try {
      const url = `${RocketApi.API_BASE_URL}/user/reg`;
      const response = await axios.post(url, {
        name: name,
        surname: lastName,
        email: email,
        password: password,
      });

      return response.data;
    } catch (e) {
      console.log(e);
      return { success: false, message: "Ошибка при регистрации" };
    }
  };

  static getEditProfile = async ({ name, lastName, email, phone }) => {
    try {
      const url = `${RocketApi.API_BASE_URL}/user/edit`;
      const response = await axios.post(
        url,
        {
          name: name,
          surname: lastName,
          email: email,
          phoneNumber: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${RocketApi.TOKEN}`,
          },
        }
      );

      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  static getNewPassword = async ({ oldPassword, newPassword }) => {
    const url = `${RocketApi.API_BASE_URL}/user/updatePassword`;
    const response = await axios.post(
      url,
      {
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${RocketApi.TOKEN}`,
        },
      }
    );

    return response.data;
  };

  static getFavourites = async () => {
    try {
      const url = `${RocketApi.API_BASE_URL}/user/favourite/list`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${RocketApi.TOKEN}`,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  static getAddFavourites = async ({ id }) => {
    const url = `${RocketApi.API_BASE_URL}/user/favourite/add`;
    const response = await axios.post(
      url,
      { product_id: id },
      {
        headers: {
          Authorization: `Bearer ${RocketApi.TOKEN}`,
        },
      }
    );
    return response.data;
  };

  static getCartProducts = async () => {
    const url = `${RocketApi.API_BASE_URL}/user/cart`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${RocketApi.TOKEN}`,
      },
    });
    return response.data;
  };

  static getAddCartProducts = async ({ id }) => {
    const url = `${RocketApi.API_BASE_URL}/user/cart/add`;
    const response = await axios.post(
      url,
      { product_id: id },
      {
        headers: {
          Authorization: `Bearer ${RocketApi.TOKEN}`,
        },
      }
    );
    return response.data;
  };

  static getSearch = async ({ inputValue }) => {
    const url = `${RocketApi.API_BASE_URL}/products/search`;
    const response = await axios.post(url, {
      searchQuery: inputValue,
    });
    return response.data;
  };

  static getProducts = async (category) => {
    try {
      const url = `${RocketApi.API_BASE_URL}/products/products`;
      const { data } = await axios.post(url, { category: `${category}` });
      return data.items;
    } catch (e) {
      console.log(e);
    }
  };

  static getProduct = async (id) => {
    try {
      const url = `${RocketApi.API_BASE_URL}/products/get-product/${id}`;
      const { data } = await axios.get(url);
      return data.product;
    } catch (e) {
      console.log(e);
    }
  };
}

export default RocketApi;
