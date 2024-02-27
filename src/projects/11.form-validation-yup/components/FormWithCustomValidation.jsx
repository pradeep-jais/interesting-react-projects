import { useState } from 'react';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('form submitted successfully', formData);
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
