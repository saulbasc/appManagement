/* eslint-disable class-methods-use-this */
import supabase from "../../lib/supabase";
import Course from "../../types/Course";
import IDefaultDAO from "./IDefaultDAO";

const tableName = "curso";
const idColumn = "ID";

export default class CourseDAO implements IDefaultDAO<number, Course> {
  async insert(object: Course): Promise<boolean> {
    const { error } = await supabase.from(tableName).insert({
      titulo: object.title,
      descripcion: object.description,
      categoria: object.category,
      duracion: object.duration,
      instructor: object.instructor,
      fecha_creacion: object.startDate,
    });
    return !error;
  }

  async selectAll(): Promise<Course[]> {
    const { data } = await supabase.from(tableName).select();
    return (
      data?.map(
        (courseData) =>
          new Course(
            courseData?.ID,
            courseData?.titulo,
            courseData?.descripcion,
            courseData?.categoria,
            courseData?.duracion,
            courseData?.instructor,
            courseData?.fecha_creacion,
          ),
      ) ?? []
    );
  }

  async selectAllWithID(userID: string): Promise<Course[]> {
    const courses: Course[] = [];
    const { data } = await supabase
      .from("inscripcion")
      .select("*, curso:id_curso(*)")
      .eq("id_usuario", userID);

    if (!data) return [];
    data.forEach((singleData) => {
      const course = singleData.curso;
      const id = course.ID;
      const title = course.titulo;
      const description = course.descripcion;
      const category = course.categoria;
      const duration = course.duracion;
      const { instructor } = course;
      const creationDate = course.fecha_creacion;
      const courseObject = new Course(
        id,
        title,
        description,
        category,
        duration,
        instructor,
        creationDate,
      );
      courses.push(courseObject);
    });
    return courses;
  }

  async select(id: number): Promise<Course | null> {
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq(idColumn, id)
      .single();
    const course = new Course(
      id,
      data?.titulo,
      data?.descripcion,
      data?.categoria,
      data?.duracion,
      data?.instructor,
      data?.fecha_creacion,
    );
    return course;
  }

  async update(object: Course): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .update({
        titulo: object.title,
        descripcion: object.description,
        categoria: object.category,
        duracion: object.duration,
        instructor: object.instructor,
        fecha_creacion: object.startDate,
      })
      .eq("ID", object.id);
    if (error) return true;
    return false;
  }

  async remove(id: number): Promise<boolean> {
    const { error } = await supabase.from(tableName).delete().eq(idColumn, id);
    return !error;
  }

  async upsert(course: Course) {
    await supabase.from(tableName).upsert({
      ID: course.id,
      titulo: course.title,
      descripcion: course.description,
      categoria: course.category,
      duracion: course.duration,
      instructor: course.instructor,
      fecha_creacion: course.startDate,
    });
  }

  async getCourseDates() {
    const datesCount: Record<string, number> = {};
    const { data } = await supabase.from(tableName).select("fecha_creacion");

    data?.forEach((row) => {
      const date = row.fecha_creacion?.split("T")[0];
      if (date) {
        datesCount[date] = (datesCount[date] || 0) + 1;
      }
    });

    const result = Object.entries(datesCount).map(([date, count]) => ({
      date,
      count,
    }));

    return result;
  }
}
