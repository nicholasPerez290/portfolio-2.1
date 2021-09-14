import "./contact.css";
import gitlogo from "./GitHub-Mark-Light-120px-plus.png";
import linkedlogo from "./In-White-21-Γö¼┬½@2x.png";
import emaillogo from "./OIP.jpg";
import maillogo from "./2965306.png"
import phonelogo from "./831309.png"
export default function Contact() {
  return(  
  <div className="contact-cont">
        <a href="https://github.com/nicholasPerez290" className="cont github"><img className="logo"src={gitlogo} />nicholasPerez290</a>
        <a href="www.linkedin.com/in/nicholas-perez-64a6a7216" className="cont linkedin"><img className="logo"src={linkedlogo} />Nicholas Perez</a>
        <a href="mailto:nicholas.perez290@gmail.com" className="cont" id="email"><img className="logo" src={maillogo} />nicholas.perez290@gmail.com</a>
        <a href="" id="phone" className="cont"><img className="logo" src={phonelogo}/>(678)-634-6815</a>
    </div>
    )
}