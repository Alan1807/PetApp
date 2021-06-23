import defaultImg from '../img/default_pet.png';

const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5cWppYnBNOG53ZEVzVHZPUzJPUGFHVjdZWldoVU1vNG8walg4YmM2dlhDbHZXbmhucSIsImp0aSI6IjVjNGEzNDQxY2YzOGVjZDViNTBlNGMwYTE5OGMzN2QwZTA0NjNhYjdkYzhlOTU3ZTA4YmY1OWRhZDRmMDM0MDk1OTgxZTg2YmZiNjYyMmFjIiwiaWF0IjoxNjI0NDI1NjQyLCJuYmYiOjE2MjQ0MjU2NDIsImV4cCI6MTYyNDQyOTI0Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.NeaWw6rOs5S0zLVqh2R1urQaIAJBU5UVBJ9nNVY5VxR8-qRwW0I39nHpBnLhh9ujZJQddB9aEA5DnEfj9sz_y-lCAV2RmcSjxQ_7Gcd3koOGDov5sNwZI6DZz3VU1SPNOtqHBmX81HrG1FVmnKGnxcscsdump1Fcr2RrdyyH4jDUigXpTSUl44lHMwx4fkFUT-wBz3wqgrWIeBKD1M1N6DUuq-I9Ip1-VRH9DBtfbxYi7agaILQEZX4sq_hKoi31-Yjy9G9ivjmT9Ro78-VIBn6EJ--LZf5QqNAxNbwgjyXbRIE0ef_eVClyCKmpziGRo5yiKgk8aphwXznvaNbxLw';

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