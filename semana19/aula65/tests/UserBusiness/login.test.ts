import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.login", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'Missing input' for empty email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.login("", "123456");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });

  test("Should return 'Missing input' for empty password", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.login("astrodev@gmail.com", "");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });

  test("Should return 'User not found' when there is no user with the provided email", async () => {
    expect.assertions(3);

    const getUserByEmail = jest.fn((user: User) => {});
    userDatabase = { getUserByEmail };

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.login("no-user@gmail.com", "123456");
    } catch (err) {
      expect(getUserByEmail).toHaveBeenCalledWith("no-user@gmail.com");
      expect(err.errorCode).toBe(404);
      expect(err.message).toBe("User not found");
    }
  });

  test("Should return 'Invalid password' for invalid password", async () => {
    expect.assertions(4);
    const getUserByEmail = jest.fn((user: User) => {
      return new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "hash",
        UserRole.ADMIN
      );
    });
    userDatabase = { getUserByEmail };



    const compareHash = jest.fn(() => false);
    hashGenerator = { compareHash };

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.login("astrodev@gmail.com", "123456");
    } catch (err) {
      expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
      expect(compareHash).toHaveBeenCalledWith("123456", "hash");
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Invalid password");
    }
  });

  test("Should return the accessToken in success", async () => {
    const getUserByEmail = jest.fn((user: User) => {
      return new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "hash",
        UserRole.ADMIN
      );
    });
    userDatabase = { getUserByEmail };

    const compareHash = jest.fn(() => true);
    hashGenerator = { compareHash };

    const generateToken = jest.fn(() => "token");
    tokenGenerator = { generate: generateToken };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.login("astrodev@gmail.com", "123456");

    expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
    expect(compareHash).toHaveBeenCalledWith("123456", "hash");
    expect(generateToken).toHaveBeenCalled();
    expect(result.accessToken).toBe("token");
  });

  describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'User not found' when user does not exist", async () => {
      expect.assertions(2);
      try {
        const getUserById = jest.fn();
        userDatabase = { getUserById };
  
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getUserById("invalid-id");
      } catch (err) {
        expect(err.errorCode).toBe(404);
        expect(err.message).toBe("User not found");
      }
    });
  });

  describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'User not found' when user does not exist", async () => {
      const getUserById = jest.fn(
        (id: string) =>
          new User(
            "id",
            "Astrodev",
            "astrodev@gmail.com",
            "hash",
            stringToUserRole("ADMIN")
          )
      );
  
      userDatabase = { getUserById };
  
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );
  
      const user = await userBusiness.getUserById("id");
  
      expect(getUserById).toHaveBeenCalledWith("id");
      expect(user).toEqual({
        id: "id",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: UserRole.ADMIN,
      });
    });
  });
  describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
      expect.assertions(2);
      try {
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getAllUsers(UserRole.NORMAL);
      } catch (err) {
        expect(err.errorCode).toBe(401);
        expect(err.message).toBe("You must be an admin to access this endpoint");
      }
    });
  });

  describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
      const getAllUsers = jest.fn(() => [
        new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        ),
      ]);
      userDatabase = { getAllUsers };
  
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );
  
      const result = await userBusiness.getAllUsers(UserRole.ADMIN);
  
      expect(getAllUsers).toHaveBeenCalledTimes(1);
      expect(result).toContainEqual({
        id: "id",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: UserRole.ADMIN,
      });
    });
  });

  
});
