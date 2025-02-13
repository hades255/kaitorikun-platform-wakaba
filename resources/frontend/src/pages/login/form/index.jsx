import { useState, useEffect } from 'react';
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
let FormLogin = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <form method="post" onSubmit={props.handleSubmit}>
            <Field
                name="email"
                component={ReanderField}
                iconFormGroup="fas fa-envelope"
                formGroup
                placeholder="メールアドレスまたはログインID"
            />
            <div style={{ position: 'relative' }}>
                <Field
                    name="password"
                    type="text"
                    component={ReanderField}
                    placeholder="パスワード"
                    iconFormGroup="fas fa-lock"
                    formGroup
                    customeCss={showPassword ? '' : 'password-hide-css'}
                />
                {showPassword ?
                    <VisibilityOff
                        onClick={togglePasswordVisibility}
                        style={{
                            position: 'absolute',
                            cursor: 'pointer',
                            top: '9px',
                            right: '45px',
                            zIndex: '10'
                        }}
                    />
                    :
                    <Visibility
                        onClick={togglePasswordVisibility}
                        style={{
                            position: 'absolute',
                            cursor: 'pointer',
                            top: '9px',
                            right: '45px',
                            zIndex: '10'
                        }}
                    />
                }
            </div>
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
