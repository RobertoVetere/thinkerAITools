import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fact-check',
  templateUrl: './fact-check.component.html',
  styleUrls: ['./fact-check.component.scss']
})
export class FactCheckComponent {
  isLoading: boolean = false;
  result: string = '';
  animatedResult: string = ''; // Para mostrar la animación letra por letra

  constructor(private http: HttpClient) {}

  onSubmit(textInput: HTMLInputElement) {
    this.isLoading = true;
    this.animatedResult = '';
    const queryText = textInput.value;
    const apiUrl = 'https://text-to-sql-34so.onrender.com/api/v1/request/trivial';
  
    const requestBody = { text: queryText };
  
    this.http.post(apiUrl, requestBody, { responseType: 'text' }).subscribe(
      (response: string) => {
        console.log(response);
        this.result = response;
        this.animateResult(); // Llama a la función para animar el resultado
        this.isLoading = false;
      },
      error => {
        console.error('Error al realizar la consulta:', error);
        this.result = 'Error al realizar la consulta';
        this.isLoading = false;
      }
    );
  }

  animateResult() {
    const resultArray = this.result.split('');
    let currentIdx = 0;

    const animationInterval = setInterval(() => {
      if (currentIdx < resultArray.length) {
        this.animatedResult += resultArray[currentIdx];
        currentIdx++;
      } else {
        clearInterval(animationInterval);
      }
    }, 50); // Intervalo de tiempo entre cada letra (en milisegundos)
  }
}