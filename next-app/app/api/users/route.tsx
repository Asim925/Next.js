import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // NextRequest prevents caching
  return NextResponse.json([
    { id: 1, name: "Ali" },
    { id: 2, name: "Asim" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Ali" },
    { id: 5, name: "Asim" },
    { id: 6, name: "Ahmed" },
    { id: 7, name: "Ali" },
    { id: 8, name: "Aliza" },
    { id: 9, name: "Asim" },
    { id: 10, name: "Ahmed" },
  ]);
}
