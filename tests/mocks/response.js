// https://hacker-news.firebaseio.com/v0/user/sequoia.json?print=pretty
const exampleUser = {
  about: 'https:&#x2F;&#x2F;sequoia.makes.software',
  created: 1287517832,
  id: 'sequoia',
  karma: 4951,
  submitted: [26208562, 26204463, 26201915, 26197147, 26196966, 26181712, 26181651, 26104047, 26103999, 26097513, 25737744, 25737070, 25731697, 25673388, 25659474, 25522290, 25501205, 25500637, 25500346, 25500291, 25500249, 25499222, 25498364, 25429955, 25425744, 25423761, 25423392, 25422159, 25402565, 25360363, 25337223, 25337017, 25268020, 25142513, 25140386, 25139006, 25138694, 25138648, 25138602, 25088809, 25087561, 25085916, 25085005, 25084945, 25084914, 25084844, 25084775, 25084766, 25084666, 25084605, 25084546, 25084513, 25084431, 25084382, 25049476, 25048643, 25048516, 25036586, 24984827, 24930725, 24930701, 24890364, 24804366, 24803100, 24803027, 24802912, 24802210, 24791493, 24789873, 24781643, 24781022, 24779598, 24779509, 24760204, 24723069, 24713018, 24703965, 24666408, 24639375, 24639100, 24639079, 24584123, 24584055, 24582142, 24582071, 24579345, 24570097, 24547465, 24239697, 24205625, 24198071, 24195365, 24195108, 24151501, 24146746, 24134199, 24132765, 24114595, 24064442, 24064387, 24061137, 23964944, 23942794, 23873977, 23873928, 23852426, 23788252, 23744462, 23697000, 23685005, 23655735, 23655547, 23618575, 23606577, 23566669, 23565847, 23532417, 23530150, 23469421, 23398526, 23398397, 23393528, 23352581, 23342045, 23316905, 23316727, 23316710, 23315064, 23260615, 23246929, 23246832, 23243075, 23243001, 23240840, 23238530, 23235863, 23183950, 23171902, 23157886, 23157816, 23157810, 23156672, 23156616, 23144569, 23142864, 23138651, 23109153, 23109061, 23106994, 23082303, 23081099, 23081007, 23073245, 22899432, 22893977, 22881448, 22881118, 22690517, 22632326, 22632322, 22621373, 22620145, 22620121, 22619665, 22609393, 22605248, 22605211, 22601553, 22598547, 22561750, 22561692, 22560395, 22550104, 22548742, 22548703, 22531796, 22530382, 22530330, 22526031, 22525997, 22496313, 22496102, 22485977, 22478848, 22476712, 22356815, 22318542, 22318486, 22318445, 22318316, 22318300, 22292860, 22292617, 22272121, 22249103, 22242536, 22242103, 22237787, 22229321, 22199194, 22196274, 22194971, 22186457, 22181904, 22162385, 22132871, 22099223, 22079571, 22077474, 22075510, 22066827, 22066812, 22066787, 22038301, 22035606, 22016908, 22015966, 21983746, 21981956, 21981217, 21980929, 21980903, 21980802, 21946949, 21946933, 21865879, 21829332, 21814916, 21806866, 21806660, 21806653, 21806511, 21782964, 21782156, 21764474, 21755018, 21754810, 21717515, 21714732, 21714709, 21707197, 21706641, 21692525, 21690161, 21658502, 21658120, 21077191, 20952857, 20886764, 20866715, 20856325, 20840757, 20840661, 20820812, 20789006, 20788976, 20783737, 20780402, 20780236, 20780124, 20699531, 20681953, 20464291, 20463406, 20425885, 20404231, 20393218, 20365099, 20354980, 20354658, 20348850, 20348748, 20348516, 20347367, 20346876, 20346564, 20339453, 20321969, 20274024, 20273428, 20268827, 20268018, 20227122, 20214601, 20178857, 20177370, 20177327, 20151184, 20150336, 20105326, 20086763, 20057975, 20003366, 19994179, 19994033, 19977461, 19835029, 19813170, 19813161, 19804429, 19801602, 19663127, 19635959, 19599900, 19594688, 19594670, 19517005, 19438976, 19385549, 19193842, 18870668, 18554828, 18496335, 18178441, 18036583, 18034550, 18033999, 17970115, 17969498, 17964817, 17931378, 17865426, 17747405, 17712263, 17668450, 17621975, 17621961, 17621951, 17611226, 17610258, 17610250, 17566485, 17566474, 17566052, 17504298, 17504220, 17476963, 17476935, 17474247, 17468708, 17468656, 17468635, 17374184, 17374168, 17369334, 17348925, 17348877, 17321115, 17269588, 17269580, 17250307, 17250182, 17233085, 17232563, 17232502, 17231887, 17169095, 17160296, 17160274, 17160259, 17160245, 14545378, 14545365, 13775627, 13775534, 11756611, 11678775, 11678561, 11677571, 10948742, 9513561, 9513530, 9436963, 9428943, 9263298, 8455468, 8450280, 8397432, 8389461, 8389186, 8389163, 8368587, 8367682, 8318809, 8258510, 8064704, 8047561, 7998678, 7983186, 7978582, 7905201, 7898825, 7873272, 7846739, 7846711, 7835501, 7835460, 7785742, 7785567, 7780488, 7778430, 7772706, 7745224, 7723050, 7687294, 7686493, 7686467, 7686427, 7669219, 7660567, 7532033, 7526688, 7435644, 7413281, 7413235, 7313526, 7095614, 7058202, 7053039, 7053030, 7007605, 7007604, 7007603, 6999918, 6999904, 6933012, 6932994, 6742215, 6734108, 6734096, 6655630, 6653780, 6653663, 6572351, 6571454, 6571389, 6566801, 6535152, 6529703, 6529698, 6528867, 6528463, 6528350, 6527482, 6514445, 6510051, 6508132, 6489395, 6489366, 6489348, 6483571, 6476195, 6476189, 6471413, 6470230, 6469540, 6469514, 6469450, 6469439, 6457457, 6457128, 6451240, 6451226, 6451166, 6425650, 6418404, 6417322, 6415752, 6413961, 6413950, 6413806, 6359897, 6355129, 6341820, 6333822, 6266331, 6257926, 6250588, 6245892, 6205971, 6170420, 6170287, 6168893, 6162041, 6161555, 6140850, 6060196, 6054289, 6047818, 6015290, 6015106, 6014755, 6013497, 6013370, 6006594, 5939655, 5939406, 5935476, 5935460, 5932799, 5919646, 5919608, 5636085, 5552883, 5551810, 5551631, 5551441, 5551378, 5533808, 5533608, 5533575, 5522723, 5479265, 5474538, 5462632, 5456855, 5456158, 5437280, 5238752, 5209697, 5209538, 5178810, 5171453, 5167138, 5166181, 5164164, 5143232, 5143226, 5140206, 5115803, 5115799, 5037215, 4948890, 4849492, 4845867, 4809227, 4784270, 4783922, 4783862, 4783376, 4780047, 4763804, 4763383, 4758552, 4694073, 4669306, 4669257, 4644951, 4644892, 4627238, 4624114, 4624092, 4598124, 4597520, 4541524, 4540121, 4538654, 4533047, 4522175, 4518629, 4518549, 4517117, 4516851, 4510756, 4510661, 4501318, 4489988, 4489946, 4475841, 4460017, 4454420, 4431782, 4428658, 4428645, 4424115, 4422640, 4422541, 4422532, 4417467, 4414033, 4408668, 4408505, 4394807, 4367038, 4366968, 4362589, 4362447, 4362443, 4356966, 4351981, 4345219, 4329641, 4318979, 4313282, 4312688, 4293086, 4271594, 4262694, 4234995, 4234823, 4234765, 4225869, 4220615, 4220453, 4220369, 4207993, 4200088, 4199616, 4199570, 4189813, 4189638, 4177854, 4176915, 4172163, 4167090, 4167032, 4132768, 4132192, 4127515, 4127486, 4117656, 4116679, 4116640, 4111154, 4107223, 4104013, 4102515, 4102403, 4102052, 4101236, 4100526, 4040887, 4040881, 4035731, 4034141, 4024629, 4024575, 4013906, 4013072, 4007601, 3955809, 3939585, 3914254, 3914196, 3911389, 3900581, 3884421, 3878900, 3806758, 3806751, 3794510, 3793254, 3793199, 3789784, 3788524, 3787989, 3771789, 3757766, 3756935, 3756572, 3731725, 3717234, 3714982, 3714852, 3705115, 3698765, 3679673, 3652413, 3652338, 3649544, 3630757, 3630421, 3629305, 3629275, 3617877, 3614555, 3613228, 3612538, 3603723, 3603414, 3599115, 3585698, 3576394, 3576356, 3539127, 3538289, 3538244, 3533529, 3533166, 3531922, 3525978, 3525541, 3525535, 3525524, 3511876, 3511871, 3506519, 3506054, 3505498, 3505323, 3497305, 3497101, 3497097, 3491270, 3490476, 3490167, 3490139, 3485876, 3485863, 3485439, 3485273, 3484695, 3481146, 3481059, 3480880, 3480597, 3476055, 3475900, 3475874, 3475384, 3475088, 3472597, 3472115, 3471584, 3471513, 3471347, 3469218, 3461940, 3461526, 3447816, 3447295, 3447007, 3445856, 3443821, 3443801, 3443565, 3442826, 3439680, 3439002, 3430458, 3428978, 3426232, 3425898, 3425484, 3425030, 3424764, 3424756, 3420749, 3420566, 3420549, 3420320, 3420294, 3419860, 3416459, 3416304, 3387415, 3383548, 3382060, 3381688, 3381672, 3381660, 3378520, 3301283, 3248875, 3184136, 3183973, 3107752, 3084991, 3076785, 3076770, 3073617, 2988455, 2987803, 2987764, 2947328, 2886842, 2886764, 2879910, 2879112, 2878545, 2878444, 2878219, 2878112, 2878111, 2878095, 2878067, 2878065, 2878040, 2877971, 2877957, 2877921, 2877894, 2865329, 2865316, 2851736, 2851695, 2851672, 2837677, 2833748, 2833739, 2833703, 2823247, 2820175, 2818683, 2818245, 2818181, 2818019, 2817988, 2817775, 2817617, 2817560, 2817339, 2817257, 2817020, 2812901, 2812457, 2812169, 2810285, 2809494, 2809047, 2809017, 2808590, 2808223, 2807842, 2789896, 2781123, 2767902, 2767881, 2750897, 2750806, 2734246, 2683647, 2653228, 2537060, 2412198, 2411773, 2396264, 2322922, 2315362, 2238355, 2238342, 2228406, 2222246, 2179904, 1929397, 1928703, 1928638, 1919268, 1906811, 1875060, 1838521, 1808589, 1808562]
}

