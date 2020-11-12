const {
  BaseTransaction,
  TransactionError,
  utils,
} = require("@liskhq/lisk-transactions");
const { default: TravelManager } = require("../components/TravelManager/TravelManager");

class BookTravelransaction extends BaseTransaction {
  static get TYPE() {
    return 32;
  }

  static get FEE() {
    return "0";
  }

  async prepare(store) {
    await store.account.cache([
      {
        address: this.asset.carId,
      },
      {
        address: this.senderId,
      },
    ]);
  }

  validateAsset() {
    const errors = [];
    

    return errors;
  }

  applyAsset(store) {
    const errors = [];
    const travel = store.account.get(this.asset.travelId);
    const passenger = store.account.get(this.passengerId);
    const driver = store.account.get(travel.cardId);

    console.log("travel "+travel)
    console.log("passenger "+passenger)
    console.log("driver "+driver)

    const driverBalance = new utils.BigNum(driver.balance);
    const passengerBalance = new utils.BigNum(passenger.balance);
  
    return errors;
  }

  undoAsset(store) {
    const errors = [];

    /* --- Revert producer account --- */
    const travel = store.account.get(this.asset.carId);
    const originalTravelAccount = { ...travel, asset: null };
    store.account.set(travel.address, originalTravelAccount);

    return errors;
  }
}

module.exports = BookTravelransaction;
