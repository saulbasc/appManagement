import supabase from '../../lib/supabase';
import Course from '../../types/Course';
import IDefaultDAO from './IDefaultDAO';

const tableName = 'curso';
const idColumn = 'ID';

export default class CourseDAO implements IDefaultDAO<number, Course> {
  // eslint-disable-next-line class-methods-use-this
  async insert(object: Course): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .insert({
        ID: object.id,
        titulo: object.title,
        descripcion: object.description,
        categoria: object.category,
        duracion: object.duration,
        instructor: object.instructor,
        fecha_creacion: object.startDate,
      });
    return !error;
  }

  // eslint-disable-next-line class-methods-use-this
  async selectAll(): Promise<Course[]> {
    const { data } = await supabase
      .from(tableName)
      .select();
    return data?.map((courseData) => new Course(
      courseData?.ID,
      courseData?.titulo,
      courseData?.descripcion,
      courseData?.categoria,
      courseData?.duracion,
      courseData?.instructor,
      courseData?.fecha_creacion,
    )) ?? [];
  }

  // eslint-disable-next-line class-methods-use-this
  async select(id: number): Promise<Course | null> {
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq(idColumn, id)
      .single();
    const course = new Course(
      data?.id,
      data?.titulo,
      data?.descripcion,
      data?.categoria,
      data?.duracion,
      data?.instructor,
      data?.fecha_creacion,
    );
    return course;
  }

  // eslint-disable-next-line class-methods-use-this
  async update(object: Course): Promise<boolean> {
    const a = object;
    // eslint-disable-next-line no-console
    console.log(a);
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  async delete(id: number): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq(idColumn, id);
    return !error;
  }
}
