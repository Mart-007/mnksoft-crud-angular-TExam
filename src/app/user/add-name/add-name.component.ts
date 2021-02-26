import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.scss']
})
export class AddNameComponent implements OnInit {

 
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      current_previous_salary: ['', Validators.required],
      expected_salary: ['', Validators.required],
      night_shift_okay_with_you: ['', Validators.required],
      working_holidays: ['', Validators.required],
      reason_why_leaving: ['', Validators.required],
      laptop_specs: ['', Validators.required],
      internet_speed: ['', Validators.required],
      technical_skills: ['', Validators.required],
      pending_applications: ['', Validators.required],
      hobbies: ['', Validators.required]
     
    });

  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-name']);
      });
  }

}