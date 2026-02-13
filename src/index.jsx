import { create } from "zustand";

export const domain = "https://bookstore.eraasoft.pro/api";

export const AuthStore = create((set) => ({
  authorized: false,
  token: null,

  checkAuth: () =>
    set(() => {
      let token =
        localStorage.getItem("token") || sessionStorage.getItem("token");

      if (token) {
        return {
          authorized: true,
          token,
        };
      } else {
        return {
          authorized: false,
          token: null,
        };
      }
    }),
}));
