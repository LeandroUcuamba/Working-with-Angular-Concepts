import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
    frm: FormGroup;

    constructor(private fb: FormBuilder){
      this.frm = this.fb.group(
        {
           'nome':['', [Validators.required]],
           'endereco':['', [Validators.maxLength(300)]],
           'email':['', [Validators.required, Validators.email]],
        }
      )
    }

    salvar(){
      console.log(this.frm.value);
    }
}
