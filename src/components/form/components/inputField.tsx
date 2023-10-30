import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InputField = (props:any) => {
   const { name, label, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default InputField;