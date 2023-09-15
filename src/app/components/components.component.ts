import { Component ,OnInit} from '@angular/core';
import { Todo } from '../Models/Todo'; 
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
 

  todos!:Todo[];
  inputTodo: string=" ";

  constructor(){}


  ngOnInit(): void {
    this.todos=[
      {
        content:'first content',
        completed:false

      },
      {
        content:'second content',
        completed: false

      },
      {
        content:'third content',
        completed:true

      },
    ]
 
  }

toggleDone (id:number){
  this.todos.map((v,i) => {
    if(i == id) v.completed =!v.completed;

    return v;
  })
}
   deleteTodo (id:number){
    this.todos=this.todos.filter((_v,i)=> i!== id);
   }
  addTodo (){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });
    this.inputTodo=" ";
  }
}

