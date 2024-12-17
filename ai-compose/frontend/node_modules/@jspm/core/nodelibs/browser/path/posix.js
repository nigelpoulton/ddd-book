import { posix as posix$1 } from '../path.js';
import '../chunk-BlJi4mNy.js';
import '../chunk-DEMDiNwt.js';

const {
  resolve,
  normalize,
  isAbsolute,
  join,
  relative,
  _makeLong,
  dirname,
  basename,
  extname,
  format,
  parse,
  sep,
  delimiter,
  win32
} = posix$1;

var posix = {
  resolve,
  normalize,
  isAbsolute,
  join,
  relative,
  _makeLong,
  dirname,
  basename,
  extname,
  format,
  parse,
  sep,
  delimiter,
  posix: posix$1,
  win32
};

export { _makeLong, basename, posix as default, delimiter, dirname, extname, format, isAbsolute, join, normalize, parse, posix$1 as posix, relative, resolve, sep, win32 };
