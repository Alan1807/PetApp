import defaultImg from '../img/default_pet.png';

const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5cWppYnBNOG53ZEVzVHZPUzJPUGFHVjdZWldoVU1vNG8walg4YmM2dlhDbHZXbmhucSIsImp0aSI6IjhhMGM4ODcwNDU4MjdjYzA0YTA1OTFiYmRhMzhlMTZjYWI0ZjYyYzIxYzhkMmJhOGVjYTQxYzFkMjljMmJiYmVlMTMxMTE2NDM0ZTJkZTg5IiwiaWF0IjoxNjI0MzE0NDM1LCJuYmYiOjE2MjQzMTQ0MzUsImV4cCI6MTYyNDMxODAzNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.g4u1J9KP3GRR6_L0GbWbzRZ_poE6nvJFfGK5AW7LucF_78OEeooGXAeqHxCA7g23dk2l0_W5NU76mrB1P9nx16zqiQvNAsJZo8V4krjKFDPWNmV3EjHib8fJxLQJLR1V8Mn5edigos0SaXD_rJXZGWhn8u8gfzeFPtlFIyPfRoW_Ow17xKOtZ7NhrjNSrWNSRyrg-uFuTRPxoZyfUwzkvfAMHNhBqBdhOJIZGfdmpHgvQ9U5p5XVkwbHoL6C3q16yamETj__NrXWOMCrUKG_XSou1PEkz6ZXH9JICkdgWBpb8LPtLdwY5np0A9UZXMWrmMRN9_XIu6mK5B08M4T2Yw';

export const getDogs = async(page, name, type, gender) => {
    
    // ARMA LOS FILTROS
    let filters = `&page=${ page }&limit=20`;

    // Si se envía un nombre arma la cadena del parámetro
    if (name !== undefined) {
        if (name !== '') {
            filters += `&name=${ name }`;
        }
    }

    // Si se envía un tipo, arma la cadena del parámetro
    if (type !== undefined) {
        if (type !== '') {
            filters += `&type=${ type }`;
        } 
    }

    // Si se envía un genero, arma la cadena del parámetro
    if (gender !== undefined) {
        if (gender !== '') {
            filters += `&gender=${ gender }`;
        }
    }

    const url =
    `https://api.petfinder.com/v2/animals?primary_photo_cropped=[ne]null${ filters }`;

    const resp = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${ access_token }`
        }),
    });

    const data = await resp.json();
    
    const dogs = data.animals.map( dog => {

        return {
            id: dog.id,
            type: dog.type,
            primary: dog.breeds.primary,
            secondary: dog.breeds.secondary,
            age: dog.age,
            size: dog.size,
            gender: dog.gender,
            name: dog.name,
            status: dog.status,            
            image: dog.primary_photo_cropped != null ? dog.primary_photo_cropped.large : defaultImg
        }
    });
    
    return dogs;
}

export const getPetTypes = async() => {

    const url =
    `https://api.petfinder.com/v2/types`;

    const resp = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${ access_token }`
        }),
    });

    const data = await resp.json();
    
    const pet_types = data.types.map( type => {

        return {
            name: type.name
        }
    });

    return pet_types;
}

export const getPetById = async(petId) => {

    const url = `https://api.petfinder.com/v2/animals/${ petId }`;

    const resp = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${ access_token }`
        }),
    });

    const data = await resp.json();
    const pet = data.animal;

    const capitalizaText = (str) => {
        const lower = str.toLowerCase();

        return str.charAt(0).toUpperCase()
            + lower.slice(1);
    }

    return {
        id: pet.id,
        type: pet.type,
        primary: pet.breeds.primary,
        secondary: pet.breeds.secondary,
        age: pet.age,
        size: pet.size,
        gender: pet.gender,
        name: pet.name,
        status: capitalizaText(pet.status),
        image: pet.primary_photo_cropped != null ? pet.primary_photo_cropped.large : defaultImg,
        description: pet.description,
        photos: pet.photos != null ? pet.photos : [ defaultImg ],
        videos: pet.videos,
        attributes: pet.attributes,
        tags: pet.tags,
        contact: pet.contact,
        published_at: pet.published_at
    }

    // const pet_detail = data.animal.map( pet => {

    //     return {
    //         id: pet.id,
    //         type: pet.type,
    //         primary: pet.breeds.primary,
    //         secondary: pet.breeds.secondary,
    //         age: pet.age,
    //         size: pet.size,
    //         gender: pet.gender,
    //         name: pet.name,
    //         image: pet.primary_photo_cropped != null ? pet.primary_photo_cropped.large : defaultImg,
    //         description: pet.description,
    //         photos: pet.photos != null ? pet.photos : [ defaultImg ],
    //         videos: pet.videos,
    //         attributes: pet.attributes,
    //         tags: pet.tags,
    //         contact: pet.contact,
    //         published_at: pet.published_at
    //     }
    // });

    // return pet_detail;

}