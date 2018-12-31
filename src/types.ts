export type RequestMetadata = {
  user: string
};

export type AsyncIterator<T> = {
  next(): Promise<{ value: T, done: boolean }>
}

export type GraphSONV2 = {
  id: string,
  label: string,
  properties?: {}
}

export type RemoteConnectionOptions = {
  mimeType?: string
}
