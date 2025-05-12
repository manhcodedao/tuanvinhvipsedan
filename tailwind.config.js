module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--zmp-primary-color)",
        gray: "#767A7F",
        divider: "#E9EBED",
        green: "#288F4E",
        background: "#ffffff",
        skeleton: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
};
const config = {
  app: {
    title: "Tên ứng dụng",
    textColor: "#000000",
    leftButton: "back",
    statusBar: "dark",
  },
  pages: [
    "pages/index",
    "pages/user-profile",
    "pages/orders",
    "pages/payment",
    "pages/register",
    // ... các route tương ứng với Mini App
  ],
};
