import { createServerActionProcedure } from "zsa";
import { auth } from "@/auth";

const authenticateUserPrecedure = createServerActionProcedure().handler(
    async () => {
      try {
          const session = await auth();
          console.log(session)
          if (!session?.user) return null;
      } catch (err) {
        throw new Error("User not authenticated");
      }
    }
  );