//1. import area


//2. defination area 
export async function POST(req){

    //payload 
    const {events,impressionId} = await req.json();
    return Response.json({
        batch1: `events:- ${events}`,
        batch2: `impressionId:- ${impressionId}`
    })
}

//3.export area