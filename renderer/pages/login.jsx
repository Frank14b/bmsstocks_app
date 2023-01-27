import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from '../src/components/LoginComponent';
import { useRouter } from 'next/router';
import LoadingComponent from '../src/layouts/LoadingComponent';

function LoginPage() {

  const [canDisplay, setCanDisplay] = useState(false)
  const router = useRouter()
  useEffect(() => {
    // 
    if (Utils.getLocalStorage("token")) {
      router.push("/home")
    } else {
      setCanDisplay(true)
    }
  }, [])

  return (
    <React.Fragment>

      {
        (canDisplay) ? (
          <LoginComponent></LoginComponent>
        ) : (
          <LoadingComponent></LoadingComponent>
        )
      }

    </React.Fragment>
  );
};

export default LoginPage;