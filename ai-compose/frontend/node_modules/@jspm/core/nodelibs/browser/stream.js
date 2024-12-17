import { d as dew$p } from './chunk-DtuTasat.js';
import exports$q from './events.js';
import { p as process } from './chunk-DEMDiNwt.js';
import { e as exports$r } from './chunk-CcCWfKp1.js';
import { promisify } from './util.js';
import './chunk-DtcTpLWz.js';
import './chunk-CkFCi-G1.js';

var exports$p = {},
  _dewExec$o = false;
function dew$o() {
  if (_dewExec$o) return exports$p;
  _dewExec$o = true;
  /*
    This file is a reduced and adapted version of the main lib/internal/per_context/primordials.js file defined at
  
    https://github.com/nodejs/node/blob/master/lib/internal/per_context/primordials.js
  
    Don't try to replace with the original file and keep it up to date with the upstream file.
  */
  exports$p = {
    ArrayIsArray(self) {
      return Array.isArray(self);
    },
    ArrayPrototypeIncludes(self, el) {
      return self.includes(el);
    },
    ArrayPrototypeIndexOf(self, el) {
      return self.indexOf(el);
    },
    ArrayPrototypeJoin(self, sep) {
      return self.join(sep);
    },
    ArrayPrototypeMap(self, fn) {
      return self.map(fn);
    },
    ArrayPrototypePop(self, el) {
      return self.pop(el);
    },
    ArrayPrototypePush(self, el) {
      return self.push(el);
    },
    ArrayPrototypeSlice(self, start, end) {
      return self.slice(start, end);
    },
    Error,
    FunctionPrototypeCall(fn, thisArgs, ...args) {
      return fn.call(thisArgs, ...args);
    },
    FunctionPrototypeSymbolHasInstance(self, instance) {
      return Function.prototype[Symbol.hasInstance].call(self, instance);
    },
    MathFloor: Math.floor,
    Number,
    NumberIsInteger: Number.isInteger,
    NumberIsNaN: Number.isNaN,
    NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
    NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
    NumberParseInt: Number.parseInt,
    ObjectDefineProperties(self, props) {
      return Object.defineProperties(self, props);
    },
    ObjectDefineProperty(self, name, prop) {
      return Object.defineProperty(self, name, prop);
    },
    ObjectGetOwnPropertyDescriptor(self, name) {
      return Object.getOwnPropertyDescriptor(self, name);
    },
    ObjectKeys(obj) {
      return Object.keys(obj);
    },
    ObjectSetPrototypeOf(target, proto) {
      return Object.setPrototypeOf(target, proto);
    },
    Promise,
    PromisePrototypeCatch(self, fn) {
      return self.catch(fn);
    },
    PromisePrototypeThen(self, thenFn, catchFn) {
      return self.then(thenFn, catchFn);
    },
    PromiseReject(err) {
      return Promise.reject(err);
    },
    PromiseResolve(val) {
      return Promise.resolve(val);
    },
    ReflectApply: Reflect.apply,
    RegExpPrototypeTest(self, value) {
      return self.test(value);
    },
    SafeSet: Set,
    String,
    StringPrototypeSlice(self, start, end) {
      return self.slice(start, end);
    },
    StringPrototypeToLowerCase(self) {
      return self.toLowerCase();
    },
    StringPrototypeToUpperCase(self) {
      return self.toUpperCase();
    },
    StringPrototypeTrim(self) {
      return self.trim();
    },
    Symbol,
    SymbolFor: Symbol.for,
    SymbolAsyncIterator: Symbol.asyncIterator,
    SymbolHasInstance: Symbol.hasInstance,
    SymbolIterator: Symbol.iterator,
    SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
    SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
    TypedArrayPrototypeSet(self, buf, len) {
      return self.set(buf, len);
    },
    Boolean: Boolean,
    Uint8Array
  };
  return exports$p;
}

var exports$o = {},
  _dewExec$n = false;
function dew$n() {
  if (_dewExec$n) return exports$o;
  _dewExec$n = true;
  /*eslint-disable @mysticatea/prettier */
  const {
    AbortController,
    AbortSignal
  } = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : /* otherwise */undefined;
  /*eslint-enable @mysticatea/prettier */

  exports$o = AbortController;
  exports$o.AbortSignal = AbortSignal;
  exports$o.default = AbortController;
  return exports$o;
}

var exports$n = {},
  _dewExec$m = false;
