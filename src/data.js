export const url =
  process.env.NODE_ENV === "production"
    ? // ? "https://ghoultoken.crypto"
      "https://zen-hodgkin-d0c4ae.netlify.app/"
    : "http://localhost:8000";

export const darkpaper = url + "/ghoul_ecosystem_dark_paper.pdf";
