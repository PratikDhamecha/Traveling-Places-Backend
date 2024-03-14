import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLODINARY_CLOUD_NAME, 
  api_key: process.env.CLODINARY_API_KEY, 
  api_secret: process.env.CLODINARY_API_SECRET 
});

const uploadCloudinary = async (filePath) => {
    try {
        if(!filePath) return null;
        //upload the file document on clodinary
        // cloudinary.v2.uploader.upload(filePath, async (error, result) => {
        //     if(error) throw new Error(error);
        //     console.log(result);
        //     //delete the file from the local storage
        //     fs.unlinkSync(filePath);
        //     return result;
        // }); 
       const response= await cloudinary.uploader.upload(filepath,{resource_type: "auto"}, function(error, result) {console.log(result, error); });
        //file uploaded successfully
        console.log("File uploaded successfully",response.url);
        return response
    }
    catch (error) {
        fs.unlinkSync(filePath);
        //remove the locally saved file operation failed as the file could not be uploaded
    }
}
 

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });