import { makeAutoObservable } from 'mobx';

class UserStore {
  id = '';
  email = '';
  firstName = '';
  lastName = '';
  avatar = '';
  token = '';
  city = '';
  age = '';
  inIskconSince = '';
  spiritualName = '';
  favoriteCourses = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUserData = ({
    id = '',
    email = '',
    firstName = '',
    lastName = '',
    avatar = null,
    token = '',
    city = '',
    age = '',
    inIskconSince = '',
    spiritualName = '',
    favoriteCourses = [],
  }) => {
    this.id = id;
    this.token = token;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.city = city;
    this.age = age;
    this.spiritualName = spiritualName;
    this.inIskconSince = inIskconSince;
    this.favoriteCourses = [...favoriteCourses];
  };
}

export default new UserStore();
