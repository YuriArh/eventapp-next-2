import { persist } from "~/shared/lib/browser";
import { CREDENTIAL_KEY } from "../lib";
import { UserCredential } from "../types";

export function useAuth() {
  const [viewer, setViewer] = persist.useLocalStorage<UserCredential | null>(
    CREDENTIAL_KEY,
    null
  );
  const isAuth = !!viewer;

  const login = (credential: UserCredential) => {
    setViewer(credential);
    window.location.href = `/${credential.username}`;
  };
  // FIXME: prohibit access?
  const logout = () => {
    setViewer(null);
  };

  return { isAuth, viewer, login, logout };
}
