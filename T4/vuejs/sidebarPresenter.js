//vuejs/sidebarPresenter.js
function SidebarPresenter(props){ 
  return <SidebarView guests={props.model.numberOfGuests} 
                 setGuests= {
                   (guests) => props.model.setNumberOfGuests(guests)
                }
   />
}
