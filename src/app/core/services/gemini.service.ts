import { Injectable } from '@angular/core';
import { GenerateContentResult, GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { from, map, Observable, take } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private model: GenerativeModel;

  constructor() {
    const genAI = new GoogleGenerativeAI(environment.geminiApiKey);
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

  generateText(prompt: string): Observable<{ title: string; description: string }> {
    return from(this.model.generateContent(prompt)).pipe(
      take(1),
      map((value: GenerateContentResult) => JSON.parse(value.response.text().replace(/```JSON|```/g, '')))
    );
  }
}
