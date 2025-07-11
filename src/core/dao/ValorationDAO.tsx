/* eslint-disable class-methods-use-this */
import supabase from "../../lib/supabase";
import Valoration from "../../types/Valoration";
import ValorationComment from "../../types/ValorationComment";
import { GetID } from "../supabaseActions";
import IDefaultDAO from "./IDefaultDAO";
import UserDAO from "./UserDAO";

const tableName = "valoracion";

export default class ValorationDAO
  implements IDefaultDAO<[number, string], Valoration>
{
  async insert(object: Valoration): Promise<boolean> {
    const { error } = await supabase.from(tableName).upsert({
      ID_curso: object.courseId,
      ID_usuario: object.userId,
      comentario: object.comment,
      calificacion: object.rating,
    });
    return !error;
  }

  async selectAll(): Promise<Valoration[]> {
    const { data } = await supabase.from(tableName).select();
    return (
      data?.map(
        (item) =>
          new Valoration(
            item.course_id,
            item.user_id,
            item.coment,
            item.rating,
          ),
      ) ?? []
    );
  }

  async select(ids: [number, string]): Promise<Valoration | null> {
    try {
      const [courseId, userId] = ids;
      const { data } = await supabase
        .from(tableName)
        .select()
        .eq("ID_curso", courseId)
        .eq("ID_usuario", userId)
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
      throw new Error(
        `Error selecting valoration: ${(error as Error).message}`,
      );
    }
  }

  async update(object: Valoration): Promise<boolean> {
    const { error } = await supabase
      .from(tableName)
      .update({
        comment: object.comment,
        rating: object.rating,
      })
      .eq("course_id", object.courseId)
      .eq("user_id", object.userId);
    return !error;
  }

  async remove(ids: [number, string]): Promise<boolean> {
    const [courseId, userId] = ids;
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq("course_id", courseId)
      .eq("user_id", userId);
    return !error;
  }

  async valorationsForUsers() {
    const votosPorRating = [0, 0, 0, 0, 0];
    const { data, error } = await supabase
      .from(tableName)
      .select("calificacion");

    if (!error) {
      data.forEach(({ calificacion }: any) => {
        if (calificacion >= 1 && calificacion <= 5) {
          votosPorRating[calificacion - 1] += 1;
        }
      });
    }
    return votosPorRating;
  }

  async valorationsOfCourse(courseID: number) {
    const { data } = await supabase
      .from(tableName)
      .select()
      .eq("ID_curso", courseID);
    if (data) {
      let valorations: ValorationComment[] = [];
      const userDao = new UserDAO();
      try {
        valorations = await Promise.all(
          data.map(async (val) => {
            let name = "";
            const userData = await userDao.select(val.ID_usuario);
            if (userData) {
              const localId = await GetID();
              name = localId === val.ID_usuario ? "(Yo)" : userData.name;
            }
            return new ValorationComment(
              name,
              val.comentario,
              val.calificacion,
            );
          }),
        );
        valorations.sort((a, b) => {
          if (a.userName === "(Yo)") return -1;
          if (b.userName === "(Yo)") return 1;
          return 0;
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Error valorations => ${error}`);
      }
      return valorations;
    }
    return [];
  }
}
