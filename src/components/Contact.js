import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    
      <div className={styles.contact__form}>
        <form>
          <input required type="text" placeholder="Name"></input>
          <input required type="email" placeholder="Email"></input>
          <textarea
            required
            rows="8"
            placeholder="Submit your question"
          ></textarea>
          <button className={styles.contact__button}>
            Submit your question
          </button>
        </form>
      </div>
    
  );
};

export default Contact;
