import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react";

export const useAuth = () => {
  const { setUser, user } = useUserStore();
  useEffect(() => {
    const getUser = async () => {
      fetch("http://0.0.0.0:3000")
        .then((response) => response.json())
        .then((json) => console.log(json));
    };
    user === undefined && getUser();
  }, [setUser]);

  return { user };
};
