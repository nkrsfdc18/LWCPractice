import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    address={
        fullname:"Naveen Kumar Reddy",
        age:30,
        gender:'Male'
    }
    changehandler(event){
      this.address={...this.address,"fullname":event.target.value}
      
    }
    users=["Thaneesh","Gamya","Parnika"]
    num1=15
    num2=25
    get usersname(){
        return this.users[0].toUpperCase()
    }
    get multipy(){
        return this.num1*this.num2
    }
    name
    isVisible=false

    handlerChange(){
        this.isVisible=true
    }
    inputhandler(event){
        this.name = event.target.value
    }
    get helloHandler(){
         return this.name === 'hello'
    }

}