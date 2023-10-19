//1. import area


//2. defination area
export async function POST(req){
    
    // every function return something 
    const { city, vid } = await req.json();

     // Quer String reiceve
     const searchParams = req.nextUrl.searchParams
     const query = searchParams.get('searchReferer')

    return Response.json({
        name:"filter1 "+ city,
        name2:`filter1 ${vid}`,
        name3: `filter3 ${query}`
    });
};


//3.export area