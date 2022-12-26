import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
    ]
})
export class MaterialModule {}