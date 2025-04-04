// import { writeFile } from 'fs/promises';
// import { NextResponse } from 'next/server';
// import path from 'path';

// export async function POST(request) {
//   try {
//     const data = await request.formData();
//     const file = data.get('file');

//     if (!file) {
//       return NextResponse.json({ error: "No file received." }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
    
//     const filename = Date.now() + '_' + file.name;
//     const filepath = path.join(process.cwd(), 'public/uploads', filename);
    
//     await writeFile(filepath, buffer);
    
//     return NextResponse.json({ 
//       message: "File uploaded successfully",
//       filename: `/uploads/${filename}`
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }




import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request) {
  try {
    const data = await request.formData()
    const file = data.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file received.' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'uploads' }, // Optional: You can specify a folder
          (error, result) => {
            if (error) return reject(error)
            resolve(result)
          }
        )
        stream.end(buffer)
      })
    }

    const result = await uploadToCloudinary()

    return NextResponse.json({
      message: 'File uploaded to Cloudinary successfully.',
      imageUrl: result.secure_url,
      public_id: result.public_id
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
