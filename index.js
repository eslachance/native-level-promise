const level = require('level')
const { promisify } = require('util');

class LevelPromise {
  constructor(location) {
    this.location = location;
    this.level = level(location);
    const prototype = Object.getPrototypeOf(this.level);
    
    Object.keys(prototype).forEach(key => {
      this[key] = promisify(prototype[key]).bind(this.level);
    });

    this._destroy = promisify(level.destroy);
    this._repair = promisify(level.repair);
    
  }
  
  async destroy () {
    await this._destroy(this.location);
  }
  
  async repair () {
    await this._repair(this.location);
  }
}

module.exports = LevelPromise;
