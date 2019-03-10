import config from './config'

const { apiKey } = config
const URL = `https://localhost:44356/api/Schools`

export default function getEntity(entity){
    const url = URL.replace(':entity', entity)
    return fetch(url) 
        .then(res=> res.json())
    }