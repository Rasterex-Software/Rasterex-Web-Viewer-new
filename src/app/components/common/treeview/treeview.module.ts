﻿import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { TreeviewItemComponent } from './components/treeview-item/treeview-item.component';
import { TreeviewConfig } from './models/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './helpers/treeview-event-parser';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    TreeviewComponent,
    TreeviewItemComponent
  ], exports: [
    TreeviewComponent
  ]
})
export class TreeviewModule {
  static forRoot(): ModuleWithProviders<TreeviewModule> {
    return {
      ngModule: TreeviewModule,
      providers: [
        TreeviewConfig,
        { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
      ]
    };
  }
}
