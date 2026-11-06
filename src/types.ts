export interface PreSaveLead {
  id: string;
  email: string;
  platform: 'spotify' | 'apple' | 'deezer' | 'youtube';
  createdAt: string;
}

export interface ProposalFormState {
  nome: string;
  email: string;
  whatsapp: string;
  cidade: string;
  tipoProposta: string;
  dataPrevista: string;
  detalhes: string;
}

export interface SongChord {
  id: string;
  title: string;
  subtitle: string;
  key: string;
  bpm: number;
  timeSignature: string;
  capo: string;
  description: string;
  chords: string[];
  sections: {
    name: string;
    lines: {
      chordLine?: string;
      lyricLine: string;
    }[];
  }[];
}
