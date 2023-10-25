import { useEffect, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = ({ styles }) => {
  let newstyles = {};
  let mapstyles = {};
  let btnstyles = {};
  if (styles === true) {
    newstyles = {
      display: "block",
      padding: "2vw",
    };
    mapstyles = {
      width: "100%",
      padding: "3vw",
    };
    btnstyles = {
      padding: "4vw 4vw",
    };
  } else {
    newstyles = {};
    mapstyles = {};
  }

  useEffect(() => emailjs.init("n-Y1rCXlDgP8NEX4Y"), []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_t0z9cfa";
    const templateId = "template_8ng55x2";
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.firstName + " " + formData.lastName,
        from_email: formData.email,
        recipient: "vtenet125@gmail.com",
        message: formData.message,
      });
      // TODO Success response
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.elements["firstName"].value;
    const lastName = e.target.elements["lastName"].value;
    const email = e.target.elements["email"].value;
    const message = e.target.elements["message"].value;
    const emailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;
    const companyEmail = "vtenet125@gmail.com";
    if (
      window.confirm(
        "Review your message. Click OK to open your email client to send this message."
      )
    ) {
      window.location.href = `mailto:${companyEmail}?subject=Contact Us&body=${encodeURIComponent(
        emailBody
      )}`;
    }
  };

  return (
    <div className="contact-div" style={newstyles}>
      <div className="map-div" style={mapstyles}>
        <img src="/assets/man-311326.svg" alt="" />
      </div>
      <div id="form-div">
        <form action="">
          <div className="formrow">
            <div className="inputs">
              <input type="text" required={true} />
              <div className="underline"></div>
              <label for="">First Name</label>
            </div>
            <div className="inputs">
              <input type="text" required={true} />
              <div className="underline"></div>
              <label for="">Last Name</label>
            </div>
          </div>
          <div className="formrow">
            <div className="inputs">
              <input type="text" required={true} />
              <div className="underline"></div>
              <label for="">Email</label>
            </div>
          </div>
          <div className="formrow">
            <div className="inputs textarea">
              <textarea rows="8" cols="80" required={true}></textarea>
              <br />
              <div className="underline"></div>
              <label for="">Write your message</label>
            </div>
          </div>
          <div className="formrow">
            <div>
              <button className="formbtn" style={btnstyles}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
