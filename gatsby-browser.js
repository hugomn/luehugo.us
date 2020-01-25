// exports.onClientEntry = function () {
//   require("es6-object-assign").polyfill();
// };

const scrollTo = id => () => {
  const el = document.querySelector(id);
  if (el) return window.scrollTo(0, el.offsetTop);
  return false;
};

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10);
  }
};
