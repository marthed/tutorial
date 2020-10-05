const SidebarPresentation = ({ guests, setGuests }) => {
  return (
    <div>
      <button onClick={() => setGuests(guests - 1)} disabled={guests < 2}>
        -
      </button>
      <button onClick={() => setGuests(guests + 1)}>+</button>
    </div>
  );
};
