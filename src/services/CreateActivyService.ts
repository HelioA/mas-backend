import { getRepository } from 'typeorm';
import { Activy } from '../models/Activy';

interface ActivyData {
  name: string;
  activy_date: string;
  grade: number;
  courseUnitId: string;
}

class CreateActivyService {
  public async execute({name, activy_date, grade, courseUnitId}: ActivyData): Promise < Activy > {
    
    const activitiesRepository = getRepository(Activy);

    const activy = activitiesRepository.create({
      name,
      activy_date,
      grade,
      courseUnitId
    });

    await activitiesRepository.save(activy);

    return activy;
  }
}

export {CreateActivyService};