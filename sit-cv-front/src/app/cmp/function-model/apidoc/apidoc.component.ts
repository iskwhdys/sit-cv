import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
import { FunctionModelApiDoc } from 'src/app/srv/function-model/function-model-apidoc';

@Component({
  selector: 'app-apidoc',
  templateUrl: './apidoc.component.html',
  styleUrls: ['./apidoc.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ApiDocComponent implements OnInit {
  apiDocId = '';
  apiDoc: FunctionModelApiDoc;

  constructor(@Inject (MAT_SNACK_BAR_DATA) public data: any, public snackBar:MatSnackBar) { }

  ngOnInit() {
    this.apiDocId = this.data.apiDocId;
    this.apiDoc = this.data.apiDocs[this.apiDocId];
  }

  close() {
    this.snackBar.dismiss();
  }

}