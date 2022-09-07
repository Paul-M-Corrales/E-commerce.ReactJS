const Neumaticos = [
    {id: 1, nombre:"Cinturato P1 Plus", marca: "Pirelli", precio: "52000", img:"https://d3nv2arudvw7ln.cloudfront.net/images/global/272/24/cinturato-p1-plus-cat-sfondo-4505480339479.jpg"},
    {id: 1, nombre:"P7", marca: "Pirelli", precio: "76610", img:"https://d3nv2arudvw7ln.cloudfront.net/images/global/269/682/P7-sfondo-4505490005798.jpg"},
    {id: 1, nombre:"Cinturato P4", marca: "Pirelli", precio: "58838", img:"https://d3nv2arudvw7ln.cloudfront.net/images/global/584/487/cinturato-p4-cat-sfondo-4505498335946.jpg"},
    {id: 1, nombre:"Scorpion STR", marca: "Pirelli", precio: "129376", img:"https://d3nv2arudvw7ln.cloudfront.net/images/global/282/157/scorpion-STR-sfondo-1505470088218.jpg"},
];

export const promesa = new Promise ((respuesta, reject)  => {
    let url =`www.localhost:3000`
    if (url === `www.localhost:3000`){
        setTimeout(()=>{
            respuesta(Neumaticos);
        },2000);

    }else{
       reject(`400 not found`)
    }
})

