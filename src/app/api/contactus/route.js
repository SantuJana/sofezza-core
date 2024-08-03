import connectToMongoDB from "@/libs/db"
import ContactUs from "@/libs/models/ContactUs";
import { writeFile, mkdir } from "fs/promises";
import sendMail from "../_utils/sendMail";

export async function GET(){
    await connectToMongoDB();
    return Response.json({success: true})
}

export async function POST(request){
    const formData = await request.formData();
    const file = formData.get('file');
    const name = formData.get('name');
    const email = formData.get('email');
    const mobile = formData.get('mobile');
    const service = formData.get('service');
    const other = formData.get('other');
    const message = formData.get('message');
    let fileName, attachments;
    

    if (file && file?.name){
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        fileName = `${Date.now()}_${file.name}`
        const basePath = `./public/upload`;
        const path = `${basePath}/${fileName}`;
        await mkdir(basePath, {recursive: true});
        await writeFile(path, buffer);
        attachments = [{filename: file.name, content: buffer}]
    }

    const contactUs = ContactUs({
        name, email, mobile, service, other, message, attachment: fileName
    })

    await connectToMongoDB();

    await contactUs.save();

    const to = 'santujana.1998@gmail.com, sampan.999lahiri@gmail.com, mishrar081@gmail.com';
    const subject = 'Contact Us';
    const html = `
        <p><b>Name: </b>${name}</p>
        <p><b>Email: </b>${email}</p>
        <p><b>Mobile: </b>${mobile}</p>
        <p><b>Service: </b>${service}</p>
        ${ service == 'Others' ? `<p><b>Others: </b>${other}</p>` : ''}        
        <p><b>Message: </b>${message}</p>
    `

    sendMail(to, subject, html, attachments);

    return Response.json({success: true, message: 'Your concern has been sent to your team'})

}