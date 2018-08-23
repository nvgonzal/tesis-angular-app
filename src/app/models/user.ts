export class User {
  constructor(public id: number,
              public email: string,
              public nombre_completo: string,
              public nombre: string,
              public apellido_paterno: string,
              public apellido_materno: string,
              public rut: string,
              public celular: string,
              public telefono_fijo?: string) {
  }
}