// https://hacker-news.firebaseio.com/v0/item/26233783.json?print=pretty
const exampleJob = {
  by: 'akircher',
  id: 26233783,
  score: 1,
  text: 'SIRUM is making medications affordable for all. We’re a small (~25) but quickly growing team that’s passionate about our mission of reimagining healthcare access for those in need.<p>We come from organizations like McKinsey, the Clinton Foundation, and Stanford Biology. We like to work hard, solve tough problems, and are determined to improve healthcare access for families who have trouble affording the medications they need to stay healthy.<p>We&#x27;re currently hiring for both our Palo Alto and Atlanta offices, as well as some fully remote roles. We have opportunities for senior QA engineers and software developers and are especially interested in anyone with pharmacy experience.<p>If you want to work in healthcare, love mission-driven work, and thrive in a startup environment, then we may be a good fit. Check out our open roles at <a href="https:&#x2F;&#x2F;www.sirum.org&#x2F;about#careers" rel="nofollow">https:&#x2F;&#x2F;www.sirum.org&#x2F;about#careers</a>.<p>Even if you don’t see something that’s the right fit right now, email adam@sirum.org - we love hearing from folks on Hacker News who share our mission.',
  time: 1614054051,
  title: 'Sirum (YC W15) Is Hiring Software and QA Engineers with Pharmacy Experience',
  type: 'job'
}

