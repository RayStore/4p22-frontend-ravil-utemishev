'use strict'

const parrots = {
    area: 'North America',
    name: 'Rhynchopsitta',
    family: 'Psittacidae',
    subfamily: {
        area: 'South America',
        name: 'Parakeet',
        family: 'Psittacidae',
        subfamily: {
            area: 'South America',
            name: 'Ara',
            family: 'Psittacidae',
            subfamily: 'Psittacidae'
        }

    }
}
function parrotsList(parrots) {
    console.log(parrots.area);

    if (parrots.name) {
        parrotsList(parrots.name);
    }

    if (parrots.family) {
        parrotsList(parrots.family);
    }

    if (parrots.subfamily) {
        parrotsList(parrots.subfamily);
    }
}

parrotsList(parrots);










