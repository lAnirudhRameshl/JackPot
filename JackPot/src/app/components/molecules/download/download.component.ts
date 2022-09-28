import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableOptionsComponent } from '../../organisms/table-options/table-options.component';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  @Output() childDownload = new EventEmitter();

  download_status:boolean=true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClicked(e:boolean){
    this.childDownload.emit(e);
  }




}
