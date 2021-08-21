import dbConnect from "../../../utils/dbConnection";
import UrlsModel from "../../../models/Urls";
import Urls from "../../../models/Urls";
var shortid = require('shortid');
const validUrl = require('valid-url')
import settings from "../../../next.config";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            getUrls(res);
            break;
        case 'POST':
            try{
                // I didn't check if the given URL is valid becase i don't any valid URL's.  
                console.log("POST REQUEST");
                console.log(settings.env.REDIRECT_DOMAIN);

                const originalUrl = req.body.originalUrl;
                if(originalUrl === undefined || originalUrl === ""){
                    return res.status(401).json('Invalid URL');
                }
                console.log(originalUrl);
                const urlCode = shortid.generate();
                
                const baseUrl = settings.env.REDIRECT_DOMAIN;
                if (!validUrl.isUri(baseUrl)) {
                    return res.status(401).json('Invalid base URL');
                }
                let urlFromDB = await Urls.findOne({originalUrl});

                if(urlFromDB){
                    res.json(urlFromDB);
                }else{
                    const url = await saveObj(baseUrl, urlCode, originalUrl);
                    console.log(url);
                    res.status(201).json({ success: true, data: url });
                }
            } catch(error){
                res.status(400).json({ success: false, message: "Exception from POST: " + error.message });
            }
    }
}

async function getUrls(res){
    try {
        console.log("GET REQUEST");
        const get_urls = await UrlsModel.find({});
        res.status(200).json({ success: true,  data: get_urls});
    } catch(error){
        res.status(400).json({ success: false, message: "Exceprion from getUrls: " + error.message });
    }
}

async function saveObj(baseUrl, urlCode, originalUrl){
    try{
        const shortUrl = baseUrl + '/' + urlCode;
        const url = new Urls({
            originalUrl,
            urlCode,
            shortUrl,
            date: new Date(),
        });
        await url.save();
        console.log("Url saved");
        return url;
    }catch(err){
        console.log("Exception from saveObj: " + err.message);
        return false;
    }
}