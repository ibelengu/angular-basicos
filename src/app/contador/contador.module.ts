
import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
    
    declarations: [ // componentes que forman parte del módulo
        ContadorComponent
    ],
    exports: [ //componentes que haces visibles al resto de la app
        ContadorComponent
    ]
    
})

export class ContadorModule {

}