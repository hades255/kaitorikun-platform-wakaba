import {
    ReanderField,
    React,
    Field,
    Button,
    Row,
    ToastNotification,
    Col,
    postData
} from "../../../components";
import { reduxForm } from "redux-form";
import Validate from "../validate";
import { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

let FormResetPassword = (props) => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    return (
        <form method="post" onSubmit={props.handleSubmit}>
            <div style={{ position: 'relative' }}>
                <Field
                    name="newPassword"
                    type="text"
                    component={ReanderField}
                    placeholder="新しいパスワード"
                    iconFormGroup="fas fa-lock"
                    formGroup
                    customeCss={showPassword1 ? '' : 'password-hide-css'}
                />
                {showPassword1 ?
                    <VisibilityOff
                        onClick={togglePasswordVisibility1}
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
                        onClick={togglePasswordVisibility1}
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
            <div style={{ position: 'relative' }}>
                <Field
                    name="confirmPassword"
                    type="text"
                    component={ReanderField}
                    placeholder="確認パスワード"
                    iconFormGroup="fas fa-lock"
                    formGroup
                    customeCss={showPassword2 ? '' : 'password-hide-css'}
                />
                {showPassword2 ?
                    <VisibilityOff
                        onClick={togglePasswordVisibility2}
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
                        onClick={togglePasswordVisibility2}
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
            <Row>
                <Col size="12">
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="primary"
                        block
                        title="確認"
                    />
                </Col>
            </Row>
        </form>
    );
};
FormResetPassword = reduxForm({
    form: "FormResetPassword",
    enableReinitialize: true,
    validate: Validate,
})(FormResetPassword);
export default FormResetPassword;
