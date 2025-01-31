import { DemoTabel, FormControl, Login } from "../../pages";
import ForgotPassword from "../../pages/forgot-password";
import Dashboard from "../../pages/shop-manage/dashboard";
import StaffRegister from "../../pages/shop-manage/register";
import CustomerRegister from "../../pages/customer-manage/register";
import CustomerList from "../../pages/customer-manage/list";
import CustomerEdit from "../../pages/customer-manage/edit";
import StaffExit from "../../pages/shop-manage/exit";
import ResetPassword from "../../pages/reset-password";
import Communities from "../../pages/communities";
import ChatsPage from "../../pages/chat";
import CalendarPage from "../../pages/calendar";
import CalendarPageTest from "../../pages/calendar/Calendar";
import AcceptInvitation from "../../pages/invitations/AcceptInvitation";

const MenuRoutes = [
    {
        path: "/",
        exact: true,
        title: "ログイン",
        component: () => <Login />,
    },
    {
        path: "/forgot-password",
        exact: true,
        title: "パスワードリセット",
        component: () => <ForgotPassword />,
    },
    {
        path: "/reset-password",
        exact: true,
        title: "パスワードリセット",
        component: () => <ResetPassword />,
    },
    {
        path: "/todo",
        exact: true,
        title: "TODO",
        component: () => <Dashboard />,
    },
    {
        path: "/staff/register",
        exact: true,
        title: "スタッフ登録",
        component: () => <StaffRegister />,
    },
    {
        path: "/staff/exit",
        exact: true,
        title: "退会",
        component: () => <StaffExit />,
    },
    {
        path: "/customer/list",
        exact: true,
        title: "顧客一覧",
        component: () => <CustomerList />,
    },
    {
        path: "/customer/register",
        exact: true,
        title: "顧客登録",
        component: () => <CustomerRegister />,
    },
    {
        path: "/customer/edit",
        exact: true,
        title: "顧客編集",
        component: () => <CustomerEdit />,
    },
    {
        path: "/form-control",
        exact: true,
        title: "Form Control",
        component: () => <FormControl />,
    },
    {
        path: "/demo-tabel",
        exact: true,
        title: "Demo Tabel",
        component: () => <DemoTabel />,
    },
    /** channel&chat start */
    {
        path: "/communities",
        exact: true,
        title: "チャンネル",
        component: () => <Communities />,
    },
    {
        path: "/chat",
        exact: true,
        title: "チャット",
        component: () => <ChatsPage />,
    },
    {
        path: "/calendar",
        exact: true,
        title: "チャット",
        component: () => <CalendarPage />,
    },
    {
        path: "/calendar_test",
        exact: true,
        title: "招待を受け入れる",
        component: () => <CalendarPageTest />,
    },
    /** channel&chat end */
    {
        path: "/accept-invitation",
        exact: true,
        title: "招待を受け入れる",
        component: () => <AcceptInvitation />,
    },
];

export default MenuRoutes;
