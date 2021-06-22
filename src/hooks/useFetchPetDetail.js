import { useEffect, useState } from 'react';
import { getPetById } from '../helpers/getDogs';

export const useFetchPetDetail = ( petId ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        if (petId > 0) {
            setState({
                data: [],
                loading: true
            });
    
            getPetById(petId)
                .then( pet => {
                    setState({
                        data: pet,
                        loading: false
                    });
    
                });
        }
        

    }, [petId]);
    
    return state;
    
}
