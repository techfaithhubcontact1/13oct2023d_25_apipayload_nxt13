//1. Import Area


//2. defination Area
async function POST(req){

    // every function return something 
    const {city, area} = await req.json();
      // object.property.property
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('searchReferer')
   return Response.json({

       msg:"hello "+ city,
       msg2:`hiii ${area}`,
       msg3:`Hello ${query}`

  });
}


//3. export Area
//3.2 NAMED IMPORT 
module.exports = {POST:POST}