const {
    BaseTransaction,
    TransactionError,
    utils
} = require('@liskhq/lisk-transactions');


class RegisterCarTransaction extends BaseTransaction {

    static get TYPE () {
        return 30;
    }

    static get FEE () {
        return '0';
    };

    async prepare(store) {
        await store.account.cache([
            {
                address: this.asset.carId,
            },
            {
                address: this.senderId,
            }
        ]);
    }

    validateAsset() {
        const errors = [];
        if (!this.asset.carId || typeof this.asset.carId !== 'string') {
            errors.push(
                new TransactionError(
                    'Invalid "asset.carId" defined on transaction',
                    this.id,
                    '.asset.carId',
                    this.asset.carId
                )
            );
        }
        if (!this.asset.numberPlate || typeof this.asset.numberPlate !== 'string') {
            errors.push(
                new TransactionError(
                    'Invalid "asset.numberPlate" defined on transaction',
                    this.id,
                    '.asset.numberPlate',
                    this.asset.numberPlate
                )
            );
        }
        if (!this.asset.carModel || typeof this.asset.carModel !== 'string') {
            errors.push(
                new TransactionError(
                    'Invalid "asset.carModel" defined on transaction',
                    this.id,
                    '.asset.carModel',
                    this.asset.carModel,
                    'A string value'
                )
            );
        }
        return errors;
    }

    applyAsset(store) {
        const errors = [];
        const car = store.account.get(this.asset.carId);
        if (car.asset.senderId) {
          const updatedCarAccount = {
            ...car,
            ...{
              asset: {
                senderId: this.senderId,
                driverAdress: this.asset.driverAdress,
                numberPlate: this.asset.numberPlate,
                carModel: this.asset.carModel,
                type: "Car",
              },
            },
          };
          store.account.set(car.address, updatedCarAccount);
        } else {
          if (car.asset.senderId === this.asset.driverAdress) {
            const updatedCarAccount = {
              ...car,
              ...{
                asset: {
                  driverAdress: this.asset.driverAdress,
                  numberPlate: this.asset.numberPlate,
                  carModel: this.asset.carModel,
                  type: "Car",
                },
              },
            };
            store.account.set(car.address, updatedCarAccount);
          } else {
            errors.push(
              new TransactionError(
                "car has already been registered",
                car.asset.name
              )
            );
          }
        }
        return errors;
      }

    undoAsset(store) {
        const errors = [];

        /* --- Revert producer account --- */
        const car = store.account.get(this.asset.carId);
        const originalCarAccount = { ...car, asset: null };
        store.account.set(car.address, originalCarAccount);
        
        return errors;
    }

}

module.exports = RegisterCarTransaction;