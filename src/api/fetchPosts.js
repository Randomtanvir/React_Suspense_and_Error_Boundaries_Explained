import wrapPromise from "../utils/wrapePromise";

const fetchPosts = (url) => {
  const response = fetch(url).then((res) => res.json());
  return wrapPromise(response);
};

export default fetchPosts;
