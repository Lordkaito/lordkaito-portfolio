import Button from "./Buttons";

const Header = () => {
  return (
    <div className="header">
      <div className="salut">
        <p>Hello there!</p>
      </div>
      <div className="presentation">
        <h2>I'm Isai</h2>
      </div>
      <div className="description">
        <p>
          I'm a software developer! I can help you build a product, feature or
          website.
        </p>
      </div>
      <Button text="Contact me" />
    </div>
  );
};

export default Header;
