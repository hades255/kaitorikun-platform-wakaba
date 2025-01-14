import {
    ReanderField,
    React,
    Field,
    Button,
    Row,
    Col,
} from "../../../components";
import { reduxForm } from "redux-form";
import Validate from "../validate";
let FormForgotPassword = (props) => {
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
export default FormForgotPassword;
