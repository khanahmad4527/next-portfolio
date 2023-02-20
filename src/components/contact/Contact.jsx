import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";

function Contact() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="contact-main" id="contact">
      <div className="headingwrapper">
        <h1 className="contactheading">Contact</h1>
        <div className="headingwrapperDiv">
          <div className="headingwrapperDivLeft">
            <Image
              src="https://www.genscript.com/gsimages/support/image-contactus.png"
              alt="contactme"
              width={400}
              height={50}
              unoptimized={true}
            />
          </div>
          <div className="headingwrapperDivRight">
            <div className="contact-gmail" id="contact-email">
              <SiGmail /> khanahmad4527@gmail.com
            </div>
            <div className="contact-number" id="contact-phone">
              <IoMdCall /> +917021764527
            </div>
            <div className="contact-location">
              <MdLocationOn /> Thane, Maharashtra
            </div>
            <div className="contact-socialLink">
              <Image
                onClick={() => openLink("https://github.com/khanahmad4527")}
                src={"/Images/github.svg"}
                alt="About"
                id="contact-github"
                width={50}
                height={50}
              />
              <Image
                onClick={() =>
                  openLink("https://www.linkedin.com/in/khanahmad4527")
                }
                src={"/Images/linkedin.svg"}
                alt="About"
                id="contact-linkedin"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
