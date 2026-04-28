export default function Page2() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">

      <img src="/images/foto_katten_AI-slop.jpg" alt="katten met AI-slop" className="w-full object-cover" />

      {/* Rubriek */}
      <span className="text-xs font-semibold uppercase tracking-widest text-green-600">
        De Technocraat
      </span>

      {/* Titel */}
      <h1 className="text-3xl font-bold leading-tight text-gray-900">
        Leidt AI-slop tot de dood van sociale media?
      </h1>

      {/* Lead */}
      <p className="text-lg font-medium text-gray-700 border-l-4 border-green-500 pl-4">
        Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop:
        video&apos;s met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan.
        Blijven we daar in 2026 naar kijken?
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span className="font-semibold text-gray-800">Dominique Deckmyn</span>
        <span>·</span>
        <span>2 januari 2026</span>
        <span>·</span>
        <span>4 min lezen</span>
      </div>

<div className="flex items-center gap-3 flex-wrap">
  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  Voorlezen
</button>
  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
  Delen
</button>
  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 text-sm font-medium text-green-700 hover:bg-green-50 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
  Bewaren
</button>
      </div>

      {/* Bodytekst */}
      <p className="text-base text-gray-700 leading-relaxed">
        De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen,
        zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een
        realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is:
        willen we daarnaar blijven kijken?
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de
        enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes
        die bedrijven als Meta, Google en Bytedance (TikTok) voor ons maken, dus. Als je op
        YouTube een nieuwe account aanmaakt, dan is 20 procent van de video&apos;s die je worden
        aangeboden van AI afkomstig.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent
        een nieuw tijdperk in sociale media. Tijdens het eerste tijdperk deelden we ons eigen
        leven op Facebook en Instagram. Maar al snel bleek dat we ons liever vergapen aan de
        levens van celebrity&apos;s en influencers — tijdperk twee. En nu komt er een stortvloed van
        AI-video&apos;s aan.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel
        wezen: hoe meer AI in onze feed, hoe minder video&apos;s we bekijken van professionele makers
        en van onze eigen vrienden. Nochtans hadden sociale media echt wel een bestaansreden,
        namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen. Zijn we in 2026
        dan zo veranderd?
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes
        die ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar
        zonder enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo&apos;s,
        onmogelijke stunts, spectaculaire taarten of gewelddadige pranks — of wat ook je ding
        mag zijn.
      </p>

      {/* Citaat */}
      <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
        &quot;Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd.
        Maar Zuckerberg gaat ervan uit dat dat er niet toe doet.&quot;
      </blockquote>

      <p className="text-base text-gray-700 leading-relaxed">
        Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor
        AI-slop: vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik
        &apos;m weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de
        voornaamste auteur was.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        De eerste paar weken was AI-video nieuw en verrassend, dat wel. Er is heus wel een
        plaats voor AI-video, bijvoorbeeld om speciale effecten te produceren in films. En er zijn
        creatieve mensen die toffe, vaak heel grappige video&apos;s maken die zonder AI onbetaalbaar
        duur zouden zijn.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Maar horen ze thuis op Instagram en Facebook? Dat waren toch &apos;sociale&apos; media, nietwaar?
        Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een
        computer gegenereerde video&apos;s, aanbevolen door een algoritme? In die zin zien we nu de
        dood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.
      </p>

      {/* Outro */}
      <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
        Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast &apos;Bits &amp; atomen&apos;.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
        {["Cultuur en media", "De Technocraat", "Artificiële intelligentie", "Mark Zuckerberg"].map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}