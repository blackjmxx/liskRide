const {
  BaseTransaction,
  TransactionError,
  utils,
} = require("@liskhq/lisk-transactions");

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
        address: this.asset.passengerId,
      },
      {
        address: this.asset.carId,
      },
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

    return errors;
  }

  applyAsset(store) {
    const errors = [];
    const travel = store.account.get(this.asset.travelId);
    const passenger = store.account.get(this.asset.passengerId);

    const amountTravel = new utils.BigNum(travel.asset.pricePerSeat).mul(
      new utils.BigNum(this.asset.seatCount)
    );

    const newTravelBalance = new utils.BigNum(travel.balance).add(
      new utils.BigNum(amountTravel)
    );
    const newPassengerBalance = new utils.BigNum(passenger.balance).sub(
      newTravelBalance
    );

    // Check passenger balance
    if (
      !utils.BigNum(passenger.balance).gt("0") ||
      !utils.BigNum(passenger.balance).gte(newTravelBalance)
    ) {
      errors.push(
        new TransactionError(
          "not enough amount for this travel",
          this.asset.travelId
        )
      );
    }

    // check available seat
    if (
      !utils.BigNum(travel.asset.availableSeatCount).gte(this.asset.seatCount)
    ) {
      errors.push(
        new TransactionError(
          "not enough seat for this travel",
          this.asset.travelId
        )
      );
    }

    if (errors.length <= 0) {
      const restSeatCount = new utils.BigNum(
        travel.asset.availableSeatCount
      ).sub(this.asset.seatCount);

      const updatedTravel = {
        ...travel,
        asset: {
          ...travel.asset,
          availableSeatCount: restSeatCount.toString(),
        },
        balance: newTravelBalance.toString(),
      };

      const updatedPassenger = {
        ...passenger,
        balance: newPassengerBalance.toString(),
      };

      console.log("travel " + travel);
      console.log("passenger " + passenger);

      store.account.set(travel.address, updatedTravel);
      store.account.set(passenger.address, updatedPassenger);
    }

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
