import { getRepository } from "typeorm";
import { Activy } from "../models/Activy";

interface userId {
    id?: string;
}

class GetActiviesService {

    public async execute({id}:userId){

        const activyRepository = getRepository(Activy);

        const activies = activyRepository.find();

        if(!activies){
            return {
                message: 'activies not found'
            }
        }

        return activies;

    }

}

export {GetActiviesService};