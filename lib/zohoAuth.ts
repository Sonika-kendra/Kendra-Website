let cachedToken: {
  accessToken: string;
  expiry: number;
} | null = null;

export async function getZohoAccessToken() {
  // Use cached token if valid
  if (cachedToken && Date.now() < cachedToken.expiry) {
    return cachedToken.accessToken;
  }

  const params = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    client_id: process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    grant_type: "refresh_token",
  });

  const res = await fetch(
    `${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );

  const data = await res.json();

  if (!data.access_token) {
    console.error("Zoho Token Error:", data);
    throw new Error("Failed to refresh Zoho access token");
  }

  cachedToken = {
    accessToken: data.access_token,
    expiry: Date.now() + (data.expires_in - 60) * 1000, // buffer
  };

  return cachedToken.accessToken;
}
