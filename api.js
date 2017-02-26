module.exports = function(req, res) {
  var ip = req.headers['x-forwarded-for'];
  var lang = req.headers['accept-language'];
  var soft = req.headers['user-agent'].match(/\((.+)\)/)[1];
  
  res.send({
    ipaddress: ip,
    language: lang,
    software: soft
  });
};