import { Injectable } from '@nestjs/common';
import { ConnectionService } from '../../connection/services/connection.service';
import { ExerciseNameEnum } from '../enums/data.enums';

@Injectable()
export class CharCounterService {
    constructor(
        private readonly connectionService: ConnectionService
    ){}

    async process(){
        const startTime = performance.now()

        const locationData = await this.connectionService.location();
        const locationNames = locationData.results.map(this.mapper);
        const countInLocation = await this.countLetter(locationNames, /l/g);

        const episodeData = await this.connectionService.episode();
        const episodeNames = episodeData.results.map(this.mapper);
        const countInEpisode = await this.countLetter(episodeNames, /e/g);

        const characterData = await this.connectionService.character();
        const characterNames = characterData.results.map(this.mapper);
        const countInCharacter = await this.countLetter(characterNames, /c/g);

        const totals = this.totalResult(countInLocation, countInEpisode, countInCharacter)
        
        const endTime = performance.now();
        const totalTime = `${endTime - startTime} miliseconds`;

        return {
            exercise_name: ExerciseNameEnum.CHAR_COUNTER,
            time: totalTime,
            results: totals
        }   
    }

    async countLetter(array: any, expression: any) {
        const counter = array.join('').match(expression).length;
        return counter  
    }

    mapper<T extends { name: string;},>(data: T){
      return data.name
    }

    totalResult(location, episode, character ){
        let finalResult = [];
        const totalLocation = { char: "l", count: location, resourse: ExerciseNameEnum.LOCATION };
        const totalEpisode = { char: "e", count: episode, resourse: ExerciseNameEnum.EPISODE };
        const totalCharacter = { char: "c", count: character, resourse: ExerciseNameEnum.CHARACTER };

        finalResult.push(totalLocation, totalEpisode, totalCharacter)

        return finalResult

    }
}
