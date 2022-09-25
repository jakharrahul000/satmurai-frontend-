import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { IFormikInput } from '../../../interfaces';
import { FormikInputInfo, FormikError, FormikLabel } from '../formik';

export const FormikInput = React.forwardRef<HTMLInputElement, IFormikInput>(
    (
        {
            showLabel,
            label,
            name,
            labelClass,
            info,
            className,
            inputNumber,
            background,
            padding,
            fontSize,
            required,
            fieldType,
            ...rest
        },
        ref,
    ): JSX.Element => {
        const backgroundColor = background ? background : 'bg-white';
        const paddingClass = padding ? padding : ' px-3 py-2 md:px-4 md:py-2.5 ';
        const fontSizeClass =
            fontSize === 'small'
                ? ' text-xs md:text-sm '
                : fontSize === 'medium'
                ? ' text-sm '
                : ' text-base ';
        const baseClass = ' border border-solid border-gray-300 ';

        return (
            <div className="flex-grow">
                <FormikLabel
                    inputNumber={inputNumber}
                    showLabel={showLabel}
                    label={label}
                    name={name}
                    labelClass={labelClass}
                    required={required}
                />
                {fieldType !== 'textarea' ? (
                    <Field id={name} name={name}>
                        {({ field, meta }: FieldProps) => {
                            const { error, touched } = meta;

                            return (
                                <div className="flex flex-col">
                                    <input
                                        className={
                                            className +
                                            ' ' +
                                            baseClass +
                                            ' ' +
                                            backgroundColor +
                                            ' ' +
                                            paddingClass +
                                            ' ' +
                                            fontSizeClass +
                                            ' rounded-md outline-none md:font-regular w-full ' +
                                            (rest.disabled ? ' text-gray-600 ' : ' text-gray-700 ')
                                        }
                                        {...rest}
                                        id={name}
                                        {...field}
                                        ref={ref}
                                    />
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
                        }}
                    </Field>
                ) : (
                    <Field
                        name={name}
                        component="textarea"
                        rows="3"
                        className={
                            className +
                            ' ' +
                            baseClass +
                            ' ' +
                            backgroundColor +
                            ' ' +
                            paddingClass +
                            ' ' +
                            fontSizeClass +
                            ' ' +
                            ' rounded-md outline-none text-gray-700 md:font-regular w-full'
                        }
                        {...rest}
                        id={name}
                        ref={ref}
                    />
                )}
            </div>
        );
    },
);
