
function eventPrinter(evt) {
  console.log(evt);
}

function SearchFormView(props) {

  return (
    <div>
      <input onChange={e => props.onText(e.target.value)} />
      <select onChange={e => props.onDishType(e.target.value)}>
        <option>Choose:</option>
        {props.options.map(function(option) {
      return (<option>{option}</option>)
      })}
      </select>
      <button onClick={e => props.onSearch()}>Search!</button>
    </div>
  )
  
  
}