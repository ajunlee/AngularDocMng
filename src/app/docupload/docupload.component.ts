import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docupload',
  templateUrl: './docupload.component.html',
  styleUrls: ['./docupload.component.css']
})
export class DocuploadComponent implements OnInit {

  constructor() { }

  filesToUpload: Array<File> = [];

  ngOnInit() {
  }
  upload() {
    alert("file will be loaded");
      // const formData: any = new FormData();
      // const files: Array<File> = this.filesToUpload;
      // console.log(files);

      // for(let i =0; i < files.length; i++){
      //     formData.append("uploads[]", files[i], files[i]['name']);
      // }
      // console.log('form data variable :   '+ formData.toString());

  }

  fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      //this.product.photo = fileInput.target.files[0]['name'];
  }

  remove(file: File){
    const files: Array<File> = [];
    for(let i =0; i < this.filesToUpload.length; i++){
      if (this.filesToUpload[i] !== file){
        files.push(this.filesToUpload[i]);
      }
    }
    this.filesToUpload = files;
  }

  removeAll(){
    this.filesToUpload = [];
  }
}
