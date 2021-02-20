// 生成路由表
import Home from "./views/Home";
import Products from "./views/Products";

// 先找 path，找到对应的 path 之后，再找里面的 component，将 component显示到 router-view 标签中
export const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  }
];
