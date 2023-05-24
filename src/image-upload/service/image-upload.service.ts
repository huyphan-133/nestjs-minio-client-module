import { Injectable } from "@nestjs/common";
import { BufferedFile } from "src/minio-client/dto/minio-client.dto";
import { MinioClientService } from "src/minio-client/service/minio-client.service";

@Injectable()
export class ImageUploadService {
    constructor(private minioClientService: MinioClientService) { }

    async uploadImage(image: BufferedFile) {
        const uploadedImage = await this.minioClientService.upload(image)

        return {
            image_url: uploadedImage.url,
            message: 'Image upload successful'
        }
    }

    async deleteImage(objectName: string): Promise<void> {
        await this.minioClientService.delete(objectName)
    }
}
