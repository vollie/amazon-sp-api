class CustomError extends Error {
  constructor(err, ...params) {
    super(err && typeof err === 'object' && err.message ? err.message : params[0]);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    for (let key in err) {
      if (key === 'stacktrace') {
        this['original_stacktrace'] = err[key];
      } else {
        this[key] = err[key];
      }
    }
    this.type = err.type ? err.type : 'error';
  }
}

module.exports = CustomError;
