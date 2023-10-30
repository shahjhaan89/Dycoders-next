import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectField = (props:any) => {
    const { name, label, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} {...rest}>
        {options.map((option:any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default SelectField;