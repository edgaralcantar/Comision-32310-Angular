import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {  MatDialogModule} from '@angular/material/dialog';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';


import {MatRadioModule} from '@angular/material/radio';


import { MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatSidenavModule, 
        MatListModule,
        MatToolbarModule,
        MatRadioModule
      
    ],
    exports: [
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatSidenavModule,
        MatRadioModule,
        MatListModule,
        MatToolbarModule,
     
    ]
})
export class MaterialModule{}