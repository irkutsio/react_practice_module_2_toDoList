export const Header = ({ title, showModal }) => {
  return (
    <div>
      <h2>{title}</h2>
      <button type="button" onClick={showModal}>open Modal</button>
    </div>
  );
};
