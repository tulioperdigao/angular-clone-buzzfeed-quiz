import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  imports: [],
  templateUrl: './quizz.html',
  styleUrl: './quizz.css',
})
export class Quizz {

  title:string = "";

  questions:any;
  questionSelected:any;

  answers:string[] = [];
  answerSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  constructor() {}

}
