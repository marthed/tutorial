const SearchPresentation = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((dish) => (
        <span key={dish.id}>{dish.title}</span>
      ))}
    </div>
  );
};
