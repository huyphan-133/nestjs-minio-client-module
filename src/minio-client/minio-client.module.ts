import { Module } from '@nestjs/common';
import { MinioModule } from 'nestjs-minio-client';
import { MinioClientService } from './service/minio-client.service';
import {ConfigModule, ConfigService} from '@nestjs/config';

@Module({
  imports: [
    MinioModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        endPoint: configService.get('minio_endpoint'),
        port: parseInt(configService.get('minio_port')),
        useSSL: JSON.parse(configService.get('minio_use_ssl')), 
        accessKey: configService.get('minio_access_key'),
        secretKey: configService.get('minio_secret_key'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MinioClientService],
  exports: [MinioClientService],
})
export class MinioClientModule {}