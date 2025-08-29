export default async function handler(req, res) {
  if (req.method === "POST") {
    const { wish } = req.body;

    // Basit şekilde vercel loguna yazıyoruz, istersen KV/DB eklenebilir
    console.log("Yeni dilek:", wish);

    // Burada Vercel KV veya Supabase gibi bir DB kullanabilirsin.
    // Örn: Vercel KV -> await kv.set(`wish-${Date.now()}`, wish)

    return res.status(200).json({ success: true });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
