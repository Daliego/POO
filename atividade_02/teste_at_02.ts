function main(){
    const numero : number  = 120.56
    const palavra : string = 'Typescript'

    console.log(`Ely\nMy payment time is ${numero}\nand\nmy prefered language is ${palavra}`)
}

function strictNullCheck (){
    const palavra : string = null;
    console.log(palavra)
}

strictNullCheck()