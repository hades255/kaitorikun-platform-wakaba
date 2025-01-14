import {
    ReanderField,
    React,
    Field,
    Button,
    Row,
    Col,
    Link
} from "../../../components";
import { reduxForm } from "redux-form";
import Validate from "../validate";
let FormLogin = (props) => {
    return (
        <form method="post" onSubmit={props.handleSubmit}>
            <Field
                name="email"
                component={ReanderField}
                iconFormGroup="fas fa-envelope"
                formGroup
                placeholder="メールアドレスまたはログインID"
            />
            <Field
                name="password"
                type="text"
                component={ReanderField}
                placeholder="パスワード"
                iconFormGroup="fas fa-lock"
                formGroup
                customeCss="password-hide-css"
            />
            <Link
                aria-label="パスワードを忘れた方はこちら"
                to="/forgot-password"
                className="forgot-pwd-link"
            >
                パスワードを忘れた方はこちら
            </Link>
            <Row>
                <Col size="12">
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="primary"
                        block
                        title="ログイン"
                    />
                </Col>
            </Row>
        </form>
    );
};
FormLogin = reduxForm({
    form: "FormLogin",
    enableReinitialize: true,
    validate: Validate,
})(FormLogin);
export default FormLogin;
