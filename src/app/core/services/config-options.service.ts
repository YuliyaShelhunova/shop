import { Injectable } from '@angular/core';

export class Settings {
  public id: number;
  public login: string;
  public email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  settings: Settings = new Settings();

  constructor() { }

  configSettings(settings: Settings): void {
    this.settings.id = settings.id;
    if (settings.login) {
      this.settings.login = settings.login;
    }
    if (settings.email) {
      this.settings.email = settings.email;
    }
  }

  getSettings(): Settings {
    return this.settings;
  }
}
