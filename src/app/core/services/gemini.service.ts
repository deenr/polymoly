import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { GenerateContentResult, GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { catchError, from, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private model: GenerativeModel;

  constructor() {
    const genAI = new GoogleGenerativeAI(environment.GEMINI_API_KEY);
    const generationConfig = {
      temperature: 0.9,
      top_p: 1,
      top_k: 32,
      maxOutputTokens: 100 // limit output
    };
    this.model = genAI.getGenerativeModel({
      model: 'gemini-pro', // or 'gemini-pro-vision'
      ...generationConfig
    });
  }

  generateText(prompt: string): Observable<JSON> {
    return from(this.model.generateContent(prompt)).pipe(
      take(1),
      map((value: GenerateContentResult) => JSON.parse(value.response.text().replace(/```JSON|```/g, ''))),
      catchError((error) => {
        console.error('Error occurred, retrying...', error);
        return from(this.model.generateContent(prompt)).pipe(
          take(1),
          map((value: GenerateContentResult) => JSON.parse(value.response.text().replace(/```JSON|```/g, ''))),
          catchError((finalError) => {
            console.error('Second attempt failed.', finalError);
            return finalError;
          })
        );
      })
    );
  }
}
