



export class User{
 constructor(public email:string , public id:string , private _tocken:string , private _tokenexpirationdate: Date){}



   get tocken(){
    if(!this._tokenexpirationdate || new Date()  > this._tokenexpirationdate){
        return null;
    }

    return this._tocken
   }













}