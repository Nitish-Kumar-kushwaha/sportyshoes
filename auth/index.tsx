//isLoggedIn

import { SignupValueType } from "@/Types/types";

export const isLoggedIn = () => {
  if (typeof localStorage !== "undefined") {
    let data: string | null = localStorage.getItem("data");
    if (data !== null) {
      return true;
    }
  } else {
    return false;
  }
};

//doLogin

export const doLogin = (data: any, next: CallableFunction) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//logout

export const doLogout = (next: CallableFunction) => {
  localStorage.removeItem("data");
  next();
};

// current user

export const getCurrentUserDetail = (): SignupValueType | undefined => {
  if (isLoggedIn()) {
    if (typeof localStorage !== "undefined") {
      let data = localStorage.getItem("data");
      let userData = data ? JSON.parse(data) : [];

      return userData;
    }
  } else {
    return undefined;
  }
};
