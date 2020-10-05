const SidebarPresentation = ({ guests, minusOne, plusOne }) => {
  return (
    <div>
      <button onClick={minusOne}>-</button>
      <button onClick={plusOne}>+</button>
    </div>
  );
};
