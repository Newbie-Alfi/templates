import { Link } from "react-router-dom";
import { ROUTE } from "../routes";

export default function SignInPage() {
  return <Link to={ROUTE.MAIN}>Вернуться на начальную страницу</Link>;
}
