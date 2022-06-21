import express from "express";
import UploadedFile from "express-fileupload";
import fs from "fs"

const router = express.Router();
router.use(express.json());



router.get("/demo", async (req, res) => {
  return res.json({ sucess: true, message: "connected" })
})

console.log(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }));
console.log(new Date().toLocaleDateString())

router.use(UploadedFile()) - //upload frontend to backend npm 

  router.post("/fileupload", async (req, res) => {
    console.log("files")
    console.log(req.body)
    if (req.files) {
      console.log("if")

      var file = req.files.file
      var filename = file.name

      var date = Date()
      console.log(req.body.name + date)

      var dir = `../../Desktop/files/${req.body.name}`

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);

      }

      var foldername = `${dir}/`
      file.mv(foldername + filename, function (err) {
        if (!err) {
          console.log("sucess")
          return res.json({ success: "true", message: "file upload succesfully" })
        }
        else {
          console.log(err)
          console.log("!sucess")

          return res.json({ success: false, message: "file upload failed" })
        }
      })
    }

  })


export default router;
