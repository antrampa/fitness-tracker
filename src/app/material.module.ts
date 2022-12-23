import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatSlideToggleModule,
        MatButtonModule
    ],
    exports: [
        MatSlideToggleModule,
        MatButtonModule
    ]
})
export class MaterialModule {}