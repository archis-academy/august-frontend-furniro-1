import { Link, useLocation } from "react-router";
import './bread.scss';

const BreadCrumb = () => {
    const location = useLocation();
    const parts = location.pathname.split("/").filter(Boolean);

    const format = (text) =>
        text.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

    const crumbs = [
        { name: "Home", path: "/" },
        ...parts.map((part, i) => ({
            name: format(part),
            path: "/" + parts.slice(0, i + 1).join("/"),
        })),
    ];
    return (
        <nav className={`breadCrumb ${crumbs.length > 2 ? "three" : "two"}`}>
            {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                const divider = crumbs.length > 2 && i === crumbs.length - 2;
                return (
                    <span key={i} className="crumb">
                        {last ? (
                            <span className="current">{c.name}</span>
                        ) : (
                            <Link to={c.path} className="link">{c.name}</Link>
                        )}
                        {!last && <span><img src="../assets/icons/arrow.png" alt="" /></span>}
                        {divider && <span className="divider" />}
                    </span>
                )
            })}
        </nav>
    );
};

export default BreadCrumb