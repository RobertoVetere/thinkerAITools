import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
  isLoading: boolean = false;
  result: string = '';
  animatedResult: string = ''; 
  htmlContent:any;

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

  modulesQuill={
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ]
  }
  
  article={
    title: "",
    description: ""
  }

  save(article:NgForm){
      console.log(article.value);
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
