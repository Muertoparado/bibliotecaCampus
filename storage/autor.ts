import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';
export class autor {
    @Expose({name:'id_autor'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id_autor:number;

        @Expose({name:'nombre'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            nombre:string;

        @Expose({name:'apellido'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            apellido:string;

        @Expose({name:'nacionalidad'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            nacionalidad:string;

    constructor(id_autor:number,nombre:string,apellido:string,nacionalidad:string){
        this.id_autor=id_autor;
        this.nombre=nombre;
        this.apellido=apellido;
        this.nacionalidad=nacionalidad;

    }
}