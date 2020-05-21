import http from "./httpServices";

const getPosts = () => {
  return http.get("https://epower.ng/wp-json/wp/v2/posts");
};
const singlePost = (id) => {
  return http.get(`https://epower.ng/wp-json/wp/v2/posts/${id}`);
};

export default {
  getPosts,
  singlePost,
};
