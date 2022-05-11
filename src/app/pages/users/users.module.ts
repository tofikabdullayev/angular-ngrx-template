import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ApiService } from 'src/app/state/api.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, CommonModule, NzTableModule],
  exports: [UsersComponent],
  providers: [ApiService],
})
export class UsersModule {}
