import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.get["Content-Type"] = "application/json";

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      if (error.response && error.response.data && error.response.data.title) {
        toast.error(error.response.data.title);
      } else {
        toast.error("An unexpected error occured");
      }
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
