//1. import area 


//2. defination area
export async function POST(req){

    // payload data recieve
    const {type,eventType} = await req.json();

    //return something
    return Response.json({
        name1:`type ${type}`,
        name2:`type ${eventType}`
    })
}

//3. export area