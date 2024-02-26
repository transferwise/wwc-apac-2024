/**
 * @jest-environment node
 */
import { GET } from "@/app/api/transfers/[transfer]/route";

describe('GET /transfers', () => {
  it('should return single transfer information', async () => {
    const req = {}
    const reqParams = {params: {transfer: 1}}
    const res = await GET(req, reqParams);
    // how to mock?? mock knex????
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({"message": "hellos"});
  });
});