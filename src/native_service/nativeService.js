function NativeService () {
    
 }
 
 NativeService.prototype = {

    timer: null,

    lastestValue: null,

    preValue: null,

    create: function(observerSelector, resultMapSelector) {
        const self = this;
        observerSelector.addEventListener("keyup", () => {
            if(self.timer !== null) {
                clearTimeout(self.timer);
            }
            self.timer = setTimeout(() => {
                self.lastestValue = observerSelector.value.trim();
                if(self.lastestValue === self.preValue) {
                    return;
                }
                if(self.lastestValue === '') {
                    resultMapSelector.innerHTML = '';
                } else {
                    fetch('http://127.0.0.1:8088/api/rxquery?parame=' + self.lastestValue)
                        .then(res => res.json())
                        .then(result => {
                            if(result.code === '1' && result.mapValue === self.lastestValue) {
                                resultMapSelector.innerHTML = result.data
                            }
                        });
                }  
            }, 1000);
            
        });
    }
}

exports = module.exports = NativeService