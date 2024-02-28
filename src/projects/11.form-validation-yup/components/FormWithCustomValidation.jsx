import { useState } from 'react';
import FormError from './FormError';

const FormWithCustomValidation = () => {
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

  const validateForm = () => {
    const newError = {};

    if (!formData.firstName || !formData.lastName) {
      newError.fullName = 'Full Name is required';
    }

    if (!formData.email) {
      newError.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newError.email = 'Enter valid email';
    }

    if (!formData.phoneNumber) {
      newError.phoneNumber = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newError.phoneNumber = 'Phone number is not valid';
    }

    if (!formData.password) {
      newError.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      newError.password =
        'Password must be at least 8 characters long and contain at least one symbol, one uppercase and one number';
    }

    if (!formData.confirmPassword) {
      newError.confirmPassword = 'confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = 'password must match';
    }

    if (!formData.age) {
      newError.age = 'age is required';
    } else if (!isValidAge(formData.age)) {
      newError.age = 'Age should be between 18 and 100';
    }

    if (!formData.gender) {
      newError.gender = 'gender is required';
    }

    if (formData.interests.length === 0) {
      newError.interests = 'choose at least one interest';
    }

    if (!formData.dateOfBirth) {
      newError.dateOfBirth = 'date of birth is required';
    }

    setFormErrors(newError);
  };

  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;

    return emailRegex.test(email);
  }

  function isValidPhoneNumber(number) {
    return number.length === 10 && !isNaN(number);
  }

  function isValidPassword(password) {
    const symbolRegex = /[!@#$%^&*]/;
    const numberRegex = /[0-9]/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password)
    );
  }

  function isValidAge(age) {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validated = validateForm();

    if (validated) {
      console.log('Form submitted successfully', formData);
    } else {
      console.log('Form validation failed!');
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
      {formErrors.fullName && <FormError>{formErrors.fullName}</FormError>}
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
export default FormWithCustomValidation;
