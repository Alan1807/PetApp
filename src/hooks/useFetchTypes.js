import { useEffect, useState } from "react";
import { getPetTypes } from "../helpers/getDogs";

export const useFetchTypes = () => {

    const [state, setState] = useState([])

    useEffect(() => {
        
        getPetTypes()
            .then( types => {

                setState(types);

            });
        
    }, []);

    return state;

}
