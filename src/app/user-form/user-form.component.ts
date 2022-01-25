import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 userForm;
 viewModel$;


  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private validator: ValidatorService
  ) {
    this.viewModel$ = this.httpService.getData();
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      "name": ['', [Validators.required]],
      "email": ['', [Validators.required]],
      "password": ['', [Validators.required]],
      "occupation": ['Select occ', [Validators.required]],
      "state": ['', [Validators.required]],
    });
  }

  onSubmit(){
    const payload = this.userForm.value;
    if(this.validator.validate(payload)){
      console.log("post data: ", this.userForm.value);
      const call = this.postForm(payload);
      alert('The user has been created! :)');
    } else {
      alert('Please make sure all fields have been completed, then submit again!')
    }
  };

  postForm(payload) {
    return this.httpService.postData(payload);
  }

}
