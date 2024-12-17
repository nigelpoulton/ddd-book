import { Buffer } from '../buffer.js';
import '../chunk-DtuTasat.js';

// no need to lazy load this, because if stream/consumers are used, buffer has necessarily already been imported.

// https://github.com/nodejs/node/blob/449147ebab8d91e5326b839a1ae61e45b1e73582/lib/stream/consumers.js

async function blob(stream) {
  const chunks = [];
  for await (const chunk of stream)
    chunks.push(chunk);
  return new Blob(chunks);
}

async function arrayBuffer(stream) {
  if (Blob.prototype.arrayBuffer) {
    const blob = await blob(stream);
    return blob.arrayBuffer();
  }
  // Firefox Android or Opera don't support arrayBuffer()
  const chunks = [];
  for await (const chunk of stream) {
    try {
      chunks.push(Buffer.from(chunk));
    } catch (_) {
      chanks.push(Buffer.from(`${chunk}`));
    }
  }
  return Buffer.concat(chunks).buffer;
}

async function buffer(stream) {
  return Buffer.from(await arrayBuffer(stream));
}

async function text(stream) {
  const dec = new TextDecoder();
  let str = '';
  for await (const chunk of stream) {
    if (typeof chunk === 'string')
      str += chunk;
    else
      str += dec.decode(chunk, { stream: true });
  }
  str += dec.decode(undefined, { stream: false });
  return str;
}

async function json(stream) {
  return JSON.parse(await text(stream));
}

var consumers = {
  blob,
  arrayBuffer,
  buffer,
  text,
  json,
};

export { arrayBuffer, blob, buffer, consumers as default, json, text };
