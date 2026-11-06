import { SongChord } from '../types';

export const WORSHIP_SONGS: SongChord[] = [
  {
    id: 'som-da-entrega',
    title: 'O Som da Entrega',
    subtitle: 'Canção de Abertura & Rendição Total',
    key: 'G',
    bpm: 72,
    timeSignature: '4/4',
    capo: 'Sem Capotraste',
    description: 'Canção tema do projeto, expressando o despir-se de todo orgulho diante do altar e a rendição sincera ao Criador.',
    chords: ['G', 'C9', 'Em7', 'D/F#', 'Am7', 'D'],
    sections: [
      {
        name: 'Verso 1',
        lines: [
          { chordLine: 'G                      C9', lyricLine: 'Não trago palmas, não trago pretensão' },
          { chordLine: 'Em7             D/F#      C9', lyricLine: 'Deponho no altar o que sobrou de mim' },
          { chordLine: 'G                    C9', lyricLine: 'No silêncio que precede o Teu falar' },
          { chordLine: 'Em7           D/F#         C9', lyricLine: 'O som da entrega começa a ecoar' },
        ],
      },
      {
        name: 'Refrão',
        lines: [
          { chordLine: 'G                     D/F#', lyricLine: 'Eis-me aqui, Senhor, rendido aos Teus pés' },
          { chordLine: 'Em7                   C9', lyricLine: 'Tudo o que tenho e tudo o que sou é Teu' },
          { chordLine: 'G                     D/F#', lyricLine: 'Mais que palavras, é fogo em meu peito' },
          { chordLine: 'Am7             D             G', lyricLine: 'O som da entrega que sobe ao céu' },
        ],
      },
      {
        name: 'Ponte',
        lines: [
          { chordLine: 'Em7             D/F#        G         C9', lyricLine: 'Que diminua eu, para que Tu cresças' },
          { chordLine: 'Em7             D/F#        G         C9', lyricLine: 'Que silencie a terra ao ouvir Tua voz' },
        ],
      },
    ],
  },
  {
    id: 'milagre-no-altar',
    title: 'Milagre no Altar',
    subtitle: 'Testemunho Vivo de Cura e Gratidão',
    key: 'D',
    bpm: 68,
    timeSignature: '4/4',
    capo: 'Capo 2ª Casa (Forma em C)',
    description: 'O testemunho poético da cura divina quando os médicos deram limites, mas Deus declarou um novo fôlego de vida.',
    chords: ['D', 'G', 'Bm', 'A', 'Em'],
    sections: [
      {
        name: 'Verso 1',
        lines: [
          { chordLine: 'D                     G', lyricLine: 'Quando o vale escureceu ao meu redor' },
          { chordLine: 'Bm                     A', lyricLine: 'E a esperança parecia se esvair' },
          { chordLine: 'D                      G', lyricLine: 'Tua mão tocou a dor da minha carne' },
          { chordLine: 'Bm             A          G', lyricLine: 'E um novo sopro começou a surgir' },
        ],
      },
      {
        name: 'Refrão',
        lines: [
          { chordLine: 'D                   A', lyricLine: 'És o Deus que cura, És o Deus fiel' },
          { chordLine: 'Bm                  G', lyricLine: 'Tiraste a minha vida do abismo' },
          { chordLine: 'D                   A', lyricLine: 'Minha voz é fruto desse Teu amor' },
          { chordLine: 'Em             G          D', lyricLine: 'Vivo para adorar o Teu santo nome' },
        ],
      },
    ],
  },
  {
    id: 'descanso-e-graca',
    title: 'Descanso e Graça',
    subtitle: 'Inspirado em Mateus 11:28-30',
    key: 'Em',
    bpm: 74,
    timeSignature: '6/8',
    capo: 'Sem Capotraste',
    description: 'Um convite suave para largar os fardos pesados da alma no descanso prometido por Jesus Cristo.',
    chords: ['Em', 'C', 'G', 'D', 'Am'],
    sections: [
      {
        name: 'Verso 1',
        lines: [
          { chordLine: 'Em                C', lyricLine: 'Cansado de tentar carregar o mundo' },
          { chordLine: 'G                  D', lyricLine: 'Ouvi Tua voz mansa a sussurrar' },
          { chordLine: 'Em                  C', lyricLine: 'Vinde a Mim, vós todos os cansados' },
          { chordLine: 'G                   D', lyricLine: 'Pois descanso Eu vos darei' },
        ],
      },
      {
        name: 'Refrão',
        lines: [
          { chordLine: 'C         G           D        Em', lyricLine: 'O Teu jugo é suave, Teu fardo é leve' },
          { chordLine: 'C         G           D', lyricLine: 'Em Teus braços encontro meu lar' },
          { chordLine: 'C         G           D        Em', lyricLine: 'Manso e humilde de coração' },
          { chordLine: 'Am        D           G', lyricLine: 'Minha alma enfim pode descansar' },
        ],
      },
    ],
  },
  {
    id: 'folego-restaurado',
    title: 'Fôlego Restaurado',
    subtitle: 'Clamor Independente de Louvor',
    key: 'C',
    bpm: 70,
    timeSignature: '4/4',
    capo: 'Sem Capotraste',
    description: 'Celebração da nova estação com arranjos dinâmicos de violão acústico e coral congregracional.',
    chords: ['C', 'F', 'Am', 'G', 'Dm'],
    sections: [
      {
        name: 'Verso 1',
        lines: [
          { chordLine: 'C                   F', lyricLine: 'Acordes e vozes se unem num só tom' },
          { chordLine: 'Am                  G', lyricLine: 'Mais de dez anos cantando a Tua paz' },
          { chordLine: 'C                    F', lyricLine: 'Não há barreiras que possam impedir' },
          { chordLine: 'Am              G         C', lyricLine: 'O mover de Deus quando a igreja cantar' },
        ],
      },
      {
        name: 'Refrão',
        lines: [
          { chordLine: 'F       C       G        Am', lyricLine: 'Fôlego novo, vida restaurada' },
          { chordLine: 'F       C             G', lyricLine: 'Graça que nunca terá fim' },
          { chordLine: 'F       C       G        Am', lyricLine: 'Da cinza fizeste um hino de glória' },
          { chordLine: 'Dm      F             C', lyricLine: 'Aleluia ao Deus que cuida de mim' },
        ],
      },
    ],
  },
];
