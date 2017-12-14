
export class UserService {
    private users = [
        {
            username: "Nugen",
            description: "We provide the quality."
        },
        {
            username: "Varun",
            description: "CTO."
        },
        {
            username: "Kamal",
            description: "Learner."
        },
        {
            username: "Sandeep",
            description: "Learner."
        },
        {
            username: "Extra",
            description: "Working"
        },
        {
            username: "New One",
            description: "Done"
        }
    ];

    getUsers(){
        return this.users;
    }

    newUser(user) {
        this.users.push(user);
    }

    deleteUser(id) {
        this.users.splice(id, 1);
    }
}