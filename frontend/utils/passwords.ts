import bcrypt from "bcryptjs";


// TODO: maybe do zmiany z throw new Error na throw new AuthError albo custom

export async function hashPassword(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw new Error("Something went wrong while hashing the password");
  }
}

export async function verifyPassword(
  hashedPassword: string,
  password: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (err) {
    throw new Error("Something went wrong while verifying password");
  }
}
