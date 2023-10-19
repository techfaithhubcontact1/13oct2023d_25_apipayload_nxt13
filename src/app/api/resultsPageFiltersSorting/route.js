//1. import area


//2. defination as=rea
export async function POST(req){

    //Payload recieve
    const {city} = await req.json();
    //Query string recieve
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('searchReferer');
    
    //return something 
    return Response.json({
        sort:"city- "+ city, 
        sort2:"searchReferer- " + query
    });
};

///3. export area