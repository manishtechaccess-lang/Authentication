import { NextResponse, NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  try {
    const response = NextResponse.json({
      message: "Logout successfull",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
