export interface Activity {
    id: string;
    activity: string;
    accessibility: number;
    type: string;
    participants: number;
    price: string;
    link: string;
}

export interface User{
    id:any;
    name:string;
    email:string;
    password:string;
    savedId:any;
    
}