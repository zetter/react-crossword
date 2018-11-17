/* eslint-disable no-unused-vars */
export default {
    read: (fn, ctx) => Promise.resolve(fn()),
    write: (fn, ctx) => Promise.resolve(fn()),
    defer: (frame, fn, ctx) => Promise.resolve(fn()),
    clear: id => {},
};
