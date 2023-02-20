function TechStack({ src, title }) {
  return (
    <div className="skills-card">
      <div className="skills-card-img">
        <img src={src} alt={title} />
      </div>
      <p className="skills-card-name">{title}</p>
    </div>
  );
}

export default TechStack;
