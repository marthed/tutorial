//vuejs/sidebarPresenter.js
const SidebarPresenter = { 
  computed: {
    guests () {
      return this.$store.state.numberOfGuests;
    }
  },
  methods: {
    ...Vuex.mapMutations([
      'setNumberOfGuests'
    ])
  },
  render(h) {
    return <SidebarView 
              guests={this.guests} 
              setGuests= {(guests) => this.setNumberOfGuests(guests)
              }
            />
  } 
}
