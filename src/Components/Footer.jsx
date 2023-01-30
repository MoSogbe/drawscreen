import '../Styles/index.css'


const Footer = () => {
    return (
      <footer className="bg-dark fixed-bottom py-3 text-white text-center">
        Copyright &copy; {new Date().getFullYear()} Nestle Nokofio App 
      </footer>
    );
}
 
export default Footer;