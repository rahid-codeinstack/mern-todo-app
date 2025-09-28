import { describe , test , expect , vi } from "vitest";
import { postUser } from "./user.service";
import axios from "axios";
vi.mock("axios");
describe("user services testing ",()=>{
test(" post user request should create post new user", async ()=>{
     const mockAxios = vi.mocked(axios);
     mockAxios.post.mockResolvedValue({data:{ firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"}});
     const resulte = await postUser({
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"
     });
     expect(mockAxios.post).toBeCalled(); 
     expect(resulte.firstname).toBe("rahid")
})
})