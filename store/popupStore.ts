import { makeAutoObservable } from 'mobx';

class PopupStore {
  answerVideoPopup: false;

  constructor() {
    makeAutoObservable(this);
  }

  setAnswerVideoPopup = (value) => {
    this.answerVideoPopup = value;
  };
}

export default new PopupStore();
