const useAuth = (): boolean => {
  let accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return false;
  if (accessToken) {
     return true;
  }

  return false;
};

export default useAuth;