const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const geoSchema = mongoose.Schema({
    type: String,
    properties: {
        userID: String,
        ownerLocation: String,
        photo: {
            type: String,
            required: true,
            unique: true
        },
        yearTaken: String,
        monthTaken: String,
        dayTaken: String,
        hourTaken: String,
        id: mongoose.Types.ObjectId
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});



global.Geo = mongoose.model("Geo", geoSchema);
