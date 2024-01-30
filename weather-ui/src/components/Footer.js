const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize">
				<br /><br /><br /><br />
				Weather App &copy; {year}
			</footer>
		</>
	);
};

export default Footer;