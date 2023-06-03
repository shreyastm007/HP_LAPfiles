import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://localhost:44373/api/Shop",
});

export default HTTP;
