
export const watchVideoController = (req, res) =>{
    console.log(req.params);
    return res.send(`Watch Video ${req.params.id}`);
};

export const editVideoController = (req, res) => {
    console.log(req.params);
    return res.send("Edit Video");
};

export const uploadVideoController = (req, res) =>{
    console.log(req.params);
    return res.send(`Upload Video ${req.params.id}`);
};

export const deleteVideoController = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
};

export const commentsController = (req, res) => {
    console.log(req.params);
    return res.send("Comments");
};

export const deleteCommentsController = (req, res) => {
    console.log(req.params);
    return res.send("Comments Delete Video");
};