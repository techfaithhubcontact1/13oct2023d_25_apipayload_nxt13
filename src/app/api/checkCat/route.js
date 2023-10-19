//1. import area


//2. defination area
export async function POST(request){
     
    //Payload
    const {ncatid} = await request.json();
    //Query string
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("searchReferer");

    return Response.json({
        test1:"checkCart- " + ncatid,
        test2:`searchReferer- ${query}`
    });
};

//3. export area