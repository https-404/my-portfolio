import './Experience.css'
const Experience = (props) => {
  var summary = [];
  for (var i in props.summary) {
    summary.push(<li key={i}>{props.summary[i]}</li>);
  }

  return (
    <div className="experienceWrapper">
            <img className="companyImage" src={props.img} alt={`${props.company} Logo`} />

      <h1 className="companyTitle">{props.company}</h1>
      <h2 className="years">
        {props.title}, {props.years}
      </h2>
      <ul className="summary">{summary}</ul>
    </div>
  );
};

export default Experience;
