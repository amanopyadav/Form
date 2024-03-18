import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-external-form',
  templateUrl: './external-form.component.html',
  styleUrls: ['./external-form.component.css']
})
export class ExternalFormComponent implements OnInit {
  form: SafeHtml | undefined;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getBasicForm();
  }

  getBasicForm() {
    this.http.get('assets/form.html', { responseType: 'text' }).subscribe(data => {
      this.form = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
}
