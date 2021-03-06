import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-importazione-file',
  templateUrl: './importazione-file.component.html',
  styleUrls: ['./importazione-file.component.css']
})
export class ImportazioneFileComponent implements OnInit {

  constructor() { }

  arrayBuffer: any;
  file: any;

  ngOnInit(): void {
  }

  incomingfile(event: any)
  {
    console.log(`event`, event)
    if(event &&  event.target && event.target.files){
      this.file= event.target.files[0]; 
    }
  }
  
  Upload() {
    debugger;
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
          }
          fileReader.readAsArrayBuffer(this.file);
  }

  
}
