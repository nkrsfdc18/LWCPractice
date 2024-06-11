import { LightningElement } from 'lwc';

export default class Conditionrendering extends LightningElement {
    isVisible =false
    callrenderfunction(){
        this.isVisible=true
    }
    name
    callfunction(event){
        this.name=event.target.value
    }

    get hellomethod(){
        return this.name==='hello'
    }

}