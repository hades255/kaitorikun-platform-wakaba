import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    getItem,
    TableMaster,
} from "../../../../components";
import moment from 'moment';
moment.locale("ja");


let LeaveItemsDialog = (props) => {
    const printRef = useRef();
    const customer_shop = props.customer_shop;
    const customer_name = props.customer_name;
    const customer_phone_number1 = props.customer_phone_number1;
    const customer_phone_number2 = props.customer_phone_number2;
    const leave_deadline = props.leave_deadline;
    const [items, setItems] = useState(props.items);
    const [total, setTotal] = useState()
    const [canCall, setCanCall] = useState(true)
    const [isPrint, setIsPrint] = useState(false)

    useEffect(() => {
        let num = 0
        items.forEach(item => {
            num += Number(item.amount)
        });
        setTotal(num)
    }, []);

    const printStyle = {
        display: isPrint ? "block" : "none"
    };

    const columns = [
        {
            title: "商品番号",
            dataIndex: "item_no",
            key: "item_no",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 80 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "商品名",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 300 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "個数",
            dataIndex: "amount",
            key: "amount",
        },
    ];

    const handlePrintClick = () => {
        setIsPrint(true);
        const printContent = printRef.current.innerHTML;
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
      <html>
        <body>${printContent}</body>
      </html>
    `);
        newWindow.document.close();
        newWindow.focus();
        newWindow.print();
        setTimeout(() => {
            newWindow.close();
        }, 1000);
        setIsPrint(false)
        props.onHandleLeaveItemsConfirm();
    };

    const handleCloseClick = () => {
        props.onHandleLeaveItemDialogClose();
    };

    return (
        <div className='add-items-container'>
            <div className='no-print'>
                <label className='dialog-title'>お預かり証</label>
                <div style={{ textAlign: "center" }}>
                    <img src="../../img/logo.png" style={{ width: "300px" }} alt="logo" />
                </div>
                <div className='purchase-register-container'>
                    <div className='screen-div3'>
                        <div className="mt-10">
                            <label className='flex-base' style={{ marginBottom: '0px' }}>名前<div>{customer_name}</div></label>
                        </div>
                        <div className="mt-10">
                            <label className='flex-base' style={{ marginBottom: '0px' }}>電話番号<div>{customer_phone_number1 ? customer_phone_number1 : customer_phone_number2}</div></label>
                        </div>
                    </div>
                    <div className='screen-div3'>
                        <div className="mt-10">
                            <label className='flex-base' style={{ marginBottom: '0px' }}>店舗名<div>{customer_shop}</div></label>
                            <div className="mt-10">
                                <label className='flex-base' style={{ marginBottom: '0px' }}>担当<div>{getItem("userdata").name}</div></label>
                            </div>
                            <div className='flex-base mt-20' style={{ alignItems: "center" }}>
                                <label>電話連絡</label>
                                <label className='flex-left custom-radio-label'>
                                    <input
                                        type="radio"
                                        name="hearing_item1"
                                        onChange={() => setCanCall(true)}
                                    />
                                    可
                                </label>
                                <label className='flex-left custom-radio-label'>
                                    <input
                                        type="radio"
                                        name="hearing_item1"
                                        onChange={() => setCanCall(false)}
                                    />
                                    不可
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='screen-div3'>
                        <label className='flex-right'>{moment().format('YYYY/MM/DD(ddd) HH:mm')}</label>
                        <div className="mt-10">
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="info"
                                title="印刷"
                                className="w-100-pro"
                                onClick={handlePrintClick}
                            />
                        </div>
                        <div className="mt-10">
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="outline-secondary"
                                title="閉じる"
                                className="w-100-pro"
                                onClick={handleCloseClick}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-20' style={{ textAlign: "center" }}>
                    <label>下記商品を、{moment(leave_deadline).format('YYYY年MM月DD日(ddd)')}までお預かり致します。</label>
                </div>
                <TableMaster
                    disabledSearch="true"
                    columns={columns}
                    dataSource={items}
                    scrollX={true}
                    pageSize={30}
                />
                <div style={{ textAlign: "right" }}>
                    <label>合計{total ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}点</label>
                </div>
            </div>
            <div ref={printRef} style={printStyle}>
                <div style={{ textAlign: "right" }}>
                    <img src="https://kaitorikun.new-challenge.jp/img/logo.png" style={{ width: "300px" }} alt="logo" />
                </div>
                <div style={{ textAlign: "center", fontSize: "30px" }}>
                    <label>商品お預り証</label>
                </div>
                <div style={{ textAlign: "left", fontSize: "20px" }}>
                    <label style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}>{customer_name}    様</label>
                </div>
                <div style={{ textAlign: "left", fontSize: "14px", marginTop: "20px" }}>
                    <label>ご連絡先：{customer_phone_number1 ? customer_phone_number1 : customer_phone_number2}</label>
                </div>
                <div style={{ textAlign: "right", fontSize: "14px" }}>
                    <label>{moment().format('YYYY/MM/DD(ddd) HH:mm')}</label>
                </div>
                <div style={{ textAlign: "left", fontSize: "14px" }}>
                    <label>電話連絡　：　{canCall ? "可" : "不可"}</label>
                </div>
                <div style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
                    <label>下記商品を、{moment(leave_deadline).format('YYYY年MM月DD日(ddd)')}までお預かり致します。</label>
                </div>
                <div style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
                    <label>商品内容</label>
                </div>
                <div style={{textAlign: "center", display: "flex", justifyContent: "center", marginTop: '20px'}}>
                    <table border="1">
                        <thead>
                            <tr>
                                <th style={{width: "200px", padding: "10px"}}>商品番号</th>
                                <th style={{width: "600px", padding: "10px"}}>商品名</th>
                                <th style={{width: "100px", padding: "10px"}}>個数</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td style={{textAlign: "center"}}>{item.item_no}</td>
                                    <td style={{textAlign: "center"}}>{item.name}</td>
                                    <td style={{textAlign: "center"}}>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ textAlign: "right", fontSize: "14px" }}>
                    <label>以上</label>
                </div>
                <div style={{ textAlign: "right", marginTop: "20px", fontSize: "14px" }}>
                    <label>買取WAKABA　{customer_shop}</label>
                </div>
                <div style={{ textAlign: "right", marginTop: "20px", fontSize: "14px" }}>
                    <label>TEL：0867-88-0582</label>
                </div>
                <div style={{ textAlign: "right", marginTop: "20px", fontSize: "14px" }}>
                    <label>担当：{getItem("userdata").name}</label>
                </div>
            </div>
        </div>
    );
};
export default LeaveItemsDialog;
