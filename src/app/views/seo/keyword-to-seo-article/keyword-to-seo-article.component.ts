import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-keyword-to-seo-article',
  templateUrl: './keyword-to-seo-article.component.html',
  styleUrls: ['./keyword-to-seo-article.component.scss']
})
export class KeywordToSeoArticleComponent {
  isLoading: boolean = false;
  result: string = '';
  animatedResult: string = ''; // Para mostrar la animación letra por letra

  constructor(private http: HttpClient) {}

  onSubmit(textInput: HTMLInputElement) {
    const articleKeyword = textInput.value; // Obtén el valor del input sin eliminar espacios
    
    if (articleKeyword.trim() === '') {
      // El campo de entrada está vacío, muestra un mensaje de error
      //console.error('El campo de entrada está vacío');
      alert('Introduce una keyword valida para escribir el articulo ejemplo: ');
      return;
    }
  
    this.isLoading = true;
    this.animatedResult = '';
    const apiUrl = 'https://text-to-sql-34so.onrender.com/api/v1/request/keyword-to-seo-article';
  
    this.http.post(apiUrl, articleKeyword, { responseType: 'text' }).subscribe(
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





