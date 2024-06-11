import { LightningElement } from 'lwc';

export default class Properties extends LightningElement {
    fullname="Aura"

    changehandler(event){
        this.fullname=event.target.value
    }
    address={
      city:'kadapa',
      pin:321,
      stat:'AP'
   }
   trackhandler(event){
      this.address = {...this.address, "city" : event.target.value}
      console.log(this.address)
   }
}