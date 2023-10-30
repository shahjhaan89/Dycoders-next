import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../form/components/inputField';
import RadioField from '../form/components/radioField';

const initialValues = {
  meeting_duration: '',
  meeting_time: '',
  email: '',
  fullname: '',
};

const validationSchema = Yup.object().shape({
  meeting_duration: Yup.string().required('Duration is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  meeting_time: Yup.string().required('Time is required'),
  fullname: Yup.string().required('Gender is required'),
  bio: Yup.string(),
});

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const FormComponent = () => {
  const handleSubmit = (values:any, actions:any) => {
    console.log(values);
    // Perform form submission here
    actions.setSubmitting(false);
  };

  



  return (
    <div>
      <h2>Complete Form</h2>
     
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField name="name" label="Name" />
          <InputField name="email" label="Email" />
          <InputField name="phone" label="Phone" />

          {/* <SelectField name="gender" label="Gender" options={genderOptions} /> */}

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
