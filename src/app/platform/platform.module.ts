import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PickerComponent} from "./components/picker/picker.component";
import {SearchComponent} from "./components/search/search.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterLink} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";
import {MatGridListModule} from "@angular/material/grid-list";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {SliderComponent} from "./components/slider/slider.component";


const FormsModules = [
  FormsModule,
  ReactiveFormsModule
];
const MaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatTableModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTabsModule,
  MatSortModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatGridListModule
];
const PlatformComponents = [
  HeaderComponent,
  FooterComponent,
  SearchComponent,
  PickerComponent,
  SliderComponent,
  CarouselComponent
];

@NgModule({
  declarations: [
    PlatformComponents
  ],
  imports: [
    RouterLink,
    CommonModule,
    FormsModules,
    MaterialModules,
    FlexLayoutServerModule,
    FlexLayoutModule.withConfig({
      ssrObserveBreakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'lt-sm', 'lt-md', 'lt-lg', 'lt-xl', 'gt-xs', 'gt-sm', 'gt- md', 'gt-lg']
    })
  ],
  exports: [
    CommonModule,
    FormsModules,
    MaterialModules,
    PlatformComponents,
    FlexLayoutModule,
    FlexLayoutServerModule
  ]
})
export class PlatformModule { }
