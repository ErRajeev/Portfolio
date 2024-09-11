import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contacts" id="contacts">
        <div className="left">
          <img src="assets/shake.svg" alt="alt" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form>
            <input type="email" placeholder="Email id" />
            <input type="number" placeholder="Mobile" />
            <textarea>feedback</textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