function dew$m() {
  if (_dewExec$m) return exports$n;
  _dewExec$m = true;
  const bufferModule = dew$p();
  const {
    kResistStopPropagation,
    SymbolDispose
  } = dew$o();
  const AbortSignal = globalThis.AbortSignal || dew$n().AbortSignal;
  const AbortController = globalThis.AbortController || dew$n().AbortController;
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  const Blob = globalThis.Blob || bufferModule.Blob;
  /* eslint-disable indent */
  const isBlob = typeof Blob !== "undefined" ? function isBlob(b) {
    // eslint-disable-next-line indent
    return b instanceof Blob;
  } : function isBlob(b) {
    return false;
  };
  /* eslint-enable indent */

  const validateAbortSignal = (signal, name) => {
    if (signal !== undefined && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
      throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
    }
  };
  const validateFunction = (value, name) => {
    if (typeof value !== "function") throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
  };

  // This is a simplified version of AggregateError
  class AggregateError extends Error {
    constructor(errors) {
      if (!Array.isArray(errors)) {
        throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
      }
      let message = "";
      for (let i = 0; i < errors.length; i++) {
        message += `    ${errors[i].stack}\n`;
      }
      super(message);
      this.name = "AggregateError";
      this.errors = errors;
    }
  }
  exports$n = {
    AggregateError,
    kEmptyObject: Object.freeze({}),
    once(callback) {
      let called = false;
      return function (...args) {
        if (called) {
          return;
        }
        called = true;
        callback.apply(this, args);
      };
    },
    createDeferredPromise: function () {
      let resolve;
      let reject;

      // eslint-disable-next-line promise/param-names
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return {
        promise,
        resolve,
        reject
      };
    },
    promisify(fn) {
      return new Promise((resolve, reject) => {
        fn((err, ...args) => {
          if (err) {
            return reject(err);
          }
          return resolve(...args);
        });
      });
    },
    debuglog() {
      return function () {};
    },
    format(format, ...args) {
      // Simplified version of https://nodejs.org/api/util.html#utilformatformat-args
      return format.replace(/%([sdifj])/g, function (...[_unused, type]) {
        const replacement = args.shift();
        if (type === "f") {
          return replacement.toFixed(6);
        } else if (type === "j") {
          return JSON.stringify(replacement);
        } else if (type === "s" && typeof replacement === "object") {
          const ctor = replacement.constructor !== Object ? replacement.constructor.name : "";
          return `${ctor} {}`.trim();
        } else {
          return replacement.toString();
        }
      });
    },
    inspect(value) {
      // Vastly simplified version of https://nodejs.org/api/util.html#utilinspectobject-options
      switch (typeof value) {
        case "string":
          if (value.includes("'")) {
            if (!value.includes("\"")) {
              return `"${value}"`;
            } else if (!value.includes("`") && !value.includes("${")) {
              return `\`${value}\``;
            }
          }
          return `'${value}'`;
        case "number":
          if (isNaN(value)) {
            return "NaN";
          } else if (Object.is(value, -0)) {
            return String(value);
          }
          return value;
        case "bigint":
          return `${String(value)}n`;
        case "boolean":
        case "undefined":
          return String(value);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(fn) {
        return fn instanceof AsyncFunction;
      },
      isArrayBufferView(arr) {
        return ArrayBuffer.isView(arr);
      }
    },
    isBlob,
    deprecate(fn, message) {
      return fn;
    },
    addAbortListener: exports$q.addAbortListener || function addAbortListener(signal, listener) {
      if (signal === undefined) {
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", signal);
      }
      validateAbortSignal(signal, "signal");
      validateFunction(listener, "listener");
      let removeEventListener;
      if (signal.aborted) {
        queueMicrotask(() => listener());
      } else {
        signal.addEventListener("abort", listener, {
          __proto__: null,
          once: true,
          [kResistStopPropagation]: true
        });
        removeEventListener = () => {
          signal.removeEventListener("abort", listener);
        };
      }
      return {
        __proto__: null,
        [SymbolDispose]() {
          var _removeEventListener;
          (_removeEventListener = removeEventListener) === null || _removeEventListener === undefined ? undefined : _removeEventListener();
        }
      };
    },
    AbortSignalAny: AbortSignal.any || function AbortSignalAny(signals) {
      // Fast path if there is only one signal.
      if (signals.length === 1) {
        return signals[0];
      }
      const ac = new AbortController();
      const abort = () => ac.abort();
      signals.forEach(signal => {
        validateAbortSignal(signal, "signals");
        signal.addEventListener("abort", abort, {
          once: true
        });
      });
      ac.signal.addEventListener("abort", () => {
        signals.forEach(signal => signal.removeEventListener("abort", abort));
      }, {
        once: true
      });
      return ac.signal;
    }
  };
  exports$n.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  return exports$n;
}

var exports$m = {},
  _dewExec$l = false;
function dew$l() {
  if (_dewExec$l) return exports$m;
  _dewExec$l = true;
  const {
    format,
    inspect,
    AggregateError: CustomAggregateError
  } = dew$m();

  /*
    This file is a reduced and adapted version of the main lib/internal/errors.js file defined at
  
    https://github.com/nodejs/node/blob/master/lib/internal/errors.js
  
    Don't try to replace with the original file and keep it up to date (starting from E(...) definitions)
    with the upstream file.
  */

  const AggregateError = globalThis.AggregateError || CustomAggregateError;
  const kIsNodeError = Symbol("kIsNodeError");
  const kTypes = ["string", "function", "number", "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function", "Object", "boolean", "bigint", "symbol"];
  const classRegExp = /^([A-Z][a-z0-9]*)+$/;
  const nodeInternalPrefix = "__node_internal_";
  const codes = {};
  function assert(value, message) {
    if (!value) {
      throw new codes.ERR_INTERNAL_ASSERTION(message);
    }
  }

  // Only use this for integers! Decimal numbers do not work with this function.
  function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i >= start + 4; i -= 3) {
      res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
  }
  function getMessage(key, msg, args) {
    if (typeof msg === "function") {
      assert(msg.length <= args.length,
      // Default options do not count.
      `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${msg.length}).`);
      return msg(...args);
    }
    const expectedLength = (msg.match(/%[dfijoOs]/g) || []).length;
    assert(expectedLength === args.length, `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${expectedLength}).`);
    if (args.length === 0) {
      return msg;
    }
    return format(msg, ...args);
  }
  function E(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    class NodeError extends Base {
      constructor(...args) {
        super(getMessage(code, message, args));
      }
      toString() {
        return `${this.name} [${code}]: ${this.message}`;
      }
    }
    Object.defineProperties(NodeError.prototype, {
      name: {
        value: Base.name,
        writable: true,
        enumerable: false,
        configurable: true
      },
      toString: {
        value() {
          return `${this.name} [${code}]: ${this.message}`;
        },
        writable: true,
        enumerable: false,
        configurable: true
      }
    });
    NodeError.prototype.code = code;
    NodeError.prototype[kIsNodeError] = true;
    codes[code] = NodeError;
  }
  function hideStackFrames(fn) {
    // We rename the functions that will be hidden to cut off the stacktrace
    // at the outermost one
    const hidden = nodeInternalPrefix + fn.name;
    Object.defineProperty(fn, "name", {
      value: hidden
    });
    return fn;
  }
  function aggregateTwoErrors(innerError, outerError) {
    if (innerError && outerError && innerError !== outerError) {
      if (Array.isArray(outerError.errors)) {
        // If `outerError` is already an `AggregateError`.
        outerError.errors.push(innerError);
        return outerError;
      }
      const err = new AggregateError([outerError, innerError], outerError.message);
      err.code = outerError.code;
      return err;
    }
    return innerError || outerError;
  }
  class AbortError extends Error {
    constructor(message = "The operation was aborted", options = undefined) {
      if (options !== undefined && typeof options !== "object") {
        throw new codes.ERR_INVALID_ARG_TYPE("options", "Object", options);
      }
      super(message, options);
      this.code = "ABORT_ERR";
      this.name = "AbortError";
    }
  }
  E("ERR_ASSERTION", "%s", Error);
  E("ERR_INVALID_ARG_TYPE", (name, expected, actual) => {
    assert(typeof name === "string", "'name' must be a string");
    if (!Array.isArray(expected)) {
      expected = [expected];
    }
    let msg = "The ";
    if (name.endsWith(" argument")) {
      // For cases like 'first argument'
      msg += `${name} `;
    } else {
      msg += `"${name}" ${name.includes(".") ? "property" : "argument"} `;
    }
    msg += "must be ";
    const types = [];
    const instances = [];
    const other = [];
    for (const value of expected) {
      assert(typeof value === "string", "All expected entries have to be of type string");
      if (kTypes.includes(value)) {
        types.push(value.toLowerCase());
      } else if (classRegExp.test(value)) {
        instances.push(value);
      } else {
        assert(value !== "object", "The value \"object\" should be written as \"Object\"");
        other.push(value);
      }
    }

    // Special handle `object` in case other instances are allowed to outline
    // the differences between each other.
    if (instances.length > 0) {
      const pos = types.indexOf("object");
      if (pos !== -1) {
        types.splice(types, pos, 1);
        instances.push("Object");
      }
    }
    if (types.length > 0) {
      switch (types.length) {
        case 1:
          msg += `of type ${types[0]}`;
          break;
        case 2:
          msg += `one of type ${types[0]} or ${types[1]}`;
          break;
        default:
          {
            const last = types.pop();
            msg += `one of type ${types.join(", ")}, or ${last}`;
          }
      }
      if (instances.length > 0 || other.length > 0) {
        msg += " or ";
      }
    }
    if (instances.length > 0) {
      switch (instances.length) {
        case 1:
          msg += `an instance of ${instances[0]}`;
          break;
        case 2:
          msg += `an instance of ${instances[0]} or ${instances[1]}`;
          break;
        default:
          {
            const last = instances.pop();
            msg += `an instance of ${instances.join(", ")}, or ${last}`;
          }
      }
      if (other.length > 0) {
        msg += " or ";
      }
    }
    switch (other.length) {
      case 0:
        break;
      case 1:
        if (other[0].toLowerCase() !== other[0]) {
          msg += "an ";
        }
        msg += `${other[0]}`;
        break;
      case 2:
        msg += `one of ${other[0]} or ${other[1]}`;
        break;
      default:
        {
          const last = other.pop();
          msg += `one of ${other.join(", ")}, or ${last}`;
        }
    }
    if (actual == null) {
      msg += `. Received ${actual}`;
    } else if (typeof actual === "function" && actual.name) {
      msg += `. Received function ${actual.name}`;
    } else if (typeof actual === "object") {
      var _actual$constructor;
      if ((_actual$constructor = actual.constructor) !== null && _actual$constructor !== undefined && _actual$constructor.name) {
        msg += `. Received an instance of ${actual.constructor.name}`;
      } else {
        const inspected = inspect(actual, {
          depth: -1
        });
        msg += `. Received ${inspected}`;
      }
    } else {
      let inspected = inspect(actual, {
        colors: false
      });
      if (inspected.length > 25) {
        inspected = `${inspected.slice(0, 25)}...`;
      }
      msg += `. Received type ${typeof actual} (${inspected})`;
    }
    return msg;
  }, TypeError);
  E("ERR_INVALID_ARG_VALUE", (name, value, reason = "is invalid") => {
    let inspected = inspect(value);
    if (inspected.length > 128) {
      inspected = inspected.slice(0, 128) + "...";
    }
    const type = name.includes(".") ? "property" : "argument";
    return `The ${type} '${name}' ${reason}. Received ${inspected}`;
  }, TypeError);
  E("ERR_INVALID_RETURN_VALUE", (input, name, value) => {
    var _value$constructor;
    const type = value !== null && value !== undefined && (_value$constructor = value.constructor) !== null && _value$constructor !== undefined && _value$constructor.name ? `instance of ${value.constructor.name}` : `type ${typeof value}`;
    return `Expected ${input} to be returned from the "${name}"` + ` function but got ${type}.`;
  }, TypeError);
  E("ERR_MISSING_ARGS", (...args) => {
    assert(args.length > 0, "At least one arg needs to be specified");
    let msg;
    const len = args.length;
    args = (Array.isArray(args) ? args : [args]).map(a => `"${a}"`).join(" or ");
    switch (len) {
      case 1:
        msg += `The ${args[0]} argument`;
        break;
      case 2:
        msg += `The ${args[0]} and ${args[1]} arguments`;
        break;
      default:
        {
          const last = args.pop();
          msg += `The ${args.join(", ")}, and ${last} arguments`;
        }
        break;
    }
    return `${msg} must be specified`;
  }, TypeError);
  E("ERR_OUT_OF_RANGE", (str, range, input) => {
    assert(range, "Missing \"range\" argument");
    let received;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === "bigint") {
      received = String(input);
      if (input > 2n ** 32n || input < -(2n ** 32n)) {
        received = addNumericalSeparator(received);
      }
      received += "n";
    } else {
      received = inspect(input);
    }
    return `The value of "${str}" is out of range. It must be ${range}. Received ${received}`;
  }, RangeError);
  E("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
  E("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
  E("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
  E("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
  E("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
  E("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  E("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
  E("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
  E("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
  E("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
  E("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
  exports$m = {
    AbortError,
    aggregateTwoErrors: hideStackFrames(aggregateTwoErrors),
    hideStackFrames,
    codes
  };
  return exports$m;
}

var exports$l = {},
  _dewExec$k = false;
function dew$k() {
  if (_dewExec$k) return exports$l;
  _dewExec$k = true;
  const {
    ArrayIsArray,
    ArrayPrototypeIncludes,
    ArrayPrototypeJoin,
    ArrayPrototypeMap,
    NumberIsInteger,
    NumberIsNaN,
    NumberMAX_SAFE_INTEGER,
    NumberMIN_SAFE_INTEGER,
    NumberParseInt,
    ObjectPrototypeHasOwnProperty,
    RegExpPrototypeExec,
    String,
    StringPrototypeToUpperCase,
    StringPrototypeTrim
  } = dew$o();
  const {
    hideStackFrames,
    codes: {
      ERR_SOCKET_BAD_PORT,
      ERR_INVALID_ARG_TYPE,
      ERR_INVALID_ARG_VALUE,
      ERR_OUT_OF_RANGE,
      ERR_UNKNOWN_SIGNAL
    }
  } = dew$l();
  const {
    normalizeEncoding
  } = dew$m();
  const {
    isAsyncFunction,
    isArrayBufferView
  } = dew$m().types;
  const signals = {};

  /**
   * @param {*} value
   * @returns {boolean}
   */
  function isInt32(value) {
    return value === (value | 0);
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  function isUint32(value) {
    return value === value >>> 0;
  }
  const octalReg = /^[0-7]+$/;
  const modeDesc = "must be a 32-bit unsigned integer or an octal string";

  /**
   * Parse and validate values that will be converted into mode_t (the S_*
   * constants). Only valid numbers and octal strings are allowed. They could be
   * converted to 32-bit unsigned integers or non-negative signed integers in the
   * C++ land, but any value higher than 0o777 will result in platform-specific
   * behaviors.
   * @param {*} value Values to be validated
   * @param {string} name Name of the argument
   * @param {number} [def] If specified, will be returned for invalid values
   * @returns {number}
   */
  function parseFileMode(value, name, def) {
    if (typeof value === "undefined") {
      value = def;
    }
    if (typeof value === "string") {
      if (RegExpPrototypeExec(octalReg, value) === null) {
        throw new ERR_INVALID_ARG_VALUE(name, value, modeDesc);
      }
      value = NumberParseInt(value, 8);
    }
    validateUint32(value, name);
    return value;
  }

  /**
   * @callback validateInteger
   * @param {*} value
   * @param {string} name
   * @param {number} [min]
   * @param {number} [max]
   * @returns {asserts value is number}
   */

  /** @type {validateInteger} */
  const validateInteger = hideStackFrames((value, name, min = NumberMIN_SAFE_INTEGER, max = NumberMAX_SAFE_INTEGER) => {
    if (typeof value !== "number") throw new ERR_INVALID_ARG_TYPE(name, "number", value);
    if (!NumberIsInteger(value)) throw new ERR_OUT_OF_RANGE(name, "an integer", value);
    if (value < min || value > max) throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
  });

  /**
   * @callback validateInt32
   * @param {*} value
   * @param {string} name
   * @param {number} [min]
   * @param {number} [max]
   * @returns {asserts value is number}
   */

  /** @type {validateInt32} */
  const validateInt32 = hideStackFrames((value, name, min = -2147483648, max = 2147483647) => {
    // The defaults for min and max correspond to the limits of 32-bit integers.
    if (typeof value !== "number") {
      throw new ERR_INVALID_ARG_TYPE(name, "number", value);
    }
    if (!NumberIsInteger(value)) {
      throw new ERR_OUT_OF_RANGE(name, "an integer", value);
    }
    if (value < min || value > max) {
      throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    }
  });

  /**
   * @callback validateUint32
   * @param {*} value
   * @param {string} name
   * @param {number|boolean} [positive=false]
   * @returns {asserts value is number}
   */

  /** @type {validateUint32} */
  const validateUint32 = hideStackFrames((value, name, positive = false) => {
    if (typeof value !== "number") {
      throw new ERR_INVALID_ARG_TYPE(name, "number", value);
    }
    if (!NumberIsInteger(value)) {
      throw new ERR_OUT_OF_RANGE(name, "an integer", value);
    }
    const min = positive ? 1 : 0;
    // 2 ** 32 === 4294967296
    const max = 4294967295;
    if (value < min || value > max) {
      throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    }
  });

  /**
   * @callback validateString
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is string}
   */

  /** @type {validateString} */
  function validateString(value, name) {
    if (typeof value !== "string") throw new ERR_INVALID_ARG_TYPE(name, "string", value);
  }

  /**
   * @callback validateNumber
   * @param {*} value
   * @param {string} name
   * @param {number} [min]
   * @param {number} [max]
   * @returns {asserts value is number}
   */

  /** @type {validateNumber} */
  function validateNumber(value, name, min = undefined, max) {
    if (typeof value !== "number") throw new ERR_INVALID_ARG_TYPE(name, "number", value);
    if (min != null && value < min || max != null && value > max || (min != null || max != null) && NumberIsNaN(value)) {
      throw new ERR_OUT_OF_RANGE(name, `${min != null ? `>= ${min}` : ""}${min != null && max != null ? " && " : ""}${max != null ? `<= ${max}` : ""}`, value);
    }
  }

  /**
   * @callback validateOneOf
   * @template T
   * @param {T} value
   * @param {string} name
   * @param {T[]} oneOf
   */

  /** @type {validateOneOf} */
  const validateOneOf = hideStackFrames((value, name, oneOf) => {
    if (!ArrayPrototypeIncludes(oneOf, value)) {
      const allowed = ArrayPrototypeJoin(ArrayPrototypeMap(oneOf, v => typeof v === "string" ? `'${v}'` : String(v)), ", ");
      const reason = "must be one of: " + allowed;
      throw new ERR_INVALID_ARG_VALUE(name, value, reason);
    }
  });

  /**
   * @callback validateBoolean
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is boolean}
   */

  /** @type {validateBoolean} */
  function validateBoolean(value, name) {
    if (typeof value !== "boolean") throw new ERR_INVALID_ARG_TYPE(name, "boolean", value);
  }

  /**
   * @param {any} options
   * @param {string} key
   * @param {boolean} defaultValue
   * @returns {boolean}
   */
  function getOwnPropertyValueOrDefault(options, key, defaultValue) {
    return options == null || !ObjectPrototypeHasOwnProperty(options, key) ? defaultValue : options[key];
  }

  /**
   * @callback validateObject
   * @param {*} value
   * @param {string} name
   * @param {{
   *   allowArray?: boolean,
   *   allowFunction?: boolean,
   *   nullable?: boolean
   * }} [options]
   */

  /** @type {validateObject} */
  const validateObject = hideStackFrames((value, name, options = null) => {
    const allowArray = getOwnPropertyValueOrDefault(options, "allowArray", false);
    const allowFunction = getOwnPropertyValueOrDefault(options, "allowFunction", false);
    const nullable = getOwnPropertyValueOrDefault(options, "nullable", false);
    if (!nullable && value === null || !allowArray && ArrayIsArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) {
      throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
    }
  });

  /**
   * @callback validateDictionary - We are using the Web IDL Standard definition
   *                                of "dictionary" here, which means any value
   *                                whose Type is either Undefined, Null, or
   *                                Object (which includes functions).
   * @param {*} value
   * @param {string} name
   * @see https://webidl.spec.whatwg.org/#es-dictionary
   * @see https://tc39.es/ecma262/#table-typeof-operator-results
   */

  /** @type {validateDictionary} */
  const validateDictionary = hideStackFrames((value, name) => {
    if (value != null && typeof value !== "object" && typeof value !== "function") {
      throw new ERR_INVALID_ARG_TYPE(name, "a dictionary", value);
    }
  });

  /**
   * @callback validateArray
   * @param {*} value
   * @param {string} name
   * @param {number} [minLength]
   * @returns {asserts value is any[]}
   */

  /** @type {validateArray} */
  const validateArray = hideStackFrames((value, name, minLength = 0) => {
    if (!ArrayIsArray(value)) {
      throw new ERR_INVALID_ARG_TYPE(name, "Array", value);
    }
    if (value.length < minLength) {
      const reason = `must be longer than ${minLength}`;
      throw new ERR_INVALID_ARG_VALUE(name, value, reason);
    }
  });

  /**
   * @callback validateStringArray
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is string[]}
   */

  /** @type {validateStringArray} */
  function validateStringArray(value, name) {
    validateArray(value, name);
    for (let i = 0; i < value.length; i++) {
      validateString(value[i], `${name}[${i}]`);
    }
  }

  /**
   * @callback validateBooleanArray
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is boolean[]}
   */

  /** @type {validateBooleanArray} */
  function validateBooleanArray(value, name) {
    validateArray(value, name);
    for (let i = 0; i < value.length; i++) {
      validateBoolean(value[i], `${name}[${i}]`);
    }
  }

  /**
   * @callback validateAbortSignalArray
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is AbortSignal[]}
   */

  /** @type {validateAbortSignalArray} */
  function validateAbortSignalArray(value, name) {
    validateArray(value, name);
    for (let i = 0; i < value.length; i++) {
      const signal = value[i];
      const indexedName = `${name}[${i}]`;
      if (signal == null) {
        throw new ERR_INVALID_ARG_TYPE(indexedName, "AbortSignal", signal);
      }
      validateAbortSignal(signal, indexedName);
    }
  }

  /**
   * @param {*} signal
   * @param {string} [name='signal']
   * @returns {asserts signal is keyof signals}
   */
  function validateSignalName(signal, name = "signal") {
    validateString(signal, name);
    if (signals[signal] === undefined) {
      if (signals[StringPrototypeToUpperCase(signal)] !== undefined) {
        throw new ERR_UNKNOWN_SIGNAL(signal + " (signals must use all capital letters)");
      }
      throw new ERR_UNKNOWN_SIGNAL(signal);
    }
  }

  /**
   * @callback validateBuffer
   * @param {*} buffer
   * @param {string} [name='buffer']
   * @returns {asserts buffer is ArrayBufferView}
   */

  /** @type {validateBuffer} */
  const validateBuffer = hideStackFrames((buffer, name = "buffer") => {
    if (!isArrayBufferView(buffer)) {
      throw new ERR_INVALID_ARG_TYPE(name, ["Buffer", "TypedArray", "DataView"], buffer);
    }
  });

  /**
   * @param {string} data
   * @param {string} encoding
   */
  function validateEncoding(data, encoding) {
    const normalizedEncoding = normalizeEncoding(encoding);
    const length = data.length;
    if (normalizedEncoding === "hex" && length % 2 !== 0) {
      throw new ERR_INVALID_ARG_VALUE("encoding", encoding, `is invalid for data of length ${length}`);
    }
  }

  /**
   * Check that the port number is not NaN when coerced to a number,
   * is an integer and that it falls within the legal range of port numbers.
   * @param {*} port
   * @param {string} [name='Port']
   * @param {boolean} [allowZero=true]
   * @returns {number}
   */
  function validatePort(port, name = "Port", allowZero = true) {
    if (typeof port !== "number" && typeof port !== "string" || typeof port === "string" && StringPrototypeTrim(port).length === 0 || +port !== +port >>> 0 || port > 65535 || port === 0 && !allowZero) {
      throw new ERR_SOCKET_BAD_PORT(name, port, allowZero);
    }
    return port | 0;
  }

  /**
   * @callback validateAbortSignal
   * @param {*} signal
   * @param {string} name
   */

  /** @type {validateAbortSignal} */
  const validateAbortSignal = hideStackFrames((signal, name) => {
    if (signal !== undefined && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
      throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
    }
  });

  /**
   * @callback validateFunction
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is Function}
   */

  /** @type {validateFunction} */
  const validateFunction = hideStackFrames((value, name) => {
    if (typeof value !== "function") throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
  });

  /**
   * @callback validatePlainFunction
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is Function}
   */

  /** @type {validatePlainFunction} */
  const validatePlainFunction = hideStackFrames((value, name) => {
    if (typeof value !== "function" || isAsyncFunction(value)) throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
  });

  /**
   * @callback validateUndefined
   * @param {*} value
   * @param {string} name
   * @returns {asserts value is undefined}
   */

  /** @type {validateUndefined} */
  const validateUndefined = hideStackFrames((value, name) => {
    if (value !== undefined) throw new ERR_INVALID_ARG_TYPE(name, "undefined", value);
  });

  /**
   * @template T
   * @param {T} value
   * @param {string} name
   * @param {T[]} union
   */
  function validateUnion(value, name, union) {
    if (!ArrayPrototypeIncludes(union, value)) {
      throw new ERR_INVALID_ARG_TYPE(name, `('${ArrayPrototypeJoin(union, "|")}')`, value);
    }
  }

  /*
    The rules for the Link header field are described here:
    https://www.rfc-editor.org/rfc/rfc8288.html#section-3
  
    This regex validates any string surrounded by angle brackets
    (not necessarily a valid URI reference) followed by zero or more
    link-params separated by semicolons.
  */
  const linkValueRegExp = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;

  /**
   * @param {any} value
   * @param {string} name
   */
  function validateLinkHeaderFormat(value, name) {
    if (typeof value === "undefined" || !RegExpPrototypeExec(linkValueRegExp, value)) {
      throw new ERR_INVALID_ARG_VALUE(name, value, "must be an array or string of format \"</styles.css>; rel=preload; as=style\"");
    }
  }

  /**
   * @param {any} hints
   * @return {string}
   */
  function validateLinkHeaderValue(hints) {
    if (typeof hints === "string") {
      validateLinkHeaderFormat(hints, "hints");
      return hints;
    } else if (ArrayIsArray(hints)) {
      const hintsLength = hints.length;
      let result = "";
      if (hintsLength === 0) {
        return result;
      }
      for (let i = 0; i < hintsLength; i++) {
        const link = hints[i];
        validateLinkHeaderFormat(link, "hints");
        result += link;
        if (i !== hintsLength - 1) {
          result += ", ";
        }
      }
      return result;
    }
    throw new ERR_INVALID_ARG_VALUE("hints", hints, "must be an array or string of format \"</styles.css>; rel=preload; as=style\"");
  }
  exports$l = {
    isInt32,
    isUint32,
    parseFileMode,
    validateArray,
    validateStringArray,
    validateBooleanArray,
    validateAbortSignalArray,
    validateBoolean,
    validateBuffer,
    validateDictionary,
    validateEncoding,
    validateFunction,
    validateInt32,
    validateInteger,
    validateNumber,
    validateObject,
    validateOneOf,
    validatePlainFunction,
    validatePort,
    validateSignalName,
    validateString,
    validateUint32,
    validateUndefined,
    validateUnion,
    validateAbortSignal,
    validateLinkHeaderValue
  };
  return exports$l;
}

var exports$k = {},
  _dewExec$j = false;
function dew$j() {
  if (_dewExec$j) return exports$k;
  _dewExec$j = true;
  const {
    SymbolAsyncIterator,
    SymbolIterator,
    SymbolFor
  } = dew$o();

  // We need to use SymbolFor to make these globally available
  // for interopt with readable-stream, i.e. readable-stream
  // and node core needs to be able to read/write private state
  // from each other for proper interoperability.
  const kIsDestroyed = SymbolFor("nodejs.stream.destroyed");
  const kIsErrored = SymbolFor("nodejs.stream.errored");
  const kIsReadable = SymbolFor("nodejs.stream.readable");
  const kIsWritable = SymbolFor("nodejs.stream.writable");
  const kIsDisturbed = SymbolFor("nodejs.stream.disturbed");
  const kIsClosedPromise = SymbolFor("nodejs.webstream.isClosedPromise");
  const kControllerErrorFunction = SymbolFor("nodejs.webstream.controllerErrorFunction");
  function isReadableNodeStream(obj, strict = false) {
    var _obj$_readableState;
    return !!(obj && typeof obj.pipe === "function" && typeof obj.on === "function" && (!strict || typeof obj.pause === "function" && typeof obj.resume === "function") && (!obj._writableState || ((_obj$_readableState = obj._readableState) === null || _obj$_readableState === undefined ? undefined : _obj$_readableState.readable) !== false) && (
    // Duplex
    !obj._writableState || obj._readableState)
    // Writable has .pipe.
    );
  }
  function isWritableNodeStream(obj) {
    var _obj$_writableState;
    return !!(obj && typeof obj.write === "function" && typeof obj.on === "function" && (!obj._readableState || ((_obj$_writableState = obj._writableState) === null || _obj$_writableState === undefined ? undefined : _obj$_writableState.writable) !== false)
    // Duplex
    );
  }
  function isDuplexNodeStream(obj) {
    return !!(obj && typeof obj.pipe === "function" && obj._readableState && typeof obj.on === "function" && typeof obj.write === "function");
  }
  function isNodeStream(obj) {
    return obj && (obj._readableState || obj._writableState || typeof obj.write === "function" && typeof obj.on === "function" || typeof obj.pipe === "function" && typeof obj.on === "function");
  }
  function isReadableStream(obj) {
    return !!(obj && !isNodeStream(obj) && typeof obj.pipeThrough === "function" && typeof obj.getReader === "function" && typeof obj.cancel === "function");
  }
  function isWritableStream(obj) {
    return !!(obj && !isNodeStream(obj) && typeof obj.getWriter === "function" && typeof obj.abort === "function");
  }
  function isTransformStream(obj) {
    return !!(obj && !isNodeStream(obj) && typeof obj.readable === "object" && typeof obj.writable === "object");
  }
  function isWebStream(obj) {
    return isReadableStream(obj) || isWritableStream(obj) || isTransformStream(obj);
  }
  function isIterable(obj, isAsync) {
    if (obj == null) return false;
    if (isAsync === true) return typeof obj[SymbolAsyncIterator] === "function";
    if (isAsync === false) return typeof obj[SymbolIterator] === "function";
    return typeof obj[SymbolAsyncIterator] === "function" || typeof obj[SymbolIterator] === "function";
  }
  function isDestroyed(stream) {
    if (!isNodeStream(stream)) return null;
    const wState = stream._writableState;
    const rState = stream._readableState;
    const state = wState || rState;
    return !!(stream.destroyed || stream[kIsDestroyed] || state !== null && state !== undefined && state.destroyed);
  }

  // Have been end():d.
  function isWritableEnded(stream) {
    if (!isWritableNodeStream(stream)) return null;
    if (stream.writableEnded === true) return true;
    const wState = stream._writableState;
    if (wState !== null && wState !== undefined && wState.errored) return false;
    if (typeof (wState === null || wState === undefined ? undefined : wState.ended) !== "boolean") return null;
    return wState.ended;
  }

  // Have emitted 'finish'.
  function isWritableFinished(stream, strict) {
    if (!isWritableNodeStream(stream)) return null;
    if (stream.writableFinished === true) return true;
    const wState = stream._writableState;
    if (wState !== null && wState !== undefined && wState.errored) return false;
    if (typeof (wState === null || wState === undefined ? undefined : wState.finished) !== "boolean") return null;
    return !!(wState.finished || strict === false && wState.ended === true && wState.length === 0);
  }

  // Have been push(null):d.
  function isReadableEnded(stream) {
    if (!isReadableNodeStream(stream)) return null;
    if (stream.readableEnded === true) return true;
    const rState = stream._readableState;
    if (!rState || rState.errored) return false;
    if (typeof (rState === null || rState === undefined ? undefined : rState.ended) !== "boolean") return null;
    return rState.ended;
  }

  // Have emitted 'end'.
  function isReadableFinished(stream, strict) {
    if (!isReadableNodeStream(stream)) return null;
    const rState = stream._readableState;
    if (rState !== null && rState !== undefined && rState.errored) return false;
    if (typeof (rState === null || rState === undefined ? undefined : rState.endEmitted) !== "boolean") return null;
    return !!(rState.endEmitted || strict === false && rState.ended === true && rState.length === 0);
  }
  function isReadable(stream) {
    if (stream && stream[kIsReadable] != null) return stream[kIsReadable];
    if (typeof (stream === null || stream === undefined ? undefined : stream.readable) !== "boolean") return null;
    if (isDestroyed(stream)) return false;
    return isReadableNodeStream(stream) && stream.readable && !isReadableFinished(stream);
  }
  function isWritable(stream) {
    if (stream && stream[kIsWritable] != null) return stream[kIsWritable];
    if (typeof (stream === null || stream === undefined ? undefined : stream.writable) !== "boolean") return null;
    if (isDestroyed(stream)) return false;
    return isWritableNodeStream(stream) && stream.writable && !isWritableEnded(stream);
  }
  function isFinished(stream, opts) {
    if (!isNodeStream(stream)) {
      return null;
    }
    if (isDestroyed(stream)) {
      return true;
    }
    if ((opts === null || opts === undefined ? undefined : opts.readable) !== false && isReadable(stream)) {
      return false;
    }
    if ((opts === null || opts === undefined ? undefined : opts.writable) !== false && isWritable(stream)) {
      return false;
    }
    return true;
  }
  function isWritableErrored(stream) {
    var _stream$_writableStat, _stream$_writableStat2;
    if (!isNodeStream(stream)) {
      return null;
    }
    if (stream.writableErrored) {
      return stream.writableErrored;
    }
    return (_stream$_writableStat = (_stream$_writableStat2 = stream._writableState) === null || _stream$_writableStat2 === undefined ? undefined : _stream$_writableStat2.errored) !== null && _stream$_writableStat !== undefined ? _stream$_writableStat : null;
  }
  function isReadableErrored(stream) {
    var _stream$_readableStat, _stream$_readableStat2;
    if (!isNodeStream(stream)) {
      return null;
    }
    if (stream.readableErrored) {
      return stream.readableErrored;
    }
    return (_stream$_readableStat = (_stream$_readableStat2 = stream._readableState) === null || _stream$_readableStat2 === undefined ? undefined : _stream$_readableStat2.errored) !== null && _stream$_readableStat !== undefined ? _stream$_readableStat : null;
  }
  function isClosed(stream) {
    if (!isNodeStream(stream)) {
      return null;
    }
    if (typeof stream.closed === "boolean") {
      return stream.closed;
    }
    const wState = stream._writableState;
    const rState = stream._readableState;
    if (typeof (wState === null || wState === undefined ? undefined : wState.closed) === "boolean" || typeof (rState === null || rState === undefined ? undefined : rState.closed) === "boolean") {
      return (wState === null || wState === undefined ? undefined : wState.closed) || (rState === null || rState === undefined ? undefined : rState.closed);
    }
    if (typeof stream._closed === "boolean" && isOutgoingMessage(stream)) {
      return stream._closed;
    }
    return null;
  }
  function isOutgoingMessage(stream) {
    return typeof stream._closed === "boolean" && typeof stream._defaultKeepAlive === "boolean" && typeof stream._removedConnection === "boolean" && typeof stream._removedContLen === "boolean";
  }
  function isServerResponse(stream) {
    return typeof stream._sent100 === "boolean" && isOutgoingMessage(stream);
  }
  function isServerRequest(stream) {
    var _stream$req;
    return typeof stream._consuming === "boolean" && typeof stream._dumped === "boolean" && ((_stream$req = stream.req) === null || _stream$req === undefined ? undefined : _stream$req.upgradeOrConnect) === undefined;
  }
  function willEmitClose(stream) {
    if (!isNodeStream(stream)) return null;
    const wState = stream._writableState;
    const rState = stream._readableState;
    const state = wState || rState;
    return !state && isServerResponse(stream) || !!(state && state.autoDestroy && state.emitClose && state.closed === false);
  }
  function isDisturbed(stream) {
    var _stream$kIsDisturbed;
    return !!(stream && ((_stream$kIsDisturbed = stream[kIsDisturbed]) !== null && _stream$kIsDisturbed !== undefined ? _stream$kIsDisturbed : stream.readableDidRead || stream.readableAborted));
  }
  function isErrored(stream) {
    var _ref, _ref2, _ref3, _ref4, _ref5, _stream$kIsErrored, _stream$_readableStat3, _stream$_writableStat3, _stream$_readableStat4, _stream$_writableStat4;
    return !!(stream && ((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_stream$kIsErrored = stream[kIsErrored]) !== null && _stream$kIsErrored !== undefined ? _stream$kIsErrored : stream.readableErrored) !== null && _ref5 !== undefined ? _ref5 : stream.writableErrored) !== null && _ref4 !== undefined ? _ref4 : (_stream$_readableStat3 = stream._readableState) === null || _stream$_readableStat3 === undefined ? undefined : _stream$_readableStat3.errorEmitted) !== null && _ref3 !== undefined ? _ref3 : (_stream$_writableStat3 = stream._writableState) === null || _stream$_writableStat3 === undefined ? undefined : _stream$_writableStat3.errorEmitted) !== null && _ref2 !== undefined ? _ref2 : (_stream$_readableStat4 = stream._readableState) === null || _stream$_readableStat4 === undefined ? undefined : _stream$_readableStat4.errored) !== null && _ref !== undefined ? _ref : (_stream$_writableStat4 = stream._writableState) === null || _stream$_writableStat4 === undefined ? undefined : _stream$_writableStat4.errored));
  }
  exports$k = {
    isDestroyed,
    kIsDestroyed,
    isDisturbed,
    kIsDisturbed,
    isErrored,
    kIsErrored,
    isReadable,
    kIsReadable,
    kIsClosedPromise,
    kControllerErrorFunction,
    kIsWritable,
    isClosed,
    isDuplexNodeStream,
    isFinished,
    isIterable,
    isReadableNodeStream,
    isReadableStream,
    isReadableEnded,
    isReadableFinished,
    isReadableErrored,
    isNodeStream,
    isWebStream,
    isWritable,
    isWritableNodeStream,
    isWritableStream,
    isWritableEnded,
    isWritableFinished,
    isWritableErrored,
    isServerRequest,
    isServerResponse,
    willEmitClose,
    isTransformStream
  };
  return exports$k;
}

var exports$j = {},
  _dewExec$i = false;
function dew$i() {
  if (_dewExec$i) return exports$j;
  _dewExec$i = true;
  /* replacement start */

  const process$1 = process

  /* replacement end */
  // Ported from https://github.com/mafintosh/end-of-stream with
  // permission from the author, Mathias Buus (@mafintosh).
  ;
  const {
    AbortError,
    codes
  } = dew$l();
  const {
    ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PREMATURE_CLOSE
  } = codes;
  const {
    kEmptyObject,
    once
  } = dew$m();
  const {
    validateAbortSignal,
    validateFunction,
    validateObject,
    validateBoolean
  } = dew$k();
  const {
    Promise,
    PromisePrototypeThen,
    SymbolDispose
  } = dew$o();
  const {
    isClosed,
    isReadable,
    isReadableNodeStream,
    isReadableStream,
    isReadableFinished,
    isReadableErrored,
    isWritable,
    isWritableNodeStream,
    isWritableStream,
    isWritableFinished,
    isWritableErrored,
    isNodeStream,
    willEmitClose: _willEmitClose,
    kIsClosedPromise
  } = dew$j();
  let addAbortListener;
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  const nop = () => {};
  function eos(stream, options, callback) {
    var _options$readable, _options$writable;
    if (arguments.length === 2) {
      callback = options;
      options = kEmptyObject;
    } else if (options == null) {
      options = kEmptyObject;
    } else {
      validateObject(options, "options");
    }
    validateFunction(callback, "callback");
    validateAbortSignal(options.signal, "options.signal");
    callback = once(callback);
    if (isReadableStream(stream) || isWritableStream(stream)) {
      return eosWeb(stream, options, callback);
    }
    if (!isNodeStream(stream)) {
      throw new ERR_INVALID_ARG_TYPE("stream", ["ReadableStream", "WritableStream", "Stream"], stream);
    }
    const readable = (_options$readable = options.readable) !== null && _options$readable !== undefined ? _options$readable : isReadableNodeStream(stream);
    const writable = (_options$writable = options.writable) !== null && _options$writable !== undefined ? _options$writable : isWritableNodeStream(stream);
    const wState = stream._writableState;
    const rState = stream._readableState;
    const onlegacyfinish = () => {
      if (!stream.writable) {
        onfinish();
      }
    };

    // TODO (ronag): Improve soft detection to include core modules and
    // common ecosystem modules that do properly emit 'close' but fail
    // this generic check.
    let willEmitClose = _willEmitClose(stream) && isReadableNodeStream(stream) === readable && isWritableNodeStream(stream) === writable;
    let writableFinished = isWritableFinished(stream, false);
    const onfinish = () => {
      writableFinished = true;
      // Stream should not be destroyed here. If it is that
      // means that user space is doing something differently and
      // we cannot trust willEmitClose.
      if (stream.destroyed) {
        willEmitClose = false;
      }
      if (willEmitClose && (!stream.readable || readable)) {
        return;
      }
      if (!readable || readableFinished) {
        callback.call(stream);
      }
    };
    let readableFinished = isReadableFinished(stream, false);
    const onend = () => {
      readableFinished = true;
      // Stream should not be destroyed here. If it is that
      // means that user space is doing something differently and
      // we cannot trust willEmitClose.
      if (stream.destroyed) {
        willEmitClose = false;
      }
      if (willEmitClose && (!stream.writable || writable)) {
        return;
      }
      if (!writable || writableFinished) {
        callback.call(stream);
      }
    };
    const onerror = err => {
      callback.call(stream, err);
    };
    let closed = isClosed(stream);
    const onclose = () => {
      closed = true;
      const errored = isWritableErrored(stream) || isReadableErrored(stream);
      if (errored && typeof errored !== "boolean") {
        return callback.call(stream, errored);
      }
      if (readable && !readableFinished && isReadableNodeStream(stream, true)) {
        if (!isReadableFinished(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
      }
      if (writable && !writableFinished) {
        if (!isWritableFinished(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
      }
      callback.call(stream);
    };
    const onclosed = () => {
      closed = true;
      const errored = isWritableErrored(stream) || isReadableErrored(stream);
      if (errored && typeof errored !== "boolean") {
        return callback.call(stream, errored);
      }
      callback.call(stream);
    };
    const onrequest = () => {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      if (!willEmitClose) {
        stream.on("abort", onclose);
      }
      if (stream.req) {
        onrequest();
      } else {
        stream.on("request", onrequest);
      }
    } else if (writable && !wState) {
      // legacy streams
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }

    // Not all streams will emit 'close' after 'aborted'.
    if (!willEmitClose && typeof stream.aborted === "boolean") {
      stream.on("aborted", onclose);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (options.error !== false) {
      stream.on("error", onerror);
    }
    stream.on("close", onclose);
    if (closed) {
      process$1.nextTick(onclose);
    } else if (wState !== null && wState !== undefined && wState.errorEmitted || rState !== null && rState !== undefined && rState.errorEmitted) {
      if (!willEmitClose) {
        process$1.nextTick(onclosed);
      }
    } else if (!readable && (!willEmitClose || isReadable(stream)) && (writableFinished || isWritable(stream) === false)) {
      process$1.nextTick(onclosed);
    } else if (!writable && (!willEmitClose || isWritable(stream)) && (readableFinished || isReadable(stream) === false)) {
      process$1.nextTick(onclosed);
    } else if (rState && stream.req && stream.aborted) {
      process$1.nextTick(onclosed);
    }
    const cleanup = () => {
      callback = nop;
      stream.removeListener("aborted", onclose);
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req) stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
    if (options.signal && !closed) {
      const abort = () => {
        // Keep it because cleanup removes it.
        const endCallback = callback;
        cleanup();
        endCallback.call(stream, new AbortError(undefined, {
          cause: options.signal.reason
        }));
      };
      if (options.signal.aborted) {
        process$1.nextTick(abort);
      } else {
        addAbortListener = addAbortListener || dew$m().addAbortListener;
        const disposable = addAbortListener(options.signal, abort);
        const originalCallback = callback;
        callback = once((...args) => {
          disposable[SymbolDispose]();
          originalCallback.apply(stream, args);
        });
      }
    }
    return cleanup;
  }
  function eosWeb(stream, options, callback) {
    let isAborted = false;
    let abort = nop;
    if (options.signal) {
      abort = () => {
        isAborted = true;
        callback.call(stream, new AbortError(undefined, {
          cause: options.signal.reason
        }));
      };
      if (options.signal.aborted) {
        process$1.nextTick(abort);
      } else {
        addAbortListener = addAbortListener || dew$m().addAbortListener;
        const disposable = addAbortListener(options.signal, abort);
        const originalCallback = callback;
        callback = once((...args) => {
          disposable[SymbolDispose]();
          originalCallback.apply(stream, args);
        });
      }
    }
    const resolverFn = (...args) => {
      if (!isAborted) {
        process$1.nextTick(() => callback.apply(stream, args));
      }
    };
    PromisePrototypeThen(stream[kIsClosedPromise].promise, resolverFn, resolverFn);
    return nop;
  }
  function finished(stream, opts) {
    var _opts;
    let autoCleanup = false;
    if (opts === null) {
      opts = kEmptyObject;
    }
    if ((_opts = opts) !== null && _opts !== undefined && _opts.cleanup) {
      validateBoolean(opts.cleanup, "cleanup");
      autoCleanup = opts.cleanup;
    }
    return new Promise((resolve, reject) => {
      const cleanup = eos(stream, opts, err => {
        if (autoCleanup) {
          cleanup();
        }
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  exports$j = eos;
  exports$j.finished = finished;
  return exports$j;
}

var exports$i = {},
  _dewExec$h = false;
function dew$h() {
  if (_dewExec$h) return exports$i;
  _dewExec$h = true;
  /* replacement start */

  const process$1 = process;

  /* replacement end */

  const {
    aggregateTwoErrors,
    codes: {
      ERR_MULTIPLE_CALLBACK
    },
    AbortError
  } = dew$l();
  const {
    Symbol
  } = dew$o();
  const {
    kIsDestroyed,
    isDestroyed,
    isFinished,
    isServerRequest
  } = dew$j();
  const kDestroy = Symbol("kDestroy");
  const kConstruct = Symbol("kConstruct");
  function checkError(err, w, r) {
    if (err) {
      // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
      err.stack; // eslint-disable-line no-unused-expressions

      if (w && !w.errored) {
        w.errored = err;
      }
      if (r && !r.errored) {
        r.errored = err;
      }
    }
  }

  // Backwards compat. cb() is undocumented and unused in core but
  // unfortunately might be used by modules.
  function destroy(err, cb) {
    const r = this._readableState;
    const w = this._writableState;
    // With duplex streams we use the writable side for state.
    const s = w || r;
    if (w !== null && w !== undefined && w.destroyed || r !== null && r !== undefined && r.destroyed) {
      if (typeof cb === "function") {
        cb();
      }
      return this;
    }

    // We set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    checkError(err, w, r);
    if (w) {
      w.destroyed = true;
    }
    if (r) {
      r.destroyed = true;
    }

    // If still constructing then defer calling _destroy.
    if (!s.constructed) {
      this.once(kDestroy, function (er) {
        _destroy(this, aggregateTwoErrors(er, err), cb);
      });
    } else {
      _destroy(this, err, cb);
    }
    return this;
  }
  function _destroy(self, err, cb) {
    let called = false;
    function onDestroy(err) {
      if (called) {
        return;
      }
      called = true;
      const r = self._readableState;
      const w = self._writableState;
      checkError(err, w, r);
      if (w) {
        w.closed = true;
      }
      if (r) {
        r.closed = true;
      }
      if (typeof cb === "function") {
        cb(err);
      }
      if (err) {
        process$1.nextTick(emitErrorCloseNT, self, err);
      } else {
        process$1.nextTick(emitCloseNT, self);
      }
    }
    try {
      self._destroy(err || null, onDestroy);
    } catch (err) {
      onDestroy(err);
    }
  }
  function emitErrorCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
  }
  function emitCloseNT(self) {
    const r = self._readableState;
    const w = self._writableState;
    if (w) {
      w.closeEmitted = true;
    }
    if (r) {
      r.closeEmitted = true;
    }
    if (w !== null && w !== undefined && w.emitClose || r !== null && r !== undefined && r.emitClose) {
      self.emit("close");
    }
  }
  function emitErrorNT(self, err) {
    const r = self._readableState;
    const w = self._writableState;
    if (w !== null && w !== undefined && w.errorEmitted || r !== null && r !== undefined && r.errorEmitted) {
      return;
    }
    if (w) {
      w.errorEmitted = true;
    }
    if (r) {
      r.errorEmitted = true;
    }
    self.emit("error", err);
  }
  function undestroy() {
    const r = this._readableState;
    const w = this._writableState;
    if (r) {
      r.constructed = true;
      r.closed = false;
      r.closeEmitted = false;
      r.destroyed = false;
      r.errored = null;
      r.errorEmitted = false;
      r.reading = false;
      r.ended = r.readable === false;
      r.endEmitted = r.readable === false;
    }
    if (w) {
      w.constructed = true;
      w.destroyed = false;
      w.closed = false;
      w.closeEmitted = false;
      w.errored = null;
      w.errorEmitted = false;
      w.finalCalled = false;
      w.prefinished = false;
      w.ended = w.writable === false;
      w.ending = w.writable === false;
      w.finished = w.writable === false;
    }
  }
  function errorOrDestroy(stream, err, sync) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.

    const r = stream._readableState;
    const w = stream._writableState;
    if (w !== null && w !== undefined && w.destroyed || r !== null && r !== undefined && r.destroyed) {
      return this;
    }
    if (r !== null && r !== undefined && r.autoDestroy || w !== null && w !== undefined && w.autoDestroy) stream.destroy(err);else if (err) {
      // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
      err.stack; // eslint-disable-line no-unused-expressions

      if (w && !w.errored) {
        w.errored = err;
      }
      if (r && !r.errored) {
        r.errored = err;
      }
      if (sync) {
        process$1.nextTick(emitErrorNT, stream, err);
      } else {
        emitErrorNT(stream, err);
      }
    }
  }
  function construct(stream, cb) {
    if (typeof stream._construct !== "function") {
      return;
    }
    const r = stream._readableState;
    const w = stream._writableState;
    if (r) {
      r.constructed = false;
    }
    if (w) {
      w.constructed = false;
    }
    stream.once(kConstruct, cb);
    if (stream.listenerCount(kConstruct) > 1) {
      // Duplex
      return;
    }
    process$1.nextTick(constructNT, stream);
  }
  function constructNT(stream) {
    let called = false;
    function onConstruct(err) {
      if (called) {
        errorOrDestroy(stream, err !== null && err !== undefined ? err : new ERR_MULTIPLE_CALLBACK());
        return;
      }
      called = true;
      const r = stream._readableState;
      const w = stream._writableState;
      const s = w || r;
      if (r) {
        r.constructed = true;
      }
      if (w) {
        w.constructed = true;
      }
      if (s.destroyed) {
        stream.emit(kDestroy, err);
      } else if (err) {
        errorOrDestroy(stream, err, true);
      } else {
        process$1.nextTick(emitConstructNT, stream);
      }
    }
    try {
      stream._construct(err => {
        process$1.nextTick(onConstruct, err);
      });
    } catch (err) {
      process$1.nextTick(onConstruct, err);
    }
  }
  function emitConstructNT(stream) {
    stream.emit(kConstruct);
  }
  function isRequest(stream) {
    return (stream === null || stream === undefined ? undefined : stream.setHeader) && typeof stream.abort === "function";
  }
  function emitCloseLegacy(stream) {
    stream.emit("close");
  }
  function emitErrorCloseLegacy(stream, err) {
    stream.emit("error", err);
    process$1.nextTick(emitCloseLegacy, stream);
  }

  // Normalize destroy for legacy.
  function destroyer(stream, err) {
    if (!stream || isDestroyed(stream)) {
      return;
    }
    if (!err && !isFinished(stream)) {
      err = new AbortError();
    }

    // TODO: Remove isRequest branches.
    if (isServerRequest(stream)) {
      stream.socket = null;
      stream.destroy(err);
    } else if (isRequest(stream)) {
      stream.abort();
    } else if (isRequest(stream.req)) {
      stream.req.abort();
    } else if (typeof stream.destroy === "function") {
      stream.destroy(err);
    } else if (typeof stream.close === "function") {
      // TODO: Don't lose err?
      stream.close();
    } else if (err) {
      process$1.nextTick(emitErrorCloseLegacy, stream, err);
    } else {
      process$1.nextTick(emitCloseLegacy, stream);
    }
    if (!stream.destroyed) {
      stream[kIsDestroyed] = true;
    }
  }
  exports$i = {
    construct,
    destroyer,
    destroy,
    undestroy,
    errorOrDestroy
  };
  return exports$i;
}

var exports$h = {},
  _dewExec$g = false;
function dew$g() {
  if (_dewExec$g) return exports$h;
  _dewExec$g = true;
  const {
    ArrayIsArray,
    ObjectSetPrototypeOf
  } = dew$o();
  const {
    EventEmitter: EE
  } = exports$q;
  function Stream(opts) {
    EE.call(this, opts);
  }
  ObjectSetPrototypeOf(Stream.prototype, EE.prototype);
  ObjectSetPrototypeOf(Stream, EE);
  Stream.prototype.pipe = function (dest, options) {
    const source = this;
    function ondata(chunk) {
      if (dest.writable && dest.write(chunk) === false && source.pause) {
        source.pause();
      }
    }
    source.on("data", ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on("drain", ondrain);

    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on("end", onend);
      source.on("close", onclose);
    }
    let didOnEnd = false;
    function onend() {
      if (didOnEnd) return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd) return;
      didOnEnd = true;
      if (typeof dest.destroy === "function") dest.destroy();
    }

    // Don't leave dangling pipes when there are errors.
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this, "error") === 0) {
        this.emit("error", er);
      }
    }
    prependListener(source, "error", onerror);
    prependListener(dest, "error", onerror);

    // Remove all the event listeners that were added.
    function cleanup() {
      source.removeListener("data", ondata);
      dest.removeListener("drain", ondrain);
      source.removeListener("end", onend);
      source.removeListener("close", onclose);
      source.removeListener("error", onerror);
      dest.removeListener("error", onerror);
      source.removeListener("end", cleanup);
      source.removeListener("close", cleanup);
      dest.removeListener("close", cleanup);
    }
    source.on("end", cleanup);
    source.on("close", cleanup);
    dest.on("close", cleanup);
    dest.emit("pipe", source);

    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
  };
  function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);

    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (ArrayIsArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
  exports$h = {
    Stream,
    prependListener
  };
  return exports$h;
}

var exports$g = {},
  _dewExec$f = false;
function dew$f() {
  if (_dewExec$f) return exports$g;
  _dewExec$f = true;
  const {
    SymbolDispose
  } = dew$o();
  const {
    AbortError,
    codes
  } = dew$l();
  const {
    isNodeStream,
    isWebStream,
    kControllerErrorFunction
  } = dew$j();
  const eos = dew$i();
  const {
    ERR_INVALID_ARG_TYPE
  } = codes;
  let addAbortListener;

  // This method is inlined here for readable-stream
  // It also does not allow for signal to not exist on the stream
  // https://github.com/nodejs/node/pull/36061#discussion_r533718029
  const validateAbortSignal = (signal, name) => {
    if (typeof signal !== "object" || !("aborted" in signal)) {
      throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
    }
  };
  exports$g.addAbortSignal = function addAbortSignal(signal, stream) {
    validateAbortSignal(signal, "signal");
    if (!isNodeStream(stream) && !isWebStream(stream)) {
      throw new ERR_INVALID_ARG_TYPE("stream", ["ReadableStream", "WritableStream", "Stream"], stream);
    }
    return exports$g.addAbortSignalNoValidate(signal, stream);
  };
  exports$g.addAbortSignalNoValidate = function (signal, stream) {
    if (typeof signal !== "object" || !("aborted" in signal)) {
      return stream;
    }
    const onAbort = isNodeStream(stream) ? () => {
      stream.destroy(new AbortError(undefined, {
        cause: signal.reason
      }));
    } : () => {
      stream[kControllerErrorFunction](new AbortError(undefined, {
        cause: signal.reason
      }));
    };
    if (signal.aborted) {
      onAbort();
    } else {
      addAbortListener = addAbortListener || dew$m().addAbortListener;
      const disposable = addAbortListener(signal, onAbort);
      eos(stream, disposable[SymbolDispose]);
    }
    return stream;
  };
  return exports$g;
}

var exports$f = {},
  _dewExec$e = false;
function dew$e() {
  if (_dewExec$e) return exports$f;
  _dewExec$e = true;
  const {
    StringPrototypeSlice,
    SymbolIterator,
    TypedArrayPrototypeSet,
    Uint8Array
  } = dew$o();
  const {
    Buffer
  } = dew$p();
  const {
    inspect
  } = dew$m();
  exports$f = class BufferList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(v) {
      const entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
    unshift(v) {
      const entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
    shift() {
      if (this.length === 0) return;
      const ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
    clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
    join(s) {
      if (this.length === 0) return "";
      let p = this.head;
      let ret = "" + p.data;
      while ((p = p.next) !== null) ret += s + p.data;
      return ret;
    }
    concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      const ret = Buffer.allocUnsafe(n >>> 0);
      let p = this.head;
      let i = 0;
      while (p) {
        TypedArrayPrototypeSet(ret, p.data, i);
        i += p.data.length;
        p = p.next;
      }
      return ret;
    }

    // Consumes a specified amount of bytes or characters from the buffered data.
    consume(n, hasStrings) {
      const data = this.head.data;
      if (n < data.length) {
        // `slice` is the same for buffers and strings.
        const slice = data.slice(0, n);
        this.head.data = data.slice(n);
        return slice;
      }
      if (n === data.length) {
        // First chunk is a perfect match.
        return this.shift();
      }
      // Result spans more than one buffer.
      return hasStrings ? this._getString(n) : this._getBuffer(n);
    }
    first() {
      return this.head.data;
    }
    *[SymbolIterator]() {
      for (let p = this.head; p; p = p.next) {
        yield p.data;
      }
    }

    // Consumes a specified amount of characters from the buffered data.
    _getString(n) {
      let ret = "";
      let p = this.head;
      let c = 0;
      do {
        const str = p.data;
        if (n > str.length) {
          ret += str;
          n -= str.length;
        } else {
          if (n === str.length) {
            ret += str;
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            ret += StringPrototypeSlice(str, 0, n);
            this.head = p;
            p.data = StringPrototypeSlice(str, n);
          }
          break;
        }
        ++c;
      } while ((p = p.next) !== null);
      this.length -= c;
      return ret;
    }

    // Consumes a specified amount of bytes from the buffered data.
    _getBuffer(n) {
      const ret = Buffer.allocUnsafe(n);
      const retLen = n;
      let p = this.head;
      let c = 0;
      do {
        const buf = p.data;
        if (n > buf.length) {
          TypedArrayPrototypeSet(ret, buf, retLen - n);
          n -= buf.length;
        } else {
          if (n === buf.length) {
            TypedArrayPrototypeSet(ret, buf, retLen - n);
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            TypedArrayPrototypeSet(ret, new Uint8Array(buf.buffer, buf.byteOffset, n), retLen - n);
            this.head = p;
            p.data = buf.slice(n);
          }
          break;
        }
        ++c;
      } while ((p = p.next) !== null);
      this.length -= c;
      return ret;
    }

    // Make sure the linked list only shows the minimal necessary information.
    [Symbol.for("nodejs.util.inspect.custom")](_, options) {
      return inspect(this, {
        ...options,
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      });
    }
  };
  return exports$f;
}

var exports$e = {},
  _dewExec$d = false;
function dew$d() {
  if (_dewExec$d) return exports$e;
  _dewExec$d = true;
  const {
    MathFloor,
    NumberIsInteger
  } = dew$o();
  const {
    validateInteger
  } = dew$k();
  const {
    ERR_INVALID_ARG_VALUE
  } = dew$l().codes;
  let defaultHighWaterMarkBytes = 16 * 1024;
  let defaultHighWaterMarkObjectMode = 16;
  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }
  function getDefaultHighWaterMark(objectMode) {
    return objectMode ? defaultHighWaterMarkObjectMode : defaultHighWaterMarkBytes;
  }
  function setDefaultHighWaterMark(objectMode, value) {
    validateInteger(value, "value", 0);
    if (objectMode) {
      defaultHighWaterMarkObjectMode = value;
    } else {
      defaultHighWaterMarkBytes = value;
    }
  }
  function getHighWaterMark(state, options, duplexKey, isDuplex) {
    const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!NumberIsInteger(hwm) || hwm < 0) {
        const name = isDuplex ? `options.${duplexKey}` : "options.highWaterMark";
        throw new ERR_INVALID_ARG_VALUE(name, hwm);
      }
      return MathFloor(hwm);
    }

    // Default value
    return getDefaultHighWaterMark(state.objectMode);
  }
  exports$e = {
    getHighWaterMark,
    getDefaultHighWaterMark,
    setDefaultHighWaterMark
  };
  return exports$e;
}

var exports$d = {},
  _dewExec$c = false;
function dew$c() {
  if (_dewExec$c) return exports$d;
  _dewExec$c = true;
  /* replacement start */

  const process$1 = process;

  /* replacement end */

  const {
    PromisePrototypeThen,
    SymbolAsyncIterator,
    SymbolIterator
  } = dew$o();
  const {
    Buffer
  } = dew$p();
  const {
    ERR_INVALID_ARG_TYPE,
    ERR_STREAM_NULL_VALUES
  } = dew$l().codes;
  function from(Readable, iterable, opts) {
    let iterator;
    if (typeof iterable === "string" || iterable instanceof Buffer) {
      return new Readable({
        objectMode: true,
        ...opts,
        read() {
          this.push(iterable);
          this.push(null);
        }
      });
    }
    let isAsync;
    if (iterable && iterable[SymbolAsyncIterator]) {
      isAsync = true;
      iterator = iterable[SymbolAsyncIterator]();
    } else if (iterable && iterable[SymbolIterator]) {
      isAsync = false;
      iterator = iterable[SymbolIterator]();
    } else {
      throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
    }
    const readable = new Readable({
      objectMode: true,
      highWaterMark: 1,
      // TODO(ronag): What options should be allowed?
      ...opts
    });

    // Flag to protect against _read
    // being called before last iteration completion.
    let reading = false;
    readable._read = function () {
      if (!reading) {
        reading = true;
        next();
      }
    };
    readable._destroy = function (error, cb) {
      PromisePrototypeThen(close(error), () => process$1.nextTick(cb, error),
      // nextTick is here in case cb throws
      e => process$1.nextTick(cb, e || error));
    };
    async function close(error) {
      const hadError = error !== undefined && error !== null;
      const hasThrow = typeof iterator.throw === "function";
      if (hadError && hasThrow) {
        const {
          value,
          done
        } = await iterator.throw(error);
        await value;
        if (done) {
          return;
        }
      }
      if (typeof iterator.return === "function") {
        const {
          value
        } = await iterator.return();
        await value;
      }
    }
    async function next() {
      for (;;) {
        try {
          const {
            value,
            done
          } = isAsync ? await iterator.next() : iterator.next();
          if (done) {
            readable.push(null);
          } else {
            const res = value && typeof value.then === "function" ? await value : value;
            if (res === null) {
              reading = false;
              throw new ERR_STREAM_NULL_VALUES();
            } else if (readable.push(res)) {
              continue;
            } else {
              reading = false;
            }
          }
        } catch (err) {
          readable.destroy(err);
        }
        break;
      }
    }
    return readable;
  }
  exports$d = from;
  return exports$d;
}

var exports$c = {},
  _dewExec$b = false;
var _global$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$b() {
  if (_dewExec$b) return exports$c;
  _dewExec$b = true;
  /* replacement start */

  const process$1 = process

  /* replacement end */
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  ;
  const {
    ArrayPrototypeIndexOf,
    NumberIsInteger,
    NumberIsNaN,
    NumberParseInt,
    ObjectDefineProperties,
    ObjectKeys,
    ObjectSetPrototypeOf,
    Promise,
    SafeSet,
    SymbolAsyncDispose,
    SymbolAsyncIterator,
    Symbol
  } = dew$o();
  exports$c = Readable;
  Readable.ReadableState = ReadableState;
  const {
    EventEmitter: EE
  } = exports$q;
  const {
    Stream,
    prependListener
  } = dew$g();
  const {
    Buffer
  } = dew$p();
  const {
    addAbortSignal
  } = dew$f();
  const eos = dew$i();
  let debug = dew$m().debuglog("stream", fn => {
    debug = fn;
  });
  const BufferList = dew$e();
  const destroyImpl = dew$h();
  const {
    getHighWaterMark,
    getDefaultHighWaterMark
  } = dew$d();
  const {
    aggregateTwoErrors,
    codes: {
      ERR_INVALID_ARG_TYPE,
      ERR_METHOD_NOT_IMPLEMENTED,
      ERR_OUT_OF_RANGE,
      ERR_STREAM_PUSH_AFTER_EOF,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT
    },
    AbortError
  } = dew$l();
  const {
    validateObject
  } = dew$k();
  const kPaused = Symbol("kPaused");
  const {
    StringDecoder
  } = exports$r;
  const from = dew$c();
  ObjectSetPrototypeOf(Readable.prototype, Stream.prototype);
  ObjectSetPrototypeOf(Readable, Stream);
  const nop = () => {};
  const {
    errorOrDestroy
  } = destroyImpl;
  const kObjectMode = 1 << 0;
  const kEnded = 1 << 1;
  const kEndEmitted = 1 << 2;
  const kReading = 1 << 3;
  const kConstructed = 1 << 4;
  const kSync = 1 << 5;
  const kNeedReadable = 1 << 6;
  const kEmittedReadable = 1 << 7;
  const kReadableListening = 1 << 8;
  const kResumeScheduled = 1 << 9;
  const kErrorEmitted = 1 << 10;
  const kEmitClose = 1 << 11;
  const kAutoDestroy = 1 << 12;
  const kDestroyed = 1 << 13;
  const kClosed = 1 << 14;
  const kCloseEmitted = 1 << 15;
  const kMultiAwaitDrain = 1 << 16;
  const kReadingMore = 1 << 17;
  const kDataEmitted = 1 << 18;

  // TODO(benjamingr) it is likely slower to do it this way than with free functions
  function makeBitMapDescriptor(bit) {
    return {
      enumerable: false,
      get() {
        return ((this || _global$2).state & bit) !== 0;
      },
      set(value) {
        if (value) (this || _global$2).state |= bit;else (this || _global$2).state &= ~bit;
      }
    };
  }
  ObjectDefineProperties(ReadableState.prototype, {
    objectMode: makeBitMapDescriptor(kObjectMode),
    ended: makeBitMapDescriptor(kEnded),
    endEmitted: makeBitMapDescriptor(kEndEmitted),
    reading: makeBitMapDescriptor(kReading),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: makeBitMapDescriptor(kConstructed),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: makeBitMapDescriptor(kSync),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: makeBitMapDescriptor(kNeedReadable),
    emittedReadable: makeBitMapDescriptor(kEmittedReadable),
    readableListening: makeBitMapDescriptor(kReadableListening),
    resumeScheduled: makeBitMapDescriptor(kResumeScheduled),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: makeBitMapDescriptor(kErrorEmitted),
    emitClose: makeBitMapDescriptor(kEmitClose),
    autoDestroy: makeBitMapDescriptor(kAutoDestroy),
    // Has it been destroyed.
    destroyed: makeBitMapDescriptor(kDestroyed),
    // Indicates whether the stream has finished destroying.
    closed: makeBitMapDescriptor(kClosed),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: makeBitMapDescriptor(kCloseEmitted),
    multiAwaitDrain: makeBitMapDescriptor(kMultiAwaitDrain),
    // If true, a maybeReadMore has been scheduled.
    readingMore: makeBitMapDescriptor(kReadingMore),
    dataEmitted: makeBitMapDescriptor(kDataEmitted)
  });
  function ReadableState(options, stream, isDuplex) {
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof dew$8();

    // Bit map field to store ReadableState more effciently with 1 bit per field
    // instead of a V8 slot per field.
    (this || _global$2).state = kEmitClose | kAutoDestroy | kConstructed | kSync;
    // Object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away.
    if (options && options.objectMode) (this || _global$2).state |= kObjectMode;
    if (isDuplex && options && options.readableObjectMode) (this || _global$2).state |= kObjectMode;

    // The point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    (this || _global$2).highWaterMark = options ? getHighWaterMark(this || _global$2, options, "readableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);

    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift().
    (this || _global$2).buffer = new BufferList();
    (this || _global$2).length = 0;
    (this || _global$2).pipes = [];
    (this || _global$2).flowing = null;
    (this || _global$2)[kPaused] = null;

    // Should close be emitted on destroy. Defaults to true.
    if (options && options.emitClose === false) (this || _global$2).state &= ~kEmitClose;

    // Should .destroy() be called after 'end' (and potentially 'finish').
    if (options && options.autoDestroy === false) (this || _global$2).state &= ~kAutoDestroy;

    // Indicates whether the stream has errored. When true no further
    // _read calls, 'data' or 'readable' events should occur. This is needed
    // since when autoDestroy is disabled we need a way to tell whether the
    // stream has failed.
    (this || _global$2).errored = null;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    (this || _global$2).defaultEncoding = options && options.defaultEncoding || "utf8";

    // Ref the piped dest which we need a drain event on it
    // type: null | Writable | Set<Writable>.
    (this || _global$2).awaitDrainWriters = null;
    (this || _global$2).decoder = null;
    (this || _global$2).encoding = null;
    if (options && options.encoding) {
      (this || _global$2).decoder = new StringDecoder(options.encoding);
      (this || _global$2).encoding = options.encoding;
    }
  }
  function Readable(options) {
    if (!((this || _global$2) instanceof Readable)) return new Readable(options);

    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5.
    const isDuplex = (this || _global$2) instanceof dew$8();
    (this || _global$2)._readableState = new ReadableState(options, this || _global$2, isDuplex);
    if (options) {
      if (typeof options.read === "function") (this || _global$2)._read = options.read;
      if (typeof options.destroy === "function") (this || _global$2)._destroy = options.destroy;
      if (typeof options.construct === "function") (this || _global$2)._construct = options.construct;
      if (options.signal && !isDuplex) addAbortSignal(options.signal, this || _global$2);
    }
    Stream.call(this || _global$2, options);
    destroyImpl.construct(this || _global$2, () => {
      if ((this || _global$2)._readableState.needReadable) {
        maybeReadMore(this || _global$2, (this || _global$2)._readableState);
      }
    });
  }
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function (err, cb) {
    cb(err);
  };
  Readable.prototype[EE.captureRejectionSymbol] = function (err) {
    this.destroy(err);
  };
  Readable.prototype[SymbolAsyncDispose] = function () {
    let error;
    if (!(this || _global$2).destroyed) {
      error = (this || _global$2).readableEnded ? null : new AbortError();
      this.destroy(error);
    }
    return new Promise((resolve, reject) => eos(this || _global$2, err => err && err !== error ? reject(err) : resolve(null)));
  };

  // Manually shove something into the read() buffer.
  // This returns true if the highWaterMark has not been hit yet,
  // similar to how Writable.write() returns true if you should
  // write() some more.
  Readable.prototype.push = function (chunk, encoding) {
    return readableAddChunk(this || _global$2, chunk, encoding, false);
  };

  // Unshift should *always* be something directly out of read().
  Readable.prototype.unshift = function (chunk, encoding) {
    return readableAddChunk(this || _global$2, chunk, encoding, true);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront) {
    debug("readableAddChunk", chunk);
    const state = stream._readableState;
    let err;
    if ((state.state & kObjectMode) === 0) {
      if (typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (state.encoding !== encoding) {
          if (addToFront && state.encoding) {
            // When unshifting, if state.encoding is set, we have to save
            // the string in the BufferList with the state encoding.
            chunk = Buffer.from(chunk, encoding).toString(state.encoding);
          } else {
            chunk = Buffer.from(chunk, encoding);
            encoding = "";
          }
        }
      } else if (chunk instanceof Buffer) {
        encoding = "";
      } else if (Stream._isUint8Array(chunk)) {
        chunk = Stream._uint8ArrayToBuffer(chunk);
        encoding = "";
      } else if (chunk != null) {
        err = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
    }
    if (err) {
      errorOrDestroy(stream, err);
    } else if (chunk === null) {
      state.state &= ~kReading;
      onEofChunk(stream, state);
    } else if ((state.state & kObjectMode) !== 0 || chunk && chunk.length > 0) {
      if (addToFront) {
        if ((state.state & kEndEmitted) !== 0) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else if (state.destroyed || state.errored) return false;else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed || state.errored) {
        return false;
      } else {
        state.state &= ~kReading;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.state &= ~kReading;
      maybeReadMore(stream, state);
    }

    // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  }
  function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync && stream.listenerCount("data") > 0) {
      // Use the guard to avoid creating `Set()` repeatedly
      // when we have multiple pipes.
      if ((state.state & kMultiAwaitDrain) !== 0) {
        state.awaitDrainWriters.clear();
      } else {
        state.awaitDrainWriters = null;
      }
      state.dataEmitted = true;
      stream.emit("data", chunk);
    } else {
      // Update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
      if ((state.state & kNeedReadable) !== 0) emitReadable(stream);
    }
    maybeReadMore(stream, state);
  }
  Readable.prototype.isPaused = function () {
    const state = (this || _global$2)._readableState;
    return state[kPaused] === true || state.flowing === false;
  };

  // Backwards compatibility.
  Readable.prototype.setEncoding = function (enc) {
    const decoder = new StringDecoder(enc);
    (this || _global$2)._readableState.decoder = decoder;
    // If setEncoding(null), decoder.encoding equals utf8.
    (this || _global$2)._readableState.encoding = (this || _global$2)._readableState.decoder.encoding;
    const buffer = (this || _global$2)._readableState.buffer;
    // Iterate over current buffer to convert already stored Buffers:
    let content = "";
    for (const data of buffer) {
      content += decoder.write(data);
    }
    buffer.clear();
    if (content !== "") buffer.push(content);
    (this || _global$2)._readableState.length = content.length;
    return this || _global$2;
  };

  // Don't raise the hwm > 1GB.
  const MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n) {
    if (n > MAX_HWM) {
      throw new ERR_OUT_OF_RANGE("size", "<= 1GiB", n);
    } else {
      // Get the next highest power of 2 to prevent increasing hwm excessively in
      // tiny amounts.
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }

  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if ((state.state & kObjectMode) !== 0) return 1;
    if (NumberIsNaN(n)) {
      // Only flow one buffer at a time.
      if (state.flowing && state.length) return state.buffer.first().length;
      return state.length;
    }
    if (n <= state.length) return n;
    return state.ended ? state.length : 0;
  }

  // You can override either this method, or the async _read(n) below.
  Readable.prototype.read = function (n) {
    debug("read", n);
    // Same as parseInt(undefined, 10), however V8 7.3 performance regressed
    // in this scenario, so we are doing it manually.
    if (n === undefined) {
      n = NaN;
    } else if (!NumberIsInteger(n)) {
      n = NumberParseInt(n, 10);
    }
    const state = (this || _global$2)._readableState;
    const nOrig = n;

    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n !== 0) state.state &= ~kEmittedReadable;

    // If we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug("read: emitReadable", state.length, state.ended);
      if (state.length === 0 && state.ended) endReadable(this || _global$2);else emitReadable(this || _global$2);
      return null;
    }
    n = howMuchToRead(n, state);

    // If we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
      if (state.length === 0) endReadable(this || _global$2);
      return null;
    }

    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.

    // if we need a readable event, then we need to do some reading.
    let doRead = (state.state & kNeedReadable) !== 0;
    debug("need readable", doRead);

    // If we currently have less than the highWaterMark, then also read some.
    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }

    // However, if we've ended, then there's no point, if we're already
    // reading, then it's unnecessary, if we're constructing we have to wait,
    // and if we're destroyed or errored, then it's not allowed,
    if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
      doRead = false;
      debug("reading, ended or constructing", doRead);
    } else if (doRead) {
      debug("do read");
      state.state |= kReading | kSync;
      // If the length is currently zero, then we *need* a readable event.
      if (state.length === 0) state.state |= kNeedReadable;

      // Call internal read method
      try {
        this._read(state.highWaterMark);
      } catch (err) {
        errorOrDestroy(this || _global$2, err);
      }
      state.state &= ~kSync;

      // If _read pushed data synchronously, then `reading` will be false,
      // and we need to re-evaluate how much data we can return to the user.
      if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    let ret;
    if (n > 0) ret = fromList(n, state);else ret = null;
    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n = 0;
    } else {
      state.length -= n;
      if (state.multiAwaitDrain) {
        state.awaitDrainWriters.clear();
      } else {
        state.awaitDrainWriters = null;
      }
    }
    if (state.length === 0) {
      // If we have nothing in the buffer, then we want to know
      // as soon as we *do* get something into the buffer.
      if (!state.ended) state.needReadable = true;

      // If we tried to read() past the EOF, then emit end on the next tick.
      if (nOrig !== n && state.ended) endReadable(this || _global$2);
    }
    if (ret !== null && !state.errorEmitted && !state.closeEmitted) {
      state.dataEmitted = true;
      this.emit("data", ret);
    }
    return ret;
  };
  function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended) return;
    if (state.decoder) {
      const chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    if (state.sync) {
      // If we are sync, wait until next tick to emit the data.
      // Otherwise we risk emitting data in the flow()
      // the readable code triggers during a read() call.
      emitReadable(stream);
    } else {
      // Emit 'readable' now to make sure it gets picked up.
      state.needReadable = false;
      state.emittedReadable = true;
      // We have to emit readable now that we are EOF. Modules
      // in the ecosystem (e.g. dicer) rely on this event being sync.
      emitReadable_(stream);
    }
  }

  // Don't emit readable right away in sync mode, because this can trigger
  // another read() call => stack overflow.  This way, it might trigger
  // a nextTick recursion warning, but that's not so bad.
  function emitReadable(stream) {
    const state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug("emitReadable", state.flowing);
      state.emittedReadable = true;
      process$1.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    const state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && !state.errored && (state.length || state.ended)) {
      stream.emit("readable");
      state.emittedReadable = false;
    }

    // The stream needs another readable event if:
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
  }

  // At this point, the user has presumably seen the 'readable' event,
  // and called read() to consume some data.  that may have triggered
  // in turn another _read(n) call, in which case reading = true if
  // it's in progress.
  // However, if we're not ended, or reading, and the length < hwm,
  // then go ahead and try to read some more preemptively.
  function maybeReadMore(stream, state) {
    if (!state.readingMore && state.constructed) {
      state.readingMore = true;
      process$1.nextTick(maybeReadMore_, stream, state);
    }
  }
  function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      const len = state.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state.length)
        // Didn't get any data, stop spinning.
        break;
    }
    state.readingMore = false;
  }

  // Abstract method.  to be overridden in specific implementation classes.
  // call cb(er, data) where data is <= n in length.
  // for virtual (non-string, non-buffer) streams, "length" is somewhat
  // arbitrary, and perhaps not very meaningful.
  Readable.prototype._read = function (n) {
    throw new ERR_METHOD_NOT_IMPLEMENTED("_read()");
  };
  Readable.prototype.pipe = function (dest, pipeOpts) {
    const src = this || _global$2;
    const state = (this || _global$2)._readableState;
    if (state.pipes.length === 1) {
      if (!state.multiAwaitDrain) {
        state.multiAwaitDrain = true;
        state.awaitDrainWriters = new SafeSet(state.awaitDrainWriters ? [state.awaitDrainWriters] : []);
      }
    }
    state.pipes.push(dest);
    debug("pipe count=%d opts=%j", state.pipes.length, pipeOpts);
    const doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
    const endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process$1.nextTick(endFn);else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    let ondrain;
    let cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      // Cleanup event handlers once the pipe is broken.
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      if (ondrain) {
        dest.removeListener("drain", ondrain);
      }
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;

      // If the reader is waiting for a drain event from this
      // specific writer, then it would cause it to never start
      // flowing again.
      // So, if this is awaiting a drain, then we just call it now.
      // If we don't know, then assume that we are waiting for one.
      if (ondrain && state.awaitDrainWriters && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    function pause() {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if (!cleanedUp) {
        if (state.pipes.length === 1 && state.pipes[0] === dest) {
          debug("false write response, pause", 0);
          state.awaitDrainWriters = dest;
          state.multiAwaitDrain = false;
        } else if (state.pipes.length > 1 && state.pipes.includes(dest)) {
          debug("false write response, pause", state.awaitDrainWriters.size);
          state.awaitDrainWriters.add(dest);
        }
        src.pause();
      }
      if (!ondrain) {
        // When the dest drains, it reduces the awaitDrain counter
        // on the source.  This would be more elegant with a .once()
        // handler in flow(), but adding and removing repeatedly is
        // too slow.
        ondrain = pipeOnDrain(src, dest);
        dest.on("drain", ondrain);
      }
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      const ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        pause();
      }
    }

    // If the dest has an error, then stop piping into it.
    // However, don't suppress the throwing behavior for this.
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (dest.listenerCount("error") === 0) {
        const s = dest._writableState || dest._readableState;
        if (s && !s.errorEmitted) {
          // User incorrectly emitted 'error' directly on the stream.
          errorOrDestroy(dest, er);
        } else {
          dest.emit("error", er);
        }
      }
    }

    // Make sure our error handler is attached before userland ones.
    prependListener(dest, "error", onerror);

    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }

    // Tell the dest that it's being piped to.
    dest.emit("pipe", src);

    // Start the flow if it hasn't been started already.

    if (dest.writableNeedDrain === true) {
      pause();
    } else if (!state.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src, dest) {
    return function pipeOnDrainFunctionResult() {
      const state = src._readableState;

      // `ondrain` will call directly,
      // `this` maybe not a reference to dest,
      // so we use the real dest here.
      if (state.awaitDrainWriters === dest) {
        debug("pipeOnDrain", 1);
        state.awaitDrainWriters = null;
      } else if (state.multiAwaitDrain) {
        debug("pipeOnDrain", state.awaitDrainWriters.size);
        state.awaitDrainWriters.delete(dest);
      }
      if ((!state.awaitDrainWriters || state.awaitDrainWriters.size === 0) && src.listenerCount("data")) {
        src.resume();
      }
    };
  }
  Readable.prototype.unpipe = function (dest) {
    const state = (this || _global$2)._readableState;
    const unpipeInfo = {
      hasUnpiped: false
    };

    // If we're not piping anywhere, then do nothing.
    if (state.pipes.length === 0) return this || _global$2;
    if (!dest) {
      // remove all.
      const dests = state.pipes;
      state.pipes = [];
      this.pause();
      for (let i = 0; i < dests.length; i++) dests[i].emit("unpipe", this || _global$2, {
        hasUnpiped: false
      });
      return this || _global$2;
    }

    // Try to find the right one.
    const index = ArrayPrototypeIndexOf(state.pipes, dest);
    if (index === -1) return this || _global$2;
    state.pipes.splice(index, 1);
    if (state.pipes.length === 0) this.pause();
    dest.emit("unpipe", this || _global$2, unpipeInfo);
    return this || _global$2;
  };

  // Set up data events if they are asked for
  // Ensure readable listeners eventually get something.
  Readable.prototype.on = function (ev, fn) {
    const res = Stream.prototype.on.call(this || _global$2, ev, fn);
    const state = (this || _global$2)._readableState;
    if (ev === "data") {
      // Update readableListening so that resume() may be a no-op
      // a few lines down. This is needed to support once('readable').
      state.readableListening = this.listenerCount("readable") > 0;

      // Try start flowing on next tick if stream isn't explicitly paused.
      if (state.flowing !== false) this.resume();
    } else if (ev === "readable") {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug("on readable", state.length, state.reading);
        if (state.length) {
          emitReadable(this || _global$2);
        } else if (!state.reading) {
          process$1.nextTick(nReadingNextTick, this || _global$2);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function (ev, fn) {
    const res = Stream.prototype.removeListener.call(this || _global$2, ev, fn);
    if (ev === "readable") {
      // We need to check if there is someone still listening to
      // readable and reset the state. However this needs to happen
      // after readable has been emitted but before I/O (nextTick) to
      // support once('readable', fn) cycles. This means that calling
      // resume within the same tick will have no
      // effect.
      process$1.nextTick(updateReadableListening, this || _global$2);
    }
    return res;
  };
  Readable.prototype.off = Readable.prototype.removeListener;
  Readable.prototype.removeAllListeners = function (ev) {
    const res = Stream.prototype.removeAllListeners.apply(this || _global$2, arguments);
    if (ev === "readable" || ev === undefined) {
      // We need to check if there is someone still listening to
      // readable and reset the state. However this needs to happen
      // after readable has been emitted but before I/O (nextTick) to
      // support once('readable', fn) cycles. This means that calling
      // resume within the same tick will have no
      // effect.
      process$1.nextTick(updateReadableListening, this || _global$2);
    }
    return res;
  };
  function updateReadableListening(self) {
    const state = self._readableState;
    state.readableListening = self.listenerCount("readable") > 0;
    if (state.resumeScheduled && state[kPaused] === false) {
      // Flowing needs to be set to true now, otherwise
      // the upcoming resume will not flow.
      state.flowing = true;

      // Crude way to check if we should resume.
    } else if (self.listenerCount("data") > 0) {
      self.resume();
    } else if (!state.readableListening) {
      state.flowing = null;
    }
  }
  function nReadingNextTick(self) {
    debug("readable nexttick read 0");
    self.read(0);
  }

  // pause() and resume() are remnants of the legacy readable stream API
  // If the user uses them, then switch into old mode.
  Readable.prototype.resume = function () {
    const state = (this || _global$2)._readableState;
    if (!state.flowing) {
      debug("resume");
      // We flow only if there is no one listening
      // for readable, but we still have to call
      // resume().
      state.flowing = !state.readableListening;
      resume(this || _global$2, state);
    }
    state[kPaused] = false;
    return this || _global$2;
  };
  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      process$1.nextTick(resume_, stream, state);
    }
  }
  function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) {
      stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
  }
  Readable.prototype.pause = function () {
    debug("call pause flowing=%j", (this || _global$2)._readableState.flowing);
    if ((this || _global$2)._readableState.flowing !== false) {
      debug("pause");
      (this || _global$2)._readableState.flowing = false;
      this.emit("pause");
    }
    (this || _global$2)._readableState[kPaused] = true;
    return this || _global$2;
  };
  function flow(stream) {
    const state = stream._readableState;
    debug("flow", state.flowing);
    while (state.flowing && stream.read() !== null);
  }

  // Wrap an old-style stream as the async data source.
  // This is *not* part of the readable stream interface.
  // It is an ugly unfortunate mess of history.
  Readable.prototype.wrap = function (stream) {
    let paused = false;

    // TODO (ronag): Should this.destroy(err) emit
    // 'error' on the wrapped stream? Would require
    // a static factory method, e.g. Readable.wrap(stream).

    stream.on("data", chunk => {
      if (!this.push(chunk) && stream.pause) {
        paused = true;
        stream.pause();
      }
    });
    stream.on("end", () => {
      this.push(null);
    });
    stream.on("error", err => {
      errorOrDestroy(this || _global$2, err);
    });
    stream.on("close", () => {
      this.destroy();
    });
    stream.on("destroy", () => {
      this.destroy();
    });
    (this || _global$2)._read = () => {
      if (paused && stream.resume) {
        paused = false;
        stream.resume();
      }
    };

    // Proxy all the other methods. Important when wrapping filters and duplexes.
    const streamKeys = ObjectKeys(stream);
    for (let j = 1; j < streamKeys.length; j++) {
      const i = streamKeys[j];
      if ((this || _global$2)[i] === undefined && typeof stream[i] === "function") {
        (this || _global$2)[i] = stream[i].bind(stream);
      }
    }
    return this || _global$2;
  };
  Readable.prototype[SymbolAsyncIterator] = function () {
    return streamToAsyncIterator(this || _global$2);
  };
  Readable.prototype.iterator = function (options) {
    if (options !== undefined) {
      validateObject(options, "options");
    }
    return streamToAsyncIterator(this || _global$2, options);
  };
  function streamToAsyncIterator(stream, options) {
    if (typeof stream.read !== "function") {
      stream = Readable.wrap(stream, {
        objectMode: true
      });
    }
    const iter = createAsyncIterator(stream, options);
    iter.stream = stream;
    return iter;
  }
  async function* createAsyncIterator(stream, options) {
    let callback = nop;
    function next(resolve) {
      if ((this || _global$2) === stream) {
        callback();
        callback = nop;
      } else {
        callback = resolve;
      }
    }
    stream.on("readable", next);
    let error;
    const cleanup = eos(stream, {
      writable: false
    }, err => {
      error = err ? aggregateTwoErrors(error, err) : null;
      callback();
      callback = nop;
    });
    try {
      while (true) {
        const chunk = stream.destroyed ? null : stream.read();
        if (chunk !== null) {
          yield chunk;
        } else if (error) {
          throw error;
        } else if (error === null) {
          return;
        } else {
          await new Promise(next);
        }
      }
    } catch (err) {
      error = aggregateTwoErrors(error, err);
      throw error;
    } finally {
      if ((error || (options === null || options === undefined ? undefined : options.destroyOnReturn) !== false) && (error === undefined || stream._readableState.autoDestroy)) {
        destroyImpl.destroyer(stream, null);
      } else {
        stream.off("readable", next);
        cleanup();
      }
    }
  }

  // Making it explicit these properties are not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail.
  ObjectDefineProperties(Readable.prototype, {
    readable: {
      __proto__: null,
      get() {
        const r = (this || _global$2)._readableState;
        // r.readable === false means that this is part of a Duplex stream
        // where the readable side was disabled upon construction.
        // Compat. The user might manually disable readable side through
        // deprecated setter.
        return !!r && r.readable !== false && !r.destroyed && !r.errorEmitted && !r.endEmitted;
      },
      set(val) {
        // Backwards compat.
        if ((this || _global$2)._readableState) {
          (this || _global$2)._readableState.readable = !!val;
        }
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: false,
      get: function () {
        return (this || _global$2)._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: false,
      get: function () {
        return !!((this || _global$2)._readableState.readable !== false && ((this || _global$2)._readableState.destroyed || (this || _global$2)._readableState.errored) && !(this || _global$2)._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: false,
      get: function () {
        return (this || _global$2)._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: false,
      get: function () {
        return (this || _global$2)._readableState && (this || _global$2)._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: false,
      get: function () {
        return (this || _global$2)._readableState.flowing;
      },
      set: function (state) {
        if ((this || _global$2)._readableState) {
          (this || _global$2)._readableState.flowing = state;
        }
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: false,
      get() {
        return (this || _global$2)._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: false,
      get() {
        return (this || _global$2)._readableState ? (this || _global$2)._readableState.objectMode : false;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: false,
      get() {
        return (this || _global$2)._readableState ? (this || _global$2)._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: false,
      get() {
        return (this || _global$2)._readableState ? (this || _global$2)._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return (this || _global$2)._readableState ? (this || _global$2)._readableState.closed : false;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: false,
      get() {
        return (this || _global$2)._readableState ? (this || _global$2)._readableState.destroyed : false;
      },
      set(value) {
        // We ignore the value if the stream
        // has not been initialized yet.
        if (!(this || _global$2)._readableState) {
          return;
        }

        // Backward compatibility, the user is explicitly
        // managing destroyed.
        (this || _global$2)._readableState.destroyed = value;
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: false,
      get() {
        return (this || _global$2)._readableState ? (this || _global$2)._readableState.endEmitted : false;
      }
    }
  });
  ObjectDefineProperties(ReadableState.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return (this || _global$2).pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return (this || _global$2)[kPaused] !== false;
      },
      set(value) {
        (this || _global$2)[kPaused] = !!value;
      }
    }
  });

  // Exposed for testing purposes only.
  Readable._fromList = fromList;

  // Pluck off n bytes from an array of buffers.
  // Length is the combined lengths of all the buffers in the list.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function fromList(n, state) {
    // nothing buffered.
    if (state.length === 0) return null;
    let ret;
    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
      // Read it all, truncate the list.
      if (state.decoder) ret = state.buffer.join("");else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      // read part of list.
      ret = state.buffer.consume(n, state.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    const state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
      state.ended = true;
      process$1.nextTick(endReadableNT, state, stream);
    }
  }
  function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);

    // Check that we didn't get one last unshift.
    if (!state.errored && !state.closeEmitted && !state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.emit("end");
      if (stream.writable && stream.allowHalfOpen === false) {
        process$1.nextTick(endWritableNT, stream);
      } else if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the writable side is ready for autoDestroy as well.
        const wState = stream._writableState;
        const autoDestroy = !wState || wState.autoDestroy && (
        // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        wState.finished || wState.writable === false);
        if (autoDestroy) {
          stream.destroy();
        }
      }
    }
  }
  function endWritableNT(stream) {
    const writable = stream.writable && !stream.writableEnded && !stream.destroyed;
    if (writable) {
      stream.end();
    }
  }
  Readable.from = function (iterable, opts) {
    return from(Readable, iterable, opts);
  };
  let webStreamsAdapters;

  // Lazy to avoid circular references
  function lazyWebStreams() {
    if (webStreamsAdapters === undefined) webStreamsAdapters = {};
    return webStreamsAdapters;
  }
  Readable.fromWeb = function (readableStream, options) {
    return lazyWebStreams().newStreamReadableFromReadableStream(readableStream, options);
  };
  Readable.toWeb = function (streamReadable, options) {
    return lazyWebStreams().newReadableStreamFromStreamReadable(streamReadable, options);
  };
  Readable.wrap = function (src, options) {
    var _ref, _src$readableObjectMo;
    return new Readable({
      objectMode: (_ref = (_src$readableObjectMo = src.readableObjectMode) !== null && _src$readableObjectMo !== undefined ? _src$readableObjectMo : src.objectMode) !== null && _ref !== undefined ? _ref : true,
      ...options,
      destroy(err, callback) {
        destroyImpl.destroyer(src, err);
        callback(err);
      }
    }).wrap(src);
  };
  return exports$c;
}

var exports$b = {},
  _dewExec$a = false;
var _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$a() {
  if (_dewExec$a) return exports$b;
  _dewExec$a = true;
  /* replacement start */

  const process$1 = process

  /* replacement end */
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  // A bit simpler than readable streams.
  // Implement an async ._write(chunk, encoding, cb), and it'll handle all
  // the drain event emission and buffering.
  ;
  const {
    ArrayPrototypeSlice,
    Error,
    FunctionPrototypeSymbolHasInstance,
    ObjectDefineProperty,
    ObjectDefineProperties,
    ObjectSetPrototypeOf,
    StringPrototypeToLowerCase,
    Symbol,
    SymbolHasInstance
  } = dew$o();
  exports$b = Writable;
  Writable.WritableState = WritableState;
  const {
    EventEmitter: EE
  } = exports$q;
  const Stream = dew$g().Stream;
  const {
    Buffer
  } = dew$p();
  const destroyImpl = dew$h();
  const {
    addAbortSignal
  } = dew$f();
  const {
    getHighWaterMark,
    getDefaultHighWaterMark
  } = dew$d();
  const {
    ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED,
    ERR_STREAM_ALREADY_FINISHED,
    ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING
  } = dew$l().codes;
  const {
    errorOrDestroy
  } = destroyImpl;
  ObjectSetPrototypeOf(Writable.prototype, Stream.prototype);
  ObjectSetPrototypeOf(Writable, Stream);
  function nop() {}
  const kOnFinished = Symbol("kOnFinished");
  function WritableState(options, stream, isDuplex) {
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof dew$8();

    // Object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    (this || _global$1).objectMode = !!(options && options.objectMode);
    if (isDuplex) (this || _global$1).objectMode = (this || _global$1).objectMode || !!(options && options.writableObjectMode);

    // The point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write().
    (this || _global$1).highWaterMark = options ? getHighWaterMark(this || _global$1, options, "writableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);

    // if _final has been called.
    (this || _global$1).finalCalled = false;

    // drain event flag.
    (this || _global$1).needDrain = false;
    // At the start of calling end()
    (this || _global$1).ending = false;
    // When end() has been called, and returned.
    (this || _global$1).ended = false;
    // When 'finish' is emitted.
    (this || _global$1).finished = false;

    // Has it been destroyed
    (this || _global$1).destroyed = false;

    // Should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    const noDecode = !!(options && options.decodeStrings === false);
    (this || _global$1).decodeStrings = !noDecode;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    (this || _global$1).defaultEncoding = options && options.defaultEncoding || "utf8";

    // Not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    (this || _global$1).length = 0;

    // A flag to see when we're in the middle of a write.
    (this || _global$1).writing = false;

    // When true all writes will be buffered until .uncork() call.
    (this || _global$1).corked = 0;

    // A flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    (this || _global$1).sync = true;

    // A flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    (this || _global$1).bufferProcessing = false;

    // The callback that's passed to _write(chunk, cb).
    (this || _global$1).onwrite = onwrite.bind(undefined, stream);

    // The callback that the user supplies to write(chunk, encoding, cb).
    (this || _global$1).writecb = null;

    // The amount that is being written when _write is called.
    (this || _global$1).writelen = 0;

    // Storage for data passed to the afterWrite() callback in case of
    // synchronous _write() completion.
    (this || _global$1).afterWriteTickInfo = null;
    resetBuffer(this || _global$1);

    // Number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted.
    (this || _global$1).pendingcb = 0;

    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    (this || _global$1).constructed = true;

    // Emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams.
    (this || _global$1).prefinished = false;

    // True if the error was already emitted and should not be thrown again.
    (this || _global$1).errorEmitted = false;

    // Should close be emitted on destroy. Defaults to true.
    (this || _global$1).emitClose = !options || options.emitClose !== false;

    // Should .destroy() be called after 'finish' (and potentially 'end').
    (this || _global$1).autoDestroy = !options || options.autoDestroy !== false;

    // Indicates whether the stream has errored. When true all write() calls
    // should return false. This is needed since when autoDestroy
    // is disabled we need a way to tell whether the stream has failed.
    (this || _global$1).errored = null;

    // Indicates whether the stream has finished destroying.
    (this || _global$1).closed = false;

    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    (this || _global$1).closeEmitted = false;
    (this || _global$1)[kOnFinished] = [];
  }
  function resetBuffer(state) {
    state.buffered = [];
    state.bufferedIndex = 0;
    state.allBuffers = true;
    state.allNoop = true;
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    return ArrayPrototypeSlice((this || _global$1).buffered, (this || _global$1).bufferedIndex);
  };
  ObjectDefineProperty(WritableState.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return (this || _global$1).buffered.length - (this || _global$1).bufferedIndex;
    }
  });
  function Writable(options) {
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.

    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.

    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5.
    const isDuplex = (this || _global$1) instanceof dew$8();
    if (!isDuplex && !FunctionPrototypeSymbolHasInstance(Writable, this || _global$1)) return new Writable(options);
    (this || _global$1)._writableState = new WritableState(options, this || _global$1, isDuplex);
    if (options) {
      if (typeof options.write === "function") (this || _global$1)._write = options.write;
      if (typeof options.writev === "function") (this || _global$1)._writev = options.writev;
      if (typeof options.destroy === "function") (this || _global$1)._destroy = options.destroy;
      if (typeof options.final === "function") (this || _global$1)._final = options.final;
      if (typeof options.construct === "function") (this || _global$1)._construct = options.construct;
      if (options.signal) addAbortSignal(options.signal, this || _global$1);
    }
    Stream.call(this || _global$1, options);
    destroyImpl.construct(this || _global$1, () => {
      const state = (this || _global$1)._writableState;
      if (!state.writing) {
        clearBuffer(this || _global$1, state);
      }
      finishMaybe(this || _global$1, state);
    });
  }
  ObjectDefineProperty(Writable, SymbolHasInstance, {
    __proto__: null,
    value: function (object) {
      if (FunctionPrototypeSymbolHasInstance(this || _global$1, object)) return true;
      if ((this || _global$1) !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });

  // Otherwise people can pipe Writable streams, which is just wrong.
  Writable.prototype.pipe = function () {
    errorOrDestroy(this || _global$1, new ERR_STREAM_CANNOT_PIPE());
  };
  function _write(stream, chunk, encoding, cb) {
    const state = stream._writableState;
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = state.defaultEncoding;
    } else {
      if (!encoding) encoding = state.defaultEncoding;else if (encoding !== "buffer" && !Buffer.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding);
      if (typeof cb !== "function") cb = nop;
    }
    if (chunk === null) {
      throw new ERR_STREAM_NULL_VALUES();
    } else if (!state.objectMode) {
      if (typeof chunk === "string") {
        if (state.decodeStrings !== false) {
          chunk = Buffer.from(chunk, encoding);
          encoding = "buffer";
        }
      } else if (chunk instanceof Buffer) {
        encoding = "buffer";
      } else if (Stream._isUint8Array(chunk)) {
        chunk = Stream._uint8ArrayToBuffer(chunk);
        encoding = "buffer";
      } else {
        throw new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
    }
    let err;
    if (state.ending) {
      err = new ERR_STREAM_WRITE_AFTER_END();
    } else if (state.destroyed) {
      err = new ERR_STREAM_DESTROYED("write");
    }
    if (err) {
      process$1.nextTick(cb, err);
      errorOrDestroy(stream, err, true);
      return err;
    }
    state.pendingcb++;
    return writeOrBuffer(stream, state, chunk, encoding, cb);
  }
  Writable.prototype.write = function (chunk, encoding, cb) {
    return _write(this || _global$1, chunk, encoding, cb) === true;
  };
  Writable.prototype.cork = function () {
    (this || _global$1)._writableState.corked++;
  };
  Writable.prototype.uncork = function () {
    const state = (this || _global$1)._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing) clearBuffer(this || _global$1, state);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = StringPrototypeToLowerCase(encoding);
    if (!Buffer.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding);
    (this || _global$1)._writableState.defaultEncoding = encoding;
    return this || _global$1;
  };

  // If we're already writing something, then just put this
  // in the queue, and wait our turn.  Otherwise, call _write
  // If we return false, then we need a drain event, so set that flag.
  function writeOrBuffer(stream, state, chunk, encoding, callback) {
    const len = state.objectMode ? 1 : chunk.length;
    state.length += len;

    // stream._write resets state.length
    const ret = state.length < state.highWaterMark;
    // We must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked || state.errored || !state.constructed) {
      state.buffered.push({
        chunk,
        encoding,
        callback
      });
      if (state.allBuffers && encoding !== "buffer") {
        state.allBuffers = false;
      }
      if (state.allNoop && callback !== nop) {
        state.allNoop = false;
      }
    } else {
      state.writelen = len;
      state.writecb = callback;
      state.writing = true;
      state.sync = true;
      stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }

    // Return false if errored or destroyed in order to break
    // any synchronous while(stream.write(data)) loops.
    return ret && !state.errored && !state.destroyed;
  }
  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  function onwriteError(stream, state, er, cb) {
    --state.pendingcb;
    cb(er);
    // Ensure callbacks are invoked even when autoDestroy is
    // not enabled. Passing `er` here doesn't make sense since
    // it's related to one specific write, not to the buffered
    // writes.
    errorBuffer(state);
    // This can emit error, but error must always follow cb.
    errorOrDestroy(stream, er);
  }
  function onwrite(stream, er) {
    const state = stream._writableState;
    const sync = state.sync;
    const cb = state.writecb;
    if (typeof cb !== "function") {
      errorOrDestroy(stream, new ERR_MULTIPLE_CALLBACK());
      return;
    }
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
    if (er) {
      // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
      er.stack; // eslint-disable-line no-unused-expressions

      if (!state.errored) {
        state.errored = er;
      }

      // In case of duplex streams we need to notify the readable side of the
      // error.
      if (stream._readableState && !stream._readableState.errored) {
        stream._readableState.errored = er;
      }
      if (sync) {
        process$1.nextTick(onwriteError, stream, state, er, cb);
      } else {
        onwriteError(stream, state, er, cb);
      }
    } else {
      if (state.buffered.length > state.bufferedIndex) {
        clearBuffer(stream, state);
      }
      if (sync) {
        // It is a common case that the callback passed to .write() is always
        // the same. In that case, we do not schedule a new nextTick(), but
        // rather just increase a counter, to improve performance and avoid
        // memory allocations.
        if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) {
          state.afterWriteTickInfo.count++;
        } else {
          state.afterWriteTickInfo = {
            count: 1,
            cb,
            stream,
            state
          };
          process$1.nextTick(afterWriteTick, state.afterWriteTickInfo);
        }
      } else {
        afterWrite(stream, state, 1, cb);
      }
    }
  }
  function afterWriteTick({
    stream,
    state,
    count,
    cb
  }) {
    state.afterWriteTickInfo = null;
    return afterWrite(stream, state, count, cb);
  }
  function afterWrite(stream, state, count, cb) {
    const needDrain = !state.ending && !stream.destroyed && state.length === 0 && state.needDrain;
    if (needDrain) {
      state.needDrain = false;
      stream.emit("drain");
    }
    while (count-- > 0) {
      state.pendingcb--;
      cb();
    }
    if (state.destroyed) {
      errorBuffer(state);
    }
    finishMaybe(stream, state);
  }

  // If there's something in the buffer waiting, then invoke callbacks.
  function errorBuffer(state) {
    if (state.writing) {
      return;
    }
    for (let n = state.bufferedIndex; n < state.buffered.length; ++n) {
      var _state$errored;
      const {
        chunk,
        callback
      } = state.buffered[n];
      const len = state.objectMode ? 1 : chunk.length;
      state.length -= len;
      callback((_state$errored = state.errored) !== null && _state$errored !== undefined ? _state$errored : new ERR_STREAM_DESTROYED("write"));
    }
    const onfinishCallbacks = state[kOnFinished].splice(0);
    for (let i = 0; i < onfinishCallbacks.length; i++) {
      var _state$errored2;
      onfinishCallbacks[i]((_state$errored2 = state.errored) !== null && _state$errored2 !== undefined ? _state$errored2 : new ERR_STREAM_DESTROYED("end"));
    }
    resetBuffer(state);
  }

  // If there's something in the buffer waiting, then process it.
  function clearBuffer(stream, state) {
    if (state.corked || state.bufferProcessing || state.destroyed || !state.constructed) {
      return;
    }
    const {
      buffered,
      bufferedIndex,
      objectMode
    } = state;
    const bufferedLength = buffered.length - bufferedIndex;
    if (!bufferedLength) {
      return;
    }
    let i = bufferedIndex;
    state.bufferProcessing = true;
    if (bufferedLength > 1 && stream._writev) {
      state.pendingcb -= bufferedLength - 1;
      const callback = state.allNoop ? nop : err => {
        for (let n = i; n < buffered.length; ++n) {
          buffered[n].callback(err);
        }
      };
      // Make a copy of `buffered` if it's going to be used by `callback` above,
      // since `doWrite` will mutate the array.
      const chunks = state.allNoop && i === 0 ? buffered : ArrayPrototypeSlice(buffered, i);
      chunks.allBuffers = state.allBuffers;
      doWrite(stream, state, true, state.length, chunks, "", callback);
      resetBuffer(state);
    } else {
      do {
        const {
          chunk,
          encoding,
          callback
        } = buffered[i];
        buffered[i++] = null;
        const len = objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, callback);
      } while (i < buffered.length && !state.writing);
      if (i === buffered.length) {
        resetBuffer(state);
      } else if (i > 256) {
        buffered.splice(0, i);
        state.bufferedIndex = 0;
      } else {
        state.bufferedIndex = i;
      }
    }
    state.bufferProcessing = false;
  }
  Writable.prototype._write = function (chunk, encoding, cb) {
    if ((this || _global$1)._writev) {
      this._writev([{
        chunk,
        encoding
      }], cb);
    } else {
      throw new ERR_METHOD_NOT_IMPLEMENTED("_write()");
    }
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function (chunk, encoding, cb) {
    const state = (this || _global$1)._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    let err;
    if (chunk !== null && chunk !== undefined) {
      const ret = _write(this || _global$1, chunk, encoding);
      if (ret instanceof Error) {
        err = ret;
      }
    }

    // .end() fully uncorks.
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (err) ; else if (!state.errored && !state.ending) {
      // This is forgiving in terms of unnecessary calls to end() and can hide
      // logic errors. However, usually such errors are harmless and causing a
      // hard error can be disproportionately destructive. It is not always
      // trivial for the user to determine whether end() needs to be called
      // or not.

      state.ending = true;
      finishMaybe(this || _global$1, state, true);
      state.ended = true;
    } else if (state.finished) {
      err = new ERR_STREAM_ALREADY_FINISHED("end");
    } else if (state.destroyed) {
      err = new ERR_STREAM_DESTROYED("end");
    }
    if (typeof cb === "function") {
      if (err || state.finished) {
        process$1.nextTick(cb, err);
      } else {
        state[kOnFinished].push(cb);
      }
    }
    return this || _global$1;
  };
  function needFinish(state) {
    return state.ending && !state.destroyed && state.constructed && state.length === 0 && !state.errored && state.buffered.length === 0 && !state.finished && !state.writing && !state.errorEmitted && !state.closeEmitted;
  }
  function callFinal(stream, state) {
    let called = false;
    function onFinish(err) {
      if (called) {
        errorOrDestroy(stream, err !== null && err !== undefined ? err : ERR_MULTIPLE_CALLBACK());
        return;
      }
      called = true;
      state.pendingcb--;
      if (err) {
        const onfinishCallbacks = state[kOnFinished].splice(0);
        for (let i = 0; i < onfinishCallbacks.length; i++) {
          onfinishCallbacks[i](err);
        }
        errorOrDestroy(stream, err, state.sync);
      } else if (needFinish(state)) {
        state.prefinished = true;
        stream.emit("prefinish");
        // Backwards compat. Don't check state.sync here.
        // Some streams assume 'finish' will be emitted
        // asynchronously relative to _final callback.
        state.pendingcb++;
        process$1.nextTick(finish, stream, state);
      }
    }
    state.sync = true;
    state.pendingcb++;
    try {
      stream._final(onFinish);
    } catch (err) {
      onFinish(err);
    }
    state.sync = false;
  }
  function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === "function" && !state.destroyed) {
        state.finalCalled = true;
        callFinal(stream, state);
      } else {
        state.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state, sync) {
    if (needFinish(state)) {
      prefinish(stream, state);
      if (state.pendingcb === 0) {
        if (sync) {
          state.pendingcb++;
          process$1.nextTick((stream, state) => {
            if (needFinish(state)) {
              finish(stream, state);
            } else {
              state.pendingcb--;
            }
          }, stream, state);
        } else if (needFinish(state)) {
          state.pendingcb++;
          finish(stream, state);
        }
      }
    }
  }
  function finish(stream, state) {
    state.pendingcb--;
    state.finished = true;
    const onfinishCallbacks = state[kOnFinished].splice(0);
    for (let i = 0; i < onfinishCallbacks.length; i++) {
      onfinishCallbacks[i]();
    }
    stream.emit("finish");
    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the readable side is ready for autoDestroy as well.
      const rState = stream._readableState;
      const autoDestroy = !rState || rState.autoDestroy && (
      // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      rState.endEmitted || rState.readable === false);
      if (autoDestroy) {
        stream.destroy();
      }
    }
  }
  ObjectDefineProperties(Writable.prototype, {
    closed: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState ? (this || _global$1)._writableState.closed : false;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState ? (this || _global$1)._writableState.destroyed : false;
      },
      set(value) {
        // Backward compatibility, the user is explicitly managing destroyed.
        if ((this || _global$1)._writableState) {
          (this || _global$1)._writableState.destroyed = value;
        }
      }
    },
    writable: {
      __proto__: null,
      get() {
        const w = (this || _global$1)._writableState;
        // w.writable === false means that this is part of a Duplex stream
        // where the writable side was disabled upon construction.
        // Compat. The user might manually disable writable side through
        // deprecated setter.
        return !!w && w.writable !== false && !w.destroyed && !w.errored && !w.ending && !w.ended;
      },
      set(val) {
        // Backwards compatible.
        if ((this || _global$1)._writableState) {
          (this || _global$1)._writableState.writable = !!val;
        }
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState ? (this || _global$1)._writableState.finished : false;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState ? (this || _global$1)._writableState.objectMode : false;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState && (this || _global$1)._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState ? (this || _global$1)._writableState.ending : false;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const wState = (this || _global$1)._writableState;
        if (!wState) return false;
        return !wState.destroyed && !wState.ending && wState.needDrain;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState && (this || _global$1)._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState ? (this || _global$1)._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return (this || _global$1)._writableState && (this || _global$1)._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: false,
      get() {
        return (this || _global$1)._writableState ? (this || _global$1)._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: false,
      get: function () {
        return !!((this || _global$1)._writableState.writable !== false && ((this || _global$1)._writableState.destroyed || (this || _global$1)._writableState.errored) && !(this || _global$1)._writableState.finished);
      }
    }
  });
  const destroy = destroyImpl.destroy;
  Writable.prototype.destroy = function (err, cb) {
    const state = (this || _global$1)._writableState;

    // Invoke pending callbacks.
    if (!state.destroyed && (state.bufferedIndex < state.buffered.length || state[kOnFinished].length)) {
      process$1.nextTick(errorBuffer, state);
    }
    destroy.call(this || _global$1, err, cb);
    return this || _global$1;
  };
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function (err, cb) {
    cb(err);
  };
  Writable.prototype[EE.captureRejectionSymbol] = function (err) {
    this.destroy(err);
  };
  let webStreamsAdapters;

  // Lazy to avoid circular references
  function lazyWebStreams() {
    if (webStreamsAdapters === undefined) webStreamsAdapters = {};
    return webStreamsAdapters;
  }
  Writable.fromWeb = function (writableStream, options) {
    return lazyWebStreams().newStreamWritableFromWritableStream(writableStream, options);
  };
  Writable.toWeb = function (streamWritable) {
    return lazyWebStreams().newWritableStreamFromStreamWritable(streamWritable);
  };
  return exports$b;
}

var exports$a = {},
  _dewExec$9 = false;
function dew$9() {
  if (_dewExec$9) return exports$a;
  _dewExec$9 = true;
  /* replacement start */

  const process$1 = process

  /* replacement end */;
  const bufferModule = dew$p();
  const {
    isReadable,
    isWritable,
    isIterable,
    isNodeStream,
    isReadableNodeStream,
    isWritableNodeStream,
    isDuplexNodeStream,
    isReadableStream,
    isWritableStream
  } = dew$j();
  const eos = dew$i();
  const {
    AbortError,
    codes: {
      ERR_INVALID_ARG_TYPE,
      ERR_INVALID_RETURN_VALUE
    }
  } = dew$l();
  const {
    destroyer
  } = dew$h();
  const Duplex = dew$8();
  const Readable = dew$b();
  const Writable = dew$a();
  const {
    createDeferredPromise
  } = dew$m();
  const from = dew$c();
  const Blob = globalThis.Blob || bufferModule.Blob;
  const isBlob = typeof Blob !== "undefined" ? function isBlob(b) {
    return b instanceof Blob;
  } : function isBlob(b) {
    return false;
  };
  const AbortController = globalThis.AbortController || dew$n().AbortController;
  const {
    FunctionPrototypeCall
  } = dew$o();

  // This is needed for pre node 17.
  class Duplexify extends Duplex {
    constructor(options) {
      super(options);

      // https://github.com/nodejs/node/pull/34385

      if ((options === null || options === undefined ? undefined : options.readable) === false) {
        this._readableState.readable = false;
        this._readableState.ended = true;
        this._readableState.endEmitted = true;
      }
      if ((options === null || options === undefined ? undefined : options.writable) === false) {
        this._writableState.writable = false;
        this._writableState.ending = true;
        this._writableState.ended = true;
        this._writableState.finished = true;
      }
    }
  }
  exports$a = function duplexify(body, name) {
    if (isDuplexNodeStream(body)) {
      return body;
    }
    if (isReadableNodeStream(body)) {
      return _duplexify({
        readable: body
      });
    }
    if (isWritableNodeStream(body)) {
      return _duplexify({
        writable: body
      });
    }
    if (isNodeStream(body)) {
      return _duplexify({
        writable: false,
        readable: false
      });
    }
    if (isReadableStream(body)) {
      return _duplexify({
        readable: Readable.fromWeb(body)
      });
    }
    if (isWritableStream(body)) {
      return _duplexify({
        writable: Writable.fromWeb(body)
      });
    }
    if (typeof body === "function") {
      const {
        value,
        write,
        final,
        destroy
      } = fromAsyncGen(body);
      if (isIterable(value)) {
        return from(Duplexify, value, {
          // TODO (ronag): highWaterMark?
          objectMode: true,
          write,
          final,
          destroy
        });
      }
      const then = value === null || value === undefined ? undefined : value.then;
      if (typeof then === "function") {
        let d;
        const promise = FunctionPrototypeCall(then, value, val => {
          if (val != null) {
            throw new ERR_INVALID_RETURN_VALUE("nully", "body", val);
          }
        }, err => {
          destroyer(d, err);
        });
        return d = new Duplexify({
          // TODO (ronag): highWaterMark?
          objectMode: true,
          readable: false,
          write,
          final(cb) {
            final(async () => {
              try {
                await promise;
                process$1.nextTick(cb, null);
              } catch (err) {
                process$1.nextTick(cb, err);
              }
            });
          },
          destroy
        });
      }
      throw new ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or AsyncFunction", name, value);
    }
    if (isBlob(body)) {
      return duplexify(body.arrayBuffer());
    }
    if (isIterable(body)) {
      return from(Duplexify, body, {
        // TODO (ronag): highWaterMark?
        objectMode: true,
        writable: false
      });
    }
    if (isReadableStream(body === null || body === undefined ? undefined : body.readable) && isWritableStream(body === null || body === undefined ? undefined : body.writable)) {
      return Duplexify.fromWeb(body);
    }
    if (typeof (body === null || body === undefined ? undefined : body.writable) === "object" || typeof (body === null || body === undefined ? undefined : body.readable) === "object") {
      const readable = body !== null && body !== undefined && body.readable ? isReadableNodeStream(body === null || body === undefined ? undefined : body.readable) ? body === null || body === undefined ? undefined : body.readable : duplexify(body.readable) : undefined;
      const writable = body !== null && body !== undefined && body.writable ? isWritableNodeStream(body === null || body === undefined ? undefined : body.writable) ? body === null || body === undefined ? undefined : body.writable : duplexify(body.writable) : undefined;
      return _duplexify({
        readable,
        writable
      });
    }
    const then = body === null || body === undefined ? undefined : body.then;
    if (typeof then === "function") {
      let d;
      FunctionPrototypeCall(then, body, val => {
        if (val != null) {
          d.push(val);
        }
        d.push(null);
      }, err => {
        destroyer(d, err);
      });
      return d = new Duplexify({
        objectMode: true,
        writable: false,
        read() {}
      });
    }
    throw new ERR_INVALID_ARG_TYPE(name, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], body);
  };
  function fromAsyncGen(fn) {
    let {
      promise,
      resolve
    } = createDeferredPromise();
    const ac = new AbortController();
    const signal = ac.signal;
    const value = fn(async function* () {
      while (true) {
        const _promise = promise;
        promise = null;
        const {
          chunk,
          done,
          cb
        } = await _promise;
        process$1.nextTick(cb);
        if (done) return;
        if (signal.aborted) throw new AbortError(undefined, {
          cause: signal.reason
        });
        ({
          promise,
          resolve
        } = createDeferredPromise());
        yield chunk;
      }
    }(), {
      signal
    });
    return {
      value,
      write(chunk, encoding, cb) {
        const _resolve = resolve;
        resolve = null;
        _resolve({
          chunk,
          done: false,
          cb
        });
      },
      final(cb) {
        const _resolve = resolve;
        resolve = null;
        _resolve({
          done: true,
          cb
        });
      },
      destroy(err, cb) {
        ac.abort();
        cb(err);
      }
    };
  }
  function _duplexify(pair) {
    const r = pair.readable && typeof pair.readable.read !== "function" ? Readable.wrap(pair.readable) : pair.readable;
    const w = pair.writable;
    let readable = !!isReadable(r);
    let writable = !!isWritable(w);
    let ondrain;
    let onfinish;
    let onreadable;
    let onclose;
    let d;
    function onfinished(err) {
      const cb = onclose;
      onclose = null;
      if (cb) {
        cb(err);
      } else if (err) {
        d.destroy(err);
      }
    }

    // TODO(ronag): Avoid double buffering.
    // Implement Writable/Readable/Duplex traits.
    // See, https://github.com/nodejs/node/pull/33515.
    d = new Duplexify({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(r !== null && r !== undefined && r.readableObjectMode),
      writableObjectMode: !!(w !== null && w !== undefined && w.writableObjectMode),
      readable,
      writable
    });
    if (writable) {
      eos(w, err => {
        writable = false;
        if (err) {
          destroyer(r, err);
        }
        onfinished(err);
      });
      d._write = function (chunk, encoding, callback) {
        if (w.write(chunk, encoding)) {
          callback();
        } else {
          ondrain = callback;
        }
      };
      d._final = function (callback) {
        w.end();
        onfinish = callback;
      };
      w.on("drain", function () {
        if (ondrain) {
          const cb = ondrain;
          ondrain = null;
          cb();
        }
      });
      w.on("finish", function () {
        if (onfinish) {
          const cb = onfinish;
          onfinish = null;
          cb();
        }
      });
    }
    if (readable) {
      eos(r, err => {
        readable = false;
        if (err) {
          destroyer(r, err);
        }
        onfinished(err);
      });
      r.on("readable", function () {
        if (onreadable) {
          const cb = onreadable;
          onreadable = null;
          cb();
        }
      });
      r.on("end", function () {
        d.push(null);
      });
      d._read = function () {
        while (true) {
          const buf = r.read();
          if (buf === null) {
            onreadable = d._read;
            return;
          }
          if (!d.push(buf)) {
            return;
          }
        }
      };
    }
    d._destroy = function (err, callback) {
      if (!err && onclose !== null) {
        err = new AbortError();
      }
      onreadable = null;
      ondrain = null;
      onfinish = null;
      if (onclose === null) {
        callback(err);
      } else {
        onclose = callback;
        destroyer(w, err);
        destroyer(r, err);
      }
    };
    return d;
  }
  return exports$a;
}

var exports$9 = {},
  _dewExec$8 = false;
function dew$8() {
  if (_dewExec$8) return exports$9;
  _dewExec$8 = true;
  const {
    ObjectDefineProperties,
    ObjectGetOwnPropertyDescriptor,
    ObjectKeys,
    ObjectSetPrototypeOf
  } = dew$o();
  exports$9 = Duplex;
  const Readable = dew$b();
  const Writable = dew$a();
  ObjectSetPrototypeOf(Duplex.prototype, Readable.prototype);
  ObjectSetPrototypeOf(Duplex, Readable);
  {
    const keys = ObjectKeys(Writable.prototype);
    // Allow the keys array to be GC'ed.
    for (let i = 0; i < keys.length; i++) {
      const method = keys[i];
      if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options) {
      this.allowHalfOpen = options.allowHalfOpen !== false;
      if (options.readable === false) {
        this._readableState.readable = false;
        this._readableState.ended = true;
        this._readableState.endEmitted = true;
      }
      if (options.writable === false) {
        this._writableState.writable = false;
        this._writableState.ending = true;
        this._writableState.ended = true;
        this._writableState.finished = true;
      }
    } else {
      this.allowHalfOpen = true;
    }
  }
  ObjectDefineProperties(Duplex.prototype, {
    writable: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        if (this._readableState === undefined || this._writableState === undefined) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set(value) {
        // Backward compatibility, the user is explicitly
        // managing destroyed.
        if (this._readableState && this._writableState) {
          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      }
    }
  });
  let webStreamsAdapters;

  // Lazy to avoid circular references
  function lazyWebStreams() {
    if (webStreamsAdapters === undefined) webStreamsAdapters = {};
    return webStreamsAdapters;
  }
  Duplex.fromWeb = function (pair, options) {
    return lazyWebStreams().newStreamDuplexFromReadableWritablePair(pair, options);
  };
  Duplex.toWeb = function (duplex) {
    return lazyWebStreams().newReadableWritablePairFromDuplex(duplex);
  };
  let duplexify;
  Duplex.from = function (body) {
    if (!duplexify) {
      duplexify = dew$9();
    }
    return duplexify(body, "body");
  };
  return exports$9;
}

var exports$8 = {},
  _dewExec$7 = false;
function dew$7() {
  if (_dewExec$7) return exports$8;
  _dewExec$7 = true;
  const {
    ObjectSetPrototypeOf,
    Symbol
  } = dew$o();
  exports$8 = Transform;
  const {
    ERR_METHOD_NOT_IMPLEMENTED
  } = dew$l().codes;
  const Duplex = dew$8();
  const {
    getHighWaterMark
  } = dew$d();
  ObjectSetPrototypeOf(Transform.prototype, Duplex.prototype);
  ObjectSetPrototypeOf(Transform, Duplex);
  const kCallback = Symbol("kCallback");
  function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);

    // TODO (ronag): This should preferably always be
    // applied but would be semver-major. Or even better;
    // make Transform a Readable with the Writable interface.
    const readableHighWaterMark = options ? getHighWaterMark(this, options, "readableHighWaterMark", true) : null;
    if (readableHighWaterMark === 0) {
      // A Duplex will buffer both on the writable and readable side while
      // a Transform just wants to buffer hwm number of elements. To avoid
      // buffering twice we disable buffering on the writable side.
      options = {
        ...options,
        highWaterMark: null,
        readableHighWaterMark,
        // TODO (ronag): 0 is not optimal since we have
        // a "bug" where we check needDrain before calling _write and not after.
        // Refs: https://github.com/nodejs/node/pull/32887
        // Refs: https://github.com/nodejs/node/pull/35941
        writableHighWaterMark: options.writableHighWaterMark || 0
      };
    }
    Duplex.call(this, options);

    // We have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    this[kCallback] = null;
    if (options) {
      if (typeof options.transform === "function") this._transform = options.transform;
      if (typeof options.flush === "function") this._flush = options.flush;
    }

    // When the writable side finishes, then flush out anything remaining.
    // Backwards compat. Some Transform streams incorrectly implement _final
    // instead of or in addition to _flush. By using 'prefinish' instead of
    // implementing _final we continue supporting this unfortunate use case.
    this.on("prefinish", prefinish);
  }
  function final(cb) {
    if (typeof this._flush === "function" && !this.destroyed) {
      this._flush((er, data) => {
        if (er) {
          if (cb) {
            cb(er);
          } else {
            this.destroy(er);
          }
          return;
        }
        if (data != null) {
          this.push(data);
        }
        this.push(null);
        if (cb) {
          cb();
        }
      });
    } else {
      this.push(null);
      if (cb) {
        cb();
      }
    }
  }
  function prefinish() {
    if (this._final !== final) {
      final.call(this);
    }
  }
  Transform.prototype._final = final;
  Transform.prototype._transform = function (chunk, encoding, callback) {
    throw new ERR_METHOD_NOT_IMPLEMENTED("_transform()");
  };
  Transform.prototype._write = function (chunk, encoding, callback) {
    const rState = this._readableState;
    const wState = this._writableState;
    const length = rState.length;
    this._transform(chunk, encoding, (err, val) => {
      if (err) {
        callback(err);
        return;
      }
      if (val != null) {
        this.push(val);
      }
      if (wState.ended ||
      // Backwards compat.
      length === rState.length ||
      // Backwards compat.
      rState.length < rState.highWaterMark) {
        callback();
      } else {
        this[kCallback] = callback;
      }
    });
  };
  Transform.prototype._read = function () {
    if (this[kCallback]) {
      const callback = this[kCallback];
      this[kCallback] = null;
      callback();
    }
  };
  return exports$8;
}

