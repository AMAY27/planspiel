import { useEffect, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Message could not be sent. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="contact-div" style={newstyles}>
      <ToastContainer />
      <div className="map-div" style={mapstyles}>
        <img src="/assets/man-311326.svg" alt="" />
      </div>
      <div id="form-div">
        <form onSubmit={handleSubmit}>
          <div className="formrow">
            <div className="inputs">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <div className="underline"></div>
              <label>First Name</label>
            </div>
            <div className="inputs">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              <div className="underline"></div>
              <label>Last Name</label>
            </div>
          </div>
          <div className="formrow">
            <div className="inputs">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <div className="underline"></div>
              <label>Email</label>
            </div>
          </div>
          <div className="formrow">
            <div className="inputs textarea">
              <textarea
                rows="8"
                cols="80"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <br />
              <div className="underline"></div>
              <label>Write your message</label>
            </div>
          </div>
          <div className="formrow">
            <div>
              <button className="formbtn" style={btnstyles} type="submit">
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
