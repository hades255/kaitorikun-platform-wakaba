import { Link } from "@inertiajs/react"
import React from "react"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import ArticleIcon from '@mui/icons-material/Article';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {usePage} from "@inertiajs/react";

export default function AdminSidebar({ user }) {
    const {props} = usePage()
    const {assetUrl, appUrl}= props;
    return (
        <React.Fragment>
            <div className="admin-sidebar">
                <div className="sidebar-inner">
                    <div className="logo">
                        <div className="text-xl font-bold px-4 pc h-full">
                            <img src={assetUrl + 'assets/logo.png'} alt="logo" className="h-full"/>
                        </div>
                        <div className="text-xl font-bold px-4 sp h-full">
                            <img src={assetUrl + 'assets/sp_logo.png'} alt="sp-logo" className="h-full"/>
                        </div>
                    </div>
                    <div className="menu-items">
                        <div className="p-menu">
                            <div className="p-menu__inner">
                                <Link href={route('admin.dashboard')} className={`w-full flex menu-tab ${route().current() == 'admin.dashboard' ? 'active' : ''}`}>
                                    <DashboardIcon />
                                    <span className="pl-1">HOME</span>
                                </Link>
                            </div>
                        </div>
                        <div className="p-menu">
                            <div className="p-menu__inner">
                                <Link href={route('admin.staffmanage.index')} className={`w-full flex menu-tab  ${route().current().split('.')[1] == 'staffmanage' ? 'active' : ''}`}>
                                    <GroupIcon />
                                    <span className="pl-1">スタッフ一覧</span>
                                </Link>
                            </div>
                        </div>
                        <div className="p-menu">
                            <div className="p-menu__inner expand">
                                <div className="w-full flex menu-tab">
                                    <SettingsIcon />
                                    <span className="pl-1">設定</span>
                                    <div className="has-child">
                                        <KeyboardArrowRightIcon />
                                    </div>
                                </div>
                                <div className="sub-menus">
                                    <Link href={route('admin.dashboard')} className="w-full flex submenu-tab">
                                        <ApartmentIcon />
                                        <span className="pl-1">会社情報</span>
                                    </Link>
                                    <Link href={route('admin.storemanage.index')} className={`w-full flex submenu-tab ${route().current().split('.')[1] == 'storemanage' ? 'active' : ''}`}>
                                        <StorefrontIcon />
                                        <span className="pl-1">店舗管理</span>
                                    </Link>
                                    <Link href={route('admin.dashboard')} className="w-full flex submenu-tab">
                                        <AssistWalkerIcon />
                                        <span className="pl-1">種別管理</span>
                                    </Link>
                                    <Link href={route('admin.dashboard')} className="w-full flex submenu-tab">
                                        <ArticleIcon />
                                        <span className="pl-1">証明書類管理</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}