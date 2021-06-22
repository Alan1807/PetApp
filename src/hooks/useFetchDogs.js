import { useEffect, useState } from "react";
import { getDogs } from "../helpers/getDogs";

export const useFetchDogs = ( page, petName, petType, petGender ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect(() => {
        
        setState({ data: [], loading: true });

        getDogs(page, petName, petType, petGender)
            .then( dogs => {

                setState({
                    data: dogs,
                    loading: false
                });

            });

    }, [page, petName, petType, petGender]);

    return state;
}