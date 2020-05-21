import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const DataGenerateN = new InjectionToken<string>('DataGenerateN');

export function DataGenerateFactory(n: number) {
  return (gs: GeneratorService): string =>
    gs.generate(n);
}
