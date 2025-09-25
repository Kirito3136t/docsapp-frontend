export enum Gender {
  M = 'M',
  F = 'F',
  O = 'O'
}

export interface Patient {
    id:number;
    name:string;
    age:number;
    phone:string;
    address:string;
    email:string;
    weight:number;
    height:number;
    gender:Gender;
}