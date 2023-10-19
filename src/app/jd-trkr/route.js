//1. import area


//2. defination area
export async function POST(rrr){

    // Payload data variable
    const {session_id,search_id,category_name,national_catid,businessids} = await rrr.json();
 
    // function return something
    return Response.json({
        info1:"session_id:- "+ session_id,
        info2:"search_id:- "+ search_id,
        info3:"category_name:- "+ category_name,
        info4:"national_catid:- "+ national_catid,
        info5:"businessids:- "+ businessids,
    })
}


//3. export area