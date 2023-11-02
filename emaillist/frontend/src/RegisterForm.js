import React from "react";
import styles from './assets/scss/RegisterForm.scss'
function RegisterForm(props){
    return(
    <form className={styles.RegisterForm}>
              <input type='text' name='firstName' placeholder='성' class={styles.InputFirstName} />
              <input type='text' name='lastName' placeholder='이름' class={styles.InputLastName} />
              <input type='text' name='email' placeholder='이메일' class={styles.InputEmail} />
              <input type='submit' value='등록' />
            </form> 
);

}

export default RegisterForm;