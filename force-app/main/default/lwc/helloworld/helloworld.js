import { LightningElement ,track} from 'lwc';

export default class Helloworld extends LightningElement {

        fullname="Zero to Hero LWC Course"
        title="Lwc"
        changehandler(event){
          this.fullname=event.target.value
        }
         
        @track address={
            city:"kadapa",
            Pincode:516003,
            state:"Andhra"
        }
         trackhandler(event){

            this.address.city=event.target.value
        }
        num1=10
        num2=20
        users=["Naveen","Smith","Thaneesh"]

        get gettrsmethod(){
          return this.num1 * this.num2
        }
        get gettersUsers(){
          return this.users[0]
        }
       
    }
    
