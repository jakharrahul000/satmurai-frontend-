import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { FormikControl, Button, Spinner } from '../../modules/core';
import { DISPLAY_NAME_REGEXP, EMAIL_REGEXP } from 'app/utils';
import { IRegister } from '../../interfaces';
import { useAppDispatch } from 'store/store';
import { RegisterStart } from 'store/thunks';
import { getAuthLoading } from 'store/selectors';

interface IRegisterForm {
    email: string;
    password: string;
    name: string;
}

export const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const authLoading = useSelector(getAuthLoading);

    const initialValues: IRegisterForm = {
        email: '',
        password: '',
        name: '',
    };

    const validationSchema = yup.object({
        email: yup
            .string()
            .matches(EMAIL_REGEXP, 'Please enter a valid email')
            .required('Field is required'),
        password: yup.string().required('Field is required'),
        name: yup
            .string()
            .matches(DISPLAY_NAME_REGEXP, 'Must contain only letters and spaces')
            .required('Field is required'),
    });

    const onSubmit = ({ email, password, name }: IRegisterForm) => {
        const registerData: IRegister = {
            email,
            password,
            name,
        };

        dispatch(RegisterStart({ payload: registerData, navigate }));
    };

    return (
        <div className="flex flex-col items-center sm:pt-10 md:pt-16">
            <div className="rounded-2xl sm:shadow px-6 py-6 md:p-10 w-full max-w-lg flex flex-col content-center sm:mb-8 md:mb-16">
                <div className="mb-5 md:mb-10 flex flex-col items-center">
                    <div className="text-gray-900 font-medium text-xl leading-normal md:leading-loose ">
                        Sign up for Task Manager
                    </div>
                    <div className="text-base">
                        <span className="text-gray-500 font-medium">Already have an account? </span>
                        <Link
                            to="/"
                            className="text-blue-500  font-semibold nhover:hover:underline"
                        >
                            Sign In
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
                            <FormikControl inputNumber={1} label="Name" name="name" />
                            <FormikControl inputNumber={2} label="Email" name="email" />
                            <FormikControl
                                inputNumber={3}
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
                                        <span>Signing up</span>
                                    </div>
                                ) : (
                                    <div>Sign Up</div>
                                )}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
