import { NextResponse } from "next/server";
import { createZohoLead, getZohoAccessToken } from "@/lib";

type ZohoLeadPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
};

function toText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ZohoLeadPayload;
    const firstName = toText(body.firstName);
    const lastName = toText(body.lastName);
    const email = toText(body.email);
    const phone = toText(body.phone);
    const company = toText(body.company);
    const service = toText(body.service);
    const message = toText(body.message);

    const accessToken = await getZohoAccessToken(process.env.ZOHO_CRM_TOKEN!);

    const result = await createZohoLead(accessToken, {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      message,
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
      { error: (error instanceof Error) ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
