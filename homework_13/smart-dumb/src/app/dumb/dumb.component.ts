import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {

  private _name: String;
  public get name(): String {
    return this._name;
  }
  private _course: String;
  public get course(): String {
    return this._course;
  }
  private _professor: String;
  public get professor(): String {
    return this._professor;
  }
  private _grade: number;
  public get grade(): number {
    return this._grade;
  }
  
  private _model:any;
  @Input() set model(val:any){
    this._name = val.name;
    this._course = val.course;
    this._professor = val.professor;
    this._grade = val.grade;
    this._model = val;
  }

  get model():any{
    return this._model;
  }

  constructor() { }

  ngOnInit() {
  }

}
