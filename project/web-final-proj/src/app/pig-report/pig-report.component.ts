import { HttpClient } from "@angular/common/http";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pig, PigReport } from "src/classes/pigModel";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { PasswordDialogComponent } from "../password-dialog/password-dialog.component";
import { Md5 } from "ts-md5";

export interface DialogData {
  password: "";
  key: "";
}
@Component({
  selector: "app-pig-report",
  templateUrl: "./pig-report.component.html",
  styleUrls: ["./pig-report.component.css"],
})
export class PigReportComponent implements OnInit {
  @Input() pigs: PigReport[] = [];
  password: string;
  pig: PigReport;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {}

  toggleStatus(pig: PigReport) {
    console.log(pig);
    this.updateStatus(pig);
  }
  openDialog(key: string, type: string): void {
    const dialogRef = this.dialog.open(PasswordDialogComponent, {
      width: "280px",
      data: { password: this.password, key: key },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (
        this.verifyMD5Hash(dialogRef.componentInstance.data.password) === false
      )
        return;
      if (type === "delete") {
        this.delete(dialogRef.componentInstance.data.key);
      } else if (type === "update") {
        //find pig with key
        const pig = this.pigs.find(
          (pig: PigReport) => pig.key === dialogRef.componentInstance.data.key
        );
        if (pig === undefined) return;
        this.updateStatus(pig);
      }
    });
  }
  ngOnInit(): void {
    console.log("im in report");
    var pigTime = document.getElementById("time");
    // pigTime!.innerHTML = this.formatDate(1111111)

    // console.log(this.pig.data.name)
  }
  more(id: string) {
    this.router.navigate(["/more", id]);
    console.log("in more");
  }

  delete(key: string) {
    console.log(key);
    this.httpClient
      .delete(
        "https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/" +
          key
      )
      .subscribe((data: any) => {
        console.log(data);
        window.location.reload();
      });
  }

  updateStatus(pig: PigReport) {
    this.httpClient
      .patch(
        "https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/" +
          pig.key,
        {
          data: {
            ...pig.toMap(),
            status:
              pig.status === "Retrieved" ? "Ready for pickup" : "Retrieved",
          },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        window.location.reload();
      });
  }

  verifyMD5Hash(password: string) {
    const pass = "84892b91ef3bf9d216bbc6e88d74a77c";

    const hashedPassword = Md5.hashStr(password);
    if (pass == hashedPassword) {
      console.log("password is correct");
      return true;
    } else {
      console.log("password is incorrect");
      return false;
    }
  }

  sortTable(n: any) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("reports") as HTMLTableElement;
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < rows.length - 1; i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        console.log(x.innerHTML)
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode?.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}
