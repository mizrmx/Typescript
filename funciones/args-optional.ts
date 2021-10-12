(() => {
    const fullName = ( $firstName: string, lastName?:string ): string => {
        
        return `${ $firstName } ${ lastName || 'no lastname' }`;
    }

    let noName: string;

    const name = fullName( 'Tony');
    
    console.log({ name });
})()