import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskList = [
    {task: "Add task", isCompleted: false},
    {task: "Delete task by clicking on delete", isCompleted: false},
    {task: "Complete task by ticking", isCompleted: false},
    {task: "Clear Completed task", isCompleted: true},
  ];


  formValue: string = "";

  editTarget: number = -1;
  editText: string = '';

  updateFormValue(e: any) {
    // console.log(e.target.value);
    this.formValue = e.target.value;
  }

  edit(index: number) {
    console.log(`edit ${index}`);

    if(this.taskList[index].isCompleted) {
      alert("Cannot edit already completed task");
      return;
    }

    if(this.editTarget == index) {
      this.editTarget = -1;

      if(this.editText !== '') {
        this.taskList[index].task = this.editText;
      }

    } else {
      this.editTarget = index;
    }
    
  }

  updateTask(e: any) {
    this.editText = e.target.value;
  }

  delete(index: number) {
    // console.log(`del ${index}`);
    this.taskList.splice(index, 1);
  }

  add(item: string) {
    
    if(this.formValue !== "") {
      console.log(`Add ${item}`);
      this.taskList.push({task: item, isCompleted: false});
      this.formValue = "";
    }
    
  }

  clear() {
    console.log("clear");

    this.taskList = this.taskList.filter((item) => {
      return !item.isCompleted;
    });
  }

  check(index: number) {
    console.log(`checked ${index}`);
    
    if(this.taskList[index].isCompleted) {
      console.log(`task dropped ${index}`);

      this.taskList[index].isCompleted = false;

    } else {
      console.log(`task completed ${index}`);
      this.taskList[index].isCompleted = true;
    }
    
    // console.log(e);
  }
}
