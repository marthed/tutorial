const SearchFormPresentation = ({ onSearch, onType, onText }) => {
  const options = ["starter", "main course", "dessert"].map((option) => (
    <option key={option}>{option}</option>
  ));

  return (
    <div>
      <input onChange={(event) => onText(event.target.value)}></input>
      <select onChange={(event) => onType(event.target.value)}>
        {options}
      </select>
      <button onClick={() => onSearch()}>onSearch</button>
    </div>
  );
};

const SearchResultPresentation = ({ searchResults }) => {
  return (
    <div class="searchPresentation">
      {searchResults.map((dish) => (
        <span key={dish.id} class="searchResult">
          <div class="searchResult_image_container">
            <img
              src={`https://spoonacular.com/recipeImages/${dish.image}`}
            ></img>
          </div>
          {dish.title}
        </span>
      ))}
    </div>
  );
};
