import { Link, useNavigate } from "react-router-dom";

function Header(props) {
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		const searchValue = event.target[0].value;
		props.onSubmit(searchValue);
		event.target[0].value = "";
		navigate("/");
	}

	return (
		<header className="Header">
			<h1>
				<Link to={"/"}>DNC Movie List</Link>{" "}
			</h1>
			e
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Pesquise por filmes" />
			</form>
		</header>
	);
}

export default Header;
