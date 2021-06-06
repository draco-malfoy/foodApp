import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ngo-login-form',
  templateUrl: './ngo-login-form.component.html',
  styleUrls: ['./ngo-login-form.component.css']
})
export class NgoLoginFormComponent implements OnInit {
  
  ngoForm:FormGroup

  constructor(private fb:FormBuilder){
  let formControls= {
    fname: new FormControl('',[
      Validators.required,
      Validators.pattern("[a-zA-Z .'-]+"),
      Validators.minLength(2)
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]+"),
      Validators.minLength(10),
      Validators.maxLength(14)
    ]),
    password: new FormControl('',[
      Validators.required,
      // Validators.pattern("[a-zA-Z0-9]+\W"),
      Validators.minLength(6)
    ]),
    cpassword: new FormControl('',[
      Validators.required
    ]),
    location: new FormControl('',[
      Validators.required,
      Validators.pattern("[a-zA-Z .'-]+")
    ])
  }

   this.ngoForm=this.fb.group(formControls);
  
  }
  get fname(){ return this.ngoForm.get('fname');}
  get phone(){ return this.ngoForm.get('phone');}
  get password(){ return this.ngoForm.get('password');}
  get cpassword(){ return this.ngoForm.get('cpassword');}
  get location(){ return this.ngoForm.get('location');}
  ngOnInit(): void {
  }
 saveNgo(){
   console.log(this.ngoForm.value)
 }
}
 