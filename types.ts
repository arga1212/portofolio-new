
export interface Project {
  title?: string;
  name?: string;
  description: string;
  imageUrl: string;
  techStack?: string[];
  liveUrl?: string;
  repoUrl?: string;
  fullDescription?: string;
}

export interface Leadership {
  role: string;
  description: string;
  imageUrl: string;
  fullDescription?: string;
}

export interface Achievement {
  name: string;
  imageUrl: string;
  description?: string;
}

export interface Certificate {
  name: string;
  imageUrl: string;
  description?: string;
}

export interface CreativeExperience {
  title: string;
  imageUrl: string;
  description: string;
}

export interface AboutItem {
    icon: string;
    title: string;
    description: string;
}
