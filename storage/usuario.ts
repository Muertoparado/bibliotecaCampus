import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';
export class usuario {
    @Expose({name:'id_usuario'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id_usuario:number;

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

    @Expose({name:'email'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 5` }}})
    @Transform(({value}) => {if(/^[@. a-z A-Z 0-9]+$/.test(value)) return value;
            else throw {status:400, message:`el dato x no cumple los parametros`};},{toClassOnly:true})
            email:string;

    constructor(id_usuario:number,nombre:string,direccion:string,telefono:string,email:string){
        this.id_usuario=id_usuario;
        this.nombre=nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.email=email;

    }
}