const url = 'http://localhost:8080';

module.exports = {
     Login : url+'/api/user/login',
     Register : url+'/api/user/register',
     GetAllServers : url+'/api/servers',
     GetAllPayments : url+'/api/payments',
     GetAllTrackings : url+'/api/trackings'
};
