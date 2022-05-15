import style from './Form.module.css';

export const Form = () => {
  return (
    <form className={style.form}>
      <h3 className={style.formHead}>Create an account</h3>
      <section className={style.formSection}>
        <label htmlFor='email' className={style.inputLabel}>
          Your email address
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className={style.formInput}
        />
      </section>
      <section className={style.formSection}>
        <label htmlFor='password' className={style.inputLabel}>
          Your password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          className={style.formInput}
        />
      </section>
      <section className={style.formSection}>
        <label htmlFor='confirmpassword' className={style.inputLabel}>
          Confirm your password
        </label>
        <input
          type='password'
          name='confirmpassword'
          id='confirmpassword'
          className={style.formInput}
        />
      </section>
      <section className={style.formSection}>
        <label htmlFor='fullname' className={style.inputLabel}>
          Your full name
        </label>
        <input
          type='text'
          name='fullname'
          id='fullname'
          className={style.formInput}
        />
      </section>
      <section className={style.formSection}>
        <label htmlFor='phone' className={style.inputLabel}>
          Your phone number
        </label>
        <input
          type='tel'
          name='phone'
          id='phone'
          className={`${style.formInput} ${style.phone}`}
        />
      </section>
      <section className={style.checkSection}>
        <input type='checkbox' name='TC' id='TC' />
        <label htmlFor='TC' className={style.checkLabel}>
          I read and agree Terms and Conditions
        </label>
      </section>
      <button type='submit' className={style.submit}>
        Create account
      </button>
    </form>
  );
};
