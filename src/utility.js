/****************************************************
 * UTILITY
 ****************************************************/

// Detect and check for mobile under 1280px because the UI is not optimized to manage desktop behind 1280px
// (no tablet or small desktop UI)
export const detectMobile = () => {
  return (
    window.innerWidth < 1280 ||
    (window.innerWidth <= 1024 && navigator.userAgent.match(/Android/i)) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
};

// Get Local Path for images and icons (compatibility with Vite js bundle)
export const getImagePath = (url) => {
  const isLocalHost =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "";
  return isLocalHost ? `/dist${url}` : url;
};
