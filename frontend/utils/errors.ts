import { AuthError } from "next-auth"

export class InvalidEmailOrPassword extends AuthError {
    cause = {
      type: "invalid credentials"
    }
    message = "Invalid email or password"
  }


export class SomethingWentWrong extends AuthError {
  cause = {
    type: "GenericError"
  }
  message = "Whoops! Something went wrong please try again"
}