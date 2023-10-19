//1 import area 

//2. defination ara
export async function POST(req){

    // not get paylosad data

    // query string data recieve
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('placementId');
    return Response.json({
        name1:'Gulasing jamre',
        name2: `Barawae `,
        name3: `query string:- ${query}`
    });
};

//3. export area