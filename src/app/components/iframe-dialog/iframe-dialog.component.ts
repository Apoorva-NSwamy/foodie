import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-dialog',
  templateUrl: './iframe-dialog.component.html',
  styleUrls: ['./iframe-dialog.component.scss']
})
export class IframeDialogComponent implements OnInit {
  safeUrl: SafeResourceUrl;
  constructor(
    public dialogRef: MatDialogRef<IframeDialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    const link = this.data.link.replace('watch?', 'embed/');
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
