export const decodeJWT = (token) => {
  const tokenParts = token.split(".");
  const header = JSON.parse(
    atob(tokenParts[0].replace("-", "+").replace("_", "/"))
  );
  const payload = JSON.parse(
    atob(tokenParts[1].replace("-", "+").replace("_", "/"))
  );

  return {
    payload,
  };
};
