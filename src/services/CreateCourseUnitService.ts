import { getRepository } from 'typeorm';
import { CourseUnit } from '../models/CourseUnit';

interface CourseUnitData {
  name: string;
  description: string;
}

class CreateCourseUnitService {

  public async execute({name, description}: CourseUnitData): Promise < CourseUnit > {
    
    const coursesUnitsRepository = getRepository(CourseUnit);

    const courseUnit = coursesUnitsRepository.create({
      name,
      description,
    });

    await coursesUnitsRepository.save(courseUnit);

    return courseUnit;
  }
}

export {CreateCourseUnitService};