function isatty () {
  return false;
}

function ReadStream () {
  throw new Error('tty.ReadStream is not implemented');
}

function WriteStream() {
  throw new Error('tty.WriteStream is not implemented');
}

var m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ReadStream: ReadStream,
  WriteStream: WriteStream,
  isatty: isatty
});

export { ReadStream, WriteStream, m as default, isatty };
