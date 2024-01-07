import axios from "axios";

const VERSION = "api/v1/";
const BASEURL = `${process.env.VUE_APP_API_URL}${VERSION}`;

const baseAxios = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseAxios;
