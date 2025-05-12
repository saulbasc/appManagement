/* eslint-disable no-unused-vars */
interface IDefaultDAO<T, O> {
  insert(object: O): Promise<boolean>;
  select(id: T): Promise<O | null>;
  selectAll(): Promise<O[]>;
  update(object: O): Promise<boolean>;
  remove(id: T): Promise<boolean>;
}

export default IDefaultDAO;
