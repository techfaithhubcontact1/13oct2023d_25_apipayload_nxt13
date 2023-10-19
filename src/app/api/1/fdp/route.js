//1 import area

//2. defination area
export async function POST(qq){

    //payload data varb
    const { mpid,pn } = await qq.json();

    // return something
    return Response.json({
       name1:'mpid' + mpid,
       name2:`mpid:- ${pn}`,
    });
};

//3. export area