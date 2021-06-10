import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  selectedFiles!: FileList;
  currentFile!: File;

  message = '';

  fileInfos!: Observable<any>;

  constructor(private uploadService: UploadService) { }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFile = this.selectedFiles.item(0)!;
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      err => {
        this.message = 'Could not upload the file!';
        this.currentFile = undefined!;
      });

  }

  ngOnInit() {

  }

}
