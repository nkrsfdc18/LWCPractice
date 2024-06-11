import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carlist=["Audi","Benz","Chervolet","Ford","Hyundai","TATA"]

    ceolist=[
        {
          id:1,
          company:"Amazon",
          ceo:"jeff Bezos"
          
        },
        {
            id:2,
            company:"Google",
            ceo:"Sundar"
            
          },
          {
            id:3,
            company:"Apple",
            ceo:"Tim Cook"
            
          },
          {
            id:4,
            company:"Infosys",
            ceo:"Salil Parekh"
            
          }
       ]
}