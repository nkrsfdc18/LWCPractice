import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {

    userNames=["Naveen","Nick","Peter","Jack","John"]
    fetchDetailshandler(){
       const elem = this.template.querySelector('h1');
       elem.style.border="3px solid red";
       elem.style.color="green";
       elem.style.fontSize="30px"
       console.log(elem.innerText)

       const elementNames = this.template.querySelectorAll('.name')
       Array.from(elementNames).forEach(item=>{
        console.log(item.innerText)
       })

       //lwc:dom manual
       const childelem = this.template.querySelector('.child');
       childelem.style.border="3px solid yellow";
       childelem.style.fontSize="20px";
       childelem.innerHTML ='<p>Hey this is Child component</p>'
    }
}