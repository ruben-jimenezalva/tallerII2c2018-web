const PAYMETHOD = {expiration_month:"", expiration_year:"", method:"", number:"", type:""};
module.exports = {
    ALL_PAYMENTS : 1,
    SINGLE_PAYMENT : 2,
    CREATE_PAYMENT : 3,
    UPDATE_PAYMENT : 4,
    ALL_PAYMETHODS : 5,
    PAYMENT_PENDING:'pago pendiente',
    PAYMENT_DECLINED:'pago rechazado',
    PAYMENT_ACCEPTED:'pago aceptado',
    PAYMETHOD : {expiration_month:"", expiration_year:"", method:"", number:"", type:""},
    DATA_PAYMENT : {transaction_id:'', currency:'', value:'', paymentMethod:PAYMETHOD},
};
