export class Empleado {
    primerApellido: string;
    segundoApellido: string;
    primerNombre: string;
    otrosNombres: string;
    paisEmpleo: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    area: string;
    estado: string;
    fechaYHoraDeRegistro: Date;

    constructor() {
        this.primerApellido = '';
        this.segundoApellido = '';
        this.primerNombre = '';
        this.otrosNombres = '';
        this.paisEmpleo = '';
        this.tipoIdentificacion = '';
        this.numeroIdentificacion = '';
        this.area = '';
        this.estado = ''; 
        this.fechaYHoraDeRegistro = new Date(); 
    }
}
