const { addNewImage, deleteImage, getImage } = require("../controllars/uplaodfile.controllar")
const upload = require("../middlewares/uploadImage")

const router = require("express").Router()

router.post("/upload" ,upload.single("file")  , addNewImage )
router.delete("/delete-file/:id" ,deleteImage )
router.get("/all-images" ,getImage )


module.exports ={router}