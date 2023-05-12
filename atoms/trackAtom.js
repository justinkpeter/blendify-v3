import { atom } from 'recoil';

// export const artistIdState = atom({
//     key: 'artistIdState',
//     default: null,
// })

export const trackState = atom({
    key: 'trackState',
    default: {
        id: null,
        name: null,
        images: [{
            url: '',
        }],

        album: {
            images: [{
                url: '',
            }],
        }
    }
})