import { LightningElement } from 'lwc';

export default class Templateloop extends LightningElement {
    carlist=["maruti","tata","mahindra","hyundai","kia"]

    ceolist=[
            {
                id:1,
                companyname:'Amazon',
                ceo:'jeff bezos'
            },
            {
                id:2,
                companyname:'flipkart',
                ceo:'Sachin Bansal'
            },
            {
                id:3,
                companyname:'Apple',
                ceo:'Tim cook'
            },
            {
                id:4,
                companyname:'Google',
                ceo:'Sundar Pichai'
            }
    ]
}