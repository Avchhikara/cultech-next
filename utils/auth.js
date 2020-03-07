import Router from "next/router";

import nextCookie from "next-cookies";

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (!token) {
    Router.push("/login");
  }

  return token;
};

export const isLogged = ctx => {
  //   console.log(ctx);
  const { token } = nextCookie(ctx);
  return token && token !== "";
};
