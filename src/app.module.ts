import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userController } from './user.controller';
import { userService } from './user.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { OrderModule } from './order/order.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [OrderModule, InvoiceModule],
  controllers: [AppController,userController, ProductController],
  providers: [AppService,userService, ProductService],
})
export class AppModule {}
