import {getRepository} from 'typeorm';
import { hash } from 'bcryptjs';
import {User} from '../models/User';


type userData = {
    name: string;
    email: string;
    password: string
}

class CreateUserService {

    public async execute({name,email,password}:UserData): Promise < User | {} >  {

        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({email})
        if(checkUserExists){
            throw new Error('Email adrees alread exist');
        }

        const hashedPassord = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword
            });

        await userRepository.save(user);

        return user;

    }
}

export {CreateUserService};