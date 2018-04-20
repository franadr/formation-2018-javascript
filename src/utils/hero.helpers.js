export const formFields = [
    { name: 'heroName', label: 'Hero name', type: 'text', placeholder: 'Iron Man' },
    { name: 'intelligence', label: 'Intelligence', type: 'number' },
    { name: 'strength', label: 'Strength', type: 'number'},
    { name: 'speed', label: 'Speed', type: 'number'},
    { name: 'durability', label: 'Durability', type: 'number'},
    { name: 'power', label: 'Power', type: 'number'},
    { name: 'combat', label: 'Combat', type: 'number'},
];

export const createEmptyHero = () => {
    return {
        heroName: '',
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0
    };
};