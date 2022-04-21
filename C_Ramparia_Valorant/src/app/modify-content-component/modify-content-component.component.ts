import { Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { Valorant } from '../helper-files/Valorant';
import { MessageService } from '../services/message.service';
import { ValorantServiceService } from '../services/valorant-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  content: Valorant;
  tags: string;
  id: string;
}

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Input() newAgent: Valorant = {title: '', description: '', abilities: '' }

  // newAgent: Valorant;
  temptags: string = "";
  tempid: string = "";
  
  @Input() buttonText: string = "Add New Content";

  @Output() newValorantEvent: EventEmitter<Valorant> = new EventEmitter<Valorant>();
  @Output() updateValorantEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private valorantService: ValorantServiceService,
    private messageService: MessageService,
    public dialog: MatDialog
    ) {
    // this.newAgent = {title: '', description: '', abilities: ''};
   }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModifyContentDialogComponent, {
      width: '400px',
        data: this.newAgent,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed');
      if(result){
        this.newAgent = result.content;
        this.tempid = result.id;
        this.temptags = result.tags;
        this.modifyOrAddItemToParent();
      }
    });
  }

  modifyOrAddItemToParent(): void{
    if(this.tempid !== ""){
      this.newAgent.tags = this.temptags ? this.temptags.split(","): [];
      this.newAgent.id = parseInt(this.tempid);

      this.valorantService.updateAgent(this.newAgent).subscribe(() => {
        this.updateValorantEvent.emit();
        this.newAgent = {
          id: 0,title: '', description: '', abilities: '', imgURL: '', type: '', tags: []
        };
        this.temptags = "";
        this.tempid = "";
      });
    }
    else{
      this.newAgent.tags = this.temptags ? this.temptags.split(","): [];

      this.valorantService.addAgent(this.newAgent).subscribe(newAgentFromServer => {
        this.newValorantEvent.emit(newAgentFromServer);
        this.newAgent = { title: '', description: '', abilities: '', imgURL: '', type: '', tags: []};
        this.temptags = "";
      })
    }
  }
}    

@Component({
  selector: 'modify-content-dialog', 
  templateUrl: 'modify-content-dialog.html',
})

export class ModifyContentDialogComponent{
  temptags: string = "";
  tempid: string = "";

  constructor(
    public dialogRef: MatDialogRef<ModifyContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataTheDialogIsReceving: Valorant, 
  ){
    this.tempid = String(dataTheDialogIsReceving.id) ?? "";
    this.temptags = (dataTheDialogIsReceving.tags ?? []).join();
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  sendDataBack(): void {
    this.dialogRef.close({
      content: this.dataTheDialogIsReceving,
      tags: this.temptags,
      id: this.tempid
    });
  }
}
