var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/bottleneck/lib/parser.js
var require_parser = __commonJS((exports) => {
  exports.load = function(received, defaults5, onto = {}) {
    var k, ref, v;
    for (k in defaults5) {
      v = defaults5[k];
      onto[k] = (ref = received[k]) != null ? ref : v;
    }
    return onto;
  };
  exports.overwrite = function(received, defaults5, onto = {}) {
    var k, v;
    for (k in received) {
      v = received[k];
      if (defaults5[k] !== undefined) {
        onto[k] = v;
      }
    }
    return onto;
  };
});

// node_modules/bottleneck/lib/DLList.js
var require_DLList = __commonJS((exports, module) => {
  var DLList;
  DLList = class DLList2 {
    constructor(incr, decr) {
      this.incr = incr;
      this.decr = decr;
      this._first = null;
      this._last = null;
      this.length = 0;
    }
    push(value) {
      var node2;
      this.length++;
      if (typeof this.incr === "function") {
        this.incr();
      }
      node2 = {
        value,
        prev: this._last,
        next: null
      };
      if (this._last != null) {
        this._last.next = node2;
        this._last = node2;
      } else {
        this._first = this._last = node2;
      }
      return;
    }
    shift() {
      var value;
      if (this._first == null) {
        return;
      } else {
        this.length--;
        if (typeof this.decr === "function") {
          this.decr();
        }
      }
      value = this._first.value;
      if ((this._first = this._first.next) != null) {
        this._first.prev = null;
      } else {
        this._last = null;
      }
      return value;
    }
    first() {
      if (this._first != null) {
        return this._first.value;
      }
    }
    getArray() {
      var node2, ref, results;
      node2 = this._first;
      results = [];
      while (node2 != null) {
        results.push((ref = node2, node2 = node2.next, ref.value));
      }
      return results;
    }
    forEachShift(cb) {
      var node2;
      node2 = this.shift();
      while (node2 != null) {
        cb(node2), node2 = this.shift();
      }
      return;
    }
    debug() {
      var node2, ref, ref1, ref2, results;
      node2 = this._first;
      results = [];
      while (node2 != null) {
        results.push((ref = node2, node2 = node2.next, {
          value: ref.value,
          prev: (ref1 = ref.prev) != null ? ref1.value : undefined,
          next: (ref2 = ref.next) != null ? ref2.value : undefined
        }));
      }
      return results;
    }
  };
  module.exports = DLList;
});

// node_modules/bottleneck/lib/Events.js
var require_Events = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var Events;
  Events = class Events2 {
    constructor(instance) {
      this.instance = instance;
      this._events = {};
      if (this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null) {
        throw new Error("An Emitter already exists for this object");
      }
      this.instance.on = (name, cb) => {
        return this._addListener(name, "many", cb);
      };
      this.instance.once = (name, cb) => {
        return this._addListener(name, "once", cb);
      };
      this.instance.removeAllListeners = (name = null) => {
        if (name != null) {
          return delete this._events[name];
        } else {
          return this._events = {};
        }
      };
    }
    _addListener(name, status, cb) {
      var base2;
      if ((base2 = this._events)[name] == null) {
        base2[name] = [];
      }
      this._events[name].push({
        cb,
        status
      });
      return this.instance;
    }
    listenerCount(name) {
      if (this._events[name] != null) {
        return this._events[name].length;
      } else {
        return 0;
      }
    }
    trigger(name, ...args) {
      var _this = this;
      return _asyncToGenerator(function* () {
        var e, promises;
        try {
          if (name !== "debug") {
            _this.trigger("debug", `Event triggered: ${name}`, args);
          }
          if (_this._events[name] == null) {
            return;
          }
          _this._events[name] = _this._events[name].filter(function(listener) {
            return listener.status !== "none";
          });
          promises = _this._events[name].map(function() {
            var _ref = _asyncToGenerator(function* (listener) {
              var e2, returned;
              if (listener.status === "none") {
                return;
              }
              if (listener.status === "once") {
                listener.status = "none";
              }
              try {
                returned = typeof listener.cb === "function" ? listener.cb(...args) : undefined;
                if (typeof (returned != null ? returned.then : undefined) === "function") {
                  return yield returned;
                } else {
                  return returned;
                }
              } catch (error) {
                e2 = error;
                if (true) {
                  _this.trigger("error", e2);
                }
                return null;
              }
            });
            return function(_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return (yield Promise.all(promises)).find(function(x) {
            return x != null;
          });
        } catch (error) {
          e = error;
          if (true) {
            _this.trigger("error", e);
          }
          return null;
        }
      })();
    }
  };
  module.exports = Events;
});

// node_modules/bottleneck/lib/Queues.js
var require_Queues = __commonJS((exports, module) => {
  var DLList;
  var Events;
  var Queues;
  DLList = require_DLList();
  Events = require_Events();
  Queues = class Queues2 {
    constructor(num_priorities) {
      var i;
      this.Events = new Events(this);
      this._length = 0;
      this._lists = function() {
        var j, ref, results;
        results = [];
        for (i = j = 1, ref = num_priorities;1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          results.push(new DLList(() => {
            return this.incr();
          }, () => {
            return this.decr();
          }));
        }
        return results;
      }.call(this);
    }
    incr() {
      if (this._length++ === 0) {
        return this.Events.trigger("leftzero");
      }
    }
    decr() {
      if (--this._length === 0) {
        return this.Events.trigger("zero");
      }
    }
    push(job) {
      return this._lists[job.options.priority].push(job);
    }
    queued(priority) {
      if (priority != null) {
        return this._lists[priority].length;
      } else {
        return this._length;
      }
    }
    shiftAll(fn) {
      return this._lists.forEach(function(list) {
        return list.forEachShift(fn);
      });
    }
    getFirst(arr = this._lists) {
      var j, len, list;
      for (j = 0, len = arr.length;j < len; j++) {
        list = arr[j];
        if (list.length > 0) {
          return list;
        }
      }
      return [];
    }
    shiftLastFrom(priority) {
      return this.getFirst(this._lists.slice(priority).reverse()).shift();
    }
  };
  module.exports = Queues;
});

// node_modules/bottleneck/lib/BottleneckError.js
var require_BottleneckError = __commonJS((exports, module) => {
  var BottleneckError;
  BottleneckError = class BottleneckError2 extends Error {
  };
  module.exports = BottleneckError;
});

// node_modules/bottleneck/lib/Job.js
var require_Job = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var BottleneckError;
  var DEFAULT_PRIORITY;
  var Job;
  var NUM_PRIORITIES;
  var parser;
  NUM_PRIORITIES = 10;
  DEFAULT_PRIORITY = 5;
  parser = require_parser();
  BottleneckError = require_BottleneckError();
  Job = class Job2 {
    constructor(task, args, options2, jobDefaults, rejectOnDrop, Events, _states, Promise2) {
      this.task = task;
      this.args = args;
      this.rejectOnDrop = rejectOnDrop;
      this.Events = Events;
      this._states = _states;
      this.Promise = Promise2;
      this.options = parser.load(options2, jobDefaults);
      this.options.priority = this._sanitizePriority(this.options.priority);
      if (this.options.id === jobDefaults.id) {
        this.options.id = `${this.options.id}-${this._randomIndex()}`;
      }
      this.promise = new this.Promise((_resolve, _reject) => {
        this._resolve = _resolve;
        this._reject = _reject;
      });
      this.retryCount = 0;
    }
    _sanitizePriority(priority) {
      var sProperty;
      sProperty = ~~priority !== priority ? DEFAULT_PRIORITY : priority;
      if (sProperty < 0) {
        return 0;
      } else if (sProperty > NUM_PRIORITIES - 1) {
        return NUM_PRIORITIES - 1;
      } else {
        return sProperty;
      }
    }
    _randomIndex() {
      return Math.random().toString(36).slice(2);
    }
    doDrop({
      error,
      message = "This job has been dropped by Bottleneck"
    } = {}) {
      if (this._states.remove(this.options.id)) {
        if (this.rejectOnDrop) {
          this._reject(error != null ? error : new BottleneckError(message));
        }
        this.Events.trigger("dropped", {
          args: this.args,
          options: this.options,
          task: this.task,
          promise: this.promise
        });
        return true;
      } else {
        return false;
      }
    }
    _assertStatus(expected) {
      var status;
      status = this._states.jobStatus(this.options.id);
      if (!(status === expected || expected === "DONE" && status === null)) {
        throw new BottleneckError(`Invalid job status ${status}, expected ${expected}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
      }
    }
    doReceive() {
      this._states.start(this.options.id);
      return this.Events.trigger("received", {
        args: this.args,
        options: this.options
      });
    }
    doQueue(reachedHWM, blocked) {
      this._assertStatus("RECEIVED");
      this._states.next(this.options.id);
      return this.Events.trigger("queued", {
        args: this.args,
        options: this.options,
        reachedHWM,
        blocked
      });
    }
    doRun() {
      if (this.retryCount === 0) {
        this._assertStatus("QUEUED");
        this._states.next(this.options.id);
      } else {
        this._assertStatus("EXECUTING");
      }
      return this.Events.trigger("scheduled", {
        args: this.args,
        options: this.options
      });
    }
    doExecute(chained, clearGlobalState, run, free) {
      var _this = this;
      return _asyncToGenerator(function* () {
        var error, eventInfo, passed;
        if (_this.retryCount === 0) {
          _this._assertStatus("RUNNING");
          _this._states.next(_this.options.id);
        } else {
          _this._assertStatus("EXECUTING");
        }
        eventInfo = {
          args: _this.args,
          options: _this.options,
          retryCount: _this.retryCount
        };
        _this.Events.trigger("executing", eventInfo);
        try {
          passed = yield chained != null ? chained.schedule(_this.options, _this.task, ..._this.args) : _this.task(..._this.args);
          if (clearGlobalState()) {
            _this.doDone(eventInfo);
            yield free(_this.options, eventInfo);
            _this._assertStatus("DONE");
            return _this._resolve(passed);
          }
        } catch (error1) {
          error = error1;
          return _this._onFailure(error, eventInfo, clearGlobalState, run, free);
        }
      })();
    }
    doExpire(clearGlobalState, run, free) {
      var error, eventInfo;
      if (this._states.jobStatus(this.options.id === "RUNNING")) {
        this._states.next(this.options.id);
      }
      this._assertStatus("EXECUTING");
      eventInfo = {
        args: this.args,
        options: this.options,
        retryCount: this.retryCount
      };
      error = new BottleneckError(`This job timed out after ${this.options.expiration} ms.`);
      return this._onFailure(error, eventInfo, clearGlobalState, run, free);
    }
    _onFailure(error, eventInfo, clearGlobalState, run, free) {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        var retry, retryAfter;
        if (clearGlobalState()) {
          retry = yield _this2.Events.trigger("failed", error, eventInfo);
          if (retry != null) {
            retryAfter = ~~retry;
            _this2.Events.trigger("retry", `Retrying ${_this2.options.id} after ${retryAfter} ms`, eventInfo);
            _this2.retryCount++;
            return run(retryAfter);
          } else {
            _this2.doDone(eventInfo);
            yield free(_this2.options, eventInfo);
            _this2._assertStatus("DONE");
            return _this2._reject(error);
          }
        }
      })();
    }
    doDone(eventInfo) {
      this._assertStatus("EXECUTING");
      this._states.next(this.options.id);
      return this.Events.trigger("done", eventInfo);
    }
  };
  module.exports = Job;
});

// node_modules/bottleneck/lib/LocalDatastore.js
var require_LocalDatastore = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var BottleneckError;
  var LocalDatastore;
  var parser;
  parser = require_parser();
  BottleneckError = require_BottleneckError();
  LocalDatastore = class LocalDatastore2 {
    constructor(instance, storeOptions, storeInstanceOptions) {
      this.instance = instance;
      this.storeOptions = storeOptions;
      this.clientId = this.instance._randomIndex();
      parser.load(storeInstanceOptions, storeInstanceOptions, this);
      this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now();
      this._running = 0;
      this._done = 0;
      this._unblockTime = 0;
      this.ready = this.Promise.resolve();
      this.clients = {};
      this._startHeartbeat();
    }
    _startHeartbeat() {
      var base2;
      if (this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null)) {
        return typeof (base2 = this.heartbeat = setInterval(() => {
          var amount, incr, maximum, now, reservoir;
          now = Date.now();
          if (this.storeOptions.reservoirRefreshInterval != null && now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval) {
            this._lastReservoirRefresh = now;
            this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;
            this.instance._drainAll(this.computeCapacity());
          }
          if (this.storeOptions.reservoirIncreaseInterval != null && now >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval) {
            var _this$storeOptions = this.storeOptions;
            amount = _this$storeOptions.reservoirIncreaseAmount;
            maximum = _this$storeOptions.reservoirIncreaseMaximum;
            reservoir = _this$storeOptions.reservoir;
            this._lastReservoirIncrease = now;
            incr = maximum != null ? Math.min(amount, maximum - reservoir) : amount;
            if (incr > 0) {
              this.storeOptions.reservoir += incr;
              return this.instance._drainAll(this.computeCapacity());
            }
          }
        }, this.heartbeatInterval)).unref === "function" ? base2.unref() : undefined;
      } else {
        return clearInterval(this.heartbeat);
      }
    }
    __publish__(message) {
      var _this = this;
      return _asyncToGenerator(function* () {
        yield _this.yieldLoop();
        return _this.instance.Events.trigger("message", message.toString());
      })();
    }
    __disconnect__(flush) {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2.yieldLoop();
        clearInterval(_this2.heartbeat);
        return _this2.Promise.resolve();
      })();
    }
    yieldLoop(t = 0) {
      return new this.Promise(function(resolve, reject) {
        return setTimeout(resolve, t);
      });
    }
    computePenalty() {
      var ref;
      return (ref = this.storeOptions.penalty) != null ? ref : 15 * this.storeOptions.minTime || 5000;
    }
    __updateSettings__(options2) {
      var _this3 = this;
      return _asyncToGenerator(function* () {
        yield _this3.yieldLoop();
        parser.overwrite(options2, options2, _this3.storeOptions);
        _this3._startHeartbeat();
        _this3.instance._drainAll(_this3.computeCapacity());
        return true;
      })();
    }
    __running__() {
      var _this4 = this;
      return _asyncToGenerator(function* () {
        yield _this4.yieldLoop();
        return _this4._running;
      })();
    }
    __queued__() {
      var _this5 = this;
      return _asyncToGenerator(function* () {
        yield _this5.yieldLoop();
        return _this5.instance.queued();
      })();
    }
    __done__() {
      var _this6 = this;
      return _asyncToGenerator(function* () {
        yield _this6.yieldLoop();
        return _this6._done;
      })();
    }
    __groupCheck__(time) {
      var _this7 = this;
      return _asyncToGenerator(function* () {
        yield _this7.yieldLoop();
        return _this7._nextRequest + _this7.timeout < time;
      })();
    }
    computeCapacity() {
      var maxConcurrent, reservoir;
      var _this$storeOptions2 = this.storeOptions;
      maxConcurrent = _this$storeOptions2.maxConcurrent;
      reservoir = _this$storeOptions2.reservoir;
      if (maxConcurrent != null && reservoir != null) {
        return Math.min(maxConcurrent - this._running, reservoir);
      } else if (maxConcurrent != null) {
        return maxConcurrent - this._running;
      } else if (reservoir != null) {
        return reservoir;
      } else {
        return null;
      }
    }
    conditionsCheck(weight) {
      var capacity;
      capacity = this.computeCapacity();
      return capacity == null || weight <= capacity;
    }
    __incrementReservoir__(incr) {
      var _this8 = this;
      return _asyncToGenerator(function* () {
        var reservoir;
        yield _this8.yieldLoop();
        reservoir = _this8.storeOptions.reservoir += incr;
        _this8.instance._drainAll(_this8.computeCapacity());
        return reservoir;
      })();
    }
    __currentReservoir__() {
      var _this9 = this;
      return _asyncToGenerator(function* () {
        yield _this9.yieldLoop();
        return _this9.storeOptions.reservoir;
      })();
    }
    isBlocked(now) {
      return this._unblockTime >= now;
    }
    check(weight, now) {
      return this.conditionsCheck(weight) && this._nextRequest - now <= 0;
    }
    __check__(weight) {
      var _this10 = this;
      return _asyncToGenerator(function* () {
        var now;
        yield _this10.yieldLoop();
        now = Date.now();
        return _this10.check(weight, now);
      })();
    }
    __register__(index, weight, expiration) {
      var _this11 = this;
      return _asyncToGenerator(function* () {
        var now, wait;
        yield _this11.yieldLoop();
        now = Date.now();
        if (_this11.conditionsCheck(weight)) {
          _this11._running += weight;
          if (_this11.storeOptions.reservoir != null) {
            _this11.storeOptions.reservoir -= weight;
          }
          wait = Math.max(_this11._nextRequest - now, 0);
          _this11._nextRequest = now + wait + _this11.storeOptions.minTime;
          return {
            success: true,
            wait,
            reservoir: _this11.storeOptions.reservoir
          };
        } else {
          return {
            success: false
          };
        }
      })();
    }
    strategyIsBlock() {
      return this.storeOptions.strategy === 3;
    }
    __submit__(queueLength, weight) {
      var _this12 = this;
      return _asyncToGenerator(function* () {
        var blocked, now, reachedHWM;
        yield _this12.yieldLoop();
        if (_this12.storeOptions.maxConcurrent != null && weight > _this12.storeOptions.maxConcurrent) {
          throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${_this12.storeOptions.maxConcurrent}`);
        }
        now = Date.now();
        reachedHWM = _this12.storeOptions.highWater != null && queueLength === _this12.storeOptions.highWater && !_this12.check(weight, now);
        blocked = _this12.strategyIsBlock() && (reachedHWM || _this12.isBlocked(now));
        if (blocked) {
          _this12._unblockTime = now + _this12.computePenalty();
          _this12._nextRequest = _this12._unblockTime + _this12.storeOptions.minTime;
          _this12.instance._dropAllQueued();
        }
        return {
          reachedHWM,
          blocked,
          strategy: _this12.storeOptions.strategy
        };
      })();
    }
    __free__(index, weight) {
      var _this13 = this;
      return _asyncToGenerator(function* () {
        yield _this13.yieldLoop();
        _this13._running -= weight;
        _this13._done += weight;
        _this13.instance._drainAll(_this13.computeCapacity());
        return {
          running: _this13._running
        };
      })();
    }
  };
  module.exports = LocalDatastore;
});

// node_modules/bottleneck/lib/lua.json
var require_lua = __commonJS((exports, module) => {
  module.exports = {
    "blacklist_client.lua": "local blacklist = ARGV[num_static_argv + 1]\n\nif redis.call('zscore', client_last_seen_key, blacklist) then\n  redis.call('zadd', client_last_seen_key, 0, blacklist)\nend\n\n\nreturn {}\n",
    "check.lua": "local weight = tonumber(ARGV[num_static_argv + 1])\n\nlocal capacity = process_tick(now, false)['capacity']\nlocal nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))\n\nreturn conditions_check(capacity, weight) and nextRequest - now <= 0\n",
    "conditions_check.lua": "local conditions_check = function (capacity, weight)\n  return capacity == nil or weight <= capacity\nend\n",
    "current_reservoir.lua": "return process_tick(now, false)['reservoir']\n",
    "done.lua": "process_tick(now, false)\n\nreturn tonumber(redis.call('hget', settings_key, 'done'))\n",
    "free.lua": "local index = ARGV[num_static_argv + 1]\n\nredis.call('zadd', job_expirations_key, 0, index)\n\nreturn process_tick(now, false)['running']\n",
    "get_time.lua": "redis.replicate_commands()\n\nlocal get_time = function ()\n  local time = redis.call('time')\n\n  return tonumber(time[1]..string.sub(time[2], 1, 3))\nend\n",
    "group_check.lua": "return not (redis.call('exists', settings_key) == 1)\n",
    "heartbeat.lua": "process_tick(now, true)\n",
    "increment_reservoir.lua": "local incr = tonumber(ARGV[num_static_argv + 1])\n\nredis.call('hincrby', settings_key, 'reservoir', incr)\n\nlocal reservoir = process_tick(now, true)['reservoir']\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(0, 0, groupTimeout)\n\nreturn reservoir\n",
    "init.lua": "local clear = tonumber(ARGV[num_static_argv + 1])\nlocal limiter_version = ARGV[num_static_argv + 2]\nlocal num_local_argv = num_static_argv + 2\n\nif clear == 1 then\n  redis.call('del', unpack(KEYS))\nend\n\nif redis.call('exists', settings_key) == 0 then\n  -- Create\n  local args = {'hmset', settings_key}\n\n  for i = num_local_argv + 1, #ARGV do\n    table.insert(args, ARGV[i])\n  end\n\n  redis.call(unpack(args))\n  redis.call('hmset', settings_key,\n    'nextRequest', now,\n    'lastReservoirRefresh', now,\n    'lastReservoirIncrease', now,\n    'running', 0,\n    'done', 0,\n    'unblockTime', 0,\n    'capacityPriorityCounter', 0\n  )\n\nelse\n  -- Apply migrations\n  local settings = redis.call('hmget', settings_key,\n    'id',\n    'version'\n  )\n  local id = settings[1]\n  local current_version = settings[2]\n\n  if current_version ~= limiter_version then\n    local version_digits = {}\n    for k, v in string.gmatch(current_version, \"([^.]+)\") do\n      table.insert(version_digits, tonumber(k))\n    end\n\n    -- 2.10.0\n    if version_digits[2] < 10 then\n      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')\n      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')\n      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')\n      redis.call('hsetnx', settings_key, 'done', 0)\n      redis.call('hset', settings_key, 'version', '2.10.0')\n    end\n\n    -- 2.11.1\n    if version_digits[2] < 11 or (version_digits[2] == 11 and version_digits[3] < 1) then\n      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then\n        redis.call('hmset', settings_key,\n          'lastReservoirRefresh', now,\n          'version', '2.11.1'\n        )\n      end\n    end\n\n    -- 2.14.0\n    if version_digits[2] < 14 then\n      local old_running_key = 'b_'..id..'_running'\n      local old_executing_key = 'b_'..id..'_executing'\n\n      if redis.call('exists', old_running_key) == 1 then\n        redis.call('rename', old_running_key, job_weights_key)\n      end\n      if redis.call('exists', old_executing_key) == 1 then\n        redis.call('rename', old_executing_key, job_expirations_key)\n      end\n      redis.call('hset', settings_key, 'version', '2.14.0')\n    end\n\n    -- 2.15.2\n    if version_digits[2] < 15 or (version_digits[2] == 15 and version_digits[3] < 2) then\n      redis.call('hsetnx', settings_key, 'capacityPriorityCounter', 0)\n      redis.call('hset', settings_key, 'version', '2.15.2')\n    end\n\n    -- 2.17.0\n    if version_digits[2] < 17 then\n      redis.call('hsetnx', settings_key, 'clientTimeout', 10000)\n      redis.call('hset', settings_key, 'version', '2.17.0')\n    end\n\n    -- 2.18.0\n    if version_digits[2] < 18 then\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseInterval', '')\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseAmount', '')\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseMaximum', '')\n      redis.call('hsetnx', settings_key, 'lastReservoirIncrease', now)\n      redis.call('hset', settings_key, 'version', '2.18.0')\n    end\n\n  end\n\n  process_tick(now, false)\nend\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(0, 0, groupTimeout)\n\nreturn {}\n",
    "process_tick.lua": "local process_tick = function (now, always_publish)\n\n  local compute_capacity = function (maxConcurrent, running, reservoir)\n    if maxConcurrent ~= nil and reservoir ~= nil then\n      return math.min((maxConcurrent - running), reservoir)\n    elseif maxConcurrent ~= nil then\n      return maxConcurrent - running\n    elseif reservoir ~= nil then\n      return reservoir\n    else\n      return nil\n    end\n  end\n\n  local settings = redis.call('hmget', settings_key,\n    'id',\n    'maxConcurrent',\n    'running',\n    'reservoir',\n    'reservoirRefreshInterval',\n    'reservoirRefreshAmount',\n    'lastReservoirRefresh',\n    'reservoirIncreaseInterval',\n    'reservoirIncreaseAmount',\n    'reservoirIncreaseMaximum',\n    'lastReservoirIncrease',\n    'capacityPriorityCounter',\n    'clientTimeout'\n  )\n  local id = settings[1]\n  local maxConcurrent = tonumber(settings[2])\n  local running = tonumber(settings[3])\n  local reservoir = tonumber(settings[4])\n  local reservoirRefreshInterval = tonumber(settings[5])\n  local reservoirRefreshAmount = tonumber(settings[6])\n  local lastReservoirRefresh = tonumber(settings[7])\n  local reservoirIncreaseInterval = tonumber(settings[8])\n  local reservoirIncreaseAmount = tonumber(settings[9])\n  local reservoirIncreaseMaximum = tonumber(settings[10])\n  local lastReservoirIncrease = tonumber(settings[11])\n  local capacityPriorityCounter = tonumber(settings[12])\n  local clientTimeout = tonumber(settings[13])\n\n  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)\n\n  --\n  -- Process 'running' changes\n  --\n  local expired = redis.call('zrangebyscore', job_expirations_key, '-inf', '('..now)\n\n  if #expired > 0 then\n    redis.call('zremrangebyscore', job_expirations_key, '-inf', '('..now)\n\n    local flush_batch = function (batch, acc)\n      local weights = redis.call('hmget', job_weights_key, unpack(batch))\n                      redis.call('hdel',  job_weights_key, unpack(batch))\n      local clients = redis.call('hmget', job_clients_key, unpack(batch))\n                      redis.call('hdel',  job_clients_key, unpack(batch))\n\n      -- Calculate sum of removed weights\n      for i = 1, #weights do\n        acc['total'] = acc['total'] + (tonumber(weights[i]) or 0)\n      end\n\n      -- Calculate sum of removed weights by client\n      local client_weights = {}\n      for i = 1, #clients do\n        local removed = tonumber(weights[i]) or 0\n        if removed > 0 then\n          acc['client_weights'][clients[i]] = (acc['client_weights'][clients[i]] or 0) + removed\n        end\n      end\n    end\n\n    local acc = {\n      ['total'] = 0,\n      ['client_weights'] = {}\n    }\n    local batch_size = 1000\n\n    -- Compute changes to Zsets and apply changes to Hashes\n    for i = 1, #expired, batch_size do\n      local batch = {}\n      for j = i, math.min(i + batch_size - 1, #expired) do\n        table.insert(batch, expired[j])\n      end\n\n      flush_batch(batch, acc)\n    end\n\n    -- Apply changes to Zsets\n    if acc['total'] > 0 then\n      redis.call('hincrby', settings_key, 'done', acc['total'])\n      running = tonumber(redis.call('hincrby', settings_key, 'running', -acc['total']))\n    end\n\n    for client, weight in pairs(acc['client_weights']) do\n      redis.call('zincrby', client_running_key, -weight, client)\n    end\n  end\n\n  --\n  -- Process 'reservoir' changes\n  --\n  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil\n  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then\n    reservoir = reservoirRefreshAmount\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'lastReservoirRefresh', now\n    )\n  end\n\n  local reservoirIncreaseActive = reservoirIncreaseInterval ~= nil and reservoirIncreaseAmount ~= nil\n  if reservoirIncreaseActive and now >= lastReservoirIncrease + reservoirIncreaseInterval then\n    local num_intervals = math.floor((now - lastReservoirIncrease) / reservoirIncreaseInterval)\n    local incr = reservoirIncreaseAmount * num_intervals\n    if reservoirIncreaseMaximum ~= nil then\n      incr = math.min(incr, reservoirIncreaseMaximum - (reservoir or 0))\n    end\n    if incr > 0 then\n      reservoir = (reservoir or 0) + incr\n    end\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'lastReservoirIncrease', lastReservoirIncrease + (num_intervals * reservoirIncreaseInterval)\n    )\n  end\n\n  --\n  -- Clear unresponsive clients\n  --\n  local unresponsive = redis.call('zrangebyscore', client_last_seen_key, '-inf', (now - clientTimeout))\n  local unresponsive_lookup = {}\n  local terminated_clients = {}\n  for i = 1, #unresponsive do\n    unresponsive_lookup[unresponsive[i]] = true\n    if tonumber(redis.call('zscore', client_running_key, unresponsive[i])) == 0 then\n      table.insert(terminated_clients, unresponsive[i])\n    end\n  end\n  if #terminated_clients > 0 then\n    redis.call('zrem', client_running_key,         unpack(terminated_clients))\n    redis.call('hdel', client_num_queued_key,      unpack(terminated_clients))\n    redis.call('zrem', client_last_registered_key, unpack(terminated_clients))\n    redis.call('zrem', client_last_seen_key,       unpack(terminated_clients))\n  end\n\n  --\n  -- Broadcast capacity changes\n  --\n  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)\n\n  if always_publish or (initial_capacity ~= nil and final_capacity == nil) then\n    -- always_publish or was not unlimited, now unlimited\n    redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\n\n  elseif initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity then\n    -- capacity was increased\n    -- send the capacity message to the limiter having the lowest number of running jobs\n    -- the tiebreaker is the limiter having not registered a job in the longest time\n\n    local lowest_concurrency_value = nil\n    local lowest_concurrency_clients = {}\n    local lowest_concurrency_last_registered = {}\n    local client_concurrencies = redis.call('zrange', client_running_key, 0, -1, 'withscores')\n\n    for i = 1, #client_concurrencies, 2 do\n      local client = client_concurrencies[i]\n      local concurrency = tonumber(client_concurrencies[i+1])\n\n      if (\n        lowest_concurrency_value == nil or lowest_concurrency_value == concurrency\n      ) and (\n        not unresponsive_lookup[client]\n      ) and (\n        tonumber(redis.call('hget', client_num_queued_key, client)) > 0\n      ) then\n        lowest_concurrency_value = concurrency\n        table.insert(lowest_concurrency_clients, client)\n        local last_registered = tonumber(redis.call('zscore', client_last_registered_key, client))\n        table.insert(lowest_concurrency_last_registered, last_registered)\n      end\n    end\n\n    if #lowest_concurrency_clients > 0 then\n      local position = 1\n      local earliest = lowest_concurrency_last_registered[1]\n\n      for i,v in ipairs(lowest_concurrency_last_registered) do\n        if v < earliest then\n          position = i\n          earliest = v\n        end\n      end\n\n      local next_client = lowest_concurrency_clients[position]\n      redis.call('publish', 'b_'..id,\n        'capacity-priority:'..(final_capacity or '')..\n        ':'..next_client..\n        ':'..capacityPriorityCounter\n      )\n      redis.call('hincrby', settings_key, 'capacityPriorityCounter', '1')\n    else\n      redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\n    end\n  end\n\n  return {\n    ['capacity'] = final_capacity,\n    ['running'] = running,\n    ['reservoir'] = reservoir\n  }\nend\n",
    "queued.lua": "local clientTimeout = tonumber(redis.call('hget', settings_key, 'clientTimeout'))\nlocal valid_clients = redis.call('zrangebyscore', client_last_seen_key, (now - clientTimeout), 'inf')\nlocal client_queued = redis.call('hmget', client_num_queued_key, unpack(valid_clients))\n\nlocal sum = 0\nfor i = 1, #client_queued do\n  sum = sum + tonumber(client_queued[i])\nend\n\nreturn sum\n",
    "refresh_expiration.lua": "local refresh_expiration = function (now, nextRequest, groupTimeout)\n\n  if groupTimeout ~= nil then\n    local ttl = (nextRequest + groupTimeout) - now\n\n    for i = 1, #KEYS do\n      redis.call('pexpire', KEYS[i], ttl)\n    end\n  end\n\nend\n",
    "refs.lua": "local settings_key = KEYS[1]\nlocal job_weights_key = KEYS[2]\nlocal job_expirations_key = KEYS[3]\nlocal job_clients_key = KEYS[4]\nlocal client_running_key = KEYS[5]\nlocal client_num_queued_key = KEYS[6]\nlocal client_last_registered_key = KEYS[7]\nlocal client_last_seen_key = KEYS[8]\n\nlocal now = tonumber(ARGV[1])\nlocal client = ARGV[2]\n\nlocal num_static_argv = 2\n",
    "register.lua": "local index = ARGV[num_static_argv + 1]\nlocal weight = tonumber(ARGV[num_static_argv + 2])\nlocal expiration = tonumber(ARGV[num_static_argv + 3])\n\nlocal state = process_tick(now, false)\nlocal capacity = state['capacity']\nlocal reservoir = state['reservoir']\n\nlocal settings = redis.call('hmget', settings_key,\n  'nextRequest',\n  'minTime',\n  'groupTimeout'\n)\nlocal nextRequest = tonumber(settings[1])\nlocal minTime = tonumber(settings[2])\nlocal groupTimeout = tonumber(settings[3])\n\nif conditions_check(capacity, weight) then\n\n  redis.call('hincrby', settings_key, 'running', weight)\n  redis.call('hset', job_weights_key, index, weight)\n  if expiration ~= nil then\n    redis.call('zadd', job_expirations_key, now + expiration, index)\n  end\n  redis.call('hset', job_clients_key, index, client)\n  redis.call('zincrby', client_running_key, weight, client)\n  redis.call('hincrby', client_num_queued_key, client, -1)\n  redis.call('zadd', client_last_registered_key, now, client)\n\n  local wait = math.max(nextRequest - now, 0)\n  local newNextRequest = now + wait + minTime\n\n  if reservoir == nil then\n    redis.call('hset', settings_key,\n      'nextRequest', newNextRequest\n    )\n  else\n    reservoir = reservoir - weight\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'nextRequest', newNextRequest\n    )\n  end\n\n  refresh_expiration(now, newNextRequest, groupTimeout)\n\n  return {true, wait, reservoir}\n\nelse\n  return {false}\nend\n",
    "register_client.lua": "local queued = tonumber(ARGV[num_static_argv + 1])\n\n-- Could have been re-registered concurrently\nif not redis.call('zscore', client_last_seen_key, client) then\n  redis.call('zadd', client_running_key, 0, client)\n  redis.call('hset', client_num_queued_key, client, queued)\n  redis.call('zadd', client_last_registered_key, 0, client)\nend\n\nredis.call('zadd', client_last_seen_key, now, client)\n\nreturn {}\n",
    "running.lua": "return process_tick(now, false)['running']\n",
    "submit.lua": "local queueLength = tonumber(ARGV[num_static_argv + 1])\nlocal weight = tonumber(ARGV[num_static_argv + 2])\n\nlocal capacity = process_tick(now, false)['capacity']\n\nlocal settings = redis.call('hmget', settings_key,\n  'id',\n  'maxConcurrent',\n  'highWater',\n  'nextRequest',\n  'strategy',\n  'unblockTime',\n  'penalty',\n  'minTime',\n  'groupTimeout'\n)\nlocal id = settings[1]\nlocal maxConcurrent = tonumber(settings[2])\nlocal highWater = tonumber(settings[3])\nlocal nextRequest = tonumber(settings[4])\nlocal strategy = tonumber(settings[5])\nlocal unblockTime = tonumber(settings[6])\nlocal penalty = tonumber(settings[7])\nlocal minTime = tonumber(settings[8])\nlocal groupTimeout = tonumber(settings[9])\n\nif maxConcurrent ~= nil and weight > maxConcurrent then\n  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)\nend\n\nlocal reachedHWM = (highWater ~= nil and queueLength == highWater\n  and not (\n    conditions_check(capacity, weight)\n    and nextRequest - now <= 0\n  )\n)\n\nlocal blocked = strategy == 3 and (reachedHWM or unblockTime >= now)\n\nif blocked then\n  local computedPenalty = penalty\n  if computedPenalty == nil then\n    if minTime == 0 then\n      computedPenalty = 5000\n    else\n      computedPenalty = 15 * minTime\n    end\n  end\n\n  local newNextRequest = now + computedPenalty + minTime\n\n  redis.call('hmset', settings_key,\n    'unblockTime', now + computedPenalty,\n    'nextRequest', newNextRequest\n  )\n\n  local clients_queued_reset = redis.call('hkeys', client_num_queued_key)\n  local queued_reset = {}\n  for i = 1, #clients_queued_reset do\n    table.insert(queued_reset, clients_queued_reset[i])\n    table.insert(queued_reset, 0)\n  end\n  redis.call('hmset', client_num_queued_key, unpack(queued_reset))\n\n  redis.call('publish', 'b_'..id, 'blocked:')\n\n  refresh_expiration(now, newNextRequest, groupTimeout)\nend\n\nif not blocked and not reachedHWM then\n  redis.call('hincrby', client_num_queued_key, client, 1)\nend\n\nreturn {reachedHWM, blocked, strategy}\n",
    "update_settings.lua": "local args = {'hmset', settings_key}\n\nfor i = num_static_argv + 1, #ARGV do\n  table.insert(args, ARGV[i])\nend\n\nredis.call(unpack(args))\n\nprocess_tick(now, true)\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(0, 0, groupTimeout)\n\nreturn {}\n",
    "validate_client.lua": "if not redis.call('zscore', client_last_seen_key, client) then\n  return redis.error_reply('UNKNOWN_CLIENT')\nend\n\nredis.call('zadd', client_last_seen_key, now, client)\n",
    "validate_keys.lua": "if not (redis.call('exists', settings_key) == 1) then\n  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')\nend\n"
  };
});

// node_modules/bottleneck/lib/Scripts.js
var require_Scripts = __commonJS((exports) => {
  var headers;
  var lua;
  var templates;
  lua = require_lua();
  headers = {
    refs: lua["refs.lua"],
    validate_keys: lua["validate_keys.lua"],
    validate_client: lua["validate_client.lua"],
    refresh_expiration: lua["refresh_expiration.lua"],
    process_tick: lua["process_tick.lua"],
    conditions_check: lua["conditions_check.lua"],
    get_time: lua["get_time.lua"]
  };
  exports.allKeys = function(id) {
    return [
      `b_${id}_settings`,
      `b_${id}_job_weights`,
      `b_${id}_job_expirations`,
      `b_${id}_job_clients`,
      `b_${id}_client_running`,
      `b_${id}_client_num_queued`,
      `b_${id}_client_last_registered`,
      `b_${id}_client_last_seen`
    ];
  };
  templates = {
    init: {
      keys: exports.allKeys,
      headers: ["process_tick"],
      refresh_expiration: true,
      code: lua["init.lua"]
    },
    group_check: {
      keys: exports.allKeys,
      headers: [],
      refresh_expiration: false,
      code: lua["group_check.lua"]
    },
    register_client: {
      keys: exports.allKeys,
      headers: ["validate_keys"],
      refresh_expiration: false,
      code: lua["register_client.lua"]
    },
    blacklist_client: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client"],
      refresh_expiration: false,
      code: lua["blacklist_client.lua"]
    },
    heartbeat: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick"],
      refresh_expiration: false,
      code: lua["heartbeat.lua"]
    },
    update_settings: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick"],
      refresh_expiration: true,
      code: lua["update_settings.lua"]
    },
    running: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick"],
      refresh_expiration: false,
      code: lua["running.lua"]
    },
    queued: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client"],
      refresh_expiration: false,
      code: lua["queued.lua"]
    },
    done: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick"],
      refresh_expiration: false,
      code: lua["done.lua"]
    },
    check: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick", "conditions_check"],
      refresh_expiration: false,
      code: lua["check.lua"]
    },
    submit: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick", "conditions_check"],
      refresh_expiration: true,
      code: lua["submit.lua"]
    },
    register: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick", "conditions_check"],
      refresh_expiration: true,
      code: lua["register.lua"]
    },
    free: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick"],
      refresh_expiration: true,
      code: lua["free.lua"]
    },
    current_reservoir: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick"],
      refresh_expiration: false,
      code: lua["current_reservoir.lua"]
    },
    increment_reservoir: {
      keys: exports.allKeys,
      headers: ["validate_keys", "validate_client", "process_tick"],
      refresh_expiration: true,
      code: lua["increment_reservoir.lua"]
    }
  };
  exports.names = Object.keys(templates);
  exports.keys = function(name, id) {
    return templates[name].keys(id);
  };
  exports.payload = function(name) {
    var template;
    template = templates[name];
    return Array.prototype.concat(headers.refs, template.headers.map(function(h) {
      return headers[h];
    }), template.refresh_expiration ? headers.refresh_expiration : "", template.code).join("\n");
  };
});

// node_modules/bottleneck/lib/RedisConnection.js
var require_RedisConnection = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var Events;
  var RedisConnection2;
  var Scripts;
  var parser;
  parser = require_parser();
  Events = require_Events();
  Scripts = require_Scripts();
  RedisConnection2 = function() {

    class RedisConnection {
      constructor(options = {}) {
        parser.load(options, this.defaults, this);
        if (this.Redis == null) {
          this.Redis = eval("require")("redis");
        }
        if (this.Events == null) {
          this.Events = new Events(this);
        }
        this.terminated = false;
        if (this.client == null) {
          this.client = this.Redis.createClient(this.clientOptions);
        }
        this.subscriber = this.client.duplicate();
        this.limiters = {};
        this.shas = {};
        this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
          return this._loadScripts();
        }).then(() => {
          return {
            client: this.client,
            subscriber: this.subscriber
          };
        });
      }
      _setup(client, sub) {
        client.setMaxListeners(0);
        return new this.Promise((resolve, reject) => {
          client.on("error", (e) => {
            return this.Events.trigger("error", e);
          });
          if (sub) {
            client.on("message", (channel, message) => {
              var ref;
              return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : undefined;
            });
          }
          if (client.ready) {
            return resolve();
          } else {
            return client.once("ready", resolve);
          }
        });
      }
      _loadScript(name) {
        return new this.Promise((resolve, reject) => {
          var payload;
          payload = Scripts.payload(name);
          return this.client.multi([["script", "load", payload]]).exec((err, replies) => {
            if (err != null) {
              return reject(err);
            }
            this.shas[name] = replies[0];
            return resolve(replies[0]);
          });
        });
      }
      _loadScripts() {
        return this.Promise.all(Scripts.names.map((k) => {
          return this._loadScript(k);
        }));
      }
      __runCommand__(cmd) {
        var _this = this;
        return _asyncToGenerator(function* () {
          yield _this.ready;
          return new _this.Promise((resolve, reject) => {
            return _this.client.multi([cmd]).exec_atomic(function(err, replies) {
              if (err != null) {
                return reject(err);
              } else {
                return resolve(replies[0]);
              }
            });
          });
        })();
      }
      __addLimiter__(instance) {
        return this.Promise.all([instance.channel(), instance.channel_client()].map((channel) => {
          return new this.Promise((resolve, reject) => {
            var handler;
            handler = (chan) => {
              if (chan === channel) {
                this.subscriber.removeListener("subscribe", handler);
                this.limiters[channel] = instance;
                return resolve();
              }
            };
            this.subscriber.on("subscribe", handler);
            return this.subscriber.subscribe(channel);
          });
        }));
      }
      __removeLimiter__(instance) {
        var _this2 = this;
        return this.Promise.all([instance.channel(), instance.channel_client()].map(function() {
          var _ref = _asyncToGenerator(function* (channel) {
            if (!_this2.terminated) {
              yield new _this2.Promise((resolve, reject) => {
                return _this2.subscriber.unsubscribe(channel, function(err, chan) {
                  if (err != null) {
                    return reject(err);
                  }
                  if (chan === channel) {
                    return resolve();
                  }
                });
              });
            }
            return delete _this2.limiters[channel];
          });
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }()));
      }
      __scriptArgs__(name, id, args, cb) {
        var keys;
        keys = Scripts.keys(name, id);
        return [this.shas[name], keys.length].concat(keys, args, cb);
      }
      __scriptFn__(name) {
        return this.client.evalsha.bind(this.client);
      }
      disconnect(flush = true) {
        var i, k, len, ref;
        ref = Object.keys(this.limiters);
        for (i = 0, len = ref.length;i < len; i++) {
          k = ref[i];
          clearInterval(this.limiters[k]._store.heartbeat);
        }
        this.limiters = {};
        this.terminated = true;
        this.client.end(flush);
        this.subscriber.end(flush);
        return this.Promise.resolve();
      }
    }
    RedisConnection.prototype.datastore = "redis";
    RedisConnection.prototype.defaults = {
      Redis: null,
      clientOptions: {},
      client: null,
      Promise,
      Events: null
    };
    return RedisConnection;
  }.call(undefined);
  module.exports = RedisConnection2;
});

// node_modules/bottleneck/lib/IORedisConnection.js
var require_IORedisConnection = __commonJS((exports, module) => {
  var _slicedToArray = function(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  };
  var _nonIterableRest = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  var _iterableToArrayLimit = function(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s;!(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  };
  var _arrayWithHoles = function(arr) {
    if (Array.isArray(arr))
      return arr;
  };
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var Events;
  var IORedisConnection2;
  var Scripts;
  var parser;
  parser = require_parser();
  Events = require_Events();
  Scripts = require_Scripts();
  IORedisConnection2 = function() {

    class IORedisConnection {
      constructor(options = {}) {
        parser.load(options, this.defaults, this);
        if (this.Redis == null) {
          this.Redis = eval("require")("ioredis");
        }
        if (this.Events == null) {
          this.Events = new Events(this);
        }
        this.terminated = false;
        if (this.clusterNodes != null) {
          this.client = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
          this.subscriber = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
        } else if (this.client != null && this.client.duplicate == null) {
          this.subscriber = new this.Redis.Cluster(this.client.startupNodes, this.client.options);
        } else {
          if (this.client == null) {
            this.client = new this.Redis(this.clientOptions);
          }
          this.subscriber = this.client.duplicate();
        }
        this.limiters = {};
        this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
          this._loadScripts();
          return {
            client: this.client,
            subscriber: this.subscriber
          };
        });
      }
      _setup(client, sub) {
        client.setMaxListeners(0);
        return new this.Promise((resolve, reject) => {
          client.on("error", (e) => {
            return this.Events.trigger("error", e);
          });
          if (sub) {
            client.on("message", (channel, message) => {
              var ref;
              return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : undefined;
            });
          }
          if (client.status === "ready") {
            return resolve();
          } else {
            return client.once("ready", resolve);
          }
        });
      }
      _loadScripts() {
        return Scripts.names.forEach((name) => {
          return this.client.defineCommand(name, {
            lua: Scripts.payload(name)
          });
        });
      }
      __runCommand__(cmd) {
        var _this = this;
        return _asyncToGenerator(function* () {
          var _, deleted;
          yield _this.ready;
          var _ref = yield _this.client.pipeline([cmd]).exec();
          var _ref2 = _slicedToArray(_ref, 1);
          var _ref2$ = _slicedToArray(_ref2[0], 2);
          _ = _ref2$[0];
          deleted = _ref2$[1];
          return deleted;
        })();
      }
      __addLimiter__(instance) {
        return this.Promise.all([instance.channel(), instance.channel_client()].map((channel) => {
          return new this.Promise((resolve, reject) => {
            return this.subscriber.subscribe(channel, () => {
              this.limiters[channel] = instance;
              return resolve();
            });
          });
        }));
      }
      __removeLimiter__(instance) {
        var _this2 = this;
        return [instance.channel(), instance.channel_client()].forEach(function() {
          var _ref3 = _asyncToGenerator(function* (channel) {
            if (!_this2.terminated) {
              yield _this2.subscriber.unsubscribe(channel);
            }
            return delete _this2.limiters[channel];
          });
          return function(_x) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
      __scriptArgs__(name, id, args, cb) {
        var keys;
        keys = Scripts.keys(name, id);
        return [keys.length].concat(keys, args, cb);
      }
      __scriptFn__(name) {
        return this.client[name].bind(this.client);
      }
      disconnect(flush = true) {
        var i, k, len, ref;
        ref = Object.keys(this.limiters);
        for (i = 0, len = ref.length;i < len; i++) {
          k = ref[i];
          clearInterval(this.limiters[k]._store.heartbeat);
        }
        this.limiters = {};
        this.terminated = true;
        if (flush) {
          return this.Promise.all([this.client.quit(), this.subscriber.quit()]);
        } else {
          this.client.disconnect();
          this.subscriber.disconnect();
          return this.Promise.resolve();
        }
      }
    }
    IORedisConnection.prototype.datastore = "ioredis";
    IORedisConnection.prototype.defaults = {
      Redis: null,
      clientOptions: {},
      clusterNodes: null,
      client: null,
      Promise,
      Events: null
    };
    return IORedisConnection;
  }.call(undefined);
  module.exports = IORedisConnection2;
});

// node_modules/bottleneck/lib/RedisDatastore.js
var require_RedisDatastore = __commonJS((exports, module) => {
  var _slicedToArray = function(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  };
  var _nonIterableRest = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  var _iterableToArrayLimit = function(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s;!(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  };
  var _arrayWithHoles = function(arr) {
    if (Array.isArray(arr))
      return arr;
  };
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var BottleneckError;
  var IORedisConnection2;
  var RedisConnection2;
  var RedisDatastore;
  var parser;
  parser = require_parser();
  BottleneckError = require_BottleneckError();
  RedisConnection2 = require_RedisConnection();
  IORedisConnection2 = require_IORedisConnection();
  RedisDatastore = class RedisDatastore2 {
    constructor(instance, storeOptions, storeInstanceOptions) {
      this.instance = instance;
      this.storeOptions = storeOptions;
      this.originalId = this.instance.id;
      this.clientId = this.instance._randomIndex();
      parser.load(storeInstanceOptions, storeInstanceOptions, this);
      this.clients = {};
      this.capacityPriorityCounters = {};
      this.sharedConnection = this.connection != null;
      if (this.connection == null) {
        this.connection = this.instance.datastore === "redis" ? new RedisConnection2({
          Redis: this.Redis,
          clientOptions: this.clientOptions,
          Promise: this.Promise,
          Events: this.instance.Events
        }) : this.instance.datastore === "ioredis" ? new IORedisConnection2({
          Redis: this.Redis,
          clientOptions: this.clientOptions,
          clusterNodes: this.clusterNodes,
          Promise: this.Promise,
          Events: this.instance.Events
        }) : undefined;
      }
      this.instance.connection = this.connection;
      this.instance.datastore = this.connection.datastore;
      this.ready = this.connection.ready.then((clients) => {
        this.clients = clients;
        return this.runScript("init", this.prepareInitSettings(this.clearDatastore));
      }).then(() => {
        return this.connection.__addLimiter__(this.instance);
      }).then(() => {
        return this.runScript("register_client", [this.instance.queued()]);
      }).then(() => {
        var base2;
        if (typeof (base2 = this.heartbeat = setInterval(() => {
          return this.runScript("heartbeat", []).catch((e) => {
            return this.instance.Events.trigger("error", e);
          });
        }, this.heartbeatInterval)).unref === "function") {
          base2.unref();
        }
        return this.clients;
      });
    }
    __publish__(message) {
      var _this = this;
      return _asyncToGenerator(function* () {
        var client;
        var _ref = yield _this.ready;
        client = _ref.client;
        return client.publish(_this.instance.channel(), `message:${message.toString()}`);
      })();
    }
    onMessage(channel, message) {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        var capacity, counter, data3, drained, e, newCapacity, pos, priorityClient, rawCapacity, type;
        try {
          pos = message.indexOf(":");
          var _ref2 = [message.slice(0, pos), message.slice(pos + 1)];
          type = _ref2[0];
          data3 = _ref2[1];
          if (type === "capacity") {
            return yield _this2.instance._drainAll(data3.length > 0 ? ~~data3 : undefined);
          } else if (type === "capacity-priority") {
            var _data$split = data3.split(":");
            var _data$split2 = _slicedToArray(_data$split, 3);
            rawCapacity = _data$split2[0];
            priorityClient = _data$split2[1];
            counter = _data$split2[2];
            capacity = rawCapacity.length > 0 ? ~~rawCapacity : undefined;
            if (priorityClient === _this2.clientId) {
              drained = yield _this2.instance._drainAll(capacity);
              newCapacity = capacity != null ? capacity - (drained || 0) : "";
              return yield _this2.clients.client.publish(_this2.instance.channel(), `capacity-priority:${newCapacity}::${counter}`);
            } else if (priorityClient === "") {
              clearTimeout(_this2.capacityPriorityCounters[counter]);
              delete _this2.capacityPriorityCounters[counter];
              return _this2.instance._drainAll(capacity);
            } else {
              return _this2.capacityPriorityCounters[counter] = setTimeout(_asyncToGenerator(function* () {
                var e2;
                try {
                  delete _this2.capacityPriorityCounters[counter];
                  yield _this2.runScript("blacklist_client", [priorityClient]);
                  return yield _this2.instance._drainAll(capacity);
                } catch (error) {
                  e2 = error;
                  return _this2.instance.Events.trigger("error", e2);
                }
              }), 1000);
            }
          } else if (type === "message") {
            return _this2.instance.Events.trigger("message", data3);
          } else if (type === "blocked") {
            return yield _this2.instance._dropAllQueued();
          }
        } catch (error) {
          e = error;
          return _this2.instance.Events.trigger("error", e);
        }
      })();
    }
    __disconnect__(flush) {
      clearInterval(this.heartbeat);
      if (this.sharedConnection) {
        return this.connection.__removeLimiter__(this.instance);
      } else {
        return this.connection.disconnect(flush);
      }
    }
    runScript(name, args) {
      var _this3 = this;
      return _asyncToGenerator(function* () {
        if (!(name === "init" || name === "register_client")) {
          yield _this3.ready;
        }
        return new _this3.Promise((resolve, reject) => {
          var all_args, arr;
          all_args = [Date.now(), _this3.clientId].concat(args);
          _this3.instance.Events.trigger("debug", `Calling Redis script: ${name}.lua`, all_args);
          arr = _this3.connection.__scriptArgs__(name, _this3.originalId, all_args, function(err, replies) {
            if (err != null) {
              return reject(err);
            }
            return resolve(replies);
          });
          return _this3.connection.__scriptFn__(name)(...arr);
        }).catch((e) => {
          if (e.message === "SETTINGS_KEY_NOT_FOUND") {
            if (name === "heartbeat") {
              return _this3.Promise.resolve();
            } else {
              return _this3.runScript("init", _this3.prepareInitSettings(false)).then(() => {
                return _this3.runScript(name, args);
              });
            }
          } else if (e.message === "UNKNOWN_CLIENT") {
            return _this3.runScript("register_client", [_this3.instance.queued()]).then(() => {
              return _this3.runScript(name, args);
            });
          } else {
            return _this3.Promise.reject(e);
          }
        });
      })();
    }
    prepareArray(arr) {
      var i, len, results, x;
      results = [];
      for (i = 0, len = arr.length;i < len; i++) {
        x = arr[i];
        results.push(x != null ? x.toString() : "");
      }
      return results;
    }
    prepareObject(obj) {
      var arr, k, v;
      arr = [];
      for (k in obj) {
        v = obj[k];
        arr.push(k, v != null ? v.toString() : "");
      }
      return arr;
    }
    prepareInitSettings(clear) {
      var args;
      args = this.prepareObject(Object.assign({}, this.storeOptions, {
        id: this.originalId,
        version: this.instance.version,
        groupTimeout: this.timeout,
        clientTimeout: this.clientTimeout
      }));
      args.unshift(clear ? 1 : 0, this.instance.version);
      return args;
    }
    convertBool(b) {
      return !!b;
    }
    __updateSettings__(options2) {
      var _this4 = this;
      return _asyncToGenerator(function* () {
        yield _this4.runScript("update_settings", _this4.prepareObject(options2));
        return parser.overwrite(options2, options2, _this4.storeOptions);
      })();
    }
    __running__() {
      return this.runScript("running", []);
    }
    __queued__() {
      return this.runScript("queued", []);
    }
    __done__() {
      return this.runScript("done", []);
    }
    __groupCheck__() {
      var _this5 = this;
      return _asyncToGenerator(function* () {
        return _this5.convertBool(yield _this5.runScript("group_check", []));
      })();
    }
    __incrementReservoir__(incr) {
      return this.runScript("increment_reservoir", [incr]);
    }
    __currentReservoir__() {
      return this.runScript("current_reservoir", []);
    }
    __check__(weight) {
      var _this6 = this;
      return _asyncToGenerator(function* () {
        return _this6.convertBool(yield _this6.runScript("check", _this6.prepareArray([weight])));
      })();
    }
    __register__(index, weight, expiration) {
      var _this7 = this;
      return _asyncToGenerator(function* () {
        var reservoir, success, wait;
        var _ref4 = yield _this7.runScript("register", _this7.prepareArray([index, weight, expiration]));
        var _ref5 = _slicedToArray(_ref4, 3);
        success = _ref5[0];
        wait = _ref5[1];
        reservoir = _ref5[2];
        return {
          success: _this7.convertBool(success),
          wait,
          reservoir
        };
      })();
    }
    __submit__(queueLength, weight) {
      var _this8 = this;
      return _asyncToGenerator(function* () {
        var blocked, e, maxConcurrent, overweight, reachedHWM, strategy;
        try {
          var _ref6 = yield _this8.runScript("submit", _this8.prepareArray([queueLength, weight]));
          var _ref7 = _slicedToArray(_ref6, 3);
          reachedHWM = _ref7[0];
          blocked = _ref7[1];
          strategy = _ref7[2];
          return {
            reachedHWM: _this8.convertBool(reachedHWM),
            blocked: _this8.convertBool(blocked),
            strategy
          };
        } catch (error) {
          e = error;
          if (e.message.indexOf("OVERWEIGHT") === 0) {
            var _e$message$split = e.message.split(":");
            var _e$message$split2 = _slicedToArray(_e$message$split, 3);
            overweight = _e$message$split2[0];
            weight = _e$message$split2[1];
            maxConcurrent = _e$message$split2[2];
            throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${maxConcurrent}`);
          } else {
            throw e;
          }
        }
      })();
    }
    __free__(index, weight) {
      var _this9 = this;
      return _asyncToGenerator(function* () {
        var running;
        running = yield _this9.runScript("free", _this9.prepareArray([index]));
        return {
          running
        };
      })();
    }
  };
  module.exports = RedisDatastore;
});

// node_modules/bottleneck/lib/States.js
var require_States = __commonJS((exports, module) => {
  var BottleneckError;
  var States;
  BottleneckError = require_BottleneckError();
  States = class States2 {
    constructor(status1) {
      this.status = status1;
      this._jobs = {};
      this.counts = this.status.map(function() {
        return 0;
      });
    }
    next(id) {
      var current, next;
      current = this._jobs[id];
      next = current + 1;
      if (current != null && next < this.status.length) {
        this.counts[current]--;
        this.counts[next]++;
        return this._jobs[id]++;
      } else if (current != null) {
        this.counts[current]--;
        return delete this._jobs[id];
      }
    }
    start(id) {
      var initial;
      initial = 0;
      this._jobs[id] = initial;
      return this.counts[initial]++;
    }
    remove(id) {
      var current;
      current = this._jobs[id];
      if (current != null) {
        this.counts[current]--;
        delete this._jobs[id];
      }
      return current != null;
    }
    jobStatus(id) {
      var ref;
      return (ref = this.status[this._jobs[id]]) != null ? ref : null;
    }
    statusJobs(status) {
      var k, pos, ref, results, v;
      if (status != null) {
        pos = this.status.indexOf(status);
        if (pos < 0) {
          throw new BottleneckError(`status must be one of ${this.status.join(", ")}`);
        }
        ref = this._jobs;
        results = [];
        for (k in ref) {
          v = ref[k];
          if (v === pos) {
            results.push(k);
          }
        }
        return results;
      } else {
        return Object.keys(this._jobs);
      }
    }
    statusCounts() {
      return this.counts.reduce((acc, v, i) => {
        acc[this.status[i]] = v;
        return acc;
      }, {});
    }
  };
  module.exports = States;
});

// node_modules/bottleneck/lib/Sync.js
var require_Sync = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var DLList;
  var Sync;
  DLList = require_DLList();
  Sync = class Sync2 {
    constructor(name, Promise2) {
      this.schedule = this.schedule.bind(this);
      this.name = name;
      this.Promise = Promise2;
      this._running = 0;
      this._queue = new DLList;
    }
    isEmpty() {
      return this._queue.length === 0;
    }
    _tryToRun() {
      var _this = this;
      return _asyncToGenerator(function* () {
        var args, cb, error, reject, resolve, returned, task;
        if (_this._running < 1 && _this._queue.length > 0) {
          _this._running++;
          var _this$_queue$shift = _this._queue.shift();
          task = _this$_queue$shift.task;
          args = _this$_queue$shift.args;
          resolve = _this$_queue$shift.resolve;
          reject = _this$_queue$shift.reject;
          cb = yield _asyncToGenerator(function* () {
            try {
              returned = yield task(...args);
              return function() {
                return resolve(returned);
              };
            } catch (error1) {
              error = error1;
              return function() {
                return reject(error);
              };
            }
          })();
          _this._running--;
          _this._tryToRun();
          return cb();
        }
      })();
    }
    schedule(task, ...args) {
      var promise, reject, resolve;
      resolve = reject = null;
      promise = new this.Promise(function(_resolve, _reject) {
        resolve = _resolve;
        return reject = _reject;
      });
      this._queue.push({
        task,
        args,
        resolve,
        reject
      });
      this._tryToRun();
      return promise;
    }
  };
  module.exports = Sync;
});

// node_modules/bottleneck/lib/version.json
var require_version = __commonJS((exports, module) => {
  module.exports = { version: "2.19.5" };
});

// node_modules/bottleneck/lib/Group.js
var require_Group = __commonJS((exports, module) => {
  var _slicedToArray = function(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  };
  var _nonIterableRest = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  var _iterableToArrayLimit = function(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s;!(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  };
  var _arrayWithHoles = function(arr) {
    if (Array.isArray(arr))
      return arr;
  };
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var Events;
  var Group;
  var IORedisConnection2;
  var RedisConnection2;
  var Scripts;
  var parser;
  parser = require_parser();
  Events = require_Events();
  RedisConnection2 = require_RedisConnection();
  IORedisConnection2 = require_IORedisConnection();
  Scripts = require_Scripts();
  Group = function() {

    class Group2 {
      constructor(limiterOptions = {}) {
        this.deleteKey = this.deleteKey.bind(this);
        this.limiterOptions = limiterOptions;
        parser.load(this.limiterOptions, this.defaults, this);
        this.Events = new Events(this);
        this.instances = {};
        this.Bottleneck = require_Bottleneck();
        this._startAutoCleanup();
        this.sharedConnection = this.connection != null;
        if (this.connection == null) {
          if (this.limiterOptions.datastore === "redis") {
            this.connection = new RedisConnection2(Object.assign({}, this.limiterOptions, {
              Events: this.Events
            }));
          } else if (this.limiterOptions.datastore === "ioredis") {
            this.connection = new IORedisConnection2(Object.assign({}, this.limiterOptions, {
              Events: this.Events
            }));
          }
        }
      }
      key(key = "") {
        var ref;
        return (ref = this.instances[key]) != null ? ref : (() => {
          var limiter;
          limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
            id: `${this.id}-${key}`,
            timeout: this.timeout,
            connection: this.connection
          }));
          this.Events.trigger("created", limiter, key);
          return limiter;
        })();
      }
      deleteKey(key = "") {
        var _this = this;
        return _asyncToGenerator(function* () {
          var deleted, instance;
          instance = _this.instances[key];
          if (_this.connection) {
            deleted = yield _this.connection.__runCommand__(["del", ...Scripts.allKeys(`${_this.id}-${key}`)]);
          }
          if (instance != null) {
            delete _this.instances[key];
            yield instance.disconnect();
          }
          return instance != null || deleted > 0;
        })();
      }
      limiters() {
        var k, ref, results, v;
        ref = this.instances;
        results = [];
        for (k in ref) {
          v = ref[k];
          results.push({
            key: k,
            limiter: v
          });
        }
        return results;
      }
      keys() {
        return Object.keys(this.instances);
      }
      clusterKeys() {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          var cursor, end, found, i, k, keys, len, next, start;
          if (_this2.connection == null) {
            return _this2.Promise.resolve(_this2.keys());
          }
          keys = [];
          cursor = null;
          start = `b_${_this2.id}-`.length;
          end = "_settings".length;
          while (cursor !== 0) {
            var _ref = yield _this2.connection.__runCommand__(["scan", cursor != null ? cursor : 0, "match", `b_${_this2.id}-*_settings`, "count", 1e4]);
            var _ref2 = _slicedToArray(_ref, 2);
            next = _ref2[0];
            found = _ref2[1];
            cursor = ~~next;
            for (i = 0, len = found.length;i < len; i++) {
              k = found[i];
              keys.push(k.slice(start, -end));
            }
          }
          return keys;
        })();
      }
      _startAutoCleanup() {
        var _this3 = this;
        var base2;
        clearInterval(this.interval);
        return typeof (base2 = this.interval = setInterval(_asyncToGenerator(function* () {
          var e, k, ref, results, time, v;
          time = Date.now();
          ref = _this3.instances;
          results = [];
          for (k in ref) {
            v = ref[k];
            try {
              if (yield v._store.__groupCheck__(time)) {
                results.push(_this3.deleteKey(k));
              } else {
                results.push(undefined);
              }
            } catch (error) {
              e = error;
              results.push(v.Events.trigger("error", e));
            }
          }
          return results;
        }), this.timeout / 2)).unref === "function" ? base2.unref() : undefined;
      }
      updateSettings(options2 = {}) {
        parser.overwrite(options2, this.defaults, this);
        parser.overwrite(options2, options2, this.limiterOptions);
        if (options2.timeout != null) {
          return this._startAutoCleanup();
        }
      }
      disconnect(flush = true) {
        var ref;
        if (!this.sharedConnection) {
          return (ref = this.connection) != null ? ref.disconnect(flush) : undefined;
        }
      }
    }
    Group2.prototype.defaults = {
      timeout: 1000 * 60 * 5,
      connection: null,
      Promise,
      id: "group-key"
    };
    return Group2;
  }.call(undefined);
  module.exports = Group;
});

// node_modules/bottleneck/lib/Batcher.js
var require_Batcher = __commonJS((exports, module) => {
  var Batcher;
  var Events;
  var parser;
  parser = require_parser();
  Events = require_Events();
  Batcher = function() {

    class Batcher2 {
      constructor(options2 = {}) {
        this.options = options2;
        parser.load(this.options, this.defaults, this);
        this.Events = new Events(this);
        this._arr = [];
        this._resetPromise();
        this._lastFlush = Date.now();
      }
      _resetPromise() {
        return this._promise = new this.Promise((res, rej) => {
          return this._resolve = res;
        });
      }
      _flush() {
        clearTimeout(this._timeout);
        this._lastFlush = Date.now();
        this._resolve();
        this.Events.trigger("batch", this._arr);
        this._arr = [];
        return this._resetPromise();
      }
      add(data3) {
        var ret;
        this._arr.push(data3);
        ret = this._promise;
        if (this._arr.length === this.maxSize) {
          this._flush();
        } else if (this.maxTime != null && this._arr.length === 1) {
          this._timeout = setTimeout(() => {
            return this._flush();
          }, this.maxTime);
        }
        return ret;
      }
    }
    Batcher2.prototype.defaults = {
      maxTime: null,
      maxSize: null,
      Promise
    };
    return Batcher2;
  }.call(undefined);
  module.exports = Batcher;
});

// node_modules/bottleneck/lib/Bottleneck.js
var require_Bottleneck = __commonJS((exports, module) => {
  var _slicedToArray = function(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  };
  var _iterableToArrayLimit = function(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s;!(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  };
  var _toArray = function(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  };
  var _nonIterableRest = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  var _iterableToArray = function(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
      return Array.from(iter);
  };
  var _arrayWithHoles = function(arr) {
    if (Array.isArray(arr))
      return arr;
  };
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var Bottleneck;
  var DEFAULT_PRIORITY;
  var Events;
  var Job;
  var LocalDatastore;
  var NUM_PRIORITIES;
  var Queues;
  var RedisDatastore;
  var States;
  var Sync;
  var parser;
  var splice = [].splice;
  NUM_PRIORITIES = 10;
  DEFAULT_PRIORITY = 5;
  parser = require_parser();
  Queues = require_Queues();
  Job = require_Job();
  LocalDatastore = require_LocalDatastore();
  RedisDatastore = require_RedisDatastore();
  Events = require_Events();
  States = require_States();
  Sync = require_Sync();
  Bottleneck = function() {

    class Bottleneck2 {
      constructor(options2 = {}, ...invalid) {
        var storeInstanceOptions, storeOptions;
        this._addToQueue = this._addToQueue.bind(this);
        this._validateOptions(options2, invalid);
        parser.load(options2, this.instanceDefaults, this);
        this._queues = new Queues(NUM_PRIORITIES);
        this._scheduled = {};
        this._states = new States(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : []));
        this._limiter = null;
        this.Events = new Events(this);
        this._submitLock = new Sync("submit", this.Promise);
        this._registerLock = new Sync("register", this.Promise);
        storeOptions = parser.load(options2, this.storeDefaults, {});
        this._store = function() {
          if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null) {
            storeInstanceOptions = parser.load(options2, this.redisStoreDefaults, {});
            return new RedisDatastore(this, storeOptions, storeInstanceOptions);
          } else if (this.datastore === "local") {
            storeInstanceOptions = parser.load(options2, this.localStoreDefaults, {});
            return new LocalDatastore(this, storeOptions, storeInstanceOptions);
          } else {
            throw new Bottleneck2.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
          }
        }.call(this);
        this._queues.on("leftzero", () => {
          var ref;
          return (ref = this._store.heartbeat) != null ? typeof ref.ref === "function" ? ref.ref() : undefined : undefined;
        });
        this._queues.on("zero", () => {
          var ref;
          return (ref = this._store.heartbeat) != null ? typeof ref.unref === "function" ? ref.unref() : undefined : undefined;
        });
      }
      _validateOptions(options2, invalid) {
        if (!(options2 != null && typeof options2 === "object" && invalid.length === 0)) {
          throw new Bottleneck2.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
        }
      }
      ready() {
        return this._store.ready;
      }
      clients() {
        return this._store.clients;
      }
      channel() {
        return `b_${this.id}`;
      }
      channel_client() {
        return `b_${this.id}_${this._store.clientId}`;
      }
      publish(message) {
        return this._store.__publish__(message);
      }
      disconnect(flush = true) {
        return this._store.__disconnect__(flush);
      }
      chain(_limiter) {
        this._limiter = _limiter;
        return this;
      }
      queued(priority) {
        return this._queues.queued(priority);
      }
      clusterQueued() {
        return this._store.__queued__();
      }
      empty() {
        return this.queued() === 0 && this._submitLock.isEmpty();
      }
      running() {
        return this._store.__running__();
      }
      done() {
        return this._store.__done__();
      }
      jobStatus(id) {
        return this._states.jobStatus(id);
      }
      jobs(status) {
        return this._states.statusJobs(status);
      }
      counts() {
        return this._states.statusCounts();
      }
      _randomIndex() {
        return Math.random().toString(36).slice(2);
      }
      check(weight = 1) {
        return this._store.__check__(weight);
      }
      _clearGlobalState(index) {
        if (this._scheduled[index] != null) {
          clearTimeout(this._scheduled[index].expiration);
          delete this._scheduled[index];
          return true;
        } else {
          return false;
        }
      }
      _free(index, job, options2, eventInfo) {
        var _this = this;
        return _asyncToGenerator(function* () {
          var e, running;
          try {
            var _ref = yield _this._store.__free__(index, options2.weight);
            running = _ref.running;
            _this.Events.trigger("debug", `Freed ${options2.id}`, eventInfo);
            if (running === 0 && _this.empty()) {
              return _this.Events.trigger("idle");
            }
          } catch (error1) {
            e = error1;
            return _this.Events.trigger("error", e);
          }
        })();
      }
      _run(index, job, wait) {
        var clearGlobalState, free, run;
        job.doRun();
        clearGlobalState = this._clearGlobalState.bind(this, index);
        run = this._run.bind(this, index, job);
        free = this._free.bind(this, index, job);
        return this._scheduled[index] = {
          timeout: setTimeout(() => {
            return job.doExecute(this._limiter, clearGlobalState, run, free);
          }, wait),
          expiration: job.options.expiration != null ? setTimeout(function() {
            return job.doExpire(clearGlobalState, run, free);
          }, wait + job.options.expiration) : undefined,
          job
        };
      }
      _drainOne(capacity) {
        return this._registerLock.schedule(() => {
          var args, index, next, options2, queue;
          if (this.queued() === 0) {
            return this.Promise.resolve(null);
          }
          queue = this._queues.getFirst();
          var _next2 = next = queue.first();
          options2 = _next2.options;
          args = _next2.args;
          if (capacity != null && options2.weight > capacity) {
            return this.Promise.resolve(null);
          }
          this.Events.trigger("debug", `Draining ${options2.id}`, {
            args,
            options: options2
          });
          index = this._randomIndex();
          return this._store.__register__(index, options2.weight, options2.expiration).then(({
            success,
            wait,
            reservoir
          }) => {
            var empty;
            this.Events.trigger("debug", `Drained ${options2.id}`, {
              success,
              args,
              options: options2
            });
            if (success) {
              queue.shift();
              empty = this.empty();
              if (empty) {
                this.Events.trigger("empty");
              }
              if (reservoir === 0) {
                this.Events.trigger("depleted", empty);
              }
              this._run(index, next, wait);
              return this.Promise.resolve(options2.weight);
            } else {
              return this.Promise.resolve(null);
            }
          });
        });
      }
      _drainAll(capacity, total = 0) {
        return this._drainOne(capacity).then((drained) => {
          var newCapacity;
          if (drained != null) {
            newCapacity = capacity != null ? capacity - drained : capacity;
            return this._drainAll(newCapacity, total + drained);
          } else {
            return this.Promise.resolve(total);
          }
        }).catch((e) => {
          return this.Events.trigger("error", e);
        });
      }
      _dropAllQueued(message) {
        return this._queues.shiftAll(function(job) {
          return job.doDrop({
            message
          });
        });
      }
      stop(options2 = {}) {
        var done, waitForExecuting;
        options2 = parser.load(options2, this.stopDefaults);
        waitForExecuting = (at) => {
          var finished;
          finished = () => {
            var counts;
            counts = this._states.counts;
            return counts[0] + counts[1] + counts[2] + counts[3] === at;
          };
          return new this.Promise((resolve, reject) => {
            if (finished()) {
              return resolve();
            } else {
              return this.on("done", () => {
                if (finished()) {
                  this.removeAllListeners("done");
                  return resolve();
                }
              });
            }
          });
        };
        done = options2.dropWaitingJobs ? (this._run = function(index, next) {
          return next.doDrop({
            message: options2.dropErrorMessage
          });
        }, this._drainOne = () => {
          return this.Promise.resolve(null);
        }, this._registerLock.schedule(() => {
          return this._submitLock.schedule(() => {
            var k, ref, v;
            ref = this._scheduled;
            for (k in ref) {
              v = ref[k];
              if (this.jobStatus(v.job.options.id) === "RUNNING") {
                clearTimeout(v.timeout);
                clearTimeout(v.expiration);
                v.job.doDrop({
                  message: options2.dropErrorMessage
                });
              }
            }
            this._dropAllQueued(options2.dropErrorMessage);
            return waitForExecuting(0);
          });
        })) : this.schedule({
          priority: NUM_PRIORITIES - 1,
          weight: 0
        }, () => {
          return waitForExecuting(1);
        });
        this._receive = function(job) {
          return job._reject(new Bottleneck2.prototype.BottleneckError(options2.enqueueErrorMessage));
        };
        this.stop = () => {
          return this.Promise.reject(new Bottleneck2.prototype.BottleneckError("stop() has already been called"));
        };
        return done;
      }
      _addToQueue(job) {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          var args, blocked, error, options2, reachedHWM, shifted, strategy;
          args = job.args;
          options2 = job.options;
          try {
            var _ref2 = yield _this2._store.__submit__(_this2.queued(), options2.weight);
            reachedHWM = _ref2.reachedHWM;
            blocked = _ref2.blocked;
            strategy = _ref2.strategy;
          } catch (error1) {
            error = error1;
            _this2.Events.trigger("debug", `Could not queue ${options2.id}`, {
              args,
              options: options2,
              error
            });
            job.doDrop({
              error
            });
            return false;
          }
          if (blocked) {
            job.doDrop();
            return true;
          } else if (reachedHWM) {
            shifted = strategy === Bottleneck2.prototype.strategy.LEAK ? _this2._queues.shiftLastFrom(options2.priority) : strategy === Bottleneck2.prototype.strategy.OVERFLOW_PRIORITY ? _this2._queues.shiftLastFrom(options2.priority + 1) : strategy === Bottleneck2.prototype.strategy.OVERFLOW ? job : undefined;
            if (shifted != null) {
              shifted.doDrop();
            }
            if (shifted == null || strategy === Bottleneck2.prototype.strategy.OVERFLOW) {
              if (shifted == null) {
                job.doDrop();
              }
              return reachedHWM;
            }
          }
          job.doQueue(reachedHWM, blocked);
          _this2._queues.push(job);
          yield _this2._drainAll();
          return reachedHWM;
        })();
      }
      _receive(job) {
        if (this._states.jobStatus(job.options.id) != null) {
          job._reject(new Bottleneck2.prototype.BottleneckError(`A job with the same id already exists (id=${job.options.id})`));
          return false;
        } else {
          job.doReceive();
          return this._submitLock.schedule(this._addToQueue, job);
        }
      }
      submit(...args) {
        var cb, fn, job, options2, ref, ref1, task;
        if (typeof args[0] === "function") {
          var _ref3, _ref4, _splice$call, _splice$call2;
          ref = args, _ref3 = ref, _ref4 = _toArray(_ref3), fn = _ref4[0], args = _ref4.slice(1), _splice$call = splice.call(args, -1), _splice$call2 = _slicedToArray(_splice$call, 1), cb = _splice$call2[0];
          options2 = parser.load({}, this.jobDefaults);
        } else {
          var _ref5, _ref6, _splice$call3, _splice$call4;
          ref1 = args, _ref5 = ref1, _ref6 = _toArray(_ref5), options2 = _ref6[0], fn = _ref6[1], args = _ref6.slice(2), _splice$call3 = splice.call(args, -1), _splice$call4 = _slicedToArray(_splice$call3, 1), cb = _splice$call4[0];
          options2 = parser.load(options2, this.jobDefaults);
        }
        task = (...args2) => {
          return new this.Promise(function(resolve, reject) {
            return fn(...args2, function(...args3) {
              return (args3[0] != null ? reject : resolve)(args3);
            });
          });
        };
        job = new Job(task, args, options2, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
        job.promise.then(function(args2) {
          return typeof cb === "function" ? cb(...args2) : undefined;
        }).catch(function(args2) {
          if (Array.isArray(args2)) {
            return typeof cb === "function" ? cb(...args2) : undefined;
          } else {
            return typeof cb === "function" ? cb(args2) : undefined;
          }
        });
        return this._receive(job);
      }
      schedule(...args) {
        var job, options2, task;
        if (typeof args[0] === "function") {
          var _args = args;
          var _args2 = _toArray(_args);
          task = _args2[0];
          args = _args2.slice(1);
          options2 = {};
        } else {
          var _args3 = args;
          var _args4 = _toArray(_args3);
          options2 = _args4[0];
          task = _args4[1];
          args = _args4.slice(2);
        }
        job = new Job(task, args, options2, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
        this._receive(job);
        return job.promise;
      }
      wrap(fn) {
        var schedule, wrapped;
        schedule = this.schedule.bind(this);
        wrapped = function wrapped(...args) {
          return schedule(fn.bind(this), ...args);
        };
        wrapped.withOptions = function(options2, ...args) {
          return schedule(options2, fn, ...args);
        };
        return wrapped;
      }
      updateSettings(options2 = {}) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          yield _this3._store.__updateSettings__(parser.overwrite(options2, _this3.storeDefaults));
          parser.overwrite(options2, _this3.instanceDefaults, _this3);
          return _this3;
        })();
      }
      currentReservoir() {
        return this._store.__currentReservoir__();
      }
      incrementReservoir(incr = 0) {
        return this._store.__incrementReservoir__(incr);
      }
    }
    Bottleneck2.default = Bottleneck2;
    Bottleneck2.Events = Events;
    Bottleneck2.version = Bottleneck2.prototype.version = require_version().version;
    Bottleneck2.strategy = Bottleneck2.prototype.strategy = {
      LEAK: 1,
      OVERFLOW: 2,
      OVERFLOW_PRIORITY: 4,
      BLOCK: 3
    };
    Bottleneck2.BottleneckError = Bottleneck2.prototype.BottleneckError = require_BottleneckError();
    Bottleneck2.Group = Bottleneck2.prototype.Group = require_Group();
    Bottleneck2.RedisConnection = Bottleneck2.prototype.RedisConnection = require_RedisConnection();
    Bottleneck2.IORedisConnection = Bottleneck2.prototype.IORedisConnection = require_IORedisConnection();
    Bottleneck2.Batcher = Bottleneck2.prototype.Batcher = require_Batcher();
    Bottleneck2.prototype.jobDefaults = {
      priority: DEFAULT_PRIORITY,
      weight: 1,
      expiration: null,
      id: "<no-id>"
    };
    Bottleneck2.prototype.storeDefaults = {
      maxConcurrent: null,
      minTime: 0,
      highWater: null,
      strategy: Bottleneck2.prototype.strategy.LEAK,
      penalty: null,
      reservoir: null,
      reservoirRefreshInterval: null,
      reservoirRefreshAmount: null,
      reservoirIncreaseInterval: null,
      reservoirIncreaseAmount: null,
      reservoirIncreaseMaximum: null
    };
    Bottleneck2.prototype.localStoreDefaults = {
      Promise,
      timeout: null,
      heartbeatInterval: 250
    };
    Bottleneck2.prototype.redisStoreDefaults = {
      Promise,
      timeout: null,
      heartbeatInterval: 5000,
      clientTimeout: 1e4,
      Redis: null,
      clientOptions: {},
      clusterNodes: null,
      clearDatastore: false,
      connection: null
    };
    Bottleneck2.prototype.instanceDefaults = {
      datastore: "local",
      connection: null,
      id: "<no-id>",
      rejectOnDrop: true,
      trackDoneStatus: false,
      Promise
    };
    Bottleneck2.prototype.stopDefaults = {
      enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
      dropWaitingJobs: true,
      dropErrorMessage: "This limiter has been stopped."
    };
    return Bottleneck2;
  }.call(undefined);
  module.exports = Bottleneck;
});

// src/constants/traits.ts
var VisualTraitType;
(function(VisualTraitType2) {
  VisualTraitType2["BACKGROUND"] = "Background";
  VisualTraitType2["CLASS"] = "Class";
  VisualTraitType2["BODY"] = "Body";
  VisualTraitType2["HEAD"] = "Head";
  VisualTraitType2["EYES"] = "Eyes";
  VisualTraitType2["BACK"] = "Back";
  VisualTraitType2["MOUTH"] = "Mouth";
})(VisualTraitType || (VisualTraitType = {}));
var MetaTraitType;
(function(MetaTraitType2) {
  MetaTraitType2["LEVEL"] = "Level";
})(MetaTraitType || (MetaTraitType = {}));
var VISUAL_TRAITS = [
  VisualTraitType.BACKGROUND,
  VisualTraitType.CLASS,
  VisualTraitType.BODY,
  VisualTraitType.HEAD,
  VisualTraitType.BACK,
  VisualTraitType.MOUTH
];
var META_TRAITS = [MetaTraitType.LEVEL];
var TRAIT_TYPES = [...VISUAL_TRAITS, ...META_TRAITS];
var BaseClass;
(function(BaseClass2) {
  BaseClass2["HUMANOID"] = "Humanoid";
  BaseClass2["PHANTOM"] = "Phantom";
  BaseClass2["DRAGON"] = "Dragon";
  BaseClass2["GOLEM"] = "Golem";
})(BaseClass || (BaseClass = {}));
var BASE_CLASSES = [BaseClass.HUMANOID, BaseClass.PHANTOM, BaseClass.DRAGON, BaseClass.GOLEM];
var Background;
(function(Background2) {
  Background2["GRAY"] = "Gray";
  Background2["LIGHT_BLUE"] = "Light Blue";
  Background2["ORANGE"] = "Orange";
  Background2["RED"] = "Red";
  Background2["GREEN"] = "Green";
  Background2["LIGHT_RED"] = "Light Red";
  Background2["PURPLE"] = "Purple";
  Background2["BLUE"] = "Blue";
  Background2["LIGHT_PURPLE"] = "Light Purple";
  Background2["TEAL"] = "Teal";
  Background2["DARK"] = "Dark";
  Background2["GOLD"] = "Gold";
  Background2["POTR"] = "POTR";
})(Background || (Background = {}));
var Class;
(function(Class2) {
  Class2["BERSERKER"] = "Berserker";
  Class2["RANGER"] = "Ranger";
  Class2["WIZARD"] = "Wizard";
  Class2["CRUSADER"] = "Crusader";
  Class2["NECROMANCER"] = "Necromancer";
  Class2["ASSASSIN"] = "Assassin";
  Class2["PHANTOM"] = "Phantom";
  Class2["ARCHANGEL"] = "Archangel";
  Class2["GOLEM"] = "Golem";
  Class2["DRAGON"] = "Dragon";
})(Class || (Class = {}));
var HumanoidBody;
(function(HumanoidBody2) {
  HumanoidBody2["NONE"] = "None";
  HumanoidBody2["BEAST_HIDE"] = "Beast Hide";
  HumanoidBody2["LIGHT_ARMOR"] = "Light Armor";
  HumanoidBody2["WIZARD_ROBE"] = "Wizard Robe";
  HumanoidBody2["SHADOW_ARMOR"] = "Shadow Armor";
  HumanoidBody2["SKULLHIRT"] = "Skull Shirt";
  HumanoidBody2["PLATE_ARMOR"] = "Plate Armor";
  HumanoidBody2["DRAGONHIDE"] = "Dragonhide";
  HumanoidBody2["FLAME"] = "Flame";
  HumanoidBody2["FROST"] = "Frost";
  HumanoidBody2["GOD_ARMOR"] = "God Armor";
  HumanoidBody2["ANGEL_LIGHT"] = "Angel Light";
  HumanoidBody2["RADIOACTIVE"] = "Radioactive";
})(HumanoidBody || (HumanoidBody = {}));
var PhantomBody;
(function(PhantomBody2) {
  PhantomBody2["CALM"] = "Calm";
  PhantomBody2["AGGRESSIVE"] = "Aggressive";
  PhantomBody2["GRACIOUS"] = "Gracious";
  PhantomBody2["DISTURBED"] = "Disturbed";
})(PhantomBody || (PhantomBody = {}));
var DragonBody;
(function(DragonBody2) {
  DragonBody2["FLAME"] = "Flame";
  DragonBody2["FROST"] = "Frost";
  DragonBody2["SAND"] = "Sand";
  DragonBody2["STEEL"] = "Steel";
  DragonBody2["GOLD"] = "Gold";
  DragonBody2["RADIOACTIVE"] = "Radioactive";
  DragonBody2["ANDIENT"] = "Ancient";
})(DragonBody || (DragonBody = {}));
var GolemBody;
(function(GolemBody2) {
  GolemBody2["FLAME"] = "Flame";
  GolemBody2["FROST"] = "Frost";
  GolemBody2["SAND"] = "Sand";
  GolemBody2["OBSIDIAN"] = "Obsidian";
  GolemBody2["GOLD"] = "Gold";
  GolemBody2["GEMSTONE"] = "Gemstone";
  GolemBody2["CRYSTAL"] = "Crystal";
})(GolemBody || (GolemBody = {}));
var HumanoidHead;
(function(HumanoidHead2) {
  HumanoidHead2["BLOND_HAIR"] = "Blond Hair";
  HumanoidHead2["BROWN_HAIR"] = "Brown Hair";
  HumanoidHead2["NONE"] = "None";
  HumanoidHead2["VIKING"] = "Viking";
  HumanoidHead2["HEADBAND"] = "Headband";
  HumanoidHead2["BANDANA"] = "Bandana";
  HumanoidHead2["BUZZCUT"] = "Buzzcut";
  HumanoidHead2["WIZARD_HAT"] = "Wizard Hat";
  HumanoidHead2["MANGO"] = "Manga";
  HumanoidHead2["FLAMING"] = "Flaming";
  HumanoidHead2["HALO"] = "Halo";
  HumanoidHead2["DEMON"] = "Demon";
  HumanoidHead2["WINGED_HELM"] = "Winged Helm";
  HumanoidHead2["THOUGHTS"] = "Thoughts";
  HumanoidHead2["JESTER"] = "Jester";
  HumanoidHead2["PARTY_HAT"] = "Party Hat";
  HumanoidHead2["GANDALF"] = "Gandalf";
  HumanoidHead2["ROBINHOOD"] = "Robinhood";
  HumanoidHead2["SANTA"] = "Santa";
  HumanoidHead2["CROWN"] = "Crown";
})(HumanoidHead || (HumanoidHead = {}));
var DragonHead;
(function(DragonHead2) {
  DragonHead2["NONE"] = "None";
  DragonHead2["HORNS"] = "Horns";
  DragonHead2["DARK_HORNS"] = "Dark Horns";
  DragonHead2["BLOODY_HORNS"] = "Bloody Horns";
  DragonHead2["THOUGHTS"] = "Thoughts";
  DragonHead2["HALO"] = "Halo";
  DragonHead2["HORN"] = "Horn";
  DragonHead2["CROWN"] = "Crown";
  DragonHead2["ANCIENT_HORN"] = "Ancient Horns";
})(DragonHead || (DragonHead = {}));
var GolemHead;
(function(GolemHead2) {
  GolemHead2["NONE"] = "None";
  GolemHead2["THOUGHTS"] = "Thoughts";
  GolemHead2["HALO"] = "Halo";
  GolemHead2["HORN"] = "Horn";
  GolemHead2["CROWN"] = "Crown";
  GolemHead2["CRYSTAL_HORN"] = "Crystal Horn";
})(GolemHead || (GolemHead = {}));
var HumanoidEyes;
(function(HumanoidEyes2) {
  HumanoidEyes2[HumanoidEyes2["Black"] = 0] = "Black";
  HumanoidEyes2[HumanoidEyes2["Blue"] = 1] = "Blue";
  HumanoidEyes2[HumanoidEyes2["Stone"] = 2] = "Stone";
  HumanoidEyes2[HumanoidEyes2["Light"] = 3] = "Light";
  HumanoidEyes2[HumanoidEyes2["Laser"] = 4] = "Laser";
  HumanoidEyes2[HumanoidEyes2["Glasses"] = 5] = "Glasses";
  HumanoidEyes2[HumanoidEyes2["VR"] = 6] = "VR";
  HumanoidEyes2[HumanoidEyes2["X"] = 7] = "X";
  HumanoidEyes2[HumanoidEyes2["Closed"] = 8] = "Closed";
  HumanoidEyes2[HumanoidEyes2["One Eye"] = 9] = "One Eye";
  HumanoidEyes2[HumanoidEyes2["3D"] = 10] = "3D";
  HumanoidEyes2[HumanoidEyes2["Wink"] = 11] = "Wink";
  HumanoidEyes2[HumanoidEyes2["Crystal"] = 12] = "Crystal";
  HumanoidEyes2[HumanoidEyes2["Ancient"] = 13] = "Ancient";
  HumanoidEyes2[HumanoidEyes2["Thug Life"] = 14] = "Thug Life";
})(HumanoidEyes || (HumanoidEyes = {}));
var DragonEyes;
(function(DragonEyes2) {
  DragonEyes2[DragonEyes2["Black"] = 0] = "Black";
  DragonEyes2[DragonEyes2["Closed"] = 1] = "Closed";
  DragonEyes2[DragonEyes2["X"] = 2] = "X";
  DragonEyes2[DragonEyes2["Thug Life"] = 3] = "Thug Life";
})(DragonEyes || (DragonEyes = {}));
var GolemEyes;
(function(GolemEyes2) {
  GolemEyes2[GolemEyes2["Black"] = 0] = "Black";
  GolemEyes2[GolemEyes2["Closed"] = 1] = "Closed";
  GolemEyes2[GolemEyes2["X"] = 2] = "X";
  GolemEyes2[GolemEyes2["Thug Life"] = 3] = "Thug Life";
})(GolemEyes || (GolemEyes = {}));
var HumanoidMouth;
(function(HumanoidMouth2) {
  HumanoidMouth2[HumanoidMouth2["Normal"] = 0] = "Normal";
  HumanoidMouth2[HumanoidMouth2["Tongue"] = 1] = "Tongue";
  HumanoidMouth2[HumanoidMouth2["Frown"] = 2] = "Frown";
  HumanoidMouth2[HumanoidMouth2["Open"] = 3] = "Open";
  HumanoidMouth2[HumanoidMouth2["Smile"] = 4] = "Smile";
  HumanoidMouth2[HumanoidMouth2["Joint"] = 5] = "Joint";
  HumanoidMouth2[HumanoidMouth2["Tooth"] = 6] = "Tooth";
})(HumanoidMouth || (HumanoidMouth = {}));
var DragonMouth;
(function(DragonMouth2) {
  DragonMouth2[DragonMouth2["Normal"] = 0] = "Normal";
  DragonMouth2[DragonMouth2["Fangs"] = 1] = "Fangs";
  DragonMouth2[DragonMouth2["Dark Fangs"] = 2] = "Dark Fangs";
  DragonMouth2[DragonMouth2["Bloody Fangs"] = 3] = "Bloody Fangs";
  DragonMouth2[DragonMouth2["Gold Fangs"] = 4] = "Gold Fangs";
  DragonMouth2[DragonMouth2["Tongue"] = 5] = "Tongue";
  DragonMouth2[DragonMouth2["Joint"] = 6] = "Joint";
  DragonMouth2[DragonMouth2["Ancient Fangs"] = 7] = "Ancient Fangs";
})(DragonMouth || (DragonMouth = {}));
var GolemMouth;
(function(GolemMouth2) {
  GolemMouth2[GolemMouth2["Normal"] = 0] = "Normal";
  GolemMouth2[GolemMouth2["Smile"] = 1] = "Smile";
  GolemMouth2[GolemMouth2["Tongue"] = 2] = "Tongue";
  GolemMouth2[GolemMouth2["Frown"] = 3] = "Frown";
  GolemMouth2[GolemMouth2["Joint"] = 4] = "Joint";
  GolemMouth2[GolemMouth2["Tooth"] = 5] = "Tooth";
})(GolemMouth || (GolemMouth = {}));
var HumanoidBack;
(function(HumanoidBack2) {
  HumanoidBack2[HumanoidBack2["None"] = 0] = "None";
  HumanoidBack2[HumanoidBack2["Sword"] = 1] = "Sword";
  HumanoidBack2[HumanoidBack2["Common Companion"] = 2] = "Common Companion";
  HumanoidBack2[HumanoidBack2["Rare Companion"] = 3] = "Rare Companion";
  HumanoidBack2[HumanoidBack2["Angel Wings"] = 4] = "Angel Wings";
  HumanoidBack2[HumanoidBack2["Shadow"] = 5] = "Shadow";
  HumanoidBack2[HumanoidBack2["Ultra Rare Companion"] = 6] = "Ultra Rare Companion";
  HumanoidBack2[HumanoidBack2["Legendary Companion"] = 7] = "Legendary Companion";
})(HumanoidBack || (HumanoidBack = {}));
var DragonBack;
(function(DragonBack2) {
  DragonBack2[DragonBack2["Dragon Wings"] = 0] = "Dragon Wings";
  DragonBack2[DragonBack2["Common Companion"] = 1] = "Common Companion";
  DragonBack2[DragonBack2["None"] = 2] = "None";
  DragonBack2[DragonBack2["Rare Companion"] = 3] = "Rare Companion";
  DragonBack2[DragonBack2["Ultra Rare Companion"] = 4] = "Ultra Rare Companion";
  DragonBack2[DragonBack2["Legendary Companion"] = 5] = "Legendary Companion";
})(DragonBack || (DragonBack = {}));
var GolemBack;
(function(GolemBack2) {
  GolemBack2[GolemBack2["None"] = 0] = "None";
  GolemBack2[GolemBack2["Spikes"] = 1] = "Spikes";
  GolemBack2[GolemBack2["Common Companion"] = 2] = "Common Companion";
  GolemBack2[GolemBack2["Rare Companion"] = 3] = "Rare Companion";
  GolemBack2[GolemBack2["Ultra Rare Companion"] = 4] = "Ultra Rare Companion";
  GolemBack2[GolemBack2["Legendary Companion"] = 5] = "Legendary Companion";
})(GolemBack || (GolemBack = {}));
// src/constants/contract/coin_shop.ts
var CoinShopView;
(function(CoinShopView2) {
  CoinShopView2["COIN_SUPPLY"] = "coin_supply";
  CoinShopView2["COIN_PRICES"] = "coin_prices";
  CoinShopView2["IS_PAUSED"] = "is_paused";
})(CoinShopView || (CoinShopView = {}));
var CoinShopApi;
(function(CoinShopApi2) {
  CoinShopApi2["RESTOCK"] = "restock";
  CoinShopApi2["SET_PRICES"] = "set_prices";
  CoinShopApi2["TERMINATE"] = "terminate";
  CoinShopApi2["TOGGLE_PAUSE"] = "toggle_pause";
  CoinShopApi2["WITHDRAW"] = "withdraw";
})(CoinShopApi || (CoinShopApi = {}));
var CoinShopEvent;
(function(CoinShopEvent2) {
  CoinShopEvent2["RESTOCK"] = "restock";
  CoinShopEvent2["PURCHASE"] = "purchase";
  CoinShopEvent2["PRICE_CHANGE"] = "price_change";
  CoinShopEvent2["WITHDRAW"] = "withdraw";
  CoinShopEvent2["TERMINATE"] = "terminate";
})(CoinShopEvent || (CoinShopEvent = {}));
// src/constants/contract/summon.ts
var SummonStatus;
(function(SummonStatus2) {
  SummonStatus2["PREPARING"] = "PREPARING";
  SummonStatus2["PAYING"] = "PAYING";
  SummonStatus2["SUMMONING"] = "SUMMONING";
  SummonStatus2["CLAIMING"] = "CLAIMING";
})(SummonStatus || (SummonStatus = {}));
var SummonEvent;
(function(SummonEvent2) {
  SummonEvent2["STATUS"] = "status";
  SummonEvent2["RESULT"] = "result";
})(SummonEvent || (SummonEvent = {}));

// src/constants/contract/index.ts
var Participant;
(function(Participant2) {
  Participant2["ADMIN"] = "Admin";
  Participant2["SUMMONER"] = "Summoner";
  Participant2["DEPLOYER"] = "Deployer";
})(Participant || (Participant = {}));
var Result;
(function(Result2) {
  Result2["SUCCESS"] = "SUCCESS";
  Result2["FAILURE"] = "FAILURE";
})(Result || (Result = {}));
var ContractName;
(function(ContractName2) {
  ContractName2["COIN_SHOP"] = "coin_shop";
  ContractName2["SUMMON"] = "summon";
})(ContractName || (ContractName = {}));
// src/constants/asa-ids.ts
var asa_ids_default = {
  TestNet: {
    coin: [162802009, 162802008, 162802010],
    potr: [
      162802027,
      162802026,
      162802042,
      162802049,
      162802070,
      162802072,
      162802079,
      162802048,
      162802032,
      162802085,
      162802075,
      162802041,
      162802039,
      162802057,
      162802040,
      162802053,
      162802071,
      162802030,
      162802051,
      162802063,
      162802065,
      162802060,
      162802061,
      162802082,
      162802034,
      162802029,
      162802077,
      162802055,
      162802038,
      162802073,
      162802028,
      162802074,
      162802035,
      162802066,
      162802062,
      162802047,
      162802067,
      162802059,
      162802052,
      162802031,
      162802054,
      162802076,
      162802046,
      162802033,
      162802078,
      162802043,
      162802044,
      162802056,
      162802064,
      162802058,
      162802037,
      162802036,
      162802050,
      162802045,
      162802091,
      162802087,
      162802080,
      162802081,
      162802086,
      162802083,
      162802090,
      162802084,
      162802122,
      162802101,
      162802114,
      162802131,
      162802124,
      162802096,
      162802104,
      162802106,
      162802107,
      162802130,
      162802095,
      162802126,
      162802143,
      162802100,
      162802097,
      162802112,
      162802098,
      162802102,
      162802103,
      162802134,
      162802093,
      162802117,
      162802105,
      162802136,
      162802118,
      162802120,
      162802111,
      162802099,
      162802094,
      162802119,
      162802135,
      162802123,
      162802108,
      162802133,
      162802132,
      162802110,
      162802147,
      162802115,
      162802140,
      162802153,
      162802150,
      162802151,
      162802109,
      162802141,
      162802149,
      162802138,
      162802148,
      162802127,
      162802137,
      162802142,
      162802154,
      162802152,
      162802144,
      162802128,
      162802125,
      162802116,
      162802121,
      162802129,
      162802139,
      162802113,
      162802169,
      162802175,
      162802171,
      162802181,
      162802168,
      162802178,
      162802180,
      162802155,
      162802158,
      162802163,
      162802173,
      162802179,
      162802159,
      162802184,
      162802161,
      162802165,
      162802182,
      162802164,
      162802157,
      162802162,
      162802170,
      162802177,
      162802183,
      162802160,
      162802174,
      162802166,
      162802167,
      162802156,
      162802172,
      162802176,
      162802221,
      162802224,
      162802216,
      162802210,
      162802199,
      162802214,
      162802222,
      162802217,
      162802201,
      162802198,
      162802226,
      162802197,
      162802206,
      162802212,
      162802219,
      162802203,
      162802218,
      162802213,
      162802209,
      162802208,
      162802220,
      162802215,
      162802200,
      162802211,
      162802207,
      162802204,
      162802202,
      162802223,
      162802205,
      162802225,
      162802254,
      162802232,
      162802245,
      162802235,
      162802251,
      162802244,
      162802248,
      162802252,
      162802237,
      162802229,
      162802246,
      162802256,
      162802230,
      162802228,
      162802238,
      162802242,
      162802241,
      162802247,
      162802253,
      162802239,
      162802250,
      162802236,
      162802234,
      162802227,
      162802255,
      162802243,
      162802233,
      162802249,
      162802240,
      162802231,
      162802265,
      162802283,
      162802268,
      162802278,
      162802262,
      162802273,
      162802267,
      162802270,
      162802274,
      162802287,
      162802281,
      162802282,
      162802279,
      162802263,
      162802280,
      162802264,
      162802284,
      162802259,
      162802269,
      162802277,
      162802272,
      162802285,
      162802260,
      162802276,
      162802261,
      162802289,
      162802288,
      162802275,
      162802286,
      162802266,
      162802298,
      162802299,
      162802316,
      162802290,
      162802300,
      162802315,
      162802295,
      162802309,
      162802291,
      162802311,
      162802306,
      162802319,
      162802318,
      162802304,
      162802305,
      162802302,
      162802317,
      162802308,
      162802301,
      162802297,
      162802296,
      162802307,
      162802294,
      162802303,
      162802314,
      162802310,
      162802292,
      162802313,
      162802312,
      162802293,
      162802333,
      162802325,
      162802348,
      162802331,
      162802341,
      162802337,
      162802328,
      162802351,
      162802336,
      162802345,
      162802350,
      162802334,
      162802332,
      162802352,
      162802338,
      162802327,
      162802335,
      162802343,
      162802329,
      162802344,
      162802326,
      162802324,
      162802330,
      162802339,
      162802346,
      162802349,
      162802323,
      162802340,
      162802342,
      162802347,
      162802371,
      162802383,
      162802379,
      162802363,
      162802370,
      162802369,
      162802360,
      162802366,
      162802359,
      162802374,
      162802365,
      162802376,
      162802354,
      162802378,
      162802356,
      162802375,
      162802367,
      162802372,
      162802377,
      162802381,
      162802358,
      162802364,
      162802357,
      162802368,
      162802362,
      162802382,
      162802373,
      162802355,
      162802380,
      162802361,
      162802394,
      162802413,
      162802402,
      162802397,
      162802405,
      162802390,
      162802408,
      162802415,
      162802388,
      162802386,
      162802399,
      162802400,
      162802411,
      162802403,
      162802412,
      162802392,
      162802391,
      162802404,
      162802414,
      162802409,
      162802401,
      162802406,
      162802395,
      162802407,
      162802396,
      162802387,
      162802410,
      162802398,
      162802393,
      162802389,
      162802433,
      162802419,
      162802427,
      162802440,
      162802430,
      162802436,
      162802431,
      162802435,
      162802424,
      162802418,
      162802439,
      162802442,
      162802443,
      162802429,
      162802441,
      162802444,
      162802437,
      162802432,
      162802420,
      162802434,
      162802426,
      162802425,
      162802438,
      162802417,
      162802428,
      162802421,
      162802423,
      162802445,
      162802422,
      162802416,
      162802475,
      162802448,
      162802484,
      162802486,
      162802478,
      162802470,
      162802468,
      162802474,
      162802479,
      162802449,
      162802482,
      162802473,
      162802453,
      162802466,
      162802454,
      162802455,
      162802480,
      162802467,
      162802450,
      162802483,
      162802485,
      162802481,
      162802465,
      162802469,
      162802477,
      162802451,
      162802471,
      162802476,
      162802472,
      162802452,
      162802495,
      162802517,
      162802492,
      162802509,
      162802494,
      162802519,
      162802508,
      162802503,
      162802491,
      162802490,
      162802493,
      162802489,
      162802498,
      162802496,
      162802513,
      162802505,
      162802514,
      162802520,
      162802499,
      162802502,
      162802510,
      162802507,
      162802516,
      162802511,
      162802512,
      162802500,
      162802506,
      162802497,
      162802515,
      162802501,
      162802549,
      162802543,
      162802545,
      162802526,
      162802547,
      162802541,
      162802550,
      162802544,
      162802536,
      162802529,
      162802534,
      162802535,
      162802531,
      162802533,
      162802525,
      162802538,
      162802552,
      162802523,
      162802551,
      162802548,
      162802527,
      162802542,
      162802537,
      162802528,
      162802524,
      162802553,
      162802530,
      162802540,
      162802539,
      162802546,
      162802563,
      162802571,
      162802558,
      162802570,
      162802560,
      162802580,
      162802567,
      162802579,
      162802583,
      162802556,
      162802564,
      162802561,
      162802568,
      162802562,
      162802565,
      162802569,
      162802575,
      162802582,
      162802576,
      162802566,
      162802554,
      162802559,
      162802578,
      162802574,
      162802557,
      162802555,
      162802577,
      162802572,
      162802573,
      162802581,
      162802602,
      162802593,
      162802596,
      162802601,
      162802587,
      162802603,
      162802586,
      162802584,
      162802594,
      162802604,
      162802595,
      162802609,
      162802610,
      162802600,
      162802605,
      162802588,
      162802591,
      162802613,
      162802585,
      162802598,
      162802599,
      162802608,
      162802589,
      162802607,
      162802590,
      162802611,
      162802597,
      162802606,
      162802612,
      162802592,
      162802626,
      162802631,
      162802642,
      162802640,
      162802623,
      162802633,
      162802615,
      162802622,
      162802618,
      162802641,
      162802643,
      162802630,
      162802616,
      162802629,
      162802638,
      162802617,
      162802634,
      162802620,
      162802644,
      162802625,
      162802621,
      162802632,
      162802636,
      162802635,
      162802627,
      162802624,
      162802619,
      162802637,
      162802628,
      162802639,
      162802664,
      162802645,
      162802655,
      162802671,
      162802661,
      162802654,
      162802666,
      162802674,
      162802667,
      162802648,
      162802650,
      162802668,
      162802663,
      162802653,
      162802672,
      162802662,
      162802670,
      162802658,
      162802652,
      162802660,
      162802665,
      162802673,
      162802647,
      162802659,
      162802657,
      162802669,
      162802646,
      162802651,
      162802649,
      162802656,
      162802704,
      162802684,
      162802701,
      162802676,
      162802693,
      162802677,
      162802694,
      162802688,
      162802685,
      162802703,
      162802700,
      162802679,
      162802692,
      162802689,
      162802691,
      162802687,
      162802695,
      162802678,
      162802683,
      162802686,
      162802698,
      162802675,
      162802680,
      162802681,
      162802702,
      162802699,
      162802690,
      162802682,
      162802697,
      162802696,
      162802711,
      162802715,
      162802717,
      162802707,
      162802726,
      162802716,
      162802731,
      162802708,
      162802729,
      162802727,
      162802713,
      162802730,
      162802705,
      162802728,
      162802725,
      162802719,
      162802710,
      162802721,
      162802733,
      162802720,
      162802709,
      162802732,
      162802724,
      162802712,
      162802734,
      162802718,
      162802706,
      162802722,
      162802723,
      162802714,
      162802755,
      162802749,
      162802756,
      162802751,
      162802761,
      162802754,
      162802746,
      162802762,
      162802752,
      162802770,
      162802760,
      162802757,
      162802774,
      162802771,
      162802768,
      162802745,
      162802763,
      162802758,
      162802759,
      162802750,
      162802766,
      162802772,
      162802767,
      162802765,
      162802764,
      162802753,
      162802769,
      162802773,
      162802748,
      162802747,
      162802775,
      162802797,
      162802786,
      162802777,
      162802784,
      162802788,
      162802794,
      162802804,
      162802776,
      162802800,
      162802791,
      162802796,
      162802801,
      162802778,
      162802790,
      162802803,
      162802785,
      162802783,
      162802780,
      162802799,
      162802798,
      162802781,
      162802789,
      162802802,
      162802782,
      162802779,
      162802793,
      162802787,
      162802795,
      162802792,
      162802819,
      162802817,
      162802808,
      162802826,
      162802827,
      162802806,
      162802807,
      162802815,
      162802813,
      162802814,
      162802816,
      162802835,
      162802822,
      162802825,
      162802833,
      162802832,
      162802823,
      162802834,
      162802824,
      162802829,
      162802812,
      162802828,
      162802821,
      162802820,
      162802818,
      162802831,
      162802809,
      162802810,
      162802811,
      162802830,
      162802857,
      162802860,
      162802859,
      162802856,
      162802846,
      162802847,
      162802837,
      162802836,
      162802839,
      162802858,
      162802865,
      162802843,
      162802863,
      162802840,
      162802851,
      162802845,
      162802838,
      162802854,
      162802862,
      162802848,
      162802864,
      162802841,
      162802861,
      162802844,
      162802855,
      162802850,
      162802852,
      162802853,
      162802842,
      162802849,
      162802871,
      162802889,
      162802882,
      162802874,
      162802872,
      162802875,
      162802893,
      162802896,
      162802879,
      162802870,
      162802888,
      162802895,
      162802867,
      162802880,
      162802876,
      162802868,
      162802877,
      162802883,
      162802886,
      162802887,
      162802869,
      162802894,
      162802890,
      162802885,
      162802891,
      162802881,
      162802897,
      162802884,
      162802878,
      162802873,
      162802915,
      162802923,
      162802922,
      162802921,
      162802907,
      162802918,
      162802902,
      162802925,
      162802916,
      162802927,
      162802901,
      162802900,
      162802911,
      162802917,
      162802908,
      162802898,
      162802909,
      162802920,
      162802899,
      162802926,
      162802910,
      162802912,
      162802904,
      162802913,
      162802905,
      162802906,
      162802924,
      162802914,
      162802903,
      162802919,
      162802940,
      162802928,
      162802936,
      162802929,
      162802931,
      162802948,
      162802951,
      162802943,
      162802937,
      162802935,
      162802930,
      162802947,
      162802934,
      162802944,
      162802945,
      162802942,
      162802938,
      162802933,
      162802954,
      162802955,
      162802956,
      162802941,
      162802953,
      162802950,
      162802949,
      162802946,
      162802932,
      162802939,
      162802952,
      162802957,
      162802977,
      162802990,
      162802979,
      162802980,
      162802983,
      162802997,
      162802996,
      162802973,
      162802994,
      162802982,
      162802995,
      162802992,
      162802974,
      162802972,
      162802981,
      162802978,
      162802975,
      162802989,
      162802986,
      162802987,
      162802993,
      162802976,
      162802968,
      162802985,
      162802969,
      162802984,
      162802988,
      162802971,
      162802991,
      162802970,
      162803002,
      162803025,
      162803021,
      162803022,
      162803007,
      162803017,
      162803023,
      162803018,
      162803010,
      162803001,
      162803019,
      162803006,
      162803026,
      162803027,
      162803009,
      162803016,
      162803011,
      162803020,
      162803015,
      162803004,
      162803014,
      162803008,
      162803013,
      162803024,
      162802998,
      162803005,
      162803012,
      162803000,
      162803003,
      162802999,
      162803037,
      162803045,
      162803035,
      162803036,
      162803033,
      162803060,
      162803034,
      162803031,
      162803058,
      162803054,
      162803046,
      162803038,
      162803040,
      162803032,
      162803057,
      162803048,
      162803059,
      162803051,
      162803043,
      162803053,
      162803055,
      162803044,
      162803052,
      162803047,
      162803049,
      162803050,
      162803041,
      162803042,
      162803056,
      162803039,
      162803072,
      162803066,
      162803068,
      162803069,
      162803085,
      162803074,
      162803070,
      162803079,
      162803084,
      162803088,
      162803087,
      162803086,
      162803065,
      162803078,
      162803083,
      162803077,
      162803064,
      162803081,
      162803076,
      162803067,
      162803090,
      162803089,
      162803063,
      162803091,
      162803082,
      162803075,
      162803062,
      162803080,
      162803071,
      162803073,
      162803116,
      162803120,
      162803095,
      162803102,
      162803103,
      162803121,
      162803109,
      162803118,
      162803112,
      162803117,
      162803114,
      162803113,
      162803092,
      162803097,
      162803098,
      162803093,
      162803107,
      162803110,
      162803119,
      162803096,
      162803115,
      162803094,
      162803111,
      162803105,
      162803106,
      162803099,
      162803101,
      162803104,
      162803100,
      162803108,
      162803150,
      162803124,
      162803134,
      162803126,
      162803142,
      162803151,
      162803144,
      162803141,
      162803147,
      162803135,
      162803145,
      162803125,
      162803139,
      162803146,
      162803127,
      162803149,
      162803128,
      162803140,
      162803137,
      162803133,
      162803129,
      162803123,
      162803143,
      162803138,
      162803130,
      162803148,
      162803132,
      162803122,
      162803131,
      162803136,
      162803158,
      162803156,
      162803173,
      162803175,
      162803174,
      162803164,
      162803165,
      162803163,
      162803169,
      162803157,
      162803161,
      162803155,
      162803160,
      162803162,
      162803181,
      162803172,
      162803154,
      162803159,
      162803177,
      162803170,
      162803176,
      162803171,
      162803180,
      162803168,
      162803166,
      162803179,
      162803167,
      162803153,
      162803182,
      162803178,
      162803198,
      162803183,
      162803187,
      162803195,
      162803212,
      162803206,
      162803201,
      162803185,
      162803204,
      162803209,
      162803207,
      162803200,
      162803191,
      162803211,
      162803202,
      162803210,
      162803199,
      162803189,
      162803184,
      162803197,
      162803186,
      162803193,
      162803194,
      162803188,
      162803208,
      162803192,
      162803196,
      162803205,
      162803190,
      162803203,
      162803241,
      162803239,
      162803245,
      162803231,
      162803222,
      162803248,
      162803244,
      162803229,
      162803236,
      162803240,
      162803243,
      162803235,
      162803247,
      162803228,
      162803227,
      162803223,
      162803249,
      162803226,
      162803224,
      162803234,
      162803246,
      162803230,
      162803233,
      162803238,
      162803251,
      162803250,
      162803232,
      162803237,
      162803242,
      162803225,
      162803275,
      162803268,
      162803273,
      162803256,
      162803267,
      162803260,
      162803259,
      162803261,
      162803263,
      162803269,
      162803272,
      162803257,
      162803274,
      162803281,
      162803254,
      162803266,
      162803270,
      162803262,
      162803277,
      162803265,
      162803255,
      162803271,
      162803258,
      162803276,
      162803280,
      162803264,
      162803282,
      162803253,
      162803278,
      162803279,
      162803305,
      162803301,
      162803300,
      162803297,
      162803292,
      162803296,
      162803294,
      162803302,
      162803311,
      162803303,
      162803307,
      162803299,
      162803286,
      162803283,
      162803284,
      162803291,
      162803288,
      162803295,
      162803304,
      162803290,
      162803287,
      162803285,
      162803310,
      162803308,
      162803289,
      162803309,
      162803312,
      162803306,
      162803293,
      162803337,
      162803335,
      162803332,
      162803323,
      162803321,
      162803333,
      162803326,
      162803327,
      162803339,
      162803318,
      162803338,
      162803328,
      162803315,
      162803325,
      162803313,
      162803316,
      162803319,
      162803342,
      162803341,
      162803320,
      162803340,
      162803336,
      162803329,
      162803331,
      162803324,
      162803343,
      162803330,
      162803334,
      162803314,
      162803317,
      162803355,
      162803364,
      162803367,
      162803349,
      162803352,
      162803365,
      162803363,
      162803372,
      162803348,
      162803362,
      162803354,
      162803345,
      162803361,
      162803347,
      162803358,
      162803353,
      162803346,
      162803359,
      162803350,
      162803351,
      162803369,
      162803370,
      162803366,
      162803368,
      162803356,
      162803371,
      162803360,
      162803357,
      162803344,
      162803398,
      162803378,
      162803375,
      162803376,
      162803390,
      162803400,
      162803377,
      162803392,
      162803394,
      162803399,
      162803379,
      162803393,
      162803381,
      162803374,
      162803387,
      162803401,
      162803395,
      162803388,
      162803403,
      162803380,
      162803389,
      162803384,
      162803386,
      162803382,
      162803391,
      162803396,
      162803383,
      162803397,
      162803402,
      162803385,
      162803422,
      162803408,
      162803427,
      162803421,
      162803423,
      162803432,
      162803410,
      162803415,
      162803424,
      162803426,
      162803406,
      162803416,
      162803425,
      162803411,
      162803418,
      162803414,
      162803433,
      162803413,
      162803430,
      162803431,
      162803428,
      162803405,
      162803417,
      162803419,
      162803429,
      162803412,
      162803407,
      162803409,
      162803420,
      162803445,
      162803447,
      162803446,
      162803439,
      162803463,
      162803443,
      162803440,
      162803450,
      162803458,
      162803459,
      162803442,
      162803454,
      162803455,
      162803438,
      162803462,
      162803451,
      162803444,
      162803448,
      162803453,
      162803449,
      162803434,
      162803457,
      162803461,
      162803456,
      162803460,
      162803435,
      162803452,
      162803437,
      162803441,
      162803469,
      162803479,
      162803491,
      162803464,
      162803490,
      162803474,
      162803485,
      162803484,
      162803471,
      162803483,
      162803467,
      162803473,
      162803486,
      162803477,
      162803478,
      162803489,
      162803476,
      162803482,
      162803470,
      162803475,
      162803480,
      162803487,
      162803468,
      162803466,
      162803488,
      162803481,
      162803465,
      162803492,
      162803472,
      162803529,
      162803521,
      162803514,
      162803530,
      162803511,
      162803506,
      162803527,
      162803520,
      162803523,
      162803517,
      162803504,
      162803508,
      162803522,
      162803518,
      162803512,
      162803513,
      162803519,
      162803516,
      162803515,
      162803525,
      162803510,
      162803526,
      162803505,
      162803509,
      162803507,
      162803502,
      162803528,
      162803524,
      162803503,
      162803560,
      162803540,
      162803551,
      162803556,
      162803537,
      162803552,
      162803546,
      162803547,
      162803545,
      162803555,
      162803550,
      162803542,
      162803553,
      162803561,
      162803562,
      162803541,
      162803544,
      162803564,
      162803558,
      162803535,
      162803549,
      162803554,
      162803538,
      162803557,
      162803539,
      162803563,
      162803559,
      162803548,
      162803543,
      162803577,
      162803570,
      162803594,
      162803592,
      162803584,
      162803586,
      162803581,
      162803588,
      162803575,
      162803574,
      162803591,
      162803589,
      162803590,
      162803583,
      162803569,
      162803568,
      162803567,
      162803573,
      162803579,
      162803587,
      162803565,
      162803576,
      162803572,
      162803593,
      162803582,
      162803580,
      162803578,
      162803585,
      162803566,
      162803598,
      162803605,
      162803609,
      162803596,
      162803621,
      162803618,
      162803603,
      162803611,
      162803607,
      162803595,
      162803599,
      162803613,
      162803619,
      162803617,
      162803612,
      162803601,
      162803597,
      162803614,
      162803615,
      162803604,
      162803610,
      162803622,
      162803606,
      162803620,
      162803602,
      162803608,
      162803623,
      162803616,
      162803600,
      162803643,
      162803645,
      162803631,
      162803655,
      162803646,
      162803649,
      162803650,
      162803630,
      162803637,
      162803633,
      162803638,
      162803629,
      162803647,
      162803634,
      162803632,
      162803656,
      162803640,
      162803644,
      162803636,
      162803642,
      162803635,
      162803653,
      162803652,
      162803639,
      162803628,
      162803651,
      162803654,
      162803641,
      162803648,
      162803681,
      162803674,
      162803670,
      162803658,
      162803667,
      162803673,
      162803686,
      162803675,
      162803677,
      162803660,
      162803676,
      162803663,
      162803672,
      162803664,
      162803679,
      162803678,
      162803661,
      162803682,
      162803684,
      162803683,
      162803671,
      162803665,
      162803659,
      162803685,
      162803669,
      162803668,
      162803666,
      162803680,
      162803689,
      162803711,
      162803706,
      162803709,
      162803707,
      162803702,
      162803700,
      162803704,
      162803690,
      162803692,
      162803691,
      162803714,
      162803693,
      162803715,
      162803695,
      162803694,
      162803701,
      162803697,
      162803696,
      162803713,
      162803688,
      162803699,
      162803698,
      162803710,
      162803708,
      162803703,
      162803687,
      162803705,
      162803725,
      162803749,
      162803745,
      162803727,
      162803739,
      162803750,
      162803746,
      162803732,
      162803735,
      162803740,
      162803742,
      162803728,
      162803734,
      162803736,
      162803733,
      162803738,
      162803747,
      162803751,
      162803729,
      162803726,
      162803731,
      162803737,
      162803748,
      162803730,
      162803741,
      162803744,
      162803743,
      162803774,
      162803760,
      162803763,
      162803752,
      162803765,
      162803764,
      162803755,
      162803771,
      162803770,
      162803776,
      162803754,
      162803758,
      162803775,
      162803766,
      162803779,
      162803767,
      162803756,
      162803762,
      162803769,
      162803772,
      162803777,
      162803778,
      162803757,
      162803753,
      162803759,
      162803761,
      162803773,
      162803768,
      162803796,
      162803802,
      162803799,
      162803783,
      162803793,
      162803801,
      162803795,
      162803791,
      162803798,
      162803806,
      162803781,
      162803785,
      162803784,
      162803780,
      162803805,
      162803797,
      162803788,
      162803800,
      162803803,
      162803789,
      162803786,
      162803792,
      162803794,
      162803782,
      162803787,
      162803790,
      162803804,
      162803814,
      162803811,
      162803818,
      162803834,
      162803815,
      162803825,
      162803827,
      162803833,
      162803808,
      162803831,
      162803813,
      162803828,
      162803807,
      162803810,
      162803817,
      162803829,
      162803830,
      162803812,
      162803809,
      162803816,
      162803822,
      162803832,
      162803821,
      162803824,
      162803823,
      162803820,
      162803826,
      162803819,
      162803847,
      162803850,
      162803849,
      162803851,
      162803839,
      162803836,
      162803843,
      162803858,
      162803846,
      162803841,
      162803838,
      162803837,
      162803852,
      162803854,
      162803856,
      162803853,
      162803848,
      162803860,
      162803857,
      162803861,
      162803842,
      162803840,
      162803845,
      162803859,
      162803855,
      162803844,
      162803862,
      162803869,
      162803870,
      162803879,
      162803889,
      162803872,
      162803864,
      162803880,
      162803886,
      162803876,
      162803885,
      162803875,
      162803867,
      162803866,
      162803871,
      162803874,
      162803882,
      162803863,
      162803877,
      162803873,
      162803887,
      162803884,
      162803865,
      162803881,
      162803888,
      162803878,
      162803883,
      162803868,
      162803917,
      162803895,
      162803900,
      162803911,
      162803904,
      162803913,
      162803908,
      162803902,
      162803903,
      162803918,
      162803914,
      162803907,
      162803909,
      162803894,
      162803915,
      162803916,
      162803896,
      162803892,
      162803901,
      162803891,
      162803910,
      162803906,
      162803912,
      162803898,
      162803899,
      162803897,
      162803893,
      162803298,
      162803928,
      162803933,
      162803924,
      162803930,
      162803921,
      162803936,
      162803939,
      162803942,
      162803944,
      162803927,
      162803929,
      162803935,
      162803919,
      162803934,
      162803940,
      162803941,
      162803923,
      162803920,
      162803945,
      162803937,
      162803931,
      162803943,
      162803922,
      162803938,
      162803926,
      162803932,
      162803925,
      162803436,
      162803955,
      162803961,
      162803974,
      162803973,
      162803962,
      162803976,
      162803958,
      162803956,
      162803977,
      162803957,
      162803967,
      162803960,
      162803970,
      162803979,
      162803978,
      162803972,
      162803966,
      162803980,
      162803971,
      162803959,
      162803963,
      162803965,
      162803981,
      162803969,
      162803964,
      162803975,
      162804006,
      162804001,
      162803993,
      162804003,
      162803999,
      162804012,
      162803985,
      162803995,
      162804008,
      162803991,
      162804000,
      162803984,
      162804007,
      162803998,
      162804010,
      162803990,
      162804002,
      162803996,
      162803982,
      162803997,
      162804009,
      162803988,
      162804011,
      162803987,
      162803986,
      162804004,
      162803992,
      162803989,
      162804005,
      162804036,
      162804029,
      162804014,
      162804027,
      162804032,
      162804015,
      162804033,
      162804020,
      162804022,
      162804037,
      162804025,
      162804026,
      162804018,
      162804019,
      162804021,
      162804034,
      162804013,
      162804024,
      162804031,
      162804038,
      162804028,
      162804016,
      162804017,
      162804023,
      162804035,
      162804030,
      162804048,
      162804059,
      162804066,
      162804051,
      162804064,
      162804047,
      162804050,
      162804049,
      162804057,
      162804067,
      162804062,
      162804056,
      162804054,
      162804070,
      162804068,
      162804045,
      162804055,
      162804060,
      162804065,
      162804042,
      162804063,
      162804046,
      162804058,
      162804043,
      162804044,
      162804052,
      162804069,
      162804061,
      162804093,
      162804092,
      162804079,
      162804091,
      162804087,
      162804097,
      162804082,
      162804095,
      162804089,
      162804088,
      162804084,
      162804078,
      162804074,
      162804076,
      162804083,
      162804096,
      162804090,
      162804072,
      162804081,
      162804086,
      162804094,
      162804085,
      162804073,
      162804075,
      162804077,
      162804080,
      162804110,
      162804111,
      162804121,
      162804119,
      162804109,
      162804104,
      162804120,
      162804098,
      162804124,
      162804112,
      162804103,
      162804115,
      162804117,
      162804114,
      162804123,
      162804100,
      162804108,
      162804122,
      162804107,
      162804125,
      162804105,
      162804102,
      162804118,
      162804099,
      162804101,
      162804106,
      162804116,
      162804129,
      162804126,
      162804138,
      162804128,
      162804139,
      162804149,
      162804136,
      162804133,
      162804137,
      162804147,
      162804141,
      162804148,
      162804150,
      162804144,
      162804142,
      162804146,
      162804127,
      162804143,
      162804140,
      162804145,
      162804132,
      162804135,
      162804130,
      162804134,
      162804131,
      162804151,
      162804155,
      162804161,
      162804168,
      162804163,
      162804172,
      162804174,
      162804175,
      162804170,
      162804160,
      162804162,
      162804165,
      162804158,
      162804179,
      162804177,
      162804157,
      162804159,
      162804169,
      162804176,
      162804166,
      162804173,
      162804154,
      162804156,
      162804164,
      162804167,
      162804178,
      162804171,
      162804153,
      162804195,
      162804214,
      162804182,
      162804198,
      162804185,
      162804201,
      162804190,
      162804191,
      162804197,
      162804196,
      162804202,
      162804193,
      162804188,
      162804187,
      162804189,
      162804194,
      162804180,
      162804203,
      162804213,
      162804183,
      162804184,
      162804181,
      162804200,
      162804199,
      162804192,
      162804186,
      162803662,
      162804216,
      162804228,
      162804223,
      162804227,
      162804232,
      162804235,
      162804238,
      162804236,
      162804230,
      162804241,
      162804221,
      162804237,
      162804234,
      162804218,
      162804224,
      162804239,
      162804231,
      162804229,
      162804220,
      162804240,
      162804225,
      162804219,
      162804226,
      162804217,
      162804222,
      162804233,
      162804215,
      162804259,
      162804258,
      162804261,
      162804270,
      162804247,
      162804265,
      162804257,
      162804260,
      162804256,
      162804268,
      162804244,
      162804263,
      162804249,
      162804252,
      162804255,
      162804248,
      162804269,
      162804262,
      162804253,
      162804264,
      162804254,
      162804250,
      162804266,
      162804267,
      162804246,
      162804243,
      162804251,
      162804245,
      162804290,
      162804277,
      162804276,
      162804286,
      162804281,
      162804296,
      162804297,
      162804271,
      162804274,
      162804273,
      162804287,
      162804275,
      162804295,
      162804282,
      162804278,
      162804293,
      162804294,
      162804285,
      162804272,
      162804279,
      162804291,
      162804283,
      162804289,
      162804292,
      162804284,
      162804288,
      162804280,
      162804317,
      162804305,
      162804309,
      162804300,
      162804321,
      162804323,
      162804303,
      162804301,
      162804326,
      162804319,
      162804320,
      162804311,
      162804313,
      162804322,
      162804315,
      162804316,
      162804310,
      162804302,
      162804298,
      162804318,
      162804307,
      162804304,
      162804306,
      162804299,
      162804308,
      162804312,
      162804324,
      162804325,
      162804314,
      162804328,
      162804333,
      162804329,
      162804340,
      162804334,
      162804337,
      162804336,
      162804346,
      162804344,
      162804331,
      162804350,
      162804353,
      162804349,
      162804338,
      162804343,
      162804352,
      162804351,
      162804327,
      162804341,
      162804335,
      162804342,
      162804339,
      162804345,
      162804348,
      162804347,
      162804332,
      162804330,
      162804368,
      162804378,
      162804379,
      162804357,
      162804366,
      162804375,
      162804359,
      162804372,
      162804367,
      162804362,
      162804369,
      162804380,
      162804371,
      162804364,
      162804358,
      162804376,
      162804360,
      162804383,
      162804365,
      162804361,
      162804354,
      162804382,
      162804377,
      162804355,
      162804374,
      162804356,
      162804373,
      162804370,
      162804381,
      162804391,
      162804395,
      162804407,
      162804412,
      162804398,
      162804394,
      162804410,
      162804389,
      162804396,
      162804388,
      162804409,
      162804408,
      162804392,
      162804404,
      162804386,
      162804393,
      162804402,
      162804405,
      162804390,
      162804387,
      162804385,
      162804401,
      162804399,
      162804397,
      162804406,
      162804403,
      162804411,
      162804400,
      162804422,
      162804437,
      162804425,
      162804434,
      162804443,
      162804449,
      162804424,
      162804433,
      162804436,
      162804447,
      162804440,
      162804438,
      162804429,
      162804432,
      162804441,
      162804428,
      162804448,
      162804435,
      162804423,
      162804426,
      162804442,
      162804445,
      162804427,
      162804446,
      162804450,
      162804439,
      162804430,
      162804444,
      162804431,
      162804460,
      162804467,
      162804452,
      162804468,
      162804466,
      162804457,
      162804462,
      162804464,
      162804472,
      162804474,
      162804463,
      162804478,
      162804469,
      162804475,
      162804455,
      162804465,
      162804458,
      162804470,
      162804471,
      162804451,
      162804456,
      162804454,
      162804459,
      162804476,
      162804473,
      162804477,
      162804453,
      162804461,
      162804484,
      162804482,
      162804494,
      162804499,
      162804497,
      162804504,
      162804500,
      162804496,
      162804488,
      162804502,
      162804498,
      162804486,
      162804495,
      162804493,
      162804481,
      162804479,
      162804490,
      162804480,
      162804487,
      162804485,
      162804503,
      162804506,
      162804491,
      162804492,
      162804501,
      162804505,
      162804489,
      162804483,
      162804527,
      162804518,
      162804529,
      162804517,
      162804524,
      162804532,
      162804516,
      162804536,
      162804521,
      162804520,
      162804531,
      162804533,
      162804512,
      162804508,
      162804522,
      162804509,
      162804530,
      162804528,
      162804519,
      162804507,
      162804513,
      162804526,
      162804515,
      162804534,
      162804525,
      162804514,
      162804523,
      162804535,
      162804053,
      162804543,
      162804558,
      162804539,
      162804547,
      162804548,
      162804562,
      162804544,
      162804550,
      162804554,
      162804545,
      162804560,
      162804541,
      162804549,
      162804557,
      162804561,
      162804559,
      162804555,
      162804551,
      162804553,
      162804546,
      162804564,
      162804538,
      162804552,
      162804565,
      162804542,
      162804556,
      162804540,
      162804563,
      162803968,
      162804578,
      162804584,
      162804594,
      162804589,
      162804572,
      162804585,
      162804593,
      162804592,
      162804579,
      162804575,
      162804587,
      162804583,
      162804582,
      162804568,
      162804577,
      162804588,
      162804570,
      162804586,
      162804573,
      162804581,
      162804571,
      162804567,
      162804580,
      162804576,
      162804591,
      162804574,
      162804590,
      162804569,
      162804621,
      162804605,
      162804615,
      162804604,
      162804620,
      162804597,
      162804613,
      162804606,
      162804619,
      162804610,
      162804609,
      162804595,
      162804611,
      162804612,
      162804598,
      162804596,
      162804614,
      162804608,
      162804602,
      162804622,
      162804601,
      162804617,
      162804600,
      162804618,
      162804623,
      162804607,
      162804599,
      162804603,
      162804616,
      162804113,
      162804625,
      162804640,
      162804646,
      162804632,
      162804643,
      162804624,
      162804637,
      162804639,
      162804652,
      162804650,
      162804653,
      162804641,
      162804631,
      162804647,
      162804629,
      162804651,
      162804628,
      162804636,
      162804645,
      162804649,
      162804635,
      162804627,
      162804634,
      162804638,
      162804644,
      162804648,
      162804626,
      162804630,
      162804633,
      162804663,
      162804666,
      162804686,
      162804684,
      162804682,
      162804658,
      162804689,
      162804691,
      162804667,
      162804659,
      162804690,
      162804670,
      162804687,
      162804654,
      162804656,
      162804662,
      162804668,
      162804692,
      162804664,
      162804665,
      162804685,
      162804657,
      162804688,
      162804660,
      162804661,
      162804681,
      162804683,
      162804669,
      162804671,
      162804655,
      162804697,
      162804700,
      162804707,
      162804698,
      162804699,
      162804718,
      162804693,
      162804701,
      162804694,
      162804715,
      162804711,
      162804708,
      162804709,
      162804719,
      162804706,
      162804705,
      162804703,
      162804712,
      162804704,
      162804695,
      162804713,
      162804720,
      162804696,
      162804721,
      162804702,
      162804717,
      162804710,
      162804716,
      162804714,
      162804737,
      162804736,
      162804722,
      162804742,
      162804728,
      162804731,
      162804748,
      162804735,
      162804741,
      162804724,
      162804750,
      162804745,
      162804732,
      162804727,
      162804751,
      162804729,
      162804747,
      162804740,
      162804746,
      162804739,
      162804730,
      162804734,
      162804726,
      162804744,
      162804733,
      162804738,
      162804749,
      162804743,
      162804723,
      162804725,
      162804781,
      162804753,
      162804780,
      162804774,
      162804755,
      162804773,
      162804779,
      162804775,
      162804766,
      162804778,
      162804762,
      162804772,
      162804765,
      162804764,
      162804770,
      162804758,
      162804757,
      162804769,
      162804760,
      162804771,
      162804777,
      162804756,
      162804763,
      162804768,
      162804754,
      162804759,
      162804761,
      162804767,
      162804776,
      162804809,
      162804794,
      162804792,
      162804787,
      162804790,
      162804782,
      162804783,
      162804803,
      162804798,
      162804808,
      162804784,
      162804805,
      162804796,
      162804785,
      162804804,
      162804811,
      162804801,
      162804807,
      162804786,
      162804810,
      162804806,
      162804788,
      162804797,
      162804795,
      162804800,
      162804799,
      162804793,
      162804791,
      162804789,
      162804802,
      162804839,
      162804830,
      162804817,
      162804816,
      162804826,
      162804814,
      162804833,
      162804832,
      162804834,
      162804815,
      162804819,
      162804827,
      162804824,
      162804820,
      162804823,
      162804829,
      162804837,
      162804822,
      162804838,
      162804825,
      162804831,
      162804812,
      162804835,
      162804818,
      162804821,
      162804836,
      162804828,
      162804840,
      162804813,
      162804871,
      162804860,
      162804866,
      162804848,
      162804863,
      162804851,
      162804846,
      162804849,
      162804850,
      162804844,
      162804856,
      162804858,
      162804853,
      162804843,
      162804842,
      162804865,
      162804861,
      162804862,
      162804854,
      162804869,
      162804864,
      162804847,
      162804867,
      162804852,
      162804868,
      162804855,
      162804859,
      162804845,
      162804870,
      162804857,
      162804898,
      162804889,
      162804885,
      162804887,
      162804876,
      162804899,
      162804881,
      162804900,
      162804882,
      162804879,
      162804884,
      162804883,
      162804890,
      162804877,
      162804894,
      162804874,
      162804901,
      162804875,
      162804896,
      162804873,
      162804897,
      162804895,
      162804886,
      162804891,
      162804880,
      162804893,
      162804878,
      162804888,
      162804892,
      162804926,
      162804912,
      162804938,
      162804925,
      162804924,
      162804917,
      162804932,
      162804923,
      162804922,
      162804940,
      162804914,
      162804920,
      162804927,
      162804916,
      162804934,
      162804936,
      162804935,
      162804921,
      162804939,
      162804915,
      162804933,
      162804919,
      162804913,
      162804941,
      162804929,
      162804937,
      162804931,
      162804930,
      162804918,
      162804928,
      162804968,
      162804957,
      162804965,
      162804946,
      162804958,
      162804964,
      162804952,
      162804967,
      162804949,
      162804962,
      162804969,
      162804953,
      162804942,
      162804948,
      162804960,
      162804943,
      162804959,
      162804956,
      162804961,
      162804970,
      162804944,
      162804947,
      162804966,
      162804954,
      162804950,
      162804955,
      162804945,
      162804951,
      162804963,
      162804997,
      162804983,
      162804975,
      162804981,
      162804977,
      162804988,
      162804979,
      162804984,
      162804996,
      162804985,
      162804980,
      162804982,
      162804978,
      162805001,
      162804990,
      162804973,
      162804993,
      162804994,
      162804972,
      162804974,
      162804998,
      162805000,
      162804987,
      162804995,
      162804991,
      162804986,
      162804999,
      162804989,
      162804992,
      162804976,
      162805002,
      162805017,
      162805020,
      162805026,
      162805013,
      162805029,
      162805018,
      162805010,
      162805028,
      162805019,
      162805022,
      162805030,
      162805014,
      162805011,
      162805023,
      162805008,
      162805016,
      162805015,
      162805012,
      162805005,
      162805003,
      162805025,
      162805021,
      162805004,
      162805007,
      162805009,
      162805006,
      162805027,
      162805024,
      162805036,
      162805045,
      162805055,
      162805039,
      162805051,
      162805061,
      162805042,
      162805058,
      162805041,
      162805046,
      162805064,
      162805048,
      162805054,
      162805059,
      162805050,
      162805057,
      162805063,
      162805044,
      162805038,
      162805056,
      162805047,
      162805060,
      162805034,
      162805062,
      162805035,
      162805040,
      162805053,
      162805037,
      162805043,
      162805052,
      162805049,
      162805068,
      162805084,
      162805087,
      162805092,
      162805073,
      162805093,
      162805090,
      162805076,
      162805082,
      162805069,
      162805088,
      162805067,
      162805070,
      162805081,
      162805083,
      162805085,
      162805078,
      162805079,
      162805075,
      162805066,
      162805089,
      162805071,
      162805080,
      162805077,
      162805086,
      162805091,
      162805074,
      162805094,
      162805072,
      162805109,
      162805103,
      162805102,
      162805105,
      162805114,
      162805097,
      162805100,
      162805122,
      162805124,
      162805106,
      162805128,
      162805126,
      162805116,
      162805121,
      162805112,
      162805120,
      162805117,
      162805125,
      162805111,
      162805099,
      162805123,
      162805107,
      162805115,
      162805098,
      162805110,
      162805119,
      162805108,
      162805101,
      162805104,
      162805127,
      162805118,
      162805143,
      162805136,
      162805141,
      162805152,
      162805132,
      162805151,
      162805139,
      162805149,
      162805142,
      162805135,
      162805157,
      162805131,
      162805147,
      162805146,
      162805148,
      162805150,
      162805153,
      162805137,
      162805133,
      162805155,
      162805159,
      162805156,
      162805158,
      162805138,
      162805134,
      162805144,
      162805154,
      162805140,
      162805145,
      162805185,
      162805196,
      162805198,
      162805176,
      162805201,
      162805184,
      162805197,
      162805181,
      162805177,
      162805175,
      162805192,
      162805194,
      162805200,
      162805202,
      162805186,
      162805204,
      162805190,
      162805193,
      162805199,
      162805188,
      162805182,
      162805189,
      162805187,
      162805191,
      162805174,
      162805203,
      162805180,
      162805179,
      162805195,
      162805178,
      162805183,
      162805234,
      162805214,
      162805224,
      162805231,
      162805222,
      162805211,
      162805216,
      162805233,
      162805219,
      162805226,
      162805227,
      162805208,
      162805235,
      162805209,
      162805213,
      162805212,
      162805217,
      162805228,
      162805218,
      162805225,
      162805229,
      162805207,
      162805232,
      162805221,
      162805210,
      162805223,
      162805220,
      162805230,
      162805215,
      162805237,
      162805248,
      162805236,
      162805240,
      162805242,
      162805251,
      162805250,
      162805239,
      162805264,
      162805254,
      162805255,
      162805253,
      162805241,
      162805243,
      162805262,
      162805257,
      162805252,
      162805246,
      162805238,
      162805247,
      162805266,
      162805260,
      162805261,
      162805263,
      162805259,
      162805256,
      162805258,
      162805249,
      162805244,
      162805265,
      162805245,
      162805293,
      162805289,
      162805278,
      162805273,
      162805281,
      162805297,
      162805279,
      162805270,
      162805272,
      162805294,
      162805284,
      162805269,
      162805280,
      162805292,
      162805271,
      162805295,
      162805282,
      162805288,
      162805283,
      162805287,
      162805285,
      162805274,
      162805291,
      162805296,
      162805276,
      162805290,
      162805277,
      162805275,
      162805286,
      162805308,
      162805319,
      162805303,
      162805318,
      162805306,
      162805323,
      162805322,
      162805320,
      162805299,
      162805317,
      162805313,
      162805324,
      162805315,
      162805309,
      162805311,
      162805304,
      162805307,
      162805316,
      162805328,
      162805326,
      162805327,
      162805310,
      162805300,
      162805302,
      162805325,
      162805329,
      162805301,
      162805321,
      162805312,
      162805314,
      162805305,
      162805351,
      162805330,
      162805358,
      162805335,
      162805343,
      162805348,
      162805341,
      162805345,
      162805349,
      162805344,
      162805350,
      162805334,
      162805336,
      162805353,
      162805359,
      162805331,
      162805357,
      162805338,
      162805352,
      162805342,
      162805346,
      162805337,
      162805360,
      162805347,
      162805340,
      162805339,
      162805355,
      162805356,
      162805354,
      162805390,
      162805367,
      162805383,
      162805391,
      162805365,
      162805381,
      162805375,
      162805380,
      162805366,
      162805392,
      162805373,
      162805384,
      162805385,
      162805368,
      162805376,
      162805386,
      162805388,
      162805363,
      162805378,
      162805362,
      162805377,
      162805389,
      162805379,
      162805382,
      162805387,
      162805371,
      162805364,
      162805374,
      162805369,
      162805372,
      162805370,
      162805401,
      162805423,
      162805415,
      162805422,
      162805418,
      162805417,
      162805412,
      162805421,
      162805409,
      162805395,
      162805411,
      162805413,
      162805405,
      162805406,
      162805410,
      162805403,
      162805402,
      162805397,
      162805400,
      162805408,
      162805404,
      162805420,
      162805399,
      162805414,
      162805407,
      162805396,
      162805398,
      162805416,
      162805419,
      162805427,
      162805443,
      162805440,
      162805438,
      162805447,
      162805425,
      162805432,
      162805451,
      162805439,
      162805437,
      162805436,
      162805445,
      162805444,
      162805448,
      162805450,
      162805442,
      162805446,
      162805431,
      162805428,
      162805455,
      162805430,
      162805441,
      162805426,
      162805433,
      162805435,
      162805452,
      162805454,
      162805449,
      162805429,
      162805453,
      162805434,
      162805483,
      162805469,
      162805471,
      162805468,
      162805476,
      162805486,
      162805482,
      162805488,
      162805493,
      162805472,
      162805480,
      162805492,
      162805485,
      162805475,
      162805470,
      162805474,
      162805489,
      162805473,
      162805495,
      162805478,
      162805494,
      162805477,
      162805491,
      162805481,
      162805479,
      162805496,
      162805487,
      162805484,
      162805490,
      162805519,
      162805512,
      162805499,
      162805526,
      162805521,
      162805520,
      162805497,
      162805505,
      162805514,
      162805522,
      162805518,
      162805513,
      162805510,
      162805502,
      162805517,
      162805515,
      162805509,
      162805507,
      162805508,
      162805525,
      162805504,
      162805506,
      162805523,
      162805524,
      162805516,
      162805527,
      162805503,
      162805498,
      162805500,
      162805511,
      162805501,
      162805537,
      162805535,
      162805541,
      162805530,
      162805531,
      162805557,
      162805556,
      162805540,
      162805538,
      162805545,
      162805551,
      162805536,
      162805553,
      162805534,
      162805549,
      162805558,
      162805550,
      162805543,
      162805547,
      162805542,
      162805544,
      162805552,
      162805546,
      162805539,
      162805532,
      162805548,
      162805533,
      162805554,
      162805559,
      162805566,
      162805563,
      162805581,
      162805586,
      162805567,
      162805571,
      162805582,
      162805572,
      162805573,
      162805584,
      162805588,
      162805578,
      162805587,
      162805565,
      162805575,
      162805589,
      162805576,
      162805568,
      162805569,
      162805574,
      162805579,
      162805585,
      162805564,
      162805561,
      162805583,
      162805560,
      162805562,
      162805580,
      162805570,
      162805577,
      162805621,
      162805602,
      162805614,
      162805599,
      162805609,
      162805603,
      162805608,
      162805595,
      162805605,
      162805622,
      162805613,
      162805600,
      162805618,
      162805604,
      162805601,
      162805612,
      162805616,
      162805606,
      162805598,
      162805610,
      162805597,
      162805617,
      162805619,
      162805620,
      162805615,
      162805611,
      162805596,
      162805607,
      162805634,
      162805639,
      162805651,
      162805625,
      162805645,
      162805654,
      162805648,
      162805642,
      162805630,
      162805629,
      162805646,
      162805653,
      162805627,
      162805636,
      162805640,
      162805643,
      162805652,
      162805631,
      162805632,
      162805647,
      162805633,
      162805638,
      162805637,
      162805624,
      162805626,
      162805650,
      162805635,
      162805628,
      162805641,
      162805649,
      162805644,
      162805678,
      162805671,
      162805682,
      162805662,
      162805661,
      162805664,
      162805669,
      162805663,
      162805658,
      162805660,
      162805681,
      162805655,
      162805680,
      162805674,
      162805673,
      162805657,
      162805676,
      162805675,
      162805667,
      162805679,
      162805668,
      162805665,
      162805666,
      162805672,
      162805659,
      162805656,
      162805677,
      162805670,
      162805720,
      162805705,
      162805707,
      162805706,
      162805713,
      162805708,
      162805721,
      162805700,
      162805704,
      162805693,
      162805701,
      162805697,
      162805695,
      162805716,
      162805718,
      162805698,
      162805702,
      162805710,
      162805711,
      162805714,
      162805719,
      162805696,
      162805723,
      162805703,
      162805709,
      162805699,
      162805712,
      162805717,
      162805715,
      162805692,
      162805694,
      162805725,
      162805739,
      162805742,
      162805730,
      162805729,
      162805749,
      162805728,
      162805746,
      162805751,
      162805752,
      162805741,
      162805726,
      162805748,
      162805735,
      162805750,
      162805731,
      162805738,
      162805737,
      162805743,
      162805733,
      162805732,
      162805734,
      162805740,
      162805745,
      162805747,
      162805744,
      162805736,
      162805727,
      162805758,
      162805776,
      162805761,
      162805781,
      162805780,
      162805769,
      162805773,
      162805777,
      162805754,
      162805771,
      162805756,
      162805765,
      162805782,
      162805760,
      162805757,
      162805783,
      162805779,
      162805778,
      162805762,
      162805775,
      162805768,
      162805767,
      162805766,
      162805764,
      162805755,
      162805774,
      162805753,
      162805759,
      162805763,
      162805772,
      162805770,
      162805810,
      162805808,
      162805800,
      162805784,
      162805805,
      162805790,
      162805803,
      162805802,
      162805798,
      162805794,
      162805788,
      162805809,
      162805796,
      162805789,
      162805804,
      162805795,
      162805811,
      162805786,
      162805799,
      162805807,
      162805797,
      162805792,
      162805793,
      162805806,
      162805787,
      162805801,
      162805791,
      162805785,
      162805835,
      162805817,
      162805836,
      162805821,
      162805826,
      162805831,
      162805829,
      162805818,
      162805828,
      162805825,
      162805837,
      162805812,
      162805842,
      162805814,
      162805813,
      162805820,
      162805824,
      162805816,
      162805841,
      162805830,
      162805839,
      162805840,
      162805823,
      162805819,
      162805833,
      162805838,
      162805827,
      162805822,
      162805815,
      162805832,
      162805834,
      162805865,
      162805861,
      162805851,
      162805849,
      162805867,
      162805869,
      162805860,
      162805856,
      162805847,
      162805845,
      162805859,
      162805868,
      162805857,
      162805848,
      162805863,
      162805850,
      162805855,
      162805862,
      162805871,
      162805870,
      162805864,
      162805858,
      162805852,
      162805844,
      162805854,
      162805853,
      162805866,
      162805846,
      162805889,
      162805898,
      162805879,
      162805890,
      162805896,
      162805902,
      162805901,
      162805872,
      162805892,
      162805895,
      162805877,
      162805900,
      162805875,
      162805885,
      162805874,
      162805884,
      162805891,
      162805894,
      162805881,
      162805880,
      162805882,
      162805893,
      162805897,
      162805876,
      162805887,
      162805883,
      162805899,
      162805888,
      162805886,
      162805873,
      162805878,
      162805904,
      162805927,
      162805928,
      162805905,
      162805906,
      162805924,
      162805920,
      162805919,
      162805923,
      162805929,
      162805922,
      162805911,
      162805910,
      162805917,
      162805914,
      162805931,
      162805909,
      162805930,
      162805921,
      162805926,
      162805908,
      162805925,
      162805915,
      162805907,
      162805916,
      162805912,
      162805918,
      162805913,
      162805960,
      162805935,
      162805959,
      162805946,
      162805941,
      162805932,
      162805950,
      162805955,
      162805961,
      162805948,
      162805942,
      162805938,
      162805956,
      162805953,
      162805933,
      162805944,
      162805945,
      162805937,
      162805943,
      162805934,
      162805940,
      162805952,
      162805949,
      162805939,
      162805957,
      162805951,
      162805954,
      162805947,
      162805936,
      162805958,
      162805988,
      162805997,
      162805999,
      162806000,
      162805996,
      162805984,
      162805985,
      162805986,
      162805998,
      162805979,
      162805990,
      162805993,
      162805977,
      162805994,
      162805973,
      162805972,
      162805978,
      162805975,
      162805981,
      162805995,
      162805992,
      162805987,
      162805980,
      162805991,
      162805983,
      162805989,
      162805976,
      162805982,
      162806008,
      162806015,
      162806010,
      162806003,
      162806017,
      162806028,
      162806009,
      162806016,
      162806005,
      162806024,
      162806025,
      162806007,
      162806022,
      162806004,
      162806021,
      162806018,
      162806013,
      162806011,
      162806023,
      162806019,
      162806012,
      162806002,
      162806026,
      162806001,
      162806020,
      162806030,
      162806027,
      162806029,
      162806006,
      162806014,
      162806045,
      162806046,
      162806050,
      162806043,
      162806041,
      162806039,
      162806035,
      162806056,
      162806038,
      162806054,
      162806055,
      162806047,
      162806031,
      162806048,
      162806037,
      162806052,
      162806053,
      162806051,
      162806058,
      162806057,
      162806040,
      162806042,
      162806033,
      162806036,
      162806032,
      162806049,
      162806044,
      162806034,
      162806063,
      162806083,
      162806076,
      162806074,
      162806062,
      162806072,
      162806080,
      162806086,
      162806085,
      162806071,
      162806077,
      162806064,
      162806079,
      162806066,
      162806067,
      162806081,
      162806078,
      162806069,
      162806070,
      162806087,
      162806084,
      162806065,
      162806073,
      162806061,
      162806075,
      162806060,
      162806059,
      162806088,
      162806068,
      162806089,
      162806116,
      162806110,
      162806108,
      162806093,
      162806106,
      162806105,
      162806112,
      162806103,
      162806114,
      162806094,
      162806111,
      162806092,
      162806115,
      162806107,
      162806097,
      162806099,
      162806104,
      162806102,
      162806096,
      162806109,
      162806090,
      162806101,
      162806100,
      162806113,
      162806091,
      162806095,
      162806098,
      162805555,
      162806138,
      162806140,
      162806146,
      162806144,
      162806141,
      162806135,
      162806137,
      162806148,
      162806130,
      162806136,
      162806139,
      162806126,
      162806122,
      162806147,
      162806127,
      162806149,
      162806143,
      162806121,
      162806124,
      162806131,
      162806133,
      162806134,
      162806142,
      162806128,
      162806132,
      162806129,
      162806125,
      162806120,
      162806145,
      162806170,
      162806177,
      162806161,
      162806152,
      162806176,
      162806169,
      162806160,
      162806153,
      162806162,
      162806172,
      162806163,
      162806168,
      162806166,
      162806165,
      162806178,
      162806174,
      162806180,
      162806158,
      162806175,
      162806156,
      162806157,
      162806173,
      162806164,
      162806155,
      162806167,
      162806154,
      162806179,
      162806159,
      162806171,
      162806191,
      162806212,
      162806195,
      162806213,
      162806196,
      162806210,
      162806205,
      162806204,
      162806190,
      162806193,
      162806200,
      162806201,
      162806215,
      162806208,
      162806192,
      162806202,
      162806206,
      162806194,
      162806209,
      162806218,
      162806199,
      162806203,
      162806207,
      162806197,
      162806198,
      162806216,
      162806217,
      162806214,
      162806211,
      162806233,
      162806234,
      162806235,
      162806245,
      162806232,
      162806243,
      162806230,
      162806226,
      162806229,
      162806227,
      162806237,
      162806242,
      162806244,
      162806228,
      162806246,
      162806239,
      162806221,
      162806222,
      162806248,
      162806236,
      162806241,
      162806238,
      162806223,
      162806240,
      162806225,
      162806224,
      162806231,
      162806220,
      162806247,
      162806265,
      162806263,
      162806253,
      162806266,
      162806250,
      162806255,
      162806269,
      162806276,
      162806267,
      162806277,
      162806259,
      162806273,
      162806261,
      162806256,
      162806254,
      162806271,
      162806278,
      162806252,
      162806270,
      162806260,
      162806257,
      162806262,
      162806272,
      162806275,
      162806258,
      162806274,
      162806268,
      162806251,
      162806264,
      162806298,
      162806284,
      162806302,
      162806288,
      162806297,
      162806303,
      162806306,
      162806295,
      162806305,
      162806292,
      162806286,
      162806296,
      162806281,
      162806279,
      162806291,
      162806299,
      162806300,
      162806301,
      162806294,
      162806289,
      162806282,
      162806293,
      162806307,
      162806304,
      162806283,
      162806287,
      162806290,
      162806285,
      162806280,
      162806320,
      162806309,
      162806329,
      162806312,
      162806308,
      162806316,
      162806332,
      162806335,
      162806314,
      162806311,
      162806325,
      162806334,
      162806310,
      162806336,
      162806327,
      162806319,
      162806326,
      162806324,
      162806313,
      162806323,
      162806321,
      162806333,
      162806318,
      162806331,
      162806328,
      162806317,
      162806315,
      162806322,
      162806330,
      162806346,
      162806364,
      162806351,
      162806354,
      162806339,
      162806357,
      162806347,
      162806352,
      162806343,
      162806353,
      162806355,
      162806338,
      162806366,
      162806348,
      162806356,
      162806362,
      162806345,
      162806340,
      162806350,
      162806358,
      162806342,
      162806360,
      162806341,
      162806359,
      162806361,
      162806344,
      162806363,
      162806365,
      162806349,
      162806371,
      162806394,
      162806392,
      162806383,
      162806374,
      162806376,
      162806385,
      162806387,
      162806370,
      162806367,
      162806378,
      162806388,
      162806395,
      162806386,
      162806384,
      162806382,
      162806390,
      162806369,
      162806372,
      162806368,
      162806373,
      162806379,
      162806389,
      162806375,
      162806393,
      162806381,
      162806391,
      162806380,
      162806377,
      162806409,
      162806404,
      162806402,
      162806400,
      162806412,
      162806408,
      162806401,
      162806424,
      162806396,
      162806414,
      162806413,
      162806422,
      162806418,
      162806419,
      162806399,
      162806416,
      162806397,
      162806420,
      162806417,
      162806405,
      162806407,
      162806403,
      162806421,
      162806411,
      162806423,
      162806410,
      162806415,
      162806406,
      162806428,
      162806431,
      162806444,
      162806435,
      162806450,
      162806446,
      162806433,
      162806454,
      162806429,
      162806426,
      162806453,
      162806427,
      162806449,
      162806451,
      162806436,
      162806440,
      162806398,
      162806430,
      162806447,
      162806442,
      162806438,
      162806439,
      162806434,
      162806432,
      162806452,
      162806441,
      162806443,
      162806445,
      162806437,
      162806448,
      162806483,
      162806492,
      162806478,
      162806468,
      162806477,
      162806469,
      162806482,
      162806490,
      162806491,
      162806493,
      162806484,
      162806475,
      162806488,
      162806481,
      162806470,
      162806472,
      162806494,
      162806466,
      162806480,
      162806471,
      162806487,
      162806473,
      162806476,
      162806479,
      162806489,
      162806485,
      162806474,
      162806486,
      162806525,
      162806523,
      162806502,
      162806503,
      162806510,
      162806519,
      162806507,
      162806496,
      162806521,
      162806518,
      162806506,
      162806504,
      162806508,
      162806499,
      162806497,
      162806527,
      162806509,
      162806516,
      162806512,
      162806524,
      162806498,
      162806517,
      162806522,
      162806500,
      162806501,
      162806514,
      162806520,
      162806511,
      162806513,
      162806505,
      162806515,
      162806530,
      162806537,
      162806544,
      162806532,
      162806541,
      162806548,
      162806546,
      162806550,
      162806529,
      162806539,
      162806538,
      162806549,
      162806540,
      162806534,
      162806536,
      162806543,
      162806535,
      162806531,
      162806553,
      162806528,
      162806552,
      162806547,
      162806533,
      162806545,
      162806551,
      162806542,
      162806554,
      162806555,
      162806570,
      162806561,
      162806562,
      162806582,
      162806581,
      162806576,
      162806566,
      162806560,
      162806580,
      162806556,
      162806568,
      162806574,
      162806557,
      162806578,
      162806567,
      162806584,
      162806579,
      162806573,
      162806559,
      162806575,
      162806571,
      162806564,
      162806569,
      162806572,
      162806563,
      162806558,
      162806565,
      162806577,
      162806583,
      162806586,
      162806585,
      162806592,
      162806587,
      162806603,
      162806610,
      162806598,
      162806590,
      162806601,
      162806607,
      162806600,
      162806591,
      162806596,
      162806614,
      162806593,
      162806609,
      162806588,
      162806602,
      162806604,
      162806606,
      162806599,
      162806605,
      162806612,
      162806611,
      162806613,
      162806589,
      162806597,
      162806595,
      162806594,
      162806630,
      162806620,
      162806624,
      162806645,
      162806621,
      162806643,
      162806626,
      162806641,
      162806628,
      162806639,
      162806642,
      162806625,
      162806644,
      162806617,
      162806633,
      162806619,
      162806631,
      162806634,
      162806618,
      162806627,
      162806636,
      162806616,
      162806640,
      162806623,
      162806637,
      162806622,
      162806615,
      162806632,
      162806638,
      162806629,
      162806082,
      162806670,
      162806666,
      162806650,
      162806668,
      162806665,
      162806654,
      162806657,
      162806659,
      162806649,
      162806664,
      162806676,
      162806653,
      162806663,
      162806656,
      162806669,
      162806671,
      162806655,
      162806660,
      162806672,
      162806674,
      162806646,
      162806675,
      162806652,
      162806677,
      162806651,
      162806658,
      162806667,
      162806700,
      162806717,
      162806705,
      162806704,
      162806709,
      162806691,
      162806689,
      162806714,
      162806715,
      162806688,
      162806694,
      162806693,
      162806707,
      162806697,
      162806695,
      162806699,
      162806716,
      162806712,
      162806706,
      162806701,
      162806713,
      162806708,
      162806687,
      162806696,
      162806710,
      162806698,
      162806711,
      162806692,
      162806702,
      162806690,
      162806703,
      162806732,
      162806741,
      162806720,
      162806726,
      162806739,
      162806737,
      162806744,
      162806740,
      162806742,
      162806736,
      162806721,
      162806725,
      162806730,
      162806734,
      162806722,
      162806729,
      162806733,
      162806738,
      162806718,
      162806719,
      162806735,
      162806727,
      162806723,
      162806743,
      162806728,
      162806731,
      162806761,
      162806757,
      162806780,
      162806774,
      162806759,
      162806766,
      162806753,
      162806760,
      162806777,
      162806769,
      162806776,
      162806779,
      162806755,
      162806763,
      162806775,
      162806778,
      162806758,
      162806762,
      162806754,
      162806764,
      162806770,
      162806765,
      162806756,
      162806749,
      162806771,
      162806767,
      162806772,
      162806750,
      162806768,
      162806773,
      162806788,
      162806800,
      162806786,
      162806804,
      162806802,
      162806791,
      162806792,
      162806798,
      162806796,
      162806793,
      162806797,
      162806784,
      162806801,
      162806789,
      162806781,
      162806806,
      162806783,
      162806787,
      162806785,
      162806805,
      162806799,
      162806782,
      162806803,
      162806794,
      162806795,
      162806790,
      162806813,
      162806824,
      162806811,
      162806827,
      162806828,
      162806820,
      162806830,
      162806809,
      162806817,
      162806833,
      162806812,
      162806836,
      162806815,
      162806826,
      162806834,
      162806810,
      162806835,
      162806821,
      162806816,
      162806814,
      162806825,
      162806818,
      162806823,
      162806829,
      162806832,
      162806831,
      162806819,
      162806808,
      162806822,
      162806807,
      162806850,
      162806859,
      162806854,
      162806843,
      162806839,
      162806853,
      162806855,
      162806840,
      162806837,
      162806856,
      162806845,
      162806857,
      162806848,
      162806841,
      162806858,
      162806846,
      162806862,
      162806861,
      162806851,
      162806842,
      162806847,
      162806838,
      162806860,
      162806849,
      162806844,
      162806852,
      162806882,
      162806866,
      162806880,
      162806891,
      162806876,
      162806893,
      162806867,
      162806877,
      162806887,
      162806892,
      162806884,
      162806869,
      162806875,
      162806890,
      162806870,
      162806864,
      162806885,
      162806883,
      162806888,
      162806878,
      162806879,
      162806865,
      162806871,
      162806868,
      162806881,
      162806889,
      162806886,
      162806874,
      162806873,
      162806872,
      162806894,
      162806914,
      162806902,
      162806917,
      162806912,
      162806901,
      162806904,
      162806910,
      162806918,
      162806909,
      162806900,
      162806911,
      162806916,
      162806915,
      162806903,
      162806905,
      162806899,
      162806908,
      162806896,
      162806898,
      162806907,
      162806897,
      162806913,
      162806895,
      162806906,
      162806957,
      162806940,
      162806944,
      162806943,
      162806958,
      162806921,
      162806929,
      162806954,
      162806926,
      162806942,
      162806950,
      162806947,
      162806945,
      162806939,
      162806941,
      162806951,
      162806949,
      162806920,
      162806952,
      162806923,
      162806955,
      162806927,
      162806924,
      162806928,
      162806946,
      162806925,
      162806953,
      162806948,
      162806922,
      162806956,
      162806965,
      162806971,
      162806962,
      162806964,
      162806974,
      162806983,
      162806980,
      162806959,
      162806961,
      162806973,
      162806978,
      162806968,
      162806975,
      162806979,
      162806982,
      162806972,
      162806963,
      162806976,
      162806967,
      162806966,
      162806970,
      162806969,
      162806981,
      162806960,
      162806977,
      162806998,
      162806992,
      162807003,
      162807007,
      162806989,
      162807000,
      162807008,
      162806988,
      162806991,
      162807009,
      162806995,
      162807013,
      162807012,
      162806986,
      162806985,
      162807001,
      162806987,
      162807002,
      162806994,
      162806990,
      162806999,
      162807005,
      162806997,
      162807011,
      162807006,
      162806996,
      162806993,
      162807010,
      162807004,
      162807015,
      162807034,
      162807027,
      162807021,
      162807024,
      162807031,
      162807036,
      162807028,
      162807030,
      162807037,
      162807022,
      162807035,
      162807018,
      162807025,
      162807033,
      162807032,
      162807020,
      162807029,
      162807016,
      162807039,
      162807038,
      162807017,
      162807019,
      162807023,
      162807041,
      162807053,
      162807050,
      162807063,
      162807066,
      162807061,
      162807055,
      162807057,
      162807047,
      162807056,
      162807046,
      162807058,
      162807064,
      162807051,
      162807042,
      162807054,
      162807044,
      162807065,
      162807068,
      162807062,
      162807040,
      162807049,
      162807045,
      162807048,
      162807052,
      162807043,
      162807067,
      162807069,
      162807060,
      162807059,
      162807089,
      162807071,
      162807084,
      162807079,
      162807092,
      162807072,
      162807074,
      162807091,
      162807088,
      162807090,
      162807082,
      162807077,
      162807078,
      162807070,
      162807085,
      162807081,
      162807086,
      162807087,
      162807073,
      162807080,
      162807075,
      162807083,
      162807076,
      162807094,
      162807096,
      162807095,
      162807097,
      162807105,
      162807112,
      162807101,
      162807107,
      162807100,
      162807114,
      162807106,
      162807103,
      162807104,
      162807109,
      162807093,
      162807119,
      162807118,
      162807098,
      162807122,
      162807117,
      162807110,
      162807111,
      162807108,
      162807113,
      162807102,
      162807121,
      162807099,
      162807120,
      162807115,
      162807116,
      162806608,
      162807125,
      162807144,
      162807131,
      162807143,
      162807135,
      162807134,
      162807132,
      162807133,
      162807128,
      162807138,
      162807130,
      162807146,
      162807136,
      162807148,
      162807141,
      162807145,
      162807129,
      162807140,
      162807126,
      162807139,
      162807142,
      162807137,
      162807147,
      162807175,
      162807163,
      162807164,
      162807168,
      162807179,
      162807165,
      162807181,
      162807169,
      162807174,
      162807185,
      162807180,
      162807172,
      162807184,
      162807162,
      162807173,
      162807177,
      162807170,
      162807167,
      162807160,
      162807183,
      162807182,
      162807190,
      162807186,
      162807159,
      162807178,
      162807166,
      162807161,
      162807176,
      162807188,
      162807171,
      162807189,
      162807187,
      162807211,
      162807197,
      162807198,
      162807209,
      162807213,
      162807212,
      162807193,
      162807196,
      162807210,
      162807195,
      162807204,
      162807201,
      162807199,
      162807203,
      162807202,
      162807191,
      162807207,
      162807200,
      162807205,
      162807208,
      162807192,
      162807194,
      162807206,
      162807223,
      162807235,
      162807229,
      162807239,
      162807241,
      162807224,
      162807231,
      162807233,
      162807217,
      162807221,
      162807244,
      162807222,
      162807215,
      162807219,
      162807226,
      162807237,
      162807228,
      162807218,
      162807220,
      162807234,
      162807214,
      162807243,
      162807245,
      162807238,
      162807236,
      162807242,
      162807216,
      162807240,
      162807232,
      162807230,
      162807225,
      162807227,
      162806752,
      162807267,
      162807263,
      162807248,
      162807269,
      162807262,
      162807250,
      162807255,
      162807257,
      162807260,
      162807254,
      162807258,
      162807256,
      162807251,
      162807247,
      162807265,
      162807266,
      162807252,
      162807264,
      162807249,
      162807261,
      162807268,
      162807253,
      162807259,
      162806724,
      162807300,
      162807279,
      162807282,
      162807299,
      162807274,
      162807289,
      162807283,
      162807287,
      162807276,
      162807286,
      162807278,
      162807291,
      162807292,
      162807275,
      162807288,
      162807298,
      162807271,
      162807280,
      162807285,
      162807301,
      162807290,
      162807296,
      162807297,
      162807272,
      162807294,
      162807273,
      162807281,
      162807295,
      162807293,
      162807270,
      162807277,
      162807284,
      162807325,
      162807319,
      162807314,
      162807321,
      162807322,
      162807306,
      162807310,
      162807324,
      162807305,
      162807326,
      162807318,
      162807303,
      162807315,
      162807312,
      162807317,
      162807311,
      162807313,
      162807308,
      162807320,
      162807302,
      162807323,
      162807307,
      162807316,
      162807304,
      162807309,
      162807340,
      162807339,
      162807334,
      162807355,
      162807345,
      162807343,
      162807341,
      162807346,
      162807333,
      162807337,
      162807336,
      162807331,
      162807338,
      162807344,
      162807330,
      162807351,
      162807357,
      162807348,
      162807349,
      162807358,
      162807332,
      162807347,
      162807353,
      162807327,
      162807328,
      162807342,
      162807329,
      162807354,
      162807335,
      162807356,
      162807350,
      162807352,
      162807362,
      162807371,
      162807383,
      162807375,
      162807368,
      162807374,
      162807365,
      162807378,
      162807373,
      162807377,
      162807384,
      162807364,
      162807380,
      162807372,
      162807370,
      162807360,
      162807366,
      162807369,
      162807361,
      162807367,
      162807382,
      162807379,
      162807381,
      162807363,
      162807376,
      162807416,
      162807421,
      162807411,
      162807415,
      162807414,
      162807419,
      162807424,
      162807400,
      162807394,
      162807413,
      162807420,
      162807418,
      162807417,
      162807404,
      162807410,
      162807423,
      162807408,
      162807399,
      162807396,
      162807397,
      162807401,
      162807409,
      162807412,
      162807398,
      162807407,
      162807395,
      162807403,
      162807406,
      162807405,
      162807422,
      162807402,
      162807430,
      162807435,
      162807437,
      162807439,
      162807443,
      162807432,
      162807448,
      162807444,
      162807445,
      162807429,
      162807450,
      162807436,
      162807440,
      162807426,
      162807438,
      162807451,
      162807427,
      162807447,
      162807431,
      162807441,
      162807433,
      162807442,
      162807449,
      162807446,
      162807428,
      162807434,
      162807468,
      162807461,
      162807477,
      162807466,
      162807467,
      162807474,
      162807476,
      162807471,
      162807463,
      162807458,
      162807480,
      162807479,
      162807470,
      162807481,
      162807457,
      162807454,
      162807475,
      162807472,
      162807462,
      162807478,
      162807482,
      162807453,
      162807459,
      162807456,
      162807455,
      162807465,
      162807460,
      162807464,
      162807469,
      162807473,
      162807500,
      162807494,
      162807503,
      162807493,
      162807488,
      162807492,
      162807504,
      162807486,
      162807502,
      162807499,
      162807485,
      162807487,
      162807489,
      162807496,
      162807507,
      162807495,
      162807506,
      162807497,
      162807510,
      162807491,
      162807484,
      162807508,
      162807498,
      162807490,
      162807505,
      162807501,
      162807517,
      162807515,
      162807532,
      162807538,
      162807525,
      162807535,
      162807536,
      162807511,
      162807516,
      162807529,
      162807530,
      162807522,
      162807520,
      162807523,
      162807524,
      162807518,
      162807540,
      162807526,
      162807539,
      162807519,
      162807537,
      162807512,
      162807531,
      162807533,
      162807513,
      162807521,
      162807534,
      162807528,
      162807514,
      162807527,
      162807559,
      162807553,
      162807562,
      162807554,
      162807563,
      162807555,
      162807547,
      162807552,
      162807564,
      162807543,
      162807544,
      162807551,
      162807550,
      162807541,
      162807565,
      162807545,
      162807542,
      162807557,
      162807548,
      162807549,
      162807567,
      162807566,
      162807556,
      162807558,
      162807561,
      162807560,
      162807546,
      162807590,
      162807596,
      162807594,
      162807575,
      162807586,
      162807597,
      162807595,
      162807569,
      162807581,
      162807582,
      162807593,
      162807572,
      162807574,
      162807583,
      162807579,
      162807588,
      162807578,
      162807587,
      162807592,
      162807570,
      162807584,
      162807585,
      162807580,
      162807577,
      162807589,
      162807573,
      162807571,
      162807568,
      162807576,
      162807591,
      162807026,
      162807606,
      162807621,
      162807616,
      162807617,
      162807603,
      162807612,
      162807615,
      162807601,
      162807605,
      162807608,
      162807602,
      162807613,
      162807604,
      162807622,
      162807624,
      162807619,
      162807607,
      162807600,
      162807598,
      162807610,
      162807623,
      162807614,
      162807620,
      162807618,
      162807599,
      162807611,
      162807609,
      162807642,
      162807643,
      162807640,
      162807639,
      162807650,
      162807641,
      162807653,
      162807648,
      162807635,
      162807652,
      162807656,
      162807646,
      162807666,
      162807628,
      162807632,
      162807667,
      162807634,
      162807638,
      162807637,
      162807644,
      162807645,
      162807647,
      162807631,
      162807629,
      162807651,
      162807654,
      162807630,
      162807649,
      162807636,
      162807655,
      162807633,
      162807681,
      162807671,
      162807680,
      162807685,
      162807669,
      162807693,
      162807689,
      162807676,
      162807695,
      162807688,
      162807690,
      162807674,
      162807670,
      162807677,
      162807691,
      162807678,
      162807672,
      162807687,
      162807682,
      162807692,
      162807684,
      162807679,
      162807673,
      162807686,
      162807675,
      162807694,
      162807683,
      162807701,
      162807714,
      162807709,
      162807705,
      162807696,
      162807723,
      162807703,
      162807720,
      162807718,
      162807708,
      162807724,
      162807711,
      162807697,
      162807726,
      162807722,
      162807707,
      162807712,
      162807698,
      162807721,
      162807713,
      162807706,
      162807717,
      162807710,
      162807700,
      162807719,
      162807715,
      162807716,
      162807702,
      162807704,
      162807699,
      162807725,
      162807729,
      162807727,
      162807739,
      162807742,
      162807735,
      162807746,
      162807749,
      162807748,
      162807736,
      162807728,
      162807753,
      162807743,
      162807752,
      162807731,
      162807730,
      162807750,
      162807732,
      162807744,
      162807751,
      162807733,
      162807737,
      162807738,
      162807740,
      162807745,
      162807734,
      162807747,
      162807741,
      162807780,
      162807784,
      162807762,
      162807761,
      162807778,
      162807783,
      162807763,
      162807785,
      162807773,
      162807756,
      162807776,
      162807768,
      162807759,
      162807771,
      162807767,
      162807777,
      162807765,
      162807760,
      162807770,
      162807781,
      162807775,
      162807774,
      162807766,
      162807764,
      162807782,
      162807769,
      162807758,
      162807772,
      162807779,
      162807755,
      162807757,
      162807789,
      162807795,
      162807808,
      162807804,
      162807794,
      162807811,
      162807790,
      162807800,
      162807801,
      162807809,
      162807799,
      162807792,
      162807788,
      162807796,
      162807793,
      162807802,
      162807803,
      162807797,
      162807786,
      162807812,
      162807787,
      162807810,
      162807806,
      162807798,
      162807791,
      162807805,
      162807807,
      162807826,
      162807824,
      162807840,
      162807838,
      162807837,
      162807829,
      162807830,
      162807835,
      162807839,
      162807819,
      162807843,
      162807841,
      162807828,
      162807832,
      162807827,
      162807820,
      162807836,
      162807818,
      162807815,
      162807821,
      162807825,
      162807822,
      162807842,
      162807831,
      162807833,
      162807816,
      162807813,
      162807817,
      162807814,
      162807834,
      162807823,
      162807859,
      162807868,
      162807855,
      162807848,
      162807870,
      162807852,
      162807846,
      162807869,
      162807845,
      162807851,
      162807850,
      162807861,
      162807853,
      162807864,
      162807866,
      162807865,
      162807863,
      162807857,
      162807858,
      162807849,
      162807856,
      162807847,
      162807860,
      162807871,
      162807862,
      162807867,
      162807854,
      162807911,
      162807885,
      162807872,
      162807901,
      162807883,
      162807878,
      162807886,
      162807906,
      162807874,
      162807875,
      162807902,
      162807888,
      162807900,
      162807905,
      162807877,
      162807873,
      162807910,
      162807876,
      162807879,
      162807889,
      162807884,
      162807908,
      162807880,
      162807887,
      162807890,
      162807903,
      162807909,
      162807881,
      162807907,
      162807882,
      162807904,
      162807932,
      162807937,
      162807938,
      162807924,
      162807936,
      162807935,
      162807918,
      162807914,
      162807929,
      162807923,
      162807925,
      162807919,
      162807939,
      162807933,
      162807913,
      162807917,
      162807920,
      162807921,
      162807927,
      162807922,
      162807931,
      162807928,
      162807916,
      162807930,
      162807912,
      162807926,
      162807934,
      162807966,
      162807969,
      162807962,
      162807964,
      162807968,
      162807955,
      162807947,
      162807961,
      162807945,
      162807957,
      162807952,
      162807942,
      162807950,
      162807951,
      162807971,
      162807958,
      162807970,
      162807965,
      162807940,
      162807960,
      162807963,
      162807956,
      162807959,
      162807946,
      162807949,
      162807944,
      162807943,
      162807953,
      162807967,
      162807954,
      162807948,
      162807941,
      162807983,
      162807981,
      162807973,
      162807989,
      162807972,
      162807988,
      162807987,
      162807999,
      162807998,
      162807984,
      162807986,
      162807979,
      162807985,
      162807994,
      162807974,
      162807993,
      162807982,
      162807980,
      162807997,
      162807991,
      162807977,
      162807978,
      162807975,
      162807996,
      162807995,
      162807992,
      162807990,
      162807452,
      162808008,
      162808027,
      162808026,
      162808002,
      162808006,
      162808031,
      162808011,
      162808030,
      162808010,
      162808018,
      162808016,
      162808005,
      162808032,
      162808025,
      162808017,
      162808020,
      162808014,
      162808024,
      162808015,
      162808033,
      162808003,
      162808023,
      162808029,
      162808019,
      162808028,
      162808013,
      162808021,
      162808007,
      162808012,
      162808022,
      162808004,
      162808009,
      162808051,
      162808041,
      162808052,
      162808043,
      162808035,
      162808060,
      162808048,
      162808042,
      162808061,
      162808038,
      162808055,
      162808059,
      162808034,
      162808054,
      162808058,
      162808053,
      162808045,
      162808044,
      162808056,
      162808039,
      162808040,
      162808050,
      162808047,
      162808049,
      162808046,
      162808037,
      162808036,
      162808057,
      162808080,
      162808078,
      162808070,
      162808093,
      162808069,
      162808071,
      162808083,
      162808077,
      162808092,
      162808082,
      162808085,
      162808079,
      162808076,
      162808062,
      162808084,
      162808081,
      162808065,
      162808089,
      162808068,
      162808064,
      162808091,
      162808074,
      162808088,
      162808090,
      162808073,
      162808087,
      162808066,
      162808086,
      162808075,
      162808063,
      162808067,
      162808072,
      162808097,
      162808105,
      162808098,
      162808115,
      162808106,
      162808096,
      162808113,
      162808099,
      162808102,
      162808107,
      162808095,
      162808117,
      162808116,
      162808104,
      162808118,
      162808094,
      162808110,
      162808112,
      162808111,
      162808100,
      162808103,
      162808109,
      162808120,
      162808119,
      162808108,
      162808114,
      162808101,
      162808126,
      162808165,
      162808154,
      162808149,
      162808145,
      162808155,
      162808143,
      162808122,
      162808141,
      162808124,
      162808156,
      162808142,
      162808161,
      162808151,
      162808125,
      162808160,
      162808163,
      162808147,
      162808130,
      162808131,
      162808162,
      162808148,
      162808157,
      162808152,
      162808123,
      162808153,
      162808164,
      162808158,
      162808144,
      162808150,
      162808129,
      162808159,
      162808175,
      162808185,
      162808167,
      162808181,
      162808169,
      162808166,
      162808170,
      162808183,
      162808172,
      162808168,
      162808191,
      162808180,
      162808173,
      162808189,
      162808179,
      162808174,
      162808171,
      162808177,
      162808193,
      162808176,
      162808187,
      162808178,
      162808188,
      162808190,
      162808184,
      162808192,
      162808182,
      162808204,
      162808224,
      162808206,
      162808214,
      162808198,
      162808218,
      162808205,
      162808217,
      162808216,
      162808227,
      162808210,
      162808200,
      162808222,
      162808211,
      162808196,
      162808223,
      162808197,
      162808208,
      162808207,
      162808202,
      162808220,
      162808203,
      162808213,
      162808221,
      162808201,
      162808226,
      162808212,
      162808199,
      162808215,
      162808225,
      162808219,
      162808209,
      162808248,
      162808252,
      162808242,
      162808244,
      162808232,
      162808230,
      162808255,
      162808231,
      162808234,
      162808251,
      162808254,
      162808250,
      162808241,
      162808249,
      162808243,
      162808233,
      162808246,
      162808240,
      162808237,
      162808235,
      162808256,
      162808247,
      162808239,
      162808253,
      162808238,
      162808236,
      162808245,
      162808272,
      162808287,
      162808281,
      162808269,
      162808274,
      162808260,
      162808280,
      162808285,
      162808270,
      162808291,
      162808271,
      162808266,
      162808284,
      162808282,
      162808261,
      162808263,
      162808275,
      162808277,
      162808279,
      162808283,
      162808268,
      162808289,
      162808288,
      162808265,
      162808267,
      162808273,
      162808262,
      162808278,
      162808264,
      162808290,
      162808286,
      162808276,
      162808316,
      162808292,
      162808300,
      162808302,
      162808298,
      162808308,
      162808315,
      162808317,
      162808306,
      162808305,
      162808318,
      162808309,
      162808293,
      162808310,
      162808295,
      162808311,
      162808313,
      162808312,
      162808297,
      162808299,
      162808307,
      162808314,
      162808296,
      162808301,
      162808294,
      162808304,
      162808303,
      162808345,
      162808322,
      162808336,
      162808341,
      162808332,
      162808334,
      162808352,
      162808339,
      162808327,
      162808338,
      162808333,
      162808331,
      162808325,
      162808335,
      162808342,
      162808328,
      162808329,
      162808351,
      162808350,
      162808340,
      162808349,
      162808343,
      162808323,
      162808346,
      162808344,
      162808330,
      162808326,
      162808347,
      162808348,
      162808324,
      162808321,
      162808337,
      162808365,
      162808375,
      162808369,
      162808368,
      162808379,
      162808357,
      162808358,
      162808363,
      162808353,
      162808364,
      162808372,
      162808362,
      162808373,
      162808360,
      162808371,
      162808370,
      162808377,
      162808367,
      162808361,
      162808366,
      162808355,
      162808374,
      162808359,
      162808354,
      162808356,
      162808378,
      162808376,
      162808393,
      162808406,
      162808409,
      162808411,
      162808417,
      162808407,
      162808414,
      162808398,
      162808415,
      162808413,
      162808397,
      162808405,
      162808403,
      162808400,
      162808412,
      162808410,
      162808408,
      162808401,
      162808394,
      162808392,
      162808402,
      162808421,
      162808418,
      162808420,
      162808422,
      162808423,
      162808416,
      162808404,
      162808419,
      162808399,
      162808396,
      162808395,
      162808432,
      162808429,
      162808440,
      162808437,
      162808427,
      162808443,
      162808425,
      162808444,
      162808442,
      162808439,
      162808426,
      162808430,
      162808438,
      162808428,
      162808433,
      162808434,
      162808431,
      162808435,
      162808441,
      162808436,
      162808468,
      162803712
    ]
  },
  MainNet: { coin: [0], potr: [0] }
};

// src/constants/index.ts
var WalletProvider;
(function(WalletProvider2) {
  WalletProvider2["PERA"] = "pera";
  WalletProvider2["MNEMONIC"] = "mnemonic";
  WalletProvider2["WALLET_CONNECT"] = "wallet-connect";
})(WalletProvider || (WalletProvider = {}));
var Status;
(function(Status2) {
  Status2["SUCCESS"] = "SUCCESS";
  Status2["ERROR"] = "ERROR";
  Status2["WARNING"] = "WARNING";
  Status2["IN_PROGRESS"] = "IN_PROGRESS";
  Status2["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
var RAW_IPFS_URL_PREFIX = "ipfs://";
var RAW_IPFS_TEMPLATE_URL_PREFIX = "template-ipfs://";
var IPFS_GATEWAY_URL_PREFIX = "https://ipfs.io/ipfs/";
var POTR_URL = "potr.algo.xyz";
// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var isBuffer = function(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
};
var isArrayBufferView = function(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
};
var forEach = function(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length;i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0;i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
};
var findKey = function(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
};
var merge = function() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length;i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
};
var isSpecCompliantForm = function(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
};
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
var isArrayBuffer = kindOfTest("ArrayBuffer");
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
var _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method \'" + name + "\'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

// node_modules/axios/lib/core/AxiosError.js
var AxiosError = function(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
};
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/helpers/null.js
var null_default = null;

// node_modules/axios/lib/helpers/toFormData.js
var isVisitable = function(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
};
var removeBrackets = function(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
};
var renderKey = function(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
};
var isFlatArray = function(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
};
var toFormData = function(obj, formData, options2) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData);
  options2 = utils_default.toFlatObject(options2, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options2.metaTokens;
  const visitor = options2.visitor || defaultVisitor;
  const dots = options2.dots;
  const indexes = options2.indexes;
  const _Blob = options2.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(formData, el, utils_default.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
};
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
var encode = function(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
};
var AxiosURLSearchParams = function(params, options2) {
  this._pairs = [];
  params && toFormData_default(params, this, options2);
};
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
var encode2 = function(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
};
function buildURL(url, params, options2) {
  if (!params) {
    return url;
  }
  const _encode = options2 && options2.encode || encode2;
  const serializeFn = options2 && options2.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options2);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options2).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// node_modules/axios/lib/core/InterceptorManager.js
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, options2) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options2 ? options2.synchronous : false,
      runWhen: options2 ? options2.runWhen : null
    });
    return this.handlers.length - 1;
  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/axios/lib/platform/browser/classes/FormData.js
var FormData_default = typeof FormData !== "undefined" ? FormData : null;

// node_modules/axios/lib/platform/browser/classes/Blob.js
var Blob_default = typeof Blob !== "undefined" ? Blob : null;

// node_modules/axios/lib/platform/browser/index.js
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: Blob_default
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var exports_utils = {};
__export(exports_utils, {
  hasStandardBrowserWebWorkerEnv: () => {
    {
      return hasStandardBrowserWebWorkerEnv;
    }
  },
  hasStandardBrowserEnv: () => {
    {
      return hasStandardBrowserEnv;
    }
  },
  hasBrowserEnv: () => {
    {
      return hasBrowserEnv;
    }
  }
});
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var hasStandardBrowserEnv = ((product) => {
  return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
})(typeof navigator !== "undefined" && navigator.product);
var hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();

// node_modules/axios/lib/platform/index.js
var platform_default = {
  ...exports_utils,
  ...browser_default
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options2) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams, Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options2));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
var parsePropPath = function(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
};
var arrayToObject = function(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0;i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
};
var formDataToJSON = function(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__")
      return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
};
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
var stringifySafely = function(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
};
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(isFileList2 ? { "files[]": data } : data, _FormData && new _FormData, this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": undefined
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var normalizeHeader = function(header) {
  return header && String(header).trim().toLowerCase();
};
var normalizeValue = function(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
};
var parseTokens = function(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
};
var matchHeaderValue = function(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value))
    return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
};
var formatHeader = function(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
};
var buildAccessors = function(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
};
var $internals = Symbol("internals");
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === undefined || _rewrite === true || _rewrite === undefined && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
var CanceledError = function(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
};
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default("Request failed with status code " + response.status, [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? {
  write(name, value, expires, path, domain, secure) {
    const cookie = [name + "=" + encodeURIComponent(value)];
    utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
    utils_default.isString(path) && cookie.push("path=" + path);
    utils_default.isString(domain) && cookie.push("domain=" + domain);
    secure === true && cookie.push("secure");
    document.cookie = cookie.join("; ");
  },
  read(name) {
    const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
    return match ? decodeURIComponent(match[3]) : null;
  },
  remove(name) {
    this.write(name, "", Date.now() - 86400000);
  }
} : {
  write() {
  },
  read() {
    return null;
  },
  remove() {
  }
};

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? function standardBrowserEnv() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement("a");
  let originURL;
  function resolveURL(url) {
    let href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin(requestURL) {
    const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/speedometer.js
var speedometer = function(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
};
var speedometer_default = speedometer;

// node_modules/axios/lib/adapters/xhr.js
var progressEventReducer = function(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return (e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
};
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
    let { responseType, withXSRFToken } = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    let contentType;
    if (utils_default.isFormData(requestData)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false);
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    let request = new XMLHttpRequest;
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional3 = config.transitional || transitional_default;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(timeoutErrorMessage, transitional3.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    if (platform_default.hasStandardBrowserEnv) {
      withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(fullPath)) {
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }
    requestData === undefined && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0;i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === undefined) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
var throwIfCancellationRequested = function(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
};
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(config, config.transformRequest);
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(config, config.transformResponse, response);
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/env/data.js
var VERSION = "1.6.8";

// node_modules/axios/lib/helpers/validator.js
var assertOptions = function(options2, schema, allowUnknown) {
  if (typeof options2 !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options2);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options2[opt];
      const result = value === undefined || validator(value, opt, options2);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
};
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional3(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option \'" + opt + "\'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError_default.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;

class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default,
      response: new InterceptorManager_default
    };
  }
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;
        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error;
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        if (!err.stack) {
          err.stack = stack;
        } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
          err.stack += "\n" + stack;
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional4, paramsSerializer, headers } = config;
    if (transitional4 !== undefined) {
      validator_default.assertOptions(transitional4, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(headers.common, headers[config.method]);
    headers && utils_default.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (method) => {
      delete headers[method];
    });
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data2, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data: data2
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
var createInstance = function(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
};
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// src/lib/utils/index.ts
var import_bottleneck = __toESM(require_Bottleneck(), 1);

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

// node_modules/date-fns/esm/addMilliseconds/index.js
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/defaultOptions/index.js
function getDefaultOptions() {
  return defaultOptions;
}
var defaultOptions = {};

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

// node_modules/date-fns/esm/isDate/index.js
function isDate2(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate2(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

// node_modules/date-fns/esm/subMilliseconds/index.js
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options2) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions3 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options2 === null || options2 === undefined ? undefined : options2.weekStartsOn) !== null && _options$weekStartsOn !== undefined ? _options$weekStartsOn : options2 === null || options2 === undefined ? undefined : (_options$locale = options2.locale) === null || _options$locale === undefined ? undefined : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === undefined ? undefined : _options$locale$optio.weekStartsOn) !== null && _ref3 !== undefined ? _ref3 : defaultOptions3.weekStartsOn) !== null && _ref2 !== undefined ? _ref2 : (_defaultOptions$local = defaultOptions3.locale) === null || _defaultOptions$local === undefined ? undefined : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === undefined ? undefined : _defaultOptions$local2.weekStartsOn) !== null && _ref !== undefined ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
function getUTCWeekYear(dirtyDate, options2) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions4 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options2 === null || options2 === undefined ? undefined : options2.firstWeekContainsDate) !== null && _options$firstWeekCon !== undefined ? _options$firstWeekCon : options2 === null || options2 === undefined ? undefined : (_options$locale = options2.locale) === null || _options$locale === undefined ? undefined : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === undefined ? undefined : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== undefined ? _ref3 : defaultOptions4.firstWeekContainsDate) !== null && _ref2 !== undefined ? _ref2 : (_defaultOptions$local = defaultOptions4.locale) === null || _defaultOptions$local === undefined ? undefined : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === undefined ? undefined : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== undefined ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options2);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options2);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, options2) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions5 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options2 === null || options2 === undefined ? undefined : options2.firstWeekContainsDate) !== null && _options$firstWeekCon !== undefined ? _options$firstWeekCon : options2 === null || options2 === undefined ? undefined : (_options$locale = options2.locale) === null || _options$locale === undefined ? undefined : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === undefined ? undefined : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== undefined ? _ref3 : defaultOptions5.firstWeekContainsDate) !== null && _ref2 !== undefined ? _ref2 : (_defaultOptions$local = defaultOptions5.locale) === null || _defaultOptions$local === undefined ? undefined : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === undefined ? undefined : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== undefined ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options2);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options2);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 604800000;
function getUTCWeek(dirtyDate, options2) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options2).getTime() - startOfUTCWeekYear(date, options2).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
var formatTimezoneShort = function(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
};
var formatTimezoneWithOptionalMinutes = function(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
};
var formatTimezone = function(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
};
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters2 = {
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize.era(era, {
          width: "wide"
        });
    }
  },
  y: function y2(date, token, localize) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date, token);
  },
  Y: function Y(date, token, localize, options2) {
    var signedWeekYear = getUTCWeekYear(date, options2);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function M2(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date, token);
      case "Mo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function w(date, token, localize, options2) {
    var week = getUTCWeek(date, options2);
    if (token === "wo") {
      return localize.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  d: function d2(date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date, token);
  },
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function e(date, token, localize, options2) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function c(date, token, localize, options2) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function a2(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function h2(date, token, localize) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date, token);
  },
  H: function H2(date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date, token);
  },
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  m: function m2(date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date, token);
  },
  s: function s2(date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date, token);
  },
  S: function S2(date, token) {
    return lightFormatters_default.S(date, token);
  },
  X: function X(date, token, _localize, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  x: function x(date, token, _localize, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  O: function O(date, token, _localize, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  z: function z(date, token, _localize, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  t: function t(date, token, _localize, options2) {
    var originalDate = options2._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  T: function T(date, token, _localize, options2) {
    var originalDate = options2._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong) {
  switch (pattern) {
    case "P":
      return formatLong.date({
        width: "short"
      });
    case "PP":
      return formatLong.date({
        width: "medium"
      });
    case "PPP":
      return formatLong.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong) {
  switch (pattern) {
    case "p":
      return formatLong.time({
        width: "short"
      });
    case "pp":
      return formatLong.time({
        width: "medium"
      });
    case "ppp":
      return formatLong.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options2) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options2 !== null && options2 !== undefined && options2.addSuffix) {
    if (options2.comparison && options2.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var width = options2.width ? String(options2.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options2) {
    var context = options2 !== null && options2 !== undefined && options2.context ? String(options2.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options2 !== null && options2 !== undefined && options2.width ? String(options2.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options2 !== null && options2 !== undefined && options2.width ? String(options2.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
var findKey2 = function(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return;
};
var findIndex = function(array, predicate) {
  for (var key = 0;key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return;
};
function buildMatchFn(args) {
  return function(string) {
    var options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options2.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey2(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options2.valueCallback ? options2.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options2.valueCallback ? options2.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var en_US_default = locale;

// node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale_default = en_US_default;

// node_modules/date-fns/esm/format/index.js
var cleanEscapedString = function(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
};
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options2) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions6 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options2 === null || options2 === undefined ? undefined : options2.locale) !== null && _options$locale !== undefined ? _options$locale : defaultOptions6.locale) !== null && _ref !== undefined ? _ref : defaultLocale_default;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options2 === null || options2 === undefined ? undefined : options2.firstWeekContainsDate) !== null && _options$firstWeekCon !== undefined ? _options$firstWeekCon : options2 === null || options2 === undefined ? undefined : (_options$locale2 = options2.locale) === null || _options$locale2 === undefined ? undefined : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === undefined ? undefined : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== undefined ? _ref4 : defaultOptions6.firstWeekContainsDate) !== null && _ref3 !== undefined ? _ref3 : (_defaultOptions$local = defaultOptions6.locale) === null || _defaultOptions$local === undefined ? undefined : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === undefined ? undefined : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== undefined ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options2 === null || options2 === undefined ? undefined : options2.weekStartsOn) !== null && _options$weekStartsOn !== undefined ? _options$weekStartsOn : options2 === null || options2 === undefined ? undefined : (_options$locale3 = options2.locale) === null || _options$locale3 === undefined ? undefined : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === undefined ? undefined : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== undefined ? _ref7 : defaultOptions6.weekStartsOn) !== null && _ref6 !== undefined ? _ref6 : (_defaultOptions$local3 = defaultOptions6.locale) === null || _defaultOptions$local3 === undefined ? undefined : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === undefined ? undefined : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== undefined ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!(options2 !== null && options2 !== undefined && options2.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options2 !== null && options2 !== undefined && options2.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
// src/contracts/build/summon.contract.mjs
var exports_summon_contract = {};
__export(exports_summon_contract, {
  getExports: () => {
    {
      return getExports;
    }
  },
  _versionHash: () => {
    {
      return _versionHash;
    }
  },
  _version: () => {
    {
      return _version;
    }
  },
  _stateSourceMap: () => {
    {
      return _stateSourceMap;
    }
  },
  _getViews: () => {
    {
      return _getViews;
    }
  },
  _getMaps: () => {
    {
      return _getMaps;
    }
  },
  _getEvents: () => {
    {
      return _getEvents;
    }
  },
  _backendVersion: () => {
    {
      return _backendVersion;
    }
  },
  _Participants: () => {
    {
      return _Participants;
    }
  },
  _Connectors: () => {
    {
      return _Connectors;
    }
  },
  _APIs: () => {
    {
      return _APIs;
    }
  },
  Summoner: () => {
    {
      return Summoner;
    }
  },
  Deployer: () => {
    {
      return Deployer;
    }
  },
  Admin: () => {
    {
      return Admin;
    }
  }
});
function getExports(s3) {
  const stdlib = s3.reachStdlib;
  return {};
}
function _getEvents(s3) {
  const stdlib = s3.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "7"));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20"));
  return {
    result: [ctc0],
    status: [ctc1]
  };
}
function _getViews(s3, viewlib) {
  const stdlib = s3.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  return {
    infos: {},
    views: {
      1: [ctc3, ctc4, ctc4, ctc0],
      3: [ctc4, ctc4, ctc4, ctc5, ctc3, ctc0],
      5: [ctc4, ctc4, ctc4, ctc5, ctc3, ctc0, ctc0],
      7: [ctc4, ctc4, ctc4, ctc5, ctc5, ctc3, ctc0, ctc0],
      9: [ctc4, ctc4, ctc4, ctc5, ctc5, ctc3, ctc0, ctc2, ctc0, ctc0]
    }
  };
}
function _getMaps(s3) {
  const stdlib = s3.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
  };
}
async function Admin(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));
  const v719 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false
  ];
  const v720 = [v719, v719];
  const v724 = stdlib.protect(ctc0, interact.coin, "for Admin's interact field coin");
  const txn1 = await ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v727,
    time: v726,
    didSend: v23,
    from: v725
  } = txn1;
  const v728 = "PREPARING           ";
  const v729 = v725;
  const v736 = stdlib.add(v726, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
  const txn2 = await ctc.sendrecv({
    args: [v720, v725, v729, v736, v724],
    evt_cnt: 1,
    funcNum: 1,
    lct: v726,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:decimal", stdlib.UInt_max, "0"), []],
    sim_p: async (txn22) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v747],
        secs: v749,
        time: v748,
        didSend: v39,
        from: v746
      } = txn22;
      const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
      const v751 = stdlib.Array_set(v750, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"));
      const v752 = stdlib.Array_set(v720, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"), v751);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v747
      });
      const v754 = "PAYING              ";
      const v758 = stdlib.add(v748, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
      sim_r.isHalt = false;
      return sim_r;
    },
    soloSend: true,
    timeoutAt: ["time", v736],
    tys: [ctc6, ctc2, ctc2, ctc3, ctc0],
    waitIfNotPresent: false
  });
  if (txn2.didTimeout) {
    const v1068 = "failed to publish coin";
    stdlib.protect(ctc1, await interact.log(v1068), {
      at: "./src/contracts/summon.rsh:87:35:application",
      fs: [
        "at ./src/contracts/summon.rsh:87:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:87:35:function exp)",
        'at ./src/contracts/summon.rsh:87:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:87:35:application)'
      ],
      msg: "log",
      who: "Admin"
    });
    const txn3 = await ctc.sendrecv({
      args: [v720, v725, v729, v736],
      evt_cnt: 0,
      funcNum: 2,
      lct: v726,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
      sim_p: async (txn32) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };
        const {
          data: [],
          secs: v10712,
          time: v10702,
          didSend: v6432,
          from: v10692
        } = txn32;
        sim_r.txns.push({
          kind: "halt",
          tok: undefined
        });
        sim_r.isHalt = true;
        return sim_r;
      },
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc6, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
    });
    const {
      data: [],
      secs: v1071,
      time: v1070,
      didSend: v643,
      from: v1069
    } = txn3;
    return;
  } else {
    const {
      data: [v747],
      secs: v749,
      time: v748,
      didSend: v39,
      from: v746
    } = txn2;
    const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
    const v751 = stdlib.Array_set(v750, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"));
    const v752 = stdlib.Array_set(v720, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"), v751);
    const v754 = "PAYING              ";
    const v758 = stdlib.add(v748, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
    const v767 = "published coin";
    stdlib.protect(ctc1, await interact.log(v767), {
      at: "./src/contracts/summon.rsh:93:27:application",
      fs: [
        "at ./src/contracts/summon.rsh:93:27:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:93:27:function exp)",
        'at ./src/contracts/summon.rsh:93:27:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:93:27:application)'
      ],
      msg: "log",
      who: "Admin"
    });
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ["time", v758],
      waitIfNotPresent: false
    });
    if (txn3.didTimeout) {
      const v1045 = "failed to pay coin";
      stdlib.protect(ctc1, await interact.log(v1045), {
        at: "./src/contracts/summon.rsh:102:35:application",
        fs: [
          "at ./src/contracts/summon.rsh:102:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:102:35:function exp)",
          'at ./src/contracts/summon.rsh:102:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:102:35:application)'
        ],
        msg: "log",
        who: "Admin"
      });
      const txn4 = await ctc.sendrecv({
        args: [v725, v729, v746, v747, v752, v758],
        evt_cnt: 0,
        funcNum: 4,
        lct: v748,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
        sim_p: async (txn42) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };
          const {
            data: [],
            secs: v10482,
            time: v10472,
            didSend: v6012,
            from: v10462
          } = txn42;
          sim_r.txns.push({
            kind: "halt",
            tok: v747
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined
          });
          sim_r.isHalt = true;
          return sim_r;
        },
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3],
        waitIfNotPresent: false
      });
      const {
        data: [],
        secs: v1048,
        time: v1047,
        didSend: v601,
        from: v1046
      } = txn4;
      const v1049 = stdlib.addressEq(v746, v1046);
      const v1050 = stdlib.addressEq(v725, v1046);
      const v1051 = v1049 ? true : v1050;
      const v1052 = stdlib.addressEq(v729, v1046);
      const v1053 = v1051 ? true : v1052;
      stdlib.assert(v1053, {
        at: "reach standard library:197:11:dot",
        fs: [
          'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
        ],
        msg: "sender correct",
        who: "Admin"
      });
      return;
    } else {
      const {
        data: [],
        secs: v770,
        time: v769,
        didSend: v54,
        from: v768
      } = txn3;
      const v771 = v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
      const v772 = v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
      const v773 = stdlib.add(v772, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"));
      const v774 = stdlib.le(v773, stdlib.UInt_max);
      stdlib.assert(v774, {
        at: "./src/contracts/summon.rsh:101:18:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "Admin"
      });
      const v777 = stdlib.Array_set(v771, "0", v773);
      const v778 = stdlib.Array_set(v752, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"), v777);
      const v779 = stdlib.addressEq(v729, v768);
      stdlib.assert(v779, {
        at: "./src/contracts/summon.rsh:101:18:dot",
        fs: [],
        msg: "sender correct",
        who: "Admin"
      });
      const v780 = "SUMMONING           ";
      const v784 = stdlib.add(v769, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
      const v792 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
      const v793 = v792[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
      const v796 = stdlib.protect(ctc0, await interact.get_potr(v747), {
        at: "./src/contracts/summon.rsh:117:58:application",
        fs: [
          "at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)"
        ],
        msg: "get_potr",
        who: "Admin"
      });
      const v802 = stdlib.tokenEq(v796, v747);
      const v803 = v802 ? false : true;
      stdlib.assert(v803, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
          "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
          'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
          "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
          'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
          "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
          'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
          "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
          'at ./src/contracts/summon.rsh:119:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
          "at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)"
        ],
        msg: "The asa ids provided are the same",
        who: "Admin"
      });
      const v807 = stdlib.tokenEq(v747, v796);
      const v808 = v807 ? false : true;
      stdlib.assert(v808, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
          "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
          'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
          "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
          'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
          "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
          'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
          "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
          'at ./src/contracts/summon.rsh:119:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
          "at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)"
        ],
        msg: "The asa ids provided are the same",
        who: "Admin"
      });
      const v811 = "published potr";
      stdlib.protect(ctc1, await interact.log(v811), {
        at: "./src/contracts/summon.rsh:120:29:application",
        fs: [
          "at ./src/contracts/summon.rsh:115:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:115:23:function exp)"
        ],
        msg: "log",
        who: "Admin"
      });
      const txn4 = await ctc.sendrecv({
        args: [v725, v729, v746, v747, v778, v784, v793, v796],
        evt_cnt: 1,
        funcNum: 5,
        lct: v769,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [
          stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:decimal", stdlib.UInt_max, "0"),
          []
        ],
        sim_p: async (txn42) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };
          const {
            data: [v813],
            secs: v815,
            time: v814,
            didSend: v302,
            from: v812
          } = txn42;
          const v816 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
          const v817 = stdlib.Array_set(v816, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"));
          const v818 = stdlib.Array_set(v778, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"), v817);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
            kind: "init",
            tok: v813
          });
          const v826 = stdlib.add(v814, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
          const v834 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
          const v835 = v834[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
          sim_r.isHalt = false;
          return sim_r;
        },
        soloSend: true,
        timeoutAt: ["time", v784],
        tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3, ctc3, ctc0],
        waitIfNotPresent: false
      });
      if (txn4.didTimeout) {
        const v1011 = "failed to publish potr";
        stdlib.protect(ctc1, await interact.log(v1011), {
          at: "./src/contracts/summon.rsh:123:35:application",
          fs: [
            "at ./src/contracts/summon.rsh:123:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:123:35:function exp)",
            'at ./src/contracts/summon.rsh:123:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:123:35:application)'
          ],
          msg: "log",
          who: "Admin"
        });
        const txn5 = await ctc.sendrecv({
          args: [v725, v729, v746, v747, v778, v784, v793],
          evt_cnt: 0,
          funcNum: 6,
          lct: v769,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
            []
          ],
          sim_p: async (txn52) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };
            const {
              data: [],
              secs: v10142,
              time: v10132,
              didSend: v5482,
              from: v10122
            } = txn52;
            sim_r.txns.push({
              kind: "from",
              to: v729,
              tok: v747
            });
            sim_r.txns.push({
              kind: "halt",
              tok: v747
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined
            });
            sim_r.isHalt = true;
            return sim_r;
          },
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3, ctc3],
          waitIfNotPresent: false
        });
        const {
          data: [],
          secs: v1014,
          time: v1013,
          didSend: v548,
          from: v1012
        } = txn5;
        const v1015 = stdlib.addressEq(v746, v1012);
        const v1016 = stdlib.addressEq(v725, v1012);
        const v1017 = v1015 ? true : v1016;
        const v1018 = stdlib.addressEq(v729, v1012);
        const v1019 = v1017 ? true : v1018;
        stdlib.assert(v1019, {
          at: "reach standard library:197:11:dot",
          fs: [
            'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
          ],
          msg: "sender correct",
          who: "Admin"
        });
        const v1032 = stdlib.sub(v793, v793);
        const v1033 = stdlib.ge(v1032, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
        stdlib.assert(v1033, {
          at: "reach standard library:198:46:application",
          fs: [
            'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        return;
      } else {
        const {
          data: [v813],
          secs: v815,
          time: v814,
          didSend: v302,
          from: v812
        } = txn4;
        const v816 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
        const v817 = stdlib.Array_set(v816, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"));
        const v818 = stdlib.Array_set(v778, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"), v817);
        const v820 = stdlib.tokenEq(v813, v747);
        const v821 = v820 ? false : true;
        stdlib.assert(v821, {
          at: "./src/contracts/summon.rsh:122:15:dot",
          fs: [],
          msg: "non-network tokens distinct",
          who: "Admin"
        });
        const v822 = stdlib.addressEq(v746, v812);
        stdlib.assert(v822, {
          at: "./src/contracts/summon.rsh:122:15:dot",
          fs: [],
          msg: "sender correct",
          who: "Admin"
        });
        const v826 = stdlib.add(v814, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
        const v834 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
        const v835 = v834[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
        const txn5 = await ctc.sendrecv({
          args: [v725, v729, v746, v747, v813, v818, v826, v835],
          evt_cnt: 0,
          funcNum: 7,
          lct: v814,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0"),
            [
              [
                stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"),
                v813
              ]
            ]
          ],
          sim_p: async (txn52) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };
            const {
              data: [],
              secs: v838,
              time: v837,
              didSend: v311,
              from: v836
            } = txn52;
            const v839 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1")];
            const v840 = v839[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0")];
            const v841 = stdlib.add(v840, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"));
            const v845 = stdlib.Array_set(v839, "0", v841);
            const v846 = stdlib.Array_set(v818, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"), v845);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"),
              kind: "to",
              tok: v813
            });
            const v848 = "CLAIMING            ";
            const v852 = stdlib.add(v837, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
            const v860 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "1")];
            const v861 = v860[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "0")];
            const v862 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
            const v863 = v862[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
            sim_r.isHalt = false;
            return sim_r;
          },
          soloSend: true,
          timeoutAt: ["time", v826],
          tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc3],
          waitIfNotPresent: false
        });
        if (txn5.didTimeout) {
          const v974 = "failed to deposit potr";
          stdlib.protect(ctc1, await interact.log(v974), {
            at: "./src/contracts/summon.rsh:129:35:application",
            fs: [
              "at ./src/contracts/summon.rsh:129:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:129:35:function exp)",
              'at ./src/contracts/summon.rsh:129:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:129:35:application)'
            ],
            msg: "log",
            who: "Admin"
          });
          const txn6 = await ctc.sendrecv({
            args: [v725, v729, v746, v747, v813, v818, v826, v835],
            evt_cnt: 0,
            funcNum: 8,
            lct: v814,
            onlyIf: true,
            out_tys: [],
            pay: [
              stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
              []
            ],
            sim_p: async (txn62) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => {
                sim_txn_ctr = sim_txn_ctr.sub(1);
                return sim_txn_ctr;
              };
              const {
                data: [],
                secs: v9772,
                time: v9762,
                didSend: v4922,
                from: v9752
              } = txn62;
              sim_r.txns.push({
                kind: "from",
                to: v729,
                tok: v747
              });
              sim_r.txns.push({
                kind: "halt",
                tok: v813
              });
              sim_r.txns.push({
                kind: "halt",
                tok: v747
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined
              });
              sim_r.isHalt = true;
              return sim_r;
            },
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc3],
            waitIfNotPresent: false
          });
          const {
            data: [],
            secs: v977,
            time: v976,
            didSend: v492,
            from: v975
          } = txn6;
          const v978 = stdlib.addressEq(v746, v975);
          const v979 = stdlib.addressEq(v725, v975);
          const v980 = v978 ? true : v979;
          const v981 = stdlib.addressEq(v729, v975);
          const v982 = v980 ? true : v981;
          stdlib.assert(v982, {
            at: "reach standard library:197:11:dot",
            fs: [
              'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
            ],
            msg: "sender correct",
            who: "Admin"
          });
          const v995 = stdlib.sub(v835, v835);
          const v996 = stdlib.ge(v995, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
          stdlib.assert(v996, {
            at: "reach standard library:198:46:application",
            fs: [
              'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
            ],
            msg: "assume >= 0",
            who: "Admin"
          });
          return;
        } else {
          const {
            data: [],
            secs: v838,
            time: v837,
            didSend: v311,
            from: v836
          } = txn5;
          const v839 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1")];
          const v840 = v839[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0")];
          const v841 = stdlib.add(v840, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"));
          const v842 = stdlib.le(v841, stdlib.UInt_max);
          stdlib.assert(v842, {
            at: "./src/contracts/summon.rsh:128:15:dot",
            fs: [],
            msg: "assume <= UInt.max",
            who: "Admin"
          });
          const v845 = stdlib.Array_set(v839, "0", v841);
          const v846 = stdlib.Array_set(v818, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"), v845);
          const v847 = stdlib.addressEq(v746, v836);
          stdlib.assert(v847, {
            at: "./src/contracts/summon.rsh:128:15:dot",
            fs: [],
            msg: "sender correct",
            who: "Admin"
          });
          const v848 = "CLAIMING            ";
          const v852 = stdlib.add(v837, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
          const v860 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "1")];
          const v861 = v860[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "0")];
          const v862 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
          const v863 = v862[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
          const txn6 = await ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: ["time", v852],
            waitIfNotPresent: false
          });
          if (txn6.didTimeout) {
            const v917 = "failed to opt in";
            stdlib.protect(ctc1, await interact.log(v917), {
              at: "./src/contracts/summon.rsh:148:43:application",
              fs: [
                "at ./src/contracts/summon.rsh:148:43:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:148:43:function exp)",
                'at ./src/contracts/summon.rsh:148:43:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:148:43:application)'
              ],
              msg: "log",
              who: "Admin"
            });
            const txn7 = await ctc.sendrecv({
              args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
              evt_cnt: 0,
              funcNum: 10,
              lct: v837,
              onlyIf: true,
              out_tys: [],
              pay: [
                stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
                []
              ],
              sim_p: async (txn72) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => {
                  sim_txn_ctr = sim_txn_ctr.sub(1);
                  return sim_txn_ctr;
                };
                const {
                  data: [],
                  secs: v9202,
                  time: v9192,
                  didSend: v4182,
                  from: v9182
                } = txn72;
                sim_r.txns.push({
                  kind: "from",
                  to: v746,
                  tok: v813
                });
                sim_r.txns.push({
                  kind: "from",
                  to: v746,
                  tok: v747
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: v813
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: v747
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined
                });
                sim_r.isHalt = true;
                return sim_r;
              },
              soloSend: false,
              timeoutAt: undefined,
              tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc5, ctc3, ctc3],
              waitIfNotPresent: false
            });
            const {
              data: [],
              secs: v920,
              time: v919,
              didSend: v418,
              from: v918
            } = txn7;
            const v921 = stdlib.addressEq(v746, v918);
            const v922 = stdlib.addressEq(v725, v918);
            const v923 = v921 ? true : v922;
            const v924 = stdlib.addressEq(v729, v918);
            const v925 = v923 ? true : v924;
            stdlib.assert(v925, {
              at: "reach standard library:197:11:dot",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "sender correct",
              who: "Admin"
            });
            const v947 = stdlib.sub(v861, v861);
            const v948 = stdlib.ge(v947, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
            stdlib.assert(v948, {
              at: "reach standard library:198:46:application",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "assume >= 0",
              who: "Admin"
            });
            const v951 = stdlib.Array_set(v860, "0", v947);
            const v952 = stdlib.Array_set(v846, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1"), v951);
            const v953 = v952[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
            const v954 = v953[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
            const v958 = stdlib.sub(v954, v863);
            const v959 = stdlib.ge(v958, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
            stdlib.assert(v959, {
              at: "reach standard library:198:46:application",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "assume >= 0",
              who: "Admin"
            });
            return;
          } else {
            const {
              data: [],
              secs: v869,
              time: v868,
              didSend: v321,
              from: v867
            } = txn6;
            const v870 = stdlib.addressEq(v729, v867);
            stdlib.assert(v870, {
              at: "./src/contracts/summon.rsh:145:18:dot",
              fs: [],
              msg: "sender correct",
              who: "Admin"
            });
            const v873 = stdlib.eq(v863, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:157:33:decimal", stdlib.UInt_max, "1"));
            stdlib.assert(v873, {
              at: "reach standard library:57:5:application",
              fs: [
                'at ./src/contracts/summon.rsh:157:14:application call to "check" (defined at: reach standard library:49:32:function exp)'
              ],
              msg: null,
              who: "Admin"
            });
            const v877 = stdlib.eq(v861, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:158:33:decimal", stdlib.UInt_max, "1"));
            stdlib.assert(v877, {
              at: "reach standard library:57:5:application",
              fs: [
                'at ./src/contracts/summon.rsh:158:14:application call to "check" (defined at: reach standard library:49:32:function exp)'
              ],
              msg: null,
              who: "Admin"
            });
            const v886 = stdlib.sub(v861, v861);
            const v887 = stdlib.ge(v886, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:161:45:application", stdlib.UInt_max, "0"));
            stdlib.assert(v887, {
              at: "./src/contracts/summon.rsh:161:45:application",
              fs: [],
              msg: "assume >= 0",
              who: "Admin"
            });
            const v890 = stdlib.Array_set(v860, "0", v886);
            const v891 = stdlib.Array_set(v846, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:161:45:application", stdlib.UInt_max, "1"), v890);
            const v892 = v891[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
            const v893 = v892[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
            const v899 = stdlib.sub(v893, v893);
            const v900 = stdlib.ge(v899, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:45:application", stdlib.UInt_max, "0"));
            stdlib.assert(v900, {
              at: "./src/contracts/summon.rsh:162:45:application",
              fs: [],
              msg: "assume >= 0",
              who: "Admin"
            });
            const v905 = "SUCCESS";
            const v915 = "success";
            stdlib.protect(ctc1, await interact.log(v915), {
              at: "./src/contracts/summon.rsh:167:27:application",
              fs: [
                "at ./src/contracts/summon.rsh:167:27:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:167:27:function exp)",
                'at ./src/contracts/summon.rsh:167:27:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:167:27:application)'
              ],
              msg: "log",
              who: "Admin"
            });
            return;
          }
        }
      }
    }
  }
}
async function Deployer(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));
  const v719 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false
  ];
  const v720 = [v719, v719];
  const txn1 = await ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify("./src/contracts/summon.rsh:69:18:dot", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify("./src/contracts/summon.rsh:69:18:decimal", stdlib.UInt_max, "0"), []],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [],
        secs: v7272,
        time: v7262,
        didSend: v232,
        from: v7252
      } = txn12;
      const v7282 = "PREPARING           ";
      const v7292 = v7252;
      const v7302 = await ctc.getContractInfo();
      const v7312 = await ctc.getContractAddress();
      const v7362 = stdlib.add(v7262, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
      sim_r.isHalt = false;
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v727,
    time: v726,
    didSend: v23,
    from: v725
  } = txn1;
  const v728 = "PREPARING           ";
  const v729 = v725;
  const v730 = await ctc.getContractInfo();
  const v731 = await ctc.getContractAddress();
  stdlib.protect(ctc0, await interact.deployed(v730, v731), {
    at: "./src/contracts/summon.rsh:74:35:application",
    fs: [
      "at ./src/contracts/summon.rsh:74:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:74:35:function exp)",
      'at ./src/contracts/summon.rsh:74:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:74:35:application)'
    ],
    msg: "deployed",
    who: "Deployer"
  });
  const v736 = stdlib.add(v726, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
  const txn2 = await ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ["time", v736],
    waitIfNotPresent: false
  });
  if (txn2.didTimeout) {
    const txn3 = await ctc.sendrecv({
      args: [v720, v725, v729, v736],
      evt_cnt: 0,
      funcNum: 2,
      lct: v726,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
      sim_p: async (txn32) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };
        const {
          data: [],
          secs: v10712,
          time: v10702,
          didSend: v6432,
          from: v10692
        } = txn32;
        sim_r.txns.push({
          kind: "halt",
          tok: undefined
        });
        sim_r.isHalt = true;
        return sim_r;
      },
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc6, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
    });
    const {
      data: [],
      secs: v1071,
      time: v1070,
      didSend: v643,
      from: v1069
    } = txn3;
    return;
  } else {
    const {
      data: [v747],
      secs: v749,
      time: v748,
      didSend: v39,
      from: v746
    } = txn2;
    const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
    const v751 = stdlib.Array_set(v750, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"));
    const v752 = stdlib.Array_set(v720, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"), v751);
    const v754 = "PAYING              ";
    const v758 = stdlib.add(v748, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ["time", v758],
      waitIfNotPresent: false
    });
    if (txn3.didTimeout) {
      const txn4 = await ctc.sendrecv({
        args: [v725, v729, v746, v747, v752, v758],
        evt_cnt: 0,
        funcNum: 4,
        lct: v748,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
        sim_p: async (txn42) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };
          const {
            data: [],
            secs: v10482,
            time: v10472,
            didSend: v6012,
            from: v10462
          } = txn42;
          sim_r.txns.push({
            kind: "halt",
            tok: v747
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined
          });
          sim_r.isHalt = true;
          return sim_r;
        },
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc2, ctc2, ctc1, ctc6, ctc3],
        waitIfNotPresent: false
      });
      const {
        data: [],
        secs: v1048,
        time: v1047,
        didSend: v601,
        from: v1046
      } = txn4;
      const v1049 = stdlib.addressEq(v746, v1046);
      const v1050 = stdlib.addressEq(v725, v1046);
      const v1051 = v1049 ? true : v1050;
      const v1052 = stdlib.addressEq(v729, v1046);
      const v1053 = v1051 ? true : v1052;
      stdlib.assert(v1053, {
        at: "reach standard library:197:11:dot",
        fs: [
          'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
        ],
        msg: "sender correct",
        who: "Deployer"
      });
      return;
    } else {
      const {
        data: [],
        secs: v770,
        time: v769,
        didSend: v54,
        from: v768
      } = txn3;
      const v771 = v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
      const v772 = v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
      const v773 = stdlib.add(v772, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"));
      const v774 = stdlib.le(v773, stdlib.UInt_max);
      stdlib.assert(v774, {
        at: "./src/contracts/summon.rsh:101:18:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "Deployer"
      });
      const v777 = stdlib.Array_set(v771, "0", v773);
      const v778 = stdlib.Array_set(v752, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"), v777);
      const v779 = stdlib.addressEq(v729, v768);
      stdlib.assert(v779, {
        at: "./src/contracts/summon.rsh:101:18:dot",
        fs: [],
        msg: "sender correct",
        who: "Deployer"
      });
      const v780 = "SUMMONING           ";
      const v784 = stdlib.add(v769, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
      const v792 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
      const v793 = v792[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
      const txn4 = await ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: ["time", v784],
        waitIfNotPresent: false
      });
      if (txn4.didTimeout) {
        const txn5 = await ctc.sendrecv({
          args: [v725, v729, v746, v747, v778, v784, v793],
          evt_cnt: 0,
          funcNum: 6,
          lct: v769,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
            []
          ],
          sim_p: async (txn52) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };
            const {
              data: [],
              secs: v10142,
              time: v10132,
              didSend: v5482,
              from: v10122
            } = txn52;
            sim_r.txns.push({
              kind: "from",
              to: v729,
              tok: v747
            });
            sim_r.txns.push({
              kind: "halt",
              tok: v747
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined
            });
            sim_r.isHalt = true;
            return sim_r;
          },
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc2, ctc2, ctc2, ctc1, ctc6, ctc3, ctc3],
          waitIfNotPresent: false
        });
        const {
          data: [],
          secs: v1014,
          time: v1013,
          didSend: v548,
          from: v1012
        } = txn5;
        const v1015 = stdlib.addressEq(v746, v1012);
        const v1016 = stdlib.addressEq(v725, v1012);
        const v1017 = v1015 ? true : v1016;
        const v1018 = stdlib.addressEq(v729, v1012);
        const v1019 = v1017 ? true : v1018;
        stdlib.assert(v1019, {
          at: "reach standard library:197:11:dot",
          fs: [
            'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
          ],
          msg: "sender correct",
          who: "Deployer"
        });
        const v1032 = stdlib.sub(v793, v793);
        const v1033 = stdlib.ge(v1032, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
        stdlib.assert(v1033, {
          at: "reach standard library:198:46:application",
          fs: [
            'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        return;
      } else {
        const {
          data: [v813],
          secs: v815,
          time: v814,
          didSend: v302,
          from: v812
        } = txn4;
        const v816 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
        const v817 = stdlib.Array_set(v816, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"));
        const v818 = stdlib.Array_set(v778, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"), v817);
        const v820 = stdlib.tokenEq(v813, v747);
        const v821 = v820 ? false : true;
        stdlib.assert(v821, {
          at: "./src/contracts/summon.rsh:122:15:dot",
          fs: [],
          msg: "non-network tokens distinct",
          who: "Deployer"
        });
        const v822 = stdlib.addressEq(v746, v812);
        stdlib.assert(v822, {
          at: "./src/contracts/summon.rsh:122:15:dot",
          fs: [],
          msg: "sender correct",
          who: "Deployer"
        });
        const v826 = stdlib.add(v814, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
        const v834 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
        const v835 = v834[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
        const txn5 = await ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeoutAt: ["time", v826],
          waitIfNotPresent: false
        });
        if (txn5.didTimeout) {
          const txn6 = await ctc.sendrecv({
            args: [v725, v729, v746, v747, v813, v818, v826, v835],
            evt_cnt: 0,
            funcNum: 8,
            lct: v814,
            onlyIf: true,
            out_tys: [],
            pay: [
              stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
              []
            ],
            sim_p: async (txn62) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => {
                sim_txn_ctr = sim_txn_ctr.sub(1);
                return sim_txn_ctr;
              };
              const {
                data: [],
                secs: v9772,
                time: v9762,
                didSend: v4922,
                from: v9752
              } = txn62;
              sim_r.txns.push({
                kind: "from",
                to: v729,
                tok: v747
              });
              sim_r.txns.push({
                kind: "halt",
                tok: v813
              });
              sim_r.txns.push({
                kind: "halt",
                tok: v747
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined
              });
              sim_r.isHalt = true;
              return sim_r;
            },
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc2, ctc2, ctc2, ctc1, ctc1, ctc6, ctc3, ctc3],
            waitIfNotPresent: false
          });
          const {
            data: [],
            secs: v977,
            time: v976,
            didSend: v492,
            from: v975
          } = txn6;
          const v978 = stdlib.addressEq(v746, v975);
          const v979 = stdlib.addressEq(v725, v975);
          const v980 = v978 ? true : v979;
          const v981 = stdlib.addressEq(v729, v975);
          const v982 = v980 ? true : v981;
          stdlib.assert(v982, {
            at: "reach standard library:197:11:dot",
            fs: [
              'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
            ],
            msg: "sender correct",
            who: "Deployer"
          });
          const v995 = stdlib.sub(v835, v835);
          const v996 = stdlib.ge(v995, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
          stdlib.assert(v996, {
            at: "reach standard library:198:46:application",
            fs: [
              'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
            ],
            msg: "assume >= 0",
            who: "Deployer"
          });
          return;
        } else {
          const {
            data: [],
            secs: v838,
            time: v837,
            didSend: v311,
            from: v836
          } = txn5;
          const v839 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1")];
          const v840 = v839[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0")];
          const v841 = stdlib.add(v840, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"));
          const v842 = stdlib.le(v841, stdlib.UInt_max);
          stdlib.assert(v842, {
            at: "./src/contracts/summon.rsh:128:15:dot",
            fs: [],
            msg: "assume <= UInt.max",
            who: "Deployer"
          });
          const v845 = stdlib.Array_set(v839, "0", v841);
          const v846 = stdlib.Array_set(v818, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"), v845);
          const v847 = stdlib.addressEq(v746, v836);
          stdlib.assert(v847, {
            at: "./src/contracts/summon.rsh:128:15:dot",
            fs: [],
            msg: "sender correct",
            who: "Deployer"
          });
          const v848 = "CLAIMING            ";
          const v852 = stdlib.add(v837, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
          const v860 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "1")];
          const v861 = v860[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "0")];
          const v862 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
          const v863 = v862[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
          const txn6 = await ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: ["time", v852],
            waitIfNotPresent: false
          });
          if (txn6.didTimeout) {
            const txn7 = await ctc.sendrecv({
              args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
              evt_cnt: 0,
              funcNum: 10,
              lct: v837,
              onlyIf: true,
              out_tys: [],
              pay: [
                stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
                []
              ],
              sim_p: async (txn72) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => {
                  sim_txn_ctr = sim_txn_ctr.sub(1);
                  return sim_txn_ctr;
                };
                const {
                  data: [],
                  secs: v9202,
                  time: v9192,
                  didSend: v4182,
                  from: v9182
                } = txn72;
                sim_r.txns.push({
                  kind: "from",
                  to: v746,
                  tok: v813
                });
                sim_r.txns.push({
                  kind: "from",
                  to: v746,
                  tok: v747
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: v813
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: v747
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined
                });
                sim_r.isHalt = true;
                return sim_r;
              },
              soloSend: false,
              timeoutAt: undefined,
              tys: [ctc2, ctc2, ctc2, ctc1, ctc1, ctc6, ctc3, ctc5, ctc3, ctc3],
              waitIfNotPresent: false
            });
            const {
              data: [],
              secs: v920,
              time: v919,
              didSend: v418,
              from: v918
            } = txn7;
            const v921 = stdlib.addressEq(v746, v918);
            const v922 = stdlib.addressEq(v725, v918);
            const v923 = v921 ? true : v922;
            const v924 = stdlib.addressEq(v729, v918);
            const v925 = v923 ? true : v924;
            stdlib.assert(v925, {
              at: "reach standard library:197:11:dot",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "sender correct",
              who: "Deployer"
            });
            const v947 = stdlib.sub(v861, v861);
            const v948 = stdlib.ge(v947, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
            stdlib.assert(v948, {
              at: "reach standard library:198:46:application",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "assume >= 0",
              who: "Deployer"
            });
            const v951 = stdlib.Array_set(v860, "0", v947);
            const v952 = stdlib.Array_set(v846, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1"), v951);
            const v953 = v952[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
            const v954 = v953[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
            const v958 = stdlib.sub(v954, v863);
            const v959 = stdlib.ge(v958, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
            stdlib.assert(v959, {
              at: "reach standard library:198:46:application",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "assume >= 0",
              who: "Deployer"
            });
            return;
          } else {
            const {
              data: [],
              secs: v869,
              time: v868,
              didSend: v321,
              from: v867
            } = txn6;
            const v870 = stdlib.addressEq(v729, v867);
            stdlib.assert(v870, {
              at: "./src/contracts/summon.rsh:145:18:dot",
              fs: [],
              msg: "sender correct",
              who: "Deployer"
            });
            const v873 = stdlib.eq(v863, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:157:33:decimal", stdlib.UInt_max, "1"));
            stdlib.assert(v873, {
              at: "reach standard library:57:5:application",
              fs: [
                'at ./src/contracts/summon.rsh:157:14:application call to "check" (defined at: reach standard library:49:32:function exp)'
              ],
              msg: null,
              who: "Deployer"
            });
            const v877 = stdlib.eq(v861, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:158:33:decimal", stdlib.UInt_max, "1"));
            stdlib.assert(v877, {
              at: "reach standard library:57:5:application",
              fs: [
                'at ./src/contracts/summon.rsh:158:14:application call to "check" (defined at: reach standard library:49:32:function exp)'
              ],
              msg: null,
              who: "Deployer"
            });
            const v886 = stdlib.sub(v861, v861);
            const v887 = stdlib.ge(v886, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:161:45:application", stdlib.UInt_max, "0"));
            stdlib.assert(v887, {
              at: "./src/contracts/summon.rsh:161:45:application",
              fs: [],
              msg: "assume >= 0",
              who: "Deployer"
            });
            const v890 = stdlib.Array_set(v860, "0", v886);
            const v891 = stdlib.Array_set(v846, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:161:45:application", stdlib.UInt_max, "1"), v890);
            const v892 = v891[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
            const v893 = v892[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
            const v899 = stdlib.sub(v893, v893);
            const v900 = stdlib.ge(v899, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:45:application", stdlib.UInt_max, "0"));
            stdlib.assert(v900, {
              at: "./src/contracts/summon.rsh:162:45:application",
              fs: [],
              msg: "assume >= 0",
              who: "Deployer"
            });
            const v905 = "SUCCESS";
            return;
          }
        }
      }
    }
  }
}
async function Summoner(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Summoner expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for Summoner expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "2"));
  const v719 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false
  ];
  const v720 = [v719, v719];
  const txn1 = await ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v727,
    time: v726,
    didSend: v23,
    from: v725
  } = txn1;
  const v728 = "PREPARING           ";
  const v729 = ctc.iam(v725);
  const v736 = stdlib.add(v726, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
  const txn2 = await ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ["time", v736],
    waitIfNotPresent: false
  });
  if (txn2.didTimeout) {
    const txn3 = await ctc.sendrecv({
      args: [v720, v725, v729, v736],
      evt_cnt: 0,
      funcNum: 2,
      lct: v726,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
      sim_p: async (txn32) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };
        const {
          data: [],
          secs: v10712,
          time: v10702,
          didSend: v6432,
          from: v10692
        } = txn32;
        sim_r.txns.push({
          kind: "halt",
          tok: undefined
        });
        sim_r.isHalt = true;
        return sim_r;
      },
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc5, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
    });
    const {
      data: [],
      secs: v1071,
      time: v1070,
      didSend: v643,
      from: v1069
    } = txn3;
    return;
  } else {
    const {
      data: [v747],
      secs: v749,
      time: v748,
      didSend: v39,
      from: v746
    } = txn2;
    const v750 = v720[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0")];
    const v751 = stdlib.Array_set(v750, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"));
    const v752 = stdlib.Array_set(v720, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:86:15:dot", stdlib.UInt_max, "0"), v751);
    const v754 = "PAYING              ";
    const v758 = stdlib.add(v748, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
    const txn3 = await ctc.sendrecv({
      args: [v725, v729, v746, v747, v752, v758],
      evt_cnt: 0,
      funcNum: 3,
      lct: v748,
      onlyIf: true,
      out_tys: [],
      pay: [
        stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"),
        [[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"), v747]]
      ],
      sim_p: async (txn32) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };
        const {
          data: [],
          secs: v770,
          time: v769,
          didSend: v54,
          from: v768
        } = txn32;
        const v771 = v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
        const v772 = v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
        const v773 = stdlib.add(v772, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"));
        const v777 = stdlib.Array_set(v771, "0", v773);
        const v778 = stdlib.Array_set(v752, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"), v777);
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"),
          kind: "to",
          tok: v747
        });
        const v780 = "SUMMONING           ";
        const v784 = stdlib.add(v769, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
        const v792 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
        const v793 = v792[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
        sim_r.isHalt = false;
        return sim_r;
      },
      soloSend: true,
      timeoutAt: ["time", v758],
      tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3],
      waitIfNotPresent: false
    });
    if (txn3.didTimeout) {
      const txn4 = await ctc.sendrecv({
        args: [v725, v729, v746, v747, v752, v758],
        evt_cnt: 0,
        funcNum: 4,
        lct: v748,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
        sim_p: async (txn42) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };
          const {
            data: [],
            secs: v10482,
            time: v10472,
            didSend: v6012,
            from: v10462
          } = txn42;
          sim_r.txns.push({
            kind: "halt",
            tok: v747
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined
          });
          sim_r.isHalt = true;
          return sim_r;
        },
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3],
        waitIfNotPresent: false
      });
      const {
        data: [],
        secs: v1048,
        time: v1047,
        didSend: v601,
        from: v1046
      } = txn4;
      const v1049 = stdlib.addressEq(v746, v1046);
      const v1050 = stdlib.addressEq(v725, v1046);
      const v1051 = v1049 ? true : v1050;
      const v1052 = stdlib.addressEq(v729, v1046);
      const v1053 = v1051 ? true : v1052;
      stdlib.assert(v1053, {
        at: "reach standard library:197:11:dot",
        fs: [
          'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
        ],
        msg: "sender correct",
        who: "Summoner"
      });
      return;
    } else {
      const {
        data: [],
        secs: v770,
        time: v769,
        didSend: v54,
        from: v768
      } = txn3;
      const v771 = v752[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
      const v772 = v771[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0")];
      const v773 = stdlib.add(v772, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:24:decimal", stdlib.UInt_max, "1"));
      const v774 = stdlib.le(v773, stdlib.UInt_max);
      stdlib.assert(v774, {
        at: "./src/contracts/summon.rsh:101:18:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "Summoner"
      });
      const v777 = stdlib.Array_set(v771, "0", v773);
      const v778 = stdlib.Array_set(v752, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:101:18:dot", stdlib.UInt_max, "0"), v777);
      const v779 = stdlib.addressEq(v729, v768);
      stdlib.assert(v779, {
        at: "./src/contracts/summon.rsh:101:18:dot",
        fs: [],
        msg: "sender correct",
        who: "Summoner"
      });
      const v780 = "SUMMONING           ";
      const v784 = stdlib.add(v769, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
      const v792 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
      const v793 = v792[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:125:54:application", stdlib.UInt_max, "0")];
      const txn4 = await ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ["time", v784],
        waitIfNotPresent: false
      });
      if (txn4.didTimeout) {
        const txn5 = await ctc.sendrecv({
          args: [v725, v729, v746, v747, v778, v784, v793],
          evt_cnt: 0,
          funcNum: 6,
          lct: v769,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
            []
          ],
          sim_p: async (txn52) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };
            const {
              data: [],
              secs: v10142,
              time: v10132,
              didSend: v5482,
              from: v10122
            } = txn52;
            sim_r.txns.push({
              kind: "from",
              to: v729,
              tok: v747
            });
            sim_r.txns.push({
              kind: "halt",
              tok: v747
            });
            sim_r.txns.push({
              kind: "halt",
              tok: undefined
            });
            sim_r.isHalt = true;
            return sim_r;
          },
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3, ctc3],
          waitIfNotPresent: false
        });
        const {
          data: [],
          secs: v1014,
          time: v1013,
          didSend: v548,
          from: v1012
        } = txn5;
        const v1015 = stdlib.addressEq(v746, v1012);
        const v1016 = stdlib.addressEq(v725, v1012);
        const v1017 = v1015 ? true : v1016;
        const v1018 = stdlib.addressEq(v729, v1012);
        const v1019 = v1017 ? true : v1018;
        stdlib.assert(v1019, {
          at: "reach standard library:197:11:dot",
          fs: [
            'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
          ],
          msg: "sender correct",
          who: "Summoner"
        });
        const v1032 = stdlib.sub(v793, v793);
        const v1033 = stdlib.ge(v1032, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
        stdlib.assert(v1033, {
          at: "reach standard library:198:46:application",
          fs: [
            'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
          ],
          msg: "assume >= 0",
          who: "Summoner"
        });
        return;
      } else {
        const {
          data: [v813],
          secs: v815,
          time: v814,
          didSend: v302,
          from: v812
        } = txn4;
        const v816 = v778[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1")];
        const v817 = stdlib.Array_set(v816, "0", stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "0"));
        const v818 = stdlib.Array_set(v778, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:122:15:dot", stdlib.UInt_max, "1"), v817);
        const v820 = stdlib.tokenEq(v813, v747);
        const v821 = v820 ? false : true;
        stdlib.assert(v821, {
          at: "./src/contracts/summon.rsh:122:15:dot",
          fs: [],
          msg: "non-network tokens distinct",
          who: "Summoner"
        });
        const v822 = stdlib.addressEq(v746, v812);
        stdlib.assert(v822, {
          at: "./src/contracts/summon.rsh:122:15:dot",
          fs: [],
          msg: "sender correct",
          who: "Summoner"
        });
        const v826 = stdlib.add(v814, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
        const v834 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
        const v835 = v834[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:131:54:application", stdlib.UInt_max, "0")];
        const txn5 = await ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeoutAt: ["time", v826],
          waitIfNotPresent: false
        });
        if (txn5.didTimeout) {
          const txn6 = await ctc.sendrecv({
            args: [v725, v729, v746, v747, v813, v818, v826, v835],
            evt_cnt: 0,
            funcNum: 8,
            lct: v814,
            onlyIf: true,
            out_tys: [],
            pay: [
              stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
              []
            ],
            sim_p: async (txn62) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => {
                sim_txn_ctr = sim_txn_ctr.sub(1);
                return sim_txn_ctr;
              };
              const {
                data: [],
                secs: v9772,
                time: v9762,
                didSend: v4922,
                from: v9752
              } = txn62;
              sim_r.txns.push({
                kind: "from",
                to: v729,
                tok: v747
              });
              sim_r.txns.push({
                kind: "halt",
                tok: v813
              });
              sim_r.txns.push({
                kind: "halt",
                tok: v747
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined
              });
              sim_r.isHalt = true;
              return sim_r;
            },
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc3],
            waitIfNotPresent: false
          });
          const {
            data: [],
            secs: v977,
            time: v976,
            didSend: v492,
            from: v975
          } = txn6;
          const v978 = stdlib.addressEq(v746, v975);
          const v979 = stdlib.addressEq(v725, v975);
          const v980 = v978 ? true : v979;
          const v981 = stdlib.addressEq(v729, v975);
          const v982 = v980 ? true : v981;
          stdlib.assert(v982, {
            at: "reach standard library:197:11:dot",
            fs: [
              'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
            ],
            msg: "sender correct",
            who: "Summoner"
          });
          const v995 = stdlib.sub(v835, v835);
          const v996 = stdlib.ge(v995, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
          stdlib.assert(v996, {
            at: "reach standard library:198:46:application",
            fs: [
              'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
            ],
            msg: "assume >= 0",
            who: "Summoner"
          });
          return;
        } else {
          const {
            data: [],
            secs: v838,
            time: v837,
            didSend: v311,
            from: v836
          } = txn5;
          const v839 = v818[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1")];
          const v840 = v839[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "0")];
          const v841 = stdlib.add(v840, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:21:decimal", stdlib.UInt_max, "1"));
          const v842 = stdlib.le(v841, stdlib.UInt_max);
          stdlib.assert(v842, {
            at: "./src/contracts/summon.rsh:128:15:dot",
            fs: [],
            msg: "assume <= UInt.max",
            who: "Summoner"
          });
          const v845 = stdlib.Array_set(v839, "0", v841);
          const v846 = stdlib.Array_set(v818, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:128:15:dot", stdlib.UInt_max, "1"), v845);
          const v847 = stdlib.addressEq(v746, v836);
          stdlib.assert(v847, {
            at: "./src/contracts/summon.rsh:128:15:dot",
            fs: [],
            msg: "sender correct",
            who: "Summoner"
          });
          const v848 = "CLAIMING            ";
          const v852 = stdlib.add(v837, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:25:24:decimal", stdlib.UInt_max, "20"));
          const v860 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "1")];
          const v861 = v860[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:152:41:application", stdlib.UInt_max, "0")];
          const v862 = v846[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
          const v863 = v862[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:153:41:application", stdlib.UInt_max, "0")];
          const v866 = stdlib.protect(ctc1, await interact.opt_in(v813), {
            at: "./src/contracts/summon.rsh:143:59:application",
            fs: [
              "at ./src/contracts/summon.rsh:142:22:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:142:26:function exp)"
            ],
            msg: "opt_in",
            who: "Summoner"
          });
          const txn6 = await ctc.sendrecv({
            args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
            evt_cnt: 0,
            funcNum: 9,
            lct: v837,
            onlyIf: v866,
            out_tys: [],
            pay: [
              stdlib.checkedBigNumberify("./src/contracts/summon.rsh:145:18:decimal", stdlib.UInt_max, "0"),
              []
            ],
            sim_p: async (txn62) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => {
                sim_txn_ctr = sim_txn_ctr.sub(1);
                return sim_txn_ctr;
              };
              const {
                data: [],
                secs: v869,
                time: v868,
                didSend: v321,
                from: v867
              } = txn62;
              const v886 = stdlib.sub(v861, v861);
              const v890 = stdlib.Array_set(v860, "0", v886);
              const v891 = stdlib.Array_set(v846, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:161:45:application", stdlib.UInt_max, "1"), v890);
              sim_r.txns.push({
                kind: "from",
                to: v729,
                tok: v813
              });
              const v892 = v891[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
              const v893 = v892[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
              sim_r.txns.push({
                kind: "from",
                to: v746,
                tok: v747
              });
              const v905 = "SUCCESS";
              sim_r.txns.push({
                kind: "halt",
                tok: v813
              });
              sim_r.txns.push({
                kind: "halt",
                tok: v747
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined
              });
              sim_r.isHalt = true;
              return sim_r;
            },
            soloSend: true,
            timeoutAt: ["time", v852],
            tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc4, ctc3, ctc3],
            waitIfNotPresent: false
          });
          if (txn6.didTimeout) {
            const txn7 = await ctc.sendrecv({
              args: [v725, v729, v746, v747, v813, v846, v852, v860, v861, v863],
              evt_cnt: 0,
              funcNum: 10,
              lct: v837,
              onlyIf: true,
              out_tys: [],
              pay: [
                stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"),
                []
              ],
              sim_p: async (txn72) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => {
                  sim_txn_ctr = sim_txn_ctr.sub(1);
                  return sim_txn_ctr;
                };
                const {
                  data: [],
                  secs: v9202,
                  time: v9192,
                  didSend: v4182,
                  from: v9182
                } = txn72;
                sim_r.txns.push({
                  kind: "from",
                  to: v746,
                  tok: v813
                });
                sim_r.txns.push({
                  kind: "from",
                  to: v746,
                  tok: v747
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: v813
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: v747
                });
                sim_r.txns.push({
                  kind: "halt",
                  tok: undefined
                });
                sim_r.isHalt = true;
                return sim_r;
              },
              soloSend: false,
              timeoutAt: undefined,
              tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc4, ctc3, ctc3],
              waitIfNotPresent: false
            });
            const {
              data: [],
              secs: v920,
              time: v919,
              didSend: v418,
              from: v918
            } = txn7;
            const v921 = stdlib.addressEq(v746, v918);
            const v922 = stdlib.addressEq(v725, v918);
            const v923 = v921 ? true : v922;
            const v924 = stdlib.addressEq(v729, v918);
            const v925 = v923 ? true : v924;
            stdlib.assert(v925, {
              at: "reach standard library:197:11:dot",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "sender correct",
              who: "Summoner"
            });
            const v947 = stdlib.sub(v861, v861);
            const v948 = stdlib.ge(v947, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
            stdlib.assert(v948, {
              at: "reach standard library:198:46:application",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "assume >= 0",
              who: "Summoner"
            });
            const v951 = stdlib.Array_set(v860, "0", v947);
            const v952 = stdlib.Array_set(v846, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1"), v951);
            const v953 = v952[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
            const v954 = v953[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
            const v958 = stdlib.sub(v954, v863);
            const v959 = stdlib.ge(v958, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
            stdlib.assert(v959, {
              at: "reach standard library:198:46:application",
              fs: [
                'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
              ],
              msg: "assume >= 0",
              who: "Summoner"
            });
            return;
          } else {
            const {
              data: [],
              secs: v869,
              time: v868,
              didSend: v321,
              from: v867
            } = txn6;
            const v870 = stdlib.addressEq(v729, v867);
            stdlib.assert(v870, {
              at: "./src/contracts/summon.rsh:145:18:dot",
              fs: [],
              msg: "sender correct",
              who: "Summoner"
            });
            const v873 = stdlib.eq(v863, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:157:33:decimal", stdlib.UInt_max, "1"));
            stdlib.assert(v873, {
              at: "reach standard library:57:5:application",
              fs: [
                'at ./src/contracts/summon.rsh:157:14:application call to "check" (defined at: reach standard library:49:32:function exp)'
              ],
              msg: null,
              who: "Summoner"
            });
            const v877 = stdlib.eq(v861, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:158:33:decimal", stdlib.UInt_max, "1"));
            stdlib.assert(v877, {
              at: "reach standard library:57:5:application",
              fs: [
                'at ./src/contracts/summon.rsh:158:14:application call to "check" (defined at: reach standard library:49:32:function exp)'
              ],
              msg: null,
              who: "Summoner"
            });
            const v886 = stdlib.sub(v861, v861);
            const v887 = stdlib.ge(v886, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:161:45:application", stdlib.UInt_max, "0"));
            stdlib.assert(v887, {
              at: "./src/contracts/summon.rsh:161:45:application",
              fs: [],
              msg: "assume >= 0",
              who: "Summoner"
            });
            const v890 = stdlib.Array_set(v860, "0", v886);
            const v891 = stdlib.Array_set(v846, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:161:45:application", stdlib.UInt_max, "1"), v890);
            const v892 = v891[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
            const v893 = v892[stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:27:application", stdlib.UInt_max, "0")];
            const v899 = stdlib.sub(v893, v893);
            const v900 = stdlib.ge(v899, stdlib.checkedBigNumberify("./src/contracts/summon.rsh:162:45:application", stdlib.UInt_max, "0"));
            stdlib.assert(v900, {
              at: "./src/contracts/summon.rsh:162:45:application",
              fs: [],
              msg: "assume >= 0",
              who: "Summoner"
            });
            const v905 = "SUCCESS";
            return;
          }
        }
      }
    }
  }
}
var _version = "0.1.13";
var _versionHash = "0.1.13 (88e48902)";
var _backendVersion = 27;
var _ALGO = {
  ABI: {
    impure: [
      `_reachp_0((uint64))void`,
      `_reachp_1((uint64,uint64))void`,
      `_reachp_10((uint64))void`,
      `_reachp_2((uint64))void`,
      `_reachp_3((uint64))void`,
      `_reachp_4((uint64))void`,
      `_reachp_5((uint64,uint64))void`,
      `_reachp_6((uint64))void`,
      `_reachp_7((uint64))void`,
      `_reachp_8((uint64))void`,
      `_reachp_9((uint64))void`
    ],
    pure: [],
    sigs: [
      `_reachp_0((uint64))void`,
      `_reachp_1((uint64,uint64))void`,
      `_reachp_10((uint64))void`,
      `_reachp_2((uint64))void`,
      `_reachp_3((uint64))void`,
      `_reachp_4((uint64))void`,
      `_reachp_5((uint64,uint64))void`,
      `_reachp_6((uint64))void`,
      `_reachp_7((uint64))void`,
      `_reachp_8((uint64))void`,
      `_reachp_9((uint64))void`
    ]
  },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAEIFAMFYKCNBgkHkgH///////////8BBIoBaCYEBEDs55MAAQABATEYQQYYKWRJIls1ASRbNQIqZCtkUIILBAodJkkEcGvbsQR1DuQGBIxAgLoEmUBBBgTBlK2ZBMjQULEE4lfE+QTsbzkPBO+vzkME8TfIRDYaAI4LBWcFUQVcBYgFfQU2BUYFkwWpBZ4FcgAxADUWNAsXNQyABILEYf40DBZQsDQMiAYTgRGvSTUMSVA1C4AUUFJFUEFSSU5HAAAAAAAAAAAAAAA1DCg0DFCwNBY1FTIGJQg1DjQLNBZQNBVQNA4WUIFRr1AjMgY1AjUBKksBVwB/ZytMV388Zyk0ARY0AhZQZzEZIhJEiAZBNANAAAqABBUffHU0BFCwI0MxADUUIzQBEkSIBgw0DCJbNQ00DCRbNROABMe2CtU0DRZQNBMWULA0DYgFcDIGNA4MRDQLSVcAESSvXABcADUOIQeIBWsiNBMyCogFX4AUUEFZSU5HAAAAAAAAAAAAAAAAAAA1Cyg0C1CwMgYlCDUMNBY0FVA0FFA0ExZQNA5QNAwWUIEpr1AhBDIGQv8/IQg0ARJEiAVDNAsXNQyABKeLwgs0DBZQsDQMiATwMgY0EA9ENBQxABI0FjEAEhE0FTEAEhFENA5JCUk1CyIPRDQONBI0FIgE1TQRNA80CxZcAFwRVwARIls0DQkiD0Q0DTQTNBSIBLYiNBIyCjIJiASmIjQTMgoyCYgEnDEZIQUSRIgFHSIyCjIJiAWjQv7RIzQBEkSIBPI0DBc1C4AEl073FzQLFlCwNAuIBGEyBjQOD0RC/8YhBDQBEkSIBGk0Cxc1DYAE1Axs1jQNFlCwNA2IBDoyBjQMDEQ0DlcAEUk1DSJbIwhJNQwhCw5ENA40DTQMFlwAXAA1CyM0E4gFCTQVMQASRIAUU1VNTU9OSU5HAAAAAAAAAAAAAAA1DCg0DFCwMgYlCDUONAtXABEiWzUNNBY0FVA0FFA0ExZQNAtQNA4WUDQNFlCBIa9QIQUyBkL96yEENAESRIgDyzQLFzUNgAT5i694NA0WULA0DYgDnDIGNAwPRDQUMQASNBYxABIRNBUxABIRRCI0EzIKMgmIA4RC/uUhBTQBEkSIBD80DCJbNQ00DCRbNRKABLNR9480DRZQNBIWULA0DYgDTjIGNA4MRDQLSVcRESSvXABcETUNNBI0ExNEIQeIA0MiNBIyCogDNzQUMQASRDIGJQg1DjQNVwARIls1DDQWNBVQNBRQNBMWUDQSFlA0DVA0DhZQNAwWUIEZr1AhCTIGQv0dIQU0ARJEiAO0NAwXNQuABHDt73o0CxZQsDQLiALOMgY0Dg9ENBQxABI0FjEAEhE0FTEAEhFENA1JCSIPRDQNNBM0FYgCtiI0EzIKMgmIAqZC/gchCTQBEkSIAzA0Cxc1DIAEcaixozQMFlCwNAyIAnsyBjQODEQ0DVcREUk1DCJbIwhJNQshCw5ENA00DDQLFlwAXBE1ESM0EogDSjQUMQASRIAUQ0xBSU1JTkcAAAAAAAAAAAAAAAA1Cyg0C1CwMgYlCDUQNBFXERFJNQ8iWzUONBFXABEiWzUNNBY0FVA0FFA0ExZQNBIWUDQRUDQQFlA0D1A0DhZQNA0WUCEIMgZC/BkhCTQBEkSIAn80Cxc1DYAEL9rpHTQNFlCwNA2IAcoyBjQOD0Q0FDEAEjQWMQASETQVMQASEUQ0DEkJIg9ENAw0EzQViAGyIjQSMgoyCYgBoiI0EzIKMgmIAZhC/PkhCDQBEkSIAcA0Cxc1DIAEY1dRXDQMFlCwNAyIAW0yBjQQDEQ0FTEAEkQ0DSMSRDQOIxJENA5JCUk1CyIPRDQONBI0FYgBVDQRNA80CxZcAFwRVwARIltJNQxJCSIPRDQMNBM0FIgBM4AHU1VDQ0VTUzULgASfo6H3NAtQsCI0EjIKMgmIAQ4iNBMyCjIJiAEEQvxliADwIQeIAQM2GgE1C0L6u4gA4DYaATUMQvtAiADVNhoBNQtC+8OIAMo2GgE1DEL8SIgAvzYaATULQvxjiAC0NhoBNQtC/PaIAKk2GgE1DEL9LogAnjYaATUMQv2uiACTNhoBNQtC/faIAIg2GgE1C0L+nIgAfTYaATULQv7uIjE0EkQhBDE1EkQiMTYSRCIxNxJEiABdgbsBryIiQvqJMRkiEkRC+qgisgEhDLIQshSyEbISs4kisgEjshCyB7IIs4lIiUwJSTUGMgmIAUeJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRImxshVC/6CxQv+cNAYINQaJSVcAIDUWSVcgIDUVSVdAIDUUSSEGWzUTSVdoIjUOIQ1bNQyJSVcAIDUWSVcgIDUVSVdAIDUUSSEGWzUTSSEOWzUSSVdwIjURSSEKWzUQSVeaETUPSYGrAVs1DoGzAVs1DYlJVwAiNQtJVyIgNRZJV0IgNRWBYls1Dok0BjQHSg9B/zBC/zhJVwAgNRZJVyAgNRVJV0AgNRRJIQZbNRNJIQ5bNRJJV3AiNQ1JIQpbNQ6BmgFbNQyJSVcAIDUWSVcgIDUVSVdAIDUUSSEGWzUTSVdoIjULSSENWzUOIQpbNQ2JMRY0ACMISTUACUcDOBQyChJEOBAhDBJEOBFPAhJEOBISRImxQv6dsbIJQv6X`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `544`,
    1001: `545`,
    1002: `545`,
    1003: `546`,
    1004: `547`,
    1005: `548`,
    1006: `550`,
    1007: `550`,
    1008: `551`,
    1009: `551`,
    101: `21`,
    1010: `551`,
    1011: `552`,
    1012: `552`,
    1013: `553`,
    1014: `553`,
    1015: `554`,
    1016: `555`,
    1017: `556`,
    1018: `556`,
    1019: `557`,
    102: `21`,
    1020: `557`,
    1021: `558`,
    1022: `559`,
    1023: `559`,
    1024: `560`,
    1025: `560`,
    1026: `561`,
    1027: `562`,
    1028: `563`,
    1029: `563`,
    103: `21`,
    1030: `564`,
    1031: `564`,
    1032: `565`,
    1033: `566`,
    1034: `567`,
    1035: `571`,
    1036: `571`,
    1037: `572`,
    1038: `573`,
    1039: `574`,
    104: `21`,
    1040: `575`,
    1041: `576`,
    1042: `580`,
    1043: `580`,
    1044: `582`,
    1045: `582`,
    1046: `584`,
    1047: `584`,
    1048: `585`,
    1049: `585`,
    105: `21`,
    1050: `585`,
    1051: `587`,
    1052: `588`,
    1053: `588`,
    1054: `589`,
    1055: `589`,
    1056: `590`,
    1057: `590`,
    1058: `591`,
    1059: `591`,
    106: `21`,
    1060: `591`,
    1061: `592`,
    1062: `592`,
    1063: `592`,
    1064: `594`,
    1065: `594`,
    1066: `595`,
    1067: `595`,
    1068: `596`,
    1069: `597`,
    107: `21`,
    1070: `598`,
    1071: `598`,
    1072: `598`,
    1073: `599`,
    1074: `599`,
    1075: `600`,
    1076: `601`,
    1077: `601`,
    1078: `602`,
    1079: `602`,
    108: `21`,
    1080: `602`,
    1081: `602`,
    1082: `602`,
    1083: `602`,
    1084: `603`,
    1085: `603`,
    1086: `604`,
    1087: `605`,
    1088: `606`,
    1089: `608`,
    109: `21`,
    1090: `608`,
    1091: `609`,
    1092: `609`,
    1093: `609`,
    1094: `610`,
    1095: `610`,
    1096: `611`,
    1097: `611`,
    1098: `612`,
    1099: `613`,
    11: `2`,
    110: `21`,
    1100: `614`,
    1101: `614`,
    1102: `615`,
    1103: `615`,
    1104: `615`,
    1105: `616`,
    1106: `617`,
    1107: `617`,
    1108: `618`,
    1109: `619`,
    111: `21`,
    1110: `620`,
    1111: `621`,
    1112: `622`,
    1113: `623`,
    1114: `623`,
    1115: `624`,
    1116: `624`,
    1117: `625`,
    1118: `626`,
    1119: `629`,
    112: `21`,
    1120: `629`,
    1121: `630`,
    1122: `630`,
    1123: `631`,
    1124: `631`,
    1125: `632`,
    1126: `633`,
    1127: `633`,
    1128: `634`,
    1129: `634`,
    113: `21`,
    1130: `635`,
    1131: `635`,
    1132: `636`,
    1133: `637`,
    1134: `637`,
    1135: `638`,
    1136: `638`,
    1137: `638`,
    1138: `641`,
    1139: `641`,
    114: `21`,
    1140: `642`,
    1141: `642`,
    1142: `643`,
    1143: `644`,
    1144: `647`,
    1145: `647`,
    1146: `647`,
    1147: `647`,
    1148: `647`,
    1149: `647`,
    115: `21`,
    1150: `647`,
    1151: `647`,
    1152: `647`,
    1153: `647`,
    1154: `647`,
    1155: `647`,
    1156: `647`,
    1157: `647`,
    1158: `647`,
    1159: `647`,
    116: `21`,
    1160: `647`,
    1161: `647`,
    1162: `647`,
    1163: `647`,
    1164: `647`,
    1165: `647`,
    1166: `648`,
    1167: `648`,
    1168: `649`,
    1169: `650`,
    117: `21`,
    1170: `650`,
    1171: `651`,
    1172: `652`,
    1173: `654`,
    1174: `654`,
    1175: `655`,
    1176: `656`,
    1177: `657`,
    1178: `657`,
    1179: `658`,
    118: `21`,
    1180: `658`,
    1181: `659`,
    1182: `659`,
    1183: `659`,
    1184: `660`,
    1185: `661`,
    1186: `661`,
    1187: `662`,
    1188: `663`,
    1189: `664`,
    119: `21`,
    1190: `664`,
    1191: `665`,
    1192: `665`,
    1193: `666`,
    1194: `666`,
    1195: `666`,
    1196: `667`,
    1197: `668`,
    1198: `669`,
    1199: `669`,
    12: `2`,
    120: `21`,
    1200: `671`,
    1201: `671`,
    1202: `672`,
    1203: `672`,
    1204: `673`,
    1205: `674`,
    1206: `674`,
    1207: `675`,
    1208: `676`,
    1209: `676`,
    121: `22`,
    1210: `677`,
    1211: `678`,
    1212: `679`,
    1213: `679`,
    1214: `680`,
    1215: `681`,
    1216: `682`,
    1217: `682`,
    1218: `683`,
    1219: `684`,
    122: `22`,
    1220: `684`,
    1221: `685`,
    1222: `686`,
    1223: `687`,
    1224: `687`,
    1225: `688`,
    1226: `689`,
    1227: `689`,
    1228: `690`,
    1229: `691`,
    123: `22`,
    1230: `692`,
    1231: `692`,
    1232: `693`,
    1233: `694`,
    1234: `695`,
    1235: `695`,
    1236: `696`,
    1237: `696`,
    1238: `697`,
    1239: `697`,
    124: `23`,
    1240: `697`,
    1241: `699`,
    1242: `699`,
    1243: `700`,
    1244: `700`,
    1245: `701`,
    1246: `702`,
    1247: `703`,
    1248: `703`,
    1249: `703`,
    125: `23`,
    1250: `704`,
    1251: `704`,
    1252: `705`,
    1253: `706`,
    1254: `706`,
    1255: `707`,
    1256: `707`,
    1257: `707`,
    1258: `707`,
    1259: `707`,
    126: `23`,
    1260: `707`,
    1261: `708`,
    1262: `708`,
    1263: `709`,
    1264: `710`,
    1265: `711`,
    1266: `713`,
    1267: `713`,
    1268: `714`,
    1269: `714`,
    127: `23`,
    1270: `714`,
    1271: `715`,
    1272: `715`,
    1273: `716`,
    1274: `716`,
    1275: `717`,
    1276: `718`,
    1277: `719`,
    1278: `719`,
    1279: `720`,
    128: `23`,
    1280: `720`,
    1281: `721`,
    1282: `722`,
    1283: `722`,
    1284: `723`,
    1285: `723`,
    1286: `724`,
    1287: `725`,
    1288: `726`,
    1289: `726`,
    129: `23`,
    1290: `727`,
    1291: `727`,
    1292: `728`,
    1293: `729`,
    1294: `730`,
    1295: `734`,
    1296: `734`,
    1297: `735`,
    1298: `736`,
    1299: `737`,
    13: `2`,
    130: `23`,
    1300: `738`,
    1301: `739`,
    1302: `743`,
    1303: `743`,
    1304: `745`,
    1305: `745`,
    1306: `747`,
    1307: `747`,
    1308: `748`,
    1309: `748`,
    131: `23`,
    1310: `748`,
    1311: `750`,
    1312: `752`,
    1313: `752`,
    1314: `753`,
    1315: `753`,
    1316: `754`,
    1317: `754`,
    1318: `755`,
    1319: `755`,
    132: `23`,
    1320: `755`,
    1321: `756`,
    1322: `757`,
    1323: `757`,
    1324: `758`,
    1325: `758`,
    1326: `759`,
    1327: `759`,
    1328: `760`,
    1329: `760`,
    133: `23`,
    1330: `760`,
    1331: `761`,
    1332: `761`,
    1333: `761`,
    1334: `763`,
    1335: `763`,
    1336: `764`,
    1337: `764`,
    1338: `765`,
    1339: `766`,
    134: `23`,
    1340: `767`,
    1341: `767`,
    1342: `767`,
    1343: `768`,
    1344: `768`,
    1345: `769`,
    1346: `770`,
    1347: `770`,
    1348: `771`,
    1349: `771`,
    135: `23`,
    1350: `771`,
    1351: `771`,
    1352: `771`,
    1353: `771`,
    1354: `772`,
    1355: `772`,
    1356: `773`,
    1357: `774`,
    1358: `775`,
    1359: `777`,
    136: `23`,
    1360: `777`,
    1361: `778`,
    1362: `778`,
    1363: `778`,
    1364: `779`,
    1365: `779`,
    1366: `780`,
    1367: `780`,
    1368: `781`,
    1369: `782`,
    137: `23`,
    1370: `783`,
    1371: `783`,
    1372: `784`,
    1373: `784`,
    1374: `785`,
    1375: `786`,
    1376: `789`,
    1377: `789`,
    1378: `790`,
    1379: `791`,
    138: `23`,
    1380: `792`,
    1381: `796`,
    1382: `796`,
    1383: `797`,
    1384: `798`,
    1385: `799`,
    1386: `803`,
    1387: `803`,
    1388: `804`,
    1389: `805`,
    139: `23`,
    1390: `806`,
    1391: `807`,
    1392: `807`,
    1393: `808`,
    1394: `809`,
    1395: `810`,
    1396: `813`,
    1397: `813`,
    1398: `815`,
    1399: `815`,
    14: `2`,
    140: `23`,
    1400: `817`,
    1401: `817`,
    1402: `818`,
    1403: `818`,
    1404: `818`,
    1405: `819`,
    1406: `819`,
    1407: `820`,
    1408: `820`,
    1409: `821`,
    141: `23`,
    1410: `821`,
    1411: `822`,
    1412: `823`,
    1413: `823`,
    1414: `824`,
    1415: `824`,
    1416: `825`,
    1417: `825`,
    1418: `825`,
    1419: `826`,
    142: `23`,
    1420: `827`,
    1421: `828`,
    1422: `829`,
    1423: `829`,
    1424: `830`,
    1425: `831`,
    1426: `832`,
    1427: `833`,
    1428: `834`,
    1429: `837`,
    143: `23`,
    1430: `837`,
    1431: `839`,
    1432: `839`,
    1433: `841`,
    1434: `841`,
    1435: `842`,
    1436: `842`,
    1437: `842`,
    1438: `843`,
    1439: `843`,
    144: `23`,
    1440: `843`,
    1441: `843`,
    1442: `843`,
    1443: `843`,
    1444: `843`,
    1445: `843`,
    1446: `843`,
    1447: `844`,
    1448: `844`,
    1449: `845`,
    145: `23`,
    1450: `845`,
    1451: `845`,
    1452: `845`,
    1453: `845`,
    1454: `845`,
    1455: `846`,
    1456: `846`,
    1457: `847`,
    1458: `848`,
    1459: `851`,
    146: `23`,
    1460: `852`,
    1461: `852`,
    1462: `853`,
    1463: `853`,
    1464: `854`,
    1465: `854`,
    1466: `855`,
    1467: `855`,
    1468: `855`,
    1469: `856`,
    147: `23`,
    1470: `857`,
    1471: `857`,
    1472: `858`,
    1473: `858`,
    1474: `859`,
    1475: `859`,
    1476: `860`,
    1477: `860`,
    1478: `860`,
    1479: `861`,
    148: `25`,
    1480: `861`,
    1481: `861`,
    1482: `863`,
    1483: `863`,
    1484: `863`,
    1485: `864`,
    1486: `864`,
    1487: `865`,
    1488: `865`,
    1489: `865`,
    149: `27`,
    1490: `866`,
    1491: `866`,
    1492: `866`,
    1493: `867`,
    1494: `867`,
    1495: `868`,
    1496: `868`,
    1497: `868`,
    1498: `870`,
    1499: `870`,
    15: `2`,
    150: `27`,
    1500: `870`,
    1501: `871`,
    1502: `871`,
    1503: `871`,
    1504: `872`,
    1505: `872`,
    1506: `873`,
    1507: `873`,
    1508: `873`,
    1509: `875`,
    151: `28`,
    1510: `875`,
    1511: `875`,
    1512: `876`,
    1513: `876`,
    1514: `876`,
    1515: `877`,
    1516: `877`,
    1517: `878`,
    1518: `878`,
    1519: `878`,
    152: `28`,
    1520: `880`,
    1521: `880`,
    1522: `880`,
    1523: `881`,
    1524: `881`,
    1525: `881`,
    1526: `882`,
    1527: `882`,
    1528: `883`,
    1529: `883`,
    153: `29`,
    1530: `883`,
    1531: `885`,
    1532: `885`,
    1533: `885`,
    1534: `886`,
    1535: `886`,
    1536: `886`,
    1537: `887`,
    1538: `887`,
    1539: `888`,
    154: `29`,
    1540: `888`,
    1541: `888`,
    1542: `890`,
    1543: `890`,
    1544: `890`,
    1545: `891`,
    1546: `891`,
    1547: `891`,
    1548: `892`,
    1549: `892`,
    155: `30`,
    1550: `893`,
    1551: `893`,
    1552: `893`,
    1553: `895`,
    1554: `895`,
    1555: `895`,
    1556: `896`,
    1557: `896`,
    1558: `896`,
    1559: `897`,
    156: `31`,
    1560: `897`,
    1561: `898`,
    1562: `898`,
    1563: `898`,
    1564: `900`,
    1565: `900`,
    1566: `900`,
    1567: `901`,
    1568: `901`,
    1569: `901`,
    157: `31`,
    1570: `902`,
    1571: `902`,
    1572: `903`,
    1573: `903`,
    1574: `903`,
    1575: `905`,
    1576: `905`,
    1577: `905`,
    1578: `906`,
    1579: `906`,
    158: `32`,
    1580: `906`,
    1581: `907`,
    1582: `907`,
    1583: `908`,
    1584: `908`,
    1585: `908`,
    1586: `910`,
    1587: `910`,
    1588: `910`,
    1589: `911`,
    159: `32`,
    1590: `911`,
    1591: `911`,
    1592: `912`,
    1593: `912`,
    1594: `913`,
    1595: `913`,
    1596: `913`,
    1597: `915`,
    1598: `915`,
    1599: `915`,
    16: `2`,
    160: `32`,
    1600: `916`,
    1601: `916`,
    1602: `916`,
    1603: `917`,
    1604: `917`,
    1605: `918`,
    1606: `918`,
    1607: `918`,
    1608: `920`,
    1609: `921`,
    161: `32`,
    1610: `921`,
    1611: `922`,
    1612: `923`,
    1613: `924`,
    1614: `924`,
    1615: `925`,
    1616: `925`,
    1617: `926`,
    1618: `927`,
    1619: `928`,
    162: `32`,
    1620: `929`,
    1621: `929`,
    1622: `930`,
    1623: `931`,
    1624: `932`,
    1625: `933`,
    1626: `933`,
    1627: `934`,
    1628: `935`,
    1629: `936`,
    163: `32`,
    1630: `936`,
    1631: `936`,
    1632: `937`,
    1633: `937`,
    1634: `937`,
    1635: `938`,
    1636: `939`,
    1637: `940`,
    1638: `941`,
    1639: `941`,
    164: `33`,
    1640: `941`,
    1641: `943`,
    1642: `943`,
    1643: `944`,
    1644: `945`,
    1645: `946`,
    1646: `948`,
    1647: `948`,
    1648: `948`,
    1649: `950`,
    165: `33`,
    1650: `951`,
    1651: `951`,
    1652: `952`,
    1653: `952`,
    1654: `953`,
    1655: `953`,
    1656: `954`,
    1657: `954`,
    1658: `955`,
    1659: `955`,
    166: `34`,
    1660: `956`,
    1661: `956`,
    1662: `957`,
    1663: `958`,
    1664: `960`,
    1665: `961`,
    1666: `961`,
    1667: `962`,
    1668: `963`,
    1669: `963`,
    167: `35`,
    1670: `964`,
    1671: `964`,
    1672: `965`,
    1673: `965`,
    1674: `966`,
    1675: `967`,
    1676: `969`,
    1677: `970`,
    1678: `972`,
    1679: `973`,
    168: `36`,
    1680: `974`,
    1681: `975`,
    1682: `975`,
    1683: `976`,
    1684: `976`,
    1685: `977`,
    1686: `977`,
    1687: `977`,
    1688: `978`,
    1689: `980`,
    169: `38`,
    1690: `981`,
    1691: `982`,
    1692: `982`,
    1693: `982`,
    1694: `983`,
    1695: `984`,
    1696: `984`,
    1697: `987`,
    1698: `987`,
    1699: `988`,
    17: `2`,
    170: `38`,
    1700: `988`,
    1701: `989`,
    1702: `990`,
    1703: `991`,
    1704: `992`,
    1705: `992`,
    1706: `993`,
    1707: `994`,
    1708: `994`,
    1709: `995`,
    171: `39`,
    1710: `995`,
    1711: `996`,
    1712: `996`,
    1713: `997`,
    1714: `998`,
    1715: `999`,
    1716: `999`,
    1717: `1000`,
    1718: `1001`,
    1719: `1002`,
    172: `39`,
    1720: `1003`,
    1721: `1003`,
    1722: `1004`,
    1723: `1005`,
    1724: `1006`,
    1725: `1008`,
    1726: `1009`,
    1727: `1009`,
    1728: `1010`,
    1729: `1012`,
    173: `39`,
    1730: `1013`,
    1731: `1014`,
    1732: `1015`,
    1733: `1016`,
    1734: `1016`,
    1735: `1017`,
    1736: `1018`,
    1737: `1019`,
    1738: `1020`,
    1739: `1022`,
    174: `40`,
    1740: `1023`,
    1741: `1023`,
    1742: `1024`,
    1743: `1024`,
    1744: `1024`,
    1745: `1026`,
    1746: `1027`,
    1747: `1027`,
    1748: `1027`,
    1749: `1029`,
    175: `40`,
    1750: `1029`,
    1751: `1030`,
    1752: `1031`,
    1753: `1031`,
    1754: `1032`,
    1755: `1034`,
    1756: `1035`,
    1757: `1035`,
    1758: `1035`,
    1759: `1036`,
    176: `41`,
    1760: `1036`,
    1761: `1037`,
    1762: `1038`,
    1763: `1038`,
    1764: `1038`,
    1765: `1039`,
    1766: `1039`,
    1767: `1040`,
    1768: `1041`,
    1769: `1041`,
    177: `42`,
    1770: `1041`,
    1771: `1042`,
    1772: `1042`,
    1773: `1043`,
    1774: `1044`,
    1775: `1044`,
    1776: `1045`,
    1777: `1046`,
    1778: `1046`,
    1779: `1047`,
    178: `43`,
    1780: `1048`,
    1781: `1048`,
    1782: `1048`,
    1783: `1049`,
    1784: `1049`,
    1785: `1050`,
    1786: `1050`,
    1787: `1051`,
    1788: `1052`,
    1789: `1052`,
    179: `43`,
    1790: `1053`,
    1791: `1055`,
    1792: `1056`,
    1793: `1056`,
    1794: `1056`,
    1795: `1057`,
    1796: `1057`,
    1797: `1058`,
    1798: `1059`,
    1799: `1059`,
    18: `2`,
    180: `44`,
    1800: `1059`,
    1801: `1060`,
    1802: `1060`,
    1803: `1061`,
    1804: `1062`,
    1805: `1062`,
    1806: `1062`,
    1807: `1063`,
    1808: `1063`,
    1809: `1064`,
    181: `45`,
    1810: `1065`,
    1811: `1065`,
    1812: `1066`,
    1813: `1067`,
    1814: `1067`,
    1815: `1068`,
    1816: `1069`,
    1817: `1069`,
    1818: `1070`,
    1819: `1071`,
    182: `46`,
    1820: `1071`,
    1821: `1072`,
    1822: `1073`,
    1823: `1073`,
    1824: `1073`,
    1825: `1074`,
    1826: `1074`,
    1827: `1075`,
    1828: `1076`,
    1829: `1076`,
    183: `46`,
    1830: `1077`,
    1831: `1078`,
    1832: `1078`,
    1833: `1079`,
    1834: `1080`,
    1835: `1080`,
    1836: `1080`,
    1837: `1081`,
    1838: `1081`,
    1839: `1082`,
    184: `47`,
    1840: `1083`,
    1841: `1083`,
    1842: `1083`,
    1843: `1084`,
    1844: `1085`,
    1845: `1085`,
    1846: `1086`,
    1847: `1086`,
    1848: `1086`,
    1849: `1087`,
    185: `47`,
    1850: `1088`,
    1851: `1088`,
    1852: `1089`,
    1853: `1091`,
    1854: `1092`,
    1855: `1092`,
    1856: `1092`,
    1857: `1093`,
    1858: `1093`,
    1859: `1094`,
    186: `47`,
    1860: `1095`,
    1861: `1095`,
    1862: `1095`,
    1863: `1096`,
    1864: `1096`,
    1865: `1097`,
    1866: `1098`,
    1867: `1098`,
    1868: `1098`,
    1869: `1099`,
    187: `47`,
    1870: `1099`,
    1871: `1100`,
    1872: `1100`,
    1873: `1101`,
    1874: `1102`,
    1875: `1102`,
    1876: `1103`,
    1877: `1105`,
    1878: `1105`,
    1879: `1106`,
    188: `47`,
    1880: `1106`,
    1881: `1107`,
    1882: `1108`,
    1883: `1109`,
    1884: `1109`,
    1885: `1109`,
    1886: `1110`,
    1887: `1110`,
    1888: `1110`,
    1889: `1112`,
    189: `47`,
    1890: `1113`,
    1891: `1113`,
    1892: `1113`,
    1893: `1114`,
    1894: `1114`,
    1895: `1115`,
    1896: `1116`,
    1897: `1116`,
    1898: `1116`,
    1899: `1117`,
    19: `2`,
    190: `47`,
    1900: `1117`,
    1901: `1118`,
    1902: `1119`,
    1903: `1119`,
    1904: `1119`,
    1905: `1120`,
    1906: `1120`,
    1907: `1121`,
    1908: `1122`,
    1909: `1122`,
    191: `47`,
    1910: `1123`,
    1911: `1124`,
    1912: `1124`,
    1913: `1125`,
    1914: `1126`,
    1915: `1126`,
    1916: `1127`,
    1917: `1128`,
    1918: `1128`,
    1919: `1129`,
    192: `47`,
    1920: `1130`,
    1921: `1130`,
    1922: `1130`,
    1923: `1131`,
    1924: `1131`,
    1925: `1132`,
    1926: `1133`,
    1927: `1133`,
    1928: `1134`,
    1929: `1135`,
    193: `47`,
    1930: `1135`,
    1931: `1136`,
    1932: `1136`,
    1933: `1136`,
    1934: `1137`,
    1935: `1138`,
    1936: `1138`,
    1937: `1139`,
    1938: `1141`,
    1939: `1142`,
    194: `47`,
    1940: `1142`,
    1941: `1142`,
    1942: `1143`,
    1943: `1143`,
    1944: `1144`,
    1945: `1145`,
    1946: `1145`,
    1947: `1145`,
    1948: `1146`,
    1949: `1146`,
    195: `47`,
    1950: `1147`,
    1951: `1148`,
    1952: `1148`,
    1953: `1148`,
    1954: `1149`,
    1955: `1149`,
    1956: `1150`,
    1957: `1151`,
    1958: `1151`,
    1959: `1152`,
    196: `47`,
    1960: `1153`,
    1961: `1153`,
    1962: `1154`,
    1963: `1155`,
    1964: `1155`,
    1965: `1155`,
    1966: `1156`,
    1967: `1156`,
    1968: `1157`,
    1969: `1158`,
    197: `47`,
    1970: `1158`,
    1971: `1159`,
    1972: `1160`,
    1973: `1160`,
    1974: `1161`,
    1975: `1161`,
    1976: `1162`,
    1977: `1163`,
    1978: `1163`,
    1979: `1164`,
    198: `47`,
    1980: `1167`,
    1981: `1167`,
    1982: `1168`,
    1983: `1168`,
    1984: `1169`,
    1985: `1170`,
    1986: `1171`,
    1987: `1172`,
    1988: `1172`,
    1989: `1173`,
    199: `47`,
    1990: `1174`,
    1991: `1174`,
    1992: `1175`,
    1993: `1175`,
    1994: `1176`,
    1995: `1176`,
    1996: `1177`,
    1997: `1178`,
    1998: `1179`,
    1999: `1179`,
    2: `2`,
    20: `2`,
    200: `47`,
    2000: `1180`,
    2001: `1180`,
    2002: `1181`,
    2003: `1182`,
    2004: `1183`,
    2005: `1183`,
    2006: `1184`,
    2007: `1184`,
    2008: `1185`,
    2009: `1186`,
    201: `47`,
    2010: `1187`,
    2011: `1187`,
    2012: `1188`,
    2013: `1189`,
    2014: `1190`,
    2015: `1192`,
    2016: `1193`,
    2017: `1193`,
    2018: `1193`,
    2019: `1195`,
    202: `47`,
    2020: `1196`,
    2021: `1196`,
    2022: `1197`,
    203: `47`,
    204: `47`,
    205: `47`,
    206: `48`,
    207: `48`,
    208: `49`,
    209: `50`,
    21: `2`,
    210: `50`,
    211: `51`,
    212: `52`,
    213: `54`,
    214: `54`,
    215: `55`,
    216: `55`,
    217: `56`,
    218: `56`,
    219: `57`,
    22: `2`,
    220: `58`,
    221: `59`,
    222: `59`,
    223: `61`,
    224: `61`,
    225: `62`,
    226: `62`,
    227: `63`,
    228: `64`,
    229: `64`,
    23: `2`,
    230: `65`,
    231: `66`,
    232: `66`,
    233: `67`,
    234: `68`,
    235: `69`,
    236: `69`,
    237: `70`,
    238: `71`,
    239: `72`,
    24: `2`,
    240: `73`,
    241: `73`,
    242: `75`,
    243: `75`,
    244: `76`,
    245: `76`,
    246: `77`,
    247: `78`,
    248: `78`,
    249: `79`,
    25: `2`,
    250: `79`,
    251: `79`,
    252: `80`,
    253: `81`,
    254: `82`,
    255: `83`,
    256: `83`,
    257: `83`,
    258: `84`,
    259: `85`,
    26: `2`,
    260: `86`,
    261: `86`,
    262: `87`,
    263: `88`,
    264: `88`,
    265: `89`,
    266: `90`,
    267: `91`,
    268: `92`,
    269: `92`,
    27: `2`,
    270: `93`,
    271: `94`,
    272: `95`,
    273: `97`,
    274: `97`,
    275: `97`,
    276: `99`,
    277: `99`,
    278: `100`,
    279: `100`,
    28: `2`,
    280: `100`,
    281: `102`,
    282: `102`,
    283: `102`,
    284: `102`,
    285: `102`,
    286: `102`,
    287: `103`,
    288: `103`,
    289: `104`,
    29: `2`,
    290: `105`,
    291: `107`,
    292: `108`,
    293: `110`,
    294: `110`,
    295: `111`,
    296: `111`,
    297: `112`,
    298: `113`,
    299: `113`,
    3: `2`,
    30: `2`,
    300: `114`,
    301: `115`,
    302: `116`,
    303: `116`,
    304: `116`,
    305: `117`,
    306: `117`,
    307: `118`,
    308: `119`,
    309: `120`,
    31: `2`,
    310: `120`,
    311: `121`,
    312: `121`,
    313: `122`,
    314: `123`,
    315: `124`,
    316: `124`,
    317: `125`,
    318: `125`,
    319: `125`,
    32: `2`,
    320: `125`,
    321: `125`,
    322: `125`,
    323: `126`,
    324: `126`,
    325: `127`,
    326: `128`,
    327: `129`,
    328: `129`,
    329: `130`,
    33: `2`,
    330: `131`,
    331: `132`,
    332: `134`,
    333: `134`,
    334: `135`,
    335: `135`,
    336: `135`,
    337: `136`,
    338: `136`,
    339: `137`,
    34: `2`,
    340: `137`,
    341: `138`,
    342: `139`,
    343: `140`,
    344: `140`,
    345: `141`,
    346: `142`,
    347: `142`,
    348: `142`,
    349: `143`,
    35: `2`,
    350: `144`,
    351: `145`,
    352: `145`,
    353: `146`,
    354: `146`,
    355: `147`,
    356: `147`,
    357: `148`,
    358: `148`,
    359: `149`,
    36: `2`,
    360: `149`,
    361: `149`,
    362: `150`,
    363: `152`,
    364: `152`,
    365: `153`,
    366: `153`,
    367: `154`,
    368: `154`,
    369: `154`,
    37: `2`,
    370: `155`,
    371: `155`,
    372: `155`,
    373: `155`,
    374: `155`,
    375: `155`,
    376: `155`,
    377: `155`,
    378: `155`,
    379: `155`,
    38: `2`,
    380: `155`,
    381: `155`,
    382: `155`,
    383: `155`,
    384: `155`,
    385: `155`,
    386: `155`,
    387: `155`,
    388: `155`,
    389: `155`,
    39: `2`,
    390: `155`,
    391: `155`,
    392: `156`,
    393: `156`,
    394: `157`,
    395: `158`,
    396: `158`,
    397: `159`,
    398: `160`,
    399: `162`,
    4: `2`,
    40: `2`,
    400: `162`,
    401: `163`,
    402: `164`,
    403: `165`,
    404: `165`,
    405: `167`,
    406: `167`,
    407: `168`,
    408: `168`,
    409: `169`,
    41: `2`,
    410: `170`,
    411: `170`,
    412: `171`,
    413: `172`,
    414: `172`,
    415: `173`,
    416: `174`,
    417: `175`,
    418: `175`,
    419: `176`,
    42: `2`,
    420: `177`,
    421: `177`,
    422: `178`,
    423: `179`,
    424: `180`,
    425: `180`,
    426: `181`,
    427: `182`,
    428: `183`,
    429: `183`,
    43: `4`,
    430: `184`,
    431: `184`,
    432: `185`,
    433: `185`,
    434: `185`,
    435: `187`,
    436: `187`,
    437: `188`,
    438: `188`,
    439: `189`,
    44: `4`,
    440: `190`,
    441: `191`,
    442: `191`,
    443: `191`,
    444: `192`,
    445: `192`,
    446: `193`,
    447: `194`,
    448: `194`,
    449: `195`,
    45: `5`,
    450: `195`,
    451: `195`,
    452: `195`,
    453: `195`,
    454: `195`,
    455: `196`,
    456: `196`,
    457: `197`,
    458: `198`,
    459: `199`,
    46: `5`,
    460: `201`,
    461: `201`,
    462: `202`,
    463: `202`,
    464: `202`,
    465: `203`,
    466: `203`,
    467: `204`,
    468: `204`,
    469: `205`,
    47: `5`,
    470: `206`,
    471: `207`,
    472: `207`,
    473: `208`,
    474: `208`,
    475: `209`,
    476: `210`,
    477: `210`,
    478: `211`,
    479: `211`,
    48: `6`,
    480: `212`,
    481: `213`,
    482: `214`,
    483: `214`,
    484: `215`,
    485: `215`,
    486: `216`,
    487: `217`,
    488: `218`,
    489: `222`,
    49: `7`,
    490: `222`,
    491: `223`,
    492: `224`,
    493: `225`,
    494: `226`,
    495: `226`,
    496: `227`,
    497: `228`,
    498: `229`,
    499: `233`,
    5: `2`,
    50: `8`,
    500: `233`,
    501: `235`,
    502: `235`,
    503: `237`,
    504: `237`,
    505: `238`,
    506: `238`,
    507: `238`,
    508: `239`,
    509: `239`,
    51: `9`,
    510: `240`,
    511: `240`,
    512: `241`,
    513: `241`,
    514: `242`,
    515: `243`,
    516: `243`,
    517: `244`,
    518: `244`,
    519: `245`,
    52: `10`,
    520: `245`,
    521: `245`,
    522: `246`,
    523: `247`,
    524: `248`,
    525: `248`,
    526: `249`,
    527: `250`,
    528: `251`,
    529: `252`,
    53: `11`,
    530: `256`,
    531: `256`,
    532: `258`,
    533: `258`,
    534: `259`,
    535: `259`,
    536: `260`,
    537: `260`,
    538: `260`,
    539: `262`,
    54: `11`,
    540: `263`,
    541: `263`,
    542: `264`,
    543: `264`,
    544: `265`,
    545: `265`,
    546: `266`,
    547: `266`,
    548: `266`,
    549: `267`,
    55: `12`,
    550: `268`,
    551: `268`,
    552: `269`,
    553: `269`,
    554: `270`,
    555: `270`,
    556: `271`,
    557: `271`,
    558: `271`,
    559: `273`,
    56: `13`,
    560: `273`,
    561: `274`,
    562: `274`,
    563: `275`,
    564: `276`,
    565: `278`,
    566: `278`,
    567: `278`,
    568: `280`,
    569: `281`,
    57: `14`,
    570: `281`,
    571: `282`,
    572: `282`,
    573: `283`,
    574: `283`,
    575: `283`,
    576: `284`,
    577: `284`,
    578: `284`,
    579: `286`,
    58: `14`,
    580: `287`,
    581: `287`,
    582: `288`,
    583: `289`,
    584: `290`,
    585: `290`,
    586: `290`,
    587: `291`,
    588: `291`,
    589: `292`,
    59: `15`,
    590: `293`,
    591: `293`,
    592: `294`,
    593: `294`,
    594: `294`,
    595: `294`,
    596: `294`,
    597: `294`,
    598: `295`,
    599: `295`,
    6: `2`,
    60: `16`,
    600: `296`,
    601: `297`,
    602: `298`,
    603: `300`,
    604: `300`,
    605: `301`,
    606: `301`,
    607: `301`,
    608: `302`,
    609: `302`,
    61: `17`,
    610: `303`,
    611: `303`,
    612: `304`,
    613: `305`,
    614: `306`,
    615: `306`,
    616: `306`,
    617: `308`,
    618: `308`,
    619: `309`,
    62: `18`,
    620: `309`,
    621: `310`,
    622: `311`,
    623: `312`,
    624: `312`,
    625: `312`,
    626: `313`,
    627: `313`,
    628: `314`,
    629: `315`,
    63: `19`,
    630: `315`,
    631: `316`,
    632: `316`,
    633: `316`,
    634: `316`,
    635: `316`,
    636: `316`,
    637: `317`,
    638: `317`,
    639: `318`,
    64: `21`,
    640: `319`,
    641: `320`,
    642: `322`,
    643: `322`,
    644: `323`,
    645: `323`,
    646: `323`,
    647: `324`,
    648: `324`,
    649: `325`,
    65: `21`,
    650: `325`,
    651: `326`,
    652: `327`,
    653: `328`,
    654: `328`,
    655: `329`,
    656: `329`,
    657: `329`,
    658: `330`,
    659: `331`,
    66: `21`,
    660: `331`,
    661: `332`,
    662: `333`,
    663: `334`,
    664: `335`,
    665: `336`,
    666: `337`,
    667: `337`,
    668: `338`,
    669: `338`,
    67: `21`,
    670: `339`,
    671: `340`,
    672: `343`,
    673: `343`,
    674: `344`,
    675: `344`,
    676: `345`,
    677: `345`,
    678: `346`,
    679: `347`,
    68: `21`,
    680: `347`,
    681: `348`,
    682: `348`,
    683: `349`,
    684: `349`,
    685: `350`,
    686: `351`,
    687: `351`,
    688: `352`,
    689: `352`,
    69: `21`,
    690: `352`,
    691: `355`,
    692: `355`,
    693: `356`,
    694: `356`,
    695: `357`,
    696: `358`,
    697: `361`,
    698: `361`,
    699: `361`,
    7: `2`,
    70: `21`,
    700: `361`,
    701: `361`,
    702: `361`,
    703: `361`,
    704: `361`,
    705: `361`,
    706: `361`,
    707: `361`,
    708: `361`,
    709: `361`,
    71: `21`,
    710: `361`,
    711: `361`,
    712: `361`,
    713: `361`,
    714: `361`,
    715: `361`,
    716: `361`,
    717: `361`,
    718: `361`,
    719: `362`,
    72: `21`,
    720: `362`,
    721: `363`,
    722: `364`,
    723: `364`,
    724: `365`,
    725: `366`,
    726: `368`,
    727: `368`,
    728: `369`,
    729: `370`,
    73: `21`,
    730: `371`,
    731: `371`,
    732: `372`,
    733: `372`,
    734: `373`,
    735: `373`,
    736: `373`,
    737: `374`,
    738: `375`,
    739: `376`,
    74: `21`,
    740: `376`,
    741: `378`,
    742: `378`,
    743: `379`,
    744: `379`,
    745: `380`,
    746: `381`,
    747: `381`,
    748: `382`,
    749: `383`,
    75: `21`,
    750: `383`,
    751: `384`,
    752: `385`,
    753: `386`,
    754: `386`,
    755: `387`,
    756: `388`,
    757: `388`,
    758: `389`,
    759: `390`,
    76: `21`,
    760: `391`,
    761: `391`,
    762: `392`,
    763: `393`,
    764: `394`,
    765: `394`,
    766: `395`,
    767: `396`,
    768: `397`,
    769: `397`,
    77: `21`,
    770: `398`,
    771: `398`,
    772: `399`,
    773: `399`,
    774: `399`,
    775: `401`,
    776: `401`,
    777: `402`,
    778: `402`,
    779: `403`,
    78: `21`,
    780: `404`,
    781: `405`,
    782: `405`,
    783: `405`,
    784: `406`,
    785: `406`,
    786: `407`,
    787: `408`,
    788: `408`,
    789: `409`,
    79: `21`,
    790: `409`,
    791: `409`,
    792: `409`,
    793: `409`,
    794: `409`,
    795: `410`,
    796: `410`,
    797: `411`,
    798: `412`,
    799: `413`,
    8: `2`,
    80: `21`,
    800: `415`,
    801: `415`,
    802: `416`,
    803: `416`,
    804: `416`,
    805: `417`,
    806: `417`,
    807: `418`,
    808: `418`,
    809: `419`,
    81: `21`,
    810: `420`,
    811: `421`,
    812: `421`,
    813: `422`,
    814: `422`,
    815: `423`,
    816: `424`,
    817: `424`,
    818: `425`,
    819: `425`,
    82: `21`,
    820: `426`,
    821: `427`,
    822: `428`,
    823: `428`,
    824: `429`,
    825: `429`,
    826: `430`,
    827: `431`,
    828: `432`,
    829: `437`,
    83: `21`,
    830: `439`,
    831: `439`,
    832: `440`,
    833: `440`,
    834: `441`,
    835: `441`,
    836: `442`,
    837: `442`,
    838: `442`,
    839: `443`,
    84: `21`,
    840: `443`,
    841: `443`,
    842: `445`,
    843: `445`,
    844: `446`,
    845: `446`,
    846: `447`,
    847: `448`,
    848: `449`,
    849: `449`,
    85: `21`,
    850: `449`,
    851: `450`,
    852: `450`,
    853: `451`,
    854: `452`,
    855: `453`,
    856: `453`,
    857: `454`,
    858: `454`,
    859: `455`,
    86: `21`,
    860: `456`,
    861: `457`,
    862: `457`,
    863: `458`,
    864: `458`,
    865: `458`,
    866: `458`,
    867: `458`,
    868: `458`,
    869: `459`,
    87: `21`,
    870: `459`,
    871: `460`,
    872: `461`,
    873: `462`,
    874: `462`,
    875: `463`,
    876: `464`,
    877: `465`,
    878: `467`,
    879: `467`,
    88: `21`,
    880: `468`,
    881: `468`,
    882: `468`,
    883: `469`,
    884: `469`,
    885: `470`,
    886: `470`,
    887: `471`,
    888: `472`,
    889: `473`,
    89: `21`,
    890: `473`,
    891: `474`,
    892: `475`,
    893: `475`,
    894: `475`,
    895: `476`,
    896: `477`,
    897: `478`,
    898: `478`,
    899: `479`,
    9: `2`,
    90: `21`,
    900: `479`,
    901: `480`,
    902: `480`,
    903: `481`,
    904: `481`,
    905: `482`,
    906: `482`,
    907: `483`,
    908: `484`,
    909: `487`,
    91: `21`,
    910: `487`,
    911: `488`,
    912: `488`,
    913: `488`,
    914: `489`,
    915: `491`,
    916: `491`,
    917: `492`,
    918: `492`,
    919: `493`,
    92: `21`,
    920: `493`,
    921: `493`,
    922: `494`,
    923: `494`,
    924: `495`,
    925: `495`,
    926: `496`,
    927: `497`,
    928: `500`,
    929: `500`,
    93: `21`,
    930: `501`,
    931: `502`,
    932: `503`,
    933: `503`,
    934: `504`,
    935: `504`,
    936: `505`,
    937: `505`,
    938: `505`,
    939: `506`,
    94: `21`,
    940: `507`,
    941: `508`,
    942: `508`,
    943: `510`,
    944: `510`,
    945: `511`,
    946: `511`,
    947: `512`,
    948: `513`,
    949: `513`,
    95: `21`,
    950: `514`,
    951: `515`,
    952: `515`,
    953: `516`,
    954: `517`,
    955: `518`,
    956: `518`,
    957: `519`,
    958: `520`,
    959: `521`,
    96: `21`,
    960: `521`,
    961: `522`,
    962: `523`,
    963: `523`,
    964: `524`,
    965: `525`,
    966: `526`,
    967: `526`,
    968: `527`,
    969: `528`,
    97: `21`,
    970: `529`,
    971: `529`,
    972: `530`,
    973: `531`,
    974: `532`,
    975: `532`,
    976: `533`,
    977: `533`,
    978: `534`,
    979: `534`,
    98: `21`,
    980: `534`,
    981: `536`,
    982: `536`,
    983: `537`,
    984: `537`,
    985: `538`,
    986: `539`,
    987: `540`,
    988: `540`,
    989: `540`,
    99: `21`,
    990: `541`,
    991: `541`,
    992: `542`,
    993: `543`,
    994: `543`,
    995: `544`,
    996: `544`,
    997: `544`,
    998: `544`,
    999: `544`
  },
  appClear: `CA==`,
  appClearMap: {},
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 187,
  unsupported: [],
  version: 13,
  warnings: []
};
var _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1607","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e10","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes7","name":"v0","type":"bytes7"}],"name":"result","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"status","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"v1610","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1637","type":"tuple"}],"name":"_reachp_10","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1613","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1616","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1619","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"v1622","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1625","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1628","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1631","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1634","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200301890813803601f1980601f83011683019360018060401b039284861084871117620003ec5780859260409788528339602094859181010312620003e7578451906200004f8262000402565b518152436003558451620000638162000402565b600080915285519462000076866200041e565b620000806200043a565b865280860192620000906200046a565b84528787019383855260609485890198858a5260049360ff855416620003d0577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde878c8051338152835189820152a1518015908115620003c3575b5015620003ac5785815152858582510152858b825101528051835152518483510152346200039557977fcb3acff3f437da359b4895d90b35b26b1a24e01a528ab6f7049fae3b3157a34f8480979a68505245504152494e4760b81b8091528c51908152a13381528951906200015f826200041e565b620001696200046a565b8252848201908682528b8301918783528b8401948886525180945233815260018060a01b0393848093511684526014430186528d60019d8e808c554381558a83519d8e018d945b60028610620003605750505050505050511660e0880152511661010086015251610120908186015284526101408401848110878211176200034d57885283519586116200033a57600254908782811c921680156200032f575b838310146200031c5750601f8111620002d0575b508093601f861160011462000268575050918394918493946200025c575b50501b916000199060031b1c1916176002555b51612b669081620004b28239f35b0151925038806200023b565b600283528183209493928692918316915b88838310620002b557505050106200029b575b505050811b016002556200024e565b015160001960f88460031b161c191690553880806200028c565b85870151885590960195948501948793509081019062000279565b60028352818320601f870160051c81019183881062000311575b601f0160051c019087905b828110620003055750506200021d565b848155018790620002f5565b9091508190620002ea565b634e487b7160e01b845260229052602483fd5b91607f169162000209565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8697985080859697959394955180518452858101518685015201511515908201520194019201908f8f908896958c91620001b0565b895163100960cb60e01b8152600981850152602490fd5b8a5163100960cb60e01b8152600881860152602490fd5b90506001541438620000ea565b8b5163100960cb60e01b8152600781870152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117620003ec57604052565b608081019081106001600160401b03821117620003ec57604052565b60405190606082016001600160401b03811183821017620003ec5760405260006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620003ec5781528260005b8281106200049957505050565b602090620004a66200043a565b81840152016200048c56fe60806040526004361015610018575b361561001657005b005b60003560e01c806306a723031461011c578063184f7aa4146101135780631e93b0f11461010a5780632e928421146101015780632f132302146100f857806341712c0a146100ef57806383230757146100e6578063ab53f2c6146100dd578063b3722a99146100d4578063bd184e9a146100cb578063d3c64a7a146100c2578063e249db95146100b95763f5a239bc0361000e576100b46112ee565b61000e565b506100b46110d4565b506100b4610fa1565b506100b4610de0565b506100b4610b6d565b506100b4610af8565b506100b4610ad9565b506100b46108a9565b506100b461061e565b506100b46104dc565b506100b46104bd565b506100b46102ce565b506100b461013b565b602090600319011261013657600490565b600080fd5b5061014536610125565b61025e6101646040519261015884611414565b600080945236906122de565b6101716007845414611a4a565b6101ee61018e61017f611495565b60208082518301019101612937565b916101aa6101a56101a160045460ff1690565b1590565b611a69565b7f90a060bb9517819ff9fcae31809040edc14dc784a4ce151b7d5b20fea1b5cc6b604051806101da8433836123c7565b0390a15180159081156102b1575b50611a89565b6101fe60c0820151431015611aa9565b6102083415611ac9565b60018060a01b03338161021e60408501516115a0565b160361029d5760015b1561027e576102366001611ae9565b61024360608301516115a0565b9060e061025360208501516115a0565b930151921690612459565b805561026a6000600155565b6102726123e1565b60405160008152602090f35b6102363361029761029260208601516115a0565b6115a0565b14611ae9565b336102ab61029284516115a0565b14610227565b905060015414386101e8565b604090600319011261013657600490565b506102d8366102bd565b6104a76102f6604092600084516102ee81611414565b5236906115bd565b6104a261030161158d565b61030f600160005414611b09565b61046461031a611495565b91600080516020612b3a8339815191526103d86103cd6103446020968780825183010191016116cb565b9361035c6103576101a160045460ff1690565b611b29565b7fd179e25bd63de01a033a078c79c6554f73b0e78df7c75ca4b70e1b8046ec33208b518061038b8c338361174f565b0390a16103a3895180159081156104b1575b50611b49565b6103b260608601514310611b69565b6103bc3415611b89565b65504159494e4760d01b9081905290565b895191829182611777565b0390a161043361042a846103ea6117de565b976104006103fa838701516115a0565b8a611834565b61041761040f8c8701516115a0565b838b01611834565b610423338c8b01611834565b01516115a0565b60608701611834565b5180519061045f8885840151930151151561044c611540565b9360008552868501528984019015159052565b612227565b60808401526014430160a084015261047c6003600055565b61048543600155565b610494855193849283016118b5565b03601f198101835282611472565b611967565b5160008152602090f35b9050600154143861039d565b5034610136576000366003190112610136576020600354604051908152f35b506104e636610125565b61025e6104f96040519261015884611414565b6105066005845414611ba9565b61057f610523610514611495565b602080825183010191016127cb565b9161053b6105366101a160045460ff1690565b611bc9565b7f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd6040518061056b8433836123c7565b0390a1518015908115610612575b50611be9565b61058f60a0820151431015611c09565b6105993415611c29565b60018060a01b0333816105af60408501516115a0565b16036105fe5760015b156105e4576105c76001611c49565b6105d460608301516115a0565b9060c061025360208501516115a0565b6105c7336105f861029260208601516115a0565b14611c49565b3361060c61029284516115a0565b146105b8565b90506001541438610579565b5061062836610125565b6106436040916000835161063b81611414565b5236906122de565b61064b6125ad565b9061065a600760005414611c69565b610662611495565b906106d561067a602093848082518301019101612937565b9161069261068d6101a160045460ff1690565b611c89565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4018651806106c18433836123c7565b0390a151801590811561089d575b50611ca9565b60c081015143106106e590611cc9565b6106ef3415611ce9565b60a081018051602001515160010190818552519083820151868582015191015115159061071a611540565b928352858301521515868201526107309161228b565b9082840191825260808101908151610747906115a0565b610751903361272f565b61075a90611d09565b80860180519095879133906001600160a01b0390610777906115a0565b161461078290611d29565b67434c41494d494e4760c01b910181905286519081906107a29082611777565b03600080516020612b3a83398151915291a16107bc6129c4565b9481516107c8906115a0565b6107d29087611834565b848201516107df906115a0565b6107eb90878701611834565b516107f5906115a0565b61080190868801611834565b6060015161080e906115a0565b61081b9060608601611834565b51610825906115a0565b6108329060808501611834565b805160a08401526014430160c084015280516020015160e08401528051602001515161010084015251515161012083015261086d6009600055565b43600155825191829182019061088291612a3d565b03601f19810182526108949082611472565b6104a790611967565b905060015414386106cf565b506108b336610125565b6108c66040916000835161063b81611414565b6108ce6125ad565b906108dd600360005414611d49565b6108e5611495565b906109586108fd6020938480825183010191016125d3565b916109156109106101a160045460ff1690565b611d69565b7fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e85158651806109448433836123c7565b0390a1518015908115610acd575b50611d89565b60a0810151431061096890611da9565b6109723415611dc9565b608081018051515160010190818552519081518685820151910151151590610998611540565b928352858301521515868201526109ae91612227565b9082840191825284606082019182516109c6906115a0565b6109d0903361272f565b6109d990611de9565b80850180519096839133906001600160a01b03906109f6906115a0565b1614610a0190611e09565b6853554d4d4f4e494e4760b81b91018190528251908190610a229082611777565b03600080516020612b3a83398151915291a1610a3c612670565b958151610a48906115a0565b610a529088611834565b51610a5c906115a0565b610a6890878701611834565b0151610a73906115a0565b610a7f90858701611834565b51610a89906115a0565b610a969060608501611834565b805160808401524360140160a084015251515160c0830152610ab86005600055565b436001558251918291820190610882916126cd565b90506001541438610952565b5034610136576000366003190112610136576020600154604051908152f35b503461013657600080600319360112610b6a578054610b15611495565b906040519283918252602090604082840152835191826040850152815b838110610b5357505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b32565b80fd5b50610b7736610125565b7f29e3988fc6718f85dc64d3fb92613fce9b35f9723faa116ab5220e027759af84610dbb610da1610bb16040946000865161063b81611414565b610bb9612ae2565b610bc7600960005414611e29565b610d8e610bd2611495565b92610c45610bea60209586808251830101910161231a565b91610c02610bfd6101a160045460ff1690565b611e49565b7fd64d3134781556c6a626b018733c1e4f7a8f056da03bbd004578b0e46c1b667e8a5180610c318433836123c7565b0390a1518015908115610dd4575b50611e69565b610c5460c08201514310611e89565b610c5e3415611ea9565b83810190610ccd60018060a01b0392610c833385610c7c84516115a0565b1614611ec9565b610c94600161012085015114611ee9565b610100830190610ca76001835114611f09565b6000875284610cc3610cbc60808701516115a0565b92516115a0565b9251921690612459565b60a0810191610d848a610d168551885190610d118b60e08901958651610cf98284830151920151151590565b92610d02611540565b96875286015284019015159052565b61228b565b50610d368c8651610d118b8b51938651610cf98284830151920151151590565b50610d508c610d4860608701516115a0565b9501516115a0565b9451610d118d8951935190610d6b818d840151930151151590565b91610d74611540565b9586528c86015284019015159052565b5151921690612459565b665355434345535360c81b910181905290565b83516001600160c81b031990911681529081906020820190565b0390a160008055610dcc6000600155565b6104a76123e1565b90506001541438610c3f565b50610dea36610125565b604090610f5b610dff83519261015884611414565b610e0761158d565b610e146009855414611f29565b610e8c610e31610e22611495565b6020808251830101910161231a565b92610e49610e446101a160045460ff1690565b611f49565b7fedce43c37e9badb4abfd97a8f3d8873fd471a81a4cd5026126ad420fc829d71f875180610e788433836123c7565b0390a1518015908115610f95575b50611f69565b610e9c60c0830151431015611f89565b610ea63415611fa9565b84820190610f4060018060a01b03913383610ec186516115a0565b1603610f815760015b15610f6757610ed96001611fc9565b868152610f06610eec60808701516115a0565b610ef686516115a0565b9085610100890151921690612459565b60a0850151905190610d1160e0870151610f278b6020830151920151151590565b90610f30611540565b948552602085015215158a840152565b50610120610253610f5460608601516115a0565b93516115a0565b8055610dcc6000600155565b610ed933610f7b61029260208901516115a0565b14611fc9565b33610f8f61029287516115a0565b14610eca565b90506001541438610e86565b50610fab36610125565b610fc760405191610fbb83611414565b600080935236906122de565b610fd46003835414611fe9565b61104d610ff1610fe2611495565b602080825183010191016125d3565b916110096110046101a160045460ff1690565b612007565b7fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d4604051806110398433836123c7565b0390a15180159081156110c8575b50612027565b61105d60a0820151431015612047565b6110673415612067565b604081015133906001600160a01b0390611080906115a0565b16036110b45760015b15611099575061025e6001612087565b61025e906110ae6102926020339301516115a0565b14612087565b336110c261029283516115a0565b14611089565b90506001541438611047565b506110de366102bd565b6110f1604091600083516102ee81611414565b6111256110fc6127b1565b61110a6005600054146120a7565b611112611495565b60209281848080945183010191016127cb565b9361113d6111386101a160045460ff1690565b6120c7565b7f6338cb77316498cf6739d540d767aba015e84a5e9d79b4519ba97cd813a77e8786518061116c84338361174f565b0390a1611184815180159081156112e2575b506120e7565b61119360a08601514310612107565b6111c860808601518381015190610d11898684015193015115156111b5611540565b9360008552878501528a84019015159052565b8352016111d581516115a0565b60608501906111e761029283516115a0565b6001600160a01b03918216036112d8576112016000612127565b61120b3415612147565b868601903390825161121c906115a0565b161461122790612167565b8461123061285f565b96805161123c906115a0565b6112469089611834565b0151611251906115a0565b61125d90878701611834565b51611267906115a0565b61127390868801611834565b5161127d906115a0565b61128a9060608601611834565b51611294906115a0565b6112a19060808501611834565b805160a08401524360140160c084015251515160e08301526112c36007600055565b436001558251918291820190610882916128c3565b6112016001612127565b9050600154143861117e565b5061139f606061130e61130036610125565b600060405161063b81611414565b61131c600160005414612187565b61139561133961132a611495565b602080825183010191016116cb565b9161135161134c6101a160045460ff1690565b6121a7565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a604051806113818433836123c7565b0390a15180159081156113b7575b506121c7565b01514310156121e7565b6113a93415612207565b6000805561026a6000600155565b9050600154143861138f565b90600182811c921680156113f3575b60208310146113dd57565b634e487b7160e01b600052602260045260246000fd5b91607f16916113d2565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761142f57604052565b6114376113fd565b604052565b606081019081106001600160401b0382111761142f57604052565b604081019081106001600160401b0382111761142f57604052565b601f909101601f19168101906001600160401b0382119082101761142f57604052565b60405190600082600254916114a9836113c3565b80835260019380851690811561151f57506001146114d1575b506114cf92500383611472565b565b60026000908152600080516020612b1a83398151915294602093509091905b8183106115075750506114cf9350820101386114c2565b855488840185015294850194879450918301916114f0565b90506114cf94506020925060ff191682840152151560051b820101386114c2565b604051906114cf8261143c565b6040519061014082016001600160401b0381118382101761142f57604052565b6040519061010082016001600160401b0381118382101761142f57604052565b6040519061159a82611414565b60008252565b6001600160a01b031690565b6001600160a01b0381160361013657565b919082604091031261013657604080519081016001600160401b038111828210176115ff575b6040526020808294803584520135916115fb836115ac565b0152565b6116076113fd565b6115e3565b5190811515820361013657565b919082606091031261013657604051606081016001600160401b03811182821017611663575b604052604061165e81839580518552602081015160208601520161160c565b910152565b61166b6113fd565b61163f565b81601f82011215610136576040519161168883611457565b829060c083019281841161013657915b8383106116a6575050505090565b60206060916116b58486611619565b815201920191611698565b51906114cf826115ac565b610120818303126101365760405191610100919061170390608085016001600160401b03811186821017611735575b60405282611670565b835260c0810151611713816115ac565b602084015260e0810151611726816115ac565b60408401520151606082015290565b61173d6113fd565b6116fa565b6001600160a01b03169052565b6001600160a01b03918216815282516020808301919091529092015116604082015260600190565b6001600160601b0319909116815260200190565b604051906117988261143c565b60006040838281528260208201520152565b6040908151916117b983611457565b8260005b8281106117c957505050565b6020906117d461178b565b81840152016117bd565b6040519060c082016001600160401b03811183821017611827575b604052600060a08382815282602082015282604082015282606082015261181e6117aa565b60808201520152565b61182f6113fd565b6117f9565b6001600160a01b039091169052565b9060028110156118545760051b0190565b634e487b7160e01b600052603260045260246000fd5b60408091805184526020810151602085015201511515910152565b906000905b6002821061189757505050565b60206060826118a9600194875161186a565b0193019101909161188a565b91909161014060a0610160830194600180831b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261190460808201516080860190611885565b0151910152565b818110611916575050565b6000815560010161190b565b90601f821161192f575050565b6114cf9160026000526020600020906020601f840160051c8301931061195d575b601f0160051c019061190b565b9091508190611950565b80519091906001600160401b038111611a3d575b61198f8161198a6002546113c3565b611922565b602080601f83116001146119cb57508192936000926119c0575b50508160011b916000199060031b1c191617600255565b0151905038806119a9565b6002600052601f19831694909190600080516020612b1a833981519152926000905b878210611a25575050836001959610611a0c575b505050811b01600255565b015160001960f88460031b161c19169055388080611a01565b806001859682949686015181550195019301906119ed565b611a456113fd565b61197b565b15611a5157565b602460405163100960cb60e01b815260406004820152fd5b15611a7057565b60405163100960cb60e01b815260416004820152602490fd5b15611a9057565b60405163100960cb60e01b815260426004820152602490fd5b15611ab057565b60405163100960cb60e01b815260436004820152602490fd5b15611ad057565b60405163100960cb60e01b815260446004820152602490fd5b15611af057565b60405163100960cb60e01b815260456004820152602490fd5b15611b1057565b60405163100960cb60e01b8152600a6004820152602490fd5b15611b3057565b60405163100960cb60e01b8152600b6004820152602490fd5b15611b5057565b60405163100960cb60e01b8152600c6004820152602490fd5b15611b7057565b60405163100960cb60e01b8152600d6004820152602490fd5b15611b9057565b60405163100960cb60e01b8152600e6004820152602490fd5b15611bb057565b60405163100960cb60e01b815260316004820152602490fd5b15611bd057565b60405163100960cb60e01b815260326004820152602490fd5b15611bf057565b60405163100960cb60e01b815260336004820152602490fd5b15611c1057565b60405163100960cb60e01b815260346004820152602490fd5b15611c3057565b60405163100960cb60e01b815260356004820152602490fd5b15611c5057565b60405163100960cb60e01b815260366004820152602490fd5b15611c7057565b60405163100960cb60e01b815260386004820152602490fd5b15611c9057565b60405163100960cb60e01b815260396004820152602490fd5b15611cb057565b60405163100960cb60e01b8152603a6004820152602490fd5b15611cd057565b60405163100960cb60e01b8152603b6004820152602490fd5b15611cf057565b60405163100960cb60e01b8152603c6004820152602490fd5b15611d1057565b60405163100960cb60e01b8152603e6004820152602490fd5b15611d3057565b60405163100960cb60e01b8152603f6004820152602490fd5b15611d5057565b60405163100960cb60e01b8152601c6004820152602490fd5b15611d7057565b60405163100960cb60e01b8152601d6004820152602490fd5b15611d9057565b60405163100960cb60e01b8152601e6004820152602490fd5b15611db057565b60405163100960cb60e01b8152601f6004820152602490fd5b15611dd057565b60405163100960cb60e01b815260206004820152602490fd5b15611df057565b60405163100960cb60e01b815260226004820152602490fd5b15611e1057565b60405163100960cb60e01b815260236004820152602490fd5b15611e3057565b60405163100960cb60e01b815260476004820152602490fd5b15611e5057565b60405163100960cb60e01b815260486004820152602490fd5b15611e7057565b60405163100960cb60e01b815260496004820152602490fd5b15611e9057565b60405163100960cb60e01b8152604a6004820152602490fd5b15611eb057565b60405163100960cb60e01b8152604b6004820152602490fd5b15611ed057565b60405163100960cb60e01b8152604c6004820152602490fd5b15611ef057565b60405163100960cb60e01b8152604d6004820152602490fd5b15611f1057565b60405163100960cb60e01b8152604e6004820152602490fd5b15611f3057565b60405163100960cb60e01b8152600f6004820152602490fd5b15611f5057565b60405163100960cb60e01b815260106004820152602490fd5b15611f7057565b60405163100960cb60e01b815260116004820152602490fd5b15611f9057565b60405163100960cb60e01b815260126004820152602490fd5b15611fb057565b60405163100960cb60e01b815260136004820152602490fd5b15611fd057565b60405163100960cb60e01b815260146004820152602490fd5b15611ff057565b602460405163100960cb60e01b8152816004820152fd5b1561200e57565b60405163100960cb60e01b815260256004820152602490fd5b1561202e57565b60405163100960cb60e01b815260266004820152602490fd5b1561204e57565b60405163100960cb60e01b815260276004820152602490fd5b1561206e57565b60405163100960cb60e01b815260286004820152602490fd5b1561208e57565b60405163100960cb60e01b815260296004820152602490fd5b156120ae57565b60405163100960cb60e01b8152602a6004820152602490fd5b156120ce57565b60405163100960cb60e01b8152602b6004820152602490fd5b156120ee57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561210e57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561212e57565b60405163100960cb60e01b8152602e6004820152602490fd5b1561214e57565b60405163100960cb60e01b8152602f6004820152602490fd5b1561216e57565b60405163100960cb60e01b815260306004820152602490fd5b1561218e57565b60405163100960cb60e01b815260176004820152602490fd5b156121ae57565b60405163100960cb60e01b815260186004820152602490fd5b156121ce57565b60405163100960cb60e01b815260196004820152602490fd5b156121ee57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561220e57565b60405163100960cb60e01b8152601b6004820152602490fd5b91906122316117aa565b926000805b60028110612245575050508252565b61224f8184611843565b5161225a8288611843565b526122658187611843565b50600019811461227757600101612236565b634e487b7160e01b82526011600452602482fd5b91906122956117aa565b926000805b600281106122ac575050506020830152565b6122b68184611843565b516122c18288611843565b526122cc8187611843565b5060001981146122775760010161229a565b919082602091031261013657604051602081016001600160401b0381118282101761230d575b60405291358252565b6123156113fd565b612304565b6102208183031261013657610200906123ab61233461154d565b9361233e836116c0565b855261234c602084016116c0565b602086015261235d604084016116c0565b604086015261236e606084016116c0565b606086015261237f608084016116c0565b60808601526123918160a08501611670565b60a086015261016083015160c08601526101808301611619565b60e08401526101e0810151610100840152015161012082015290565b6001600160a01b0390911681529051602082015260400190565b6123ec6002546113c3565b806123f45750565b601f811160011461240757506000600255565b600260005261244c90601f0160051c600080516020612b1a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61190b565b6000602081208160025555565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526124d593600093849392849190608081016001600160401b038111828210176124dc575b6040525193165af16124c56124be6124e9565b809261254d565b5060208082518301019101612536565b1561013657565b6124e46113fd565b6124ab565b3d15612531573d906001600160401b038211612524575b60405191612518601f8201601f191660200184611472565b82523d6000602084013e565b61252c6113fd565b612500565b606090565b908160209103126101365761254a9061160c565b90565b156125555790565b80511561256457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156125855790565b80511561259457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b604051906125ba8261143c565b60006040838281526125ca6117aa565b60208201520152565b61016081830312610136576040519161014091906126549060c085016001600160401b03811186821017612663575b6040528251612610816115ac565b85526020830151612620816115ac565b60208601526040830151612633816115ac565b60408601526060830151612646816115ac565b606086015260808301611670565b6080840152015160a082015290565b61266b6113fd565b612602565b6040519060e082016001600160401b038111838210176126c0575b6040528160c06000918281528260208201528260408201528260608201526126b16117aa565b60808201528260a08201520152565b6126c86113fd565b61268b565b91909161016060c061018083019460018060a01b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261271d60808201516080860190611885565b60a08101516101408501520151910152565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526001606480840191909152825261254a93600093849391929184919060a081016001600160401b038111828210176127a4575b6040525193165af16124c561279d6124e9565b809261257d565b6127ac6113fd565b61278a565b604051906127be82611414565b816127c76117aa565b9052565b61018081830312610136576040519161016091906128389060e085016001600160401b03811186821017612852575b6040528251612808816115ac565b8552612816602084016116c0565b6020860152612827604084016116c0565b6040860152612646606084016116c0565b608084015261014081015160a0840152015160c082015290565b61285a6113fd565b6127fa565b6040519061010082016001600160401b038111838210176128b6575b6040528160e06000918281528260208201528260408201528260608201528260808201526128a76117aa565b60a08201528260c08201520152565b6128be6113fd565b61287b565b91909161018060e06101a083019460018060a01b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261291360808201516080860190611742565b61292560a082015160a0860190611885565b60c08101516101608501520151910152565b6101a08183031261013657610180906129aa61295161156d565b9361295b836116c0565b8552612969602084016116c0565b602086015261297a604084016116c0565b604086015261298b606084016116c0565b606086015261299c608084016116c0565b608086015260a08301611670565b60a084015261016081015160c0840152015160e082015290565b6040519061014082016001600160401b03811183821017612a30575b60405281610120600091828152826020820152826040820152826060820152826080820152612a0d6117aa565b60a08201528260c0820152612a2061178b565b60e0820152826101008201520152565b612a386113fd565b6129e0565b919091610200610120610220830194612a57848251611742565b612a6960208201516020860190611742565b612a7b60408201516040860190611742565b612a8d60608201516060860190611742565b612a9f60808201516080860190611742565b612ab160a082015160a0860190611885565b60c0810151610160850152612acf60e082015161018086019061186a565b6101008101516101e08501520151910152565b60408051919082016001600160401b03811183821017612b0c575b60405260006020838281520152565b612b146113fd565b612afd56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acecb3acff3f437da359b4895d90b35b26b1a24e01a528ab6f7049fae3b3157a34fa164736f6c6343000811000a`,
  BytecodeLen: 12312,
  version: 9,
  views: {}
};
var _stateSourceMap = {
  1: {
    at: "./src/contracts/summon.rsh:75:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  },
  2: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./src/contracts/summon.rsh:89:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: null,
    who: "Module"
  },
  3: {
    at: "./src/contracts/summon.rsh:92:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  },
  4: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./src/contracts/summon.rsh:104:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: null,
    who: "Module"
  },
  5: {
    at: "./src/contracts/summon.rsh:107:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  },
  6: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./src/contracts/summon.rsh:125:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: null,
    who: "Module"
  },
  7: {
    at: "./src/contracts/summon.rsh:127:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  },
  8: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./src/contracts/summon.rsh:131:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: null,
    who: "Module"
  },
  9: {
    at: "./src/contracts/summon.rsh:134:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  },
  10: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./src/contracts/summon.rsh:151:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: null,
    who: "Module"
  },
  11: {
    at: "./src/contracts/summon.rsh:165:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  }
};
var _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
};
var _Participants = {
  Admin,
  Deployer,
  Summoner
};
var _APIs = {};

// src/contracts/build/coin_shop.contract.mjs
var exports_coin_shop_contract = {};
__export(exports_coin_shop_contract, {
  getExports: () => {
    {
      return getExports2;
    }
  },
  controller_api_withdraw: () => {
    {
      return controller_api_withdraw;
    }
  },
  controller_api_toggle_pause: () => {
    {
      return controller_api_toggle_pause;
    }
  },
  controller_api_terminate: () => {
    {
      return controller_api_terminate;
    }
  },
  controller_api_set_prices: () => {
    {
      return controller_api_set_prices;
    }
  },
  controller_api_restock: () => {
    {
      return controller_api_restock;
    }
  },
  buyer_api_silver: () => {
    {
      return buyer_api_silver;
    }
  },
  buyer_api_gold: () => {
    {
      return buyer_api_gold;
    }
  },
  buyer_api_bronze: () => {
    {
      return buyer_api_bronze;
    }
  },
  _versionHash: () => {
    {
      return _versionHash2;
    }
  },
  _version: () => {
    {
      return _version2;
    }
  },
  _stateSourceMap: () => {
    {
      return _stateSourceMap2;
    }
  },
  _getViews: () => {
    {
      return _getViews2;
    }
  },
  _getMaps: () => {
    {
      return _getMaps2;
    }
  },
  _getEvents: () => {
    {
      return _getEvents2;
    }
  },
  _controller_api_withdraw5: () => {
    {
      return _controller_api_withdraw5;
    }
  },
  _controller_api_toggle_pause5: () => {
    {
      return _controller_api_toggle_pause5;
    }
  },
  _controller_api_terminate5: () => {
    {
      return _controller_api_terminate5;
    }
  },
  _controller_api_set_prices5: () => {
    {
      return _controller_api_set_prices5;
    }
  },
  _controller_api_restock5: () => {
    {
      return _controller_api_restock5;
    }
  },
  _buyer_api_silver5: () => {
    {
      return _buyer_api_silver5;
    }
  },
  _buyer_api_gold5: () => {
    {
      return _buyer_api_gold5;
    }
  },
  _buyer_api_bronze5: () => {
    {
      return _buyer_api_bronze5;
    }
  },
  _backendVersion: () => {
    {
      return _backendVersion2;
    }
  },
  _Participants: () => {
    {
      return _Participants2;
    }
  },
  _Connectors: () => {
    {
      return _Connectors2;
    }
  },
  _APIs: () => {
    {
      return _APIs2;
    }
  },
  Deployer: () => {
    {
      return Deployer2;
    }
  },
  Admin: () => {
    {
      return Admin2;
    }
  }
});
function getExports2(s3) {
  const stdlib = s3.reachStdlib;
  return {};
}
function _getEvents2(s3) {
  const stdlib = s3.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "6"));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  return {
    price_change: [ctc1],
    purchase: [ctc2, ctc3],
    restock: [ctc1],
    terminate: [ctc4],
    withdraw: [ctc1]
  };
}
function _getViews2(s3, viewlib) {
  const stdlib = s3.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const _coin_prices = async (i2, svs, args) => {
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1"))) {
      const [v6629, v6630, v6631, v6632, v6647, v6654] = svs;
      stdlib.assert(false, "illegal view");
    }
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"))) {
      const [
        v6629,
        v6630,
        v6631,
        v6632,
        v6654,
        v6695,
        v6696,
        v6704,
        v6705,
        v12146,
        v12147,
        v12149,
        v12151,
        v12152
      ] = svs;
      return await (async () => {
        return v6695;
      })(...args);
    }
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"))) {
      const [
        v6629,
        v6630,
        v6631,
        v6632,
        v6654,
        v6695,
        v6696,
        v6697,
        v6704,
        v6705,
        v6735,
        v6737,
        v6738,
        v6739,
        v6740,
        v6741,
        v6742,
        v6743,
        v6744,
        v6746,
        v6747,
        v6748
      ] = svs;
      return await (async () => {
        return v6695;
      })(...args);
    }
    stdlib.assert(false, "illegal view");
  };
  const _coin_supply = async (i2, svs, args) => {
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1"))) {
      const [v6629, v6630, v6631, v6632, v6647, v6654] = svs;
      stdlib.assert(false, "illegal view");
    }
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"))) {
      const [
        v6629,
        v6630,
        v6631,
        v6632,
        v6654,
        v6695,
        v6696,
        v6704,
        v6705,
        v12146,
        v12147,
        v12149,
        v12151,
        v12152
      ] = svs;
      return await (async () => {
        return v12152;
      })(...args);
    }
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"))) {
      const [
        v6629,
        v6630,
        v6631,
        v6632,
        v6654,
        v6695,
        v6696,
        v6697,
        v6704,
        v6705,
        v6735,
        v6737,
        v6738,
        v6739,
        v6740,
        v6741,
        v6742,
        v6743,
        v6744,
        v6746,
        v6747,
        v6748
      ] = svs;
      return await (async () => {
        return v6744;
      })(...args);
    }
    stdlib.assert(false, "illegal view");
  };
  const _is_paused = async (i2, svs, args) => {
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1"))) {
      const [v6629, v6630, v6631, v6632, v6647, v6654] = svs;
      stdlib.assert(false, "illegal view");
    }
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"))) {
      const [
        v6629,
        v6630,
        v6631,
        v6632,
        v6654,
        v6695,
        v6696,
        v6704,
        v6705,
        v12146,
        v12147,
        v12149,
        v12151,
        v12152
      ] = svs;
      return await (async () => {
        return v6696;
      })(...args);
    }
    if (stdlib.eq(i2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"))) {
      const [
        v6629,
        v6630,
        v6631,
        v6632,
        v6654,
        v6695,
        v6696,
        v6697,
        v6704,
        v6705,
        v6735,
        v6737,
        v6738,
        v6739,
        v6740,
        v6741,
        v6742,
        v6743,
        v6744,
        v6746,
        v6747,
        v6748
      ] = svs;
      return await (async () => {
        return v6696;
      })(...args);
    }
    stdlib.assert(false, "illegal view");
  };
  return {
    infos: {
      coin_prices: {
        decode: _coin_prices,
        dom: [],
        rng: ctc6
      },
      coin_supply: {
        decode: _coin_supply,
        dom: [],
        rng: ctc6
      },
      is_paused: {
        decode: _is_paused,
        dom: [],
        rng: ctc3
      }
    },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc5, ctc0],
      3: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc6, ctc3, ctc5, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6],
      5: [
        ctc0,
        ctc1,
        ctc1,
        ctc1,
        ctc0,
        ctc6,
        ctc3,
        ctc3,
        ctc5,
        ctc2,
        ctc3,
        ctc3,
        ctc4,
        ctc2,
        ctc4,
        ctc2,
        ctc4,
        ctc2,
        ctc6,
        ctc2,
        ctc2,
        ctc2
      ]
    }
  };
}
function _getMaps2(s3) {
  const stdlib = s3.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
  };
}
async function Admin2(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc1,
    buyer_api_gold0_907: ctc1,
    buyer_api_silver0_907: ctc1,
    controller_api_restock0_907: ctc4,
    controller_api_set_prices0_907: ctc4,
    controller_api_terminate0_907: ctc1,
    controller_api_toggle_pause0_907: ctc1,
    controller_api_withdraw0_907: ctc1
  });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const v6583 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false
  ];
  const v6584 = [v6583, v6583, v6583];
  const txn1 = await ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
  });
  const {
    data: [v6630, v6631, v6632],
    secs: v6634,
    time: v6633,
    didSend: v439,
    from: v6629
  } = txn1;
  const v6635 = v6584[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0")];
  const v6636 = stdlib.Array_set(v6635, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
  const v6637 = stdlib.Array_set(v6584, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"), v6636);
  const v6639 = v6637[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1")];
  const v6640 = stdlib.Array_set(v6639, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
  const v6641 = stdlib.Array_set(v6637, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1"), v6640);
  const v6643 = stdlib.tokenEq(v6631, v6630);
  const v6644 = v6643 ? false : true;
  stdlib.assert(v6644, {
    at: "./src/contracts/coin_shop.rsh:103:18:dot",
    fs: [],
    msg: "non-network tokens distinct",
    who: "Admin"
  });
  const v6645 = v6641[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2")];
  const v6646 = stdlib.Array_set(v6645, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
  const v6647 = stdlib.Array_set(v6641, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2"), v6646);
  const v6649 = stdlib.tokenEq(v6632, v6630);
  const v6650 = v6649 ? false : true;
  const v6651 = stdlib.tokenEq(v6632, v6631);
  const v6652 = v6651 ? false : true;
  const v6653 = v6649 ? false : v6652;
  stdlib.assert(v6653, {
    at: "./src/contracts/coin_shop.rsh:103:18:dot",
    fs: [],
    msg: "non-network tokens distinct",
    who: "Admin"
  });
  const v6654 = ctc.iam(v6629);
  const v6660 = stdlib.tokenEq(v6630, v6631);
  const v6661 = v6660 ? false : true;
  stdlib.assert(v6661, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Admin"
  });
  const v6664 = stdlib.tokenEq(v6630, v6632);
  const v6665 = v6664 ? false : true;
  stdlib.assert(v6665, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Admin"
  });
  const v6674 = stdlib.tokenEq(v6631, v6632);
  const v6675 = v6674 ? false : true;
  stdlib.assert(v6675, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Admin"
  });
  stdlib.assert(v6650, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Admin"
  });
  stdlib.assert(v6652, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Admin"
  });
  const txn2 = await ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v6692,
    time: v6691,
    didSend: v845,
    from: v6690
  } = txn2;
  const v6693 = stdlib.addressEq(v6629, v6690);
  stdlib.assert(v6693, {
    at: "./src/contracts/coin_shop.rsh:115:18:dot",
    fs: [],
    msg: "sender correct",
    who: "Admin"
  });
  const v6694 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "10000000"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20000000"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30000000")
  ];
  let v6695 = v6694;
  let v6696 = false;
  let v6697 = false;
  let v6698 = v6691;
  let v6704 = v6647;
  let v6705 = stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:95:15:after expr stmt semicolon", stdlib.UInt_max, "0");
  let txn3 = txn2;
  while (await (async () => {
    const v6722 = v6697 ? false : true;
    return v6722;
  })()) {
    const v6735 = v6696 ? false : true;
    const v6736 = v6697 ? false : true;
    const v6737 = v6696 ? false : v6736;
    const v6738 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
    const v6739 = v6738[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
    const v6740 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
    const v6741 = v6740[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
    const v6742 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
    const v6743 = v6742[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
    const v6744 = [v6739, v6741, v6743];
    const v6746 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
    const v6747 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
    const v6748 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
    const txn42 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined,
      waitIfNotPresent: false
    });
    const {
      data: [v7228],
      secs: v7230,
      time: v7229,
      didSend: v5406,
      from: v7227
    } = txn42;
    switch (v7228[0]) {
      case "buyer_api_bronze0_907": {
        const v7231 = v7228[1];
        stdlib.assert(v6737, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
            "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "contract is currently inactive",
          who: "Admin"
        });
        const v7239 = stdlib.ge(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"));
        stdlib.assert(v7239, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
            "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "balance insufficient for transaction",
          who: "Admin"
        });
        const v7440 = stdlib.add(v6705, v6746);
        const v7441 = stdlib.le(v7440, stdlib.UInt_max);
        stdlib.assert(v7441, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v7446 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v7446, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v7454 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v7454, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v7462 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v7462, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v7499 = stdlib.sub(v7440, v7440);
        const v7500 = stdlib.ge(v7499, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:158:84:application", stdlib.UInt_max, "0"));
        stdlib.assert(v7500, {
          at: "./src/contracts/coin_shop.rsh:158:84:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v7529 = stdlib.sub(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:64:decimal", stdlib.UInt_max, "1"));
        const v7530 = stdlib.ge(v7529, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v7530, {
          at: "./src/contracts/coin_shop.rsh:159:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v7533 = stdlib.Array_set(v6738, "0", v7529);
        const v7534 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"), v7533);
        const v7535 = "bronze";
        const v7536 = true;
        await txn42.getOutput("buyer_api_bronze", "v7536", ctc6, v7536);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v7534;
        const cv6705 = v7499;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "buyer_api_gold0_907": {
        const v7845 = v7228[1];
        stdlib.assert(v6737, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
            "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "contract is currently inactive",
          who: "Admin"
        });
        const v7876 = stdlib.ge(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"));
        stdlib.assert(v7876, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
            "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "balance insufficient for transaction",
          who: "Admin"
        });
        const v8054 = stdlib.add(v6705, v6748);
        const v8055 = stdlib.le(v8054, stdlib.UInt_max);
        stdlib.assert(v8055, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8060 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v8060, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8068 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v8068, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8076 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v8076, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8189 = stdlib.sub(v8054, v8054);
        const v8190 = stdlib.ge(v8189, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:198:84:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8190, {
          at: "./src/contracts/coin_shop.rsh:198:84:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v8219 = stdlib.sub(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:70:decimal", stdlib.UInt_max, "1"));
        const v8220 = stdlib.ge(v8219, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8220, {
          at: "./src/contracts/coin_shop.rsh:199:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v8223 = stdlib.Array_set(v6742, "0", v8219);
        const v8224 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "2"), v8223);
        const v8225 = "gold  ";
        const v8226 = true;
        await txn42.getOutput("buyer_api_gold", "v8226", ctc6, v8226);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v8224;
        const cv6705 = v8189;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "buyer_api_silver0_907": {
        const v8459 = v7228[1];
        stdlib.assert(v6737, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
            "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "contract is currently inactive",
          who: "Admin"
        });
        const v8513 = stdlib.ge(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"));
        stdlib.assert(v8513, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
            "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "balance insufficient for transaction",
          who: "Admin"
        });
        const v8668 = stdlib.add(v6705, v6747);
        const v8669 = stdlib.le(v8668, stdlib.UInt_max);
        stdlib.assert(v8669, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8674 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v8674, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8682 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v8682, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8690 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v8690, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v8879 = stdlib.sub(v8668, v8668);
        const v8880 = stdlib.ge(v8879, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:178:84:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8880, {
          at: "./src/contracts/coin_shop.rsh:178:84:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v8909 = stdlib.sub(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:67:decimal", stdlib.UInt_max, "1"));
        const v8910 = stdlib.ge(v8909, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8910, {
          at: "./src/contracts/coin_shop.rsh:179:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v8913 = stdlib.Array_set(v6740, "0", v8909);
        const v8914 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "1"), v8913);
        const v8915 = "silver";
        const v8916 = true;
        await txn42.getOutput("buyer_api_silver", "v8916", ctc6, v8916);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v8914;
        const cv6705 = v8879;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_restock0_907": {
        const v9073 = v7228[1];
        const v9147 = v9073[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:212:22:spread", stdlib.UInt_max, "0")];
        const v9148 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v9148, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Admin"
        });
        const v9150 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "0")];
        const v9151 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "1")];
        const v9152 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "2")];
        const v9283 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v9283, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v9287 = stdlib.add(v6739, v9150);
        const v9288 = stdlib.le(v9287, stdlib.UInt_max);
        stdlib.assert(v9288, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v9291 = stdlib.Array_set(v6738, "0", v9287);
        const v9292 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"), v9291);
        const v9293 = v9292[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")];
        const v9294 = v9293[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
        const v9295 = stdlib.add(v9294, v9151);
        const v9296 = stdlib.le(v9295, stdlib.UInt_max);
        stdlib.assert(v9296, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v9299 = stdlib.Array_set(v9293, "0", v9295);
        const v9300 = stdlib.Array_set(v9292, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"), v9299);
        const v9301 = v9300[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")];
        const v9302 = v9301[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
        const v9303 = stdlib.add(v9302, v9152);
        const v9304 = stdlib.le(v9303, stdlib.UInt_max);
        stdlib.assert(v9304, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v9307 = stdlib.Array_set(v9301, "0", v9303);
        const v9308 = stdlib.Array_set(v9300, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"), v9307);
        const v9542 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v9543 = v9542[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v9544 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v9545 = v9544[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v9546 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v9547 = v9546[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v9548 = [v9543, v9545, v9547];
        const v9551 = "Successfully restocked CoinAmount";
        stdlib.protect(ctc7, await interact.log(v9551), {
          at: "./src/contracts/coin_shop.rsh:221:59:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:221:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:221:59:function exp)",
            'at ./src/contracts/coin_shop.rsh:221:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:221:59:application)',
            "at ./src/contracts/coin_shop.rsh:217:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:43:function exp)"
          ],
          msg: "log",
          who: "Admin"
        });
        const v9552 = true;
        await txn42.getOutput("controller_api_restock", "v9552", ctc6, v9552);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v9308;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_set_prices0_907": {
        const v9687 = v7228[1];
        const v9785 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v9785, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Admin"
        });
        const v9897 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v9897, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v9902 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v9902, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v9910 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v9910, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v9918 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v9918, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v10178 = v9687[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:229:22:spread", stdlib.UInt_max, "0")];
        const v10186 = "Successfully changed coin prices";
        stdlib.protect(ctc7, await interact.log(v10186), {
          at: "./src/contracts/coin_shop.rsh:238:59:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:238:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:59:function exp)",
            'at ./src/contracts/coin_shop.rsh:238:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:238:59:application)',
            "at ./src/contracts/coin_shop.rsh:234:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:43:function exp)"
          ],
          msg: "log",
          who: "Admin"
        });
        const v10187 = true;
        await txn42.getOutput("controller_api_set_prices", "v10187", ctc6, v10187);
        const cv6695 = v10178;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v6704;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_terminate0_907": {
        const v10301 = v7228[1];
        const v10418 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v10418, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Admin"
        });
        const v10511 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v10511, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v10516 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v10516, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v10524 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v10524, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v10532 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v10532, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v10816 = "Terminating Contract Execution";
        stdlib.protect(ctc7, await interact.log(v10816), {
          at: "./src/contracts/coin_shop.rsh:292:59:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:292:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:59:function exp)",
            'at ./src/contracts/coin_shop.rsh:292:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:292:59:application)',
            "at ./src/contracts/coin_shop.rsh:291:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:43:function exp)"
          ],
          msg: "log",
          who: "Admin"
        });
        const v10817 = true;
        const v10818 = true;
        await txn42.getOutput("controller_api_terminate", "v10818", ctc6, v10818);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = true;
        const cv6698 = v7229;
        const cv6704 = v6704;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_toggle_pause0_907": {
        const v10915 = v7228[1];
        const v11051 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v11051, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Admin"
        });
        const v11125 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v11125, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v11130 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v11130, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v11138 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v11138, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v11146 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v11146, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v11442 = "Resuming Contract APIs        ";
        const v11443 = "Pausing Contract APIs         ";
        const v11444 = v6696 ? v11442 : v11443;
        stdlib.protect(ctc7, await interact.log(v11444), {
          at: "./src/contracts/coin_shop.rsh:256:59:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:256:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:256:59:function exp)",
            'at ./src/contracts/coin_shop.rsh:256:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:256:59:application)',
            "at ./src/contracts/coin_shop.rsh:251:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:43:function exp)"
          ],
          msg: "log",
          who: "Admin"
        });
        await txn42.getOutput("controller_api_toggle_pause", "v6735", ctc6, v6735);
        const cv6695 = v6695;
        const cv6696 = v6735;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v6704;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_withdraw0_907": {
        const v11529 = v7228[1];
        const v11684 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v11684, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Admin"
        });
        const v11739 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v11739, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v11744 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v11744, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v11752 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v11752, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v11760 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v11760, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Admin"
        });
        const v12072 = "Withdrawing CoinAmount from contract";
        stdlib.protect(ctc7, await interact.log(v12072), {
          at: "./src/contracts/coin_shop.rsh:272:59:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:272:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:272:59:function exp)",
            'at ./src/contracts/coin_shop.rsh:272:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:272:59:application)',
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "log",
          who: "Admin"
        });
        const v12107 = stdlib.sub(v6739, v6739);
        const v12108 = stdlib.ge(v12107, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v12108, {
          at: "./src/contracts/coin_shop.rsh:276:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v12111 = stdlib.Array_set(v6738, "0", v12107);
        const v12112 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"), v12111);
        const v12113 = v12112[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1")];
        const v12114 = v12113[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
        const v12118 = stdlib.sub(v12114, v6741);
        const v12119 = stdlib.ge(v12118, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v12119, {
          at: "./src/contracts/coin_shop.rsh:276:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v12122 = stdlib.Array_set(v12113, "0", v12118);
        const v12123 = stdlib.Array_set(v12112, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1"), v12122);
        const v12124 = v12123[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2")];
        const v12125 = v12124[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
        const v12129 = stdlib.sub(v12125, v6743);
        const v12130 = stdlib.ge(v12129, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v12130, {
          at: "./src/contracts/coin_shop.rsh:276:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Admin"
        });
        const v12133 = stdlib.Array_set(v12124, "0", v12129);
        const v12134 = stdlib.Array_set(v12123, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2"), v12133);
        const v12136 = true;
        await txn42.getOutput("controller_api_withdraw", "v12136", ctc6, v12136);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v12134;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
    }
  }
  const v12146 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
  const v12147 = v12146[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
  const v12148 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
  const v12149 = v12148[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
  const v12150 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
  const v12151 = v12150[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
  const v12152 = [v12147, v12149, v12151];
  const txn4 = await ctc.sendrecv({
    args: [v6629, v6630, v6631, v6632, v6654, v6695, v6696, v6704, v6705, v12146, v12147, v12149, v12151, v12152],
    evt_cnt: 0,
    funcNum: 3,
    lct: v6698,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
    sim_p: async (txn42) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [],
        secs: v121652,
        time: v121642,
        didSend: v60242,
        from: v121632
      } = txn42;
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: undefined
      });
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: v6630
      });
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: v6631
      });
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: v6632
      });
      sim_r.txns.push({
        kind: "halt",
        tok: v6632
      });
      sim_r.txns.push({
        kind: "halt",
        tok: v6631
      });
      sim_r.txns.push({
        kind: "halt",
        tok: v6630
      });
      sim_r.txns.push({
        kind: "halt",
        tok: undefined
      });
      sim_r.isHalt = true;
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc8, ctc0, ctc0, ctc0, ctc8, ctc3, ctc6, ctc10, ctc2, ctc9, ctc2, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v12165,
    time: v12164,
    didSend: v6024,
    from: v12163
  } = txn4;
  const v12166 = stdlib.addressEq(v6654, v12163);
  const v12167 = stdlib.addressEq(v6629, v12163);
  const v12168 = v12166 ? true : v12167;
  stdlib.assert(v12168, {
    at: "reach standard library:197:11:dot",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "sender correct",
    who: "Admin"
  });
  const v12191 = stdlib.sub(v6705, v6705);
  const v12192 = stdlib.ge(v12191, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12192, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Admin"
  });
  const v12199 = stdlib.sub(v12147, v12147);
  const v12200 = stdlib.ge(v12199, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12200, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Admin"
  });
  const v12203 = stdlib.Array_set(v12146, "0", v12199);
  const v12204 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"), v12203);
  const v12205 = v12204[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1")];
  const v12206 = v12205[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
  const v12210 = stdlib.sub(v12206, v12149);
  const v12211 = stdlib.ge(v12210, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12211, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Admin"
  });
  const v12214 = stdlib.Array_set(v12205, "0", v12210);
  const v12215 = stdlib.Array_set(v12204, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1"), v12214);
  const v12216 = v12215[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "2")];
  const v12217 = v12216[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
  const v12221 = stdlib.sub(v12217, v12151);
  const v12222 = stdlib.ge(v12221, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12222, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Admin"
  });
  const v12240 = "Closing contract...";
  stdlib.protect(ctc7, await interact.log(v12240), {
    at: "./src/contracts/coin_shop.rsh:307:43:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:307:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:43:function exp)",
      'at ./src/contracts/coin_shop.rsh:307:43:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:307:43:application)',
      'at reach standard library:200:8:application call to "after" (defined at: ./src/contracts/coin_shop.rsh:306:20:function exp)',
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "log",
    who: "Admin"
  });
  return;
}
async function Deployer2(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc3,
    buyer_api_gold0_907: ctc3,
    buyer_api_silver0_907: ctc3,
    controller_api_restock0_907: ctc6,
    controller_api_set_prices0_907: ctc6,
    controller_api_terminate0_907: ctc3,
    controller_api_toggle_pause0_907: ctc3,
    controller_api_withdraw0_907: ctc3
  });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const v6583 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false
  ];
  const v6584 = [v6583, v6583, v6583];
  const v6588 = stdlib.protect(ctc1, interact.coin_asa_ids, "for Deployer's interact field coin_asa_ids");
  const v6589 = v6588[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:47:37:application", stdlib.UInt_max, "0")];
  const v6590 = v6588[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:47:37:application", stdlib.UInt_max, "1")];
  const v6591 = v6588[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:47:37:application", stdlib.UInt_max, "2")];
  const v6602 = stdlib.tokenEq(v6589, v6590);
  const v6603 = v6602 ? false : true;
  stdlib.assert(v6603, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
      "at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)"
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6606 = stdlib.tokenEq(v6589, v6591);
  const v6607 = v6606 ? false : true;
  stdlib.assert(v6607, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
      "at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)"
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6611 = stdlib.tokenEq(v6590, v6589);
  const v6612 = v6611 ? false : true;
  stdlib.assert(v6612, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
      "at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)"
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6616 = stdlib.tokenEq(v6590, v6591);
  const v6617 = v6616 ? false : true;
  stdlib.assert(v6617, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
      "at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)"
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6621 = stdlib.tokenEq(v6591, v6589);
  const v6622 = v6621 ? false : true;
  stdlib.assert(v6622, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
      "at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)"
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6625 = stdlib.tokenEq(v6591, v6590);
  const v6626 = v6625 ? false : true;
  stdlib.assert(v6626, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:101:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)',
      "at ./src/contracts/coin_shop.rsh:98:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:98:26:function exp)"
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const txn1 = await ctc.sendrecv({
    args: [v6589, v6590, v6591],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:decimal", stdlib.UInt_max, "0"), []],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v66302, v66312, v66322],
        secs: v66342,
        time: v66332,
        didSend: v4392,
        from: v66292
      } = txn12;
      const v66352 = v6584[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0")];
      const v66362 = stdlib.Array_set(v66352, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
      const v66372 = stdlib.Array_set(v6584, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"), v66362);
      const v66392 = v66372[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1")];
      const v66402 = stdlib.Array_set(v66392, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
      const v66412 = stdlib.Array_set(v66372, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1"), v66402);
      const v66452 = v66412[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2")];
      const v66462 = stdlib.Array_set(v66452, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
      const v66472 = stdlib.Array_set(v66412, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2"), v66462);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v66302
      });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v66312
      });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v66322
      });
      const v66542 = v66292;
      const v66872 = await ctc.getContractInfo();
      const v66882 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
  });
  const {
    data: [v6630, v6631, v6632],
    secs: v6634,
    time: v6633,
    didSend: v439,
    from: v6629
  } = txn1;
  const v6635 = v6584[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0")];
  const v6636 = stdlib.Array_set(v6635, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
  const v6637 = stdlib.Array_set(v6584, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"), v6636);
  const v6639 = v6637[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1")];
  const v6640 = stdlib.Array_set(v6639, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
  const v6641 = stdlib.Array_set(v6637, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "1"), v6640);
  const v6643 = stdlib.tokenEq(v6631, v6630);
  const v6644 = v6643 ? false : true;
  stdlib.assert(v6644, {
    at: "./src/contracts/coin_shop.rsh:103:18:dot",
    fs: [],
    msg: "non-network tokens distinct",
    who: "Deployer"
  });
  const v6645 = v6641[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2")];
  const v6646 = stdlib.Array_set(v6645, "0", stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "0"));
  const v6647 = stdlib.Array_set(v6641, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:103:18:dot", stdlib.UInt_max, "2"), v6646);
  const v6649 = stdlib.tokenEq(v6632, v6630);
  const v6650 = v6649 ? false : true;
  const v6651 = stdlib.tokenEq(v6632, v6631);
  const v6652 = v6651 ? false : true;
  const v6653 = v6649 ? false : v6652;
  stdlib.assert(v6653, {
    at: "./src/contracts/coin_shop.rsh:103:18:dot",
    fs: [],
    msg: "non-network tokens distinct",
    who: "Deployer"
  });
  const v6654 = v6629;
  const v6660 = stdlib.tokenEq(v6630, v6631);
  const v6661 = v6660 ? false : true;
  stdlib.assert(v6661, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6664 = stdlib.tokenEq(v6630, v6632);
  const v6665 = v6664 ? false : true;
  stdlib.assert(v6665, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6674 = stdlib.tokenEq(v6631, v6632);
  const v6675 = v6674 ? false : true;
  stdlib.assert(v6675, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  stdlib.assert(v6650, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  stdlib.assert(v6652, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:25:49:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:24:55:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:24:43:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:47:function exp)',
      "at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)",
      'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)',
      "at ./src/contracts/util/checks.rsh:23:35:application call to [unknown function] (defined at: reach standard library:558:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:109:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:51:function exp)'
    ],
    msg: "The asa ids provided are the same",
    who: "Deployer"
  });
  const v6687 = await ctc.getContractInfo();
  const v6688 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.deployed(v6687, v6688), {
    at: "./src/contracts/coin_shop.rsh:113:35:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:113:35:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:113:35:function exp)",
      'at ./src/contracts/coin_shop.rsh:113:35:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:113:35:application)'
    ],
    msg: "deployed",
    who: "Deployer"
  });
  const txn2 = await ctc.sendrecv({
    args: [v6629, v6630, v6631, v6632, v6647, v6654],
    evt_cnt: 0,
    funcNum: 1,
    lct: v6633,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:115:18:decimal", stdlib.UInt_max, "0"), []],
    sim_p: async (txn22) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [],
        secs: v66922,
        time: v66912,
        didSend: v8452,
        from: v66902
      } = txn22;
      const v66942 = [
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "10000000"),
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20000000"),
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30000000")
      ];
      const v66952 = v66942;
      const v66962 = false;
      const v66972 = false;
      const v66982 = v66912;
      const v67042 = v6647;
      const v67052 = stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:95:15:after expr stmt semicolon", stdlib.UInt_max, "0");
      if (await (async () => {
        const v6722 = v66972 ? false : true;
        return v6722;
      })()) {
        const v6735 = v66962 ? false : true;
        const v6736 = v66972 ? false : true;
        const v6737 = v66962 ? false : v6736;
        const v6738 = v67042[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v6739 = v6738[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v6740 = v67042[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v6741 = v6740[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v6742 = v67042[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v6743 = v6742[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v6744 = [v6739, v6741, v6743];
        const v6746 = v66952[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v6747 = v66952[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v6748 = v66952[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        sim_r.isHalt = false;
      } else {
        const v121462 = v67042[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v121472 = v121462[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v121482 = v67042[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v121492 = v121482[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v121502 = v67042[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v121512 = v121502[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v121522 = [v121472, v121492, v121512];
        sim_r.isHalt = false;
      }
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc9, ctc0, ctc0, ctc0, ctc11, ctc9],
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v6692,
    time: v6691,
    didSend: v845,
    from: v6690
  } = txn2;
  const v6693 = stdlib.addressEq(v6629, v6690);
  stdlib.assert(v6693, {
    at: "./src/contracts/coin_shop.rsh:115:18:dot",
    fs: [],
    msg: "sender correct",
    who: "Deployer"
  });
  const v6694 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "10000000"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "20000000"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "30000000")
  ];
  let v6695 = v6694;
  let v6696 = false;
  let v6697 = false;
  let v6698 = v6691;
  let v6704 = v6647;
  let v6705 = stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:95:15:after expr stmt semicolon", stdlib.UInt_max, "0");
  let txn3 = txn2;
  while (await (async () => {
    const v6722 = v6697 ? false : true;
    return v6722;
  })()) {
    const v6735 = v6696 ? false : true;
    const v6736 = v6697 ? false : true;
    const v6737 = v6696 ? false : v6736;
    const v6738 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
    const v6739 = v6738[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
    const v6740 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
    const v6741 = v6740[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
    const v6742 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
    const v6743 = v6742[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
    const v6744 = [v6739, v6741, v6743];
    const v6746 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
    const v6747 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
    const v6748 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
    const txn42 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined,
      waitIfNotPresent: false
    });
    const {
      data: [v7228],
      secs: v7230,
      time: v7229,
      didSend: v5406,
      from: v7227
    } = txn42;
    switch (v7228[0]) {
      case "buyer_api_bronze0_907": {
        const v7231 = v7228[1];
        stdlib.assert(v6737, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
            "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "contract is currently inactive",
          who: "Deployer"
        });
        const v7239 = stdlib.ge(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"));
        stdlib.assert(v7239, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
            "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "balance insufficient for transaction",
          who: "Deployer"
        });
        const v7440 = stdlib.add(v6705, v6746);
        const v7441 = stdlib.le(v7440, stdlib.UInt_max);
        stdlib.assert(v7441, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v7446 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v7446, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v7454 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v7454, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v7462 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v7462, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v7499 = stdlib.sub(v7440, v7440);
        const v7500 = stdlib.ge(v7499, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:158:84:application", stdlib.UInt_max, "0"));
        stdlib.assert(v7500, {
          at: "./src/contracts/coin_shop.rsh:158:84:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v7529 = stdlib.sub(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:64:decimal", stdlib.UInt_max, "1"));
        const v7530 = stdlib.ge(v7529, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v7530, {
          at: "./src/contracts/coin_shop.rsh:159:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v7533 = stdlib.Array_set(v6738, "0", v7529);
        const v7534 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"), v7533);
        const v7535 = "bronze";
        const v7536 = true;
        await txn42.getOutput("buyer_api_bronze", "v7536", ctc8, v7536);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v7534;
        const cv6705 = v7499;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "buyer_api_gold0_907": {
        const v7845 = v7228[1];
        stdlib.assert(v6737, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
            "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "contract is currently inactive",
          who: "Deployer"
        });
        const v7876 = stdlib.ge(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"));
        stdlib.assert(v7876, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
            "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "balance insufficient for transaction",
          who: "Deployer"
        });
        const v8054 = stdlib.add(v6705, v6748);
        const v8055 = stdlib.le(v8054, stdlib.UInt_max);
        stdlib.assert(v8055, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8060 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v8060, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8068 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v8068, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8076 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v8076, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8189 = stdlib.sub(v8054, v8054);
        const v8190 = stdlib.ge(v8189, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:198:84:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8190, {
          at: "./src/contracts/coin_shop.rsh:198:84:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v8219 = stdlib.sub(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:70:decimal", stdlib.UInt_max, "1"));
        const v8220 = stdlib.ge(v8219, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8220, {
          at: "./src/contracts/coin_shop.rsh:199:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v8223 = stdlib.Array_set(v6742, "0", v8219);
        const v8224 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "2"), v8223);
        const v8225 = "gold  ";
        const v8226 = true;
        await txn42.getOutput("buyer_api_gold", "v8226", ctc8, v8226);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v8224;
        const cv6705 = v8189;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "buyer_api_silver0_907": {
        const v8459 = v7228[1];
        stdlib.assert(v6737, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
            "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "contract is currently inactive",
          who: "Deployer"
        });
        const v8513 = stdlib.ge(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"));
        stdlib.assert(v8513, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
            "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "balance insufficient for transaction",
          who: "Deployer"
        });
        const v8668 = stdlib.add(v6705, v6747);
        const v8669 = stdlib.le(v8668, stdlib.UInt_max);
        stdlib.assert(v8669, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8674 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v8674, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8682 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v8682, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8690 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v8690, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v8879 = stdlib.sub(v8668, v8668);
        const v8880 = stdlib.ge(v8879, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:178:84:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8880, {
          at: "./src/contracts/coin_shop.rsh:178:84:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v8909 = stdlib.sub(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:67:decimal", stdlib.UInt_max, "1"));
        const v8910 = stdlib.ge(v8909, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v8910, {
          at: "./src/contracts/coin_shop.rsh:179:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v8913 = stdlib.Array_set(v6740, "0", v8909);
        const v8914 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "1"), v8913);
        const v8915 = "silver";
        const v8916 = true;
        await txn42.getOutput("buyer_api_silver", "v8916", ctc8, v8916);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v8914;
        const cv6705 = v8879;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_restock0_907": {
        const v9073 = v7228[1];
        const v9147 = v9073[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:212:22:spread", stdlib.UInt_max, "0")];
        const v9148 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v9148, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Deployer"
        });
        const v9150 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "0")];
        const v9151 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "1")];
        const v9152 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "2")];
        const v9283 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v9283, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v9287 = stdlib.add(v6739, v9150);
        const v9288 = stdlib.le(v9287, stdlib.UInt_max);
        stdlib.assert(v9288, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v9291 = stdlib.Array_set(v6738, "0", v9287);
        const v9292 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"), v9291);
        const v9293 = v9292[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")];
        const v9294 = v9293[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
        const v9295 = stdlib.add(v9294, v9151);
        const v9296 = stdlib.le(v9295, stdlib.UInt_max);
        stdlib.assert(v9296, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v9299 = stdlib.Array_set(v9293, "0", v9295);
        const v9300 = stdlib.Array_set(v9292, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"), v9299);
        const v9301 = v9300[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")];
        const v9302 = v9301[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
        const v9303 = stdlib.add(v9302, v9152);
        const v9304 = stdlib.le(v9303, stdlib.UInt_max);
        stdlib.assert(v9304, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v9307 = stdlib.Array_set(v9301, "0", v9303);
        const v9308 = stdlib.Array_set(v9300, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"), v9307);
        const v9542 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v9543 = v9542[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v9544 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v9545 = v9544[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v9546 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v9547 = v9546[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v9548 = [v9543, v9545, v9547];
        const v9552 = true;
        await txn42.getOutput("controller_api_restock", "v9552", ctc8, v9552);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v9308;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_set_prices0_907": {
        const v9687 = v7228[1];
        const v9785 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v9785, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Deployer"
        });
        const v9897 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v9897, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v9902 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v9902, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v9910 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v9910, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v9918 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v9918, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v10178 = v9687[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:229:22:spread", stdlib.UInt_max, "0")];
        const v10187 = true;
        await txn42.getOutput("controller_api_set_prices", "v10187", ctc8, v10187);
        const cv6695 = v10178;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v6704;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_terminate0_907": {
        const v10301 = v7228[1];
        const v10418 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v10418, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Deployer"
        });
        const v10511 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v10511, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v10516 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v10516, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v10524 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v10524, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v10532 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v10532, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v10817 = true;
        const v10818 = true;
        await txn42.getOutput("controller_api_terminate", "v10818", ctc8, v10818);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = true;
        const cv6698 = v7229;
        const cv6704 = v6704;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_toggle_pause0_907": {
        const v10915 = v7228[1];
        const v11051 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v11051, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Deployer"
        });
        const v11125 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v11125, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v11130 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v11130, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v11138 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v11138, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v11146 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v11146, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        await txn42.getOutput("controller_api_toggle_pause", "v6735", ctc8, v6735);
        const cv6695 = v6695;
        const cv6696 = v6735;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v6704;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
      case "controller_api_withdraw0_907": {
        const v11529 = v7228[1];
        const v11684 = stdlib.addressEq(v7227, v6654);
        stdlib.assert(v11684, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
            "at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
            "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
            "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
          ],
          msg: "action not permitted",
          who: "Deployer"
        });
        const v11739 = stdlib.le(v6705, stdlib.UInt_max);
        stdlib.assert(v11739, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v11744 = stdlib.le(v6739, stdlib.UInt_max);
        stdlib.assert(v11744, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v11752 = stdlib.le(v6741, stdlib.UInt_max);
        stdlib.assert(v11752, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v11760 = stdlib.le(v6743, stdlib.UInt_max);
        stdlib.assert(v11760, {
          at: "./src/contracts/coin_shop.rsh:118:68:dot",
          fs: [],
          msg: "assume <= UInt.max",
          who: "Deployer"
        });
        const v12107 = stdlib.sub(v6739, v6739);
        const v12108 = stdlib.ge(v12107, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v12108, {
          at: "./src/contracts/coin_shop.rsh:276:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v12111 = stdlib.Array_set(v6738, "0", v12107);
        const v12112 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"), v12111);
        const v12113 = v12112[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1")];
        const v12114 = v12113[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
        const v12118 = stdlib.sub(v12114, v6741);
        const v12119 = stdlib.ge(v12118, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v12119, {
          at: "./src/contracts/coin_shop.rsh:276:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v12122 = stdlib.Array_set(v12113, "0", v12118);
        const v12123 = stdlib.Array_set(v12112, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1"), v12122);
        const v12124 = v12123[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2")];
        const v12125 = v12124[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
        const v12129 = stdlib.sub(v12125, v6743);
        const v12130 = stdlib.ge(v12129, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
        stdlib.assert(v12130, {
          at: "./src/contracts/coin_shop.rsh:276:76:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "assume >= 0",
          who: "Deployer"
        });
        const v12133 = stdlib.Array_set(v12124, "0", v12129);
        const v12134 = stdlib.Array_set(v12123, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2"), v12133);
        const v12136 = true;
        await txn42.getOutput("controller_api_withdraw", "v12136", ctc8, v12136);
        const cv6695 = v6695;
        const cv6696 = v6696;
        const cv6697 = v6697;
        const cv6698 = v7229;
        const cv6704 = v12134;
        const cv6705 = v6705;
        v6695 = cv6695;
        v6696 = cv6696;
        v6697 = cv6697;
        v6698 = cv6698;
        v6704 = cv6704;
        v6705 = cv6705;
        txn3 = txn42;
        continue;
        break;
      }
    }
  }
  const v12146 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
  const v12147 = v12146[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
  const v12148 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
  const v12149 = v12148[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
  const v12150 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
  const v12151 = v12150[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
  const v12152 = [v12147, v12149, v12151];
  const txn4 = await ctc.sendrecv({
    args: [v6629, v6630, v6631, v6632, v6654, v6695, v6696, v6704, v6705, v12146, v12147, v12149, v12151, v12152],
    evt_cnt: 0,
    funcNum: 3,
    lct: v6698,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify("reach standard library:197:11:decimal", stdlib.UInt_max, "0"), []],
    sim_p: async (txn42) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [],
        secs: v121652,
        time: v121642,
        didSend: v60242,
        from: v121632
      } = txn42;
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: undefined
      });
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: v6630
      });
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: v6631
      });
      sim_r.txns.push({
        kind: "from",
        to: v6654,
        tok: v6632
      });
      sim_r.txns.push({
        kind: "halt",
        tok: v6632
      });
      sim_r.txns.push({
        kind: "halt",
        tok: v6631
      });
      sim_r.txns.push({
        kind: "halt",
        tok: v6630
      });
      sim_r.txns.push({
        kind: "halt",
        tok: undefined
      });
      sim_r.isHalt = true;
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc9, ctc0, ctc0, ctc0, ctc9, ctc5, ctc8, ctc11, ctc4, ctc10, ctc4, ctc4, ctc4, ctc5],
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v12165,
    time: v12164,
    didSend: v6024,
    from: v12163
  } = txn4;
  const v12166 = stdlib.addressEq(v6654, v12163);
  const v12167 = stdlib.addressEq(v6629, v12163);
  const v12168 = v12166 ? true : v12167;
  stdlib.assert(v12168, {
    at: "reach standard library:197:11:dot",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "sender correct",
    who: "Deployer"
  });
  const v12191 = stdlib.sub(v6705, v6705);
  const v12192 = stdlib.ge(v12191, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12192, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Deployer"
  });
  const v12199 = stdlib.sub(v12147, v12147);
  const v12200 = stdlib.ge(v12199, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12200, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Deployer"
  });
  const v12203 = stdlib.Array_set(v12146, "0", v12199);
  const v12204 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"), v12203);
  const v12205 = v12204[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1")];
  const v12206 = v12205[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
  const v12210 = stdlib.sub(v12206, v12149);
  const v12211 = stdlib.ge(v12210, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12211, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Deployer"
  });
  const v12214 = stdlib.Array_set(v12205, "0", v12210);
  const v12215 = stdlib.Array_set(v12204, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "1"), v12214);
  const v12216 = v12215[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "2")];
  const v12217 = v12216[stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0")];
  const v12221 = stdlib.sub(v12217, v12151);
  const v12222 = stdlib.ge(v12221, stdlib.checkedBigNumberify("reach standard library:198:46:application", stdlib.UInt_max, "0"));
  stdlib.assert(v12222, {
    at: "reach standard library:198:46:application",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: "assume >= 0",
    who: "Deployer"
  });
  return;
}
async function _buyer_api_bronze5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_bronze5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _buyer_api_bronze5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc7,
    buyer_api_gold0_907: ctc7,
    buyer_api_silver0_907: ctc7,
    controller_api_restock0_907: ctc8,
    controller_api_set_prices0_907: ctc8,
    controller_api_terminate0_907: ctc7,
    controller_api_toggle_pause0_907: ctc7,
    controller_api_withdraw0_907: ctc7
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6751 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_bronze0_907" (defined at: ./src/contracts/coin_shop.rsh:149:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "buyer_api_bronze"
  });
  stdlib.assert(v6737, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
      "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_bronze0_907" (defined at: ./src/contracts/coin_shop.rsh:149:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "contract is currently inactive",
    who: "buyer_api_bronze"
  });
  const v6755 = stdlib.ge(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"));
  stdlib.assert(v6755, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
      "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_bronze0_907" (defined at: ./src/contracts/coin_shop.rsh:149:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "balance insufficient for transaction",
    who: "buyer_api_bronze"
  });
  const v6760 = ["buyer_api_bronze0_907", v6751];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6760
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      v6746,
      [
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:155:59:decimal", stdlib.UInt_max, "0"),
          v6630
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:155:62:decimal", stdlib.UInt_max, "0"),
          v6631
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:155:65:decimal", stdlib.UInt_max, "0"),
          v6632
        ]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "buyer_api_bronze"
          });
          const v7440 = stdlib.add(v6705, v6746);
          sim_r.txns.push({
            amt: v6746,
            kind: "to",
            tok: undefined
          });
          const v7499 = stdlib.sub(v7440, v7440);
          sim_r.txns.push({
            kind: "from",
            to: v6654,
            tok: undefined
          });
          const v7529 = stdlib.sub(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:64:decimal", stdlib.UInt_max, "1"));
          const v7533 = stdlib.Array_set(v6738, "0", v7529);
          const v7534 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"), v7533);
          sim_r.txns.push({
            kind: "from",
            to: v72272,
            tok: v6630
          });
          const v7535 = "bronze";
          const v7536 = true;
          const v7537 = await txn12.getOutput("buyer_api_bronze", "v7536", ctc4, v7536);
          const v14685 = v6695;
          const v14686 = v6696;
          const v14687 = v6697;
          const v14689 = v7534;
          const v14690 = v7499;
          const v14691 = v6697 ? false : true;
          if (v6697) {
            const v14705 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v14706 = v14705[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v14707 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v14708 = v14707[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v14709 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v14710 = v14709[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v14711 = [v14706, v14708, v14710];
            sim_r.isHalt = false;
          } else {
            const v14692 = v6696 ? false : true;
            const v14694 = v6696 ? false : v14691;
            const v14695 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v14696 = v14695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v14697 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v14698 = v14697[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v14699 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v14700 = v14699[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v14701 = [v14696, v14698, v14700];
            const v14702 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
            const v14703 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
            const v14704 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
            sim_r.isHalt = false;
          }
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      stdlib.assert(v6737, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:150:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
          "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "contract is currently inactive",
        who: "buyer_api_bronze"
      });
      const v7239 = stdlib.ge(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:151:41:decimal", stdlib.UInt_max, "1"));
      stdlib.assert(v7239, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:151:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
          "at ./src/contracts/coin_shop.rsh:149:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "balance insufficient for transaction",
        who: "buyer_api_bronze"
      });
      const v7440 = stdlib.add(v6705, v6746);
      const v7441 = stdlib.le(v7440, stdlib.UInt_max);
      stdlib.assert(v7441, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_bronze"
      });
      const v7446 = stdlib.le(v6739, stdlib.UInt_max);
      stdlib.assert(v7446, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_bronze"
      });
      const v7454 = stdlib.le(v6741, stdlib.UInt_max);
      stdlib.assert(v7454, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_bronze"
      });
      const v7462 = stdlib.le(v6743, stdlib.UInt_max);
      stdlib.assert(v7462, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_bronze"
      });
      const v7499 = stdlib.sub(v7440, v7440);
      const v7500 = stdlib.ge(v7499, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:158:84:application", stdlib.UInt_max, "0"));
      stdlib.assert(v7500, {
        at: "./src/contracts/coin_shop.rsh:158:84:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "buyer_api_bronze"
      });
      const v7529 = stdlib.sub(v6739, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:64:decimal", stdlib.UInt_max, "1"));
      const v7530 = stdlib.ge(v7529, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"));
      stdlib.assert(v7530, {
        at: "./src/contracts/coin_shop.rsh:159:76:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "buyer_api_bronze"
      });
      const v7533 = stdlib.Array_set(v6738, "0", v7529);
      const v7534 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:159:76:application", stdlib.UInt_max, "0"), v7533);
      const v7535 = "bronze";
      const v7536 = true;
      const v7537 = await txn1.getOutput("buyer_api_bronze", "v7536", ctc4, v7536);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v7231, v7537), {
          at: "./src/contracts/coin_shop.rsh:149:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:149:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:149:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:163:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:156:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:156:43:function exp)"
          ],
          msg: "out",
          who: "buyer_api_bronze"
        });
      } else {
      }
      const v14685 = v6695;
      const v14686 = v6696;
      const v14687 = v6697;
      const v14689 = v7534;
      const v14690 = v7499;
      const v14691 = v6697 ? false : true;
      if (v6697) {
        const v14705 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v14706 = v14705[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v14707 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v14708 = v14707[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v14709 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v14710 = v14709[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v14711 = [v14706, v14708, v14710];
        return;
      } else {
        const v14692 = v6696 ? false : true;
        const v14694 = v6696 ? false : v14691;
        const v14695 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v14696 = v14695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v14697 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v14698 = v14697[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v14699 = v7534[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v14700 = v14699[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v14701 = [v14696, v14698, v14700];
        const v14702 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v14703 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v14704 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        return;
      }
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      return;
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      return;
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      return;
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      return;
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      return;
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      return;
      break;
    }
  }
}
async function _buyer_api_gold5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_gold5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _buyer_api_gold5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc7,
    buyer_api_gold0_907: ctc7,
    buyer_api_silver0_907: ctc7,
    controller_api_restock0_907: ctc8,
    controller_api_set_prices0_907: ctc8,
    controller_api_terminate0_907: ctc7,
    controller_api_toggle_pause0_907: ctc7,
    controller_api_withdraw0_907: ctc7
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6777 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_gold0_907" (defined at: ./src/contracts/coin_shop.rsh:189:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "buyer_api_gold"
  });
  stdlib.assert(v6737, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
      "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_gold0_907" (defined at: ./src/contracts/coin_shop.rsh:189:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "contract is currently inactive",
    who: "buyer_api_gold"
  });
  const v6781 = stdlib.ge(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"));
  stdlib.assert(v6781, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
      "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_gold0_907" (defined at: ./src/contracts/coin_shop.rsh:189:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "balance insufficient for transaction",
    who: "buyer_api_gold"
  });
  const v6786 = ["buyer_api_gold0_907", v6777];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6786
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      v6748,
      [
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:195:59:decimal", stdlib.UInt_max, "0"),
          v6630
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:195:62:decimal", stdlib.UInt_max, "0"),
          v6631
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:195:65:decimal", stdlib.UInt_max, "0"),
          v6632
        ]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "buyer_api_gold"
          });
          const v8054 = stdlib.add(v6705, v6748);
          sim_r.txns.push({
            amt: v6748,
            kind: "to",
            tok: undefined
          });
          const v8189 = stdlib.sub(v8054, v8054);
          sim_r.txns.push({
            kind: "from",
            to: v6654,
            tok: undefined
          });
          const v8219 = stdlib.sub(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:70:decimal", stdlib.UInt_max, "1"));
          const v8223 = stdlib.Array_set(v6742, "0", v8219);
          const v8224 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "2"), v8223);
          sim_r.txns.push({
            kind: "from",
            to: v72272,
            tok: v6632
          });
          const v8225 = "gold  ";
          const v8226 = true;
          const v8227 = await txn12.getOutput("buyer_api_gold", "v8226", ctc4, v8226);
          const v15135 = v6695;
          const v15136 = v6696;
          const v15137 = v6697;
          const v15139 = v8224;
          const v15140 = v8189;
          const v15141 = v6697 ? false : true;
          if (v6697) {
            const v15155 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15156 = v15155[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15157 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v15158 = v15157[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v15159 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v15160 = v15159[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v15161 = [v15156, v15158, v15160];
            sim_r.isHalt = false;
          } else {
            const v15142 = v6696 ? false : true;
            const v15144 = v6696 ? false : v15141;
            const v15145 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15146 = v15145[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15147 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v15148 = v15147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v15149 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v15150 = v15149[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v15151 = [v15146, v15148, v15150];
            const v15152 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
            const v15153 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
            const v15154 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
            sim_r.isHalt = false;
          }
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      return;
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      stdlib.assert(v6737, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:190:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
          "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "contract is currently inactive",
        who: "buyer_api_gold"
      });
      const v7876 = stdlib.ge(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:191:41:decimal", stdlib.UInt_max, "1"));
      stdlib.assert(v7876, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:191:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
          "at ./src/contracts/coin_shop.rsh:189:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:38:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "balance insufficient for transaction",
        who: "buyer_api_gold"
      });
      const v8054 = stdlib.add(v6705, v6748);
      const v8055 = stdlib.le(v8054, stdlib.UInt_max);
      stdlib.assert(v8055, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_gold"
      });
      const v8060 = stdlib.le(v6739, stdlib.UInt_max);
      stdlib.assert(v8060, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_gold"
      });
      const v8068 = stdlib.le(v6741, stdlib.UInt_max);
      stdlib.assert(v8068, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_gold"
      });
      const v8076 = stdlib.le(v6743, stdlib.UInt_max);
      stdlib.assert(v8076, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_gold"
      });
      const v8189 = stdlib.sub(v8054, v8054);
      const v8190 = stdlib.ge(v8189, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:198:84:application", stdlib.UInt_max, "0"));
      stdlib.assert(v8190, {
        at: "./src/contracts/coin_shop.rsh:198:84:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "buyer_api_gold"
      });
      const v8219 = stdlib.sub(v6743, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:70:decimal", stdlib.UInt_max, "1"));
      const v8220 = stdlib.ge(v8219, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "0"));
      stdlib.assert(v8220, {
        at: "./src/contracts/coin_shop.rsh:199:76:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "buyer_api_gold"
      });
      const v8223 = stdlib.Array_set(v6742, "0", v8219);
      const v8224 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:199:76:application", stdlib.UInt_max, "2"), v8223);
      const v8225 = "gold  ";
      const v8226 = true;
      const v8227 = await txn1.getOutput("buyer_api_gold", "v8226", ctc4, v8226);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v7845, v8227), {
          at: "./src/contracts/coin_shop.rsh:189:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:189:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:203:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:196:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:43:function exp)"
          ],
          msg: "out",
          who: "buyer_api_gold"
        });
      } else {
      }
      const v15135 = v6695;
      const v15136 = v6696;
      const v15137 = v6697;
      const v15139 = v8224;
      const v15140 = v8189;
      const v15141 = v6697 ? false : true;
      if (v6697) {
        const v15155 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15156 = v15155[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15157 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v15158 = v15157[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v15159 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v15160 = v15159[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v15161 = [v15156, v15158, v15160];
        return;
      } else {
        const v15142 = v6696 ? false : true;
        const v15144 = v6696 ? false : v15141;
        const v15145 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15146 = v15145[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15147 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v15148 = v15147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v15149 = v8224[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v15150 = v15149[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v15151 = [v15146, v15148, v15150];
        const v15152 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v15153 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v15154 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        return;
      }
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      return;
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      return;
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      return;
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      return;
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      return;
      break;
    }
  }
}
async function _buyer_api_silver5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_silver5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _buyer_api_silver5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc7,
    buyer_api_gold0_907: ctc7,
    buyer_api_silver0_907: ctc7,
    controller_api_restock0_907: ctc8,
    controller_api_set_prices0_907: ctc8,
    controller_api_terminate0_907: ctc7,
    controller_api_toggle_pause0_907: ctc7,
    controller_api_withdraw0_907: ctc7
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6764 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_silver0_907" (defined at: ./src/contracts/coin_shop.rsh:169:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "buyer_api_silver"
  });
  stdlib.assert(v6737, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
      "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_silver0_907" (defined at: ./src/contracts/coin_shop.rsh:169:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "contract is currently inactive",
    who: "buyer_api_silver"
  });
  const v6768 = stdlib.ge(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"));
  stdlib.assert(v6768, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
      "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runbuyer_api_silver0_907" (defined at: ./src/contracts/coin_shop.rsh:169:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "balance insufficient for transaction",
    who: "buyer_api_silver"
  });
  const v6773 = ["buyer_api_silver0_907", v6764];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6773
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      v6747,
      [
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:175:59:decimal", stdlib.UInt_max, "0"),
          v6630
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:175:62:decimal", stdlib.UInt_max, "0"),
          v6631
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:175:65:decimal", stdlib.UInt_max, "0"),
          v6632
        ]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "buyer_api_silver"
          });
          const v8668 = stdlib.add(v6705, v6747);
          sim_r.txns.push({
            amt: v6747,
            kind: "to",
            tok: undefined
          });
          const v8879 = stdlib.sub(v8668, v8668);
          sim_r.txns.push({
            kind: "from",
            to: v6654,
            tok: undefined
          });
          const v8909 = stdlib.sub(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:67:decimal", stdlib.UInt_max, "1"));
          const v8913 = stdlib.Array_set(v6740, "0", v8909);
          const v8914 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "1"), v8913);
          sim_r.txns.push({
            kind: "from",
            to: v72272,
            tok: v6631
          });
          const v8915 = "silver";
          const v8916 = true;
          const v8917 = await txn12.getOutput("buyer_api_silver", "v8916", ctc4, v8916);
          const v15585 = v6695;
          const v15586 = v6696;
          const v15587 = v6697;
          const v15589 = v8914;
          const v15590 = v8879;
          const v15591 = v6697 ? false : true;
          if (v6697) {
            const v15605 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15606 = v15605[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15607 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v15608 = v15607[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v15609 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v15610 = v15609[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v15611 = [v15606, v15608, v15610];
            sim_r.isHalt = false;
          } else {
            const v15592 = v6696 ? false : true;
            const v15594 = v6696 ? false : v15591;
            const v15595 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15596 = v15595[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v15597 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v15598 = v15597[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v15599 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v15600 = v15599[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v15601 = [v15596, v15598, v15600];
            const v15602 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
            const v15603 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
            const v15604 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
            sim_r.isHalt = false;
          }
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      return;
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      return;
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      stdlib.assert(v6737, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:33:33:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:170:36:application call to "checkActive" (defined at: ./src/contracts/util/checks.rsh:33:25:function exp)',
          "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "contract is currently inactive",
        who: "buyer_api_silver"
      });
      const v8513 = stdlib.ge(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:171:41:decimal", stdlib.UInt_max, "1"));
      stdlib.assert(v8513, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:29:42:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:171:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:29:34:function exp)',
          "at ./src/contracts/coin_shop.rsh:169:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:40:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "balance insufficient for transaction",
        who: "buyer_api_silver"
      });
      const v8668 = stdlib.add(v6705, v6747);
      const v8669 = stdlib.le(v8668, stdlib.UInt_max);
      stdlib.assert(v8669, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_silver"
      });
      const v8674 = stdlib.le(v6739, stdlib.UInt_max);
      stdlib.assert(v8674, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_silver"
      });
      const v8682 = stdlib.le(v6741, stdlib.UInt_max);
      stdlib.assert(v8682, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_silver"
      });
      const v8690 = stdlib.le(v6743, stdlib.UInt_max);
      stdlib.assert(v8690, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "buyer_api_silver"
      });
      const v8879 = stdlib.sub(v8668, v8668);
      const v8880 = stdlib.ge(v8879, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:178:84:application", stdlib.UInt_max, "0"));
      stdlib.assert(v8880, {
        at: "./src/contracts/coin_shop.rsh:178:84:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "buyer_api_silver"
      });
      const v8909 = stdlib.sub(v6741, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:67:decimal", stdlib.UInt_max, "1"));
      const v8910 = stdlib.ge(v8909, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "0"));
      stdlib.assert(v8910, {
        at: "./src/contracts/coin_shop.rsh:179:76:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "buyer_api_silver"
      });
      const v8913 = stdlib.Array_set(v6740, "0", v8909);
      const v8914 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:179:76:application", stdlib.UInt_max, "1"), v8913);
      const v8915 = "silver";
      const v8916 = true;
      const v8917 = await txn1.getOutput("buyer_api_silver", "v8916", ctc4, v8916);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v8459, v8917), {
          at: "./src/contracts/coin_shop.rsh:169:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:169:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:183:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:176:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:43:function exp)"
          ],
          msg: "out",
          who: "buyer_api_silver"
        });
      } else {
      }
      const v15585 = v6695;
      const v15586 = v6696;
      const v15587 = v6697;
      const v15589 = v8914;
      const v15590 = v8879;
      const v15591 = v6697 ? false : true;
      if (v6697) {
        const v15605 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15606 = v15605[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15607 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v15608 = v15607[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v15609 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v15610 = v15609[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v15611 = [v15606, v15608, v15610];
        return;
      } else {
        const v15592 = v6696 ? false : true;
        const v15594 = v6696 ? false : v15591;
        const v15595 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15596 = v15595[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v15597 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v15598 = v15597[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v15599 = v8914[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v15600 = v15599[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v15601 = [v15596, v15598, v15600];
        const v15602 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v15603 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v15604 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        return;
      }
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      return;
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      return;
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      return;
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      return;
      break;
    }
  }
}
async function _controller_api_restock5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc8,
    buyer_api_gold0_907: ctc8,
    buyer_api_silver0_907: ctc8,
    controller_api_restock0_907: ctc7,
    controller_api_set_prices0_907: ctc7,
    controller_api_terminate0_907: ctc8,
    controller_api_toggle_pause0_907: ctc8,
    controller_api_withdraw0_907: ctc8
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6788 = ctc.selfAddress();
  const v6790 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_restock0_907" (defined at: ./src/contracts/coin_shop.rsh:212:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "controller_api_restock"
  });
  const v6791 = v6790[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "0")];
  const v6792 = v6791[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "0")];
  const v6793 = v6791[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "1")];
  const v6794 = v6791[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:1:23:application", stdlib.UInt_max, "2")];
  const v6796 = stdlib.addressEq(v6788, v6654);
  stdlib.assert(v6796, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
      "at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_restock0_907" (defined at: ./src/contracts/coin_shop.rsh:212:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "action not permitted",
    who: "controller_api_restock"
  });
  const v6806 = ["controller_api_restock0_907", v6790];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6806
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:44:decimal", stdlib.UInt_max, "0"),
      [
        [v6792, v6630],
        [v6793, v6631],
        [v6794, v6632]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "controller_api_restock"
          });
          const v9147 = v9073[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:212:22:spread", stdlib.UInt_max, "0")];
          const v9150 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "0")];
          const v9151 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "1")];
          const v9152 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "2")];
          const v9287 = stdlib.add(v6739, v9150);
          const v9291 = stdlib.Array_set(v6738, "0", v9287);
          const v9292 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"), v9291);
          sim_r.txns.push({
            amt: v9150,
            kind: "to",
            tok: v6630
          });
          const v9293 = v9292[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")];
          const v9294 = v9293[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
          const v9295 = stdlib.add(v9294, v9151);
          const v9299 = stdlib.Array_set(v9293, "0", v9295);
          const v9300 = stdlib.Array_set(v9292, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"), v9299);
          sim_r.txns.push({
            amt: v9151,
            kind: "to",
            tok: v6631
          });
          const v9301 = v9300[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")];
          const v9302 = v9301[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
          const v9303 = stdlib.add(v9302, v9152);
          const v9307 = stdlib.Array_set(v9301, "0", v9303);
          const v9308 = stdlib.Array_set(v9300, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"), v9307);
          sim_r.txns.push({
            amt: v9152,
            kind: "to",
            tok: v6632
          });
          const v9542 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
          const v9543 = v9542[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
          const v9544 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
          const v9545 = v9544[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
          const v9546 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
          const v9547 = v9546[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
          const v9548 = [v9543, v9545, v9547];
          const v9552 = true;
          const v9553 = await txn12.getOutput("controller_api_restock", "v9552", ctc4, v9552);
          const v16035 = v6695;
          const v16036 = v6696;
          const v16037 = v6697;
          const v16039 = v9308;
          const v16040 = v6705;
          const v16041 = v6697 ? false : true;
          if (v6697) {
            sim_r.isHalt = false;
          } else {
            const v16042 = v6696 ? false : true;
            const v16044 = v6696 ? false : v16041;
            const v16052 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
            const v16053 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
            const v16054 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
            sim_r.isHalt = false;
          }
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      return;
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      return;
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      return;
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      const v9147 = v9073[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:212:22:spread", stdlib.UInt_max, "0")];
      const v9148 = stdlib.addressEq(v7227, v6654);
      stdlib.assert(v9148, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:213:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
          "at ./src/contracts/coin_shop.rsh:212:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:50:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "action not permitted",
        who: "controller_api_restock"
      });
      const v9150 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "0")];
      const v9151 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "1")];
      const v9152 = v9147[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:216:47:spread", stdlib.UInt_max, "2")];
      const v9283 = stdlib.le(v6705, stdlib.UInt_max);
      stdlib.assert(v9283, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_restock"
      });
      const v9287 = stdlib.add(v6739, v9150);
      const v9288 = stdlib.le(v9287, stdlib.UInt_max);
      stdlib.assert(v9288, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_restock"
      });
      const v9291 = stdlib.Array_set(v6738, "0", v9287);
      const v9292 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0"), v9291);
      const v9293 = v9292[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1")];
      const v9294 = v9293[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
      const v9295 = stdlib.add(v9294, v9151);
      const v9296 = stdlib.le(v9295, stdlib.UInt_max);
      stdlib.assert(v9296, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_restock"
      });
      const v9299 = stdlib.Array_set(v9293, "0", v9295);
      const v9300 = stdlib.Array_set(v9292, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "1"), v9299);
      const v9301 = v9300[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2")];
      const v9302 = v9301[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "0")];
      const v9303 = stdlib.add(v9302, v9152);
      const v9304 = stdlib.le(v9303, stdlib.UInt_max);
      stdlib.assert(v9304, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_restock"
      });
      const v9307 = stdlib.Array_set(v9301, "0", v9303);
      const v9308 = stdlib.Array_set(v9300, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:118:68:dot", stdlib.UInt_max, "2"), v9307);
      const v9542 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
      const v9543 = v9542[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
      const v9544 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
      const v9545 = v9544[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
      const v9546 = v9308[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
      const v9547 = v9546[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
      const v9548 = [v9543, v9545, v9547];
      const v9552 = true;
      const v9553 = await txn1.getOutput("controller_api_restock", "v9552", ctc4, v9552);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v9073, v9553), {
          at: "./src/contracts/coin_shop.rsh:212:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:212:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:212:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:223:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:217:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:217:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:43:function exp)"
          ],
          msg: "out",
          who: "controller_api_restock"
        });
      } else {
      }
      const v16035 = v6695;
      const v16036 = v6696;
      const v16037 = v6697;
      const v16039 = v9308;
      const v16040 = v6705;
      const v16041 = v6697 ? false : true;
      if (v6697) {
        return;
      } else {
        const v16042 = v6696 ? false : true;
        const v16044 = v6696 ? false : v16041;
        const v16052 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v16053 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v16054 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        return;
      }
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      return;
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      return;
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      return;
      break;
    }
  }
}
async function _controller_api_set_prices5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc8,
    buyer_api_gold0_907: ctc8,
    buyer_api_silver0_907: ctc8,
    controller_api_restock0_907: ctc7,
    controller_api_set_prices0_907: ctc7,
    controller_api_terminate0_907: ctc8,
    controller_api_toggle_pause0_907: ctc8,
    controller_api_withdraw0_907: ctc8
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6808 = ctc.selfAddress();
  const v6810 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_set_prices0_907" (defined at: ./src/contracts/coin_shop.rsh:229:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "controller_api_set_prices"
  });
  const v6816 = stdlib.addressEq(v6808, v6654);
  stdlib.assert(v6816, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
      "at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_set_prices0_907" (defined at: ./src/contracts/coin_shop.rsh:229:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "action not permitted",
    who: "controller_api_set_prices"
  });
  const v6826 = ["controller_api_set_prices0_907", v6810];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6826
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:44:decimal", stdlib.UInt_max, "0"),
      [
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:47:decimal", stdlib.UInt_max, "0"),
          v6630
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:50:decimal", stdlib.UInt_max, "0"),
          v6631
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:233:53:decimal", stdlib.UInt_max, "0"),
          v6632
        ]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "controller_api_set_prices"
          });
          const v10178 = v9687[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:229:22:spread", stdlib.UInt_max, "0")];
          const v10187 = true;
          const v10188 = await txn12.getOutput("controller_api_set_prices", "v10187", ctc4, v10187);
          const v16485 = v10178;
          const v16486 = v6696;
          const v16487 = v6697;
          const v16489 = v6704;
          const v16490 = v6705;
          const v16491 = v6697 ? false : true;
          if (v6697) {
            const v16505 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v16506 = v16505[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v16507 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v16508 = v16507[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v16509 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v16510 = v16509[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v16511 = [v16506, v16508, v16510];
            sim_r.isHalt = false;
          } else {
            const v16492 = v6696 ? false : true;
            const v16494 = v6696 ? false : v16491;
            const v16495 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v16496 = v16495[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v16497 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v16498 = v16497[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v16499 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v16500 = v16499[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v16501 = [v16496, v16498, v16500];
            const v16502 = v10178[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
            const v16503 = v10178[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
            const v16504 = v10178[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
            sim_r.isHalt = false;
          }
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      return;
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      return;
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      return;
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      return;
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      const v9785 = stdlib.addressEq(v7227, v6654);
      stdlib.assert(v9785, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:230:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
          "at ./src/contracts/coin_shop.rsh:229:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:58:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "action not permitted",
        who: "controller_api_set_prices"
      });
      const v9897 = stdlib.le(v6705, stdlib.UInt_max);
      stdlib.assert(v9897, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_set_prices"
      });
      const v9902 = stdlib.le(v6739, stdlib.UInt_max);
      stdlib.assert(v9902, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_set_prices"
      });
      const v9910 = stdlib.le(v6741, stdlib.UInt_max);
      stdlib.assert(v9910, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_set_prices"
      });
      const v9918 = stdlib.le(v6743, stdlib.UInt_max);
      stdlib.assert(v9918, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_set_prices"
      });
      const v10178 = v9687[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:229:22:spread", stdlib.UInt_max, "0")];
      const v10187 = true;
      const v10188 = await txn1.getOutput("controller_api_set_prices", "v10187", ctc4, v10187);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v9687, v10188), {
          at: "./src/contracts/coin_shop.rsh:229:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:229:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:229:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:240:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:234:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:234:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:43:function exp)"
          ],
          msg: "out",
          who: "controller_api_set_prices"
        });
      } else {
      }
      const v16485 = v10178;
      const v16486 = v6696;
      const v16487 = v6697;
      const v16489 = v6704;
      const v16490 = v6705;
      const v16491 = v6697 ? false : true;
      if (v6697) {
        const v16505 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v16506 = v16505[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v16507 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v16508 = v16507[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v16509 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v16510 = v16509[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v16511 = [v16506, v16508, v16510];
        return;
      } else {
        const v16492 = v6696 ? false : true;
        const v16494 = v6696 ? false : v16491;
        const v16495 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v16496 = v16495[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v16497 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v16498 = v16497[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v16499 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v16500 = v16499[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v16501 = [v16496, v16498, v16500];
        const v16502 = v10178[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v16503 = v10178[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v16504 = v10178[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        return;
      }
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      return;
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      return;
      break;
    }
  }
}
async function _controller_api_terminate5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc7,
    buyer_api_gold0_907: ctc7,
    buyer_api_silver0_907: ctc7,
    controller_api_restock0_907: ctc8,
    controller_api_set_prices0_907: ctc8,
    controller_api_terminate0_907: ctc7,
    controller_api_toggle_pause0_907: ctc7,
    controller_api_withdraw0_907: ctc7
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6848 = ctc.selfAddress();
  const v6850 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_terminate0_907" (defined at: ./src/contracts/coin_shop.rsh:286:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "controller_api_terminate"
  });
  const v6851 = stdlib.addressEq(v6848, v6654);
  stdlib.assert(v6851, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
      "at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_terminate0_907" (defined at: ./src/contracts/coin_shop.rsh:286:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "action not permitted",
    who: "controller_api_terminate"
  });
  const v6856 = ["controller_api_terminate0_907", v6850];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6856
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:44:decimal", stdlib.UInt_max, "0"),
      [
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:47:decimal", stdlib.UInt_max, "0"),
          v6630
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:50:decimal", stdlib.UInt_max, "0"),
          v6631
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:290:53:decimal", stdlib.UInt_max, "0"),
          v6632
        ]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "controller_api_terminate"
          });
          const v10817 = true;
          const v10818 = true;
          const v10819 = await txn12.getOutput("controller_api_terminate", "v10818", ctc4, v10818);
          const v16935 = v6695;
          const v16936 = v6696;
          const v16939 = v6704;
          const v16940 = v6705;
          const v16955 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
          const v16956 = v16955[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
          const v16957 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
          const v16958 = v16957[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
          const v16959 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
          const v16960 = v16959[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
          const v16961 = [v16956, v16958, v16960];
          sim_r.isHalt = false;
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      return;
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      return;
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      return;
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      return;
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      return;
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      const v10418 = stdlib.addressEq(v7227, v6654);
      stdlib.assert(v10418, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:287:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
          "at ./src/contracts/coin_shop.rsh:286:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:48:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "action not permitted",
        who: "controller_api_terminate"
      });
      const v10511 = stdlib.le(v6705, stdlib.UInt_max);
      stdlib.assert(v10511, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_terminate"
      });
      const v10516 = stdlib.le(v6739, stdlib.UInt_max);
      stdlib.assert(v10516, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_terminate"
      });
      const v10524 = stdlib.le(v6741, stdlib.UInt_max);
      stdlib.assert(v10524, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_terminate"
      });
      const v10532 = stdlib.le(v6743, stdlib.UInt_max);
      stdlib.assert(v10532, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_terminate"
      });
      const v10817 = true;
      const v10818 = true;
      const v10819 = await txn1.getOutput("controller_api_terminate", "v10818", ctc4, v10818);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v10301, v10819), {
          at: "./src/contracts/coin_shop.rsh:286:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:286:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:286:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:296:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:291:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:291:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:43:function exp)"
          ],
          msg: "out",
          who: "controller_api_terminate"
        });
      } else {
      }
      const v16935 = v6695;
      const v16936 = v6696;
      const v16939 = v6704;
      const v16940 = v6705;
      const v16955 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
      const v16956 = v16955[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
      const v16957 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
      const v16958 = v16957[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
      const v16959 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
      const v16960 = v16959[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
      const v16961 = [v16956, v16958, v16960];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      return;
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      return;
      break;
    }
  }
}
async function _controller_api_toggle_pause5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc7,
    buyer_api_gold0_907: ctc7,
    buyer_api_silver0_907: ctc7,
    controller_api_restock0_907: ctc8,
    controller_api_set_prices0_907: ctc8,
    controller_api_terminate0_907: ctc7,
    controller_api_toggle_pause0_907: ctc7,
    controller_api_withdraw0_907: ctc7
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6828 = ctc.selfAddress();
  const v6830 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_toggle_pause0_907" (defined at: ./src/contracts/coin_shop.rsh:246:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "controller_api_toggle_pause"
  });
  const v6831 = stdlib.addressEq(v6828, v6654);
  stdlib.assert(v6831, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
      "at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_toggle_pause0_907" (defined at: ./src/contracts/coin_shop.rsh:246:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "action not permitted",
    who: "controller_api_toggle_pause"
  });
  const v6836 = ["controller_api_toggle_pause0_907", v6830];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6836
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:44:decimal", stdlib.UInt_max, "0"),
      [
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:47:decimal", stdlib.UInt_max, "0"),
          v6630
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:50:decimal", stdlib.UInt_max, "0"),
          v6631
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:250:53:decimal", stdlib.UInt_max, "0"),
          v6632
        ]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "controller_api_toggle_pause"
          });
          const v11447 = await txn12.getOutput("controller_api_toggle_pause", "v6735", ctc4, v6735);
          const v17385 = v6695;
          const v17386 = v6735;
          const v17387 = v6697;
          const v17389 = v6704;
          const v17390 = v6705;
          const v17391 = v6697 ? false : true;
          if (v6697) {
            const v17405 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17406 = v17405[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17407 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v17408 = v17407[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v17409 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v17410 = v17409[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v17411 = [v17406, v17408, v17410];
            sim_r.isHalt = false;
          } else {
            const v17392 = v6735 ? false : true;
            const v17394 = v6735 ? false : v17391;
            const v17395 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17396 = v17395[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17397 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v17398 = v17397[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v17399 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v17400 = v17399[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v17401 = [v17396, v17398, v17400];
            const v17402 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
            const v17403 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
            const v17404 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
            sim_r.isHalt = false;
          }
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      return;
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      return;
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      return;
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      return;
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      return;
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      const v11051 = stdlib.addressEq(v7227, v6654);
      stdlib.assert(v11051, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:247:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
          "at ./src/contracts/coin_shop.rsh:246:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:51:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "action not permitted",
        who: "controller_api_toggle_pause"
      });
      const v11125 = stdlib.le(v6705, stdlib.UInt_max);
      stdlib.assert(v11125, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_toggle_pause"
      });
      const v11130 = stdlib.le(v6739, stdlib.UInt_max);
      stdlib.assert(v11130, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_toggle_pause"
      });
      const v11138 = stdlib.le(v6741, stdlib.UInt_max);
      stdlib.assert(v11138, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_toggle_pause"
      });
      const v11146 = stdlib.le(v6743, stdlib.UInt_max);
      stdlib.assert(v11146, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_toggle_pause"
      });
      const v11447 = await txn1.getOutput("controller_api_toggle_pause", "v6735", ctc4, v6735);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v10915, v11447), {
          at: "./src/contracts/coin_shop.rsh:246:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:246:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:246:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:259:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:251:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:251:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:43:function exp)"
          ],
          msg: "out",
          who: "controller_api_toggle_pause"
        });
      } else {
      }
      const v17385 = v6695;
      const v17386 = v6735;
      const v17387 = v6697;
      const v17389 = v6704;
      const v17390 = v6705;
      const v17391 = v6697 ? false : true;
      if (v6697) {
        const v17405 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17406 = v17405[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17407 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v17408 = v17407[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v17409 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v17410 = v17409[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v17411 = [v17406, v17408, v17410];
        return;
      } else {
        const v17392 = v6735 ? false : true;
        const v17394 = v6735 ? false : v17391;
        const v17395 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17396 = v17395[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17397 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v17398 = v17397[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v17399 = v6704[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v17400 = v17399[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v17401 = [v17396, v17398, v17400];
        const v17402 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v17403 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v17404 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        return;
      }
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      return;
      break;
    }
  }
}
async function _controller_api_withdraw5(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_withdraw5 expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for _controller_api_withdraw5 expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_bronze0_907: ctc7,
    buyer_api_gold0_907: ctc7,
    buyer_api_silver0_907: ctc7,
    controller_api_restock0_907: ctc8,
    controller_api_set_prices0_907: ctc8,
    controller_api_terminate0_907: ctc7,
    controller_api_toggle_pause0_907: ctc7,
    controller_api_withdraw0_907: ctc7
  });
  const ctc10 = stdlib.T_Null;
  const [
    v6629,
    v6630,
    v6631,
    v6632,
    v6654,
    v6695,
    v6696,
    v6697,
    v6704,
    v6705,
    v6735,
    v6737,
    v6738,
    v6739,
    v6740,
    v6741,
    v6742,
    v6743,
    v6744,
    v6746,
    v6747,
    v6748
  ] = await ctc.getState(stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5"), [
    ctc0,
    ctc1,
    ctc1,
    ctc1,
    ctc0,
    ctc3,
    ctc4,
    ctc4,
    ctc6,
    ctc2,
    ctc4,
    ctc4,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc5,
    ctc2,
    ctc3,
    ctc2,
    ctc2,
    ctc2
  ]);
  const v6838 = ctc.selfAddress();
  const v6840 = stdlib.protect(ctc7, await interact.in(), {
    at: "./src/contracts/coin_shop.rsh:1:23:application",
    fs: [
      "at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_withdraw0_907" (defined at: ./src/contracts/coin_shop.rsh:266:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "in",
    who: "controller_api_withdraw"
  });
  const v6841 = stdlib.addressEq(v6838, v6654);
  stdlib.assert(v6841, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
      "at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
      'at ./src/contracts/coin_shop.rsh:118:68:application call to "runcontroller_api_withdraw0_907" (defined at: ./src/contracts/coin_shop.rsh:266:22:function exp)',
      "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)"
    ],
    msg: "action not permitted",
    who: "controller_api_withdraw"
  });
  const v6846 = ["controller_api_withdraw0_907", v6840];
  const txn1 = await ctc.sendrecv({
    args: [
      v6629,
      v6630,
      v6631,
      v6632,
      v6654,
      v6695,
      v6696,
      v6697,
      v6704,
      v6705,
      v6735,
      v6737,
      v6738,
      v6739,
      v6740,
      v6741,
      v6742,
      v6743,
      v6744,
      v6746,
      v6747,
      v6748,
      v6846
    ],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:44:decimal", stdlib.UInt_max, "0"),
      [
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:47:decimal", stdlib.UInt_max, "0"),
          v6630
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:50:decimal", stdlib.UInt_max, "0"),
          v6631
        ],
        [
          stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:270:53:decimal", stdlib.UInt_max, "0"),
          v6632
        ]
      ]
    ],
    sim_p: async (txn12) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };
      const {
        data: [v72282],
        secs: v72302,
        time: v72292,
        didSend: v54062,
        from: v72272
      } = txn12;
      switch (v72282[0]) {
        case "buyer_api_bronze0_907": {
          const v7231 = v72282[1];
          break;
        }
        case "buyer_api_gold0_907": {
          const v7845 = v72282[1];
          break;
        }
        case "buyer_api_silver0_907": {
          const v8459 = v72282[1];
          break;
        }
        case "controller_api_restock0_907": {
          const v9073 = v72282[1];
          break;
        }
        case "controller_api_set_prices0_907": {
          const v9687 = v72282[1];
          break;
        }
        case "controller_api_terminate0_907": {
          const v10301 = v72282[1];
          break;
        }
        case "controller_api_toggle_pause0_907": {
          const v10915 = v72282[1];
          break;
        }
        case "controller_api_withdraw0_907": {
          const v11529 = v72282[1];
          sim_r.txns.push({
            kind: "api",
            who: "controller_api_withdraw"
          });
          const v12107 = stdlib.sub(v6739, v6739);
          const v12111 = stdlib.Array_set(v6738, "0", v12107);
          const v12112 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"), v12111);
          sim_r.txns.push({
            kind: "from",
            to: v6654,
            tok: v6630
          });
          const v12113 = v12112[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1")];
          const v12114 = v12113[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
          const v12118 = stdlib.sub(v12114, v6741);
          const v12122 = stdlib.Array_set(v12113, "0", v12118);
          const v12123 = stdlib.Array_set(v12112, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1"), v12122);
          sim_r.txns.push({
            kind: "from",
            to: v6654,
            tok: v6631
          });
          const v12124 = v12123[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2")];
          const v12125 = v12124[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
          const v12129 = stdlib.sub(v12125, v6743);
          const v12133 = stdlib.Array_set(v12124, "0", v12129);
          const v12134 = stdlib.Array_set(v12123, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2"), v12133);
          sim_r.txns.push({
            kind: "from",
            to: v6654,
            tok: v6632
          });
          const v12136 = true;
          const v12137 = await txn12.getOutput("controller_api_withdraw", "v12136", ctc4, v12136);
          const v17835 = v6695;
          const v17836 = v6696;
          const v17837 = v6697;
          const v17839 = v12134;
          const v17840 = v6705;
          const v17841 = v6697 ? false : true;
          if (v6697) {
            const v17855 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17856 = v17855[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17857 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v17858 = v17857[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v17859 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v17860 = v17859[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v17861 = [v17856, v17858, v17860];
            sim_r.isHalt = false;
          } else {
            const v17842 = v6696 ? false : true;
            const v17844 = v6696 ? false : v17841;
            const v17845 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17846 = v17845[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
            const v17847 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
            const v17848 = v17847[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
            const v17849 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
            const v17850 = v17849[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
            const v17851 = [v17846, v17848, v17850];
            const v17852 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
            const v17853 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
            const v17854 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
            sim_r.isHalt = false;
          }
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined,
    tys: [
      ctc0,
      ctc1,
      ctc1,
      ctc1,
      ctc0,
      ctc3,
      ctc4,
      ctc4,
      ctc6,
      ctc2,
      ctc4,
      ctc4,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc5,
      ctc2,
      ctc3,
      ctc2,
      ctc2,
      ctc2,
      ctc9
    ],
    waitIfNotPresent: false
  });
  const {
    data: [v7228],
    secs: v7230,
    time: v7229,
    didSend: v5406,
    from: v7227
  } = txn1;
  switch (v7228[0]) {
    case "buyer_api_bronze0_907": {
      const v7231 = v7228[1];
      return;
      break;
    }
    case "buyer_api_gold0_907": {
      const v7845 = v7228[1];
      return;
      break;
    }
    case "buyer_api_silver0_907": {
      const v8459 = v7228[1];
      return;
      break;
    }
    case "controller_api_restock0_907": {
      const v9073 = v7228[1];
      return;
      break;
    }
    case "controller_api_set_prices0_907": {
      const v9687 = v7228[1];
      return;
      break;
    }
    case "controller_api_terminate0_907": {
      const v10301 = v7228[1];
      return;
      break;
    }
    case "controller_api_toggle_pause0_907": {
      const v10915 = v7228[1];
      return;
      break;
    }
    case "controller_api_withdraw0_907": {
      const v11529 = v7228[1];
      const v11684 = stdlib.addressEq(v7227, v6654);
      stdlib.assert(v11684, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./src/contracts/util/checks.rsh:32:37:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./src/contracts/coin_shop.rsh:267:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:32:29:function exp)',
          "at ./src/contracts/coin_shop.rsh:266:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:47:function exp)",
          "at ./src/contracts/coin_shop.rsh:118:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:68:function exp)",
          "at ./src/contracts/coin_shop.rsh:125:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:125:26:function exp)"
        ],
        msg: "action not permitted",
        who: "controller_api_withdraw"
      });
      const v11739 = stdlib.le(v6705, stdlib.UInt_max);
      stdlib.assert(v11739, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_withdraw"
      });
      const v11744 = stdlib.le(v6739, stdlib.UInt_max);
      stdlib.assert(v11744, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_withdraw"
      });
      const v11752 = stdlib.le(v6741, stdlib.UInt_max);
      stdlib.assert(v11752, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_withdraw"
      });
      const v11760 = stdlib.le(v6743, stdlib.UInt_max);
      stdlib.assert(v11760, {
        at: "./src/contracts/coin_shop.rsh:118:68:dot",
        fs: [],
        msg: "assume <= UInt.max",
        who: "controller_api_withdraw"
      });
      const v12107 = stdlib.sub(v6739, v6739);
      const v12108 = stdlib.ge(v12107, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
      stdlib.assert(v12108, {
        at: "./src/contracts/coin_shop.rsh:276:76:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "controller_api_withdraw"
      });
      const v12111 = stdlib.Array_set(v6738, "0", v12107);
      const v12112 = stdlib.Array_set(v6704, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"), v12111);
      const v12113 = v12112[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1")];
      const v12114 = v12113[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
      const v12118 = stdlib.sub(v12114, v6741);
      const v12119 = stdlib.ge(v12118, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
      stdlib.assert(v12119, {
        at: "./src/contracts/coin_shop.rsh:276:76:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "controller_api_withdraw"
      });
      const v12122 = stdlib.Array_set(v12113, "0", v12118);
      const v12123 = stdlib.Array_set(v12112, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "1"), v12122);
      const v12124 = v12123[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2")];
      const v12125 = v12124[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0")];
      const v12129 = stdlib.sub(v12125, v6743);
      const v12130 = stdlib.ge(v12129, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "0"));
      stdlib.assert(v12130, {
        at: "./src/contracts/coin_shop.rsh:276:76:application",
        fs: [
          "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
        ],
        msg: "assume >= 0",
        who: "controller_api_withdraw"
      });
      const v12133 = stdlib.Array_set(v12124, "0", v12129);
      const v12134 = stdlib.Array_set(v12123, stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:276:76:application", stdlib.UInt_max, "2"), v12133);
      const v12136 = true;
      const v12137 = await txn1.getOutput("controller_api_withdraw", "v12136", ctc4, v12136);
      if (v5406) {
        stdlib.protect(ctc10, await interact.out(v11529, v12137), {
          at: "./src/contracts/coin_shop.rsh:266:23:application",
          fs: [
            "at ./src/contracts/coin_shop.rsh:266:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:266:23:function exp)",
            'at ./src/contracts/coin_shop.rsh:280:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)',
            "at ./src/contracts/coin_shop.rsh:271:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:43:function exp)"
          ],
          msg: "out",
          who: "controller_api_withdraw"
        });
      } else {
      }
      const v17835 = v6695;
      const v17836 = v6696;
      const v17837 = v6697;
      const v17839 = v12134;
      const v17840 = v6705;
      const v17841 = v6697 ? false : true;
      if (v6697) {
        const v17855 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17856 = v17855[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17857 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v17858 = v17857[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v17859 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v17860 = v17859[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v17861 = [v17856, v17858, v17860];
        return;
      } else {
        const v17842 = v6696 ? false : true;
        const v17844 = v6696 ? false : v17841;
        const v17845 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17846 = v17845[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:53:application", stdlib.UInt_max, "0")];
        const v17847 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "1")];
        const v17848 = v17847[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:70:application", stdlib.UInt_max, "0")];
        const v17849 = v12134[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "2")];
        const v17850 = v17849[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:131:87:application", stdlib.UInt_max, "0")];
        const v17851 = [v17846, v17848, v17850];
        const v17852 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "0")];
        const v17853 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "1")];
        const v17854 = v6695[stdlib.checkedBigNumberify("./src/contracts/coin_shop.rsh:144:45:application", stdlib.UInt_max, "2")];
        return;
      }
      break;
    }
  }
}
async function buyer_api_bronze(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_bronze expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for buyer_api_bronze expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _buyer_api_bronze5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
async function buyer_api_gold(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_gold expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for buyer_api_gold expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _buyer_api_gold5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
async function buyer_api_silver(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_silver expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for buyer_api_silver expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _buyer_api_silver5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
async function controller_api_restock(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_restock expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for controller_api_restock expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _controller_api_restock5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
async function controller_api_set_prices(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _controller_api_set_prices5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
async function controller_api_terminate(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _controller_api_terminate5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
async function controller_api_toggle_pause(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _controller_api_toggle_pause5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
async function controller_api_withdraw(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_withdraw expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== "object") {
    return Promise.reject(new Error(`The backend for controller_api_withdraw expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _controller_api_withdraw5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError({ _stateSourceMap: _stateSourceMap2 }, [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "5")], stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step));
}
var _version2 = "0.1.13";
var _versionHash2 = "0.1.13 (88e48902)";
var _backendVersion2 = 27;
var _ALGO2 = {
  ABI: {
    impure: [
      `_reachp_0((uint64,uint64,uint64,uint64))void`,
      `_reachp_1((uint64))void`,
      `_reachp_3((uint64))void`,
      `_reachp_4((uint64,(byte,byte[24])))void`,
      `buyer_api_bronze()byte`,
      `buyer_api_gold()byte`,
      `buyer_api_silver()byte`,
      `controller_api_restock(uint64[3])byte`,
      `controller_api_set_prices(uint64[3])byte`,
      `controller_api_terminate()byte`,
      `controller_api_toggle_pause()byte`,
      `controller_api_withdraw()byte`
    ],
    pure: [`coin_prices()uint64[3]`, `coin_supply()uint64[3]`, `is_paused()byte`],
    sigs: [
      `_reachp_0((uint64,uint64,uint64,uint64))void`,
      `_reachp_1((uint64))void`,
      `_reachp_3((uint64))void`,
      `_reachp_4((uint64,(byte,byte[24])))void`,
      `buyer_api_bronze()byte`,
      `buyer_api_gold()byte`,
      `buyer_api_silver()byte`,
      `coin_prices()uint64[3]`,
      `coin_supply()uint64[3]`,
      `controller_api_restock(uint64[3])byte`,
      `controller_api_set_prices(uint64[3])byte`,
      `controller_api_terminate()byte`,
      `controller_api_toggle_pause()byte`,
      `controller_api_withdraw()byte`,
      `is_paused()byte`
    ]
  },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAP///////////wEBCAUDoI0GECAoMAQmBQTDuqqJAAEAAQEBAjEYQQksKWRJIls1ASVbNQIqZCtkUCcEZFCCDwQDr6M8BAodJkkEFCCDHwQtCJTsBD4NOmkERlzXZgRHkTeUBIc8/loEkmDfpgSiYbQABLLIIusEtsF5+QTPUtSzBN/ZIygE6Ca18jYaAI4PCHcIkgjxCNII6wjuCOgI2AjJCNUIzAidCM8IhwjgADQYRDQWJA9ENBo0EAhJNQsjDkQ0EIgLDDQWIw5ENBQjDkQ0EiMORDQLSQlJNQwiD0Q0CzQgiAnyNBYkCUk1CyIPRCQ0IzEAiAncgAZicm9uemU1DSg0DVAxAFCwJDUNgAgAAAAAAAAdcDQNFlEHCFCwNA0WUQcINQQyBjQbNBc0CxZcAFwANAw1GjUbNRw0HUEIeDQbVwARSTUQIls1DzQbVxERIls1DjQbVyIRIls1DTQPFjQOFlA0DRZQNQw0JDQjFlA0IhZQNCEWUDQgUDQfUDQeFlEHCFA0G1A0GhZQNBBQNA8WUDQOFlA0DRZQNAxQgT2vUCEFMgY1AjUBKksBVwB/ZytLAVd/f2cnBExX/ixnKTQBFjQCFlBnMRkiEkSICks0A0AACoAEFR98dTQEULAkQzQYRDQSJA9ENBo0DghJNQsjDkQ0DogJ1zQWIw5ENBQjDkQ0EiMORDQLSQlJNQwiD0Q0CzQgiAi9NBIkCUk1CyIPRCQ0ITEAiAingAZnb2xkAAA1DSg0DVAxAFCwJDUNgAgAAAAAAAAgIjQNFlEHCFCwNA0WUQcINQQyBjQbNBM0CxZcAFwiNAw1GjUbNRxC/sg0GEQ0FCQPRDQaNA8ISTULIw5ENA+ICUY0FiMORDQUIw5ENBIjDkQ0C0kJSTUMIg9ENAs0IIgILDQUJAlJNQsiD0QkNCIxAIgIFoAGc2lsdmVyNQ0oNA1QMQBQsCQ1DYAIAAAAAAAAItQ0DRZRBwhQsDQNFlEHCDUEMgY0GzQVNAsWXABcETQMNRo1GzUcQv43NA1XARg1CzEANCASRDQLIls1DjQLJVs1DTQLIQdbNQw0GiMORDQWNA4ISTULIw5ENBs0FzQLFlwAXAA1DzQONCOICKs0D1cREUk1ECJbNA0ISTUOIw5ENA80EDQOFlwAXBE1CzQNNCKICIQ0C1ciEUk1DyJbNAwISTUOIw5ENAs0DzQOFlwAXCI1DTQMNCGICF00DVcAEVcACDQNVxERVwAIUDQNVyIRVwAIUDULgARjZN7vNAtQsCQ1C4AIAAAAAAAAJVA0CxZRBwhQsDQLFlEHCDUEMgY0DTUbNRxC/VcxADQgEkQ0GiMORDQWIw5ENBQjDkQ0EiMORDQNVwEYNQuABJdTHbc0C1CwJDUMgAgAAAAAAAAnyzQMFlEHCFCwNAwWUQcINQQ0CzIGNRw1H0L9BDEANCASRDQaIw5ENBYjDkQ0FCMORDQSIw5EJDULgAQuET1vNAsWUQcIULAkNQuACAAAAAAAACpCNAsWUQcIULA0CxZRBwg1BCQyBjUcNR1C/LIxADQgEkQ0GiMORDQWIw5ENBQjDkQ0EiMORIAIAAAAAAAAGk80GRZRBwhQsDQZFlEHCDUENBkyBjUcNR5C/HMxADQgEkQ0GiMORDQWIw5ENBQjDkQ0EiMORDQWSQlJNQwiD0Q0GzQXNAwWXABcADULNBY0IzQgiAXRNAtXERFJNQ4iWzQUCUk1DSIPRDQLNA40DRZcAFwRNQw0FDQiNCCIBag0DFciEUk1DSJbNBIJSTULIg9ENBI0ITQgiAWMgAQbFchaNBFQsCQ1DoAIAAAAAAAAL2g0DhZRBwhQsDQOFlEHCDUEMgY0DDQNNAsWXABcIjUbNRxC+7mBIa81CyEENAESRIgFWTQLIls1DDQLVwgZNQ2ABCpttVo0DBZQNA1QsDQMiAUvNA0iVY0IA9oD3QPgA+MD5gPpA+wD70L644AhAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/5aAIQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9uNAEhBAxBBGU0ASEFEkSIBU40HzUEMRkiEkRC+6A0ASEEDEEEWDQBIQUSRIgFMTQMNQRC/+Alr4ABAzQLUFA1C0L/KyWvgAEENAtQUDULQv8dgCEAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+9YAhAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/s2AIQAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv6lNAEhBAxBA7w0ASEFEkSIBIU0HhZRBwg1BEL/MDEANSQ0CyJbNQw0CyVbNSM0CyEHWzUiNAuBGFs1IYAE9u2r0jQMFlA0IxZQNCIWUDQhFlCwNAyIA6eBEa9JNQxJUDQMUEk1C0lXABElr1wAXABJNQxJVxERJa9cAFwRNQs0IjQjE0Q0C0lXIhElr1wAXCI1DTQhNCMSNQw0ITQiEzULNAwUNAsQRCEGiARgIjQjMgqIAz4hBogEUyI0IjIKiAMxIQaIBEYiNCEyCogDJDQkNSA0IzQiE0Q0IzQhE0Q0IjQhE0Q0DBRENAtENCQ0IxZQNCIWUDQhFlA0DVA0IFCBnwGvUCQyBkL5vCQ0ARJESVcAIDUkSSEIWzUjSSEJWzUiSSEKWzUhSVc4MzUNV2sgNSA0Cxc1DIAE1RUZFDQMFlCwNAyIArc0JDEAEkSAGAAAAAAAmJaAAAAAAAExLQAAAAAAAcnDgCIiMgY0DSI1GjUbNRw1HTUeNR9C+N0hBTQBEkSIAxE0Cxc1DIAE1Axs1jQMFlCwNAyIAmM0IDEAEjQkMQASEUQ0GkkJIg9ENBo0IIgCQTQPSQlJNQwiD0Q0GzQQNAwWXABcADULNA80IzQgiAIdNAtXERFJNQ8iWzQOCUk1DCIPRDQONCI0IIgCATQLNA80DBZcAFwRVyIRIls0DQkiD0Q0DTQhNCCIAeIiNCEyCjIJiAMbIjQiMgoyCYgDESI0IzIKMgmIAwcxGSEEEkSIAwQiMgoyCYgDCEL4rogBtSEGiALCNhoBNQtC/cuIAaU2GgE1C0L+rYgBmjYaATULQv8ViAGPNhoBNQtC/DMiMTQSRCELMTUSRCIxNhJEIjE3EkSIAW+BqgKvIiJC+DJC/ApC/E5C/HNC/JhC/LI2GgE1C0L8wjYaATULQvzIQvzTQvz4Qv0dQv1CQvcKQvg8QvjKQvlYQvo1QvqFQvrUQvsQNB4UNRk0HhQ1GDQbVwARSTUXIls1FjQbVxERSTUVIls1FDQbVyIRSTUTIls1EjQWFjQUFlA0EhZQNRE0HyJbNRA0HyVbNQ80HyEHWzUOIjUdNCQ0IxZQNCIWUDQhFlA0IFA0H1A0HhZRBwhQNB0WUQcIUDQbUDQaFlA0GRZRBwhQNBgWUQcIUDQXUDQWFlA0FVA0FBZQNBNQNBIWUDQRUDQQFlA0DxZQNA4WUCEEMgZC9zwisgEkshCyB7IIs4kisgEhC7IQshSyEbISs4k0ASEEEkSIAFo0HzUEQvuYNAEhBBJEiABKNBE1BEL7iDQBIQQSRIgAOjQeFlEHCDUEQvt0SIlMCUk1BjIJiAARiQlJQf/uSTUGiAD/ibFC/6CxQv+QJDUDiUkiEkw0AhIRRIlJVwAgNSRJIQhbNSNJIQlbNSJJIQpbNSFJVzggNSBJV1gYNR9JV3ABFzUeSVdxARc1HUlXcjM1G0mBpQFbNRpJV60BFzUZSVeuARc1GElXrxE1F0mBwAFbNRZJV8gRNRVJgdkBWzUUSVfhETUTSYHyAVs1EklX+hg1EUmBkgJbNRBJgZoCWzUPgaICWzUOiUlXACA1JEkhCFs1I0khCVs1IkkhCls1IUlXOCA1IElXWBg1H0lXcAEXNR5JV3EzNRtJgaQBWzUaSVesETUQSYG9AVs1D0mBxQFbNQ5Jgc0BWzUNV9UYNQyJMRY0ACQISTUACUcCOAcyChJEOBAkEkQ4CBJEiTQGCDUGiTEWNAAkCEk1AAlHAzgUMgoSRDgQIQsSRDgRTwISRDgSEkSJsbIVQv5bNAY0B0oPQf6XQv6fsbIJQv49`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `641`,
    1001: `643`,
    1002: `643`,
    1003: `644`,
    1004: `644`,
    1005: `645`,
    1006: `646`,
    1007: `655`,
    1008: `655`,
    1009: `656`,
    101: `24`,
    1010: `657`,
    1011: `658`,
    1012: `661`,
    1013: `661`,
    1014: `662`,
    1015: `663`,
    1016: `664`,
    1017: `667`,
    1018: `667`,
    1019: `668`,
    102: `24`,
    1020: `669`,
    1021: `670`,
    1022: `673`,
    1023: `673`,
    1024: `674`,
    1025: `675`,
    1026: `676`,
    1027: `679`,
    1028: `679`,
    1029: `680`,
    103: `24`,
    1030: `680`,
    1031: `680`,
    1032: `681`,
    1033: `681`,
    1034: `682`,
    1035: `682`,
    1036: `682`,
    1037: `682`,
    1038: `682`,
    1039: `682`,
    104: `24`,
    1040: `683`,
    1041: `683`,
    1042: `684`,
    1043: `685`,
    1044: `687`,
    1045: `688`,
    1046: `688`,
    1047: `689`,
    1048: `689`,
    1049: `689`,
    105: `24`,
    1050: `689`,
    1051: `689`,
    1052: `689`,
    1053: `689`,
    1054: `689`,
    1055: `689`,
    1056: `689`,
    1057: `690`,
    1058: `690`,
    1059: `691`,
    106: `24`,
    1060: `692`,
    1061: `692`,
    1062: `692`,
    1063: `693`,
    1064: `694`,
    1065: `695`,
    1066: `695`,
    1067: `696`,
    1068: `697`,
    1069: `697`,
    107: `24`,
    1070: `697`,
    1071: `698`,
    1072: `698`,
    1073: `699`,
    1074: `699`,
    1075: `700`,
    1076: `700`,
    1077: `701`,
    1078: `701`,
    1079: `702`,
    108: `24`,
    1080: `702`,
    1081: `703`,
    1082: `703`,
    1083: `703`,
    1084: `705`,
    1085: `705`,
    1086: `706`,
    1087: `706`,
    1088: `707`,
    1089: `708`,
    109: `24`,
    1090: `717`,
    1091: `717`,
    1092: `718`,
    1093: `719`,
    1094: `720`,
    1095: `723`,
    1096: `723`,
    1097: `724`,
    1098: `725`,
    1099: `726`,
    11: `2`,
    110: `24`,
    1100: `729`,
    1101: `729`,
    1102: `730`,
    1103: `731`,
    1104: `732`,
    1105: `735`,
    1106: `735`,
    1107: `736`,
    1108: `737`,
    1109: `738`,
    111: `24`,
    1110: `741`,
    1111: `742`,
    1112: `742`,
    1113: `743`,
    1114: `743`,
    1115: `743`,
    1116: `743`,
    1117: `743`,
    1118: `743`,
    1119: `744`,
    112: `24`,
    1120: `744`,
    1121: `745`,
    1122: `746`,
    1123: `746`,
    1124: `746`,
    1125: `747`,
    1126: `748`,
    1127: `750`,
    1128: `751`,
    1129: `751`,
    113: `24`,
    1130: `752`,
    1131: `752`,
    1132: `752`,
    1133: `752`,
    1134: `752`,
    1135: `752`,
    1136: `752`,
    1137: `752`,
    1138: `752`,
    1139: `752`,
    114: `24`,
    1140: `753`,
    1141: `753`,
    1142: `754`,
    1143: `755`,
    1144: `755`,
    1145: `755`,
    1146: `756`,
    1147: `757`,
    1148: `758`,
    1149: `758`,
    115: `24`,
    1150: `759`,
    1151: `760`,
    1152: `760`,
    1153: `760`,
    1154: `761`,
    1155: `761`,
    1156: `762`,
    1157: `763`,
    1158: `763`,
    1159: `764`,
    116: `24`,
    1160: `764`,
    1161: `765`,
    1162: `765`,
    1163: `766`,
    1164: `766`,
    1165: `766`,
    1166: `768`,
    1167: `768`,
    1168: `769`,
    1169: `769`,
    117: `24`,
    1170: `770`,
    1171: `771`,
    1172: `780`,
    1173: `780`,
    1174: `781`,
    1175: `782`,
    1176: `783`,
    1177: `786`,
    1178: `786`,
    1179: `787`,
    118: `24`,
    1180: `788`,
    1181: `789`,
    1182: `792`,
    1183: `792`,
    1184: `793`,
    1185: `794`,
    1186: `795`,
    1187: `798`,
    1188: `798`,
    1189: `799`,
    119: `24`,
    1190: `800`,
    1191: `801`,
    1192: `804`,
    1193: `804`,
    1194: `804`,
    1195: `804`,
    1196: `804`,
    1197: `804`,
    1198: `804`,
    1199: `804`,
    12: `2`,
    120: `24`,
    1200: `804`,
    1201: `804`,
    1202: `805`,
    1203: `805`,
    1204: `806`,
    1205: `807`,
    1206: `807`,
    1207: `807`,
    1208: `808`,
    1209: `809`,
    121: `24`,
    1210: `810`,
    1211: `810`,
    1212: `811`,
    1213: `812`,
    1214: `812`,
    1215: `812`,
    1216: `813`,
    1217: `813`,
    1218: `814`,
    1219: `814`,
    122: `24`,
    1220: `815`,
    1221: `815`,
    1222: `816`,
    1223: `816`,
    1224: `817`,
    1225: `817`,
    1226: `818`,
    1227: `818`,
    1228: `818`,
    1229: `820`,
    123: `24`,
    1230: `820`,
    1231: `821`,
    1232: `821`,
    1233: `822`,
    1234: `823`,
    1235: `832`,
    1236: `832`,
    1237: `833`,
    1238: `834`,
    1239: `835`,
    124: `24`,
    1240: `838`,
    1241: `838`,
    1242: `839`,
    1243: `840`,
    1244: `841`,
    1245: `844`,
    1246: `844`,
    1247: `845`,
    1248: `846`,
    1249: `847`,
    125: `24`,
    1250: `850`,
    1251: `850`,
    1252: `851`,
    1253: `852`,
    1254: `853`,
    1255: `856`,
    1256: `856`,
    1257: `857`,
    1258: `858`,
    1259: `859`,
    126: `24`,
    1260: `860`,
    1261: `860`,
    1262: `861`,
    1263: `862`,
    1264: `863`,
    1265: `867`,
    1266: `867`,
    1267: `868`,
    1268: `868`,
    1269: `869`,
    127: `24`,
    1270: `869`,
    1271: `870`,
    1272: `871`,
    1273: `871`,
    1274: `872`,
    1275: `872`,
    1276: `873`,
    1277: `873`,
    1278: `874`,
    1279: `874`,
    128: `24`,
    1280: `876`,
    1281: `876`,
    1282: `878`,
    1283: `878`,
    1284: `879`,
    1285: `879`,
    1286: `879`,
    1287: `880`,
    1288: `880`,
    1289: `881`,
    129: `24`,
    1290: `881`,
    1291: `881`,
    1292: `882`,
    1293: `883`,
    1294: `883`,
    1295: `884`,
    1296: `885`,
    1297: `886`,
    1298: `886`,
    1299: `887`,
    13: `2`,
    130: `24`,
    1300: `888`,
    1301: `889`,
    1302: `889`,
    1303: `890`,
    1304: `891`,
    1305: `892`,
    1306: `896`,
    1307: `896`,
    1308: `897`,
    1309: `897`,
    131: `24`,
    1310: `898`,
    1311: `898`,
    1312: `899`,
    1313: `900`,
    1314: `900`,
    1315: `901`,
    1316: `901`,
    1317: `902`,
    1318: `902`,
    1319: `903`,
    132: `24`,
    1320: `903`,
    1321: `905`,
    1322: `905`,
    1323: `906`,
    1324: `906`,
    1325: `907`,
    1326: `907`,
    1327: `907`,
    1328: `908`,
    1329: `908`,
    133: `24`,
    1330: `909`,
    1331: `909`,
    1332: `909`,
    1333: `910`,
    1334: `911`,
    1335: `911`,
    1336: `912`,
    1337: `913`,
    1338: `914`,
    1339: `914`,
    134: `24`,
    1340: `915`,
    1341: `916`,
    1342: `917`,
    1343: `917`,
    1344: `918`,
    1345: `919`,
    1346: `920`,
    1347: `924`,
    1348: `924`,
    1349: `926`,
    135: `24`,
    1350: `926`,
    1351: `927`,
    1352: `927`,
    1353: `928`,
    1354: `928`,
    1355: `928`,
    1356: `929`,
    1357: `929`,
    1358: `929`,
    1359: `929`,
    136: `24`,
    1360: `929`,
    1361: `929`,
    1362: `930`,
    1363: `930`,
    1364: `931`,
    1365: `932`,
    1366: `934`,
    1367: `935`,
    1368: `935`,
    1369: `936`,
    137: `24`,
    1370: `936`,
    1371: `936`,
    1372: `936`,
    1373: `936`,
    1374: `936`,
    1375: `936`,
    1376: `936`,
    1377: `936`,
    1378: `936`,
    1379: `937`,
    138: `24`,
    1380: `937`,
    1381: `938`,
    1382: `939`,
    1383: `939`,
    1384: `939`,
    1385: `940`,
    1386: `941`,
    1387: `942`,
    1388: `942`,
    1389: `943`,
    139: `24`,
    1390: `944`,
    1391: `944`,
    1392: `944`,
    1393: `945`,
    1394: `945`,
    1395: `946`,
    1396: `946`,
    1397: `947`,
    1398: `947`,
    1399: `948`,
    14: `2`,
    140: `24`,
    1400: `948`,
    1401: `949`,
    1402: `949`,
    1403: `950`,
    1404: `951`,
    1405: `951`,
    1406: `952`,
    1407: `952`,
    1408: `953`,
    1409: `953`,
    141: `24`,
    1410: `954`,
    1411: `954`,
    1412: `955`,
    1413: `955`,
    1414: `955`,
    1415: `957`,
    1416: `957`,
    1417: `958`,
    1418: `959`,
    1419: `959`,
    142: `25`,
    1420: `961`,
    1421: `961`,
    1422: `962`,
    1423: `962`,
    1424: `963`,
    1425: `964`,
    1426: `965`,
    1427: `965`,
    1428: `965`,
    1429: `966`,
    143: `25`,
    1430: `966`,
    1431: `967`,
    1432: `968`,
    1433: `969`,
    1434: `969`,
    1435: `970`,
    1436: `970`,
    1437: `971`,
    1438: `971`,
    1439: `971`,
    144: `25`,
    1440: `972`,
    1441: `972`,
    1442: `973`,
    1443: `973`,
    1444: `973`,
    1445: `973`,
    1446: `973`,
    1447: `973`,
    1448: `974`,
    1449: `974`,
    145: `26`,
    1450: `975`,
    1451: `976`,
    1452: `977`,
    1453: `977`,
    1454: `978`,
    1455: `979`,
    1456: `981`,
    1457: `981`,
    1458: `982`,
    1459: `982`,
    146: `26`,
    1460: `982`,
    1461: `983`,
    1462: `983`,
    1463: `984`,
    1464: `985`,
    1465: `986`,
    1466: `986`,
    1467: `986`,
    1468: `986`,
    1469: `986`,
    147: `26`,
    1470: `986`,
    1471: `986`,
    1472: `986`,
    1473: `986`,
    1474: `986`,
    1475: `986`,
    1476: `986`,
    1477: `986`,
    1478: `986`,
    1479: `986`,
    148: `26`,
    1480: `986`,
    1481: `986`,
    1482: `986`,
    1483: `987`,
    1484: `987`,
    1485: `987`,
    1486: `989`,
    1487: `989`,
    1488: `989`,
    1489: `989`,
    149: `26`,
    1490: `989`,
    1491: `989`,
    1492: `989`,
    1493: `989`,
    1494: `989`,
    1495: `989`,
    1496: `989`,
    1497: `989`,
    1498: `989`,
    1499: `989`,
    15: `2`,
    150: `26`,
    1500: `989`,
    1501: `989`,
    1502: `989`,
    1503: `989`,
    1504: `989`,
    1505: `989`,
    1506: `989`,
    1507: `989`,
    1508: `989`,
    1509: `989`,
    151: `26`,
    1510: `989`,
    1511: `989`,
    1512: `989`,
    1513: `989`,
    1514: `989`,
    1515: `989`,
    1516: `989`,
    1517: `989`,
    1518: `989`,
    1519: `989`,
    152: `26`,
    1520: `989`,
    1521: `990`,
    1522: `990`,
    1523: `991`,
    1524: `991`,
    1525: `991`,
    1526: `993`,
    1527: `993`,
    1528: `993`,
    1529: `993`,
    153: `26`,
    1530: `993`,
    1531: `993`,
    1532: `993`,
    1533: `993`,
    1534: `993`,
    1535: `993`,
    1536: `993`,
    1537: `993`,
    1538: `993`,
    1539: `993`,
    154: `26`,
    1540: `993`,
    1541: `993`,
    1542: `993`,
    1543: `993`,
    1544: `993`,
    1545: `993`,
    1546: `993`,
    1547: `993`,
    1548: `993`,
    1549: `993`,
    155: `26`,
    1550: `993`,
    1551: `993`,
    1552: `993`,
    1553: `993`,
    1554: `993`,
    1555: `993`,
    1556: `993`,
    1557: `993`,
    1558: `993`,
    1559: `993`,
    156: `26`,
    1560: `993`,
    1561: `994`,
    1562: `994`,
    1563: `995`,
    1564: `995`,
    1565: `995`,
    1566: `997`,
    1567: `997`,
    1568: `998`,
    1569: `998`,
    157: `26`,
    1570: `999`,
    1571: `1000`,
    1572: `1000`,
    1573: `1000`,
    1574: `1001`,
    1575: `1001`,
    1576: `1002`,
    1577: `1002`,
    1578: `1003`,
    1579: `1004`,
    158: `26`,
    1580: `1007`,
    1581: `1007`,
    1582: `1007`,
    1583: `1008`,
    1584: `1008`,
    1585: `1009`,
    1586: `1009`,
    1587: `1011`,
    1588: `1011`,
    1589: `1012`,
    159: `26`,
    1590: `1013`,
    1591: `1014`,
    1592: `1016`,
    1593: `1016`,
    1594: `1016`,
    1595: `1018`,
    1596: `1018`,
    1597: `1019`,
    1598: `1019`,
    1599: `1020`,
    16: `2`,
    160: `26`,
    1600: `1021`,
    1601: `1021`,
    1602: `1021`,
    1603: `1022`,
    1604: `1022`,
    1605: `1023`,
    1606: `1023`,
    1607: `1024`,
    1608: `1025`,
    1609: `1028`,
    161: `26`,
    1610: `1028`,
    1611: `1028`,
    1612: `1029`,
    1613: `1029`,
    1614: `1030`,
    1615: `1030`,
    1616: `1031`,
    1617: `1031`,
    1618: `1031`,
    1619: `1033`,
    162: `26`,
    1620: `1034`,
    1621: `1035`,
    1622: `1035`,
    1623: `1035`,
    1624: `1036`,
    1625: `1036`,
    1626: `1037`,
    1627: `1038`,
    1628: `1039`,
    1629: `1039`,
    163: `26`,
    1630: `1040`,
    1631: `1040`,
    1632: `1040`,
    1633: `1042`,
    1634: `1043`,
    1635: `1044`,
    1636: `1044`,
    1637: `1044`,
    1638: `1045`,
    1639: `1045`,
    164: `26`,
    1640: `1046`,
    1641: `1047`,
    1642: `1048`,
    1643: `1048`,
    1644: `1049`,
    1645: `1049`,
    1646: `1049`,
    1647: `1051`,
    1648: `1051`,
    1649: `1051`,
    165: `26`,
    1650: `1051`,
    1651: `1051`,
    1652: `1051`,
    1653: `1051`,
    1654: `1051`,
    1655: `1051`,
    1656: `1051`,
    1657: `1051`,
    1658: `1051`,
    1659: `1051`,
    166: `26`,
    1660: `1051`,
    1661: `1051`,
    1662: `1051`,
    1663: `1051`,
    1664: `1051`,
    1665: `1051`,
    1666: `1051`,
    1667: `1051`,
    1668: `1051`,
    1669: `1051`,
    167: `26`,
    1670: `1051`,
    1671: `1051`,
    1672: `1051`,
    1673: `1051`,
    1674: `1051`,
    1675: `1051`,
    1676: `1051`,
    1677: `1051`,
    1678: `1051`,
    1679: `1051`,
    168: `26`,
    1680: `1051`,
    1681: `1051`,
    1682: `1052`,
    1683: `1052`,
    1684: `1053`,
    1685: `1053`,
    1686: `1053`,
    1687: `1055`,
    1688: `1055`,
    1689: `1055`,
    169: `26`,
    1690: `1055`,
    1691: `1055`,
    1692: `1055`,
    1693: `1055`,
    1694: `1055`,
    1695: `1055`,
    1696: `1055`,
    1697: `1055`,
    1698: `1055`,
    1699: `1055`,
    17: `2`,
    170: `26`,
    1700: `1055`,
    1701: `1055`,
    1702: `1055`,
    1703: `1055`,
    1704: `1055`,
    1705: `1055`,
    1706: `1055`,
    1707: `1055`,
    1708: `1055`,
    1709: `1055`,
    171: `26`,
    1710: `1055`,
    1711: `1055`,
    1712: `1055`,
    1713: `1055`,
    1714: `1055`,
    1715: `1055`,
    1716: `1055`,
    1717: `1055`,
    1718: `1055`,
    1719: `1055`,
    172: `26`,
    1720: `1055`,
    1721: `1055`,
    1722: `1056`,
    1723: `1056`,
    1724: `1057`,
    1725: `1057`,
    1726: `1057`,
    1727: `1059`,
    1728: `1059`,
    1729: `1059`,
    173: `26`,
    1730: `1059`,
    1731: `1059`,
    1732: `1059`,
    1733: `1059`,
    1734: `1059`,
    1735: `1059`,
    1736: `1059`,
    1737: `1059`,
    1738: `1059`,
    1739: `1059`,
    174: `26`,
    1740: `1059`,
    1741: `1059`,
    1742: `1059`,
    1743: `1059`,
    1744: `1059`,
    1745: `1059`,
    1746: `1059`,
    1747: `1059`,
    1748: `1059`,
    1749: `1059`,
    175: `26`,
    1750: `1059`,
    1751: `1059`,
    1752: `1059`,
    1753: `1059`,
    1754: `1059`,
    1755: `1059`,
    1756: `1059`,
    1757: `1059`,
    1758: `1059`,
    1759: `1059`,
    176: `26`,
    1760: `1059`,
    1761: `1059`,
    1762: `1060`,
    1763: `1060`,
    1764: `1061`,
    1765: `1061`,
    1766: `1061`,
    1767: `1063`,
    1768: `1063`,
    1769: `1064`,
    177: `28`,
    1770: `1064`,
    1771: `1065`,
    1772: `1066`,
    1773: `1066`,
    1774: `1066`,
    1775: `1067`,
    1776: `1067`,
    1777: `1068`,
    1778: `1068`,
    1779: `1069`,
    178: `30`,
    1780: `1070`,
    1781: `1073`,
    1782: `1073`,
    1783: `1073`,
    1784: `1074`,
    1785: `1074`,
    1786: `1075`,
    1787: `1076`,
    1788: `1076`,
    1789: `1076`,
    179: `30`,
    1790: `1077`,
    1791: `1077`,
    1792: `1078`,
    1793: `1078`,
    1794: `1078`,
    1795: `1080`,
    1796: `1080`,
    1797: `1081`,
    1798: `1081`,
    1799: `1082`,
    18: `2`,
    180: `31`,
    1800: `1082`,
    1801: `1083`,
    1802: `1084`,
    1803: `1085`,
    1804: `1085`,
    1805: `1086`,
    1806: `1086`,
    1807: `1087`,
    1808: `1088`,
    1809: `1089`,
    181: `40`,
    1810: `1089`,
    1811: `1090`,
    1812: `1090`,
    1813: `1091`,
    1814: `1091`,
    1815: `1092`,
    1816: `1093`,
    1817: `1093`,
    1818: `1094`,
    1819: `1094`,
    182: `40`,
    1820: `1095`,
    1821: `1095`,
    1822: `1096`,
    1823: `1097`,
    1824: `1097`,
    1825: `1098`,
    1826: `1098`,
    1827: `1098`,
    1828: `1098`,
    1829: `1098`,
    183: `41`,
    1830: `1098`,
    1831: `1099`,
    1832: `1099`,
    1833: `1100`,
    1834: `1101`,
    1835: `1102`,
    1836: `1102`,
    1837: `1103`,
    1838: `1104`,
    1839: `1105`,
    184: `42`,
    1840: `1105`,
    1841: `1106`,
    1842: `1107`,
    1843: `1108`,
    1844: `1108`,
    1845: `1109`,
    1846: `1110`,
    1847: `1111`,
    1848: `1113`,
    1849: `1113`,
    185: `43`,
    1850: `1114`,
    1851: `1114`,
    1852: `1114`,
    1853: `1115`,
    1854: `1115`,
    1855: `1116`,
    1856: `1117`,
    1857: `1118`,
    1858: `1118`,
    1859: `1119`,
    186: `52`,
    1860: `1120`,
    1861: `1121`,
    1862: `1121`,
    1863: `1122`,
    1864: `1123`,
    1865: `1124`,
    1866: `1124`,
    1867: `1125`,
    1868: `1126`,
    1869: `1126`,
    187: `52`,
    1870: `1126`,
    1871: `1127`,
    1872: `1128`,
    1873: `1129`,
    1874: `1129`,
    1875: `1130`,
    1876: `1130`,
    1877: `1131`,
    1878: `1132`,
    1879: `1132`,
    188: `53`,
    1880: `1133`,
    1881: `1134`,
    1882: `1134`,
    1883: `1134`,
    1884: `1135`,
    1885: `1136`,
    1886: `1137`,
    1887: `1137`,
    1888: `1138`,
    1889: `1138`,
    189: `53`,
    1890: `1139`,
    1891: `1139`,
    1892: `1140`,
    1893: `1140`,
    1894: `1141`,
    1895: `1141`,
    1896: `1142`,
    1897: `1143`,
    1898: `1146`,
    1899: `1146`,
    19: `2`,
    190: `54`,
    1900: `1147`,
    1901: `1148`,
    1902: `1148`,
    1903: `1148`,
    1904: `1149`,
    1905: `1150`,
    1906: `1151`,
    1907: `1151`,
    1908: `1152`,
    1909: `1152`,
    191: `55`,
    1910: `1153`,
    1911: `1153`,
    1912: `1154`,
    1913: `1154`,
    1914: `1155`,
    1915: `1155`,
    1916: `1156`,
    1917: `1157`,
    1918: `1157`,
    1919: `1158`,
    192: `56`,
    1920: `1158`,
    1921: `1159`,
    1922: `1159`,
    1923: `1160`,
    1924: `1161`,
    1925: `1161`,
    1926: `1162`,
    1927: `1162`,
    1928: `1163`,
    1929: `1164`,
    193: `56`,
    1930: `1164`,
    1931: `1165`,
    1932: `1166`,
    1933: `1169`,
    1934: `1169`,
    1935: `1170`,
    1936: `1170`,
    1937: `1170`,
    1938: `1171`,
    1939: `1173`,
    194: `57`,
    1940: `1173`,
    1941: `1174`,
    1942: `1174`,
    1943: `1175`,
    1944: `1175`,
    1945: `1175`,
    1946: `1176`,
    1947: `1176`,
    1948: `1177`,
    1949: `1177`,
    195: `58`,
    1950: `1177`,
    1951: `1178`,
    1952: `1180`,
    1953: `1180`,
    1954: `1181`,
    1955: `1181`,
    1956: `1182`,
    1957: `1182`,
    1958: `1182`,
    1959: `1183`,
    196: `59`,
    1960: `1183`,
    1961: `1184`,
    1962: `1184`,
    1963: `1184`,
    1964: `1185`,
    1965: `1187`,
    1966: `1187`,
    1967: `1188`,
    1968: `1188`,
    1969: `1189`,
    197: `62`,
    1970: `1189`,
    1971: `1189`,
    1972: `1190`,
    1973: `1190`,
    1974: `1191`,
    1975: `1191`,
    1976: `1192`,
    1977: `1192`,
    1978: `1193`,
    1979: `1193`,
    198: `62`,
    1980: `1194`,
    1981: `1195`,
    1982: `1208`,
    1983: `1208`,
    1984: `1209`,
    1985: `1209`,
    1986: `1210`,
    1987: `1211`,
    1988: `1224`,
    1989: `1224`,
    199: `63`,
    1990: `1225`,
    1991: `1225`,
    1992: `1226`,
    1993: `1227`,
    1994: `1240`,
    1995: `1240`,
    1996: `1241`,
    1997: `1242`,
    1998: `1255`,
    1999: `1255`,
    2: `2`,
    20: `2`,
    200: `63`,
    2000: `1256`,
    2001: `1270`,
    2002: `1270`,
    2003: `1271`,
    2004: `1271`,
    2005: `1272`,
    2006: `1273`,
    2007: `1274`,
    2008: `1274`,
    2009: `1275`,
    201: `63`,
    2010: `1276`,
    2011: `1277`,
    2012: `1277`,
    2013: `1278`,
    2014: `1279`,
    2015: `1280`,
    2016: `1280`,
    2017: `1281`,
    2018: `1282`,
    2019: `1282`,
    202: `66`,
    2020: `1283`,
    2021: `1284`,
    2022: `1284`,
    2023: `1284`,
    2024: `1285`,
    2025: `1286`,
    2026: `1287`,
    2027: `1288`,
    2028: `1288`,
    2029: `1289`,
    203: `66`,
    2030: `1289`,
    2031: `1289`,
    2032: `1291`,
    2033: `1292`,
    2034: `1292`,
    2035: `1293`,
    2036: `1294`,
    2037: `1296`,
    2038: `1297`,
    2039: `1297`,
    204: `67`,
    2040: `1297`,
    2041: `1298`,
    2042: `1298`,
    2043: `1299`,
    2044: `1300`,
    2045: `1300`,
    2046: `1301`,
    2047: `1302`,
    2048: `1302`,
    2049: `1303`,
    205: `68`,
    2050: `1304`,
    2051: `1304`,
    2052: `1305`,
    2053: `1306`,
    2054: `1306`,
    2055: `1307`,
    2056: `1308`,
    2057: `1308`,
    2058: `1309`,
    2059: `1310`,
    206: `69`,
    2060: `1310`,
    2061: `1311`,
    2062: `1312`,
    2063: `1312`,
    2064: `1312`,
    2065: `1313`,
    2066: `1313`,
    2067: `1314`,
    2068: `1314`,
    2069: `1314`,
    207: `72`,
    2070: `1315`,
    2071: `1315`,
    2072: `1316`,
    2073: `1316`,
    2074: `1317`,
    2075: `1318`,
    2076: `1318`,
    2077: `1319`,
    2078: `1319`,
    2079: `1319`,
    208: `72`,
    2080: `1319`,
    2081: `1319`,
    2082: `1319`,
    2083: `1320`,
    2084: `1320`,
    2085: `1321`,
    2086: `1322`,
    2087: `1323`,
    2088: `1325`,
    2089: `1325`,
    209: `73`,
    2090: `1326`,
    2091: `1326`,
    2092: `1326`,
    2093: `1327`,
    2094: `1327`,
    2095: `1328`,
    2096: `1328`,
    2097: `1329`,
    2098: `1330`,
    2099: `1333`,
    21: `2`,
    210: `74`,
    2100: `1333`,
    2101: `1333`,
    2102: `1333`,
    2103: `1333`,
    2104: `1333`,
    2105: `1333`,
    2106: `1333`,
    2107: `1333`,
    2108: `1333`,
    2109: `1333`,
    211: `75`,
    2110: `1333`,
    2111: `1333`,
    2112: `1333`,
    2113: `1333`,
    2114: `1333`,
    2115: `1333`,
    2116: `1333`,
    2117: `1333`,
    2118: `1333`,
    2119: `1333`,
    212: `78`,
    2120: `1333`,
    2121: `1333`,
    2122: `1333`,
    2123: `1333`,
    2124: `1333`,
    2125: `1334`,
    2126: `1335`,
    2127: `1336`,
    2128: `1336`,
    2129: `1337`,
    213: `78`,
    2130: `1337`,
    2131: `1338`,
    2132: `1339`,
    2133: `1339`,
    2134: `1340`,
    2135: `1340`,
    2136: `1341`,
    2137: `1341`,
    2138: `1342`,
    2139: `1342`,
    214: `79`,
    2140: `1343`,
    2141: `1343`,
    2142: `1344`,
    2143: `1344`,
    2144: `1345`,
    2145: `1345`,
    2146: `1345`,
    2147: `1347`,
    2148: `1347`,
    2149: `1348`,
    215: `80`,
    2150: `1348`,
    2151: `1349`,
    2152: `1350`,
    2153: `1351`,
    2154: `1351`,
    2155: `1351`,
    2156: `1352`,
    2157: `1352`,
    2158: `1353`,
    2159: `1354`,
    216: `81`,
    2160: `1354`,
    2161: `1355`,
    2162: `1355`,
    2163: `1355`,
    2164: `1355`,
    2165: `1355`,
    2166: `1355`,
    2167: `1356`,
    2168: `1356`,
    2169: `1357`,
    217: `84`,
    2170: `1358`,
    2171: `1359`,
    2172: `1361`,
    2173: `1361`,
    2174: `1362`,
    2175: `1362`,
    2176: `1362`,
    2177: `1363`,
    2178: `1363`,
    2179: `1364`,
    218: `84`,
    2180: `1364`,
    2181: `1365`,
    2182: `1366`,
    2183: `1366`,
    2184: `1367`,
    2185: `1367`,
    2186: `1368`,
    2187: `1369`,
    2188: `1370`,
    2189: `1374`,
    219: `85`,
    2190: `1374`,
    2191: `1375`,
    2192: `1376`,
    2193: `1377`,
    2194: `1378`,
    2195: `1379`,
    2196: `1383`,
    2197: `1383`,
    2198: `1385`,
    2199: `1385`,
    22: `2`,
    220: `86`,
    2200: `1386`,
    2201: `1386`,
    2202: `1386`,
    2203: `1387`,
    2204: `1387`,
    2205: `1388`,
    2206: `1389`,
    2207: `1390`,
    2208: `1391`,
    2209: `1391`,
    221: `87`,
    2210: `1392`,
    2211: `1393`,
    2212: `1394`,
    2213: `1398`,
    2214: `1398`,
    2215: `1399`,
    2216: `1399`,
    2217: `1400`,
    2218: `1400`,
    2219: `1401`,
    222: `88`,
    2220: `1402`,
    2221: `1402`,
    2222: `1403`,
    2223: `1403`,
    2224: `1404`,
    2225: `1404`,
    2226: `1405`,
    2227: `1405`,
    2228: `1407`,
    2229: `1407`,
    223: `88`,
    2230: `1408`,
    2231: `1408`,
    2232: `1409`,
    2233: `1409`,
    2234: `1409`,
    2235: `1410`,
    2236: `1410`,
    2237: `1411`,
    2238: `1411`,
    2239: `1411`,
    224: `89`,
    2240: `1412`,
    2241: `1413`,
    2242: `1413`,
    2243: `1414`,
    2244: `1415`,
    2245: `1416`,
    2246: `1416`,
    2247: `1417`,
    2248: `1418`,
    2249: `1419`,
    225: `90`,
    2250: `1419`,
    2251: `1420`,
    2252: `1421`,
    2253: `1422`,
    2254: `1426`,
    2255: `1426`,
    2256: `1428`,
    2257: `1428`,
    2258: `1429`,
    2259: `1429`,
    226: `91`,
    2260: `1430`,
    2261: `1430`,
    2262: `1430`,
    2263: `1431`,
    2264: `1431`,
    2265: `1432`,
    2266: `1432`,
    2267: `1433`,
    2268: `1433`,
    2269: `1434`,
    227: `95`,
    2270: `1435`,
    2271: `1435`,
    2272: `1436`,
    2273: `1436`,
    2274: `1437`,
    2275: `1437`,
    2276: `1437`,
    2277: `1438`,
    2278: `1439`,
    2279: `1440`,
    228: `95`,
    2280: `1440`,
    2281: `1441`,
    2282: `1442`,
    2283: `1443`,
    2284: `1444`,
    2285: `1448`,
    2286: `1448`,
    2287: `1450`,
    2288: `1450`,
    2289: `1451`,
    229: `97`,
    2290: `1451`,
    2291: `1452`,
    2292: `1452`,
    2293: `1452`,
    2294: `1454`,
    2295: `1455`,
    2296: `1455`,
    2297: `1456`,
    2298: `1456`,
    2299: `1457`,
    23: `2`,
    230: `97`,
    2300: `1457`,
    2301: `1458`,
    2302: `1458`,
    2303: `1458`,
    2304: `1459`,
    2305: `1460`,
    2306: `1460`,
    2307: `1461`,
    2308: `1461`,
    2309: `1462`,
    231: `98`,
    2310: `1462`,
    2311: `1463`,
    2312: `1463`,
    2313: `1463`,
    2314: `1464`,
    2315: `1465`,
    2316: `1465`,
    2317: `1466`,
    2318: `1466`,
    2319: `1467`,
    232: `98`,
    2320: `1467`,
    2321: `1468`,
    2322: `1468`,
    2323: `1468`,
    2324: `1470`,
    2325: `1470`,
    2326: `1471`,
    2327: `1471`,
    2328: `1472`,
    2329: `1473`,
    233: `98`,
    2330: `1475`,
    2331: `1475`,
    2332: `1475`,
    2333: `1477`,
    2334: `1478`,
    2335: `1478`,
    2336: `1479`,
    2337: `1479`,
    2338: `1480`,
    2339: `1480`,
    234: `99`,
    2340: `1480`,
    2341: `1481`,
    2342: `1481`,
    2343: `1481`,
    2344: `1483`,
    2345: `1483`,
    2346: `1483`,
    2347: `1484`,
    2348: `1484`,
    2349: `1485`,
    235: `99`,
    2350: `1485`,
    2351: `1485`,
    2352: `1486`,
    2353: `1486`,
    2354: `1486`,
    2355: `1487`,
    2356: `1487`,
    2357: `1488`,
    2358: `1488`,
    2359: `1488`,
    236: `100`,
    2360: `1490`,
    2361: `1490`,
    2362: `1490`,
    2363: `1491`,
    2364: `1491`,
    2365: `1491`,
    2366: `1492`,
    2367: `1492`,
    2368: `1493`,
    2369: `1493`,
    237: `101`,
    2370: `1493`,
    2371: `1495`,
    2372: `1495`,
    2373: `1495`,
    2374: `1496`,
    2375: `1496`,
    2376: `1496`,
    2377: `1497`,
    2378: `1497`,
    2379: `1498`,
    238: `102`,
    2380: `1498`,
    2381: `1498`,
    2382: `1500`,
    2383: `1500`,
    2384: `1500`,
    2385: `1501`,
    2386: `1501`,
    2387: `1501`,
    2388: `1502`,
    2389: `1502`,
    239: `103`,
    2390: `1503`,
    2391: `1503`,
    2392: `1503`,
    2393: `1505`,
    2394: `1506`,
    2395: `1506`,
    2396: `1507`,
    2397: `1508`,
    2398: `1509`,
    2399: `1509`,
    24: `2`,
    240: `103`,
    2400: `1510`,
    2401: `1510`,
    2402: `1511`,
    2403: `1512`,
    2404: `1513`,
    2405: `1514`,
    2406: `1514`,
    2407: `1515`,
    2408: `1516`,
    2409: `1517`,
    241: `104`,
    2410: `1518`,
    2411: `1518`,
    2412: `1519`,
    2413: `1520`,
    2414: `1521`,
    2415: `1521`,
    2416: `1521`,
    2417: `1522`,
    2418: `1522`,
    2419: `1522`,
    242: `105`,
    2420: `1523`,
    2421: `1524`,
    2422: `1525`,
    2423: `1526`,
    2424: `1526`,
    2425: `1526`,
    2426: `1528`,
    2427: `1528`,
    2428: `1528`,
    2429: `1530`,
    243: `106`,
    2430: `1530`,
    2431: `1530`,
    2432: `1532`,
    2433: `1532`,
    2434: `1532`,
    2435: `1534`,
    2436: `1534`,
    2437: `1534`,
    2438: `1536`,
    2439: `1536`,
    244: `110`,
    2440: `1536`,
    2441: `1538`,
    2442: `1538`,
    2443: `1538`,
    2444: `1539`,
    2445: `1539`,
    2446: `1540`,
    2447: `1540`,
    2448: `1540`,
    2449: `1542`,
    245: `112`,
    2450: `1542`,
    2451: `1542`,
    2452: `1543`,
    2453: `1543`,
    2454: `1544`,
    2455: `1544`,
    2456: `1544`,
    2457: `1546`,
    2458: `1546`,
    2459: `1546`,
    246: `112`,
    2460: `1548`,
    2461: `1548`,
    2462: `1548`,
    2463: `1550`,
    2464: `1550`,
    2465: `1550`,
    2466: `1552`,
    2467: `1552`,
    2468: `1552`,
    2469: `1554`,
    247: `114`,
    2470: `1554`,
    2471: `1554`,
    2472: `1556`,
    2473: `1556`,
    2474: `1556`,
    2475: `1558`,
    2476: `1558`,
    2477: `1558`,
    2478: `1560`,
    2479: `1560`,
    248: `114`,
    2480: `1560`,
    2481: `1562`,
    2482: `1562`,
    2483: `1562`,
    2484: `1564`,
    2485: `1564`,
    2486: `1564`,
    2487: `1566`,
    2488: `1566`,
    2489: `1566`,
    249: `115`,
    2490: `1568`,
    2491: `1568`,
    2492: `1568`,
    2493: `1570`,
    2494: `1570`,
    2495: `1571`,
    2496: `1572`,
    2497: `1572`,
    2498: `1573`,
    2499: `1573`,
    25: `2`,
    250: `115`,
    2500: `1574`,
    2501: `1575`,
    2502: `1575`,
    2503: `1576`,
    2504: `1576`,
    2505: `1577`,
    2506: `1577`,
    2507: `1577`,
    2508: `1578`,
    2509: `1579`,
    251: `115`,
    2510: `1579`,
    2511: `1580`,
    2512: `1581`,
    2513: `1582`,
    2514: `1582`,
    2515: `1583`,
    2516: `1583`,
    2517: `1584`,
    2518: `1584`,
    2519: `1584`,
    252: `116`,
    2520: `1585`,
    2521: `1586`,
    2522: `1586`,
    2523: `1587`,
    2524: `1588`,
    2525: `1589`,
    2526: `1589`,
    2527: `1590`,
    2528: `1590`,
    2529: `1591`,
    253: `116`,
    2530: `1591`,
    2531: `1591`,
    2532: `1592`,
    2533: `1593`,
    2534: `1593`,
    2535: `1594`,
    2536: `1595`,
    2537: `1596`,
    2538: `1596`,
    2539: `1597`,
    254: `116`,
    2540: `1597`,
    2541: `1598`,
    2542: `1599`,
    2543: `1599`,
    2544: `1600`,
    2545: `1601`,
    2546: `1602`,
    2547: `1602`,
    2548: `1603`,
    2549: `1604`,
    255: `116`,
    2550: `1605`,
    2551: `1605`,
    2552: `1606`,
    2553: `1606`,
    2554: `1607`,
    2555: `1608`,
    2556: `1609`,
    2557: `1609`,
    2558: `1610`,
    2559: `1610`,
    256: `116`,
    2560: `1611`,
    2561: `1612`,
    2562: `1613`,
    2563: `1613`,
    2564: `1614`,
    2565: `1614`,
    2566: `1615`,
    2567: `1615`,
    2568: `1616`,
    2569: `1617`,
    257: `116`,
    2570: `1617`,
    2571: `1618`,
    2572: `1619`,
    2573: `1619`,
    2574: `1621`,
    2575: `1621`,
    2576: `1622`,
    2577: `1622`,
    2578: `1623`,
    2579: `1624`,
    258: `116`,
    2580: `1625`,
    2581: `1625`,
    2582: `1626`,
    2583: `1627`,
    2584: `1628`,
    2585: `1628`,
    2586: `1629`,
    2587: `1630`,
    2588: `1631`,
    2589: `1631`,
    259: `116`,
    2590: `1632`,
    2591: `1633`,
    2592: `1633`,
    2593: `1634`,
    2594: `1635`,
    2595: `1635`,
    2596: `1636`,
    2597: `1637`,
    2598: `1637`,
    2599: `1637`,
    26: `2`,
    260: `117`,
    2600: `1638`,
    2601: `1639`,
    2602: `1639`,
    2603: `1640`,
    2604: `1641`,
    2605: `1641`,
    2606: `1641`,
    2607: `1642`,
    2608: `1643`,
    2609: `1643`,
    261: `117`,
    2610: `1644`,
    2611: `1645`,
    2612: `1645`,
    2613: `1646`,
    2614: `1647`,
    2615: `1648`,
    2616: `1648`,
    2617: `1649`,
    2618: `1650`,
    2619: `1650`,
    262: `118`,
    2620: `1650`,
    2621: `1651`,
    2622: `1652`,
    2623: `1652`,
    2624: `1653`,
    2625: `1654`,
    2626: `1654`,
    2627: `1654`,
    2628: `1655`,
    2629: `1656`,
    263: `119`,
    2630: `1656`,
    2631: `1657`,
    2632: `1658`,
    2633: `1658`,
    2634: `1659`,
    2635: `1660`,
    2636: `1661`,
    2637: `1661`,
    2638: `1662`,
    2639: `1663`,
    264: `119`,
    2640: `1663`,
    2641: `1664`,
    2642: `1665`,
    2643: `1666`,
    2644: `1666`,
    2645: `1667`,
    2646: `1668`,
    2647: `1668`,
    2648: `1669`,
    2649: `1670`,
    265: `120`,
    2650: `1671`,
    2651: `1671`,
    2652: `1672`,
    2653: `1673`,
    2654: `1673`,
    2655: `1674`,
    2656: `1675`,
    2657: `1676`,
    2658: `1676`,
    2659: `1677`,
    266: `121`,
    2660: `1678`,
    2661: `1679`,
    2662: `1679`,
    2663: `1680`,
    2664: `1681`,
    2665: `1682`,
    2666: `1682`,
    2667: `1683`,
    2668: `1683`,
    2669: `1684`,
    267: `121`,
    2670: `1684`,
    2671: `1684`,
    2672: `1686`,
    2673: `1687`,
    2674: `1687`,
    2675: `1688`,
    2676: `1689`,
    2677: `1689`,
    2678: `1690`,
    2679: `1690`,
    268: `122`,
    2680: `1691`,
    2681: `1691`,
    2682: `1692`,
    2683: `1693`,
    2684: `1695`,
    2685: `1696`,
    2686: `1696`,
    2687: `1697`,
    2688: `1697`,
    2689: `1698`,
    269: `123`,
    2690: `1698`,
    2691: `1699`,
    2692: `1699`,
    2693: `1700`,
    2694: `1700`,
    2695: `1701`,
    2696: `1701`,
    2697: `1702`,
    2698: `1703`,
    2699: `1705`,
    27: `2`,
    270: `125`,
    2700: `1705`,
    2701: `1706`,
    2702: `1706`,
    2703: `1707`,
    2704: `1708`,
    2705: `1711`,
    2706: `1711`,
    2707: `1711`,
    2708: `1712`,
    2709: `1712`,
    271: `126`,
    2710: `1713`,
    2711: `1713`,
    2712: `1714`,
    2713: `1714`,
    2714: `1714`,
    2715: `1716`,
    2716: `1716`,
    2717: `1717`,
    2718: `1717`,
    2719: `1718`,
    272: `126`,
    2720: `1719`,
    2721: `1722`,
    2722: `1722`,
    2723: `1722`,
    2724: `1723`,
    2725: `1723`,
    2726: `1724`,
    2727: `1724`,
    2728: `1725`,
    2729: `1725`,
    273: `127`,
    2730: `1725`,
    2731: `1727`,
    2732: `1727`,
    2733: `1728`,
    2734: `1728`,
    2735: `1729`,
    2736: `1730`,
    2737: `1733`,
    2738: `1733`,
    2739: `1733`,
    274: `127`,
    2740: `1734`,
    2741: `1734`,
    2742: `1735`,
    2743: `1736`,
    2744: `1736`,
    2745: `1736`,
    2746: `1737`,
    2747: `1737`,
    2748: `1738`,
    2749: `1738`,
    275: `127`,
    2750: `1738`,
    2751: `1740`,
    2752: `1741`,
    2753: `1743`,
    2754: `1744`,
    2755: `1745`,
    2756: `1746`,
    2757: `1746`,
    2758: `1747`,
    2759: `1747`,
    276: `127`,
    2760: `1748`,
    2761: `1748`,
    2762: `1748`,
    2763: `1749`,
    2764: `1751`,
    2765: `1752`,
    2766: `1753`,
    2767: `1753`,
    2768: `1753`,
    2769: `1754`,
    277: `127`,
    2770: `1755`,
    2771: `1755`,
    2772: `1756`,
    2773: `1756`,
    2774: `1756`,
    2775: `1757`,
    2776: `1759`,
    2777: `1760`,
    2778: `1760`,
    2779: `1760`,
    278: `127`,
    2780: `1762`,
    2781: `1763`,
    2782: `1763`,
    2783: `1763`,
    2784: `1765`,
    2785: `1766`,
    2786: `1766`,
    2787: `1767`,
    2788: `1769`,
    2789: `1770`,
    279: `127`,
    2790: `1771`,
    2791: `1772`,
    2792: `1773`,
    2793: `1773`,
    2794: `1774`,
    2795: `1775`,
    2796: `1776`,
    2797: `1777`,
    2798: `1779`,
    2799: `1780`,
    28: `2`,
    280: `127`,
    2800: `1780`,
    2801: `1780`,
    2802: `1781`,
    2803: `1781`,
    2804: `1782`,
    2805: `1783`,
    2806: `1783`,
    2807: `1784`,
    2808: `1785`,
    2809: `1785`,
    281: `127`,
    2810: `1786`,
    2811: `1787`,
    2812: `1787`,
    2813: `1788`,
    2814: `1789`,
    2815: `1789`,
    2816: `1790`,
    2817: `1791`,
    2818: `1791`,
    2819: `1792`,
    282: `127`,
    2820: `1793`,
    2821: `1793`,
    2822: `1794`,
    2823: `1795`,
    2824: `1795`,
    2825: `1795`,
    2826: `1796`,
    2827: `1796`,
    2828: `1797`,
    2829: `1798`,
    283: `128`,
    2830: `1798`,
    2831: `1798`,
    2832: `1799`,
    2833: `1799`,
    2834: `1800`,
    2835: `1801`,
    2836: `1801`,
    2837: `1801`,
    2838: `1802`,
    2839: `1803`,
    284: `128`,
    2840: `1803`,
    2841: `1804`,
    2842: `1805`,
    2843: `1805`,
    2844: `1805`,
    2845: `1806`,
    2846: `1807`,
    2847: `1807`,
    2848: `1808`,
    2849: `1809`,
    285: `129`,
    2850: `1809`,
    2851: `1809`,
    2852: `1810`,
    2853: `1810`,
    2854: `1811`,
    2855: `1812`,
    2856: `1812`,
    2857: `1812`,
    2858: `1813`,
    2859: `1814`,
    286: `130`,
    2860: `1814`,
    2861: `1815`,
    2862: `1816`,
    2863: `1816`,
    2864: `1816`,
    2865: `1817`,
    2866: `1818`,
    2867: `1818`,
    2868: `1819`,
    2869: `1820`,
    287: `130`,
    2870: `1820`,
    2871: `1820`,
    2872: `1821`,
    2873: `1822`,
    2874: `1822`,
    2875: `1823`,
    2876: `1824`,
    2877: `1824`,
    2878: `1824`,
    2879: `1825`,
    288: `130`,
    2880: `1825`,
    2881: `1826`,
    2882: `1827`,
    2883: `1827`,
    2884: `1827`,
    2885: `1828`,
    2886: `1829`,
    2887: `1829`,
    2888: `1830`,
    2889: `1831`,
    289: `131`,
    2890: `1831`,
    2891: `1831`,
    2892: `1832`,
    2893: `1832`,
    2894: `1833`,
    2895: `1834`,
    2896: `1834`,
    2897: `1834`,
    2898: `1835`,
    2899: `1836`,
    29: `2`,
    290: `132`,
    2900: `1836`,
    2901: `1837`,
    2902: `1838`,
    2903: `1838`,
    2904: `1838`,
    2905: `1839`,
    2906: `1839`,
    2907: `1840`,
    2908: `1841`,
    2909: `1841`,
    291: `133`,
    2910: `1841`,
    2911: `1842`,
    2912: `1843`,
    2913: `1843`,
    2914: `1844`,
    2915: `1845`,
    2916: `1845`,
    2917: `1845`,
    2918: `1846`,
    2919: `1846`,
    292: `133`,
    2920: `1847`,
    2921: `1848`,
    2922: `1848`,
    2923: `1848`,
    2924: `1849`,
    2925: `1850`,
    2926: `1850`,
    2927: `1851`,
    2928: `1852`,
    2929: `1852`,
    293: `134`,
    2930: `1852`,
    2931: `1853`,
    2932: `1854`,
    2933: `1854`,
    2934: `1855`,
    2935: `1855`,
    2936: `1855`,
    2937: `1856`,
    2938: `1857`,
    2939: `1857`,
    294: `135`,
    2940: `1858`,
    2941: `1860`,
    2942: `1861`,
    2943: `1861`,
    2944: `1861`,
    2945: `1862`,
    2946: `1862`,
    2947: `1863`,
    2948: `1864`,
    2949: `1864`,
    295: `135`,
    2950: `1865`,
    2951: `1866`,
    2952: `1866`,
    2953: `1867`,
    2954: `1868`,
    2955: `1868`,
    2956: `1869`,
    2957: `1870`,
    2958: `1870`,
    2959: `1871`,
    296: `135`,
    2960: `1872`,
    2961: `1872`,
    2962: `1873`,
    2963: `1874`,
    2964: `1874`,
    2965: `1875`,
    2966: `1876`,
    2967: `1876`,
    2968: `1876`,
    2969: `1877`,
    297: `136`,
    2970: `1877`,
    2971: `1878`,
    2972: `1879`,
    2973: `1879`,
    2974: `1879`,
    2975: `1880`,
    2976: `1880`,
    2977: `1881`,
    2978: `1882`,
    2979: `1882`,
    298: `136`,
    2980: `1882`,
    2981: `1883`,
    2982: `1884`,
    2983: `1884`,
    2984: `1885`,
    2985: `1886`,
    2986: `1886`,
    2987: `1886`,
    2988: `1887`,
    2989: `1887`,
    299: `137`,
    2990: `1888`,
    2991: `1889`,
    2992: `1889`,
    2993: `1889`,
    2994: `1890`,
    2995: `1891`,
    2996: `1891`,
    2997: `1892`,
    2998: `1893`,
    2999: `1893`,
    3: `2`,
    30: `2`,
    300: `137`,
    3000: `1893`,
    3001: `1894`,
    3002: `1894`,
    3003: `1895`,
    3004: `1896`,
    3005: `1896`,
    3006: `1896`,
    3007: `1897`,
    3008: `1898`,
    3009: `1898`,
    301: `138`,
    3010: `1899`,
    3011: `1900`,
    3012: `1900`,
    3013: `1900`,
    3014: `1901`,
    3015: `1902`,
    3016: `1902`,
    3017: `1903`,
    3018: `1904`,
    3019: `1904`,
    302: `138`,
    3020: `1904`,
    3021: `1905`,
    3022: `1906`,
    3023: `1906`,
    3024: `1907`,
    3025: `1907`,
    3026: `1907`,
    3027: `1908`,
    3028: `1908`,
    3029: `1909`,
    303: `139`,
    3030: `1912`,
    3031: `1912`,
    3032: `1913`,
    3033: `1913`,
    3034: `1914`,
    3035: `1915`,
    3036: `1916`,
    3037: `1917`,
    3038: `1917`,
    3039: `1918`,
    304: `139`,
    3040: `1919`,
    3041: `1919`,
    3042: `1920`,
    3043: `1920`,
    3044: `1921`,
    3045: `1921`,
    3046: `1922`,
    3047: `1923`,
    3048: `1924`,
    3049: `1924`,
    305: `140`,
    3050: `1925`,
    3051: `1926`,
    3052: `1927`,
    3053: `1928`,
    3054: `1928`,
    3055: `1929`,
    3056: `1930`,
    3057: `1931`,
    3058: `1933`,
    3059: `1933`,
    306: `140`,
    3060: `1934`,
    3061: `1935`,
    3062: `1935`,
    3063: `1936`,
    3064: `1939`,
    3065: `1939`,
    3066: `1940`,
    3067: `1940`,
    3068: `1941`,
    3069: `1942`,
    307: `141`,
    3070: `1943`,
    3071: `1944`,
    3072: `1944`,
    3073: `1945`,
    3074: `1946`,
    3075: `1946`,
    3076: `1947`,
    3077: `1947`,
    3078: `1948`,
    3079: `1948`,
    308: `142`,
    3080: `1949`,
    3081: `1950`,
    3082: `1951`,
    3083: `1951`,
    3084: `1952`,
    3085: `1952`,
    3086: `1953`,
    3087: `1954`,
    3088: `1955`,
    3089: `1955`,
    309: `142`,
    3090: `1956`,
    3091: `1956`,
    3092: `1957`,
    3093: `1958`,
    3094: `1959`,
    3095: `1959`,
    3096: `1960`,
    3097: `1961`,
    3098: `1962`,
    3099: `1964`,
    31: `2`,
    310: `143`,
    3100: `1965`,
    3101: `1965`,
    3102: `1966`,
    3103: `1966`,
    3104: `1966`,
    3105: `1968`,
    3106: `1968`,
    3107: `1969`,
    3108: `1969`,
    3109: `1970`,
    311: `143`,
    3110: `1971`,
    3111: `1972`,
    3112: `1972`,
    3113: `1972`,
    3114: `1973`,
    3115: `1973`,
    3116: `1973`,
    3117: `1975`,
    3118: `1976`,
    3119: `1976`,
    312: `144`,
    3120: `1977`,
    313: `144`,
    314: `145`,
    315: `145`,
    316: `146`,
    317: `146`,
    318: `147`,
    319: `147`,
    32: `2`,
    320: `149`,
    321: `149`,
    322: `150`,
    323: `150`,
    324: `150`,
    325: `151`,
    326: `151`,
    327: `152`,
    328: `152`,
    329: `152`,
    33: `2`,
    330: `153`,
    331: `154`,
    332: `154`,
    333: `155`,
    334: `156`,
    335: `157`,
    336: `157`,
    337: `158`,
    338: `158`,
    339: `159`,
    34: `2`,
    340: `159`,
    341: `159`,
    342: `160`,
    343: `161`,
    344: `162`,
    345: `162`,
    346: `163`,
    347: `163`,
    348: `164`,
    349: `164`,
    35: `2`,
    350: `164`,
    351: `165`,
    352: `166`,
    353: `167`,
    354: `167`,
    355: `168`,
    356: `168`,
    357: `169`,
    358: `170`,
    359: `170`,
    36: `2`,
    360: `171`,
    361: `172`,
    362: `173`,
    363: `173`,
    364: `174`,
    365: `175`,
    366: `176`,
    367: `176`,
    368: `178`,
    369: `178`,
    37: `2`,
    370: `179`,
    371: `179`,
    372: `180`,
    373: `181`,
    374: `182`,
    375: `182`,
    376: `183`,
    377: `184`,
    378: `185`,
    379: `185`,
    38: `2`,
    380: `186`,
    381: `187`,
    382: `188`,
    383: `188`,
    384: `189`,
    385: `190`,
    386: `190`,
    387: `191`,
    388: `192`,
    389: `192`,
    39: `2`,
    390: `193`,
    391: `194`,
    392: `194`,
    393: `194`,
    394: `195`,
    395: `196`,
    396: `196`,
    397: `197`,
    398: `198`,
    399: `198`,
    4: `2`,
    40: `4`,
    400: `199`,
    401: `200`,
    402: `201`,
    403: `201`,
    404: `202`,
    405: `203`,
    406: `203`,
    407: `204`,
    408: `205`,
    409: `206`,
    41: `4`,
    410: `206`,
    411: `207`,
    412: `208`,
    413: `209`,
    414: `209`,
    415: `210`,
    416: `211`,
    417: `212`,
    418: `212`,
    419: `213`,
    42: `5`,
    420: `214`,
    421: `214`,
    422: `215`,
    423: `216`,
    424: `217`,
    425: `217`,
    426: `218`,
    427: `218`,
    428: `220`,
    429: `220`,
    43: `5`,
    430: `221`,
    431: `221`,
    432: `222`,
    433: `223`,
    434: `223`,
    435: `224`,
    436: `224`,
    437: `224`,
    438: `225`,
    439: `226`,
    44: `5`,
    440: `227`,
    441: `227`,
    442: `228`,
    443: `228`,
    444: `228`,
    445: `229`,
    446: `230`,
    447: `230`,
    448: `231`,
    449: `232`,
    45: `6`,
    450: `232`,
    451: `232`,
    452: `233`,
    453: `234`,
    454: `235`,
    455: `235`,
    456: `236`,
    457: `237`,
    458: `237`,
    459: `238`,
    46: `7`,
    460: `239`,
    461: `240`,
    462: `241`,
    463: `241`,
    464: `242`,
    465: `243`,
    466: `244`,
    467: `246`,
    468: `246`,
    469: `246`,
    47: `8`,
    470: `248`,
    471: `248`,
    472: `249`,
    473: `249`,
    474: `249`,
    475: `251`,
    476: `251`,
    477: `251`,
    478: `251`,
    479: `251`,
    48: `9`,
    480: `251`,
    481: `252`,
    482: `252`,
    483: `253`,
    484: `254`,
    485: `256`,
    486: `257`,
    487: `259`,
    488: `259`,
    489: `260`,
    49: `10`,
    490: `269`,
    491: `269`,
    492: `270`,
    493: `271`,
    494: `272`,
    495: `281`,
    496: `281`,
    497: `282`,
    498: `282`,
    499: `283`,
    5: `2`,
    50: `11`,
    500: `284`,
    501: `285`,
    502: `285`,
    503: `286`,
    504: `287`,
    505: `288`,
    506: `291`,
    507: `291`,
    508: `292`,
    509: `292`,
    51: `11`,
    510: `292`,
    511: `295`,
    512: `295`,
    513: `296`,
    514: `297`,
    515: `298`,
    516: `301`,
    517: `301`,
    518: `302`,
    519: `303`,
    52: `12`,
    520: `304`,
    521: `307`,
    522: `307`,
    523: `308`,
    524: `309`,
    525: `310`,
    526: `313`,
    527: `313`,
    528: `314`,
    529: `315`,
    53: `13`,
    530: `316`,
    531: `317`,
    532: `317`,
    533: `318`,
    534: `319`,
    535: `320`,
    536: `324`,
    537: `324`,
    538: `326`,
    539: `326`,
    54: `14`,
    540: `327`,
    541: `327`,
    542: `327`,
    543: `328`,
    544: `328`,
    545: `329`,
    546: `330`,
    547: `331`,
    548: `332`,
    549: `332`,
    55: `14`,
    550: `333`,
    551: `334`,
    552: `335`,
    553: `339`,
    554: `341`,
    555: `341`,
    556: `343`,
    557: `343`,
    558: `344`,
    559: `344`,
    56: `15`,
    560: `344`,
    561: `345`,
    562: `345`,
    563: `345`,
    564: `345`,
    565: `345`,
    566: `345`,
    567: `345`,
    568: `345`,
    569: `346`,
    57: `16`,
    570: `346`,
    571: `347`,
    572: `348`,
    573: `348`,
    574: `349`,
    575: `350`,
    576: `350`,
    577: `351`,
    578: `352`,
    579: `354`,
    58: `17`,
    580: `355`,
    581: `355`,
    582: `356`,
    583: `356`,
    584: `356`,
    585: `356`,
    586: `356`,
    587: `356`,
    588: `356`,
    589: `356`,
    59: `18`,
    590: `356`,
    591: `356`,
    592: `357`,
    593: `357`,
    594: `358`,
    595: `359`,
    596: `359`,
    597: `359`,
    598: `360`,
    599: `361`,
    6: `2`,
    60: `19`,
    600: `362`,
    601: `362`,
    602: `363`,
    603: `364`,
    604: `364`,
    605: `364`,
    606: `365`,
    607: `365`,
    608: `366`,
    609: `366`,
    61: `20`,
    610: `367`,
    611: `367`,
    612: `368`,
    613: `368`,
    614: `369`,
    615: `369`,
    616: `370`,
    617: `371`,
    618: `371`,
    619: `372`,
    62: `20`,
    620: `372`,
    621: `373`,
    622: `373`,
    623: `374`,
    624: `374`,
    625: `375`,
    626: `375`,
    627: `376`,
    628: `376`,
    629: `377`,
    63: `21`,
    630: `377`,
    631: `377`,
    632: `379`,
    633: `379`,
    634: `380`,
    635: `389`,
    636: `389`,
    637: `390`,
    638: `391`,
    639: `392`,
    64: `22`,
    640: `401`,
    641: `401`,
    642: `402`,
    643: `402`,
    644: `403`,
    645: `404`,
    646: `405`,
    647: `405`,
    648: `406`,
    649: `407`,
    65: `24`,
    650: `408`,
    651: `411`,
    652: `411`,
    653: `412`,
    654: `412`,
    655: `412`,
    656: `415`,
    657: `415`,
    658: `416`,
    659: `417`,
    66: `24`,
    660: `418`,
    661: `421`,
    662: `421`,
    663: `422`,
    664: `423`,
    665: `424`,
    666: `427`,
    667: `427`,
    668: `428`,
    669: `429`,
    67: `24`,
    670: `430`,
    671: `433`,
    672: `433`,
    673: `434`,
    674: `435`,
    675: `436`,
    676: `437`,
    677: `437`,
    678: `438`,
    679: `439`,
    68: `24`,
    680: `440`,
    681: `444`,
    682: `444`,
    683: `446`,
    684: `446`,
    685: `447`,
    686: `447`,
    687: `447`,
    688: `448`,
    689: `448`,
    69: `24`,
    690: `449`,
    691: `450`,
    692: `451`,
    693: `452`,
    694: `452`,
    695: `453`,
    696: `454`,
    697: `455`,
    698: `459`,
    699: `461`,
    7: `2`,
    70: `24`,
    700: `461`,
    701: `463`,
    702: `463`,
    703: `464`,
    704: `464`,
    705: `464`,
    706: `465`,
    707: `465`,
    708: `465`,
    709: `465`,
    71: `24`,
    710: `465`,
    711: `465`,
    712: `465`,
    713: `465`,
    714: `466`,
    715: `466`,
    716: `467`,
    717: `468`,
    718: `468`,
    719: `469`,
    72: `24`,
    720: `470`,
    721: `470`,
    722: `471`,
    723: `472`,
    724: `474`,
    725: `475`,
    726: `475`,
    727: `476`,
    728: `476`,
    729: `476`,
    73: `24`,
    730: `476`,
    731: `476`,
    732: `476`,
    733: `476`,
    734: `476`,
    735: `476`,
    736: `476`,
    737: `477`,
    738: `477`,
    739: `478`,
    74: `24`,
    740: `479`,
    741: `479`,
    742: `479`,
    743: `480`,
    744: `481`,
    745: `482`,
    746: `482`,
    747: `483`,
    748: `484`,
    749: `484`,
    75: `24`,
    750: `484`,
    751: `485`,
    752: `485`,
    753: `486`,
    754: `486`,
    755: `487`,
    756: `487`,
    757: `488`,
    758: `488`,
    759: `489`,
    76: `24`,
    760: `489`,
    761: `490`,
    762: `491`,
    763: `491`,
    764: `492`,
    765: `492`,
    766: `493`,
    767: `493`,
    768: `494`,
    769: `494`,
    77: `24`,
    770: `495`,
    771: `495`,
    772: `496`,
    773: `496`,
    774: `497`,
    775: `497`,
    776: `497`,
    777: `499`,
    778: `499`,
    779: `500`,
    78: `24`,
    780: `500`,
    781: `500`,
    782: `501`,
    783: `501`,
    784: `502`,
    785: `502`,
    786: `503`,
    787: `503`,
    788: `504`,
    789: `505`,
    79: `24`,
    790: `514`,
    791: `514`,
    792: `515`,
    793: `516`,
    794: `517`,
    795: `517`,
    796: `518`,
    797: `518`,
    798: `519`,
    799: `520`,
    8: `2`,
    80: `24`,
    800: `521`,
    801: `521`,
    802: `522`,
    803: `522`,
    804: `523`,
    805: `523`,
    806: `524`,
    807: `525`,
    808: `525`,
    809: `526`,
    81: `24`,
    810: `526`,
    811: `527`,
    812: `528`,
    813: `529`,
    814: `532`,
    815: `532`,
    816: `533`,
    817: `533`,
    818: `534`,
    819: `535`,
    82: `24`,
    820: `536`,
    821: `536`,
    822: `537`,
    823: `538`,
    824: `539`,
    825: `542`,
    826: `542`,
    827: `543`,
    828: `543`,
    829: `544`,
    83: `24`,
    830: `544`,
    831: `545`,
    832: `546`,
    833: `546`,
    834: `547`,
    835: `547`,
    836: `548`,
    837: `548`,
    838: `549`,
    839: `549`,
    84: `24`,
    840: `550`,
    841: `550`,
    842: `551`,
    843: `551`,
    844: `551`,
    845: `554`,
    846: `554`,
    847: `555`,
    848: `555`,
    849: `555`,
    85: `24`,
    850: `556`,
    851: `557`,
    852: `557`,
    853: `558`,
    854: `559`,
    855: `560`,
    856: `560`,
    857: `561`,
    858: `562`,
    859: `563`,
    86: `24`,
    860: `563`,
    861: `564`,
    862: `565`,
    863: `566`,
    864: `569`,
    865: `569`,
    866: `570`,
    867: `570`,
    868: `571`,
    869: `571`,
    87: `24`,
    870: `572`,
    871: `573`,
    872: `573`,
    873: `574`,
    874: `574`,
    875: `575`,
    876: `575`,
    877: `576`,
    878: `576`,
    879: `577`,
    88: `24`,
    880: `577`,
    881: `578`,
    882: `578`,
    883: `578`,
    884: `581`,
    885: `581`,
    886: `582`,
    887: `582`,
    888: `582`,
    889: `583`,
    89: `24`,
    890: `584`,
    891: `584`,
    892: `585`,
    893: `586`,
    894: `587`,
    895: `587`,
    896: `588`,
    897: `589`,
    898: `590`,
    899: `590`,
    9: `2`,
    90: `24`,
    900: `591`,
    901: `592`,
    902: `593`,
    903: `596`,
    904: `596`,
    905: `597`,
    906: `597`,
    907: `598`,
    908: `598`,
    909: `599`,
    91: `24`,
    910: `600`,
    911: `600`,
    912: `601`,
    913: `601`,
    914: `602`,
    915: `602`,
    916: `603`,
    917: `603`,
    918: `604`,
    919: `604`,
    92: `24`,
    920: `605`,
    921: `605`,
    922: `605`,
    923: `608`,
    924: `608`,
    925: `609`,
    926: `609`,
    927: `609`,
    928: `610`,
    929: `610`,
    93: `24`,
    930: `610`,
    931: `611`,
    932: `611`,
    933: `612`,
    934: `612`,
    935: `612`,
    936: `613`,
    937: `613`,
    938: `613`,
    939: `614`,
    94: `24`,
    940: `615`,
    941: `615`,
    942: `616`,
    943: `616`,
    944: `616`,
    945: `617`,
    946: `617`,
    947: `617`,
    948: `618`,
    949: `619`,
    95: `24`,
    950: `619`,
    951: `620`,
    952: `620`,
    953: `620`,
    954: `620`,
    955: `620`,
    956: `620`,
    957: `621`,
    958: `621`,
    959: `622`,
    96: `24`,
    960: `623`,
    961: `625`,
    962: `626`,
    963: `626`,
    964: `627`,
    965: `627`,
    966: `627`,
    967: `627`,
    968: `627`,
    969: `627`,
    97: `24`,
    970: `627`,
    971: `627`,
    972: `627`,
    973: `627`,
    974: `628`,
    975: `628`,
    976: `629`,
    977: `630`,
    978: `630`,
    979: `630`,
    98: `24`,
    980: `631`,
    981: `632`,
    982: `633`,
    983: `633`,
    984: `634`,
    985: `635`,
    986: `635`,
    987: `635`,
    988: `636`,
    989: `636`,
    99: `24`,
    990: `637`,
    991: `637`,
    992: `638`,
    993: `638`,
    994: `639`,
    995: `639`,
    996: `640`,
    997: `640`,
    998: `641`,
    999: `641`
  },
  appClear: `CA==`,
  appClearMap: {},
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 298,
  unsupported: [],
  version: 13,
  warnings: []
};
var _ETH2 = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T9","name":"v17935","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_bronze0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_gold0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_silver0_907","type":"bool"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_restock0_907","type":"tuple"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_set_prices0_907","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_907","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10187","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10818","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v12136","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6735","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7536","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8226","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8916","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v9552","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"price_change","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes6","name":"v0","type":"bytes6"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"restock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"terminate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17938","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17941","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_bronze0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_gold0_907","type":"bool"},{"internalType":"bool","name":"_buyer_api_silver0_907","type":"bool"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_restock0_907","type":"tuple"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_set_prices0_907","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_907","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_907","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v17944","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_bronze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_gold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_silver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"coin_prices","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coin_supply","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"v17914","type":"uint256[3]"}],"name":"controller_api_restock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"v17920","type":"uint256[3]"}],"name":"controller_api_set_prices","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_terminate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_toggle_pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"is_paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62004b3838819003918201601f19168301916001600160401b0383118484101762000707578084926080946040528339810103126200094b5760405190608082016001600160401b03811183821017620007075762000093916060916040528051845262000074602082016200096c565b602085015262000087604082016200096c565b6040850152016200096c565b60608201524360035560405161018081016001600160401b03811182821017620007075760009161016091604052828152826020820152826040820152826060820152604051620000e48162000950565b60603682376080820152604051620000fc8162000950565b606036823760a08201528260c08201528260e0820152826101008201528261012082015282610140820152015260405160e0810181811060018060401b0382111762000707576040526200014f62000981565b81526200015b620009a2565b60208201526200016a620009a2565b604082015262000179620009a2565b606082015260006080820152600060a0820152600060c082015260ff6004541662000932577f445f7d1d3c7ecf7a61d6d64c4194290a54beada7275d0418d50b9c355c8b665360a060405133815284516020820152600180831b036020860151166040820152600180831b036040860151166060820152600180831b036060860151166080820152a18151801590811562000925575b50156200090c57600081515260006020825101526000604082510152805160208201515280516020808301510152805160406020830151015260208101518051604060208201519101511515604051916200026a8362000950565b600083526020830152604082015262000282620009a2565b9160005b60038110620008d25750508152806040830152602081015160406020820151910151151560405191620002b98362000950565b6000835260208301526040820152620002d1620009a2565b9160005b60038110620008985750506020820152606082015260018060a01b0360408301511660018060a01b0360208401511614600014620008905760005b15620008775760608201805160208401516001600160a01b0391821690821614608084018190529151604085015182169116036200086f5760005b1515908160a084015260001462000869575060005b1562000850573462000837573360c0820152602082015160408301516001600160a01b039081169116036200082f5760005b156200081657602082015160608301516001600160a01b039081169116036200080e5760005b15620007f557604082015160608301516001600160a01b03908116911603620007ed5760005b15620007d457608081015115620007cc5760005b15620007b35760a0810151156200079a57604051916001600160401b0360c0840190811190841117620007075760c083016040526000835260006020840152600060408401526000606084015262000449620009a2565b6080840152600060a08401523383526020818101516001600160a01b0390811682860152604080840151821681870152606093840151909116838601529183015180830151918201519183015192519092909190151590620004ab8362000950565b6000835260208301526040820152620004c3620009a2565b9160005b600381106200074a5750506040820152608083015260c060018060a01b039101511660a08201526001600055436001556040519060018060a01b03815116602083015260018060a01b03602082015116604083015260018060a01b03604082015116606083015260018060a01b036060820151166080830152608081015160a083016000905b600382106200071d5750505060a001516001600160a01b03166101c08281019190915281526101e081016001600160401b03811182821017620007075760405280516001600160401b0381116200070757600254600181811c91168015620006fc575b6020821014620006e657601f81116200067c575b50602091601f8211600114620006125791819260009262000606575b50508160011b916000199060031b1c1916176002555b604051614135908162000a038239f35b015190503880620005e0565b601f19821692600260005260206000209160005b858110620006635750836001951062000649575b505050811b01600255620005f6565b015160001960f88460031b161c191690553880806200063a565b9192602060018192868501518155019401920162000626565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620006db575b601f0160051c01905b818110620006ce5750620005c4565b60008155600101620006bf565b9091508190620006b6565b634e487b7160e01b600052602260045260246000fd5b90607f1690620005b0565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200054d565b620007568183620009da565b51620007638286620009da565b52620007708185620009da565b5060001981146200078457600101620004c7565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b6001620003f2565b60405163100960cb60e01b815260146004820152602490fd5b6001620003de565b60405163100960cb60e01b815260136004820152602490fd5b6001620003b8565b60405163100960cb60e01b815260126004820152602490fd5b600162000392565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b62000360565b60016200034b565b60405163100960cb60e01b8152600f6004820152602490fd5b600162000310565b620008a48183620009da565b51620008b18286620009da565b52620008be8185620009da565b5060001981146200078457600101620002d5565b620008de8183620009da565b51620008eb8286620009da565b52620008f88185620009da565b506000198114620007845760010162000286565b60405163100960cb60e01b8152600e6004820152602490fd5b905060015414386200020f565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b606081019081106001600160401b038211176200070757604052565b51906001600160a01b03821682036200094b57565b60405190620009908262000950565b60006040838281528260208201520152565b60405190620009b18262000950565b8160005b60608110620009c2575050565b602090620009cf62000981565b8184015201620009b5565b906003811015620009ec5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461016c57806341712c0a14610163578063573b85101461015a57806358d058cf1461015157806378d83cd9146101485780638039fb9f1461013f578063832307571461013657806388e5518f1461012d5780638c3004551461012457806395e549c61461011b5780639d4f8aa914610112578063ab53f2c614610109578063abc8014a14610100578063c2e3cb94146100f7578063e091078a146100ee578063e30a7e8f146100e55763ec8fb8110361000e576100e0610b03565b61000e565b506100e0610a89565b506100e0610a1b565b506100e06109db565b506100e061099b565b506100e0610926565b506100e061088c565b506100e0610812565b506100e061074c565b506100e06106d2565b506100e06106b3565b506100e0610672565b506100e0610634565b506100e06105db565b506100e0610423565b506100e06101a1565b503461018b57600036600319011261018b576020600354604051908152f35b600080fd5b602090600319011261018b57600490565b506101be6101ae36610190565b6101b6610e33565b503690610ec3565b6101c6612274565b6103c86000916101d960038454146111d1565b6101e1610ce7565b6101f56020918280825183010191016122df565b9161021161020c61020860045460ff1690565b1590565b6111f1565b61025a6040967fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e85158851806102468433836110a7565b0390a1518015908115610417575b50611211565b6102643415611231565b6103a2608084019260018060a01b039233846102808751610f1f565b1603610400576102906001611251565b878080806102a66102a18a51610f1f565b610f1f565b6101008b0151908282156103f7575bf1156103ea575b87815261039d6103048960e08901516102ff8d6101208c0151906102e6818a840151930151151590565b916102ef610d92565b9586528986015284019015159052565b6125c8565b838301908152610333610319858a0151610f1f565b6103238951610f1f565b90886101408c01519216906124c5565b610374610341825160200190565b51518c6101608b019182519003950194855261035f8d8b0151610f1f565b8861036a8b51610f1f565b92519216906124c5565b51915192808301518b8282015191015115159161038f610d92565b95865285015215158a840152565b61262c565b506101806103bd6103b66060860151610f1f565b9351610f1f565b9301519216906124c5565b80556103d46000600155565b6103dc6123e0565b5160008152602090f35b0390f35b6103f26123d3565b6102bc565b506108fc6102b5565b610290336104116102a18951610f1f565b14611251565b90506001541438610254565b506105c36104336101ae36610190565b608061043d610ee1565b9161044c600160005414611271565b6104c561046961045a610ce7565b60208082518301019101610ffe565b9161048161047c61020860045460ff1690565b611291565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806104b18433836110a7565b0390a15180159081156105cf575b506112b1565b6104cf34156112d1565b6104eb3360018060a01b036104e48451610f1f565b16146112f1565b629896808351526301312d00610502845160200190565b526301c9c380610513845160400190565b5261051c611139565b9261053061052a8351610f1f565b856111c2565b6105496105406020840151610f1f565b602086016111c2565b6105626105596040840151610f1f565b604086016111c2565b61057b6105726060840151610f1f565b606086016111c2565b61059361058b60a0840151610f1f565b8486016111c2565b5160a0840152600060c0840152600060e08401524361010084015201516101208201526000610140820152611f28565b60405160008152602090f35b905060015414386104bf565b50600036600319011261018b57602060606105f4610e33565b610628816106006140aa565b85810190600282515251151585825101526106196140aa565b90600082525186820152612bb2565b01511515604051908152f35b50600036600319011261018b576020604061064d610e33565b610628816106596140aa565b85810190600182515251151585825101526106196140aa565b50600036600319011261018b57602061014061068c610e33565b610628816106986140aa565b858101906007825152511515610100825101526106196140aa565b503461018b57600036600319011261018b576020600154604051908152f35b50600036600319011261018b576020806106ea610e33565b610628816106f66140aa565b848101906000825152511515858251015261070f6140aa565b90600082525185820152612bb2565b6060810192916000915b6003831061073557505050565b600190825181526020809101920192019190610728565b503461018b57600036600319011261018b57606060405161076c81610c57565b3690376103e660a061077c610e33565b60005460058110156107c65760036107949114611331565b6101a06107b16107a2610ce7565b602080825183010191016122df565b0151828201525b01516040519182918261071e565b60056107d29114611311565b6102406107ef6107e0610ce7565b60208082518301019101612931565b0151828201526107b8565b606060031982011261018b5760641161018b57600490565b5061081c366107fa565b610824610e33565b6040519061083182610c57565b606083018236821161018b57602094905b82821061087d575050506106288160e09361085b6140c6565b908151528581019061086e825160049052565b5160a0825101526106196140aa565b81358152908501908501610842565b503461018b57600036600319011261018b576103e66108e96101606108af610e33565b60005460058110156108fb5760036108c79114611371565b6108da6108e160c06108da6107a2610ce7565b0151151590565b151582840152565b60405190151581529081906020820190565b60056109079114611351565b61092160c06109176107e0610ce7565b0151151582840152565b6108da565b503461018b57600080600319360112610998578054610943610ce7565b906040519283918252602090604082840152835191826040850152815b83811061098157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610960565b80fd5b50600036600319011261018b5760206101006109b5610e33565b610628816109c16140aa565b85810190600582515251151560c0825101526106196140aa565b50600036600319011261018b5760206101206109f5610e33565b61062881610a016140aa565b85810190600682515251151560e0825101526106196140aa565b503461018b57600036600319011261018b576060604051610a3b81610c57565b3690376103e66080610a4b610e33565b6000546005811015610a70576003610a6391146113b1565b60a06107b16107a2610ce7565b6005610a7c9114611391565b60a06107ef6107e0610ce7565b50610a93366107fa565b610a9b610e33565b60405190610aa882610c57565b606083018236821161018b57602094905b828210610af4575050506106288160c093610ad26140c6565b9081515285810190610ae5825160039052565b516080825101526106196140aa565b81358152908501908501610ab9565b506101c036600319011261018b57610b19610e33565b60405190610b2682610c14565b60043582526101a036602319011261018b576105c391610b44610d9f565b610b4c612725565b8152610b56612734565b6020820152610b63612741565b6040820152610b7061274e565b6060820152610b7e36612785565b6080820152610b8c366127e2565b60a0820152610b9961275b565b60c0820152610ba6612769565b60e0820152610bb3612777565b6101008201526020820152612bb2565b90600182811c92168015610bf3575b6020831014610bdd57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610bd2565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610c2f57604052565b610c37610bfd565b604052565b602081019081106001600160401b03821117610c2f57604052565b606081019081106001600160401b03821117610c2f57604052565b6101c081019081106001600160401b03821117610c2f57604052565b608081019081106001600160401b03821117610c2f57604052565b60a081019081106001600160401b03821117610c2f57604052565b601f909101601f19168101906001600160401b03821190821017610c2f57604052565b6040519060008260025491610cfb83610bc3565b808352600193808516908115610d715750600114610d23575b50610d2192500383610cc4565b565b600260009081526000805160206140e983398151915294602093509091905b818310610d59575050610d21935082010138610d14565b85548884018501529485019487945091830191610d42565b9050610d2194506020925060ff191682840152151560051b82010138610d14565b60405190610d2182610c57565b6040519061012082016001600160401b03811183821017610c2f57604052565b604051906102c082016001600160401b03811183821017610c2f57604052565b604051906101c082016001600160401b03811183821017610c2f57604052565b6040519061034082016001600160401b03811183821017610c2f57604052565b60405190610e2c82610c57565b6060368337565b6040519061018082016001600160401b03811183821017610eb6575b60405281610160600091828152826020820152826040820152826060820152604051610e7a81610c57565b60603682376080820152610e8c610e1f565b60a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b610ebe610bfd565b610e4f565b919082602091031261018b57604051610edb81610c3c565b91358252565b60405190602082016001600160401b03811183821017610f12575b8060405282610f0a82610c57565b606036833752565b610f1a610bfd565b610efc565b6001600160a01b031690565b51906001600160a01b038216820361018b57565b8015150361018b57565b5190610d2182610f3f565b919082606091031261018b57604051606081016001600160401b03811182821017610fa0575b60405260408082948051845260208101516020850152015191610f9c83610f3f565b0152565b610fa8610bfd565b610f7a565b81601f8201121561018b5760405191610fc583610c57565b829061012083019281841161018b57915b838310610fe4575050505090565b6020606091610ff38486610f54565b815201920191610fd6565b6101c08183031261018b5760405191611085916101a09161107a9060c086016001600160401b0381118782101761108d575b60405261103c83610f2b565b865261104a60208401610f2b565b602087015261105b60408401610f2b565b604087015261106c60608401610f2b565b606087015260808301610fad565b608085015201610f2b565b60a082015290565b611095610bfd565b611030565b6001600160a01b03169052565b6001600160a01b0390911681529051602082015260400190565b9060038110156110d25760051b0190565b634e487b7160e01b600052603260045260246000fd5b604051906110f582610c57565b60006040838281528260208201520152565b6040519061111482610c57565b8160005b60608110611124575050565b60209061112f6110e8565b8184015201611118565b6040519061016082016001600160401b038111838210176111b5575b6040528161014060009182815282602082015282604082015282606082015282608082015260405161118681610c57565b606036823760a08201528260c08201528260e0820152826101008201526111ab611107565b6101208201520152565b6111bd610bfd565b611155565b6001600160a01b039091169052565b156111d857565b60405163100960cb60e01b8152601c6004820152602490fd5b156111f857565b60405163100960cb60e01b8152601d6004820152602490fd5b1561121857565b60405163100960cb60e01b8152601e6004820152602490fd5b1561123857565b60405163100960cb60e01b8152601f6004820152602490fd5b1561125857565b60405163100960cb60e01b815260206004820152602490fd5b1561127857565b60405163100960cb60e01b815260176004820152602490fd5b1561129857565b60405163100960cb60e01b815260186004820152602490fd5b156112b857565b60405163100960cb60e01b815260196004820152602490fd5b156112d857565b60405163100960cb60e01b8152601a6004820152602490fd5b156112f857565b60405163100960cb60e01b8152601b6004820152602490fd5b1561131857565b60405163100960cb60e01b8152600a6004820152602490fd5b1561133857565b60405163100960cb60e01b815260096004820152602490fd5b1561135857565b60405163100960cb60e01b8152600c6004820152602490fd5b1561137857565b60405163100960cb60e01b8152600b6004820152602490fd5b1561139857565b60405163100960cb60e01b815260086004820152602490fd5b156113b857565b60405163100960cb60e01b815260076004820152602490fd5b156113d857565b60405163100960cb60e01b815260256004820152602490fd5b156113f857565b60405163100960cb60e01b815260266004820152602490fd5b1561141857565b60405163100960cb60e01b815260276004820152602490fd5b1561143857565b60405163100960cb60e01b815260706004820152602490fd5b1561145857565b60405163100960cb60e01b815260726004820152602490fd5b1561147857565b60405163100960cb60e01b815260746004820152602490fd5b1561149857565b60405163100960cb60e01b815260766004820152602490fd5b156114b857565b60405163100960cb60e01b815260786004820152602490fd5b156114d857565b60405163100960cb60e01b815260676004820152602490fd5b156114f857565b60405163100960cb60e01b815260696004820152602490fd5b1561151857565b60405163100960cb60e01b8152606b6004820152602490fd5b1561153857565b60405163100960cb60e01b8152606d6004820152602490fd5b1561155857565b60405163100960cb60e01b8152606f6004820152602490fd5b1561157857565b60405163100960cb60e01b8152605e6004820152602490fd5b1561159857565b60405163100960cb60e01b815260606004820152602490fd5b156115b857565b60405163100960cb60e01b815260626004820152602490fd5b156115d857565b60405163100960cb60e01b815260646004820152602490fd5b156115f857565b60405163100960cb60e01b815260666004820152602490fd5b1561161857565b60405163100960cb60e01b815260556004820152602490fd5b1561163857565b60405163100960cb60e01b815260576004820152602490fd5b1561165857565b60405163100960cb60e01b815260596004820152602490fd5b1561167857565b60405163100960cb60e01b8152605b6004820152602490fd5b1561169857565b60405163100960cb60e01b8152605d6004820152602490fd5b156116b857565b60405163100960cb60e01b8152604c6004820152602490fd5b156116d857565b60405163100960cb60e01b8152604e6004820152602490fd5b156116f857565b60405163100960cb60e01b815260506004820152602490fd5b1561171857565b60405163100960cb60e01b815260526004820152602490fd5b1561173857565b60405163100960cb60e01b815260546004820152602490fd5b1561175857565b602460405163100960cb60e01b815260406004820152fd5b1561177757565b60405163100960cb60e01b815260416004820152602490fd5b1561179757565b60405163100960cb60e01b815260436004820152602490fd5b156117b757565b60405163100960cb60e01b815260456004820152602490fd5b156117d757565b60405163100960cb60e01b815260476004820152602490fd5b156117f757565b60405163100960cb60e01b815260496004820152602490fd5b1561181757565b60405163100960cb60e01b815260346004820152602490fd5b1561183757565b60405163100960cb60e01b815260356004820152602490fd5b1561185757565b60405163100960cb60e01b815260376004820152602490fd5b1561187757565b60405163100960cb60e01b815260396004820152602490fd5b1561189757565b60405163100960cb60e01b8152603b6004820152602490fd5b156118b757565b60405163100960cb60e01b8152603d6004820152602490fd5b156118d757565b60405163100960cb60e01b815260286004820152602490fd5b156118f757565b60405163100960cb60e01b815260296004820152602490fd5b1561191757565b60405163100960cb60e01b8152602b6004820152602490fd5b1561193757565b60405163100960cb60e01b8152602d6004820152602490fd5b1561195757565b60405163100960cb60e01b8152602f6004820152602490fd5b1561197757565b60405163100960cb60e01b815260316004820152602490fd5b6040519061199d82610c14565b816040516119aa81610c57565b606036823781526020604051916119c083610c57565b60603684370152565b6119d1610dbf565b9060008083528060208401528060408401528060608401528060808401526119f7610e1f565b60a08401528060c08401528060e0840152611a10611107565b610100840152806101208401528061014084015280610160840152611a336110e8565b610180840152806101a0840152611a486110e8565b6101c0840152806101e0840152611a5d6110e8565b61020084015280610220840152611a72610e1f565b61024084015280610260840152806102808401526102a0830152565b6000915b60038310611a9f57505050565b600190825181526020809101920192019190611a92565b60408091805184526020810151602085015201511515910152565b906000905b60038210611ae357505050565b6020606082611af56001948751611ab6565b01930191019091611ad6565b9190916104e0610500820193611b1883825161109a565b611b2a6020820151602085019061109a565b611b3c6040820151604085019061109a565b611b4e6060820151606085019061109a565b611b606080820151608085019061109a565b611b7260a082015160a0850190611a8e565b60c081015190611b89610100928386019015159052565b60e081015191611ba0610120938487019015159052565b81015191611bb46101409384870190611ad1565b810151916102609283860152810151611bd4610280918287019015159052565b61016082015192611bec6102a0948588019015159052565b611c006101808401516102c0880190611ab6565b6101a0830151610320870152611c206101c0840151610340880190611ab6565b6101e08301516103a0870152611c406102008401516103c0880190611ab6565b610220830151610420870152611c60610240840151610440880190611a8e565b8201516104a08601528101516104c08501520151910152565b818110611c84575050565b60008155600101611c79565b90601f8211611c9d575050565b610d219160026000526020600020906020601f840160051c83019310611ccb575b601f0160051c0190611c79565b9091508190611cbe565b80519091906001600160401b038111611dab575b611cfd81611cf8600254610bc3565b611c90565b602080601f8311600114611d395750819293600092611d2e575b50508160011b916000199060031b1c191617600255565b015190503880611d17565b6002600052601f198316949091906000805160206140e9833981519152926000905b878210611d93575050836001959610611d7a575b505050811b01600255565b015160001960f88460031b161c19169055388080611d6f565b80600185968294968601518155019501930190611d5b565b611db3610bfd565b611ce9565b60405190611dc582610c72565b816000808252806020830152806040830152806060830152806080830152611deb610e1f565b60a08301528060c0830152611dfe611107565b60e083015280610100830152611e126110e8565b61012083015280610140830152806101608301526101808201526101a0611e37610e1f565b910152565b610d21909291926103206101a0610380830195611e5a84825161109a565b611e6c6020820151602086019061109a565b611e7e6040820151604086019061109a565b611e906060820151606086019061109a565b611ea26080820151608086019061109a565b611eb460a082015160a0860190611a8e565b611efa60c0820151611ecd610100918288019015159052565b60e083015190611ee36101209283890190611ad1565b830151610240870152820151610260860190611ab6565b6101408101516102c08501526101608101516102e08501526101808101516103008501520151910190611a8e565b611f30611990565b60e08201511561209a57612095610d2192612087926120566101209283810190602082515151940193845152611f67825160200190565b515184516020015281516040015151845160400152611f84611db8565b94611f98611f928351610f1f565b876111c2565b611fb1611fa86020840151610f1f565b602088016111c2565b611fca611fc16040840151610f1f565b604088016111c2565b611fe3611fda6060840151610f1f565b606088016111c2565b611ffc611ff36080840151610f1f565b608088016111c2565b60a082015160a087015261201f61201660c0840151151590565b151560c0880152565b825160e087015261014091820151610100870152825151908601528151515190850152805160200151516101608501525160400190565b5151610180830152516101a082015261206f6003600055565b61207843600155565b60405192839160208301611e3c565b03601f198101835282610cc4565b611cd5565b61209561208791612239610d21946101209261220e848301805151518351526120c4815160200190565b5151835160200152805160400151518351604001526121ba6120e46119c9565b966120f86120f28751610f1f565b896111c2565b6121116121086020880151610f1f565b60208a016111c2565b61212a6121216040880151610f1f565b60408a016111c2565b61214361213a6060880151610f1f565b60608a016111c2565b61215c6121536080880151610f1f565b60808a016111c2565b6121b460a0870196875160a08b015260c081019261218661217d8551151590565b151560c08d0152565b600060e08c015285516101008c015261014091820151908b015282511561226c576000905b8a019015159052565b51151590565b15612262576121cf60005b1515610160880152565b805151610180870152805151516101a08701528051602001516101c0870152805160200151516101e08701528051604001516102008701525160400190565b5151610220850152516102408401528051516102608401528051602001516102808401525160400190565b516102a082015261224a6005600055565b61225343600155565b60405192839160208301611b01565b6121cf60016121c5565b6001906121ab565b6040519061228182610c57565b6000604083828152612291611107565b60208201520152565b9080601f8301121561018b57604051916122b383610c57565b82906060810192831161018b57905b8282106122cf5750505090565b81518152602091820191016122c2565b906103808282031261018b576123ca906103206122fa610ddf565b9361230481610f2b565b855261231260208201610f2b565b602086015261232360408201610f2b565b604086015261233460608201610f2b565b606086015261234560808201610f2b565b60808601526123578360a0830161229a565b60a086015261010061236a818301610f49565b60c08701526101209061237f85838501610fad565b60e08801526102408301519087015261239c846102608401610f54565b908601526102c08101516101408601526102e08101516101608601526103008101516101808601520161229a565b6101a082015290565b506040513d6000823e3d90fd5b6123eb600254610bc3565b806123f35750565b601f811160011461240657506000600255565b600260005261244b90601f0160051c6000805160206140e9833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611c79565b6000602081208160025555565b600080916124be938260405191602083019263a9059cbb60e01b845260018060a01b038092166024820152600160448201526044815261249781610c8e565b5193165af16124ae6124a7612503565b8092612568565b5060208082518301019101612550565b1561018b57565b600091906124be93838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261249781610c8e565b3d1561254b573d906001600160401b03821161253e575b60405191612532601f8201601f191660200184610cc4565b82523d6000602084013e565b612546610bfd565b61251a565b606090565b9081602091031261018b575161256581610f3f565b90565b156125705790565b80511561257f57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156125a05790565b8051156125af57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b91906125d2611107565b926000805b600381106125e6575050508252565b6125f081846110c1565b516125fb82886110c1565b5261260681876110c1565b506000198114612618576001016125d7565b634e487b7160e01b82526011600452602482fd5b9190612636611107565b926000805b6003811061264d575050506020830152565b61265781846110c1565b5161266282886110c1565b5261266d81876110c1565b5060001981146126185760010161263b565b9190612689611107565b926000805b600381106126a0575050506020830152565b6126aa81846110c1565b516126b582886110c1565b526126c081876110c1565b5060001981146126185760010161268e565b91906126dc611107565b926000805b600381106126f3575050506040830152565b6126fd81846110c1565b5161270882886110c1565b5261271381876110c1565b506000198114612618576001016126e1565b60243590600882101561018b57565b60443590610d2182610f3f565b60643590610d2182610f3f565b60843590610d2182610f3f565b6101643590610d2182610f3f565b6101843590610d2182610f3f565b6101a43590610d2182610f3f565b90606060a31983011261018b576040519161279f83610c3c565b828160c3121561018b57604051916127b683610c57565b8261010491821161018b5760a4905b8282106127d25750505052565b81358152602091820191016127c5565b9060606101031983011261018b57604051916127fd83610c3c565b8281610123121561018b576040519161281583610c57565b8261016491821161018b57610104905b8282106128325750505052565b8135815260209182019101612825565b61284a610dff565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015261289e610ee1565b610180840152806101a08401526128b3611107565b6101c0840152806101e08401526128c8611107565b610200840152806102208401526128dd611107565b6102408401526128eb610e1f565b6102608401526128f9610ee1565b610280840152806102a084015261290e611107565b6102c0840152806102e0840152612923611107565b610300840152610320830152565b906105008282031261018b576104e0612948610dbf565b9261295281610f2b565b845261296060208201610f2b565b602085015261297160408201610f2b565b604085015261298260608201610f2b565b606085015261299360808201610f2b565b60808501526129a58360a0830161229a565b60a08501526101006129b8818301610f49565b60c08601526101206129cb818401610f49565b60e0870152610140916129e086848601610fad565b90870152610260908184015190870152610280916129ff838501610f49565b90870152612a856102a095612a15878601610f49565b610160890152612a29816102c08701610f54565b6101808901526103208501516101a0890152612a49816103408701610f54565b6101c08901526103a08501516101e0890152612a69816103c08701610f54565b610200890152610420850151610220890152610440850161229a565b6102408701526104a0830151908601526104c08201519085015201519082015290565b60081115612ab257565b634e487b7160e01b600052602160045260246000fd5b90610d219151611a8e565b9092916020906101e083019460018060a01b031683528051828401520151908151916008831015612ab2576101006101c091610d21946040850152612b216020820151606086019015159052565b6040810151151560808501526060810151151560a0850152612b4b608082015160c0860190612ac8565b612b5e60a0820151610120860190612ac8565b60c0810151151561018085015260e081015115156101a085015201511515910152565b516008811015612ab25790565b6001600160d01b031990911681526001600160a01b03909116602082015260400190565b612bba612842565b600090612bca60058354146113d1565b612bd2610ce7565b612be6602091828082518301019101612931565b90612bfe612bf961020860045460ff1690565b6113f1565b806040957fbc261dc0b9d5223a35f41d8286b61aadce0823f37befb9919e54d2f33d75be49875180612c31843383612ad3565b0390a1612c4981518015908115613f8e575b50611411565b01612c548151612b81565b612c5d81612aa8565b612ecb5750612c78612c73610160840151151590565b6118d0565b6101a0820194612c8c6001875110156118f0565b61012094612caa868501516102608601908151018752513414611910565b82840197612cc9612cc4612cbe8b51610f1f565b33613f9a565b611930565b828501612ce1612cdc612cbe8351610f1f565b611950565b846060870192612cfc612cf7612cbe8651610f1f565b611970565b8189019a858c5260808901958080808d612d196102a18c51610f1f565b905190828215612ec2575bf115612eb5575b60001990510198868101998a52338d51612d4490610f1f565b90612d4e91612458565b606001612d63816562726f6e7a6560d01b9052565b516001600160d01b0319168651809133612d7d9183612b8e565b0360008051602061410983398151915291a18551600181527f275a7214291e59a0deb3f59b735f667a678f60b18191aa295d2a9b37ca09270790602090a16001910152612dc8611139565b998651612dd490610f1f565b612dde908c6111c2565b51612de890610f1f565b612df4908b87016111c2565b51612dfe90610f1f565b612e0a908a85016111c2565b51612e1490610f1f565b612e219060608a016111c2565b51612e2b90610f1f565b612e3890608089016111c2565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e0880152610100438189015283015193519261018001518183820151910151612e8290151590565b92612e8b610d92565b94855284015290151590820152612ea1916125c8565b9083015251610140820152610d2190611f28565b612ebd6123d3565b612d2b565b506108fc612d24565b6001612eda8297969751612b81565b612ee381612aa8565b0361313f5750612eff612efa610160840151151590565b611810565b610220820193612f13600186511015611830565b610120948584015190612f386102a08601928351019260808801938452513414611850565b83850198612f51612f4c612cbe8c51610f1f565b611870565b8380870191612f6b612f66612cbe8551610f1f565b611890565b6060880193612f85612f80612cbe8751610f1f565b6118b0565b60a08a019b808d5280808060808d0199612fa26102a18c51610f1f565b905190828215613136575bf115613129575b6000199051019860c08101998a52338551612fce90610f1f565b90612fd891612458565b60e001612feb816319dbdb1960e21b9052565b516001600160d01b03191682518091336130059183612b8e565b0360008051602061410983398151915291a18151600181527fbc754d5782696c22beefcb3d1af828c4baa77b640484add5a554898c81132f7190602090a16001910152613050611139565b99865161305c90610f1f565b613066908c6111c2565b5161307090610f1f565b61307c908b87016111c2565b5161308690610f1f565b613092908a85016111c2565b5161309c90610f1f565b6130a99060608a016111c2565b516130b390610f1f565b6130c090608089016111c2565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e088015261010043818901528301519351926102000151818382015191015161310a90151590565b92613113610d92565b94855284015290151590820152612ea1916126d2565b6131316123d3565b612fb4565b506108fc612fad565b6002613152829895979694939851612b81565b61315b81612aa8565b036133bd5750612cbe956101609261317d61317885850151151590565b611751565b6101e08301613190600182511015611770565b610120958685015191610280860192835101916131b861010094858d01948552513414611790565b6131ce6131c98789019d8e51610f1f565b6117b0565b848701906131e76131e2612cbe8451610f1f565b6117d0565b60608801926132016131fc612cbe8651610f1f565b6117f0565b8a8d019b808d5280808060808d019861321d6102a18b51610f1f565b9051908282156133b4575bf1156133a7575b600019905101986101409c8d81019a8b5233845161324c90610f1f565b9061325691612458565b6539b4b63b32b960d11b9101819052865190819061327690339083612b8e565b0360008051602061410983398151915291a18551600181527f46a1f4edf1778c5ccc0fe3306c541c90f2b8ff249f41e77806711719ad54730290602090a16060016132c19060019052565b6132c9611139565b9b8c88516132d690610f1f565b6132df916111c2565b516132e990610f1f565b6132f5908d88016111c2565b516132ff90610f1f565b61330b908c86016111c2565b5161331590610f1f565b6133229060608c016111c2565b5161332c90610f1f565b6133399060808b016111c2565b60a084810151908a015260c0808501511515908a015260e0808501511515908a015243818a015283015193516101c090930151828101519082015115159261337f610d92565b948552840152901515908201526133959161267f565b908401525190820152610d2190611f28565b6133af6123d3565b61322f565b506108fc613228565b90949360036133cf8395949551612b81565b6133d881612aa8565b036136d15750516080015161018092838501918252608086019283516133fd90610f1f565b61340690610f1f565b3314613411906116b1565b61341b34156116d1565b6101a0948588015184515151018096880152610100958689015191890151848b82015191015161344a90151590565b90613453610d92565b9283528b830152151584820152613469916125c8565b976101c0870198895280880198895161348190610f1f565b8551515161348f9133613ff5565b613498906116f1565b51818101805151865151602001510190816101e08b01525185848201519101511515906134c3610d92565b928352848301521515858201526134d99161267f565b9161020088019283528389019283516134f190610f1f565b865151602001516135029133613ff5565b61350b90611711565b51848101805151875151604001510190816102208c0152518685820151910151151590613536610d92565b9283528583015215158682015261354c916126d2565b97610240810198895260608a0195865161356590610f1f565b905151604001516135769133613ff5565b61357f90611731565b8851515190610260019081515288516135989060200190565b5151815160200152885160400151518151604001525184516135bb81928261071e565b037fb8a96d26a4213e516748843376cec5f4df7afc98082efc0fec9d7c25d87c83d791a18351600181527fc55cc6a5be3d3b33b13e26c38bdadfa311470e070b9f351303917b1c232a4f2b90602090a160c0016136189060019052565b613620611139565b98885161362c90610f1f565b613636908b6111c2565b5161364090610f1f565b61364b918a016111c2565b5161365590610f1f565b6136609188016111c2565b5161366a90610f1f565b61367790606087016111c2565b5161368190610f1f565b61368e90608086016111c2565b60a0838101519085015260c08084015115159085015260e080840151151590850152439084015251610120808401919091520151610140820152610d2190611f28565b60046136dd8351612b81565b6136e681612aa8565b036138b957505160a0015192610280019283526080840191825161370990610f1f565b61371290610f1f565b331461371d90611611565b6137273415611631565b85850195865161373690610f1f565b6137409033613f9a565b61374990611651565b81860190815161375890610f1f565b6137629033613f9a565b61376b90611671565b6060870193845161377b90610f1f565b6137859033613f9a565b61378e90611691565b865151845161379e81928261071e565b037fb235896a047b6551255fee8fc368ece195980b9dd364fadc7f3213480ebf236b91a18351600181527f17c36b319c317f1314cc76db67184419703710d155b96287d5d944b0c708542590602090a160e0016137fb9060019052565b613803611139565b97875161380f90610f1f565b613819908a6111c2565b5161382390610f1f565b61382e9189016111c2565b5161383890610f1f565b6138439187016111c2565b5161384d90610f1f565b61385a90606086016111c2565b5161386490610f1f565b61387190608085016111c2565b515160a083015260c08101511515151560c083015260e08101511515151560e083015261010043818401528101519061012091828401520151610140820152610d2190611f28565b91939060056138cb8298959851612b81565b6138d481612aa8565b03613a8857505050608083019081516138ec90610f1f565b6138f590610f1f565b331461390090611571565b61390a3415611591565b80840194855161391990610f1f565b6139239033613f9a565b61392c906115b1565b808501805161393a90610f1f565b6139449033613f9a565b61394d906115d1565b6060860192835161395d90610f1f565b6139679033613f9a565b613970906115f1565b8251600181527f8af42bd28821e762acc84f5b0c59d0453b2f4b842220b030e985c6ddef04ecb590602090a18251600181527f6a2be38ed730cab7dfdaa230bc7290731487e3ae644bd92b4e2ba27cabbec9bf90602090a16001610100968701526139d9611139565b9787516139e590610f1f565b6139ef908a6111c2565b516139f990610f1f565b613a049189016111c2565b51613a0e90610f1f565b613a199187016111c2565b51613a2390610f1f565b613a3090606086016111c2565b51613a3a90610f1f565b613a4790608085016111c2565b60a0828101519084015260c08201511515151560c0840152600160e084015243818401528101519061012091828401520151610140820152610d2190611f28565b6006613a98829897959851612b81565b613aa181612aa8565b03613c3f5750505060808101938451613ab990610f1f565b613ac290610f1f565b3314613acd906114d1565b613ad734156114f1565b808201948551613ae690610f1f565b613af09033613f9a565b613af990611511565b848301948551613b0890610f1f565b613b129033613f9a565b613b1b90611531565b60608401908151613b2b90610f1f565b613b359033613f9a565b613b3e90611551565b61014096878601948551613b5190151590565b835190151581527faffd766790646b24404003e84fc90e4f7861bd557f79d97ba33547ecc564239590602090a18551151561012098890152613b91611139565b998751613b9d90610f1f565b613ba7908c6111c2565b51613bb190610f1f565b613bbc918b016111c2565b51613bc690610f1f565b613bd19189016111c2565b51613bdb90610f1f565b613be890606088016111c2565b51613bf290610f1f565b613bff90608087016111c2565b60a08281015190860152511515151560c085015260e08101511515151560e0850152610100438186015281015182850152015190820152610d2190611f28565b613c526007919792949596939751612b81565b613c5b81612aa8565b14613c69575b505050505050565b608084018051613c7890610f1f565b613c8190610f1f565b3314613c8c90611431565b613c963415611451565b818501968751613ca590610f1f565b613caf9033613f9a565b613cb890611471565b6101e08601918487018051613ccc90610f1f565b613cd69033613f9a565b613cdf90611491565b61022088019060608901918251613cf590610f1f565b613cff9033613f9a565b613d08906114b1565b846102a08a015261010094858b0151906101808c01518a8a820151910151613d2f90151590565b90613d38610d92565b9283528a83015215158a820152613d4e916125c8565b906102c08a019182528c51613d6290610f1f565b918551613d6e90610f1f565b6101a08d01516001600160a01b0394613d89928616906124c5565b518a8982018051518a5190036102e081930152518b8b820151910151151590613db0610d92565b9283528b83015215158b820152613dc69161267f565b966103008b019788528351613dda90610f1f565b90838751613de790610f1f565b91519116613df4926124c5565b86516040015151815190039961032001998a528351613e1290610f1f565b918551613e1e90610f1f565b91519116613e2b926124c5565b6102408901518751613e3e81928261071e565b037fb1b8f1be6db5b05302e62b23bcf87ff659e3737b9e45384be6ee3b228350636291a18651600181527f4fc77c0b3fd73c4c7222328ebb849f8629d1431b0af25af1f803f7d6a59b10f590602090a160016101409a8b0152613e9f611139565b9a8951613eab90610f1f565b613eb5908d6111c2565b51613ebf90610f1f565b613ecb908c88016111c2565b51613ed590610f1f565b613ee1908b88016111c2565b51613eeb90610f1f565b613ef89060608b016111c2565b51613f0290610f1f565b613f0f9060808a016111c2565b60a0868101519089015260c08601511515151560c089015260e08601511515151560e0890152439088015251925191808401518183820151910151151592613f55610d92565b94855284015290151590820152613f6b916126d2565b906101209182850152015190820152613f8390611f28565b388080808080613c61565b90506001541438612c43565b6000612565928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152613fde81610ca9565b5193165af16124ae613fee612503565b8092612598565b6000916125659383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152613fde81610ca9565b6040519061012082016001600160401b0381118382101761409d575b6040528161010060009182815282602082015282604082015282606082015261407b610ee1565b6080820152614088610ee1565b60a08201528260c08201528260e08201520152565b6140a5610bfd565b614054565b604051906140b782610c14565b81600081526020611e37614038565b604051906140d382610c14565b816140dc610ee1565b81526020611e3761403856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace43559fdbda3802be12785165433940170227c305b1c57d809d0c2950cdff3037a164736f6c6343000811000a`,
  BytecodeLen: 19256,
  version: 9,
  views: {}
};
var _stateSourceMap2 = {
  1: {
    at: "./src/contracts/coin_shop.rsh:110:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  },
  3: {
    at: "./src/contracts/coin_shop.rsh:303:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  },
  4: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./src/contracts/coin_shop.rsh:304:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'
    ],
    msg: null,
    who: "Module"
  },
  5: {
    at: "./src/contracts/coin_shop.rsh:118:68:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module"
  }
};
var _Connectors2 = {
  ALGO: _ALGO2,
  ETH: _ETH2
};
var _Participants2 = {
  Admin: Admin2,
  Deployer: Deployer2,
  buyer_api_bronze,
  buyer_api_gold,
  buyer_api_silver,
  controller_api_restock,
  controller_api_set_prices,
  controller_api_terminate,
  controller_api_toggle_pause,
  controller_api_withdraw
};
var _APIs2 = {
  buyer_api: {
    bronze: buyer_api_bronze,
    gold: buyer_api_gold,
    silver: buyer_api_silver
  },
  controller_api: {
    restock: controller_api_restock,
    set_prices: controller_api_set_prices,
    terminate: controller_api_terminate,
    toggle_pause: controller_api_toggle_pause,
    withdraw: controller_api_withdraw
  }
};

// src/contracts/index.ts
var CONTRACT_BACKENDS = {
  coin_shop: exports_coin_shop_contract,
  summon: exports_summon_contract
};
var contracts_default = CONTRACT_BACKENDS;

// src/lib/utils/contract.ts
var getContractHandle = function(wallet, ctcName, ctcId) {
  return wallet.contract(contracts_default[ctcName], ctcId);
};
var deployContract = async (deployer, backend, participant, waitUntilCompletion = false) => {
  const deploy = deployer.contract(backend).p.Deployer;
  if (waitUntilCompletion) {
    let ctcId;
    let ctcAddr;
    await deploy({
      ...participant,
      deployed: (id, addr) => {
        ctcId = id;
        ctcAddr = addr;
      }
    });
    return [ctcId, ctcAddr];
  }
  return new Promise((resolve) => {
    deploy({
      ...participant,
      deployed: (ctcId, ctcAddr) => {
        resolve([ctcId, ctcAddr]);
      }
    });
  });
};
var attachContract = async (acc, backend, ctcId, participantName, participant) => {
  const participantAttach = acc.contract(backend, ctcId).p[participantName];
  if (participantAttach)
    return participantAttach(participant);
};

// src/lib/utils/index.ts
function formatTimestamp(timestamp) {
  return format(timestamp, "MMMM dd, yyyy hh:mm a 'UTC'xxx");
}
var makeRateLimiter = (rps = 60, threads = null) => new import_bottleneck.default({ minTime: 1000 / rps, maxConcurrent: threads });
var rateLimitedAxiosGET = () => makeRateLimiter(60, 3).wrap(async (url, config) => axios_default.get(url, config));
var shortenAddress = (addr) => {
  if (!addr)
    return "????...????";
  const start = addr.substring(0, 4);
  const end = addr.substring(addr.length - 4);
  return `${start}...${end}`;
};
export {
  shortenAddress,
  rateLimitedAxiosGET,
  makeRateLimiter,
  getContractHandle,
  formatTimestamp,
  deployContract,
  attachContract,
  WalletProvider,
  VisualTraitType,
  VISUAL_TRAITS,
  TRAIT_TYPES,
  SummonStatus,
  SummonEvent,
  Status,
  Result,
  RAW_IPFS_URL_PREFIX,
  RAW_IPFS_TEMPLATE_URL_PREFIX,
  PhantomBody,
  Participant,
  POTR_URL,
  MetaTraitType,
  META_TRAITS,
  IPFS_GATEWAY_URL_PREFIX,
  HumanoidMouth,
  HumanoidHead,
  HumanoidEyes,
  HumanoidBody,
  HumanoidBack,
  GolemMouth,
  GolemHead,
  GolemEyes,
  GolemBody,
  GolemBack,
  DragonMouth,
  DragonHead,
  DragonEyes,
  DragonBody,
  DragonBack,
  ContractName,
  CoinShopView,
  CoinShopEvent,
  CoinShopApi,
  Class,
  contracts_default as CONTRACT_BACKENDS,
  BaseClass,
  Background,
  BASE_CLASSES,
  asa_ids_default as ASA_IDS
};
