const less = require('less');
const {thunk}=require('./thunk');

let globalVal;
function run(fn) {
    let g = fn();

    function next(err, data) {
        let result = g.next(data);
        if (result.done) {
            globalVal = result;
            return;
        };
        result.value(next);
    }
    next();
    return globalVal.value.css;
}


module.exports = {
    parseLess: function (lessStr, opt) {
        let lessFn = less.render.bind(less);
        let lessThunk = thunk(lessFn);
        function* processLess() {
            let output = yield lessThunk(lessStr, opt);
            return output;
        }

        return run(processLess);
    }
}