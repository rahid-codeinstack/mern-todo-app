import { describe , test , expect , vi, beforeEach, beforeAll } from "vitest";
import { MemoryRouter} from "react-router-dom";
import { render , fireEvent , screen  } from "@testing-library/react";
import SignUp from "./signUp";
import axios from "axios";
import SignIn from "../SignIn/Signin";
const mockNavigate=vi.fn();
vi.mock("axios");
vi.mock('react-router-dom', async ()=>{
     const actual = await vi.importActual("react-router-dom");
     return {...actual,useNavigate:()=>mockNavigate};
})
beforeAll(()=>{
     vi.clearAllMocks();
})
     test("user compnent must be on te document", async ()=>{
          render(
                    <MemoryRouter>
                    <SignUp/>
                    <SignIn/>
                    </MemoryRouter>
          )
            const mockAxios = vi.mocked(axios,true);
            const firstNameInput = screen
              .getByTestId("firstname-input")
              .querySelector("input");
            const lastNameInput = screen
              .getByTestId("lastname-input")
              .querySelector("input");
            const usernameInput = screen
              .getByTestId("username-input")
              .querySelector("input");
            const emailInput = screen
              .getByTestId("email-input")
              .querySelector("input");
            const password = screen
              .getByTestId("password-input")
              .querySelector("input");
            const confirmpassword = screen
              .getByTestId("confirmpassword-input")
              .querySelector("input");
            const submiteButton = screen.getByText("Sign up");
          
            expect(firstNameInput).toBeInTheDocument();
            expect(lastNameInput).toBeInTheDocument();
            expect(usernameInput).toBeInTheDocument();
            expect(emailInput).toBeInTheDocument();
            expect(password).toBeInTheDocument();
            expect(confirmpassword).toBeInTheDocument();
            expect(submiteButton).toBeInTheDocument();
        
            

            fireEvent.change(firstNameInput, { target: { value: "rahid" } });
            fireEvent.change(lastNameInput, { target: { value: "khan" } });
            fireEvent.change(usernameInput, {
              target: { value: "rahid tanha" },
            });
            fireEvent.change(emailInput, { target: { value: "r@email.com" } });
            fireEvent.change(password, { target: { value: "rahidkhan1234" } });
            fireEvent.change(confirmpassword, {
              target: { value: "rahidkhan1234" },
            });
            mockAxios.post.mockResolvedValue({success:true,message:"register successfully",status:201});
            fireEvent.click(submiteButton);
            mockNavigate("/sign-in");
            
          });
          test('sign in link should be move to sign in page ', ()=>{
                  render(
                    <MemoryRouter>
                      <SignUp />
                      <SignIn />
                    </MemoryRouter>
                  );
                 const navigationbox = screen.getByTestId("navigation-box");
                 const signinLink = screen.getByTestId("link-to-sign-in");
                 expect(navigationbox).toBeInTheDocument();
                 expect(signinLink).toBeInTheDocument();
                 fireEvent.click(signinLink);
                 mockNavigate("/sign-in")
          })
        

