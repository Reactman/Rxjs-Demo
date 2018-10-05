const RxService = require('./rx_service/RxService');
const NativeService = require('./native_service/nativeService');

/**
 *  This function is indicating difference of using Rxjs and Native-Js for the same query.
 *  And declear the sample when should we use Rxjs best.
 * 
 *  What the sample do:
 *      It's a simple sample that query result for what the user has input(naming 'confition' what follows), and what 
 *      should our code do is: 
 *      1. The space before or after the condition should be removed automatically. 
 *      2. Do query for user only the condition is stable in 1s.
 *      3. The query result should always map the newest condition. 
 *      4. There is no need to do the duplicate query when the current condition is the same to last condition.
 */
(function(window, document) {
    /**  RxJs query demo init */
    const rxQueryObserverSelector = document.querySelector('#rxQuery');
    const rxResultMapSelector = document.querySelector('#resultMapRx');
    const rxService = new RxService();
    rxService.create(rxQueryObserverSelector, rxResultMapSelector)

    /**  native js query demo init */
    const nativeQueryObserverSelector = document.querySelector('#nativeQuery');
    const nativeResultMapSelector = document.querySelector('#resultMapNative');
    const nativeService = new NativeService();
    nativeService.create(nativeQueryObserverSelector, nativeResultMapSelector);
})(window, document)