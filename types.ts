export interface Module {
  id: string;
  title: string;
  durationInfo: string;
  contentPoints: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  actionType?: 'openDojoModal' | string; // To identify special actions
}

export interface NavLink {
  href: string;
  label: string;
}