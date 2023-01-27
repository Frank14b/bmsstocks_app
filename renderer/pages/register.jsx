import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterComponent from '../src/components/RegisterComponent';
import LoadingComponent from '../src/layouts/LoadingComponent';
import { useRouter } from 'next/router';

function RegisterPage() {

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
          <RegisterComponent></RegisterComponent>
        ) : (
          <LoadingComponent></LoadingComponent>
        )
      }

    </React.Fragment>
  );
};

export default RegisterPage;