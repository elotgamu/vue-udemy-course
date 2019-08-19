import axios from "axios";

const instance = axios.create({
  baseURL: "https://vuejs-auth-1af7d.firebaseio.com"
});

instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;
