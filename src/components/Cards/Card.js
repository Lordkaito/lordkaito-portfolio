import Button from "../Buttons";
import "../../styles/Cards.css";

const Card = ({ title, description, languages, link }) => {
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-languages">{languages}</div>
      <div className="card-link">{link}</div>
      <Button text="View Project" />
    </div>
  );
};

export default Card;