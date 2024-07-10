interface FooterProps {}

import { Link } from "react-router-dom"
interface FooterProps { }


const Footer: React.FC<FooterProps> = () => {
  return (
    <main>
      <footer className="flex flex-col space-y-5 justify-center m-10 px-auto py-10  rounded-2xl ">

        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-3xl text-rose-400">fuddie.</h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-rose-400 font-bold">Download</div>
            <Link className="my-3 block hover:text-cyan-400" to="/#">
              Documentation
            </Link>
            <Link className="my-3 block hover:text-cyan-400" to="/#">
              Tutorials
            </Link>
            <Link className="my-3 block hover:text-cyan-400" to="/#">
              Support
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-rose-400 font-bold">Support</div>
            <Link className="my-3 block hover:text-cyan-400" to="/#">
              Help Center
            </Link>
            <Link className="my-3 block hover:text-cyan-400" to="/#">
              Privacy Policy
            </Link>
            <Link className="my-3 block hover:text-cyan-400" to="/#">
              Conditions
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-rose-400 font-bold">Contact us</div>
            <Link className="my-3 block" to="/#">
              Bug_Busters , Burdwan, West Bengal-713104
            </Link>
            <Link className="my-3 block" to="/#">
              officialfuddie@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-5">
        <Link to={'https://facebook.com'}>
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
          </Link>

          <Link to={'https://facebook.com'}>
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" /></Link>


         <Link to={'https://www.instagram.com/fuddieofficial/'}>
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
          </Link>

          <Link to={'https://facebook.com'}>
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
          </Link>

           <Link to={'https://x.com/fuddieofficial'}>
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
          </Link>
        </div>

        <p className="text-center text-gray-700 font-medium">&copy; 2024 Bug_Busters Ltd , All rights reserved.</p>
      </footer>


    </main>
  );
};

export default Footer;
