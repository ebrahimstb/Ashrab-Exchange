import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },

    middleware: (getdefaultMiddleware) => getdefaultMiddleware()
             .concat([
                    cryptoNewsApi.middleware, cryptoApi.middleware ])

                   //ANOTHER WAY TO CALL MULTIPLE RTK
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoNewsApi.middleware).concat(cryptoApi.middleware),

     //THIS IS THE METHOD TO USE IF YU CALLING A SINGLE RTK
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoApi.middleware)
}); 

