import { create } from "zustand";

export const domain = "https://bookstore.eraasoft.pro/api";

export const useAuthStore = create((set) => ({
  authorized: false,
  token: null,

  checkAuth: () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      set({
        authorized: true,
        token,
      });
    } else {
      set({
        authorized: false,
        token: null,
      });
    }
  },
}));
