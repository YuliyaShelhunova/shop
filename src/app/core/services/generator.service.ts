import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(size: number): string {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;
    for (let i = 0; i < size; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    return result;
  }
}
