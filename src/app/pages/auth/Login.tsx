import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { FormikControl, Button, Spinner } from '../../modules/core';
import { EMAIL_REGEXP } from 'app/utils';
import { ILogin } from '../../interfaces';
import { useAppDispatch } from 'store/store';
import { LoginStart } from 'store/thunks';
import { getAuthLoading } from 'store/selectors';

interface ILoginForm {
    email: string;
    password: string;
}

export const Login = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const authLoading = useSelector(getAuthLoading);

    const initialValues: ILoginForm = {
        email: '',
        password: '',
    };

    const validationSchema = yup.object({
        email: yup
            .string()
            .matches(EMAIL_REGEXP, 'Please enter a valid email or number')
            .required('Field is required'),
        password: yup.string().required('Field is required'),
    });

    const onSubmit = ({ email, password }: ILoginForm) => {
        const loginData: ILogin = {
            email,
            password,
        };

        dispatch(LoginStart({ payload: loginData, navigate }));
    };

    return (
        <div className="flex flex-col items-center sm:pt-10 md:pt-16">
            <div className="rounded-2xl sm:shadow px-6 py-6 md:p-10 w-full max-w-lg flex flex-col content-center sm:mb-8 md:mb-16">
                <div className="mb-5 md:mb-10 flex flex-col items-center">
                    <div className="text-gray-900 font-medium text-xl leading-normal md:leading-loose ">
                        Sign in to Task Manager
                    </div>
                    <div className="text-base">
                        <span className="text-gray-500 font-medium">New Here? </span>
                        <Link
                            to="/register"
                            className="text-blue-500  font-semibold nhover:hover:underline"
                        >
                            Create an Account
                        </Link>
                    </div>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                >
                    {() => (
                        <Form>
                            <FormikControl inputNumber={1} label="Email" name="email" />
                            <FormikControl
                                inputNumber={2}
                                label="Password"
                                name="password"
                                type="password"
                            />
                            <Button
                                disabled={authLoading}
                                type="submit"
                                color="primary"
                                large
                                className="w-full mt-5 md:mt-6 flex justify-center  items-center"
                            >
                                {authLoading ? (
                                    <div className="flex items-center gap-x-2.5">
                                        <Spinner />
                                        <span>Signing in</span>
                                    </div>
                                ) : (
                                    <div>Sign In</div>
                                )}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
