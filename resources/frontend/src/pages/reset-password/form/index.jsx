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

let FormResetPassword = (props) => {
    return (
        <form method="post" onSubmit={props.handleSubmit}>
            <Field
                name="newPassword"
                type="text"
                component={ReanderField}
                placeholder="新しいパスワード"
                iconFormGroup="fas fa-lock"
                formGroup
                customeCss="password-hide-css"
            />
            <Field
                name="confirmPassword"
                type="text"
                component={ReanderField}
                placeholder="確認パスワード"
                iconFormGroup="fas fa-lock"
                formGroup
                customeCss="password-hide-css"
            />
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
