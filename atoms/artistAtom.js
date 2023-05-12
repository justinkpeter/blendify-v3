import { atom } from 'recoil';

export const artistIdState = atom({
    key: 'artistIdState',
    default: null,
})

export const artistState = atom({
    key: 'artistState',
    default: {
        id: null,
        name: null,
        images: [{
            url: '',
        }],
        genres: [],
        popularity: null,
        followers: {
            total: null,
        }

    }
})