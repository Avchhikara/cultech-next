import nextCookie from "next-cookies";

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
  //   console.log(ctx);
  const { token } = nextCookie(ctx);
  return token && token !== "";
};
