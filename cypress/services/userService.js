
export class UserService {

    getSingleUser(userId){
        cy.request({
            method: 'GET',
            form: true,
            url: `/api/users/${userId}`
        }).then(response => {
            cy.wrap(response)
                .as('response')
            cy.get('@response').then(res => {
               expect(res.status).to.eq(200);
               expect(res.body.data.id, 'Response body userId should be').to.equal(userId);
               expect(res.body, 'Response body should have "data" property').to.have.property("data");
               expect(res.body.data, 'Response body should have "avatar" property').to.have.property("avatar");
               expect(res.body.data, 'Response body should have "email" property').to.have.property("email");
               expect(res.body.data, 'Response body should have "First Name" property').to.have.property("first_name");
               expect(res.body.data, 'Response body should have "Last Name" property').to.have.property("last_name");
               expect(res.body, 'Response body should have "support" property').to.have.property("support");
               expect(res.body.support, 'Response body should have "text" property').to.have.property("text");
               expect(res.body.support, 'Response body should have "url" property').to.have.property("url");
            });
        })
    }

    getListOfUsers(pageNumber){
        cy.request({
            method: 'GET',
            form: true,
            url: `/api/users?page=${pageNumber}`
        }).then(response => {
            cy.wrap(response)
                .as('response')
            cy.get('@response').then(res => {
               expect(res.status).to.eq(200);
               expect(res.body, 'Response body should have "data" property').to.have.property("data");
               let usersList= res.body.data;
               for (let i in usersList) {
                   let users = usersList[i];
                   expect(users, 'Response body should have "avatar" property').to.have.property("avatar");
                   expect(users, 'Response body should have "email" property').to.have.property("email");
                   expect(users, 'Response body should have "First Name" property').to.have.property("first_name");
                   expect(users, 'Response body should have "Last Name" property').to.have.property("last_name")
                   expect(users, 'Response body should have "id" property').to.have.property("id")
               };

               expect(res.body, 'Response body should have "support" property').to.have.property("support");
               expect(res.body.support, 'Response body should have "text" property').to.have.property("text");
               expect(res.body.support, 'Response body should have "url" property').to.have.property("url");
            });
        })
    }

    createUser(name, job){
        cy.request({
            method: 'POST',
            form: true,
            url: `/api/users/`,
            body: {
                "name": name,
                "job": job
            }
        }).then(response => {
            cy.wrap(response)
                .as('response')
            cy.get('@response').then(res => {
               expect(res.status).to.eq(201);
               expect(res.body, 'Response body should have "id" property').to.have.property("id");
               expect(res.body, 'Response body should have "job" property').to.have.property("job");
               expect(res.body, 'Response body should have "name" property').to.have.property("name");
               expect(res.body, 'Response body should have "createdAt" property').to.have.property("createdAt");
        })
    })
    }
}