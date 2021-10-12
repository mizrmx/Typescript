(()=> {

        type Avenger = {
            name: string,
            weapon: string;
        }

        const blackWidow: Avenger = {
            name: 'Black Widow',
            weapon: 'Fuerza'
        }

        const capitanaMarvel: Avenger = {
            name: 'Capitana Marvel',
            weapon: 'Super fuerza'
        }

        const wanda: Avenger = {
            name: 'Wanda',
            weapon: 'Hechizera'
        }

        const avengers: Avenger[] = [ blackWidow, wanda, capitanaMarvel ];

        for (const avenger of avengers) {
            console.log(avenger.name, avenger.weapon)
        }
})()