// https://hacker-news.firebaseio.com/v0/item/26227123.json?print=pretty
const exampleStory = {
  by: 'rfreytag',
  descendants: 0,
  id: 26227123,
  score: 2,
  time: 1614014292,
  title: 'Tail Risk',
  type: 'story',
  url: 'https://en.wikipedia.org/wiki/Tail_risk'
}

// https://hacker-news.firebaseio.com/v0/item/22496313.json?print=pretty
const exampleComment = {
  by: 'sequoia',
  id: 22496313,
  kids: [22497151, 22498384, 22498656, 22500520, 22503266, 22512514, 22499337],
  parent: 22492381,
  text: 'This article reminds me of posts about &quot;bullet journalling&quot; on sites like Pinterest: the optimization of the productivity process or tool (or in the case of &quot;bullet journal&quot; posts, the <i>beauty</i> of the tool) is the end itself, not a means to an end. The posts are about&#x2F;by &quot;productivity&quot; or &quot;journalling&quot; <i>enthusiasts</i> and don&#x27;t map well to people who are simply seeking a bit of an organization or productivity boost, not an extremely time-consuming new hobby.<p>The thing in this article that most reminded me about beauty-journalling posts was the todo list. In vanity journalling circles, the todo lists are full of meta-tasks &quot;post to instagram; new journal layout; blog post about journalling&quot; as well as pure vanity items like &quot;yoga!; Breakfast: saffron avocado toast (yum!!)&quot; Likewise, in this post his todo list includes items about writing about productivity, using other productivity tools, and other such &quot;meta-productivity&quot; items.<p>There&#x27;s nothing wrong with this but it reveals that the &quot;productivity&quot; itself is the hobby, not just a means to an end.',
  time: 1583432138,
  type: 'comment'
}

// const examplePoll = {}
// const examplePollOption = {}

const response = {
  exampleUser,
  exampleJob,
  exampleStory,
  exampleComment
  // examplePoll,
  // examplePollOption
}

export default response
