

export const getAll = async () => {
    const url = await fetch('https://search.imdbot.workers.dev/?q=Niram');
    const data = await url.json();
    return data;
}

export const getAllMoviesPerYear = async () =>{
    const url = await fetch('https://search.imdbot.workers.dev/?q=Niram');
    const data = await url.json();

    let movie = data.description.map(val => {
        return {
            TITLE: "[#TITLE]",
            YEAR: "[#YEAR]"

        }
    });
    return movie;   
}

export const getAllMoviesPerActors = async () => {
    const url = await fetch('https://search.imdbot.workers.dev/?q=Niram');
    const data = await url.json();

    let actor = data.description.map(val => {
        return {
            ACTOR: "[#ACTOR]"
        }
    });
    return actor;
}


export const getAllMoviesPerRank = async () => {
    const url = await fetch('https://search.imdbot.workers.dev/?q=Niram');
    const data = await url.json();

    let rank = data.description.map(val => {
        return {
            RANK: "[#RANK]"
        }
    });
    return rank;
}


//TITULO DE PELICULAS

export const getAllMovieTitle = async () => {
    const url = await fetch(`https://search.imdbot.workers.dev/?q=Niram=tt13667402`)
    const data = await url.json();

    let title = data.description.map(val => {
        return {
            TITLE: "[#TITLE]"
        }
    });
    return title;
}


