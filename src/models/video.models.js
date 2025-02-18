// A plugin is a reusable piece of code that extends the functionality of an application, framework, or library.
//  In Mongoose, plugins allow you to add extra features to schemas without modifying the core code.

// Pagination is a technique used to split large amounts of data into smaller, manageable chunks (pages) instead of loading everything at once. 
// This improves performance and user experience, especially in web applications that deal with a large number of records.

// mongoose-aggregate-paginate-v2 is a pagination plugin for Mongoose that allows you to paginate aggregation query results efficiently.
//  It is useful when working with large datasets where fetching all documents at once would be inefficient.

import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

 const videoSchema = new Schema({
    videoFile: {
        type:String, //cloudnary 
        required : true
    },
    thumbnail : {
        type:String, //cloudnary
        required:true
    },
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    duration : {
        type:Number,
        required:true
    },
    views : {
        type:Number,
        default:0
    },
    isPublished : {
        type:Boolean,
        default:true
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
 },{timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema)