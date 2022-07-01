import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList:string = ""; 
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    } else{
      window.alert("Digite uma tarefa")
    }
  }
}
