import Image from 'next/image';
import SignInTopSection from '@components/SignInTopSection';


const SignIn = () => {
  return (
    
<section className="bg-inherit dark:bg-inherit">
    {/* START Entire Page Level Div */}
    <div className="py-8 px-4 lg:py-16">

        {/* START AboutTopSection Div */}
          <SignInTopSection />
        {/* END AboutTopSection Div */}


    </div>
    {/* END Entire Page Level Div */}
    
</section>

  )
}

export default SignIn