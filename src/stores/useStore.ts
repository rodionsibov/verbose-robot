import { defineStore } from "pinia";

const apiUrl = "https://jsonplaceholder.typicode.com";

interface User {
  id: number;
  address: Address;
  company: Company;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface Address {
  suite: string;
  city: string;
  street: string;
  zipcode: string;
}

interface Company {
  name: string;
  catchPhrase: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface State {
  isSubmitting: boolean;
  currentUser: User | null;
  users: User[];
  posts: Post[];
  apiUrl: string;
}

export const useStore = defineStore("main", {
  state: (): State => ({
    users: [],
    posts: [],
    isSubmitting: false,
    currentUser: null,
    apiUrl,
  }),
  getters: {
    filteredUsers: (state) => {
      return (value: any = []) => state.users.filter(user => user.name === value)
    }
  },
  actions: {
    async getUsers() {
      try {
        this.isSubmitting = true
        const url = `${apiUrl}/users`;
        const res = await fetch(url);
        const data = await res.json();
        this.users = data
          .map((item: User) => ({
            id: item.id,
            suite: item.address.suite,
            city: item.address.city,
            street: item.address.street,
            zipcode: item.address.zipcode,
            companyName: item.company.name,
            catchPhrase: item.company.catchPhrase,
            email: item.email,
            name: item.name,
            phone: item.phone,
            username: item.username,
            website: item.website,
          }))
        this.isSubmitting = false
      } catch (error) { }
    },
    editUser(userId: number) {
      console.log('edit user', userId);

    },
    async getPosts(userId: number): Promise<void> {
      try {
        this.isSubmitting = true
        const url = `${apiUrl}/posts?userId=${userId}`;
        const res = await fetch(url);
        const data = await res.json()
        this.posts = data

        this.isSubmitting = false
      } catch (error) { }
    },
    showTooltip(msg: string) {
      console.log("Message: ", msg);
    },

  },
});
