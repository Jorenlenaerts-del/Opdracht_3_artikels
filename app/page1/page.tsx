export default function Page1() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">

      {/* Rubriek */}
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
        De Helpdesk
      </span>

      {/* Titel */}
      <h1 className="text-3xl font-bold leading-tight text-gray-900">
        Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
      </h1>

      {/* Lead */}
      <p className="text-lg font-medium text-gray-700 border-l-4 border-blue-500 pl-4">
        Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch
        niet helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website
        op maat. Of liever: AI maakt die voor je.
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span className="font-semibold text-gray-800">Dominique Deckmyn</span>
        <span>·</span>
        <span>23 januari 2026</span>
        <span>·</span>
        <span>8 min lezen</span>
      </div>

<div className="flex items-center gap-3 flex-wrap">
{<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  Voorlezen
</button>}
  {<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
  Delen
</button>}
  {<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-300 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
  Bewaren
</button>}
</div>

      {/* Intro */}
      <p className="text-base text-gray-700 leading-relaxed">
        Het is nog maar januari, maar &apos;vibecoding&apos;, ofwel coderen met AI, maakt al een goede
        kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te
        bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen
        in een stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste versies van
        Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder
        noemenswaardige voorkennis aan zou kunnen beginnen.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Maar is dat zo? Wel: ja en nee. Ja: een simpel programma, zoals een spelletje dat je
        in je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen
        maar een prompt. Denk aan &quot;maak een spel waarbij je cocktails moet mixen&quot;. Al helpt
        het wel om eerst een paar handigheidjes te leren, wat we hieronder zullen doen.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Wil je iets ambitieuzers ontwikkelen, dan moet je wel een beetje weten waar je mee
        bezig bent. Je hoeft niet te kunnen programmeren, je hoeft zelfs geen programmacode
        te kunnen lezen — wel moet je nadenken over wat je precies wilt bouwen en welke
        componenten daarvoor nodig zijn. Maar hier is het goede nieuws: je kunt klein beginnen
        en heel snel je grenzen verleggen.
      </p>

      {/* Sectie 1 */}
      <h2 className="text-xl font-semibold text-gray-900 mt-10">Een eenvoudig spel</h2>

      <p className="text-base text-gray-700 leading-relaxed">
        Open een chatbot naar keuze: Gemini, ChatGPT, Copilot, Claude. De gratis versie
        volstaat. En vraag om een simpel spel. Ik probeerde bijvoorbeeld:{" "}
        <em>&quot;Schrijf een spel waarbij een dinosaurus een bal moet koppen.&quot;</em>
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren
        dan een hoop code in een combinatie van HTML en Javascript. Wat doe je met die code?
        Die bewaar je in een document met de extensie{" "}
        <code className="bg-gray-100 px-1 rounded font-mono text-sm">.html</code>,
        bijvoorbeeld <code className="bg-gray-100 px-1 rounded font-mono text-sm">Mijnspelletje.html</code>.
      </p>

      {/* Stappen */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-3">
        <p className="font-semibold text-gray-800 mb-2">Op een Windows-pc:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Klik op de code die de chatbot genereerde (meestal op het &apos;copy&apos;-knopje)</li>
          <li>Plak de code in Windows Kladblok of Macintosh TextEdit</li>
          <li>Bewaar het bestand met een naam als <code className="bg-gray-100 px-1 rounded font-mono text-sm">dinospel.html</code></li>
          <li>Klik op <code className="bg-gray-100 px-1 rounded font-mono text-sm">dinospel.html</code></li>
          <li>Het spel opent in je standaardbrowser. En spelen maar!</li>
        </ol>
      </div>

      <p className="text-base text-gray-700 leading-relaxed">
        Let op bij Microsoft Kladblok: het programma heeft de neiging om elk document te
        bewaren met de extensie <code className="bg-gray-100 px-1 rounded font-mono text-sm">.txt</code>.
        Hou dus in de gaten dat hij er niet stiekem{" "}
        <code className="bg-gray-100 px-1 rounded font-mono text-sm">dinospel.html.txt</code> van heeft gemaakt.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Lukt dat allemaal elke keer? Nee, maar meestal wel. Soms begrijpt de chatbot je
        verkeerd, en moet je wat meer preciseren. Je kunt ook aanwijzingen geven over de
        visuele stijl, de bediening of het spelverloop. Vaak zit de eerste versie niet helemaal
        goed — dan doe je gewoon een tweede ronde met aanpassingen.
      </p>

      {/* Sectie 2 */}
      <h2 className="text-xl font-semibold text-gray-900 mt-10">Ambitieuzer: een gezinskalender</h2>

      <p className="text-base text-gray-700 leading-relaxed">
        Na een tijdje durfde ik iets meer complexe apps aan. Voor apps met meer tekst of
        cijfers kom je eerder bij Python uit. Maar voor mijn Gezinskalender gebruikte ik toch
        Javascript. Het moest een app worden voor alle leden van een gezin — eentje waarin
        ze elkaars activiteiten zien en kunnen zien wie het zoontje op dinsdagavond naar de
        voetbaltraining moet brengen.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        De tabel met alle activiteiten moest centraal worden bewaard. ChatGPT suggereerde
        Supabase als cloud-database. Om iedereen toegang te geven tot dezelfde versie,
        hostte ik het op Vercel. Op beide sites maakte ik gratis accounts aan — zonder ook
        maar iets te hoeven leren over die tools zelf.
      </p>

      {/* Citaat */}
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
        &quot;Met al dat knippen en plakken was ik zo al snel drie uur bezig. Het resultaat: een
        werkende app, maar wel een die er nogal belabberd uitzag.&quot;
      </blockquote>

      {/* Sectie 3 */}
      <h2 className="text-xl font-semibold text-gray-900 mt-10">Echt agentic werken</h2>

      <p className="text-base text-gray-700 leading-relaxed">
        Wie verder wil gaan zonder zelf te programmeren, moet &apos;agentic&apos; gaan werken: met een
        AI-systeem dat zelfstandig je programmabestanden kan zien en wijzigen. Dan gaat
        alles veel sneller. Ik opteerde voor ChatGPT Codex (vereist ChatGPT Plus, 23 euro/maand).
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Er zijn ook gespecialiseerde vibecoding-tools zoals Cursor, Replit en Lovable. Die
        werken minstens even goed, maar je slaagt er doorgaans niet in om een app volledig
        af te werken met de gratis versie.
      </p>

      {/* Sectie 4 */}
      <h2 className="text-xl font-semibold text-gray-900 mt-10">Voorkennis</h2>

      <p className="text-base text-gray-700 leading-relaxed">
        Met Codex, VS Code en Github — soms gecombineerd met Supabase en Vercel — kun
        je haast alles bouwen. Letterlijk zonder een lijn code te schrijven of te lezen. Hoe
        groot je voorkennis is, maakt een verschil, maar mensen zonder enige
        programmeerkennis slagen erin om gelijkaardige apps te vibecoden.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Agentic programmeren evolueert momenteel razendsnel. Wat zes maanden geleden
        uren werk kostte, komt nu in één keer uit ChatGPT gerold.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
        {["Inspiratie", "De Helpdesk", "Vibecoding", "AI"].map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}