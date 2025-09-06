
import { ReactNode } from 'react';

export interface ModuleData {
  id: string;
  title: string;
  icon: ReactNode;
  keyMessage: ReactNode;
  content: ReactNode[];
  caseApplication: {
    helper: ReactNode[];
    discussion: {
      question: string;
      subQuestion?: string;
    }[];
  };
  diagram?: ReactNode;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Reference {
  key: string;
  citation: string;
  full: string;
  url: string;
}

export interface BriefNoteRow {
  aspect: string;
  fnd: string;
  feigning: string;
}
