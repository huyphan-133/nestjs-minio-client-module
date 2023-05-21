import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageUploadModule } from './image-upload/image-upload.module';
import { MinioClientModule } from './minio-client/minio-client.module';

@Module({
  imports: [
    MinioClientModule,
    ImageUploadModule,
    ConfigModule.forRoot({isGlobal:true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
