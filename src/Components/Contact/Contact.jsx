import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f14951cc-c730-48af-aa1d-54d3490d9934");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Feel free to reach out to us with any questions or feedback.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@edusity.com</li>
                <li><img src={phone_icon} alt="" />+1 (555) 123-4567</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br/>MA 02139,United States</li>
            </ul>
        </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <lable>Your Name</lable>
            <input type="text" name="name" placeholder="Enter your name" required/>

            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Enter your phone number" required/>

           <label>Write your message here</label>
           <textarea name="message"  rows="6" placeholder="Enter your message..." required></textarea>

           <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
      
    </div>
  )
}

export default Contact

