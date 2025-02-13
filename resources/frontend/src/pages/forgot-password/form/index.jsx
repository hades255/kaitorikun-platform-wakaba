import {
    ReanderField,
    React,
    Field,
    Button,
    Row,
    Col,
    ToastNotification,
    postData
} from "../../../components";
import { reduxForm } from "redux-form";
import Validate from "../validate";
import { useState } from 'react';
import { withRouter } from "react-router-dom";

let FormForgotPassword = (props) => {
    const [email, setEmail] = useState()
    const handleSendMailClick = async () => {
        try {
            let feedback = await postData("forgot-password", {
                email: email
            })
            if (feedback.status === 200) {
                ToastNotification("success", "メールを送信しました。");
                setTimeout(() => {
                    props.history.push("/");
                    window.location.reload();
                }, 500);
            }
        } catch (error) {
            ToastNotification("error", error.message);
        }
    };

    return (
        <form method="post" onSubmit={props.handleSubmit}>
            <div className="forgot-pwd-link">
                パスワードをお忘れですか？ あなたのメールアドレスをお知らせください。新しいパスワードを選択できるパスワード リセットリンクをメールでお送りします。
            </div>
            <Field
                type="email"
                name="email"
                component={ReanderField}
                iconFormGroup="fas fa-envelope"
                formGroup
                placeholder="登録したメールアドレス"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Row>
                <Col size="12">
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="primary"
                        block
                        title="送信"
                        onClick={handleSendMailClick}
                    />
                </Col>
            </Row>
        </form>
    );
};
FormForgotPassword = reduxForm({
    form: "FormForgotPassword",
    enableReinitialize: true,
    validate: Validate,
})(FormForgotPassword);
export default withRouter(FormForgotPassword);
