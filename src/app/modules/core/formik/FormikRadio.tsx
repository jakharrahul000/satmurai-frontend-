import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { FormikInputInfo, FormikError, FormikLabel } from '../formik';
import { IFormikInput } from '../../../interfaces';

export const FormikRadio = React.forwardRef<HTMLInputElement, IFormikInput>(
    (
        { showLabel, label, name, options, labelClass, className, inputNumber, info, ...rest },
        ref,
    ): JSX.Element => {
        const radioOptions = options ? options : [];

        if (radioOptions.length === 0) return <></>;

        return (
            <div>
                <FormikLabel
                    inputNumber={inputNumber}
                    showLabel={showLabel}
                    label={label}
                    name={name}
                    labelClass={labelClass}
                />
                <Field id={name} name={name}>
                    {({ field, meta }: FieldProps) => {
                        const { error, touched } = meta;

                        return (
                            <div className="flex flex-col gap-2">
                                {radioOptions.map((option, index) => {
                                    return (
                                        <div key={index} className="flex items-center">
                                            <input
                                                {...rest}
                                                className={
                                                    className + ' w-4 h-4 cursor-pointer flex-none'
                                                }
                                                type="radio"
                                                id={option.value}
                                                {...field}
                                                value={option.value}
                                                checked={field.value === option.value}
                                                ref={ref}
                                            />
                                            {option.key}
                                        </div>
                                    );
                                })}
                                {error && (
                                    <ErrorMessage name={name}>
                                        {(msg) => <FormikError>{msg}</FormikError>}
                                    </ErrorMessage>
                                )}
                                {(!error || (error && !touched)) && info && (
                                    <FormikInputInfo>{info}</FormikInputInfo>
                                )}
                            </div>
                        );

                        return;
                    }}
                </Field>
            </div>
        );
    },
);
