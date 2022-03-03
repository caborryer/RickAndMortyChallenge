import { Injectable } from '@nestjs/common';
import axios from 'axios';
import api  from '../../config';


@Injectable()
export class ConnectionService {
    constructor(
    ){}

    async location(){
        return axios.get('https://rickandmortyapi.com/api/location')
        .then(response => {
            return response && response.data ? response.data : {}
        })
        .catch(error => {
            console.log(error)
            return {}

        })
    }

    async episode(){
        return axios.get(`https://rickandmortyapi.com/api/episode`)
        .then(response => {
            return response && response.data ? response.data : {}
        })
        .catch(error => {
            console.log(error)
            return {}

        })
    }

    async character() {
        return axios.get(`https://rickandmortyapi.com/api/character`)
            .then(response => {
                return response && response.data ? response.data : {}
            })
            .catch(error => {
                console.log(error)
                return {}
    
            })
    }
}
