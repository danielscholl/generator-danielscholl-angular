module.exports = function HomeModel ({ name = 'yo-dfw', message = 'DFW Top Talent', generator = 'yo-generator' } = {}) {
  return {
    name: name,
    message: message,
    generator: generator
  };
};
