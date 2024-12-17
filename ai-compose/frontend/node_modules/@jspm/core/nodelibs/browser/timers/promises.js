import { promisify } from '../util.js';
import exports from '../timers.js';
import '../chunk-DtcTpLWz.js';
import '../chunk-CkFCi-G1.js';
import '../chunk-DEMDiNwt.js';

const setTimeout = promisify(exports.setTimeout),
  setImmediate = promisify(exports.setImmediate),
  setInterval = promisify(exports.setInterval);

var promises = {
  setTimeout,
  setImmediate,
  setInterval
};

export { promises as default, setImmediate, setInterval, setTimeout };
