self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", event => {
  // You can add cache handling here
});