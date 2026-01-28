import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, List } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReactMarkdown from 'react-markdown';

export default function Article() {
    const [, params] = useRoute("/biblioteca/texto/:slug");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const article = {
        title: "Revelación del Propósito",
        subtitle: "Conferencias de Neville Goddard",
        author: "Neville Goddard",
        date: "19 Abril 1971",
        readTime: "15 min de lectura",
        category: "Nuevo Pensamiento",
        image: "/neville-purpose.png",

        // Content split into sections for accurate TOC navigation
        sections: [
            {
                id: "intro",
                title: "Introducción",
                content: `
Hoy leemos: "Yo digo, ustedes son dioses, hijos del Altísmo, todos ustedes, sin embargo, morirán como hombres". (Salmo 82:1) ¿No implica esto que no sois hombres? Si son hombres cuando se dirigen, entonces la frase, "Morirás como hombres", no tiene sentido. Se les dice: "Sois hijos de Dios, ... pero moriréis como los hombres".

Ahora nos recurrimos a la carta de Pablo, ya que la escribió a los filipenses, "Cristo Jesús, que, aunque estaba en la forma de Dios, no lo contó necesario" - o, lo consideró algo para ser tomado - "pero se vació y tomó sobre sí mismo la forma de un esclavo, al nacer a esmez de los hombres y estando en forma humana, se volvió obediente a la muerte, incluso la muerte en la cruz. Por lo tanto, Dios lo ha exaltado altamente y le ha otorgado un nombre que está por encima de todos los nombres, para que ante el nombre de Jesucristo cada rodilla se incline y cada lengua confiese que Jesucristo es el Señor, para la gloria de Dios".

¡Ahora, Jesucristo solo afirmó que era el Hijo de Dios! Al principio se les dijo a ustedes "hijos de Dios". Aquí está, ahora, nuestro propósito de razonar para vaciarnos y convertirnos en esclavos. La forma humana es la cruz; es el esclavo. Y llevaremos esta cruz por un lapso asignado. Oh, gritaremos, porque tuvimos que vaciarnos completamente del Ser que realmente somos, ¡porque el Ser que realmente somos es uno con Dios! Estábamos en la forma de Dios. Sin embargo, nos vaciamos y tomamos la forma de un esclavo, naciendo a semejamos a semejamos de hombres, y estando en forma de hombre, nos humillamos y nos hicimos obedientes hasta la muerte, incluso la muerte en una cruz.
                `
            },
            {
                id: "divine-purpose",
                title: "El Propósito Divino",
                content: `
### El Propósito Divino: El Descenso a la Forma Humana

Ahora, somos el Ser hablado en las Escrituras. Esta historia en las profundidades de tu propia conciencia todavía existe. Está teniendo lugar, sin referencia a la duración, a la repetición o a su posición en el tiempo. Se desarrollará lentamente en cada persona de este mundo. A medida que se desarrolla, el individuo sabe que es el que descendió a este mundo y tomó la forma de un esclavo, es decir, esta forma humana.

"Nadie puede ascender al cielo sino el que descendió, el Hijo del Hombre. Y como Moisés levantó a la serpiente en el desierto, así debe ser levantado el Hijo del Hombre”.

Esto (indicando el cuerpo físico) no es tu forma real. Tomaste esto con un propósito, porque esta es la forma de muerte. Has descendido a este mundo, para que puedas saborear y experimentar la muerte. Cuando lees en las Escrituras: "¿No debería el Cristo sufrir estas cosas y luego entrar en su gloria?" - ahora, tú y yo tenemos la asociación con la palabra sufrir como dolor, dolor. Búscalo en tu Concordancia Bíblica, y verás que significa, "experimentar una sensación o sentimiento".

Hay muchas palabras traducidas. Uno es "dejarlo así" cuando viene ante Juan, y sin embargo permite que sea así por el bien de la tradición y se bautiza. "Que sea así" se llama "Sufre para que sea así ahora". Pero cuando se trata de la declaración: "¿No debería el Cristo sufrir estas cosas, y luego entrar en su gloria?" esa palabra se traduce como "experimentar una sensación" - experimentar la muerte.
                `
            },
            {
                id: "true-nature",
                title: "La Naturaleza Verdadera",
                content: `
### La Naturaleza Verdadera del Ser y el Ascenso

El Inmortal No podías saber cómo es la muerte, nunca podría conocer los dolores de este mundo hasta que se convirtió en uno con él. Para convertirse en uno con él, tiene que vaciarse de su forma divina, que era uno con Dios, y tomar sobre sí mismo la forma de un esclavo, naciendo a sí mismo que el hombre.

Entonces, él lo usa como tú usarías una máscara. Esto [indicando el cuerpo físico] es una máscara. Tu forma real - si te lo dijera, solo puedo usar palabras; pero ¿cómo diablos podría decirte la gloria de tu forma?

Cuando escuché el coro cantar - este maravilloso coro, "¡Neville ha resucitado!" Solo puedo decirte que fue un movimiento en espiral, y esto es 1946, y yo soy un cuerpo luminoso. No necesitaba sol, ni luna, ni estrellas; era luz para mí mismo. Y mientras caminaba, o, diría, me deslizaba, todo se hizo perfecto porque yo era perfecto. Todo lo que pasé, aunque en ese momento parecía imperfecto, se transformó instantáneamente en perfección. El ciego dejó de ser ciego, el sordo dejó de ser sordo, el cojo dejó de ser cojo, y todos se hicieron perfectos en ese momento cuando pasé. Ese era el formulario.

Hace once años, el 8 de abril, cuando me levantaron como mi cuerpo, la cruz que llevaba a través de los siglos, en ese momento se partió en dos de arriba a abajo. Y aquí vi: ¿Cómo diablos puedes describir esto a cualquier persona y darle sentido? Aquí, mi cuerpo está completamente dividido en dos, y ahora estoy mirando una piscina de luz dorada, líquida y pulsante, y sé que es mi Yo. Como lo sé, yo, el observador, me fusiono con él. Es mi Ser, mi propio Redentor y Creador, y sin embargo, es mi Ser, como una autoredención, un Ser Autocreado. Y en ese momento, como una serpiente ardiente, ascendí al Cielo.

Le dices a un hombre que es una "serpiente ardiente", lo asusta. Quiere ser un hombre de carne y hueso. Quiere exactamente lo que es, hecho un poco mejor, un poco más fuerte, un poco más de todo de lo que es ahora, pero no quiere un cambio radical del ser que es.

Bueno, te digo, la cara es humana, la voz es humana, las manos son humanas, pero no le pidas a nadie que te diga qué es el cuerpo. No lo verás. Solo puedo describir el movimiento que hice cuando ascendí; y cuando entré en este estado, revernó, como se nos dice en las Escrituras, "Él lo toma por asalto". Todo fue una tremenda reverberación, al entrar. Eso está reservado para todos.

El descenso está en la generación, y el ascenso está en la regeneración. El descenso es hacia la muerte y la decadencia, y el ascenso es hacia la vida eterna, pero mejorado por la razón de las experiencias del descenso. ¡Estabas "antes de que el mundo fuera", y estabas en la forma de Dios!

Como dijo Pablo, "Él nos ha hecho conocer el misterio de Su voluntad según Su propósito que Él estableció en Cristo como un plan para la plenitud del tiempo".
Es un plan. Esto no es un pensamiento de emergencia. "Antes de eso, el mundo era", tú lo eras. Ustedes son los dioses de los que se habla, y porque son dioses y se dirigen como dioses, cuando tienen esta experiencia, saben a muerte.
                `
            },
            {
                id: "esoteric-interpretation",
                title: "Interpretación Esotérica",
                content: `
### Interpretación Esotérica de las Escrituras

Ahora, esto es contemporáneo. Cuando leas las Escrituras, no pienses ni por un momento que estás leyendo algo que tuvo lugar hace dos mil años. Lo estás leyendo ahora, y le dijeron cuando comenzó a hablar - ahora, ha venido solo para cumplir las Escrituras. ¿Qué Escritura está cumpliendo ahora en este décimo capítulo de Juan? Ve al capítulo 21 del libro de Deuteronomio y lee estas palabras: "Si un hombre tiene un hijo que es terco y rebelde y no obedece la voz de su padre o la voz de su madre, lo traerán, y lo llevarán ante los ancianos de la ciudad y les dirán a los ancianos: 'Este es nuestro hijo. Es terco y rebelde, y no obedecerá nuestras palabras. Es un glotón y un borracho". Entonces los hombres de la ciudad lo apedrearán hasta la muerte con piedras".

¿Reconoces al personaje del Evangelio? Léelo en el "cápito capítulo 11 de Mateo:" Y así llamaron al Hijo del Hombre un borracho y un glotón, amigo de los pecadores, de los publicanas y las artas y de los recaudadores de impuestos. Aquí hay uno que le dijo a su madre: ¿Qué tengo que ver contigo? Y luego se enfrentaron a él en el templo y le dijeron: ¿Por qué nos hiciste esto? Tu padre y yo te hemos estado buscando durante tres días. Y él respondió, debo estar en el negocio de mi Padre".

Aquí, "No confieso que los padres terrenales. Estoy haciendo los asuntos de mi padre". No pudieron entenderlo. Entonces tenía unos doce años de edad.

No podían entender la negación completa de la ascendencia física, porque ahora sabía, porque la memoria comenzó a regresar, quién es realmente. Él bajó a experimentar la muerte. Llenó la cruz durante el tiempo asignado. Luego llegó ese momento en el tiempo en que la cruz se dividió de arriba a abajo, y el Espíritu atrapado fue liberado, y el rango perdido hace mucho tiempo fue restaurado, y la caída fue perdonada.

Y ahora, "¿Quiénes son mis padres? ¿Quiénes son mis hermanos? ¿Quiénes son mis hermanas? Aquellos que hacen la voluntad de Aquel que me envió" - me enviaron a este mundo de decadencia y muerte para que pueda experimentar la decadencia y la muerte. No pude experimentarlo desde arriba. Tuve que entrar directamente en eso y asumir y nacer hombre. Y esta es la cruz que llevo.

Así que el cuerpo al que realmente te diste por mismo, no puedo empezar a decirte la alegría que te espera cuando lo tomas una vez más. Es un cuerpo de luz, un cuerpo de poder, un cuerpo que es todo sabiduría. No tienes que levantar un dedo para que los ojos aparezcan en cavidades vacías. No los llevas a un hospital y pones pequeños ojos de algún "banco de ojos" en las cavidades. No tienes pequeños bancos para hígados o manos y para los miembros desaparecidos. A medida que pasas, todo está hecho porque eres perfecto. No necesitas nada que el hombre mortal piense que debes necesitar. Nada puede permanecer imperfecto en tu presencia mientras caminas vestido con esta prenda, la prenda a la que te diste. Te vaciaste, y luego tomaste la forma de un esclavo, naciendo a semez de los hombres.

Entonces, si les digo, como lo haré, "Digos, ustedes son dioses, hijos del Altísmo, todos ustedes; sin embargo, morirán como hombres" - si son hombres cuando me dirijo a ustedes, ¡ese es un comentario estúpido! Si no sois hombres cuando se os dirige, y se os dirige en el Concilio Divino, ¿entonces quién eres? Os lo dije, sois hijos de Dios. ¿Cuál era, entonces, mi forma? Te vaciaste de eso; lo rendiste.

Solo puedo traerte una pequeña sombra de recuerdo diciéndote por mi propia experiencia lo que te espera.

Cuando uso la palabra serpiente, es desagradable para la persona promedio en el mundo, y sin embargo, nos dicen, "Aquellos que rodean el trono de Dios, los Serafim, las serpientes ardientes" - la creación más sabia y sabia de Dios fue los Serafim. Y cuando Isaías dijo: "Envíame, Oh Señor, y vinieron con un carbón y lo pusieron en sus labios, hablaron" - fue la voz humana. Los describió como con manos, rostros humanos, - por supuesto, les puso alas. Te diré por mi propia experiencia, no necesitas alas. Eres omnipresente en un cuerpo así. Estés donde estés, ahí estás. No necesitas poder para llevarte allí; tú eres poder. Eres Omnipotencia. Eres Omnisciencia. Eres Omnipresente, así que no necesitas que nada te lleve a ningún lugar. ¡Ese es el Ser que eres! Pero te vaciaste completamente de él para este propósito divino, y muchas veces, mientras usabas estas prendas de vestir, esta cruz, clamamos. Parece tan pesado, y todos los horrores del mundo, y gritamos pidiendo que nos aliviemos de ello.

Pero vas a llevar la cruz durante el tiempo asignado. Y cuando se cumpla el tiempo, entonces se dividirá de arriba a abajo, y en la base lo verás, ¿y cómo diablos puedo decírtelo? El oro fundido tomará cualquier forma. Tienes un formulario. Tú eres el observador, y en el momento en que lo miras, tú - la forma - observando el estado dorado y fundido - te fusionas con él, y luego toma tu forma. Y subes al cielo como una serpiente ardiente. ¡Ese es el Ser que eres!

No dejes que nadie te asuste; no dejes que nadie te asuste, que tienes que hacer esto, aquello y lo otro. ¡Ya está hecho! Todo esto ya está terminado. Ustedes están aquí como miembros de un Cuerpo, un Cuerpo compartiendo con un propósito. Así que, cuando vuelvas, eres ese cuerpo. ¡Tú y yo en realidad formamos el único Cuerpo que es Dios! Así que nosotros, los hijos de Dios, bajamos, y cuando nos levantamos somos Dios el Padre.

Esa es la única forma en que podríamos experimentar la totalidad, es rompiéndonos, fragmentándonos y luego pasando por todo el viaje, y al final regresando, y regresando a la Unidad. Y esa Unidad es Dios el Padre.

Entonces, cuando nos dicen, "Apedrearlo hasta la muerte", bueno, las piedras son solo los hechos literales de la vida. "Cogieron piedras para apedrearlo". Al final nos dicen que "ni un solo hueso de su cuerpo estaba roto". ¿Qué cuerpo? La Biblia. Ese es su cuerpo eterno. Los hombres han intentado a través de los siglos cambiarlo, y encontrarás estas muchas ediciones y son necesarias porque los escribas demasiado celosos añadirán y tomarán, y añadirán sus propios pequeños conceptos estúpidos en sus teorías, lo que deberían ser. Y los encontrarás entre los hombres más sabios que todavía intentan cambiar el cuerpo, pero al final, "ni un solo hueso está roto", como se te dice en Éxodo, en Números y en los Salmos: "Ningun hueso está roto". Cuando llegaron a él, ni un hueso estaba roto.

Eso significa que no puedes cambiar. No vino a cambiar, a abolir la ley y a los profetas; vino solo a cumplir. Entonces, él cumple todo en el mundo. Y tú eres de lo que se habla. ¡Tú eres el Señor Jesucristo!

Hasta que realmente lo conozcas por experiencia, te detienes en ello. Solo detente en ello. Vete a dormir en la conciencia de ser Él, y sabrás más allá de toda duda, en el futuro no lejano, realmente quién eres. Sabrás la verdad de las cosas de las que estoy hablando. Todos lo harán. Por eso estoy aquí. Es por eso que me han enviado.

Me han llamado y enviado de la misma manera que Pablo dijo que fue llamado y enviado, de la misma manera que la figura central dijo: "He sido enviado, y cuando me veas" - si realmente puedes verme - "has visto a A Aquel que me envió". El que me envióóme, cuando me veas, porque todos serán iguales. Y, sin embargo, ninguna pérdida de identidad, ¿puedo decirte? No es una absorción, perder tu identidad. No, y sin embargo, la misma forma, la misma forma gloriosa y radiante que es todopoderosa y todo sabia. Entonces, ese es el Ser que realmente eres.

¿Qué importa qué Oscars tienes hoy o mañana, o qué poder en el mundo de César pareces ejercer? No significa nada, comparado con el Ser que realmente eres. Pon toda tu mente y toda tu alma en esta esperanza de que se desarrolle en el futuro no lejano dentro de ti, porque ese es el único propósito para todo.

Y cuando este propósito realmente se te revela, y estoy haciendo todo lo posible para revelarlo, entonces todo encaja. Le da sentido a toda la imagen de la vida. Entonces todo tiene sentido.
                `
            },
            {
                id: "spiritual-awakening",
                title: "El Despertar Espiritual",
                content: `
### El Despertar Espiritual

Si, por casualidad, estás pasando por un momento difícil, le voy a pedir a una amiga mía, que está aquí esta noche, que le cuente a otro amigo, un amigo en común, esta declaración de Blake:

"Hay estados en los que todos los hombres visionarios son hombres locos". (de "El Laocón") Luego añade esto a ese pensamiento: "Lee Lucas, el segundo capítulo, el primer verso". Si lees el segundo capítulo, el primer verso, te preguntarás cómo diablos puede relacionar eso con lo que acaba de decir, que "Todos los hombres visionarios son hombres locos contabilizados", pero si lees todo el capítulo, verás lo que realmente te está diciendo, que está en tu puerta. Es el nacimiento del niño. El segundo capítulo de Lucas, el primer verso, y es: "La orden salió de Augusto César de que todos" - todo el vasto mundo - "debe inscribirse" - se inscribió, implica, para los impuestos. Ahora deben estar inscritos, porque el pedido ha llegado.

Y lee todo el capítulo, y verás dónde está esto, ahora: José, porque era de la línea de David, llevó a su esposa María a Belén, la ciudad de David, y luego, mientras ella estaba allí, llegó su tiempo para el parto de su hijo. ¡Y entonces nace el Hijo!

Está precedido por, como dijo Blake, una forma de locura, porque dijo: "Todos los hombres visionarios son contabilizados, en ciertos estados son hombres locos contabilizados". Y luego te pide que leas ese versículo. Blake no era el tipo de persona que lo explicaría todo. De hecho, no deletreó nada. Le dijo a su crítico, el gran Trussler - El Reverendo Dr. Trussler: "Dices que necesito a alguien que interprete mi palabra. Deberías saber que lo que se le puede dejar claro al idiota no vale mi tiempo. Y los antiguos entendieron esto, y dijeron: Lo que era demasiado claro no podía despertar las facultades para actuar". (De "Carta No. 51 al Dr. Trussler)

Si lo dejas sin tratar de aclararlo, entonces simplemente estimularás al hombre a pensar y despertarás sus facultades para actuar. Entonces, él no lo deletrea, pero lee el capítulo y verás lo que Blake está insinuando, que una forma de locura precede al nacimiento del niño.

Sé que, en mi propio caso, se remonta a bastantes años antes de 1959, diría, cuatro o cinco años, que si compartiera con otros lo que sentía dentro de mí en ese momento, sería una forma de locura. Estaba hablando con una audiencia de veintiséiscientos los domingos por la mañana y rechazando a más de mil quinientos en el Fox-Wilshire. Tomé esa plataforma, y aquí pude sentir dentro de mí, al igual que una mujer sentiría, la lucha de un niño dentro de ella, pero lo sentí en mi cabeza: este estado pulsante, pulsante y vibrante. Siéntate por un momento, y todo es como un estado loco, loco, y estaba hablando con personas inteligentes, creo que lo eran, que vinieron a escucharme, y me dirigía a veintiséiscientos y me estaba alejando mil quinientos, y tomé otro teatro que se sentó otros setecientos cincuenta, y eso se desbordó; y, sin embargo, aquí estoy como una mujer, una mujer embarazada, casi al final de su tiempo. De eso es de lo que Blake está hablando.

Voy a pedirle a mi amiga que le diga que lea ese segundo capítulo, y todos los síntomas por los que está pasando ahora son gloriosos. Son perfectamente maravillosos, y no levantaría un dedo para detenerlos o desviarlos. En primer lugar, no pude. Está sobre ella. Y, así, les digo a todos aquí: hasta que este nacimiento tenga lugar, no pueden regresar, pero tendrá lugar.

Como se nos dice: "Ningún hombre puede entrar en la Nueva Era llamada el Reino de Dios a menos que haya nacido desde arriba". Y cuando "nazca de arriba", será seguido de esta manera: "Como Moisés levantó la serpiente en el desierto, así será elevado el Hijo del Hombre". Eso viene después. El primer acto, luego 139 días después viene el descubrimiento de la Paternidad de Dios, y 123 días después, haciéndolo 262, viene el ascenso al Cielo como una serpiente ardiente. Y luego, 998 días después, haciéndolo mil doscientos sesenta (1.260), llega el descenso del Espíritu Santo en forma de paloma. ¡Y entonces todo ha terminado!

Y ahora sigues aquí. Has soportado la carga [carga] el tramo asignado, pero vas a estar aquí para contarlo, y lo dirás hasta el final, y ese final vendrá así. Pero tienes que contarlo para alentar a aquellos que están al borde de ello, porque todos tienen que usar la cruz para el lapso asignado. Y luego, al final, esa columna vertebral se divide en dos de arriba a abajo, revelando, y cómo diablos podría alguien decirlo más bellamente de lo que Blake lo dijo al final de su "Jerusalén", casi al final. Y aquí está, mirándolo, y dice: "¡Oh, mi Redentor y Creador Divino!" Él dijo:

"Obsero las visiones de mi sueño mortal de seis mil años dando vueltas alrededor de tus faldas como una serpiente de piedras preciosas y oro. Sé que es mi Ser, Oh mi Divino Creador y Redentor".

No lo deletreó. He intentado esta noche explicarlo para ti, pero ya ves, y sabes, no tiene sentido. Es una forma de locura. ¿Cómo puedes mirar el oro fundido que está palpitando y vivo, y saber que es tu Yo? Te miras en un espejo y dirás: "Sé que ese es mi reflexión - ese soy yo mismo". Pero mirar esto que no tiene forma; es una luz dorada, fundida y líquida, y sin embargo, ¡sabes con más certeza que eres tú de lo que sabes cuando te miras en un espejo!

Y como lo sabes, te fusionas con él. Ahora eres el molde que toma, y sabes exactamente qué moho debes haber sido, porque en el momento en que lo tomas, como una serpiente ardiente, entras en el cielo, y reverbera como un trueno.

Entonces, ese es el Ser que eres. Entonces, cuando leas el Salmo 82, que es el más difícil de todos los Salmos, así afirman nuestros eruditos, ¿cómo diablos podemos interpretarlo? Solo podemos adivinarlo.

"Pero Dios ha tomado su lugar en el Concilio Divino, en medio de los dioses Él tiene juicio" - y ahora Él habla: "Digo que ustedes son dioses, hijos del Altío, todos ustedes; sin embargo, morirán como hombres".

Entonces, cuando uno viene al mundo y reclama lo que hace, tomará piedras y le dirá quién es su padre en la tierra. "Cogieron piedras para apedrearlo, y él les dijo: ¿Por qué me apedreas? ¿Para qué funciona bien? Y le dijeron: No por buenas obras, sino por tu blasfemia, porque tú, siendo hombre, hazte Dios".

Entonces les dijo: "¿No está escrito en tu ley que digo: ¿Sois dioses?" Ahora, está citando algo hace dos mil años; y lo está citando como si estuviera teniendo lugar ahora: "Te digo" - eso es lo que les está diciendo - "que ustedes son dioses, porque está escrito en su ley que son dioses. Y las Escrituras no se pueden romper. Si, entonces, los llamó dioses porque escucharon la Palabra de Dios, ¿dicen que el que el Padre consagró y envió al mundo blasfema porque dijo: Yo soy el Hijo de Dios?"

Ahora, les está diciendo que son los hijos de Dios, pero no lo creerán. Afirman que son los hijos de Abraham, nacidos después de la carne. Él les está diciendo que son hijos de Dios, pero no lo sabrán hasta que experimenten lo que él tiene. Entonces, ha sufrido estas cosas, y sufrir es "experimentar las sensaciones; conocerlas por experiencia real".

Entonces, tomaron piedras. Dicen: Nosotros conocemos a vuestro padre, a vuestra madre, a vuestros hermanos y a vuestras hermanas, y sabemos todo sobre ti ti; y tú haces estas declaraciones extravagantes.

Entonces, ese es el Ser que realmente eres. Y no puedo decirle a nadie en el mundo la gloria que les espera cuando son levantados, y en realidad se encuentran vestidos con ese Cuerpo, pero más hermoso que nunca, del que se vaciaron para venir aquí.

¡No empezaste en ningún pantano! No empezaste en ninguna cosita llamada renacuajo. Estas son prendas (que indican el cuerpo físico) que anexionaste; penetraste estos cuerpos y anexaste los cerebros de ellos. Pero ustedes son los hijos de Dios que lo hicieron. Y para hacerlo, no puedes fingir que lo estás haciendo; tuviste que vaciarte completamente de tu gloria para tomar esta forma de la cruz. Y no puedes fingir, pero lo jugarás el tiempo asignado. Después de que lo hayas reproducido a pleno tiempo, entonces escucharás la llamada.

Ahora, aquí estás, una señora me llamó esta semana. Ella dijo: "Me fui a casa el lunes pasado por la noche, y estaba encantada con lo que dijiste, pero estoy perturbada".

Estaba hablando del traidor, y aquí está Judas, y estaba hablando muy bien de Judas. Bueno, nadie puede traicionar a un hombre sin conocer los secretos del hombre, porque "ninguno conoce el secreto de Dios sino el Espíritu de Dios". Así que, si traiciona a Dios, ¡tiene que conocer a Dios! No podía traicionar lo que no sabe.

Luego ella cita a Mark. Ahora, de nuevo, encontramos escribas sumando a. La misma cita que encuentras en Lucas no cita lo que hace Mark. Mark es básico, por supuesto, pero nuestros escribas, al transcribir, tienen que construir su propia pequeña filosofía de vida. Lucas solo reclama la historia de la traición, pero la palabra se traduce como ay - si lo buscas en tu Concordancia, significa: "quién, cuál, qué, eso". En otras palabras, "¿Quién es ese?" Lo mismo que están preguntando sobre Judas. "¿Qué le pasará a ese hombre? ¿Qué es eso para ti? Sígueme". Él conocía el secreto, y hasta el final, ellos no sabían el secreto. Pensaron que lo sabían, pero no sabían el secreto.

Cuando lees las historias de las Escrituras, y nos dicen que José era el padre, pero desaparece cuando el niño alcanza la edad de doce años y niega a los padres. Bueno, ¿quién es Joseph? Lee la genealogía en Mateo. Comienza: "Este es el libro de la genealogía de Jesucristo, el hijo de David". Ahora lee la genealogía. José es el padre de Jesús, pero en la genealogía, su padre, es decir, el padre de José es Jacob; sin embargo, en el sueño, cuando el ángel se le aparece a José en un sueño, dijo: "José, hijo de David, no temas a llevarte a tu esposa María, porque lo que fue concebido por ella es del Espíritu Santo". Pero se dirige a él como "José, hijo de David"; y el libro comienza: "El libro de la genealogía de Jesucristo, hijo de David".

Pero José, en las Escrituras, es el Soñador. Él es el comienzo del perdón del pecado. Porque dijo a sus hermanos al final de la gran trama, que es Génesis, al final, el capítulo 50: "Haces el mal contra mí, pero Dios lo quiso para el bien", y los perdonó. Ese es el comienzo del perdón del pecado. Y lo llamaban el Soñador. Cuando el Soñador despierta, es el Señor Jesucristo. ¡Así que se convierte en su propio padre!

¿Y cómo se llamaba José en Numbers? Moisés cambió su nombre de José - se llama "Oseas", pero "José" significa "José"; cambió su nombre de Oseas a Josué, y "Josué" significa "Jesús"; y Jesús es el Señor Dios Jehová. ¿No puedes ver el misterio desarrollándose?

Así que, "No tengas miedo, hijo de David, de llevarte a María, tu esposa". Entonces, se dirige a él como el hijo de David, pero el libro comienza: "Jesucristo, el hijo de David". Pero Joseph es el Soñador, y esto viene a él en un sueño. Él es el soñador. Entonces, comienza el sueño en el capítulo 37 del Génesis, y comienza el sueño de que todas las cosas vendrán y se inclinarán ante él, el sol y la luna, y las estrellas, y luego se lo dijo a su padre. Y el padre dijo: "¡Qué! ¿Tu madre y yo nos inclinaremos ante ti?" Y los hermanos no podían creer ni por un momento que once estrellas, es decir, las once de ellas, se inclinarían ante él; y conspiraron para venderlo como esclavo". Entonces, lo vendieron como esclavo, como tú fuiste "vendido como esclavo". Te vaciaste y te convertiste en esclavo. Y el Soñador en ti es José.

Pero se te dice: "Me levantaré de tu cuerpo" - ¿A quién está hablando? Él está hablando con David: "Cuando tus días se cumplan y te acuestes con tus padres, levantaré a tu hijo después de ti, que vendrá de tu cuerpo". Cuando sale de tu cuerpo y tu nombre es David, entonces es tu hijo. "Yo, el Señor, seré su padre, y él será mi hijo".

Entonces, José es el soñador en el hombre, pero cuando despierta, él es el Señor Jesucristo. ¿Ves el misterio?

Entonces, ¿quién es ese? No lo es. Tú y yo tenemos ciertas asociaciones con las palabras. Tenemos la palabra
sufrir, pensamos en el dolor, pensamos en el dolor, y todo lo que significa es simplemente "experimentar una sensación".

"Porque la alegría y las ayos están finamente tejidas, una prenda para el alma divina".
– Blake, de "Auguries of Innocence"

No toda la alegría, no toda la desafiación; están "tejidas finamente" en este mundo cuando comemos del Árbol del Bien y del Mal. Y cuando llegamos al final, y luego el Espíritu que estaba atrapado voluntariamente es liberado por la división del cuerpo de arriba a abajo y asciende como la serpiente ardiente, es liberado, y el rango perdido hace mucho tiempo, que es el Hijo de Dios, es restaurado, pero ahora ennoblecido. Él es el Padre. Se despierta como su padre, habiendo pasado por los horrores, "soportando esta carga por el tiempo asignado".

Entremos en el silencio.
                `
            }
        ],

        summary: `
**Resumen Ejecutivo**

El texto "Revelación del propósito", extraído de una conferencia de Neville Goddard del 19 de abril de 1971, presenta una compleja tesis metafísica sobre la naturaleza de la humanidad y su propósito divino.

El argumento central es que los seres humanos son, en esencia, seres divinos ("dioses, hijos del Altísimo") que voluntariamente se despojaron de su gloria para descender a la forma humana. Esta encarnación, descrita como tomar una "forma de esclavo" y llevar una "cruz", no es un castigo, sino un acto deliberado para experimentar sensaciones inaccesibles para un ser inmortal, principalmente la muerte y la limitación.

El propósito de esta vida mortal es culminar en un proceso de despertar espiritual o "regeneración". Este ascenso implica una serie de experiencias místicas predeterminadas y secuenciales, que el autor detalla a través de sus propias vivencias, como la ascensión en un cuerpo de luz en forma de "serpiente ardiente".

**El Propósito Divino: El Descenso a la Forma Humana**
El núcleo de la enseñanza es que la identidad fundamental del ser humano no es mortal. El texto se basa en el Salmo 82:1: «Yo digo: Sois dioses, hijos del Altísimo, todos vosotros; sin embargo, moriréis como hombres». Esta afirmación se presenta como la clave para entender que la condición humana es una fase temporal y no la verdadera naturaleza del ser.

*   **El Vaciado Divino:** Citando la carta de Pablo a los Filipenses, se describe cómo Cristo Jesús, "siendo en forma de Dios", se "despojó a sí mismo y tomó forma de siervo, naciendo en semejanza de hombres".
*   **La Cruz y el Esclavo:** La forma humana es equiparada a "la cruz" y a la "forma de un esclavo". Es un vehículo temporal asumido con un propósito específico.
*   **El Propósito de "Sufrir":** El texto redefine el concepto de "sufrir". No se refiere únicamente al dolor, sino a la experiencia sensorial en su totalidad.

**La Naturaleza Verdadera del Ser y el Ascenso**
El descenso a la "generación" es seguido por un "ascenso a la regeneración", un retorno a la forma divina, pero enriquecida por las experiencias de la mortalidad.

**La Interpretación Esotérica de las Escrituras**
Un tema central es que la Biblia debe leerse no como historia literal, sino como un drama psicológico que ocurre contemporáneamente en la conciencia de cada persona.

**El Proceso del Despertar Espiritual**
El texto describe una secuencia específica y cronometrada de eventos que marcan el regreso a la conciencia divina. Este proceso está precedido por un estado que puede ser percibido como locura.
        `,

        studyGuide: `
### Guía de Estudio: La Revelación del Propósito

Esta guía de estudio está diseñada para examinar y profundizar la comprensión de la conferencia de Neville Goddard, "Revelación del propósito", del 19 de abril de 1971.

#### Cuestionario de Repaso

1.  **Según el texto, ¿qué implica la cita del Salmo 82: "Sois dioses... sin embargo, moriréis como hombres"?**
    La cita implica que la audiencia a la que se dirige no son hombres en su esencia, sino seres divinos ("hijos de Dios") que han adoptado temporalmente la mortalidad.

2.  **¿Qué representa la "cruz" en la interpretación de Neville Goddard y cuál es su relación con la forma humana?**
    La "cruz" es el símbolo de la forma humana misma, descrita como la forma de un "esclavo" y la forma de la muerte.

3.  **¿Cuál es el verdadero significado de la palabra "sufrir" en el contexto de "¿No era necesario que el Cristo padeciera estas cosas?"?**
    La palabra "sufrir" no se refiere a pena o dolor, sino que su significado es "experimentar una sensación o sentimiento".

4.  **Describe la forma que, según la experiencia de Goddard, adopta el ser al ascender al Cielo.**
    Al ascender, el ser adopta la forma de una "serpiente ardiente". Goddard describe que esta forma tiene un rostro, voz y manos humanas, pero el cuerpo es un movimiento en espiral de luz dorada, líquida y pulsante.

5.  **¿Cuál es el propósito del "descenso" y cómo enriquece al ser inmortal?**
    El propósito del descenso es experimentar la generación, la decadencia y la muerte, sensaciones desconocidas para el ser inmortal. Esta experiencia enriquece al ser, que luego asciende a la regeneración.

6.  **¿Cómo interpreta Goddard la afirmación de que a Cristo "no se le rompió ni un hueso"?**
    La afirmación significa que la verdad eterna de las Escrituras (el cuerpo de Cristo) no puede ser cambiada ni quebrantada.

7.  **Según la cita de William Blake, ¿qué estado suele preceder al "nacimiento del niño" espiritual en un individuo?**
    Según Blake, un estado que los demás perciben como una forma de "locura" precede al nacimiento espiritual.

8.  **Explica la cronología de los eventos espirituales que ocurren después del "nacimiento de lo alto".**
    Tras el nacimiento de lo alto, 139 días después ocurre el descubrimiento de la Paternidad de Dios. Luego, 123 días después (sumando 262), viene el ascenso al Cielo como una serpiente ardiente, y 998 días después (sumando 1260), desciende el Espíritu Santo como una paloma.

9.  **¿Quién es "José" en la interpretación esotérica de Goddard y cuál es su destino final?**
    "José" es "El Soñador" dentro de cada hombre, el principio del perdón del pecado. Cuando el Soñador despierta, se convierte en su propio padre, el Señor Jesucristo.

10. **¿Cuál es la relación entre los "hijos de Dios" que descienden y "Dios Padre"?**
    Los "hijos de Dios" son los seres divinos que colectivamente descendieron a la forma humana. Al completar su viaje y ascender, se unen para formar el único Cuerpo que es "Dios Padre".

#### Preguntas de Ensayo
1.  Analice la paradoja del ser humano como una entidad simultáneamente divina ("hijo de Dios") y mortal ("esclavo").
2.  Explore el simbolismo de la "serpiente ardiente" y los "serafines".
3.  Discuta el concepto del "plan" divino como un guion preexistente.
4.  Interprete la afirmación "Tú eres el Señor Jesucristo".
5.  Utilizando las citas de William Blake, examine la relación entre la visión mística, la percepción de la "locura" por parte de la sociedad y el proceso de nacimiento espiritual interno.

#### Glosario de Términos Clave
*   **Ascenso:** El proceso de regeneración y retorno a la vida eterna.
*   **Cruz:** La forma humana; el cuerpo físico.
*   **Descenso:** El acto voluntario de los "hijos de Dios" de despojarse de su forma divina para tomar la forma de un esclavo.
*   **Hijos de Dios:** La verdadera identidad de todos los seres humanos.
*   **José (El Soñador):** La figura simbólica del soñador dentro del hombre, que representa el principio del perdón del pecado.
*   **Nacimiento del niño:** Un evento espiritual que ocurre dentro del individuo.
*   **Piedras (apedrear):** Simbolizan los hechos literales y las percepciones mundanas de la vida.
*   **Plan Divino:** El propósito preestablecido por Dios "antes de que el mundo fuese".
*   **Serpiente Ardiente:** La forma verdadera y regenerada del ser que asciende al Cielo.
*   **Sufrir:** En el contexto bíblico analizado, no significa experimentar dolor o pena, sino "experimentar una sensación o sentimiento".
        `,

        analysis: `
### Análisis de “Revelación del propósito” por Neville Goddard

**Resumen Ejecutivo**
El texto "Revelación del propósito", extraído de una conferencia de Neville Goddard del 19 de abril de 1971, presenta una compleja tesis metafísica sobre la naturaleza de la humanidad y su propósito divino. El argumento central es que los seres humanos son, en esencia, seres divinos ("dioses, hijos del Altísimo") que voluntariamente se despojaron de su gloria para descender a la forma humana.

**El Propósito Divino: El Descenso a la Forma Humana**
El núcleo de la enseñanza es que la identidad fundamental del ser humano no es mortal. El texto se basa en el Salmo 82:1.
*   **El Vaciado Divino:** Citando a Pablo, se describe cómo Cristo Jesús se despojó a sí mismo y tomó forma de siervo.
*   **La Cruz y el Esclavo:** La forma humana es equiparada a "la cruz".
*   **El Propósito de "Sufrir":** Redefinición del concepto de sufrir como "experimentar una sensación".

**La Naturaleza Verdadera del Ser y el Ascenso**
El descenso a la "generación" es seguido por un "ascenso a la regeneración".
*   **Experiencias Personales:** Goddard relata el "Cuerpo Luminoso" (1946) y el "Ascenso como Serpiente" (1959).
*   **Simbolismo de la Serpiente:** Reivindicación de la serpiente como símbolo de sabiduría (serafines).
*   **El Retorno a la Unidad:** El fin último es regresar para formar "el único Cuerpo que es Dios".

**La Interpretación Esotérica de las Escrituras**
Un tema central es que la Biblia debe leerse no como historia literal, sino como un drama psicológico.
*   **Jesucristo como Arquetipo:** La vida de Jesús es el patrón a seguir.
*   **Simbolismo de las Piedras:** Hechos literales de la vida.
*   **El Papel de José:** José como el Soñador.

**El Proceso del Despertar Espiritual**
El texto describe una secuencia cronometrada de eventos:
*   Nacimiento del niño (Día 0)
*   Descubrimiento de la Paternidad de Dios (Día 139)
*   Ascenso al Cielo (Día 262)
*   Descenso del Espíritu Santo (Día 1260)
        `
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#3ceba0] selection:text-black">
            <Header />

            {/* Hero / Header */}
            <div className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#2764ff]/10 to-transparent pointer-events-none" />

                <div className="wrapper relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/biblioteca" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Volver a la Biblioteca
                        </Link>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="bg-[#2764ff]/20 text-[#2764ff] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {article.category}
                            </span>
                            <span className="text-gray-500 text-xs uppercase tracking-wide flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {article.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <p className="text-xl text-gray-400 font-light mb-8">
                            {article.subtitle}
                        </p>

                        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Neville" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-white font-medium">{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Image */}
            <div className="wrapper mb-16">
                <div className="max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
            </div>

            <main className="wrapper pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Sidebar: Table of Contents */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-2 mb-6 text-sm font-medium text-white/50 uppercase tracking-widest">
                                <List className="w-4 h-4" />
                                Tabla de Contenidos
                            </div>
                            <ul className="space-y-3 text-sm border-l border-white/10">
                                {article.sections.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={`#${item.id}`}
                                            className="block pl-4 text-gray-400 hover:text-[#3ceba0] hover:border-l border-transparent hover:border-[#3ceba0] transition-colors -ml-px py-1"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content Column */}
                    <div className="lg:col-span-8 lg:col-start-4">

                        {/* Article Text */}
                        <article className="prose prose-invert prose-lg max-w-none mb-20 prose-headings:font-serif prose-headings:font-normal prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white text-gray-300">
                            {article.sections.map(section => (
                                <div key={section.id} id={section.id} className="scroll-mt-32">
                                    <ReactMarkdown>{section.content}</ReactMarkdown>
                                </div>
                            ))}
                        </article>

                        {/* Analysis & Summary (Accordion) */}
                        <section className="bg-white/5 border border-white/10 rounded-2xl p-2 mb-16">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="summary" className="border-b-0 px-4">
                                    <AccordionTrigger className="hover:no-underline py-4">
                                        <div className="flex items-center gap-3 text-lg font-serif">
                                            <span className="w-8 h-px bg-[#3ceba0]"></span>
                                            Resumen Ejecutivo
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="prose prose-invert prose-sm max-w-none text-gray-400 pb-6 pt-2">
                                        <ReactMarkdown>{article.summary}</ReactMarkdown>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                        <section className="bg-white/5 border border-white/10 rounded-2xl p-2 mb-16">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="guide" className="border-b-0 px-4">
                                    <AccordionTrigger className="hover:no-underline py-4">
                                        <div className="flex items-center gap-3 text-lg font-serif">
                                            <span className="w-8 h-px bg-[#2764ff]"></span>
                                            Guía de Estudio
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="prose prose-invert prose-sm max-w-none text-gray-400 pb-6 pt-2">
                                        <ReactMarkdown>{article.studyGuide}</ReactMarkdown>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                        <section className="bg-white/5 border border-white/10 rounded-2xl p-2 mb-16">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="analysis" className="border-b-0 px-4">
                                    <AccordionTrigger className="hover:no-underline py-4">
                                        <div className="flex items-center gap-3 text-lg font-serif">
                                            <span className="w-8 h-px bg-purple-500"></span>
                                            Análisis del Texto
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="prose prose-invert prose-sm max-w-none text-gray-400 pb-6 pt-2">
                                        <ReactMarkdown>{article.analysis}</ReactMarkdown>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                    </div>
                </div>

                {/* Related Posts (Bottom) */}
                <div className="max-w-5xl mx-auto border-t border-white/10 pt-16 mt-16">
                    <h3 className="text-xl font-serif text-center mb-12">Lecturas Relacionadas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((_, i) => (
                            <Link key={i} href="#">
                                <div className="group cursor-pointer">
                                    <div className="aspect-[4/3] bg-white/5 rounded-xl mb-4 overflow-hidden border border-white/5 group-hover:border-white/20 transition-all">
                                        {/* Placeholder for related image */}
                                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
                                    </div>
                                    <span className="text-[#2764ff] text-[10px] font-bold uppercase tracking-wider mb-2 block">
                                        Conferencia
                                    </span>
                                    <h4 className="text-white font-medium group-hover:text-[#2764ff] transition-colors">
                                        La Imaginación Crea la Realidad
                                    </h4>
                                    <p className="text-gray-500 text-xs mt-2">12 Mayo 1969</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
