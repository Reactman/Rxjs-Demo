const Rx = require('rxjs/Rx');

function RxService () {
   
}

RxService.prototype = {
     create: function(observerSelector, resultMapSelector) {
        const inputObserver = Rx.Observable.fromEvent(observerSelector, 'keyup')
        .debounce(() => Rx.Observable.interval(1000))
        .map(() => observerSelector.value.trim())
        .distinctUntilChanged()
        .switchMap((value) => {
            if(value === '') {
                const result = {code: "0", data: null};
                return new Promise((resolve, reject) => {
                    resolve(result)
                })
            } else {
               return fetch('http://127.0.0.1:8088/api/rxquery?parame=' + value)
                        .then(res => res.json());
            }
        })
      
        inputObserver.subscribe(
            res => resultMapSelector.innerHTML = res.data
        )
    }
}

exports = module.exports = RxService