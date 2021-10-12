"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Barry Allen',
        age: 24,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: '86720',
            city: 'Tabasco'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 125,
            zip: '86720',
            city: 'Tabasco'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map