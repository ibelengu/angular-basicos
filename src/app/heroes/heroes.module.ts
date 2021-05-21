import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    
    declarations: [ // componentes que forman parte del módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //componentes que haces visibles al resto de la app
        ListadoComponent
    ],
    imports: [ //modulos
        CommonModule    //contiene el ngIf y ngFor y muchas cosas mas
    ]
})

export class HeroesModule {

}