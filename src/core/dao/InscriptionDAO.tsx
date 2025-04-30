/* eslint-disable class-methods-use-this */
import supabase from '../../lib/supabase';
import Inscription from '../../types/Inscription';
import IDefaultDAO from './IDefaultDAO';

const tableName = 'inscripcion';

export default class InscriptionDAO implements IDefaultDAO<[number, string], Inscription> {
  async insert(object: Inscription): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .insert({
        course_id: object.courseId,
        user_id: object.userId,
      });
    return !error;
  }

  async selectAll(): Promise<Inscription[]> {
    const { data } = await supabase
      .from(tableName)
      .select();
    return data?.map((item) => new Inscription(
      item.course_id,
      item.user_id,
    )) ?? [];
  }

  async select(ids: [number, string]): Promise<Inscription | null> {
    const [courseId, userId] = ids;
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq('course_id', courseId)
      .eq('user_id', userId)
      .single();
    return data ? new Inscription(data.course_id, data.user_id) : null;
  }

  // eslint-disable-next-line no-unused-vars
  async update(object: Inscription): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async delete(ids: [number, string]): Promise<boolean> {
    const [courseId, userId] = ids;
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('course_id', courseId)
      .eq('user_id', userId);
    return !error;
  }

  async isSuscribed(courseId: string, userId: string) {
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq('id_curso', courseId).eq('id_usuario', userId);
    if (!data) {
      return false;
    }
    return data?.length > 0;
  }
}
