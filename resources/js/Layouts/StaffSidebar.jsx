import React from "react";
import { Link } from "@inertiajs/react";

export default function StaffSidebar() {
    return (
        <React.Fragment>
            <div className="staff-sidebar">
                <div className="sidebar-items">
                    <div className="sidebar-group">
                        <div className="sidebar-item">
                            <Link href="#">TODO</Link>
                        </div>
                    </div>
                    <div className="sidebar-group">
                        <div className="group-title">全体</div>
                        <div className="sidebar-item">
                            <Link href="#">一般</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">全体周知</Link>
                        </div>
                    </div>
                    <div className="sidebar-group">
                        <div className="sidebar-item">
                            <Link href="#">ヤフオク</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">幹部会議連絡</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">基準外</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">研修</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">店舗間連絡</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">月毎のキャンペーン</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">買取り実績ブログ</Link>
                        </div>
                    </div>
                    <div className="sidebar-group">
                        <div className="group-title">生駒</div>
                        <div className="sidebar-item">
                            <Link href="#">一般</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">業務連絡</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">1日の報告</Link>
                        </div>
                    </div>
                    <div className="sidebar-group">
                        <div className="sidebar-item">
                            <Link href="#">決裁</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">業者の売却報告</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">入出金</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">発注依頼</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">購入依頼と送料支払報告</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">出張買取</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">業者来訪</Link>
                        </div>
                    </div>
                    <div className="sidebar-group">
                        <div className="sidebar-item">
                            <Link href="#">シフト</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">業務情報/引継ぎ</Link>
                        </div>
                        <div className="sidebar-item">
                            <Link href="#">スタッフ会議</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}