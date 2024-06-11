import { LightningElement } from 'lwc';

export default class QuizApp3 extends LightningElement {

    selected={}
    correctAnswers=0
    myquestions=[
             {
                id:"q1",
                Question:"Which one of the following is not salesofrce admin skill?",
                options:{
                    a:"dashboards",
                    b:"workflow",
                    c:"oracle"
                         },
                         answer:"c"
             },
             {
                id:"q2",
                Question:"Which one of the following is not salesofrce develop skill?",
                options:{
                    a:"dashboards",
                    b:"Apex",
                    c:"Trigger"
                         },
                         answer:"a"
             },
             {
                id:"q3",
                Question:"Which one of the following is not salesofrce cpq skill?",
                options:{
                    a:"Price",
                    b:"Product",
                    c:"oracle"
                         },
                         answer:"c"
             }
    ]

    changehandler(event){
    //   console.log("name",event.target.name)
    //   console.log("value",event.target.value)
    const {name, value} = event.target 
    this.selected={...this.selected, [name]:value}
      console.log(this.selected)
    }
    get allNotselected(){
        
        return !(Object.keys(this.selected).length === this.myquestions.length)
    }
    submithandler(event){
        event.preventDefault()
       
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.answer)
        console.log(correct)
        this.correctAnswers=correct.length
        console.log("the correct Ansers are:", this.correctAnswers)
    }

    resethandler(){
        this.selected={}
        this.correctAnswers=0
    }
}