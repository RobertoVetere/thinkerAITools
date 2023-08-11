import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-to-sql',
  templateUrl: './text-to-sql.component.html',
  styleUrls: ['./text-to-sql.component.scss']
})
export class TextToSqlComponent {
  isLoading: boolean = false;
  result: string = '';
  animatedResult: string = ''; // Para mostrar la animación letra por letra

  constructor(private http: HttpClient) {}

  onSubmit(textInput: HTMLInputElement) {
    this.isLoading = true;
    const queryText = textInput.value;
    const apiUrl = 'https://text-to-sql-34so.onrender.com/api/v1/request/text-to-sql';
  
    const requestBody = { text: queryText };
  
    this.http.post(apiUrl, requestBody, { responseType: 'text' }).subscribe(
      (response: string) => {
        console.log(response);
        this.result = response;
        this.isLoading = false;
      },
      error => {
        console.error('Error al realizar la consulta:', error);
        this.result = 'Error al realizar la consulta';
        this.isLoading = false;
      }
    );
  }
}
