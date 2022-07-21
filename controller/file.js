const File = require("../models/file")

exports.fileAdd = async (req, res) => {
    const result = new File({
        image: `${req.file.filename}`,
    })

    result.save()
    .then((data) => {
        res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
        res.status(400).json({ success: false, data: error });
    });
}


