import classes from './ArticlesItemPage.module.scss';
import { Layout } from '../Layout';
import articlePageMain from '../../images/article-page-main.jpg';
import veda from '../../images/veda.jpg';

export const ArticlesItemPage = (props) => {
  return (
    <Layout>
      <div className={classes.BlogArticleItemPage}>
        <div className={classes.Content}>
          <div className={classes.SiteWrap}>
            <div className={classes.Top}>
              <h1>Каким будет образование в нашем обществе в будущем?</h1>

              <div className={classes.RightBlock}>
                <div className={classes.Expertise}>Эксперты</div>
                <div className={classes.ReadingTime}>Время чтения ~ 2 минуты</div>
              </div>
            </div>

            <div className={classes.MediaBlock}>
              <figure>
                <div className={classes.ImgContainer}>
                  <img src={articlePageMain.src} alt='' />
                </div>

                <figcaption>
                  <div className={classes.Text}>
                    Листая ленту в соцсетях я заметил, что поток различных лекций, статей и пр.
                    настолько велик, что в нем легко потеряться.{' '}
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className={classes.StrongText}>
              Листая ленту в соцсетях я заметил, что поток различных лекций, статей и пр. настолько
              велик, что в нем легко потеряться. И если раньше еще можно было успевать слушать
              наиболее ключевые лекции, то сейчас их становится так много, что даже это уже
              невозможно. Поскольку моим служением является координация образования, то это привело
              меня к размышлениям - а каким оно, скорее всего, станет в будущем, с учетом имеющихся
              уже тенденций? Ниже - мое субъективное предположение.
            </div>

            <div className={classes.ContentList}>
              <ul>
                <li>
                  <p>
                    Естественным следующим шагом будет появление каталогов с очень детальной
                    тематической классификацией большого количества разных лекций и семинаров, где
                    преданные смогут максимально точно находить нужный именно им семинар;
                  </p>
                </li>

                <li>
                  <p>
                    Конечно же, останутся святые, лекции которых будут слушать многие, и вообще
                    поток публичных лекций не уменьшится. И, тем не менее, образование будет все
                    больше переходить в формат, где каждый преданный, включая наиболее старших,
                    начнет делать акцент на непосредственном ведении по жизни небольшой группы
                    преданных, где у каждого будет своя такая же группа и т.д. При этом, наверняка,
                    возникнут &quot;школы мысли&quot;, то есть в рамках наследия Шрилы Прабхупады
                    станут проявлены разные настроения, которые будут через эту систему
                    распространяться.
                  </p>
                </li>

                <li>
                  <img src={veda.src} alt='' />
                </li>

                <li>
                  <p>
                    Наверняка будет происходить также значительное расширение прослоек людей,
                    симпатизирующих различным ценностям и принимающим какие-то из элементов
                    мировоззрения вайшнавов, но еще не принявшим Гаудия-вайшнавизм как свой путь. Из
                    них будут формироваться свои сообщества и пр., которые будут вращаться каждое на
                    своей орбите вокруг идеи чистой преданности подобно планетам вокруг Солнца -
                    кто-то ближе, кто-то дальше; у них будет свое образование, в котором кто-то так
                    и останется на своей орбите, а кто-то будет двигаться в сторону чистой
                    преданности.
                  </p>
                </li>

                <li>
                  <p>
                    Это также приведет к резкому увеличению начинающих вайшнавов, и потому
                    произойдет увеличение акцента на том, чтобы связать свои таланты и умения с
                    Кришной. И как следствие - бум различных проектов, где каждый будет стараться
                    что-то сделать. Также это приведет к развитию неклассических форм образования -
                    игровых и пр. А также станет шагом в развитии общества варнашрамы.
                  </p>
                </li>

                <li>
                  <q>
                    Это также приведет к резкому увеличению начинающих вайшнавов, и потому
                    произойдет увеличение акцента на том, чтобы связать свои таланты и умения с
                    Кришной. И как следствие - бум различных проектов, где каждый будет стараться
                    что-то сделать.
                  </q>
                </li>

                <li>
                  <p>
                    Чтобы во всем этом многообразии сохранился стержень, наверняка произойдет
                    формирование учебных заведений (наподобие семинарий) с единой установленной
                    системой образования, в которой будут обучаться более серьезные вайшнавы,
                    программа будет как очная, так и заочная, но многолетняя (скорее всего,
                    модульная).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={classes.WideContent}>
          <div className={classes.SiteWrap}>
            <div className={classes.Text}>
              Это просто короткое размышление в ходе дня, не претендующее на полноту. Если было
              полезно скажите об этом и поделитесь с другими :)
            </div>
          </div>
        </div>

        <div className={classes.Content}>
          <div className={classes.SiteWrap}>
            <div className={classes.ContentList}>
              <ul>
                <li>
                  <p>
                    Также это приведет к увеличению взаимодействия преданных друг с другом за
                    пределами сугубо духовных программ, ведь преданные будут вместе что-то делать. И
                    как следствие - следующим важным этапом образования станет обучение проявлению
                    принципов садху-санги в повседневной жизни с вайшнавами.
                  </p>
                </li>

                <li>
                  <p>
                    Чтобы во всем этом многообразии сохранился стержень, наверняка произойдет
                    формирование учебных заведений (наподобие семинарий) с единой установленной
                    системой образования, в которой будут обучаться более серьезные вайшнавы,
                    программа будет как очная, так и заочная, но многолетняя (скорее всего,
                    модульная).
                  </p>
                </li>

                {/*<li>*/}
                {/*    <div className=&quot;other-article&quot;>*/}
                {/*        <a href=&quot;#&quot;>*/}
                {/*            <figure>*/}
                {/*                <div className=&quot;img-container&quot;>*/}
                {/*                    <div className=&quot;img&quot; style=&quot;background-image: url(./images/veda.jpg)&quot;></div>*/}
                {/*                </div>*/}

                {/*                <figcaption>*/}
                {/*                    <div className=&quot;name&quot;>Читать также:</div>*/}
                {/*                    <div className=&quot;title&quot;>Другая тема</div>*/}
                {/*                </figcaption>*/}
                {/*            </figure>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</li> */}

                <li>
                  <p>
                    Начнут больше проявляться различные географические места, которые можно было бы
                    назвать святыми. В том смысле, что будет появляться больше мест, где культура
                    бхакти будет максимально проявлена в жизни живущих там людей. Они будут
                    эпицентрами, откуда дальше уже будет распространяться культура.
                  </p>
                </li>

                <li>
                  <span>
                    P.S. Ни про какое из изменений я не говорю, что оно хорошее или плохое. Оно
                    просто, скорее всего, будет, независимо от того, как мы к нему относимся.
                  </span>
                </li>

                <li>
                  <span>
                    Это просто короткое размышление в ходе дня, не претендующее на полноту. Если
                    было полезно - скажите об этом и поделитесь с другими :) И подписывайтесь на
                    TеIеgrаm (см. на фото), если еще не сделали этого.
                  </span>
                </li>

                <li>
                  <div className={classes.Caption}>
                    <div className={classes.FirstCaption}>
                      <span className={classes.Name}>
                        <span>Текст</span>:
                      </span>
                      <span className={classes.Value}>Тиртха-Павана дас</span>
                    </div>

                    <div className={classes.SecondCaption}>
                      <span className={classes.Name}>
                        <span>Фотографии</span>:
                      </span>
                      <span className={classes.Value}>Максим Верхотуров</span>
                    </div>
                  </div>

                  <div className={classes.Tags}>
                    <div className={classes.TagItem}>Шрила Прабхупада</div>
                    <div className={classes.TagItem}>ИСККОН</div>
                    <div className={classes.TagItem}>ДИКША</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
