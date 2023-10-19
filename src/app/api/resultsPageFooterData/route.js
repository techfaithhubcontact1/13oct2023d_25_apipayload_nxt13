//1. import area


//2. definatin area
export async function POST(req){


    //payload data
    const {catname} = await req.json();

    // Query String data
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('searchReferer');
    // Returning area 
    return Response.json({
        footer1:"catname" + catname,
        footer2:`searchReferer- ${query }`
    })
}

//3.export area