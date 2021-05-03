import { getRepository } from 'typeorm';
import { Activity } from '../models/Activy';

interface ActivyData {
  name: string;
  activity_date: string;
  course_unit_id: string;
}

class CreateActivyService {
  public async execute({name, activy_date, course_unit_id}: ActivyData): Promise < Activy > {
    
    const activitiesRepository = getRepository(Activy);

    const activy = activitiesRepository.create({
      name,
      activy_date,
      course_unit_id
    });

    await activitiesRepository.save(activy);

    return activy;
  }
}

export {CreateActivyService};