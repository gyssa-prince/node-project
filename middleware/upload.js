import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGODB_CONNECTION_STRING,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-gyssaBlogs-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-gyssaBlogs-${file.originalname}`,
        };
    },
});

const upload= multer({ storage });
export default upload
