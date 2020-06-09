const CATS_URL = "http://localhost:3000/cats";

const getCats = () => fetch(CATS_URL).then((res) => res.json());
const postCat = (cat) =>
  fetch(CATS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat),
  }).then((res) => res.json());

export default {
  getCats,
  postCat,
};
