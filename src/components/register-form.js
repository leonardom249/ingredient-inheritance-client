import React from 'react';
import {required, nonEmpty, matches, length, trimmed} from '../validators';

import {Field, reduxForm} from 'redux-form';
import {login} from '../actions/auth';
import Input from './input';

import {registerUser} from '../actions/user';

const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, fullName} = values;
        const user = {username, password, fullName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="fullName">Full Name:</label>
                <Field component={Input} type="text" name="fullName" />
                <label htmlFor="register username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, trimmed]}
                />
                <label htmlFor="register password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, trimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button 
                    type="submit"
                    className='form-button'
                >
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register'
})(RegistrationForm);