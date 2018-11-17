/* eslint-disable no-unused-vars */
export default {
    read: (fn, ctx) => fn(),
    write: (fn, ctx) => fn(),
    defer: (frame, fn, ctx) => fn(),
    clear: id => {},
};
