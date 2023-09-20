import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ],
})
export class AppMaterialModule {}
// Esse módulo foi criado para concentrar todos os imports relacionados ao Angular Material
// e apenas exportar esse módulo, para que outras páginas tenham acesso a esses imports
