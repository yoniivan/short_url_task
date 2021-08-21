const mongoose = require('mongoose');

const UrlsSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        require: [true, 'Please add URL'],
        unique: true,
        trim: true,
    },
    urlCode: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now,
    }
});


module.exports = mongoose.models.Urls || mongoose.model('Urls', UrlsSchema);