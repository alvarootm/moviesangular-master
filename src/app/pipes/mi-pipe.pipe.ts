import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe' 
})
export class MiPipePipe implements PipeTransform {
  transform(fecha: string): string {
    if (!fecha || fecha.length < 10) return 'Fecha no disponible';
    
    // Convierte de 'YYYY-MM-DD' a 'DD/MM/YYYY'
    const partes = fecha.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
}