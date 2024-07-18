import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Md5 } from 'ts-md5';
import { DialogData } from '../pig-report/pig-report.component';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {

  hide = true;
  error = false;
  doneClickedOnce = false;
  ngOnInit(): void {
  }
  constructor(
    public dialogRef: MatDialogRef<PasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
    verifyPass(pass:string):void{
      this.doneClickedOnce = true;
      this.error = !this.verifyMD5Hash(pass )
      if(this.error===false){
        this.dialogRef.close();
      }
    }
    verifyMD5Hash(password: string) {
      const pass = '84892b91ef3bf9d216bbc6e88d74a77c';
  
      const hashedPassword = Md5.hashStr(password);
      if (pass === hashedPassword) {
        console.log('password is correct');
        return true;
      } else {
        console.log('password is incorrect');
        return false;
      }
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

