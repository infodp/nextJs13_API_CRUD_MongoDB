import connectDB from "@/lib/dbConnect";
import { StudentModel } from "@/models/Student";
import { NextResponse } from "next/server";

//Mostrar un documento
export const GET = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await StudentModel.findById(id);
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

//Eliminar un documento
export const DELETE = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await StudentModel.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { message: `Document with ID: ${id} not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

//Actualizar un documento
export const PUT = async (request, { params }) => {
    await connectDB()
    const id = params.id
    const body = await request.json()
    try {
        const result = await StudentModel.findByIdAndUpdate(id, {$set:{...body}}, {new:true})
        if(!result){
            return NextResponse.json( { message: `Document with ID: ${id} not found` }, { status: 404 });
        }
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};
