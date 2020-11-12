const { Application, genesisBlockDevnet, configDevnet } = require('lisk-sdk');
//const RegisterPacketTransaction = require('../transactions/register-packet');
//const StartTransportTransaction = require('../transactions/start-transport');
//const FinishTransportTransaction = require('../transactions/finish-transport');
const RegisterCarTransaction = require('../transactions/register-car');
const RegisterTravelTransaction = require('../transactions/register-travel');
const BookTravelTransaction = require('../transactions/book-travel');
// const TranssfertTransaction = require('../transactions/transfert-fund');


const { ExtendedHTTPApiModule } = require('@moosty/lisk-extended-api');


configDevnet.app.label = 'lisk-ride';
configDevnet.modules.http_api.access.public = true;
// configDevnet.components.storage.host = 'db';
debugger
const app = new Application(genesisBlockDevnet, configDevnet);

app.registerTransaction(RegisterCarTransaction);
app.registerTransaction(RegisterTravelTransaction);
app.registerTransaction(BookTravelTransaction);

app.registerModule(ExtendedHTTPApiModule, {
    port: 2020,
    limit: 1000,
    assets: ['destination', 'pickUpLocation', 'pickUpDate', 'availableSeatCount', 'pricePerSeat']
  });

app
    .run()
    .then(() => app.logger.info('App started...'))
    .catch(error => {
        console.error('Faced error in application', error);
        process.exit(0);
    });