var exports$7 = {},
  _dewExec$6 = false;
function dew$6() {
  if (_dewExec$6) return exports$7;
  _dewExec$6 = true;
  const {
    ObjectSetPrototypeOf
  } = dew$o();
  exports$7 = PassThrough;
  const Transform = dew$7();
  ObjectSetPrototypeOf(PassThrough.prototype, Transform.prototype);
  ObjectSetPrototypeOf(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };
  return exports$7;
}

var exports$6 = {},
  _dewExec$5 = false;
function dew$5() {
  if (_dewExec$5) return exports$6;
  _dewExec$5 = true;
  /* replacement start */

  const process$1 = process

  /* replacement end */
  // Ported from https://github.com/mafintosh/pump with
  // permission from the author, Mathias Buus (@mafintosh).
  ;
  const {
    ArrayIsArray,
    Promise,
    SymbolAsyncIterator,
    SymbolDispose
  } = dew$o();
  const eos = dew$i();
  const {
    once
  } = dew$m();
  const destroyImpl = dew$h();
  const Duplex = dew$8();
  const {
    aggregateTwoErrors,
    codes: {
      ERR_INVALID_ARG_TYPE,
      ERR_INVALID_RETURN_VALUE,
      ERR_MISSING_ARGS,
      ERR_STREAM_DESTROYED,
      ERR_STREAM_PREMATURE_CLOSE
    },
    AbortError
  } = dew$l();
  const {
    validateFunction,
    validateAbortSignal
  } = dew$k();
  const {
    isIterable,
    isReadable,
    isReadableNodeStream,
    isNodeStream,
    isTransformStream,
    isWebStream,
    isReadableStream,
    isReadableFinished
  } = dew$j();
  const AbortController = globalThis.AbortController || dew$n().AbortController;
  let PassThrough;
  let Readable;
  let addAbortListener;
  function destroyer(stream, reading, writing) {
    let finished = false;
    stream.on("close", () => {
      finished = true;
    });
    const cleanup = eos(stream, {
      readable: reading,
      writable: writing
    }, err => {
      finished = !err;
    });
    return {
      destroy: err => {
        if (finished) return;
        finished = true;
        destroyImpl.destroyer(stream, err || new ERR_STREAM_DESTROYED("pipe"));
      },
      cleanup
    };
  }
  function popCallback(streams) {
    // Streams should never be an empty array. It should always contain at least
    // a single stream. Therefore optimize for the average case instead of
    // checking for length === 0 as well.
    validateFunction(streams[streams.length - 1], "streams[stream.length - 1]");
    return streams.pop();
  }
  function makeAsyncIterable(val) {
    if (isIterable(val)) {
      return val;
    } else if (isReadableNodeStream(val)) {
      // Legacy streams are not Iterable.
      return fromReadable(val);
    }
    throw new ERR_INVALID_ARG_TYPE("val", ["Readable", "Iterable", "AsyncIterable"], val);
  }
  async function* fromReadable(val) {
    if (!Readable) {
      Readable = dew$b();
    }
    yield* Readable.prototype[SymbolAsyncIterator].call(val);
  }
  async function pumpToNode(iterable, writable, finish, {
    end
  }) {
    let error;
    let onresolve = null;
    const resume = err => {
      if (err) {
        error = err;
      }
      if (onresolve) {
        const callback = onresolve;
        onresolve = null;
        callback();
      }
    };
    const wait = () => new Promise((resolve, reject) => {
      if (error) {
        reject(error);
      } else {
        onresolve = () => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        };
      }
    });
    writable.on("drain", resume);
    const cleanup = eos(writable, {
      readable: false
    }, resume);
    try {
      if (writable.writableNeedDrain) {
        await wait();
      }
      for await (const chunk of iterable) {
        if (!writable.write(chunk)) {
          await wait();
        }
      }
      if (end) {
        writable.end();
        await wait();
      }
      finish();
    } catch (err) {
      finish(error !== err ? aggregateTwoErrors(error, err) : err);
    } finally {
      cleanup();
      writable.off("drain", resume);
    }
  }
  async function pumpToWeb(readable, writable, finish, {
    end
  }) {
    if (isTransformStream(writable)) {
      writable = writable.writable;
    }
    // https://streams.spec.whatwg.org/#example-manual-write-with-backpressure
    const writer = writable.getWriter();
    try {
      for await (const chunk of readable) {
        await writer.ready;
        writer.write(chunk).catch(() => {});
      }
      await writer.ready;
      if (end) {
        await writer.close();
      }
      finish();
    } catch (err) {
      try {
        await writer.abort(err);
        finish(err);
      } catch (err) {
        finish(err);
      }
    }
  }
  function pipeline(...streams) {
    return pipelineImpl(streams, once(popCallback(streams)));
  }
  function pipelineImpl(streams, callback, opts) {
    if (streams.length === 1 && ArrayIsArray(streams[0])) {
      streams = streams[0];
    }
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    const ac = new AbortController();
    const signal = ac.signal;
    const outerSignal = opts === null || opts === undefined ? undefined : opts.signal;

    // Need to cleanup event listeners if last stream is readable
    // https://github.com/nodejs/node/issues/35452
    const lastStreamCleanup = [];
    validateAbortSignal(outerSignal, "options.signal");
    function abort() {
      finishImpl(new AbortError());
    }
    addAbortListener = addAbortListener || dew$m().addAbortListener;
    let disposable;
    if (outerSignal) {
      disposable = addAbortListener(outerSignal, abort);
    }
    let error;
    let value;
    const destroys = [];
    let finishCount = 0;
    function finish(err) {
      finishImpl(err, --finishCount === 0);
    }
    function finishImpl(err, final) {
      var _disposable;
      if (err && (!error || error.code === "ERR_STREAM_PREMATURE_CLOSE")) {
        error = err;
      }
      if (!error && !final) {
        return;
      }
      while (destroys.length) {
        destroys.shift()(error);
      }
      (_disposable = disposable) === null || _disposable === undefined ? undefined : _disposable[SymbolDispose]();
      ac.abort();
      if (final) {
        if (!error) {
          lastStreamCleanup.forEach(fn => fn());
        }
        process$1.nextTick(callback, error, value);
      }
    }
    let ret;
    for (let i = 0; i < streams.length; i++) {
      const stream = streams[i];
      const reading = i < streams.length - 1;
      const writing = i > 0;
      const end = reading || (opts === null || opts === undefined ? undefined : opts.end) !== false;
      const isLastStream = i === streams.length - 1;
      if (isNodeStream(stream)) {
        if (end) {
          const {
            destroy,
            cleanup
          } = destroyer(stream, reading, writing);
          destroys.push(destroy);
          if (isReadable(stream) && isLastStream) {
            lastStreamCleanup.push(cleanup);
          }
        }

        // Catch stream errors that occur after pipe/pump has completed.
        function onError(err) {
          if (err && err.name !== "AbortError" && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            finish(err);
          }
        }
        stream.on("error", onError);
        if (isReadable(stream) && isLastStream) {
          lastStreamCleanup.push(() => {
            stream.removeListener("error", onError);
          });
        }
      }
      if (i === 0) {
        if (typeof stream === "function") {
          ret = stream({
            signal
          });
          if (!isIterable(ret)) {
            throw new ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or Stream", "source", ret);
          }
        } else if (isIterable(stream) || isReadableNodeStream(stream) || isTransformStream(stream)) {
          ret = stream;
        } else {
          ret = Duplex.from(stream);
        }
      } else if (typeof stream === "function") {
        if (isTransformStream(ret)) {
          var _ret;
          ret = makeAsyncIterable((_ret = ret) === null || _ret === undefined ? undefined : _ret.readable);
        } else {
          ret = makeAsyncIterable(ret);
        }
        ret = stream(ret, {
          signal
        });
        if (reading) {
          if (!isIterable(ret, true)) {
            throw new ERR_INVALID_RETURN_VALUE("AsyncIterable", `transform[${i - 1}]`, ret);
          }
        } else {
          var _ret2;
          if (!PassThrough) {
            PassThrough = dew$6();
          }

          // If the last argument to pipeline is not a stream
          // we must create a proxy stream so that pipeline(...)
          // always returns a stream which can be further
          // composed through `.pipe(stream)`.

          const pt = new PassThrough({
            objectMode: true
          });

          // Handle Promises/A+ spec, `then` could be a getter that throws on
          // second use.
          const then = (_ret2 = ret) === null || _ret2 === undefined ? undefined : _ret2.then;
          if (typeof then === "function") {
            finishCount++;
            then.call(ret, val => {
              value = val;
              if (val != null) {
                pt.write(val);
              }
              if (end) {
                pt.end();
              }
              process$1.nextTick(finish);
            }, err => {
              pt.destroy(err);
              process$1.nextTick(finish, err);
            });
          } else if (isIterable(ret, true)) {
            finishCount++;
            pumpToNode(ret, pt, finish, {
              end
            });
          } else if (isReadableStream(ret) || isTransformStream(ret)) {
            const toRead = ret.readable || ret;
            finishCount++;
            pumpToNode(toRead, pt, finish, {
              end
            });
          } else {
            throw new ERR_INVALID_RETURN_VALUE("AsyncIterable or Promise", "destination", ret);
          }
          ret = pt;
          const {
            destroy,
            cleanup
          } = destroyer(ret, false, true);
          destroys.push(destroy);
          if (isLastStream) {
            lastStreamCleanup.push(cleanup);
          }
        }
      } else if (isNodeStream(stream)) {
        if (isReadableNodeStream(ret)) {
          finishCount += 2;
          const cleanup = pipe(ret, stream, finish, {
            end
          });
          if (isReadable(stream) && isLastStream) {
            lastStreamCleanup.push(cleanup);
          }
        } else if (isTransformStream(ret) || isReadableStream(ret)) {
          const toRead = ret.readable || ret;
          finishCount++;
          pumpToNode(toRead, stream, finish, {
            end
          });
        } else if (isIterable(ret)) {
          finishCount++;
          pumpToNode(ret, stream, finish, {
            end
          });
        } else {
          throw new ERR_INVALID_ARG_TYPE("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], ret);
        }
        ret = stream;
      } else if (isWebStream(stream)) {
        if (isReadableNodeStream(ret)) {
          finishCount++;
          pumpToWeb(makeAsyncIterable(ret), stream, finish, {
            end
          });
        } else if (isReadableStream(ret) || isIterable(ret)) {
          finishCount++;
          pumpToWeb(ret, stream, finish, {
            end
          });
        } else if (isTransformStream(ret)) {
          finishCount++;
          pumpToWeb(ret.readable, stream, finish, {
            end
          });
        } else {
          throw new ERR_INVALID_ARG_TYPE("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], ret);
        }
        ret = stream;
      } else {
        ret = Duplex.from(stream);
      }
    }
    if (signal !== null && signal !== undefined && signal.aborted || outerSignal !== null && outerSignal !== undefined && outerSignal.aborted) {
      process$1.nextTick(abort);
    }
    return ret;
  }
  function pipe(src, dst, finish, {
    end
  }) {
    let ended = false;
    dst.on("close", () => {
      if (!ended) {
        // Finish if the destination closes before the source has completed.
        finish(new ERR_STREAM_PREMATURE_CLOSE());
      }
    });
    src.pipe(dst, {
      end: false
    }); // If end is true we already will have a listener to end dst.

    if (end) {
      // Compat. Before node v10.12.0 stdio used to throw an error so
      // pipe() did/does not end() stdio destinations.
      // Now they allow it but "secretly" don't close the underlying fd.

      function endFn() {
        ended = true;
        dst.end();
      }
      if (isReadableFinished(src)) {
        // End the destination if the source has already ended.
        process$1.nextTick(endFn);
      } else {
        src.once("end", endFn);
      }
    } else {
      finish();
    }
    eos(src, {
      readable: true,
      writable: false
    }, err => {
      const rState = src._readableState;
      if (err && err.code === "ERR_STREAM_PREMATURE_CLOSE" && rState && rState.ended && !rState.errored && !rState.errorEmitted) {
        // Some readable streams will emit 'close' before 'end'. However, since
        // this is on the readable side 'end' should still be emitted if the
        // stream has been ended and no error emitted. This should be allowed in
        // favor of backwards compatibility. Since the stream is piped to a
        // destination this should not result in any observable difference.
        // We don't need to check if this is a writable premature close since
        // eos will only fail with premature close on the reading side for
        // duplex streams.
        src.once("end", finish).once("error", finish);
      } else {
        finish(err);
      }
    });
    return eos(dst, {
      readable: false,
      writable: true
    }, finish);
  }
  exports$6 = {
    pipelineImpl,
    pipeline
  };
  return exports$6;
}

var exports$5 = {},
  _dewExec$4 = false;
function dew$4() {
  if (_dewExec$4) return exports$5;
  _dewExec$4 = true;
  const {
    pipeline
  } = dew$5();
  const Duplex = dew$8();
  const {
    destroyer
  } = dew$h();
  const {
    isNodeStream,
    isReadable,
    isWritable,
    isWebStream,
    isTransformStream,
    isWritableStream,
    isReadableStream
  } = dew$j();
  const {
    AbortError,
    codes: {
      ERR_INVALID_ARG_VALUE,
      ERR_MISSING_ARGS
    }
  } = dew$l();
  const eos = dew$i();
  exports$5 = function compose(...streams) {
    if (streams.length === 0) {
      throw new ERR_MISSING_ARGS("streams");
    }
    if (streams.length === 1) {
      return Duplex.from(streams[0]);
    }
    const orgStreams = [...streams];
    if (typeof streams[0] === "function") {
      streams[0] = Duplex.from(streams[0]);
    }
    if (typeof streams[streams.length - 1] === "function") {
      const idx = streams.length - 1;
      streams[idx] = Duplex.from(streams[idx]);
    }
    for (let n = 0; n < streams.length; ++n) {
      if (!isNodeStream(streams[n]) && !isWebStream(streams[n])) {
        // TODO(ronag): Add checks for non streams.
        continue;
      }
      if (n < streams.length - 1 && !(isReadable(streams[n]) || isReadableStream(streams[n]) || isTransformStream(streams[n]))) {
        throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], "must be readable");
      }
      if (n > 0 && !(isWritable(streams[n]) || isWritableStream(streams[n]) || isTransformStream(streams[n]))) {
        throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], "must be writable");
      }
    }
    let ondrain;
    let onfinish;
    let onreadable;
    let onclose;
    let d;
    function onfinished(err) {
      const cb = onclose;
      onclose = null;
      if (cb) {
        cb(err);
      } else if (err) {
        d.destroy(err);
      } else if (!readable && !writable) {
        d.destroy();
      }
    }
    const head = streams[0];
    const tail = pipeline(streams, onfinished);
    const writable = !!(isWritable(head) || isWritableStream(head) || isTransformStream(head));
    const readable = !!(isReadable(tail) || isReadableStream(tail) || isTransformStream(tail));

    // TODO(ronag): Avoid double buffering.
    // Implement Writable/Readable/Duplex traits.
    // See, https://github.com/nodejs/node/pull/33515.
    d = new Duplex({
      // TODO (ronag): highWaterMark?
      writableObjectMode: !!(head !== null && head !== undefined && head.writableObjectMode),
      readableObjectMode: !!(tail !== null && tail !== undefined && tail.readableObjectMode),
      writable,
      readable
    });
    if (writable) {
      if (isNodeStream(head)) {
        d._write = function (chunk, encoding, callback) {
          if (head.write(chunk, encoding)) {
            callback();
          } else {
            ondrain = callback;
          }
        };
        d._final = function (callback) {
          head.end();
          onfinish = callback;
        };
        head.on("drain", function () {
          if (ondrain) {
            const cb = ondrain;
            ondrain = null;
            cb();
          }
        });
      } else if (isWebStream(head)) {
        const writable = isTransformStream(head) ? head.writable : head;
        const writer = writable.getWriter();
        d._write = async function (chunk, encoding, callback) {
          try {
            await writer.ready;
            writer.write(chunk).catch(() => {});
            callback();
          } catch (err) {
            callback(err);
          }
        };
        d._final = async function (callback) {
          try {
            await writer.ready;
            writer.close().catch(() => {});
            onfinish = callback;
          } catch (err) {
            callback(err);
          }
        };
      }
      const toRead = isTransformStream(tail) ? tail.readable : tail;
      eos(toRead, () => {
        if (onfinish) {
          const cb = onfinish;
          onfinish = null;
          cb();
        }
      });
    }
    if (readable) {
      if (isNodeStream(tail)) {
        tail.on("readable", function () {
          if (onreadable) {
            const cb = onreadable;
            onreadable = null;
            cb();
          }
        });
        tail.on("end", function () {
          d.push(null);
        });
        d._read = function () {
          while (true) {
            const buf = tail.read();
            if (buf === null) {
              onreadable = d._read;
              return;
            }
            if (!d.push(buf)) {
              return;
            }
          }
        };
      } else if (isWebStream(tail)) {
        const readable = isTransformStream(tail) ? tail.readable : tail;
        const reader = readable.getReader();
        d._read = async function () {
          while (true) {
            try {
              const {
                value,
                done
              } = await reader.read();
              if (!d.push(value)) {
                return;
              }
              if (done) {
                d.push(null);
                return;
              }
            } catch {
              return;
            }
          }
        };
      }
    }
    d._destroy = function (err, callback) {
      if (!err && onclose !== null) {
        err = new AbortError();
      }
      onreadable = null;
      ondrain = null;
      onfinish = null;
      if (onclose === null) {
        callback(err);
      } else {
        onclose = callback;
        if (isNodeStream(tail)) {
          destroyer(tail, err);
        }
      }
    };
    return d;
  };
  return exports$5;
}

