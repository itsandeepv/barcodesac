const NewPdf = require("../modal/fileModal");
const fs = require("fs")

const addNewImage = async (req, res) => {
    try {
        let file = req.file
        // Check if file was uploaded
        if (!file) {
            return res.status(400).json({status:false, message: 'No file uploaded' });
        }

        const img_url = `${req.protocol}://${req.get('host')}/${file.destination}${file.filename}`
        // Save the file information in the database
        const newImage = new NewPdf({
            ...req.body,
            img_url: img_url,
            imagesDetails: file,
        });

        // Save the image document to MongoDB
        const savedImage = await newImage.save();

        // Respond with the uploaded file details and MongoDB document info
        res.status(200).json({
            status:true,
            message: 'File uploaded successfully',
            file: file,
            dbEntry: savedImage,
        });

    } catch (err) {
        // Handle any errors
        console.error('Error uploading file:', err);
        res.status(500).json({status:false, message: 'Server error', error: err });
    }
}
const deleteImage = async (req, res) => {
    try {
        const imageId = req.params.id;
        
        // Find the image by ID in the database
        const image = await NewPdf.findById(imageId);
        if (!image) {
            return res.status(404).json({ status:false, message: 'Image not found!' });
        }
        // Delete the file from the folder
        const filePath = image.imagesDetails.path;
        fs.unlink(filePath, (err) => {
            if (err) {
                return res.status(500).json({status:false, message: 'Error deleting file from server!', error: err });
            }

            NewPdf.findByIdAndRemove(imageId, (err) => {
                if (err) {
                    return res.status(500).json({status:false, message: 'Error deleting image from database!', error: err });
                }
                return res.status(200).json({ status:true,message: 'File and database entry deleted successfully!' });
            });
        });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err });
    }
}


const getImage = async (req, res) => {
    const data = await NewPdf.find()
    res.status(200).json({status:true, message: 'All files',data });

}




module.exports = {
    addNewImage,
    deleteImage,
    getImage
}