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
import AcceptInvitation from "../../pages/invitations/AcceptInvitation";
import PurchaseRegister from "../../pages/purchase-manage/register";
import PurchaseList from "../../pages/purchase-manage/list";
import PurchaseContract from "../../pages/purchase-manage/contract";
import PurchaseEdit from "../../pages/purchase-manage/edit";
import PurchaseCustomer from "../../pages/purchase-manage/customer";
import ItemsList from "../../pages/items-manage";
import SChannel from "../../pages/schannel";
import SchannelWithSeparatorBar from "../../pages/schannel/SchannelWithSeparatorBar";
import Schannel from "../../pages/schannel";
import AcceptGroupChatInvitation from "../../pages/invitations/AcceptGroupChatInvitation";

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
        path: "/purchase/list",
        exact: true,
        title: "買取計算書一覧",
        component: () => <PurchaseList />,
    },
    {
        path: "/purchase/register",
        exact: true,
        title: "買取計算書(新規)",
        component: () => <PurchaseRegister />,
    },
    {
        path: "/purchase/customer",
        exact: true,
        title: "買取計算書(顧客)",
        component: () => <PurchaseCustomer />,
    },
    {
        path: "/purchase/contract",
        exact: true,
        title: "買取明細書",
        component: () => <PurchaseContract />,
    },
    {
        path: "/purchase/edit",
        exact: true,
        title: "買取計算書",
        component: () => <PurchaseEdit />,
    },
    {
        path: "/items",
        exact: true,
        title: "在庫一覧",
        component: () => <ItemsList />,
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
    /** channel&chat end */
    {
        path: "/channels/:id",
        exact: true,
        title: "チャネル",
        component: () => <Communities />,
    },
    {
        path: "/communities/:id",
        exact: true,
        title: "チャネル",
        component: () => <Communities />,
    },
    {
        path: "/schannels/:id",
        exact: true,
        title: "チャネル",
        component: () => <SchannelWithSeparatorBar />,
    },
    {
        path: "/sschannels/:id",
        exact: true,
        title: "チャネル",
        component: () => <Schannel />,
    },
    {
        path: "/accept-invitation",
        exact: true,
        title: "招待を受け入れる",
        component: () => <AcceptInvitation />,
    },
    {
        path: "/chatgroup/accept-invitation",
        exact: true,
        title: "招待を受け入れる",
        component: () => <AcceptGroupChatInvitation />,
    },
];

export default MenuRoutes;
