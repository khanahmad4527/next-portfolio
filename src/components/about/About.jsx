import Image from "next/image";

function About() {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="about section" id="about">
      <h1 className="aboutH1">About me</h1>
      <div className="aboutWrapper">
        <div className="aboutWrapperDiv">
          <div className="aboutMe" id="user-detail-intro">
            <span id="user-detail-name">I am Ahmad Khan</span> an analytical and
            detail oriented aspiring full stack web developer with a passion for
            coding and new technologies. Strong skillset in technologies such as
            React, JavaScript, Next.js, Redux, Node.js, and MongoDB. Capable of
            building both single-page and multi-page web applications,
            continuously seeking to learn and grow as a developer and bring
            skills and passion to a new opportunity.
          </div>
          <div className="about-socialLink">
            <Image
              onClick={() => openLink("https://github.com/khanahmad4527")}
              src={"/Images/github.svg"}
              alt="About"
              width={50}
              height={50}
              //unoptimized={true}
            />
            <Image
              onClick={() =>
                openLink("https://www.linkedin.com/in/khanahmad4527")
              }
              src={"/Images/linkedin.svg"}
              alt="About"
              width={50}
              height={50}
              //
            />
          </div>
        </div>
        <div className="aboutWrapperImg">
          <Image
            src={"/Images/About.png"}
            alt="About"
            width={230}
            height={50}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
