import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-eleve-add',
  templateUrl: './eleve-add.component.html',
  styleUrls: ['./eleve-add.component.scss'],
})
export class EleveAddComponent implements OnInit {
  step = 1;
  steps: any[] = [];

  // personal infos - [ eleveInfo ]
  firstName: FormControl = new FormControl('', [Validators.required]);
  lastName: FormControl = new FormControl('', [Validators.required]);
  date: FormControl = new FormControl('', [Validators.required]);
  sex: FormControl = new FormControl('', [Validators.required]);
  cni: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required]);
  tele: FormControl = new FormControl('', [Validators.required]);
  address: FormControl = new FormControl('', [Validators.required]);

  // inscriptoion  - [ inscription ]

  ins_group: FormControl = new FormControl('', [Validators.required]);
  ins_prix_monatly: FormControl = new FormControl('', [Validators.required]);
  ins_prix_inscription: FormControl = new FormControl('', [
    Validators.required,
  ]);

  eleveInfo: FormGroup = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    date: this.date,
    sex: this.sex,
    cni: this.cni,
    email: this.email,
    tele: this.tele,
    address: this.address,
  });

  inscription: FormGroup = this.fb.group({
    ins_group: this.ins_group,
    ins_prix_monatly: this.ins_prix_monatly,
    ins_prix_inscription: this.ins_prix_inscription,
  });

  form: FormGroup = this.fb.group({
    eleveInfo: this.eleveInfo,
    inscription: this.inscription,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.steps = [
      {
        id: 1,
        label: 'Coordonnées',
        active: true,
        valid: false,
        form: this.eleveInfo,
      },

      {
        id: 2,
        label: 'Insriptions',
        active: false,
        valid: false,
      },
      {
        id: 3,
        label: 'Validation',
        active: false,
        valid: false,
      },
    ];
  }

  next() {
    let form: FormGroup = this.steps[this.step - 1]['form'];

    console.log(this.form.value);

    if (true) {
      this.steps[this.step - 1 ]['valid'] = true;
      this.steps[this.step]['active'] = true;
      this.step++;
    } else {
      // show errores
      console.log(form);
    }
  }

  prev() {
    this.steps[this.step - 1]['valid'] = false;
    this.steps[this.step - 1]['active'] = false;

    this.step--;
  }
}
