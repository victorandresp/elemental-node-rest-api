const { UserService } = require("../../../src/services")
let { UserModelMock: { user, users }, UserRepositoryMock } = require("../../mocks")

describe("User Service Test", ()=>{
    beforeEach(() =>{
       jest.clearAllMocks(); 
    })

    it("Should find a user by id", async () => {
        const UserRepository = UserRepositoryMock
        UserRepository.get.mockReturnValue(user)

        const _userService = new UserService({ UserRepository })
        const expected = await _userService.get(user._id)
        expect(expected).toMatchObject(user)
    })

    it("Should find a user by username", async () => {
        const UserRepository = UserRepositoryMock
        UserRepository.getUserByUsername.mockReturnValue(user)

        const _userService = new UserService({ UserRepository })
        const expected = await _userService.getUserByUsername(user.username)
        expect(expected).toMatchObject(user)
    })
})