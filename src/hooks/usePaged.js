import { useState } from "react";

export const usePaged = ( initialState = 1 ) => {
    
    const [state, setState] = useState(initialState);

    const nextPage = () => {
        setState( state + 1 );
    }

    const prevPage = () => {
        setState(  state === 1 ? 1 : state - 1 );
    }

    return {
        state,
        nextPage, 
        prevPage
    };

}
