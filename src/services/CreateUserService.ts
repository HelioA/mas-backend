import {getRepository} from 'typeorm';
import { hash } from 'bcryptjs';
import {User} from '../models/User';


interface userData {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {

    public async execute({name, email, password}: userData): Promise < User | {} > {
  
      const usersRepository = getRepository(User);
  
      const checkUserExists = await usersRepository.findOne({email});
  
      /*if(checkUserExists) {
        throw new Error('Email address already exists!');
      }*/

      if(checkUserExists) {
        return {
          error:"Email address already exists!"
        };
      }
  
      const hashedPassword = await hash(password, 8);
  
      const user = usersRepository.create({
        name,
        email,
        password: hashedPassword
      });
  
      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export { CreateUserService };