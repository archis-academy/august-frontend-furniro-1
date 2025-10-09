import { Link, useLocation } from "react-router";
import './bread.scss';

const BreadCrumb = ({ rightLabel }) => {
    const location = useLocation();
    const parts = location.pathname.split("/").filter(Boolean);

    const format = (text) =>
        text.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

    const visibleParts = rightLabel ? parts.slice(0, -1) : parts;

    const crumbs = [
        { name: "Home", path: "/" },
        ...visibleParts.map((part, i) => ({
            name: format(part),
            path: "/" + parts.slice(0, i + 1).join("/"),
        })),
    ];
    return (
        <nav className="breadCrumb">
            {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                    <span key={c.path}>
                        {last ? (
                            <span className="current">{c.name}</span>
                        ) : (
                            <Link to={c.path} className="link">{c.name}</Link>
                        )}
                        {!last && <span><img src="../icons/arrow.png" alt="" /></span>}
                    </span>
                )
            })}
            {rightLabel && (
                <>
                    <span><img src="../icons/arrow.png" alt="" /></span>
                    <span className="divider" />
                    <span className="current">{rightLabel}</span>
                </>
            )}
        </nav>
    );
};

export default BreadCrumb