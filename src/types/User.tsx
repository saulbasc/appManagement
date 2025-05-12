class User {
  id: string;

  name: string;

  email: string;

  rol: string;

  constructor(id: string, name?: string, email?: string, rol?: string) {
    this.id = id;
    this.name = name ?? "";
    this.email = email ?? "";
    this.rol = rol ?? "";
  }
}

export default User;
