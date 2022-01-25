import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  validate(form){
    const values = Object.values(form) as Array<String>;
    const newValues = values.filter(val => val.length > 0 && val !== '');
    return newValues.length === 5;
  };
}
