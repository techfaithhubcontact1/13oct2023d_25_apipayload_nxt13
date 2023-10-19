//1. import area


//2. defination area
export async function POST(rqq) {
    
    // recieve json data from server
    const {search, national_catid } = await rqq.json();

    // receive query string from server
    const searchParams = rqq.nextUrl.searchParams
    const query = searchParams.get("searchReferer")
    return Response.json({
        msg1:'search- '+ search,
        msg2:`national_catid- ${national_catid}`,
        msg3:"searchReferer-  " + query,
    });
};



//3. export area