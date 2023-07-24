import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';
export class editorial {
    @Expose({name:'id_editorial'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id_editorial:number;

        @Expose({name:'nombre'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            nombre:string;

    @Expose({name:'direccion'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 4`}}})
    @Transform(({value}) => {if(/^[a-z A-Z 0-9 # -]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no d cumple los parametros`};},{toClassOnly:true})
        direccion:string;

    @Expose({name:'telefono'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 3`}}})
    @Transform(({value}) => {if(/^[0-9]+$/.test(value)&& typeof value != "number") return value;
            else throw {status:400, message:`el dato t no cumple los parametros`};},{toClassOnly:true})
            telefono:string;

    constructor(id_editorial:number,nombre:string,direccion:string,telefono:string){
        this.id_editorial=id_editorial;
        this.nombre=nombre;
        this.direccion=direccion;
        this.telefono=telefono;

    }
}