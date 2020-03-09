import nextCookie from "next-cookies";
import Cookies from "js-cookie";
export const auth = ctx => {
  const { token } = nextCookie(ctx);
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }
  return token;
};

export const isLogged = ctx => {
  return Cookies.get("token");
};

export const getToken = ctx => {
  const { token } = nextCookie(ctx);
  return token;
};
