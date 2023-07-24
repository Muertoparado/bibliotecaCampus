import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class reserva {
    @Expose({name:'id_reserva'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id_reserva:number;

        @Expose({name:'id_usuario'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
            id_usuario:number;

        @Expose({name:'id_libro'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
            id_libro:number;

        @Expose({name:'fecha_reserva'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value}) => {if(/^[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/]+$/.test(value)) return value;
            else throw {status:400, message:`el dato no k cumple los parametros`};},{toClassOnly:true})
            fecha_reserva: String;

        @Expose({name:'fecha_reserva_fin'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value}) => {if(/^[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/]+$/.test(value)) return value;
            else throw {status:400, message:`el dato no k cumple los parametros`};},{toClassOnly:true})
            fecha_reserva_fin: String;

            @Expose({name:'estado'})
            @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
            @Transform(({value}) => {if(/^[a-z A-Z 0-9]+$/.test(value)) return value;
                else throw {status:400, message:`el daton no cumple los parametros`};},{toClassOnly:true})
                estado: String;


    constructor(id_reserva:number,id_usuario:number,fecha_reserva_fin: String,id_libro:number,estado: String,fecha_reserva: String){
        this.id_reserva=id_reserva;
        this.id_usuario=id_usuario;
        this.id_libro=id_libro;
        this.fecha_reserva_fin=fecha_reserva_fin;
        this.estado=estado;
        this.fecha_reserva=fecha_reserva;
    }
}