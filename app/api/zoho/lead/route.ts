import { NextResponse } from "next/server";
import { createZohoLead, sendZohoLeadEmail } from "@/lib/zohoCRM";
import { getZohoAccessToken } from "@/lib/zohoAuth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company } = body;
    const accessToken = await getZohoAccessToken();

    const result = await createZohoLead(accessToken, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      company: company
    });

    if (email) {
      await sendZohoLeadEmail(accessToken, result, email);
    }

    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
