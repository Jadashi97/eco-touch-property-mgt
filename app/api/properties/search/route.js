import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/search
export const  GET = async(request)=> {
try {
    await connectDB();

    const {searchParams} = new URL(request.url);
    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');
} catch (error) {
    
}
}