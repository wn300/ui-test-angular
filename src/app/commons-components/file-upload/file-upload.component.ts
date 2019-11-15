import { Component, OnInit, Input } from '@angular/core';
import { FileUploadService } from 'src/app/services/shared/file-upload/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() nameFile = '';
  @Input() extensions = '';
  @Input() drageable = false;
  public progressBar = '0%';
  public dragHover = false;
  public textFileUpload = '';
  public acceptExtensions =
    '.gif, .png, .jpeg, .jpg, .doc, .pdf, .docx, .xls, .xlsx';

  constructor(public fileUploadService: FileUploadService) { 
    this.fileUploadService.getCleanUpload().subscribe(clean => {
      if (clean) {
        this.progressBar = '0%';
        this.textFileUpload = '';
      }
    });
  }

  ngOnInit() {
    if (this.extensions !== '') {
      this.acceptExtensions = this.extensions;
    }

    this.progressBar = '0%';
    this.textFileUpload = '';
  }

  clickFile() {
    document.getElementById(this.nameFile).click();
  }

  fileEvent(e) {
    const file = e.currentTarget.value;
    const fileName = file.split('\\')[file.split('\\').length - 1];
    this.textFileUpload = fileName.toString();
    if (this.textFileUpload === fileName.toString()) {
      for (let i = 0; i < 101; i++) {
        setTimeout(() => {
          this.progressBar = i.toString() + '%';
        }, 500);
      }
    }
    if (this.textFileUpload === '') {
      this.progressBar = '0%';
    }

    this.fileUploadService.setObjectFile(e.target.files[0]);
  }

  onDrop(event) {
    if (this.drageable) {
      event.preventDefault();
      this.dragHover = false;
      const fileList = event.dataTransfer.files;
      if (fileList.length > 0) {
        Array.from(fileList).map(
          (file: File, key): any => {
            setTimeout(() => {
              this.textFileUpload = file.name.toString();
              this.fileUploadService.setObjectFile(file);
              let i = 0;
              const max = 100;
              const interval = setInterval(() => {
                const increment = 20;
                if (i >= max) {
                 
                  i += increment;
                } else if (i < max) {
                  this.progressBar =
                    (i = Math.min(
                      Math.max(i + increment, 0),
                      max,
                    )).toString() + '%';
                }
              }, 50);
            }, 200 * key);
          },
        );
      }
    }
  }

  onDragOver(event) {
    if (this.drageable) {
      this.dragHover = true;
      event.stopPropagation();
      event.preventDefault();
    }
  }

}
