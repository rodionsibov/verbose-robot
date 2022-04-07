import { defineStore } from "pinia";

const apiUrl = "https://jsonplaceholder.typicode.com";

export interface User {
  id: number;
  address: Address;
  company: Company;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface Address {
  suite: string;
  city: string;
  street: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface State {
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
  getters: {},
  actions: {
    async getUsers() {
      try {
        this.isSubmitting = true
        const url = `${apiUrl}/users`;
        const res = await fetch(url);
        const data = await res.json();
        this.users = data;
        this.isSubmitting = false
      } catch (error) { }
    },
    async getPosts(userId: number) {
      try {
        this.isSubmitting = true
        const url = `${apiUrl}/posts?userId=${userId}`;
        const res = await fetch(url);
        const data = await res.json();
        this.users = data;
        this.isSubmitting = false
      } catch (error) { }
    },
    showTooltip(msg: string) {
      console.log("Message: ", msg);
    },
  },
});
