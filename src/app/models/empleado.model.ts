export class Empleado {
  id: number;
  primerApellido: string;
  segundoApellido: string;
  primerNombre: string;
  otrosNombres?: string;
  paisEmpleo: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  correoElectronico?: string;
  fechaIngreso: string;
  area: string;
  estado: string;
  fechaYHoraDeRegistro: string;

  constructor() {
    this.id = 0;
    this.primerApellido = '';
    this.segundoApellido = '';
    this.primerNombre = '';
    this.otrosNombres = '';
    this.paisEmpleo = '';
    this.tipoIdentificacion = '';
    this.numeroIdentificacion = '';
    this.correoElectronico = '';
    this.fechaIngreso = '';
    this.area = '';
    this.estado = '';
    this.fechaYHoraDeRegistro = '';
  }
}

