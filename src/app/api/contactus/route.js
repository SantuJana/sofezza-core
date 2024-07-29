import connectToMongoDB from "@/libs/db"
import ContactUs from "@/libs/models/ContactUs";

export async function GET(){
    await connectToMongoDB();
    return Response.json({success: true})
}

export async function POST(request){
    await connectToMongoDB();
    const body = await request.json();
    const data = await ContactUs.create(body);
    return Response.json({success: true, message: 'Your concern successfully sent to Sofezza Core.'})
}