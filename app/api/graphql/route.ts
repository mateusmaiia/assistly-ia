import { NextResponse } from "next/server";

export async function POST(request : NextResponse){
  const {query, variables } = await request.json()

  try {
    if(query.trim().startsWith("mutation")){
      // handle mutations
    }else{
      // handle queries
    }
  } catch (error) {
    
  }
}