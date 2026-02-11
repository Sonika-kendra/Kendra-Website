import { NextResponse } from "next/server";
import { createZohoLead, getZohoAccessToken } from "@/lib/services";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company } = body;
    const accessToken = await getZohoAccessToken(process.env.ZOHO_CRM_TOKEN!);

    const result = await createZohoLead(accessToken, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      company: company
    });

    // if (email) {
    //   await sendZohoLeadEmail(accessToken, result, email);
    // }

    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: (error instanceof Error) ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
