export * from 'node:buffer';
import { default as buffer } from 'node:buffer';
export const kMaxLength = 4294967296;
buffer.kMaxLength = kMaxLength;
export default buffer;
