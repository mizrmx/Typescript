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
        }
    };
})();
//# sourceMappingURL=main.js.map