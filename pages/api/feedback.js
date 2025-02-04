import connectDb from "../../libs/connect";
import FeedBack from "../../libs/model/feedback";

export default async function handler(req,res) {
    if(req.type==="Get"){
        return res.json({msg:"Get is not allowed in this route"});
    }
    else{
        const {content, name} = req.body;
        console.log(content+","+name);
        await connectDb();
        const feedback = new FeedBack({name:name, content:content});
        await feedback.save();
        console.log(feedback);
        return res.json({msg:"success"});
    }
}