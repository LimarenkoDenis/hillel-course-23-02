import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  genderlist = [{
    value: 'm',
    displayName: 'Male'
  },
  {
    value: 'f',
    displayName: 'Female'
  }];
  public userData = of({ name: 'Dan', email: 'li@ddd.com' }).pipe(delay(1550))


  public myFromArray: FormArray = new FormArray([
    new FormControl('Dan'),
    new FormControl('')
  ]);

  public formBd: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(3)]],
    email: ['', [Validators.email]],
    password: [''],
    confirmPassword: [],
    names:  this.formBuilder.array([
      new FormControl('')
    ])
  }, { validator: [ checkPasswordMatch ] });


  public passwordMarker = false;







  public signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl(''),
    policy: new FormControl(null, Validators.requiredTrue),
    gender: new FormControl(''),
  });

  public searchText: FormControl = new FormControl(
    'Dan',
    [ Validators.minLength(3), Validators.maxLength(5), myCustomDateValidatorFn ],
    myAsyncCustomVf
  );

  public email: FormControl = new FormControl('', [
    Validators.email, myCustomValidatorFn(6)
  ]);


  constructor(
    private  formBuilder: FormBuilder
  ) { }


  public createArrayForm() {
    return this.formBuilder.array([

    ]);
  }
  ngOnInit() {


    console.log(this.formBd);



    this.userData.subscribe((data) => {
      this.formBd.patchValue(data);
    })

    this.searchText.valueChanges.subscribe((data: string) => {
      console.log(this.searchText.valid);
      console.log(this.searchText.status);
      console.log(this.searchText.errors);



      console.log(this.searchText);
    });


    this.signUpForm.valueChanges.subscribe((data: string) => {
      console.log(this.signUpForm);
    });



    setTimeout(() => {
      this.email.setValidators(Validators.minLength(10));
    }, 3000);
  }



  tooglePasswordInput() {
    this.passwordMarker = !this.passwordMarker;
  }


  submit() {


    console.log(this.signUpForm.value);


    // this.store.dis()
    // this.mySrvice.sub(),.,
    this.signUpForm.reset();

  }


}


// class  MYVALIDATERS {
//   static myCustomValidate() {

//   }
// }


function myCustomValidatorFn(value: number) {
  return (control: AbstractControl) =>  {
    if (control.value.length === value) {
      return {
        mycustomerror: true
      };
    }
    return null;
  };

}


function myCustomDateValidatorFn(control: AbstractControl)  {
  const value: string = control.value;
  const date: any = new Date(value);


  return date === 'Invalid Date' ? { invaliddate: true } : null;
}


function myAsyncCustomVf(control: AbstractControl):
Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  {
  return of({ asyncerror: true }).pipe(delay(1500));
}


// {
//   (control: AbstractControl): ValidationErrors | null;
// }




function checkPasswordMatch(control: AbstractControl) {

  console.log(control);

  const password: AbstractControl  = control.get('password') as AbstractControl;
  const confirmPassword: AbstractControl = control.get('confirmPassword') as AbstractControl;

  return password.value === confirmPassword.value
    ? null
    : { mynomatch: true };
}
