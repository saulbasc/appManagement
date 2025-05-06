/* eslint-disable class-methods-use-this */
import supabase from '../../lib/supabase';
import Valoration from '../../types/Valoration';
import IDefaultDAO from './IDefaultDAO';

const tableName = 'valoracion';

export default class ValorationDAO implements IDefaultDAO<[number, string], Valoration> {
  async insert(object: Valoration): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .upsert({
        ID_curso: object.courseId,
        ID_usuario: object.userId,
        comentario: object.comment,
        calificacion: object.rating,
      });
    return !error;
  }

  async selectAll(): Promise<Valoration[]> {
    const { data } = await supabase
      .from(tableName)
      .select();
    return data?.map((item) => new Valoration(
      item.course_id,
      item.user_id,
      item.coment,
      item.rating,
    )) ?? [];
  }

  async select(ids: [number, string]): Promise<Valoration | null> {
    try {
      const [courseId, userId] = ids;
      const { data } = await supabase
        .from(tableName)
        .select()
        .eq('ID_curso', courseId)
        .eq('ID_usuario', userId)
        .single();
      return data
        ? new Valoration(
          data.ID_curso,
          data.ID_usuario,
          data.comentario,
          data.calificacion,
        )
        : null;
    } catch (error) {
      throw new Error(`Error selecting valoration: ${(error as Error).message}`);
    }
  }

  async update(object: Valoration): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .update({
        comment: object.comment,
        rating: object.rating,
      })
      .eq('course_id', object.courseId)
      .eq('user_id', object.userId);
    return !error;
  }

  async remove(ids: [number, string]): Promise<boolean> {
    const [courseId, userId] = ids;
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('course_id', courseId)
      .eq('user_id', userId);
    return !error;
  }
}
