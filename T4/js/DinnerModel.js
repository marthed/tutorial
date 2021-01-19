class DinnerModel{
  constructor(guests=2){
    this.setNumberOfGuests(guests);
  }
  setNumberOfGuests(x){
    if (!Number.isInteger(x) || x < 1) {
      throw new Error(`${x} is not valid!`);
    }
    this.numberOfGuests= x
  } 
};
