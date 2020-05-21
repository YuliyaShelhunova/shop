import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  getAppDescription() {
    return { App: 'TaskManager', Ver: '1.0' };
  }
}

export const csInstance = new ConstantService();
