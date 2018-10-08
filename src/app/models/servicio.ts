import {User} from './user';
import {Vehiculo} from './vehiculo';
import {FotoDano} from './foto-dano';
import {Grua} from './grua';

export class Servicio {
  public id: number;
  public id_empresa: number;
  public id_cliente: number;
  public id_grua: number;
  public id_vehiculo: number;
  public alta_gama: boolean;
  public ubicacion: string;
  public destino: string;
  public precio_final: number;
  public precio_pesos: number;
  public precio_dolar: number;
  public estado: string;
  public descripcion: string;
  public descripcion_chofer: string;
  public evaluacion_cliente: number;
  public evaluacion_empresa: number;
  public chofer_info: User;
  public vehiculo_info: Vehiculo;
  public cliente_info: User;
  public fotos_danos: FotoDano[];
  public grua_info: Grua;
  public created_at: any;
}
