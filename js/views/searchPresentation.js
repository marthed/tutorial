const SearchPresentation = ({ searchResults }) => {
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
