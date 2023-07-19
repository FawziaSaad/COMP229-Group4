import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [ StaticDataSource, 
  {provide: StaticDataSource, useClass: StaticDataSource}]
})
export class ModelModule {}
