/* eslint-disable class-methods-use-this */
import supabase from '../../lib/supabase';
import Valoration from '../../types/Valoration';
import IDefaultDAO from './IDefaultDAO';

const tableName = 'valoracion';

export default class ValorationDAO implements IDefaultDAO<[number, string], Valoration> {
  async insert(object: Valoration): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .insert({
        course_id: object.courseId,
        user_id: object.userId,
        coment: object.coment,
        rating: object.rating,
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
    const [courseId, userId] = ids;
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq('course_id', courseId)
      .eq('user_id', userId)
      .single();
    return data ? new Valoration(data.course_id, data.user_id, data.coment, data.rating) : null;
  }

  async update(object: Valoration): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .update({
        coment: object.coment,
        rating: object.rating,
      })
      .eq('course_id', object.courseId)
      .eq('user_id', object.userId);
    return !error;
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
}
