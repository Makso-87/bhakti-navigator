import { makeAutoObservable } from 'mobx';

class UserStore {
  email = '';
  firstName = '';
  lastName = '';
  avatar = '';
  token = '';
  city = '';
  age = '';
  inIskconSince = '';
  spiritualName = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUserData = ({
    email = '',
    firstName = '',
    lastName = '',
    avatar = null,
    token = '',
    city = '',
    age = '',
    inIskconSince = '',
    spiritualName = '',
  }) => {
    this.token = token;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.city = city;
    this.age = age;
    this.spiritualName = spiritualName;
    this.inIskconSince = inIskconSince;
  };
}

export default new UserStore();
