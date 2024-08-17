export interface AuthMainViewModel {
  link: string;
}

export const initialAuthMainViewModel = (): AuthMainViewModel => (
  {
    link: "sign in as a guest",
  }
)
