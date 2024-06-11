import { LightningElement } from 'lwc';

export default class QuizApp2withLWC extends LightningElement {

    selected={}  //to store the answers in this object
    correctAnswers=0 //to show the Result
    isSubmitted=false
    get isScoredfull(){
        return `slds-text-heading_large ${this.myquestions.length === this.correctAnswers?
            `slds-text-color_success`:`slds-text-color_error`}`
      
    }
    myquestions=[
        {
            id:"q1",
            question:"which of the following is not a Pricing Method ?",
            options:{  
                a:"Pricing",
                b:"List",
                c:"Block",
                
            },
            correctAnswer:"a"
        },
        
        {
            id:"q2",
            question:"which of the following is not a Option type?",
            options:{  
                a:"Component",
                b:"Accessory",
                c:"Block",
            },
            correctAnswer:"c"
        },
            {
                id:"q3",
                question:"which of the following is not Template content ?",
                options:{  
                    a:"Html",
                    b:"LWC",
                    c:"Visual",
                    
                },
                correctAnswer:"b"
            }
                ]


              get allNotselected(){
                 
                 return !(Object.keys(this.selected).length === this.myquestions.length)
                }
                changeHandler(event){
                    // console.log("name", event.target.name)
                    // console.log("value", event.target.value)
                    const {name,value} = event.target
                    // const.name=event.target.name
                    // const.value=event.target.value
                    this.selected={...this.selected, [name]:value} //this will store the options like "Question":"option"

                }

                submitHandler(event) {
                    event.preventDefault();
                
                    let correct = this.myquestions.filter(item => this.selected[item.id] === item.correctAnswer);
                    this.correctAnswers = correct.length; // Correctly assigns the number of correct answers
                    this.isSubmitted = true;
                }
                

                resethandler(){
                    this.selected={}
                    this.correctAnswers=0
                    this.isSubmitted=false

                }
}