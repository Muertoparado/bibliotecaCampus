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
export class editorial {
    constructor(id_editorial, nombre, direccion, telefono) {
        this.id_editorial = id_editorial;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}
__decorate([
    Expose({ name: 'id_editorial' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], editorial.prototype, "id_editorial", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 1` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato n no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], editorial.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 4` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z 0-9 # -]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no d cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], editorial.prototype, "direccion", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 3` }; } }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value != "number")
            return value;
        else
            throw { status: 400, message: `el dato t no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], editorial.prototype, "telefono", void 0);
