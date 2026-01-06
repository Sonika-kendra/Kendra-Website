export async function createZohoLead(accessToken: string, lead: {
  firstName?: string;
  lastName: string;
  email?: string;
  phone?: string;
  company?: string;
}) {
  

  const res = await fetch(
    `${process.env.ZOHO_CRM_BASE_URL}/crm/v2/Leads`,
    {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            First_Name: lead.firstName || "New",
            Last_Name: lead.lastName || "Lead",
            Email: lead.email || "",
            Phone: lead.phone || "",
            Company: lead.company || "Website Lead",
            Lead_Source: "Website",
            Campaign_Name: "Website Enquiry",
            Owner: {
              id: process.env.ZOHO_USER_ID!
            }
          },
        ],
      }),
    }
  );

  const json = await res.json();
  console.log("lead added successfully :: ", json.data[0].details);

  if (!res.ok) {
    console.error("Zoho CRM Error:", json);
    throw new Error("Failed to create Zoho lead");
  }

  return json.data[0].details.id as string;
}

export async function sendZohoLeadEmail(
  accessToken: string,
  leadId: string,
  toEmail: string
) {
  const res = await fetch(
    `${process.env.ZOHO_CRM_BASE_URL}/crm/v2/Leads/${leadId}/actions/send_mail`,
    {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            to: [{ email: toEmail }],
            subject: "Thanks for contacting us!",
            content:
              "<p>We’ve received your enquiry. Our team will contact you shortly.</p>",
          },
        ],
      }),
    }
  );

  const json = await res.json();

  if (!res.ok || json.data?.[0]?.status !== "success") {
    console.error("Zoho email error:", json);
    throw new Error("Failed to send Zoho email");
  }
}
