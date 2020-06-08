import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService, ConstantService, LocalStorageService, GeneratorService } from 'src/app/core';
import { DataGenerateFactory, DataGenerateN } from 'src/app/core/services/data-generate.factory';
import { csInstance } from 'src/app/core/services/constant.service';
import { Settings } from 'src/app/core/services/config-options.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    { provide: DataGenerateN, useFactory: DataGenerateFactory(17), deps: [GeneratorService] },
    { provide: ConstantService, useValue: csInstance },
    { provide: LocalStorageService, useClass: LocalStorageService }
  ]
})
export class AboutComponent implements OnInit {
  generatedString: string;
  content: any;
  settings: Settings;
  itemFromLS: string;

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(DataGenerateN) private generatorService: GeneratorService,
    @Optional() private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.generatedString = `Generated string: ${this.generatorService}`;
    this.content = csInstance.getAppDescription();
    this.setSettings();
    this.localStorageService.setItem('dog', 'boris');
    this.itemFromLS = this.localStorageService.getItem('dog');

  }

  setSettings() {
    const settings: Settings = new Settings();
    settings.id = 1,
    settings.login = 'yum',
    settings.email = 'yum@gm.com';
    this.configOptionsService.configSettings(settings);
  }

  getSettings() {
    this.settings = this.configOptionsService.getSettings();
  }

}
