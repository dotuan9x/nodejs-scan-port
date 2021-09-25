const Evilscan = require('evilscan');

const options = {
    target:'125.212.241.90',
    port:'21-23',
    status:'TROU', // Timeout, Refused, Open, Unreachable
    banner:true
};

const evilscan = new Evilscan(options);

evilscan.on('result',data => {
    // fired when item is matching options
    console.log(data);
});

evilscan.on('error', err => {
    throw new Error(data.toString());
});

evilscan.on('done', () => {
    // finished !
});

evilscan.run();
