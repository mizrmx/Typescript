(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activos: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true, 
        poder: 1500.123123
    }

    // const { poder, vision } = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase() )
    // const printAvenger = ( avengers:Avengers )=> {

    //     console.log( avengers.nick );
    // } 

    // printAvenger( avengers);

    const printAvenger = ( { ironman, ...resto }:Avengers )=> {

        console.log( ironman, resto );
    } 

    // printAvenger( avengers);

    //Desestructuración de Arreglos
    
    const avengersArr: [string, boolean, number] = ['Black Widow', true , 150.15];

    const [ black , capitana, seriaUnNumero ] = avengersArr;
    // console.log({ capitana, black })


    // const avengersArr = ['Black Widow', 'Capitana Marvel', 'Wanda'];

    // const capitanaMarvel = avengersArr[1];
    // console.log({capitanaMarvel})

    // const [ capi, capitanaMarvel, ] = avengersArr;
    // console.log({ capitanaMarvel, capi })
})()