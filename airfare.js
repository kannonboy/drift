// flat fees and taxes
var customsFee          = 5.5;
var imigrationFee      = 7;
var federalTransportTax = .025;

function calculateAirfare(baseFare) {
    var fare = baseFare;                
    fare += imigrationFee;
    fare *= (1 + federalTransportTax);
    return fare;
}
