import { DemoTabel, FormControl, Login } from "../../pages";
import ForgotPassword from "../../pages/forgot-password";
import Dashboard from "../../pages/shop-manage/dashboard";
import StaffRegister from "../../pages/shop-manage/register";
import StaffExit from "../../pages/shop-manage/exit";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "ログイン",
    component: () => <Login />
  },
  {
    path: "/forgot-password",
    exact: true,
    title: "パスワードリセット",
    component: () => <ForgotPassword />
  },
  {
    path: "/todo",
    exact: true,
    title: "TODO",
    component: () => <Dashboard />
  },
  {
    path: "/staff/register",
    exact: true,
    title: "スタッフ登録",
    component: () => <StaffRegister />
  },
  {
    path: "/staff/exit",
    exact: true,
    title: "退会",
    component: () => <StaffExit />
  },

  {
    path: "/form-control",
    exact: true,
    title: "Form Control",
    component: () => <FormControl />
  },

  {
    path: "/demo-tabel",
    exact: true,
    title: "Demo Tabel",
    component: () => <DemoTabel />
  },


];

export default MenuRoutes;
