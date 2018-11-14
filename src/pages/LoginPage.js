import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propTypes, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';

import {
    Notification,
    userLogin as userLoginAction
} from 'react-admin';

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        minWidth: 300,
    },
    avatar: {
        margin: '1em',
        textAlign: 'center ',
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
    },
    directions: {
        textAlign: 'center',
        marginTop: '1em',
        color: '#999',
    },
};

function getColorsFromTheme(theme) {
    if (!theme) return { primary1Color: cyan500, accent1Color: pinkA200 };
    const {
        palette: {
            primary1Color,
            accent1Color,
        },
    } = theme;
    return { primary1Color, accent1Color };
}

const renderInput = ({ meta: { touched, error } = {}, input: { ...inputProps }, ...props }) =>
    <TextField
        errorText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />;

class Login extends Component {

    login = ({ email, password }) => {
        const { userLogin, location } = this.props;
        userLogin({ email, password }, location.state ? location.state.nextPathname : '/');
    }

    render() {
        const { handleSubmit, submitting, theme } = this.props;
        const muiTheme = getMuiTheme(theme);
        const { primary1Color, accent1Color } = getColorsFromTheme(muiTheme);
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{ ...styles.main, backgroundColor: primary1Color }}>
                    <Card style={styles.card}>
                        <div style={styles.avatar}>
                            <Avatar backgroundColor={accent1Color} icon={<LockIcon />} size={60} />
                        </div>
                        <form onSubmit={handleSubmit(this.login)}>
                            <div style={styles.form}>
                                <p style={styles.directions}>For administrative use only<br></br>
                                    To access MYR, please visit <a href="https://learnmyr.org">LearnMYR.org</a>.</p>
                                <div style={styles.input} >
                                    <Field
                                        name="email"
                                        component={renderInput}
                                        floatingLabelText="Email"
                                    />
                                </div>
                                <div style={styles.input}>
                                    <Field
                                        name="password"
                                        component={renderInput}
                                        floatingLabelText="Password"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <CardActions>
                                <RaisedButton type="submit" primary disabled={submitting} label="Sign In" fullWidth />
                            </CardActions>
                        </form>
                    </Card>
                    <Notification />
                </div>
            </MuiThemeProvider>
        );
    }
}

Login.propTypes = {
    ...propTypes,
    authClient: PropTypes.func,
    previousRoute: PropTypes.string,
    theme: PropTypes.object.isRequired,
};

Login.defaultProps = {
    theme: {},
};

const enhance = compose(
    reduxForm({
        form: 'signIn',
        validate: (values, props) => {
            const errors = {};
            if (!values.username) errors.username = "Please enter an email.";
            if (!values.password) errors.password = "Please enter a password.";
            return errors;
        },
    }),
    connect(null, { userLogin: userLoginAction }),
);

export default enhance(Login);
