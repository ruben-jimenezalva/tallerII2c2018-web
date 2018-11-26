var urlLocal = 'http://localhost:8080';
var url = 'https://shared-server-taller2-2c-2018.herokuapp.com';
//var url = urlLocal;
module.exports = {
     Login : url+'/api/user/login',
     Register : url+'/api/user/register',
     Servers : url+'/api/servers',
     Payments : url+'/api/payments',
     Paymethods : url+'/api/payments/methods',
     Trackings : url+'/api/trackings'
};
