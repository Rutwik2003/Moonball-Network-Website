interface Player {
  uuid: string;
  name_raw: string;
  name_clean: string;
  name_html: string;
}

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
    list?: Player[];
  };
}

interface Command {
  command: string;
  description: string;
  permission?: string;
}

interface Plugin {
  name: string;
  description: string;
  commands: Command[];
  category: string;
  icon: React.ReactNode;
}

export type { ServerStatus, Command, Plugin, Player };