import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "my-info", "Nguyen_Tien_Thuan_CV.pdf");
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Disposition": 'inline; filename="Nguyen_Tien_Thuan_CV.pdf"',
      "Content-Type": "application/pdf",
    },
  });
}
