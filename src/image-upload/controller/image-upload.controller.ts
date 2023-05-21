import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { BufferedFile } from "src/minio-client/dto/minio-client.dto";
import { ImageUploadService } from "../service/image-upload.service";

@Controller('api/v1/image-upload')
export class ImageUploadController{
    constructor(private imageUploadService: ImageUploadService){}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() image: BufferedFile){
        return await this.imageUploadService.uploadImage(image);
    }
}