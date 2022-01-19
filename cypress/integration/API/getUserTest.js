import { UserService } from "../../services/userService"

const userService = new UserService();

describe('Api testing', () => {
   it('Retrieve a single user - GET', () => {
       userService.getSingleUser(2);
   });

   it('Retrieve a list of users - GET', () => {
       userService.getListOfUsers(1);
   });

   it('Create a user - POST', () => {
       userService.createUser("test", "manager");
   });

   it('Retrieve a single user not found - GET', () => {
       userService.getSingleUserNotFound(2323232);
   });
});