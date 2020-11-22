const {
  BaseTransaction,
  TransactionError,
} = require("@liskhq/lisk-transactions");

class RegisterTravelransaction extends BaseTransaction {
  static get TYPE() {
    return 31;
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
    if (!this.asset.driverAdress || typeof this.asset.driverAdress !== "string") {
      errors.push(
        new TransactionError(
          'Invalid "asset.driverAdress" defined on transaction',
          this.id,
          ".asset.driverAdress",
          this.asset.driverAdress
        )
      );
    }
    if (!this.asset.pickUpLocation || typeof this.asset.pickUpLocation !== "string") {
      errors.push(
        new TransactionError(
          'Invalid "asset.pickUpLocation" defined on transaction',
          this.id,
          ".asset.pickUpLocation",
          this.asset.pickUpLocation
        )
      );
    }
    if (!this.asset.pickUpDate || typeof this.asset.pickUpDate !== "string") {
      errors.push(
        new TransactionError(
          'Invalid "asset.pickUpDate" defined on transaction',
          this.id,
          ".asset.pickUpDate",
          this.asset.pickUpDate
        )
      );
    }
    if (!this.asset.availableSeatCount || typeof this.asset.availableSeatCount !== "string") {
      errors.push(
        new TransactionError(
          'Invalid "asset.availableSeatCount" defined on transaction',
          this.id,
          ".asset.availableSeatCount",
          this.asset.availableSeatCount
        )
      );
    }
    if (!this.asset.pricePerSeat || typeof this.asset.pricePerSeat !== "string") {
      errors.push(
        new TransactionError(
          'Invalid "asset.pricePerSeat" defined on transaction',
          this.id,
          ".asset.pricePerSeat",
          this.asset.pricePerSeat
        )
      );
    }
    return errors;
  }

  applyAsset(store) {
    const errors = [];

    const travel = store.account.get(this.asset.carId);
    const items = travel.asset.items || []

    items.push({
      driverAdress: this.asset.driverAdress,
      pickUpLocation: this.asset.pickUpLocation,
      pickUpDate:this.asset.pickUpDate,
      availableSeatCount: this.asset.availableSeatCount,
      pricePerSeat:this.asset.pricePerSeat
    })
    console.log(items)
    const updatedTravelAccount = {
      ...travel,
        asset: {
          senderId: this.senderId,
          driverAdress: this.asset.driverAdress,
          pickUpLocation: this.asset.pickUpLocation,
          pickUpDate:this.asset.pickUpDate,
          availableSeatCount: this.asset.availableSeatCount,
          pricePerSeat:this.asset.pricePerSeat,
          items: items
        }
    };
    console.log(updatedTravelAccount)

    store.account.set(travel.address, updatedTravelAccount);
  
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

module.exports = RegisterTravelransaction;
