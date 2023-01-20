export class ResponseHttp<T> {
    data:T
    headers:any
    params:any


constructor(data:T,headers:{},params:{}){
    this.data=data;
    this.headers=headers
    this.params=params;
}

}