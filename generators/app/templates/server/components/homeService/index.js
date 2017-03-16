const Service = require('./lib/home.service');

module.exports = function HomeClient (config){
  let self = this;
  let service = new Service(config);

  self.Read = function Read (req, res) {
    service.read((err, result) => {
      if (err) { return res.send(err); }
      res.json(result.data);
    });
  };

  return self;
};