var exports$4 = {},
  _dewExec$3 = false;
function dew$3() {
  if (_dewExec$3) return exports$4;
  _dewExec$3 = true;
  const AbortController = globalThis.AbortController || dew$n().AbortController;
  const {
    codes: {
      ERR_INVALID_ARG_VALUE,
      ERR_INVALID_ARG_TYPE,
      ERR_MISSING_ARGS,
      ERR_OUT_OF_RANGE
    },
    AbortError
  } = dew$l();
  const {
    validateAbortSignal,
    validateInteger,
    validateObject
  } = dew$k();
  const kWeakHandler = dew$o().Symbol("kWeak");
  const kResistStopPropagation = dew$o().Symbol("kResistStopPropagation");
  const {
    finished
  } = dew$i();
  const staticCompose = dew$4();
  const {
    addAbortSignalNoValidate
  } = dew$f();
  const {
    isWritable,
    isNodeStream
  } = dew$j();
  const {
    deprecate
  } = dew$m();
  const {
    ArrayPrototypePush,
    Boolean,
    MathFloor,
    Number,
    NumberIsNaN,
    Promise,
    PromiseReject,
    PromiseResolve,
    PromisePrototypeThen,
    Symbol
  } = dew$o();
  const kEmpty = Symbol("kEmpty");
  const kEof = Symbol("kEof");
  function compose(stream, options) {
    if (options != null) {
      validateObject(options, "options");
    }
    if ((options === null || options === undefined ? undefined : options.signal) != null) {
      validateAbortSignal(options.signal, "options.signal");
    }
    if (isNodeStream(stream) && !isWritable(stream)) {
      throw new ERR_INVALID_ARG_VALUE("stream", stream, "must be writable");
    }
    const composedStream = staticCompose(this, stream);
    if (options !== null && options !== undefined && options.signal) {
      // Not validating as we already validated before
      addAbortSignalNoValidate(options.signal, composedStream);
    }
    return composedStream;
  }
  function map(fn, options) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
    }
    if (options != null) {
      validateObject(options, "options");
    }
    if ((options === null || options === undefined ? undefined : options.signal) != null) {
      validateAbortSignal(options.signal, "options.signal");
    }
    let concurrency = 1;
    if ((options === null || options === undefined ? undefined : options.concurrency) != null) {
      concurrency = MathFloor(options.concurrency);
    }
    let highWaterMark = concurrency - 1;
    if ((options === null || options === undefined ? undefined : options.highWaterMark) != null) {
      highWaterMark = MathFloor(options.highWaterMark);
    }
    validateInteger(concurrency, "options.concurrency", 1);
    validateInteger(highWaterMark, "options.highWaterMark", 0);
    highWaterMark += concurrency;
    return async function* map() {
      const signal = dew$m().AbortSignalAny([options === null || options === undefined ? undefined : options.signal].filter(Boolean));
      const stream = this;
      const queue = [];
      const signalOpt = {
        signal
      };
      let next;
      let resume;
      let done = false;
      let cnt = 0;
      function onCatch() {
        done = true;
        afterItemProcessed();
      }
      function afterItemProcessed() {
        cnt -= 1;
        maybeResume();
      }
      function maybeResume() {
        if (resume && !done && cnt < concurrency && queue.length < highWaterMark) {
          resume();
          resume = null;
        }
      }
      async function pump() {
        try {
          for await (let val of stream) {
            if (done) {
              return;
            }
            if (signal.aborted) {
              throw new AbortError();
            }
            try {
              val = fn(val, signalOpt);
              if (val === kEmpty) {
                continue;
              }
              val = PromiseResolve(val);
            } catch (err) {
              val = PromiseReject(err);
            }
            cnt += 1;
            PromisePrototypeThen(val, afterItemProcessed, onCatch);
            queue.push(val);
            if (next) {
              next();
              next = null;
            }
            if (!done && (queue.length >= highWaterMark || cnt >= concurrency)) {
              await new Promise(resolve => {
                resume = resolve;
              });
            }
          }
          queue.push(kEof);
        } catch (err) {
          const val = PromiseReject(err);
          PromisePrototypeThen(val, afterItemProcessed, onCatch);
          queue.push(val);
        } finally {
          done = true;
          if (next) {
            next();
            next = null;
          }
        }
      }
      pump();
      try {
        while (true) {
          while (queue.length > 0) {
            const val = await queue[0];
            if (val === kEof) {
              return;
            }
            if (signal.aborted) {
              throw new AbortError();
            }
            if (val !== kEmpty) {
              yield val;
            }
            queue.shift();
            maybeResume();
          }
          await new Promise(resolve => {
            next = resolve;
          });
        }
      } finally {
        done = true;
        if (resume) {
          resume();
          resume = null;
        }
      }
    }.call(this);
  }
  function asIndexedPairs(options = undefined) {
    if (options != null) {
      validateObject(options, "options");
    }
    if ((options === null || options === undefined ? undefined : options.signal) != null) {
      validateAbortSignal(options.signal, "options.signal");
    }
    return async function* asIndexedPairs() {
      let index = 0;
      for await (const val of this) {
        var _options$signal;
        if (options !== null && options !== undefined && (_options$signal = options.signal) !== null && _options$signal !== undefined && _options$signal.aborted) {
          throw new AbortError({
            cause: options.signal.reason
          });
        }
        yield [index++, val];
      }
    }.call(this);
  }
  async function some(fn, options = undefined) {
    for await (const unused of filter.call(this, fn, options)) {
      return true;
    }
    return false;
  }
  async function every(fn, options = undefined) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
    }
    // https://en.wikipedia.org/wiki/De_Morgan%27s_laws
    return !(await some.call(this, async (...args) => {
      return !(await fn(...args));
    }, options));
  }
  async function find(fn, options) {
    for await (const result of filter.call(this, fn, options)) {
      return result;
    }
    return undefined;
  }
  async function forEach(fn, options) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
    }
    async function forEachFn(value, options) {
      await fn(value, options);
      return kEmpty;
    }
    // eslint-disable-next-line no-unused-vars
    for await (const unused of map.call(this, forEachFn, options));
  }
  function filter(fn, options) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
    }
    async function filterFn(value, options) {
      if (await fn(value, options)) {
        return value;
      }
      return kEmpty;
    }
    return map.call(this, filterFn, options);
  }

  // Specific to provide better error to reduce since the argument is only
  // missing if the stream has no items in it - but the code is still appropriate
  class ReduceAwareErrMissingArgs extends ERR_MISSING_ARGS {
    constructor() {
      super("reduce");
      this.message = "Reduce of an empty stream requires an initial value";
    }
  }
  async function reduce(reducer, initialValue, options) {
    var _options$signal2;
    if (typeof reducer !== "function") {
      throw new ERR_INVALID_ARG_TYPE("reducer", ["Function", "AsyncFunction"], reducer);
    }
    if (options != null) {
      validateObject(options, "options");
    }
    if ((options === null || options === undefined ? undefined : options.signal) != null) {
      validateAbortSignal(options.signal, "options.signal");
    }
    let hasInitialValue = arguments.length > 1;
    if (options !== null && options !== undefined && (_options$signal2 = options.signal) !== null && _options$signal2 !== undefined && _options$signal2.aborted) {
      const err = new AbortError(undefined, {
        cause: options.signal.reason
      });
      this.once("error", () => {}); // The error is already propagated
      await finished(this.destroy(err));
      throw err;
    }
    const ac = new AbortController();
    const signal = ac.signal;
    if (options !== null && options !== undefined && options.signal) {
      const opts = {
        once: true,
        [kWeakHandler]: this,
        [kResistStopPropagation]: true
      };
      options.signal.addEventListener("abort", () => ac.abort(), opts);
    }
    let gotAnyItemFromStream = false;
    try {
      for await (const value of this) {
        var _options$signal3;
        gotAnyItemFromStream = true;
        if (options !== null && options !== undefined && (_options$signal3 = options.signal) !== null && _options$signal3 !== undefined && _options$signal3.aborted) {
          throw new AbortError();
        }
        if (!hasInitialValue) {
          initialValue = value;
          hasInitialValue = true;
        } else {
          initialValue = await reducer(initialValue, value, {
            signal
          });
        }
      }
      if (!gotAnyItemFromStream && !hasInitialValue) {
        throw new ReduceAwareErrMissingArgs();
      }
    } finally {
      ac.abort();
    }
    return initialValue;
  }
  async function toArray(options) {
    if (options != null) {
      validateObject(options, "options");
    }
    if ((options === null || options === undefined ? undefined : options.signal) != null) {
      validateAbortSignal(options.signal, "options.signal");
    }
    const result = [];
    for await (const val of this) {
      var _options$signal4;
      if (options !== null && options !== undefined && (_options$signal4 = options.signal) !== null && _options$signal4 !== undefined && _options$signal4.aborted) {
        throw new AbortError(undefined, {
          cause: options.signal.reason
        });
      }
      ArrayPrototypePush(result, val);
    }
    return result;
  }
  function flatMap(fn, options) {
    const values = map.call(this, fn, options);
    return async function* flatMap() {
      for await (const val of values) {
        yield* val;
      }
    }.call(this);
  }
  function toIntegerOrInfinity(number) {
    // We coerce here to align with the spec
    // https://github.com/tc39/proposal-iterator-helpers/issues/169
    number = Number(number);
    if (NumberIsNaN(number)) {
      return 0;
    }
    if (number < 0) {
      throw new ERR_OUT_OF_RANGE("number", ">= 0", number);
    }
    return number;
  }
  function drop(number, options = undefined) {
    if (options != null) {
      validateObject(options, "options");
    }
    if ((options === null || options === undefined ? undefined : options.signal) != null) {
      validateAbortSignal(options.signal, "options.signal");
    }
    number = toIntegerOrInfinity(number);
    return async function* drop() {
      var _options$signal5;
      if (options !== null && options !== undefined && (_options$signal5 = options.signal) !== null && _options$signal5 !== undefined && _options$signal5.aborted) {
        throw new AbortError();
      }
      for await (const val of this) {
        var _options$signal6;
        if (options !== null && options !== undefined && (_options$signal6 = options.signal) !== null && _options$signal6 !== undefined && _options$signal6.aborted) {
          throw new AbortError();
        }
        if (number-- <= 0) {
          yield val;
        }
      }
    }.call(this);
  }
  function take(number, options = undefined) {
    if (options != null) {
      validateObject(options, "options");
    }
    if ((options === null || options === undefined ? undefined : options.signal) != null) {
      validateAbortSignal(options.signal, "options.signal");
    }
    number = toIntegerOrInfinity(number);
    return async function* take() {
      var _options$signal7;
      if (options !== null && options !== undefined && (_options$signal7 = options.signal) !== null && _options$signal7 !== undefined && _options$signal7.aborted) {
        throw new AbortError();
      }
      for await (const val of this) {
        var _options$signal8;
        if (options !== null && options !== undefined && (_options$signal8 = options.signal) !== null && _options$signal8 !== undefined && _options$signal8.aborted) {
          throw new AbortError();
        }
        if (number-- > 0) {
          yield val;
        }

        // Don't get another item from iterator in case we reached the end
        if (number <= 0) {
          return;
        }
      }
    }.call(this);
  }
  exports$4.streamReturningOperators = {
    asIndexedPairs: deprecate(asIndexedPairs, "readable.asIndexedPairs will be removed in a future version."),
    drop,
    filter,
    flatMap,
    map,
    take,
    compose
  };
  exports$4.promiseReturningOperators = {
    every,
    forEach,
    reduce,
    toArray,
    some,
    find
  };
  return exports$4;
}

