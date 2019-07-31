export interface CharacterConfig {
  name: string;
  assets: {
    default: string;
    [s: string]: string;
  };
}

export interface CharacterState {
  config: CharacterConfig;
  usedAsset: string;
}
