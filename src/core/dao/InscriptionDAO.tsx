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
        id_curso: object.courseId,
        id_usuario: object.userId,
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

  async selectAllWithID(userID: string): Promise<Inscription[]> {
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq('id_usuario', userID);
    return data?.map((item) => new Inscription(
      item.course_id,
      userID,
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

  async remove(ids: [number, string]): Promise<boolean> {
    const [courseId, userId] = ids;
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('id_curso', courseId)
      .eq('id_usuario', userId);
    return !error;
  }

  async isSuscribed(courseId: number, userId: string) {
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq('id_curso', courseId).eq('id_usuario', userId);
    if (!data) {
      return false;
    }
    return data?.length > 0;
  }

  async totalInscriptions() {
    const { count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });
    return count;
  }
}
