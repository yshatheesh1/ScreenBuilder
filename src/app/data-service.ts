import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public container: FormGroup;
  constructor(private fb: FormBuilder) {
    this.container = this.fb.group({});
  }
}
