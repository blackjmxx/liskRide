const {
  BaseTransaction,
  TransactionError
} = require("@liskhq/lisk-transactions");

class StartTravelransaction extends BaseTransaction {
  static get TYPE() {
    return 33;
  }

  static get FEE() {
    return "0";
  }

  async prepare(store) {
    await store.account.cache([
      {
        address: this.asset.travelId,
      },
      {
        address: this.senderId,
      },
    ]);
  }

  validateAsset() {
    const errors = [];
    if (!this.asset.carId || typeof this.asset.carId !== "string") {
      errors.push(
        new TransactionError(
          'Invalid "asset.carId" defined on transaction',
          this.id,
          ".asset.carId",
          this.asset.carId
        )
      );
    }
    return errors;
  }

  applyAsset(store) {
    const errors = [];

    const travel = store.account.get(this.asset.travelId);
    const passenger = store.account.get(this.asset.passengerId);

    const travelDriverrBalance = travel.asset.travelDriverrBalance[passenger.address] || {}
    const travelPassengerBalance = travel.asset.travelPassengerBalance

    if(!travelDriverrBalance[passenger.address]){
      if(travelPassengerBalance[passenger.address]){
        travelDriverrBalance[passenger.address] = travelPassengerBalance[passenger.address]
      }
    }else{
      // update
    }
    

    const updatedTravelAccount = {
      ...travel,
        asset: {
          ...travel.asset,
          travelDriverrBalance:travelDriverrBalance,
        }
    };
    console.log(updatedTravelAccount)

    store.account.set(travel.address, updatedTravelAccount);
  
  return errors;
  }

  undoAsset(store) {
    const errors = [];
    const travel = store.account.get(this.asset.carId);
    const originalTravelAccount = { ...travel, asset: null };
    store.account.set(travel.address, originalTravelAccount);

    return errors;
  }
}

module.exports = StartTravelransaction;
