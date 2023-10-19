//1 import area


//2. defination area
export async function GET(req){

    // quer data recieve 
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('ajaxTemplate');
    // return somethings 
    return Response.json({
        name1:"Mukesh",
        name2:"AWASHE",
        name3:`query:- ${query}`
    });
};

//3. export area