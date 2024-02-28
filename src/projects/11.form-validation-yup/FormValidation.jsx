// import FormWithCustomValidation from './components/FormWithCustomValidation';
import FormValidationWithYup from './components/FormValidationWithYup';
import './styles.css';

const FormValidation = () => {
  return (
    <section className="form-project">
      <div className="section-center">
        <div className="title">
          <h3>form validation</h3>
          <div className="underline"></div>
        </div>

        {/* <FormWithCustomValidation /> */}
        <FormValidationWithYup />
      </div>
    </section>
  );
};
export default FormValidation;
