import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  msg:string = "";
    myForm:FormGroup;

    constructor(){
      this.myForm = new FormGroup({
           firstname: new FormControl("",[Validators.required, 
                                          Validators.minLength(3), 
                                          Validators.pattern("^[a-zA-Z]*$")]
                                    ),

            lastname: new FormControl("",[Validators.required, 
                                          Validators.minLength(3), 
                                          Validators.pattern("^[a-zA-Z]*$")]
                        )                                 
      });
    }
}
