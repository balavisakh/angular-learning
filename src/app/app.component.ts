import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}
  
  multiArray = [];
  multiLengthFull = false;
  profileForm = this.fb.group({
    singleInput: [''],
    multiInput:['']
  });

  getInputValues(){
    let single:number = this.profileForm.value.singleInput;
    // console.log(single);
   let multi:number = this.profileForm.value.multiInput;
  //  let single = this.profileForm.value.singleInput;
   if(this.multiArray.length >=5){
    console.log("length is 5");
     return;
   }else{
    +this.multiArray.push(multi);
   }
   let sum = this.multiArray.reduce((a,b)=>{ return +a + +b });
   console.log("sum",sum);
   localStorage.setItem("sumvalue",sum);
  }
}
