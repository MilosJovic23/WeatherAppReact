

const cities=["Beograd","Subotica","Novi Sad","Zagreb","Sarajevo"]

const isValidCities= (name)=> cities.includes(name)
export const CitiesValidator=
    {

    required:"morate uneti ime grada",
    validator:isValidCities

    }