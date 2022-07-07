class Test {
  question_1 = '';
  question_2 = '';
  question_3 = '';
  question_4 = [];
  question_5 = '';
  question_6 = '';
  question_7 = '';
  question_8 = '';
  question_9 = '';
  question_10 = '';
  question_11 = '';
  question_12 = '';
  question_13 = '';
  question_14 = '';
  question_15 = '';
  testHandle = (questionNumber, questionAnswer) => {
    this[questionNumber] = questionAnswer;

    let isBeforeShraddha = this.question_1 == 'a';
    let isShraddha =
      (this.question_1 == 'b' ||
        this.question_2 == 'b' ||
        this.question_3 == 'a' ||
        this.question_3 == 'b' ||
        (this.question_4.length >= 1 && this.question_4.length <= 3) ||
        this.question_5 == 'a' ||
        this.question_5 == 'b') &&
      this.question_5 != '';

    let isSadhuSanga =
      (this.question_1 == 'c' ||
        this.question_2 == 'd' ||
        this.question_3 == 'c' ||
        this.question_6 == 'c' ||
        this.question_7 == 'c' ||
        this.question_7 == 'd' ||
        this.question_8 == 'c' ||
        this.question_8 == 'd' ||
        this.question_8 == 'e' ||
        this.question_9 == 'b' ||
        this.question_10 == 'a' ||
        this.question_10 == 'c') &&
      this.question_10 != '';

    let isBhajanKriya1 =
      (this.question_1 == 'd' ||
        this.question_3 == 'f' ||
        this.question_6 == 'b' ||
        this.question_9 == 'c' ||
        this.question_11 == 'a') &&
      this.question_11 != '';

    let isBhajanKriya2 =
      (this.question_1 == 'e' ||
        (this.question_4.length >= 4 && this.question_4.length <= 6) ||
        this.question_12 == 'b' ||
        this.question_12 == 'c' ||
        this.question_13 == 'b' ||
        this.question_14 == 'b' ||
        this.question_14 == 'b' ||
        this.question_15 == 'b' ||
        this.question_15 == 'c') &&
      this.question_15 != '';

    if (isBeforeShraddha) {
      return 'before_shraddha';
    }

    if (isShraddha) {
      return 'shraddha';
    }

    if (isSadhuSanga) {
      return 'sadhu_sanga';
    }

    if (isBhajanKriya1) {
      return 'bhajan_kriya_1';
    }

    if (isBhajanKriya2) {
      return 'bhajan_kriya_2';
    }

    if (this.question_15 != '') {
      return 'anartha_nivritti';
    }

    return 'next';
  };
}

export const test = new Test();
