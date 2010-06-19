// Перевод на русский: Oreolek, 2010
// ---------------------------------------------------------------------------
// Отредактируйте этот файл, чтобы описать вашу игры. Он должен иметь не
// менее четырёх разделов данных: undum.game.situations, undum.game.start,
// undum.game.qualities, и undum.game.init.
// ---------------------------------------------------------------------------

/* Уникальный идентификатор вашей игры. Он никогда не отображается. 
 * Я использую UUID, но вы можеет использовать всё что гарантированно
 * уникально (URL, которым вы владеете, или вариацию вашего адреса 
 * e-mail, например).*/
undum.game.id = "349baf43-9ade-49a8-86d0-24e3de3ce072";

/* Ситуации, в которых может быть игра. Каждая имеет уникальный ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Знакомство с Undum</h1>\
        <img src='media/tutorial/woodcut1.png' class='float_right'>\
        <p>Добро пожаловать в обучающую игру по Undum. Undum - это инструмент для написания\
        гипертекстовой интерактивной литературы. Он обладает некоторыми уникальными возможностями\
        и визуальным дизайном, который поддерживает повествующие игры.</p>\
        \
        <p>Гипертекстовая интерактивная литература - это цифровой эквивалент книгам\
        Choose Your Own Adventure (CYOA), которые были популярны в\
        1980х. История рассказывается кусочками, и вы выбираете из нескольких \
        вариантов, чтобы продвинуть её дальше. Тем не менее, в отличие от книжной формы, цифровая\
        версия даёт вам намного больше гибкости, чтобы рассказать богатые истории\
        и представить более интересные элементы игры.</p>\
        \
        <p class='transient'>А сейчас давайте продолжим обучение.\
        <a href='rooms'>Нажмите на эту ссылку</a>, чтобы продвинуться дальше.</p>"
    ),
    // Для разнообразия, здесь мы задаём ситуацию, используя высокоуровневый тип Situation.
    // Это прекрасный подход, чтобы сгенерировать текст, просто найдя его в HTML документе.
    // Для статичного текста в этом больше смысла, чем записывать его просто так.
    rooms: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_rooms").html());
        }
    }),
    todo: new undum.SimpleSituation(
        "<p>В ситуации может произойти две вещи. Либо персонаж\
        <a href='links'>покидает</a> ситуацию и входит в другую, либо\
        он выполняет некоторое <a href='./do-something'>действие</a>. Действия могут\
        выполнять некоторые вычисления, могут выводить какие-нибудь результаты, но\
        все они возвращают персонажа обратно в ту же ситуацию.</p>\
        \
        <p>Когда вы создаёте свою игру, используйте ситуации, чтобы отразить\
        изменения в том, что може сделать персонаж. Так, вы можете изменить ситуацию если персонаж\
        тянет рычаг, чтобы открыть люк, например. Действия\
        предназначены для ситуаций, где персонаж может изучать вещи более пристально\
        , а может быть улучшить свою магию, выпив зелья.\
        Это вещи, которые не влияют на мир вокруг них.</p>\
        \
        <p>Ситуации генерируют содержимое, когда в них входят (метод <em>enter</em>),\
        выходят (<em>exit</em>), и когда они получают действие (<em>act</em>).\
        Вы можете написать код, который будет генерировать текст любым удобным вам способом, \
        чтобы отображаемое содержимое могло быть полностью динамичным, \
        принимая во внимание текущее состояние персонажа.</p><p>\
        Содержимое - это обычный HTML, поэтому вы можете использовать все HTML теги, чтобы выделить\
        что-то в тексте или добавить иллюстрации.Это даёт вам огромную гибкость. Например, так как Undum\
        нацелен на HTML 5, вы можете использовать теги <em>audio</em> или\
        <em>video</em>, чтобы вставить музыкальное или видео оформление.</p>\
        \
        <p class='transient'>Убедитесь в том, что вы выполнили действие выше,\
        а затем <a href='links'>продолжайте</a>.</p>",
        {
            actions: {
                'do-something': "<p>Браво, вы выполнили действие.\
                                 Заметьте, что ссылки для этой ситуации всё ещё активны.\
                                 Это означает,что вы можете нажать на них, чтобы\
                                 выполнить действие ещё раз.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<h1>Смена наполнения</h1>\
        <p>Между каждым кусочком нового текста Undum вставляет отчётливую линию\
        на полях. Она позволяет вам быстро увидеть всё, что было выдано\
        в качестве результата вашего последнего клика.\
        Это очень удобно для маленьких устройств, или когда появилось\
        очень много текста. Также окно перемещается таким образом, что начало\
        нового содержимого приходится настолько близко к верхнему краю окна, насколько возможно.\
        Это также сделано для того, чтобы помочь вам читать натуральнее.</p>\
        \
        <p>Если вы внимательно смотрели, вы заметили, что некоторые части\
        текста исчезали, когда вы выходили из ситуаций. Это не баг!\
        Одна из целей Undum - это дать геймдизайнерам возможность сделать\
        запись игры связным рассказом.\
        Тем не менее, вам часто нужны кусочки текста, которые ничего не делают, но просто\
        предлагают читателю выбор.\
        Для этого Undum определяет специальный CSS класс для добавления в ващ HTML\
        (помните, сгенерированное содержимое - это просто HTML). Этот класс называется <em>transient</em>\
        и может быть применён к параграфам, div'ам или просто\
        span'ам<span class='transient'> (как вот этот)</span>.</p>\
        \
        <p>также вы могли заметить, что, когда вы перемещаетесь в другую ситуацию, все ссылки\
        в предыдущей превращаются в обычный текст. Это сделано для того, чтобы не дать вам\
        отступить и попробовать предыдущие варианты ответа, когда вы уже выбрали один из них.\
        В других H-IF системах это делается при помощи полной очистки предыдущих страниц.\
        Но это не позволяет вам вернуться и перечитать вашу историю.</p>\
        \
        <p class='transient'>Давайте узнаем больше о ссылках и посмотри, как <a href='sticky'>изменить</a> это поведение.</p>"
    ),
    sticky: new undum.SimpleSituation(
        "<h1>Ссылки</h1>\
        <p>В undum существует три типа ссылок. Мы уже видели первые два:\
        ссылки смены ситцаций и ссылки, вызывающие действие. Когда вы\
        включаете ссылку в ваш текст, undum распознаёт её и оформляет\
        подобающим образом. Если вы создаёте ссылку с атрибутом HTML <em>href</em>,\
        содержащим только имя ('зал', например), то она отправит персонажа\
        в ситуацию с этим именем. Ссылки с двумя компонентами ('зал/посмотреть-картину')\
        отправят персонажа в новую ситуацию <em>и тогда</em> вызовут действие в\
        текущей ситуации. Вы можете заменить имя ситуации точкой ('./посмотреть-картину'). В\
        любом случае, если персонаж уже находится в этой ситуации, то её метод <em>enter</em>\
        ещё раз вызываться не будет.</p>\
        \
        <img src='media/tutorial/woodcut2.png' class='float_left'>\
        <p>Наконец, третий тип ссылок - это обычная гиперссылка. Если ваша\
        ссылка не состоит из одного элемента или пары элементов, как описано выше, то\
        Undum догадается, что вы имели в виду обычную гиперссылку. Например, \
        <a href='http://news.bbc.co.uk' class='sticky'>как в этом случае.</a>\
        Если ваша ссылка всё-таки <em>выглядит</em> как ссылка Undum, то вы\
        всё ещё можете заставить Undum не интерпретировать её как ситуацию или действие, добавив\
        CSS класс <em>raw</em> к тегу HTML <em>a.</em>\
        Ссылкам, которые не относятся к классу <em>raw</em>, но угадываются как\
        не-Undum, класс <em>raw</em> добавится автоматически перед отображением.\
        Это позволит вам выделить внешние ссылки особым образом, как мы сделали в этой игре.</p>\
        \
        <p>В последней ситуации я сказал, что вы можете остановить ссылки от превращения в обычный текст, когда\
        вы меняете ситуацию. Это делается при помощи другого класса\
        CSS: <em>sticky</em>. Когда вы\
        <a href='oneshot'>покинете эту ситуацию</a>, вы заметите, что внешняя ссылка осталась активной.\
        Это позволяет вам предлагать ссылки, которые останутся рабочими в течение всего рассказа,\
        например, ссылка заклинания телепортации домой.</p>"
    ),
    oneshot: new undum.SimpleSituation(
        "<p>Ещё одна последняя настройка ссылок. Если вы назначите ссылке CSS класс\
        <em>once</em>, то она исчезнет после нажатия. Это используется \
        <a href='./one-time-action' class='once'>(проверьте сами)</a> для\
        действий, которые вы хотите сделать однократными. Нет смысла использовать\
        'once' на ссылках ситуаций, потому что они всё равно превратятся в текст, как только вы на них нажмёте\
        ( конечно, если они не помечены как <em>sticky</em>).</p><p>Однократные ссылки полезны\
        для таких действий, как внимательное изучение объекта. Вам не захочется\
        повторять описание много раз, поэтому сделать ссылку однократной было бы\
        дружелюбнее для пользователя.</p>\
        <p>Если у вас более, чем одна ссылка относится к одному действию, то все соответсвующие ссылки\
        будут удалены, так что вам не придётся заботиться о игроке, который найдёт способ\
        ещё раз вызвать действие.</p>\
        <p class='transient'>После того, как вы нажмёте на ссылку, мы \
        <a href='qualities'>продолжим.</a></p>",
        {
            actions: {
                "one-time-action": "<p>Как я уже говорил, однократные действия\
                                   в большинстве своём используются для описания\
                                   чего-то в деталях, когда вы не хотите повторять\
                                   один и тот же текст описания в разных местах рассказа.</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<h1>Качества</h1>\
        <p>Хватит о ситуациях, давайте поговорим о персонаже. Персонаж описывается\
        при помощи серии <em>качеств.</em> Это численные значения, которые могут описать\
        всё от врождённых способностей до количества ресурсов,подконтрольных персонажу.\
        Качества показаны в блоке справа от текста.</p>\
        \
        <p>Качества в этом блоке - это те, с которыми вы начали игру. Когда вы\
        <a href='quality-types'>перейдёте к следующей ситуации, </a> не отводите глаз\
        от панели персонажа. Вы заметите, что я подниму ваше качество Ловкости.\
        Этот процесс анимирован и подсвечен, чтобы привлечь ваше внимание.\
        Также вы можете получить повышение Силы, выполнив\
        <a href='./skill-boost'>это действие</a> столько раз, сколько захочется.</p>",
        {
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go to the\
        <a href='progress'>next situation</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>Мы приближаемся к концу дороги.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<h1>Showing Progress</h1>\
        <p>Sometimes you want to make a change in quality a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <img src='media/tutorial/woodcut3.png' class='float_right'>\
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Now we're almost at the end of the road. But so\
        far you have moved through this tutorial linearly - from one\
        situation to the next, without any choice. Undum is designed to\
        support narratives that branch and merge.\
        <span class='transient'>As a tiny illustration\
        of this, choose now between going forward to <a href='one'>option\
        one</a> or <a href='two'>option two</a>.</span></p>"
    ),
    one: new undum.SimpleSituation(
        "<h1>Option One</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>"
    ),
    "two": new undum.SimpleSituation(
        "<h1>Option Two</h1>\
        <p>You chose option two, which is my favourite option as well.\
        I find the photographs accompanying option one to be too disturbing.\
        Finger nails just shouldn't bend that way...</p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>"
    ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        }
    }),
    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustiv, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Сила", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Ловкость", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Сила, Ловкость и Удача с почтением позаимствованы из книг-игр серии Fighting Fantasy. Слова, описывающие Удачу, взяты из FUDGE RPG. Эта подсказка иллюстрирует то, что вы можете использовать любой HTML в качестве описания качества (в этом случае, тег span, содержащий атрибут названия).'>Удача</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.IntegerQuality(
        "Вдохновение", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Новичок", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Прогресс', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    system.setCharacterText("<p>Вы начинаете захватывающее путешествие.</p>");
};
