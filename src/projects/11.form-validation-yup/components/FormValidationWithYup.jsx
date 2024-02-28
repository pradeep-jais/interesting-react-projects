import { useState } from 'react';
import FormError from './FormError';
import * as Yup from 'yup';

const FormValidationWithYup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    interests: [],
    dateOfBirth: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const formValidationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('last name is required'),
    email: Yup.string()
      .required('email is required')
      .email('Invalid email format'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^\d{10}$/, 'Enter a valid phone number'),
    password: Yup.string()
      .required('Password is required')
      .matches(/[!@#$%^&*]/, 'password must contain at least one symbol')
      .matches(/[0-9]/, 'password must contain at least one number')
      .matches(/[A-Z]/, 'password must contain at least one uppercase')
      .matches(/[a-z]/, 'password must contain at least one lowercase')
      .min(8, 'Password length should be at least 8'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'password must match'
    ),
    age: Yup.number()
      .typeError('Age must be a number')
      .min(18, 'Age should be greater than 18')
      .max(100, 'Age must not be greater than 100')
      .required('age is required'),
    gender: Yup.string().required('Gender is required'),
    interests: Yup.array().min(1, 'Choose at least one interest'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setFormErrors({});
      await formValidationSchema.validate(formData, {
        abortEarly: false,
      });
      console.log('Form submitted', formData);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((item) => {
        const { path, message } = item;
        newErrors[path] = message;
      });

      setFormErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    let updatedInterests = [...formData.interests];

    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter((item) => item !== name);
    }
    setFormData({ ...formData, interests: updatedInterests });
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-row row-flex">
        <label htmlFor="name" className="form-label">
          Enter name:
        </label>
        <input
          type="text"
          name="firstName"
          className="form-input"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="form-input"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      {formErrors.firstName && formErrors.lastName ? (
        <FormError>Name is required</FormError>
      ) : (
        <>
          {formErrors.firstName && (
            <FormError>{formErrors.firstName}</FormError>
          )}
          {formErrors.lastName && <FormError>{formErrors.lastName}</FormError>}
        </>
      )}

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          enter email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          placeholder="your email@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <FormError>{formErrors.email}</FormError>}
      </div>
      <div className="form-row">
        <label htmlFor="phoneNumber" className="form-label">
          phone number
        </label>
        <input
          type="text"
          className="form-input"
          name="phoneNumber"
          placeholder="enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {formErrors.phoneNumber && (
          <FormError>{formErrors.phoneNumber}</FormError>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          type="password"
          className="form-input"
          name="password"
          placeholder="enter password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <FormError>{formErrors.password}</FormError>}
      </div>
      <div className="form-row">
        <label htmlFor="confirmPassword" className="form-label">
          confirm password
        </label>
        <input
          type="password"
          className="form-input"
          name="confirmPassword"
          placeholder="re-enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {formErrors.confirmPassword && (
          <FormError>{formErrors.confirmPassword}</FormError>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          type="number"
          className="form-input"
          name="age"
          placeholder="enter your age"
          value={formData.age}
          onChange={handleChange}
        />
        {formErrors.age && <FormError>{formErrors.age}</FormError>}
      </div>
      <div className="form-row">
        <label htmlFor="gender" className="form-label">
          gender
        </label>
        <select
          name="gender"
          id="gender"
          className="form-input"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled default>
            select your gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="transgender">transgender</option>
        </select>
        {formErrors.gender && <FormError>{formErrors.gender}</FormError>}
      </div>
      <div className="form-row row-flex">
        <label htmlFor="interests" className="form-label">
          interests:
        </label>
        <div className="checkbox">
          <input
            type="checkbox"
            className="form-input"
            name="coding"
            id="coding"
            checked={formData.interests.includes('coding')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="coding">coding</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            className="form-input"
            name="sports"
            id="sports"
            checked={formData.interests.includes('sports')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="sports">sports</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            className="form-input"
            name="music"
            id="music"
            checked={formData.interests.includes('music')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="music">music</label>
        </div>
        {formErrors.interests && <FormError>{formErrors.interests}</FormError>}
      </div>
      <div className="form-row row-flex">
        <label htmlFor="dateOfBirth" className="form-label">
          date of birth:
        </label>
        <input
          type="date"
          name="dateOfBirth"
          className="form-input"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      {formErrors.dateOfBirth && (
        <FormError>{formErrors.dateOfBirth}</FormError>
      )}
      <button
        type="submit"
        className="btn btn-hipster"
        style={{ width: '100%' }}
      >
        submit
      </button>
    </form>
  );
};
export default FormValidationWithYup;
