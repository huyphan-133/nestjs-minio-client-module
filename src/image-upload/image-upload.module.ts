import { Module } from "@nestjs/common";
import { MinioClientModule } from "src/minio-client/minio-client.module";
import { ImageUploadController } from "./controller/image-upload.controller";
import { ImageUploadService } from "./service/image-upload.service";

@Module({
    imports:[MinioClientModule],
    controllers:[ImageUploadController],
    providers:[ImageUploadService]
})
export class ImageUploadModule{}