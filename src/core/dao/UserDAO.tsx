/* eslint-disable class-methods-use-this */
import supabase from "../../lib/supabase";
import User from "../../types/User";
import IDefaultDAO from "./IDefaultDAO";

const tableName = "usuario";
const idColumn = "ID";

export default class UserDAO implements IDefaultDAO<string, User> {
  async insert(object: User): Promise<boolean> {
    const { error } = await supabase.from(tableName).insert({
      id: object.id,
      name: object.name,
      email: object.email,
      rol: object.rol,
    });
    return !error;
  }

  async selectAll(): Promise<User[]> {
    const { data } = await supabase.from(tableName).select();
    return (
      data?.map((item) => new User(item.id, item.name, item.email, item.rol)) ??
      []
    );
  }

  async select(id: string): Promise<User | null> {
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq(idColumn, id)
      .single();
    return data ? new User(id, data.nombre, data.email, data.rol) : null;
  }

  async update(object: User): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .update({
        nombre: object.name,
        email: object.email,
        rol: object.rol,
      })
      .eq(idColumn, object.id);
    return !error;
  }

  async remove(id: string): Promise<boolean> {
    const { error } = await supabase.from(tableName).delete().eq(idColumn, id);
    return !error;
  }
}
