import {useRouter} from "next/navigation";

const useNavigate = () => {
  const router = useRouter();
  
  const navigate = (path: string) => {
    router.push(path, {shallow: true});
  };
  
  return navigate;
};

export default useNavigate;