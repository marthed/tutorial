

function SidebarView(props) {

  return (<div>
    <button onClick={e => {
      props.setGuests(props.guests - 1)
    }}disabled={props.guests <= 1}>-</button>
    {props.guests}
    <button onClick={e => props.setGuests(props.guests +1 )}>+</button>
  </div>)
}