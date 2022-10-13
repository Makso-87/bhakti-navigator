import { Layout } from '../Layout';
import pagesStore from '../../store/pagesStore';
import classes from './TestPage.module.scss';
import { useRef, useState } from 'react';
import { test } from '../../helpers/test';
import { Question } from './Question/Question';
import classesQuestion from './Question/Question.module.scss';

export const TestPage = () => {
  const { setCurrentPage, setCategory } = pagesStore;
  setCurrentPage('test');
  setCategory('Тест');
  const ref = useRef<HTMLDivElement>();
  const [testStarted, setTestStarted] = useState(false);
  const [testResult, setTestResult] = useState('');
  const [questionName, setQuestionName] = useState('question-1');

  const onTestButton = (event) => {
    event.preventDefault();
    const element = event.currentTarget;
    const parent = element.closest(`.${classesQuestion.Question}`);
    const variants: HTMLCollection = parent.querySelectorAll(
      `.${classesQuestion.Variants} .${classesQuestion.InputContainer}`
    );
    const selectedVariants: Element[] = Array.from(variants).filter((item: HTMLElement) => {
      const input = item.querySelectorAll('input:checked');
      return input.length;
    });

    const questionName = parent.getAttribute('data-question');

    const questionNumber = questionName.replace('-', '_');
    let questionAnswer;

    if (selectedVariants.length > 1) {
      questionAnswer = selectedVariants.map((item: HTMLElement) => {
        return item.querySelector('input').value;
      });
    } else {
      const [selectedVariant]: Element[] = selectedVariants;
      const selectedInput = selectedVariant.querySelector('input');
      questionAnswer = selectedInput.value;
    }

    const testResult = test.testHandle(questionNumber, questionAnswer);
    testActionsMapping[testResult](questionName);
  };

  const testActionsMapping = {
    before_shraddha: () => {
      setTestResult('before-sraddha');
      setQuestionName('');
    },
    shraddha: () => {
      setTestResult('sraddha');
      setQuestionName('');
    },
    sadhu_sanga: () => {
      setTestResult('sadhu-sanga');
      setQuestionName('');
    },
    bhajan_kriya_1: () => {
      setTestResult('bhajana-kriya-1');
      setQuestionName('');
    },
    bhajan_kriya_2: () => {
      setTestResult('bhajana-kriya-2');
      setQuestionName('');
    },
    anartha_nivritti: () => {
      setTestResult('anartha-nivritti');
      setQuestionName('');
    },
    next: (currentQuestion) => {
      const splitName = currentQuestion.split('-');
      splitName[1] = Number(splitName[1]) + 1;
      const newQuestionName = splitName.join('-');
      setQuestionName(newQuestionName);
    },
  };

  return (
    <Layout>
      <div ref={ref} className={classes.TestPage}>
        <div className={classes.SiteWrap}>
          {!testStarted ? (
            <div className={classes.Introduction}>
              <div className={classes.Text}>
                <p>
                  Тест не определяет уровень человека. Он говорит, курсы с какой ступени сейчас
                  будут с наибольшей вероятность актуальны для изучения. Человек может быть на
                  другом уровне бхакти, чем те курсы, которые для него сейчас будут актуальны.
                </p>

                <p>
                  Это крайне упрощенное тестирование, так как полноценное тестирование невозможно в
                  виде теста. Его может провести только квалифицированный старший вайшнав в формате
                  собеседования.
                </p>
              </div>

              <div className={classes.VideoContainer}>
                <div className={classes.Video}>
                  <iframe
                    width='1228'
                    height='691'
                    src='https://www.youtube.com/embed/sedJBhaCeGM'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </div>
              </div>

              <button className={classes.ButtonStartTest} onClick={() => setTestStarted(true)}>
                Начать тест
              </button>
            </div>
          ) : null}

          {testStarted ? (
            <form action='#' onSubmit={(e) => e.preventDefault()} className={classes.TextForm}>
              {questionName === 'question-1' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: 'Я пока не практикую, только присматриваюсь',
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: 'До года',
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: 'От года до трех',
                      letter: 'c',
                      type: 'radio',
                    },
                    {
                      text: ' От трех до шести',
                      letter: 'd',
                      type: 'radio',
                    },
                    {
                      text: 'От семи до десяти',
                      letter: 'e',
                      type: 'radio',
                    },
                    {
                      text: 'От десяти до двадцати',
                      letter: 'f',
                      type: 'radio',
                    },
                    {
                      text: 'Больше двадцати',
                      letter: 'g',
                      type: 'radio',
                    },
                  ]}
                  text='Сколько лет вы практикуете сознание Кришны?'
                  number={1}
                />
              ) : null}

              {questionName === 'question-2' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: 'Да',
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: 'Нет',
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: 'Очень хотел бы, но совсем не имею никакой возможности, даже онлайн',
                      letter: 'c',
                      type: 'radio',
                    },
                    {
                      text: 'Много лет общался, а сейчас как-то вот не общаюсь',
                      letter: 'd',
                      type: 'radio',
                    },
                  ]}
                  text='Регулярно ли вы общаетесь с преданными?'
                  number={2}
                />
              ) : null}

              {questionName === 'question-3' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: 'Не повторяю мантру',
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: 'Повторяю мантру не каждый день',
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: 'Каждый день, но не 16 кругов',
                      letter: 'c',
                      type: 'radio',
                    },
                    {
                      text: 'Каждый день 16 кругов',
                      letter: 'd',
                      type: 'radio',
                    },
                    {
                      text: 'Каждый день больше 16 кругов',
                      letter: 'e',
                      type: 'radio',
                    },
                    {
                      text: 'Много лет повторял круги, а сейчас нет',
                      letter: 'f',
                      type: 'radio',
                    },
                  ]}
                  text='Сколько кругов Маха-мантры вы повторяете?'
                  number={3}
                />
              ) : null}

              {questionName === 'question-4' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: 'Бхагавад-гита',
                      letter: 'a',
                      type: 'checkbox',
                    },
                    {
                      text: 'Наука самоосознания',
                      letter: 'b',
                      type: 'checkbox',
                    },
                    {
                      text: 'Шри Ишопанишад',
                      letter: 'c',
                      type: 'checkbox',
                    },
                    {
                      text: 'Нектар преданности',
                      letter: 'd',
                      type: 'checkbox',
                    },
                    {
                      text: 'Нектар наставлений',
                      letter: 'e',
                      type: 'checkbox',
                    },
                    {
                      text: 'Шримад Бхагаватам (песни 1-3)',
                      letter: 'f',
                      type: 'checkbox',
                    },
                    {
                      text: 'Шримад Бхагаватам (песни 4-6)',
                      letter: 'g',
                      type: 'checkbox',
                    },
                    {
                      text: 'Шримад Бхагаватам (песни 7-12)',
                      letter: 'h',
                      type: 'checkbox',
                    },
                    {
                      text: 'Чайтанья-чаритамрита',
                      letter: 'i',
                      type: 'checkbox',
                    },
                  ]}
                  text='Какие книги Шрилы Прабхупады вы прочитали?'
                  number={4}
                />
              ) : null}

              {questionName === 'question-5' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: 'Жить хорошей жизнью и служить Богу',
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: 'Поскорее вернуться к Богу из этого ужасного мира',
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: 'Развить любовь к Богу, служа Ему',
                      letter: 'c',
                      type: 'radio',
                    },
                  ]}
                  text='Какая фраза, на ваш взгляд, лучше других описывает цель жизни преданного?'
                  number={5}
                />
              ) : null}

              {questionName === 'question-6' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Без непосредственного руководства в духовной жизни я не смогу прогрессировать, поэтому у меня есть наставник`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Без непосредственного руководства в духовной жизни я не смогу прогрессировать, но наставника я пока не смог найти`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Руководство в жизни – это хорошо, но я пока без него обхожусь`,
                      letter: 'c',
                      type: 'radio',
                    },
                  ]}
                  text='Какое утверждение больше вам откликается:'
                  number={6}
                />
              ) : null}

              {questionName === 'question-7' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да, провожу программу, как в храме`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Провожу часть программы, т.к. нет времени`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Провожу часть программы, хотя мог бы и всю, но просто нет
                        желания`,
                      letter: 'c',
                      type: 'radio',
                    },
                    {
                      text: `Нет, утренней программы совсем не провожу`,
                      letter: 'd',
                      type: 'radio',
                    },
                  ]}
                  text='Проводите ли вы утреннюю программу?'
                  number={7}
                />
              ) : null}

              {questionName === 'question-8' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да, но я обычно в храме служу Божествам`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Да, регулярно провожу какое-то служение`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Да, но только предлагаю прасад`,
                      letter: 'c',
                      type: 'radio',
                    },
                    {
                      text: `Да, но никак ему не служу`,
                      letter: 'd',
                      type: 'radio',
                    },
                    {
                      text: `Нет, алтаря нет`,
                      letter: 'e',
                      type: 'radio',
                    },
                  ]}
                  text='Есть ли у вас дома алтарь, которому вы хоть как-то поклоняетесь?'
                  number={8}
                />
              ) : null}

              {questionName === 'question-9' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Нет`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Почти`,
                      letter: 'c',
                      type: 'radio',
                    },
                  ]}
                  text='Следуете ли вы регулирующим принципам?'
                  number={9}
                />
              ) : null}

              {questionName === 'question-10' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да, он же тоже человек`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Когда он неправ, он все равно прав`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Нет, он же неотличен от Господа`,
                      letter: 'c',
                      type: 'radio',
                    },
                  ]}
                  text='Может ли дикша-гуру быть неправ?'
                  number={10}
                />
              ) : null}

              {questionName === 'question-11' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Нет, такого человека нет`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Да, такой человек есть`,
                      letter: 'b',
                      type: 'radio',
                    },
                  ]}
                  text={`Есть ли в вашей жизни кто-то старший, кто знает, как обстоят
                    дела с вашей садханой, служением, семейной жизнью, работой и пр., и регулярно
                    помогает вам в духовной жизни?`}
                  number={11}
                />
              ) : null}

              {questionName === 'question-12' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Нет`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Я и сейчас так живу`,
                      letter: 'c',
                      type: 'radio',
                    },
                  ]}
                  text={`Был ли в вашей жизни опыт служения в ИСККОН, когда вы годами
                    крутились как белка в колесе?`}
                  number={12}
                />
              ) : null}

              {questionName === 'question-13' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Нет`,
                      letter: 'b',
                      type: 'radio',
                    },
                  ]}
                  text={`Был ли в вашей жизни опыт совместного развития какого-то проекта
                    на равных с другими преданными?`}
                  number={13}
                />
              ) : null}

              {questionName === 'question-14' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Нет и не было`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Раньше было, но все разрешилось`,
                      letter: 'c',
                      type: 'radio',
                    },
                  ]}
                  text={`Есть ли преданные в обществе, с которыми у вас есть внутренний конфликт?`}
                  number={14}
                />
              ) : null}

              {questionName === 'question-15' ? (
                <Question
                  clickHandler={onTestButton}
                  variants={[
                    {
                      text: `Да, много`,
                      letter: 'a',
                      type: 'radio',
                    },
                    {
                      text: `Да, но совсем немного`,
                      letter: 'b',
                      type: 'radio',
                    },
                    {
                      text: `Нет, нету`,
                      letter: 'c',
                      type: 'radio',
                    },
                  ]}
                  text={`Есть ли у вас опыт проповеди?`}
                  number={15}
                />
              ) : null}
            </form>
          ) : null}

          <div className={classes.Results}>
            {testResult === 'before-sraddha' ? (
              <div className={`${classes.Result} ${classes.BeforeSraddha}`}>
                Вы находитесь на уровне &quot;Знакомство&quot;
              </div>
            ) : null}

            {testResult === 'sraddha' ? (
              <div className={`${classes.Result} ${classes.Sraddha}`}>
                Вы находитесь на уровне &quot;Шраддха&quot;
              </div>
            ) : null}

            {testResult === 'sadhu-sanga' ? (
              <div className={`${classes.Result} ${classes.SadhuSanga}`}>
                Вы находитесь на уровне &quot;Садху-санга&quot;
              </div>
            ) : null}

            {testResult === 'bhajana-kriya-1' ? (
              <div className={`${classes.Result} ${classes.BhajanaKriya1}`}>
                Вы находитесь на уровне &quot;Бхаджана-крия (начало)&quot;
              </div>
            ) : null}

            {testResult === 'bhajana-kriya-2' ? (
              <div className={`${classes.Result} ${classes.BhajanaKriya2}`}>
                Вы находитесь на уровне &quot;Бхаджана-крия (продолжение)&quot;
              </div>
            ) : null}

            {testResult === 'anartha-nivritti' ? (
              <div className={`${classes.Result} ${classes.AnarthaNivritti}`}>
                Вы находитесь на уровне &quot;Анартха-нивритти&quot;
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};
