const {
  BaseTransaction,
  TransactionError,
  utils,
} = require("@liskhq/lisk-transactions");
const { default: TravelManager } = require("../components/TravelManager/TravelManager");

class EndTravelTransaction extends BaseTransaction {
  static get TYPE() {
    return 34;
  }

  static get FEE() {
    return "0";
  }

  async prepare(store) {

    this.ratedPassengerAddresses = this.asset.ratings.map(address => address);

    await super.prepare(store);

    await store.account.cache({address_in: this.ratedPassengerAddresses, address: this.asset.travelId});
  }

  validateAsset() {
    const errors = [];
      if (!this.asset.travelId || typeof this.asset.passengerId !== 'string') {
        errors.push(
            new TransactionError(
                'Invalid "asset.passengerId" defined on transaction',
                this.id,
                '.asset.passengerId',
                this.asset.passengerId
            )
        );
    }
    if (!this.asset.passengerId || typeof this.asset.passengerId !== 'string') {
      errors.push(
          new TransactionError(
              'Invalid "asset.passengerId" defined on transaction',
              this.id,
              '.asset.passengerId',
              this.asset.passengerId
          )
      );
  }
  if (!this.asset.passengerId || typeof this.asset.passengerId !== 'string') {
    errors.push(
        new TransactionError(
            'Invalid "asset.passengerId" defined on transaction',
            this.id,
            '.asset.passengerId',
            this.asset.passengerId
        )
    );
  }

    return errors;
  }

  applyAsset(store) {
    const errors = [];
    const travel = store.account.get(this.asset.travelId);
    const passenger = store.account.get(this.passengerId);


    this.ratedPassengerAddresses.forEach(address => {
      const sender = store.account.get(address);
      

     // store.account.set(sender.address, sender);
    });

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

module.exports = EndTravelTransaction;
