import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center cyan_gradient">
        Sell, Buy & Connect
        <br className="max-md:hidden" />
        <span className="cyan_gradient"> Tagline for the app</span>
        <p className="desc text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Feed />
      </h1>
    </section>
  )
}

export default Home