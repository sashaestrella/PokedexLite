import { AddPokemonComponent } from './add-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountsRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent,
        EditPokemonComponent,
        AddPokemonComponent
    ]
})
export class AccountsModule { }