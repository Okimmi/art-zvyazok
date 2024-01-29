import { Link } from "react-router-dom"
import { Content, ProfMod } from "./Modal.styled"

export const Modal = ({ active, setActive }) => {
    return active && (
      <ProfMod onClick={() => setActive(false)}>
        <Content>
          <Link className="nav-link" to="/profile">
            Редагувати профіль
          </Link>
          <p>Вийти з профілю</p>
        </Content>
      </ProfMod>
    )}