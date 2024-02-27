const FormWithCustomValidation = () => {
  return (
    <form className="form">
      <div className="form-row row-flex">
        <label htmlFor="name" className="form-label">
          Enter name:
        </label>
        <input
          type="text"
          name="firstName"
          className="form-input"
          placeholder="first name"
        />
        <input
          type="text"
          name="lastName"
          className="form-input"
          placeholder="last name"
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
        />
      </div>
      <div className="form-row">
        <label htmlFor="gender" className="form-label">
          gender
        </label>
        <select name="gender" id="gender" className="form-input">
          <option value="" disabled selected>
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
          />
          <label htmlFor="coding">coding</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            className="form-input"
            name="sports"
            id="sports"
          />
          <label htmlFor="sports">sports</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            className="form-input"
            name="music"
            id="music"
          />
          <label htmlFor="music">music</label>
        </div>
      </div>
      <div className="form-row row-flex">
        <label htmlFor="dateOfBirth" className="form-label">
          date of birth:
        </label>
        <input type="date" className="form-input" />
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