var exports$3 = {},
  _dewExec$2 = false;
function dew$2() {
  if (_dewExec$2) return exports$3;
  _dewExec$2 = true;
  const {
    ArrayPrototypePop,
    Promise
  } = dew$o();
  const {
    isIterable,
    isNodeStream,
    isWebStream
  } = dew$j();
  const {
    pipelineImpl: pl
  } = dew$5();
  const {
    finished
  } = dew$i();
  dew$1();
  function pipeline(...streams) {
    return new Promise((resolve, reject) => {
      let signal;
      let end;
      const lastArg = streams[streams.length - 1];
      if (lastArg && typeof lastArg === "object" && !isNodeStream(lastArg) && !isIterable(lastArg) && !isWebStream(lastArg)) {
        const options = ArrayPrototypePop(streams);
        signal = options.signal;
        end = options.end;
      }
      pl(streams, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      }, {
        signal,
        end
      });
    });
  }
  exports$3 = {
    finished,
    pipeline
  };
  return exports$3;
}

var exports$2 = {},
  _dewExec$1 = false;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$1() {
  if (_dewExec$1) return exports$2;
  _dewExec$1 = true;
  /* replacement start */

  const {
    Buffer
  } = dew$p()

  /* replacement end */
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  ;
  const {
    ObjectDefineProperty,
    ObjectKeys,
    ReflectApply
  } = dew$o();
  const {
    promisify: {
      custom: customPromisify
    }
  } = dew$m();
  const {
    streamReturningOperators,
    promiseReturningOperators
  } = dew$3();
  const {
    codes: {
      ERR_ILLEGAL_CONSTRUCTOR
    }
  } = dew$l();
  const compose = dew$4();
  const {
    setDefaultHighWaterMark,
    getDefaultHighWaterMark
  } = dew$d();
  const {
    pipeline
  } = dew$5();
  const {
    destroyer
  } = dew$h();
  const eos = dew$i();
  const promises = dew$2();
  const utils = dew$j();
  const Stream = exports$2 = dew$g().Stream;
  Stream.isDestroyed = utils.isDestroyed;
  Stream.isDisturbed = utils.isDisturbed;
  Stream.isErrored = utils.isErrored;
  Stream.isReadable = utils.isReadable;
  Stream.isWritable = utils.isWritable;
  Stream.Readable = dew$b();
  for (const key of ObjectKeys(streamReturningOperators)) {
    const op = streamReturningOperators[key];
    function fn(...args) {
      if (new.target) {
        throw ERR_ILLEGAL_CONSTRUCTOR();
      }
      return Stream.Readable.from(ReflectApply(op, this || _global, args));
    }
    ObjectDefineProperty(fn, "name", {
      __proto__: null,
      value: op.name
    });
    ObjectDefineProperty(fn, "length", {
      __proto__: null,
      value: op.length
    });
    ObjectDefineProperty(Stream.Readable.prototype, key, {
      __proto__: null,
      value: fn,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  for (const key of ObjectKeys(promiseReturningOperators)) {
    const op = promiseReturningOperators[key];
    function fn(...args) {
      if (new.target) {
        throw ERR_ILLEGAL_CONSTRUCTOR();
      }
      return ReflectApply(op, this || _global, args);
    }
    ObjectDefineProperty(fn, "name", {
      __proto__: null,
      value: op.name
    });
    ObjectDefineProperty(fn, "length", {
      __proto__: null,
      value: op.length
    });
    ObjectDefineProperty(Stream.Readable.prototype, key, {
      __proto__: null,
      value: fn,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  Stream.Writable = dew$a();
  Stream.Duplex = dew$8();
  Stream.Transform = dew$7();
  Stream.PassThrough = dew$6();
  Stream.pipeline = pipeline;
  const {
    addAbortSignal
  } = dew$f();
  Stream.addAbortSignal = addAbortSignal;
  Stream.finished = eos;
  Stream.destroy = destroyer;
  Stream.compose = compose;
  Stream.setDefaultHighWaterMark = setDefaultHighWaterMark;
  Stream.getDefaultHighWaterMark = getDefaultHighWaterMark;
  ObjectDefineProperty(Stream, "promises", {
    __proto__: null,
    configurable: true,
    enumerable: true,
    get() {
      return promises;
    }
  });
  ObjectDefineProperty(pipeline, customPromisify, {
    __proto__: null,
    enumerable: true,
    get() {
      return promises.pipeline;
    }
  });
  ObjectDefineProperty(eos, customPromisify, {
    __proto__: null,
    enumerable: true,
    get() {
      return promises.finished;
    }
  });

  // Backwards-compat with node 0.4.x
  Stream.Stream = Stream;
  Stream._isUint8Array = function isUint8Array(value) {
    return value instanceof Uint8Array;
  };
  Stream._uint8ArrayToBuffer = function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  };
  return exports$2;
}

var exports$1 = {},
  _dewExec = false;
function dew() {
  if (_dewExec) return exports$1;
  _dewExec = true;
  const CustomStream = dew$1();
  const promises = dew$2();
  const originalDestroy = CustomStream.Readable.destroy;
  exports$1 = CustomStream.Readable;

  // Explicit export naming is needed for ESM
  exports$1._uint8ArrayToBuffer = CustomStream._uint8ArrayToBuffer;
  exports$1._isUint8Array = CustomStream._isUint8Array;
  exports$1.isDisturbed = CustomStream.isDisturbed;
  exports$1.isErrored = CustomStream.isErrored;
  exports$1.isReadable = CustomStream.isReadable;
  exports$1.Readable = CustomStream.Readable;
  exports$1.Writable = CustomStream.Writable;
  exports$1.Duplex = CustomStream.Duplex;
  exports$1.Transform = CustomStream.Transform;
  exports$1.PassThrough = CustomStream.PassThrough;
  exports$1.addAbortSignal = CustomStream.addAbortSignal;
  exports$1.finished = CustomStream.finished;
  exports$1.destroy = CustomStream.destroy;
  exports$1.destroy = originalDestroy;
  exports$1.pipeline = CustomStream.pipeline;
  exports$1.compose = CustomStream.compose;
  Object.defineProperty(CustomStream, "promises", {
    configurable: true,
    enumerable: true,
    get() {
      return promises;
    }
  });
  exports$1.Stream = CustomStream.Stream;

  // Allow default importing
  exports$1.default = exports$1;
  return exports$1;
}

const exports = dew();
exports['_uint8ArrayToBuffer']; exports['_isUint8Array']; exports['isDisturbed']; exports['isErrored']; exports['isReadable']; exports['Readable']; exports['Writable']; exports['Duplex']; exports['Transform']; exports['PassThrough']; exports['addAbortSignal']; exports['finished']; exports['destroy']; exports['pipeline']; exports['compose']; exports['Stream'];

var Readable = exports.Readable;
Readable.wrap = function(src, options) {
  options = Object.assign({ objectMode: src.readableObjectMode != null || src.objectMode != null || true }, options);
  options.destroy = function(err, callback) {
    src.destroy(err);
    callback(err);
  };
  return new Readable(options).wrap(src);
};

var Writable = exports.Writable;
var Duplex = exports.Duplex;
var Transform = exports.Transform;
var PassThrough = exports.PassThrough;
var finished = exports.finished;
var pipeline = exports.pipeline;
var Stream = exports.Stream;

const promises = {
  finished: promisify(exports.finished),
  pipeline: promisify(exports.pipeline)
};

export { Duplex, PassThrough, Readable, Stream, Transform, Writable, exports as default, finished, pipeline, promises };
