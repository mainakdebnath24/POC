import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  eduCreationForm = this.formBuilder.group({
    secname:['',[Validators.required, Validators.maxLength(50)]],
    secnum:['',[Validators.required, Validators.pattern("[0-9]+"), Validators.maxLength(2)]],
    srsecname:['',[Validators.required, Validators.maxLength(50)]],
    srsecnum:['',[Validators.required, Validators.pattern("[0-9]+"), Validators.maxLength(2)]],
    uniname:['',[Validators.required, Validators.maxLength(50)]],
    uninum:['',[Validators.required, Validators.pattern("[0-9]+"), Validators.maxLength(2)]],
    compname:['',[Validators.required, Validators.maxLength(50)]],
    compnum:['',[Validators.required, Validators.pattern("[0-9]+"), Validators.maxLength(2)]],
  })

  ngOnInit(): void {
  }

}
