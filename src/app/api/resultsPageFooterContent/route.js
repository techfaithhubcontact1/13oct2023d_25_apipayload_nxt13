//1. import area


//2. defination area
export async function POST(data){

    // Payload data reciive
    const {url} = await data.json();

    // query String datarecive
    const searchParams = data.nextUrl.searchParams;
    const query = searchParams.get('searchReferer')

    return Response.json({
        content1: "url:- " + url,
        content2:`searchReferer:- ${query}`
    })
}


//export area