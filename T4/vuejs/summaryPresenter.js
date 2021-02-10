//vuejs/summaryPresenter.js
const SummaryPresenter = {
  computed: {
    guests () {
      return this.$store.state.numberOfGuests;
    }
  },
  render() {
    return <SummaryView persons={this.guests} />
  }
}
