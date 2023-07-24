var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsDefined } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
export class reserva {
    constructor(id_reserva, id_usuario, fecha_reserva_fin, id_libro, estado, fecha_reserva) {
        this.id_reserva = id_reserva;
        this.id_usuario = id_usuario;
        this.id_libro = id_libro;
        this.fecha_reserva_fin = fecha_reserva_fin;
        this.estado = estado;
        this.fecha_reserva = fecha_reserva;
    }
}
__decorate([
    Expose({ name: 'id_reserva' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], reserva.prototype, "id_reserva", void 0);
__decorate([
    Expose({ name: 'id_usuario' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], reserva.prototype, "id_usuario", void 0);
__decorate([
    Expose({ name: 'id_libro' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], reserva.prototype, "id_libro", void 0);
__decorate([
    Expose({ name: 'fecha_reserva' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no k cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], reserva.prototype, "fecha_reserva", void 0);
__decorate([
    Expose({ name: 'fecha_reserva_fin' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no k cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], reserva.prototype, "fecha_reserva_fin", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z 0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el daton no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], reserva.prototype, "estado", void 0);
