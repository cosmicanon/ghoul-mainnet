export const url =
  process.env.NODE_ENV === "production"
    ? // ? "https://ghoultoken.crypto"
      "https://ghoultoken.io"
    : "http://localhost:8000";

export const darkpaper = url + "/ghoul_ecosystem_dark_paper.pdf";
