/**
 * @jest-environment node
 */
import { GET } from "@/app/api/hello/route";

describe('/hello API', () => {
  it('should return message', async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({"message": "hellos"});
  });
});