import dbConnect from "../../../utils/dbConnection";
import Urls from "../../../models/Urls";
const validUrl = require('valid-url');

dbConnect();

export default async (req, res) => {
    console.log(req.body.path);
    if(req.body.path === undefined){
        return;
    }
    const url = await Urls.findOne({ urlCode: req.body.path.substring(1) });
    if(url){
        const diff = substractDates(url.date, new Date());
        const munits = millisToMinutesAndSeconds(diff);
        if(munits.split(":")[0] > 1440){
            console.log(munits);
            return res.status(200).json({ message: "URL has expiered." });
        }

        if (!validUrl.isUri(url.originalUrl)) {
            return res.status(401).json('URL does not exist.');
        }

        return res.redirect(url.originalUrl);

    }else{
        return res.json({message: "No such URI"});
    }
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

function substractDates(date, now){
    let mongo = new Date(date);
    let diff = Math.abs(now - mongo);
    return diff;
}