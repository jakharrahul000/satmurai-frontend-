import React from 'react';
import { IFormikInput } from '../../../interfaces';
import { FormikInput, FormikCheckBox, FormikRadio } from '../formik';

export const FormikControl = React.forwardRef<HTMLInputElement, IFormikInput>(
    ({ control, ...rest }, ref): JSX.Element => {
        switch (control) {
            case 'checkbox':
                return <FormikCheckBox {...rest} ref={ref} />;
            case 'radio':
                return <FormikRadio {...rest} ref={ref} />;
            default:
                return <FormikInput {...rest} fieldType={control} ref={ref} />;
        }
    },
);
