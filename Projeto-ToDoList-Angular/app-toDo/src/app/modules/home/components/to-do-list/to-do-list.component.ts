import { Component, DoCheck, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  public taskList:Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }

  ngDoCheck() {
    this.setLocalStorage();
  }
  
  setEmitTaskList(event:string){
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event:number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirmDeleteAll = window.confirm("Deseja deletar tudo?")
    if (confirmDeleteAll){
      this.taskList = []
    }
  }

  public validationInput(event:string, index:number){

    if (!event.length){
      const confirm = window.confirm("Tarefa vazia. Deseja deletar?");
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked)); //Jogando os que foram marcados para baixo
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
